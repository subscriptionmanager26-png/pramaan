/**
 * Sync advisor Twitter / Substack sources into af_sources.
 *
 * Twitter: all primary X handles from `src/data/sebi-registered-entities.csv`
 * (661 unique handles; deduped by handle for ingest). Substack: from sebi-advisors.json.
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/af-sync-sources.ts
 */
import { loadAfEnv } from "../src/lib/af/env";
loadAfEnv();

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getAfSupabase } from "../src/lib/af/supabase";
import {
  loadSebiEntitiesCsv,
  normalizeTwitterHandle,
  primaryTwitterUrlFromParts,
  slugifyEntityName,
} from "../src/lib/af/sebi-entities-csv";
import { canonicalSubstackUrl, canonicalTwitterUrl } from "../src/lib/af/urls";

type AdvisorRow = {
  id: string;
  slug: string;
  name: string;
  registration: string;
  twitter: string | null;
  substack: string | null;
};

type SourceRow = {
  advisor_id: string;
  advisor_slug: string;
  advisor_name: string;
  platform: "twitter" | "substack";
  handle_or_url: string;
  canonical_url: string;
  active: boolean;
  updated_at: string;
};

function buildTwitterSourcesFromCsv(advisors: AdvisorRow[]): {
  rows: SourceRow[];
  uniqueHandles: number;
  csvRowsWithX: number;
} {
  const advisorByReg = new Map<string, AdvisorRow>();
  for (const a of advisors) {
    if (a.registration) advisorByReg.set(a.registration.trim().toUpperCase(), a);
  }

  const byHandle = new Map<string, SourceRow>();
  let csvRowsWithX = 0;

  for (const csv of loadSebiEntitiesCsv()) {
    const twitterUrl = primaryTwitterUrlFromParts(csv.twitterUrl, csv.twitterHandle);
    if (!twitterUrl) continue;
    csvRowsWithX += 1;
    const handle = normalizeTwitterHandle(twitterUrl);
    if (!handle) continue;

    const linked = csv.registration
      ? advisorByReg.get(csv.registration.toUpperCase())
      : undefined;

    const candidate: SourceRow = {
      advisor_id: linked?.id ?? csv.rowId,
      advisor_slug: linked?.slug ?? slugifyEntityName(csv.name, csv.rowId),
      advisor_name: linked?.name ?? csv.name,
      platform: "twitter",
      handle_or_url: `@${handle}`,
      canonical_url: canonicalTwitterUrl(handle),
      active: true,
      updated_at: new Date().toISOString(),
    };

    const existing = byHandle.get(handle);
    if (!existing) {
      byHandle.set(handle, candidate);
      continue;
    }
    // Prefer a row tied to sebi-advisors.json over CSV-only (e.g. AMC).
    const existingLinked = advisors.some((a) => a.id === existing.advisor_id);
    const candidateLinked = Boolean(linked);
    if (!existingLinked && candidateLinked) {
      byHandle.set(handle, candidate);
    }
  }

  return {
    rows: [...byHandle.values()],
    uniqueHandles: byHandle.size,
    csvRowsWithX,
  };
}

async function main() {
  const advisors = JSON.parse(
    readFileSync(join(process.cwd(), "src/data/sebi-advisors.json"), "utf8"),
  ) as AdvisorRow[];

  const rows: SourceRow[] = [];
  const { rows: twitterRows, uniqueHandles, csvRowsWithX } =
    buildTwitterSourcesFromCsv(advisors);
  rows.push(...twitterRows);

  for (const a of advisors) {
    if (a.substack) {
      try {
        const canonical = canonicalSubstackUrl(a.substack);
        if (canonical.toLowerCase().includes("substack.com")) {
          rows.push({
            advisor_id: a.id,
            advisor_slug: a.slug,
            advisor_name: a.name,
            platform: "substack",
            handle_or_url: a.substack,
            canonical_url: canonical,
            active: true,
            updated_at: new Date().toISOString(),
          });
        }
      } catch {
        // skip invalid
      }
    }
  }

  const supabase = getAfSupabase();

  const twitterByUrl = new Map<string, SourceRow>();
  for (const row of twitterRows) {
    twitterByUrl.set(row.canonical_url.toLowerCase(), row);
  }

  const { data: existingTwitter, error: listErr } = await supabase
    .from("af_sources")
    .select("id,advisor_id,canonical_url")
    .eq("platform", "twitter")
    .eq("active", true);
  if (listErr) throw listErr;

  const staleIds: string[] = [];
  for (const ex of existingTwitter ?? []) {
    const url = String(ex.canonical_url).toLowerCase();
    const want = twitterByUrl.get(url);
    if (!want || want.advisor_id !== ex.advisor_id) {
      staleIds.push(ex.id as string);
    }
  }
  if (staleIds.length) {
    const { error: offErr } = await supabase
      .from("af_sources")
      .update({ active: false, updated_at: new Date().toISOString() })
      .in("id", staleIds);
    if (offErr) throw offErr;
    console.log(`deactivated stale twitter sources: ${staleIds.length}`);
  }

  const chunk = 200;
  let upserted = 0;
  for (let i = 0; i < rows.length; i += chunk) {
    const slice = rows.slice(i, i + chunk);
    const { error } = await supabase.from("af_sources").upsert(slice, {
      onConflict: "advisor_id,platform",
    });
    if (error) throw error;
    upserted += slice.length;
    console.log(`upserted ${upserted}/${rows.length}`);
  }

  console.log(
    JSON.stringify(
      {
        advisors: advisors.length,
        csvRowsWithPrimaryX: csvRowsWithX,
        twitterSourcesUniqueHandles: uniqueHandles,
        staleTwitterDeactivated: staleIds.length,
        sources: rows.length,
        twitter: rows.filter((r) => r.platform === "twitter").length,
        substack: rows.filter((r) => r.platform === "substack").length,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
