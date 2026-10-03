/**
 * Ingest latest public work for creators in the registry.
 *
 *   npm run ingest              # all registered creators
 *   npm run ingest -- deepak-shenoy
 *
 * Add creators in src/data/creators/registry.ts — platform adapters live in
 * src/lib/ingest/platforms.ts (twitter / substack / youtube / podcast).
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ingestRegistry, getIngestCreator } from "../src/data/creators/registry";
import { ingestCreator } from "../src/lib/ingest/run";

async function main() {
  const only = process.argv[2];
  const targets = only
    ? [getIngestCreator(only)].filter(Boolean)
    : ingestRegistry;

  if (!targets.length) {
    console.error(only ? `No creator "${only}" in registry.` : "Registry is empty.");
    process.exit(1);
  }

  const outDir = join(process.cwd(), "src/data/ingested");
  mkdirSync(outDir, { recursive: true });

  for (const entry of targets) {
    if (!entry) continue;
    console.log(`\n→ ${entry.profile.name} (${entry.profile.slug})`);
    const result = await ingestCreator(entry);

    for (const p of result.platforms) {
      if (p.error) console.warn(`  ${p.kind}: FAIL ${p.error}`);
      else console.log(`  ${p.kind}: ${p.items.length} items`);
    }

    const outPath = join(outDir, `${entry.profile.slug}.json`);
    writeFileSync(
      outPath,
      JSON.stringify(
        {
          fetchedAt: result.fetchedAt,
          notes: result.notes ?? {},
          creator: result.creator,
          content: result.content,
        },
        null,
        2,
      ),
    );

    const counts = result.content.reduce<Record<string, number>>((acc, c) => {
      acc[c.source] = (acc[c.source] ?? 0) + 1;
      return acc;
    }, {});
    console.log(
      `  wrote ${result.content.length} → ${outPath} (${Object.entries(counts)
        .map(([k, v]) => `${k}:${v}`)
        .join("  ")})`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
