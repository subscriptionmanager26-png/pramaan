# Pramaan desk brief (automation)

Every run: read the last ~6–12 hours of India market news from Supabase (`india-market-news` / `mn_news_items` + `mn_news_ai_summaries`), pick only stories that clear the quality bar, write Finimize-shaped desk notes, and ship them via a pull request. **Quality beats quota.** Target up to 5 stories. Shipping 0–4 is correct when the wire is thin or repetitive.

## Primary lenses (must hit ≥1 hard; prefer 2)

1. **Policy change** — rate, tax, tariff, regulatory stance, ministry order. Who must adapt?
2. **Consumer behaviour change** — fewer visits, bigger tickets, trading up/down, absorbing price hikes, delaying for festivals.
3. **Affirming consumption** — pattern across categories that demand is still alive (even if one print looks soft).

## Kill immediately

- Price spikes / penny moves with no causal plot
- Broker upgrades with no new behaviour or policy fact
- Commodity tape reprints (gold −1% ahead of Fed minutes)
- Index echo headlines (“Nifty slips on…”) as the *lead* story
- Duplicate of a desk note already in `src/lib/desk-notes.ts` for the same event

## Narrative gates

- **Conflict or turn** — expected X, got Y; a regime ended/began
- **Causal chain** — why it happened and what it forces next
- **Writeability** — you can draft a clean 2-minute brief; if you can only list %, reject

## Article shape (Finimize)

Mirror [Finimize Newsroom style](https://finimize.com): short, concrete, no jargon fog.

Each note in `src/lib/desk-notes.ts` (+ matching `deskNewsItems` via the mapper):

1. **Title** — plain sentence; no “shares crash X%” as the hook
2. **Summary** — 1–2 sentences
3. **keyTakeaways** — 3 concrete facts
4. **body** — exactly this section order as separate strings:
   - `What's going on here?` (header string)
   - 1 short paragraph of facts
   - `What does this mean?` (header string)
   - 1–3 short paragraphs (mechanism, behaviour, context)
   - `Why should I care?` (header string)
   - 1–2 short paragraphs (who is affected + what to watch)
5. **readMinutes** — usually `2`
6. **sourceNote** — cite `mn_news_items` window; “Not investment advice.”
7. **Hero image** — `public/desk/{slug}.jpg` + `deskHeroImage("{slug}")`. Editorial composite prompts — see [`docs/desk-hero-prompts.md`](./desk-hero-prompts.md) (subject + metaphor + composition + style; visualize the economic idea, not the headline). No picsum; no clutter; no headline text in the image.

### Coverage order (non-negotiable)

1. First sentence = policy, shopper, or pattern — never the ticker %
2. Then behaviour / mechanism
3. Then who decides next
4. Only then price action / Street colour
5. If affirming consumption: name ≥1 corroborating category from the same window

### Tone

Write like an editor at a serious business magazine (HBR-style): calm, direct, useful. Short sentences. Simple words.

- Say what happened, then what it means for the reader.
- No em dashes.
- Avoid “this is not X, this is Y” framing.
- Avoid AI cadence (“moving targets”, “transmitting the hike”, “lack shock value”, “pricing power narrative”).
- Prefer normal speech. Example: “If you plan to buy a house soon, compare loan quotes from more than one bank. Lenders often take a few weeks to update rates after an RBI move.”
- No banned filler: `delve`, `landscape`, `robust`, `leverage`, `synergy`, `paradigm`, `well-positioned`.

## Ship path

1. Query Supabase for the window since the last successful run (default last 12 hours if unknown).
2. Cluster by *event*, not ticker. Score with lenses + gates.
3. Select 0–5 stories. If unsure, drop.
4. Append new notes to `src/lib/desk-notes.ts` (newest first). Do not delete older desk notes unless they are broken duplicates.
5. **Hero image:** for each new slug, follow [`docs/desk-hero-prompts.md`](./desk-hero-prompts.md). Generate the editorial composite, save `public/desk/{slug}.jpg`, set `image: deskHeroImage("{slug}")`. Commit the JPG with the note.
6. Open a PR titled `desk: <date> (<n> notes)` with a short summary of each slug.
7. Do **not** push straight to `main` unless the run instructions explicitly say so.

## Done when

- PR opened (or explicit “no shippable stories” note with 2–3 rejected candidates and why), and
- Each shipped note renders on `/news` and `/research/[slug]` with Finimize headers.
