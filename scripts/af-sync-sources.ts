/**
 * Sync advisor Twitter / Substack sources into af_sources.
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/af-sync-sources.ts
 */
import { loadAfEnv } from "../src/lib/af/env";
loadAfEnv();

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getAfSupabase } from "../src/lib/af/supabase";
import {
  canonicalSubstackUrl,
  canonicalTwitterUrl,
  twitterHandleFromUrl,
} from "../src/lib/af/urls";

type AdvisorRow = {
  id: string;
  slug: string;
  name: string;
  twitter: string | null;
  substack: string | null;
};

async function main() {
  const advisors = JSON.parse(
    readFileSync(join(process.cwd(), "src/data/sebi-advisors.json"), "utf8"),
  ) as AdvisorRow[];

  const rows: {
    advisor_id: string;
    advisor_slug: string;
    advisor_name: string;
    platform: "twitter" | "substack";
    handle_or_url: string;
    canonical_url: string;
    active: boolean;
    updated_at: string;
  }[] = [];

  for (const a of advisors) {
    if (a.twitter) {
      const handle = twitterHandleFromUrl(a.twitter);
      if (handle) {
        rows.push({
          advisor_id: a.id,
          advisor_slug: a.slug,
          advisor_name: a.name,
          platform: "twitter",
          handle_or_url: `@${handle}`,
          canonical_url: canonicalTwitterUrl(handle),
          active: true,
          updated_at: new Date().toISOString(),
        });
      }
    }
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
