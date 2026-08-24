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
npm run ingest
```

Pulls latest public items for Deepak Shenoy into `src/data/ingested/deepak-shenoy.json`:

| Source | How |
|---|---|
| Substack | Official RSS (`/feed`) |
| YouTube | Atom feed via channel id |
| Podcast | Libsyn RSS |
| Twitter | Best-effort public reader (no API key; fragile) |

Parsers live in `src/lib/ingest/feeds.ts`.
