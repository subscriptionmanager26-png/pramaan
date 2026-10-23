# Advisor feed ingest (Twitter / Substack)

Production ingest: `npm run af:ingest` → Supabase `af_*` tables (project `india-market-news`).

## Twitter timeline sources (in order)

`fetchTwitterTimeline` in `src/lib/ingest/feeds.ts` tries:

1. **X guest GraphQL** (fast, no credentials; often rate-limited or empty)
2. **twitter-viewer.com**
3. **Cloudflare Browser Rendering** — syndication embed  
   `https://syndication.twitter.com/srv/timeline-profile/screen-name/{handle}`  
   Renders the public embed timeline (no login, no Turnstile). **Recommended for automation.**
4. **twitterviewer.net** — only if `TWITTERVIEWER_NET_ANTI_BOT` is set (short-lived Turnstile token; dev fallback)

## Cloudflare Browser Rendering (month-stable automation)

Set these in Cloud Agent / CI secrets (not in git):

| Variable | Description |
|----------|-------------|
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `CLOUDFLARE_API_TOKEN` | API token with **Browser Rendering** (or **Browser Run**) **Edit** |

Optional tuning:

| Variable | Default | Purpose |
|----------|---------|---------|
| `CF_BROWSER_MIN_INTERVAL_MS` | `2500` | Min delay between Browser Rendering API calls (rate limits) |
| `CF_BROWSER_WAIT_MS` | `12000` | `waitForTimeout` for syndication page load |

**Credentials last months**; each ingest run fetches fresh HTML. You do **not** store Turnstile tokens.

Watch **Browser Rendering billing / daily quotas** on Cloudflare (~400 advisors × 6 posts × cron frequency).

## Supabase (required for `af:ingest`)

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key |

## Related scripts

- `npm run af:sync-sources` — sync `sebi-advisors.json` → `af_sources`
- `npm run feed-monitor:test` — smoke-test a sample of advisors locally
