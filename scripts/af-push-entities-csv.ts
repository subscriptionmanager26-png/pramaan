/**
 * Refresh the local SEBI entities CSV, upload to Supabase Storage, and upsert row snapshots.
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/af-push-entities-csv.ts
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadAfEnv } from "../src/lib/af/env";
loadAfEnv();

import {
  defaultSebiEntitiesCsvPath,
  loadSebiEntitiesCsv,
  normalizeTwitterHandle,
  primaryTwitterUrlFromParts,
} from "../src/lib/af/sebi-entities-csv";
import { getAfSupabase } from "../src/lib/af/supabase";

const BUCKET = "af-data";
const LATEST_OBJECT = "sebi/sebi-registered-entities.csv";

async function ensureBucket(supabase: ReturnType<typeof getAfSupabase>) {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) throw error;
  if (buckets?.some((b) => b.name === BUCKET)) return;
  const { error: createErr } = await supabase.storage.createBucket(BUCKET, {
    public: false,
    fileSizeLimit: 15 * 1024 * 1024,
  });
  if (createErr && !/already exists/i.test(createErr.message)) throw createErr;
}

function buildEntityRows() {
  const rows = loadSebiEntitiesCsv();
  const now = new Date().toISOString();
  return rows.map((r) => {
    const twitterUrl = primaryTwitterUrlFromParts(r.twitterUrl, r.twitterHandle);
    const twitterHandle = twitterUrl ? normalizeTwitterHandle(twitterUrl) : null;
    return {
      row_id: r.rowId,
      registration: r.registration || null,
      category: r.category || null,
      entity_type: r.entityType || null,
      name: r.name,
      twitter_handle: twitterHandle ? `@${twitterHandle}` : null,
      twitter_url: twitterUrl,
      substack_url: r.substackUrl?.trim() || null,
      updated_at: now,
    };
  });
}

async function main() {
  // Regenerate CSV on disk from merged advisor social fields.
  const { execSync } = await import("node:child_process");
  execSync("npx tsx scripts/af-refresh-entities-csv.ts", {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  const csvPath = defaultSebiEntitiesCsvPath();
  const csvBytes = readFileSync(csvPath);
  const sha256 = createHash("sha256").update(csvBytes).digest("hex");
  const stamped = new Date().toISOString().replace(/[:.]/g, "-");
  const archiveObject = `sebi/sebi-registered-entities-${stamped}.csv`;

  const supabase = getAfSupabase();
  await ensureBucket(supabase);

  for (const [path, upsert] of [
    [LATEST_OBJECT, true],
    [archiveObject, false],
  ] as const) {
    const { error } = await supabase.storage.from(BUCKET).upload(path, csvBytes, {
      contentType: "text/csv",
      upsert,
    });
    if (error) throw error;
  }

  const entityRows = buildEntityRows();
  let tableRowsUpserted = 0;
  let tableError: string | null = null;
  const chunk = 200;
  for (let i = 0; i < entityRows.length; i += chunk) {
    const slice = entityRows.slice(i, i + chunk);
    const { error } = await supabase.from("af_sebi_entities").upsert(slice, {
      onConflict: "row_id",
    });
    if (error) {
      tableError = error.message;
      break;
    }
    tableRowsUpserted += slice.length;
  }

  const uniqueTwitter = new Set(
    entityRows.map((r) => r.twitter_url).filter(Boolean) as string[],
  );

  const { error: runErr } = await supabase.from("af_ingest_runs").insert({
    status: "ok",
    finished_at: new Date().toISOString(),
    meta: {
      kind: "sebi_csv_push",
      bucket: BUCKET,
      latestObject: LATEST_OBJECT,
      archiveObject,
      sha256,
      bytes: csvBytes.length,
      rows: entityRows.length,
      uniqueTwitterHandles: uniqueTwitter.size,
      tableRowsUpserted,
      tableError,
    },
  });
  if (runErr) console.warn("af_ingest_runs log:", runErr.message);

  console.log(
    JSON.stringify(
      {
        bucket: BUCKET,
        latestObject: LATEST_OBJECT,
        archiveObject,
        bytes: csvBytes.length,
        sha256,
        csvRows: entityRows.length,
        uniqueTwitterHandles: uniqueTwitter.size,
        af_sebi_entities: tableError
          ? { ok: false, error: tableError, rowsUpserted: tableRowsUpserted }
          : { ok: true, rowsUpserted: tableRowsUpserted },
      },
      null,
      2,
    ),
  );

  if (tableError) {
    console.warn(
      "Row upsert skipped or partial — apply docs/supabase/af_sebi_entities.sql in Supabase SQL editor, then re-run.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
