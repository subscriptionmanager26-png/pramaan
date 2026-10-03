# Pramaan

A discovery site for **SEBI-registered** finance creators and advisers.

People do not publish here. Pramaan aggregates public work from **Twitter, Substack, YouTube, and podcasts**. Events are listed here; sign-up and attendance always happen on the host’s page.

## Navigation

- **Home** — suggested feed of content and events
- **Discover** — topics, creators, and filterable indexed work
- **News** — chronological stream by day
- **Portfolio** — mock followed voices (until accounts exist)

## Real content ingest

```bash
npm run ingest              # all creators in the registry
npm run ingest -- deepak-shenoy
```

**Framework** (add creators later without rewriting parsers):

| Piece | Role |
|---|---|
| `src/lib/ingest/platforms.ts` | Adapters: Twitter, Substack, YouTube, podcast |
| `src/lib/ingest/run.ts` | Run all platforms for one creator |
| `src/data/creators/registry.ts` | Creator list — append here to monitor someone new |

| Source | Required field | How |
|---|---|---|
| Substack | `publicationUrl` | Official RSS (`/feed`) |
| YouTube | `channelId` (`UC…`) | `https://www.youtube.com/feeds/videos.xml?channel_id=UC…` |
| Podcast | `rssUrl` | Any podcast RSS |
| Twitter | `handle` | Best-effort public reader (no API key; fragile) |

Writes `src/data/ingested/<slug>.json`.

### Continuous monitoring on Supabase Edge Functions?

**Yes.** A scheduled Edge Function can call the same platform adapters on a cron (e.g. every 15–60 min), upsert rows into Postgres, and treat “add a creator” as inserting sources in the DB.

Practical notes:

- **Substack / YouTube / podcast** — good fit for Edge (plain `fetch` + RSS/Atom).
- **Twitter** — fine for demos via Jina; for reliable continuous monitoring use the **X API** with a secret.
- **Limits** — Edge has wall-clock timeouts; batch or invoke one creator per run when the registry grows.
- **Idempotency** — upsert on `(source, url)` so re-runs don’t duplicate.
