/**
 * Ingest framework — platform adapters + creator registry.
 *
 * Layout
 *   src/lib/ingest/feeds.ts      low-level RSS/Atom/Twitter fetch + parse
 *   src/lib/ingest/platforms.ts  one adapter per platform (twitter|substack|youtube|podcast)
 *   src/lib/ingest/run.ts        orchestrate a creator across platforms
 *   src/lib/ingest/types.ts      IngestCreator / PlatformSource shapes
 *   src/data/creators/registry.ts  add creators here
 *
 * Add a creator
 *   1. Append to ingestRegistry with profile + platforms[]
 *   2. npm run ingest -- <slug>
 *
 * Required fields per platform
 *   twitter   handle
 *   substack  publicationUrl
 *   youtube   channelId (UC…)  → feeds/videos.xml?channel_id=
 *   podcast   rssUrl
 *
 * Continuous monitoring (Supabase Edge Function)
 *   Yes — feasible. Typical shape:
 *   - pg_cron / Supabase scheduled function every N minutes
 *   - Edge Function loads creators from a `creators` / `creator_sources` table
 *   - Calls the same platform adapters (Deno-compatible fetch + XML parse)
 *   - Upserts into `content_items` keyed by (source, url) or stable slug
 *   Caveats:
 *   - Substack / YouTube / podcast RSS are Edge-friendly
 *   - Twitter via Jina is fragile; prefer X API + secret for production
 *   - Edge wall-clock limits (~150s) → batch creators or fan-out per creator
 *   - Store channelId / rssUrl in DB so adding a creator is a row, not a deploy
 */

export { platforms, fetchPlatform, defaultLimit } from "./platforms";
export { ingestCreator, ingestCreators, withLinkedSources } from "./run";
export type {
  IngestCreator,
  IngestedContent,
  IngestResult,
  PlatformFetchResult,
  PlatformSource,
} from "./types";
