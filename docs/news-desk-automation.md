# News desk automation (operations)

## Goal

Every **6 hours**, the **News desk** Cursor agent:

1. Reads **inspiration + facts** from three Supabase streams (Twitter, Substack, market news).
2. Writes **0–5** Finimize-shaped desk notes when stories clear the bar.
3. Adds hero images and **pushes to `main`** so **Vercel** updates https://pramaan.pocketedge.in/ (`/news`).

**Ingest is separate.** Twitter/Substack collection is handled by the existing advisor-feed automation (`npm run af:ingest` → `af_*` tables). The desk agent **consumes** that data; it does not replace ingest.

## Schedule

- **Cron:** `0 */6 * * *` (UTC) — align the desk agent with this.
- **Window:** last **6–12 hours** of items (default **12h** if last run time is unknown).

## Three information sources (inspiration + grounding)

Use all three each run. They suggest **what matters**; the agent may add context from public facts when writing the note. Do not copy full third-party posts onto Pramaan (aggregation rules: outbound / preview scale only in product; desk notes are **original briefs** inspired by the wire).

| Source | Supabase (project `india-market-news`) | What to scan |
|--------|----------------------------------------|--------------|
| **News** | `mn_news_items`, `mn_news_ai_summaries` | Headlines, summaries, AI bullets since window start |
| **Twitter** | `af_content_items` (`platform = 'twitter'`), `af_content_bodies` | Advisor tweets: title, summary, body_text; exclude retweets |
| **Substack** | `af_content_items` (`platform = 'substack'`), `af_content_bodies` | Posts: title, summary, body_text |

Filter advisor content by `published_at` or `first_seen_at` ≥ window start (same pattern as `scripts/af-ingest.ts`).

**Credentials:** `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (Cloud Agent / automation secrets for project `india-market-news`).

## Write + ship (production)

Follow [`desk-brief.md`](./desk-brief.md) for quality, shape, tone, and heroes ([`desk-hero-prompts.md`](./desk-hero-prompts.md)).

1. Select stories → append to `src/lib/desk-notes.ts` (newest first); keep `deskTopics` in sync.
2. `public/desk/{slug}.jpg` + `deskHeroImage(slug)` per note.
3. `npm run build` must pass.
4. **Commit on `main` and `git push origin main`** (production deploy via Vercel).
5. If **zero** notes ship: do not push junk; leave a short run summary with 2–3 rejected candidates and why.

Desk notes render at **`/news`** and **`/news/[slug]`** only — not Research.

## Cursor automation template (paste into agent instructions)

Use this as the automation system prompt body; keep cron at 6 hours.

```
You are the Pramaan news desk. Follow docs/desk-brief.md and .cursor/rules/desk.mdc.

Schedule context: 6-hour run. Read docs/news-desk-automation.md for data sources.

Sources (inspiration + facts, last 6–12h):
- mn_news_items + mn_news_ai_summaries
- af_content_items + af_content_bodies (twitter)
- af_content_items + af_content_bodies (substack)

Pick 0–5 stories. Write desk notes. Generate heroes. npm run build.
Push to main for production (do not leave changes on a branch only).
If nothing ships, report rejects only — no empty commit.
```

## Related commands (humans / other automations)

```bash
npm run af:ingest    # Twitter + Substack → Supabase (run on its own schedule)
npm run build        # verify before push
```
