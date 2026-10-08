# Pramaan desk brief (automation)

Every **6 hours**: read the last **6–12 hours** of signal from Supabase, pick stories that clear the quality bar, write Finimize-shaped desk notes, and **ship to production** (`main` → Vercel → `/news`). **Quality beats quota.** Target up to 5 stories. Shipping 0–4 is correct when the wire is thin or repetitive.

**Operations:** [`news-desk-automation.md`](./news-desk-automation.md) (schedule, three sources, production push).

## Information sources (use all three each run)

1. **News wire** — `mn_news_items` + `mn_news_ai_summaries` (facts, headlines, AI bullets).
2. **Twitter** — `af_content_items` / `af_content_bodies` where `platform = 'twitter'` (advisor timelines; ingest via existing `af:ingest` automation).
3. **Substack** — same tables where `platform = 'substack'`.

These feeds provide **information and inspiration** for what to write. You may use other verifiable public context when drafting the brief. Do not paste full creator posts into desk notes.

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

## Reason before you write

Do this **before** drafting `title`, `summary`, or `body`:

1. **One event, one note.** Name the single turn (policy, price pass-through, earnings signal). If you cannot state it in one plain sentence, reject or split.
2. **Causal chain only.** Each paragraph must follow from the last. If sentence B does not depend on sentence A, delete B or move it to another note. Do not stitch unrelated headlines from the same window (e.g. airport slot fights and fuel surcharges are different stories).
3. **Title test.** Read the title aloud. It must be a normal English sentence a reader understands without context. No mixed metaphors (“hiring growth”), no desk jargon, no database or source names. Prefer one clear fact over two ideas joined by “as / while / in the same week as”.
4. **No fake counterfactuals.** Do not imply the market “expected” outcome X from an unrelated event Y unless the wire gives that expectation. Do not staple a macro headline (RBI, oil, Nifty) to a company print unless the story is *about* that link with evidence in the reporting period.
5. **Mechanism first in “What does this mean?”** Explain how the industry works (input cost → surcharge, rate → EMI, rule change → compliance), then optional wider context that **directly** follows from that mechanism.

## Titles (simple, interesting, true)

The `title` is the headline on `/news`. Write it **last**, after you know the one event and the facts you will use in the body.

**Simple**

- One idea per title. One subject, one verb, one outcome.
- Short words. Short sentence. Aim for roughly 6–14 words; if you need a second clause, the note may be two stories.
- Say what happened in plain English. A busy reader should get it without reading the body.

**Interesting**

- Interest comes from the **fact**, not from wordplay or extra plot lines.
- Lead with the turn readers care about: a rule changed, a bill went up, sales rose while the stock fell, a council softened penalties.
- You may use contrast **only when the wire supports both sides** (e.g. strong sales, weak share price on the same update).

**True**

- Every word in the title must be supportable from the reporting in the note. If you cannot point to a sentence in “What’s going on here?”, cut it from the title.
- Do not join two unrelated events (“in the same week as…”, “as RBI…”) unless the story is explicitly about that link and you have evidence.
- Do not imply expectations you cannot prove (“expected to slow”, “defied the Street”) unless the wire states them.
- Do not use the title to sneak in analysis; save mechanism for the body.

**Good vs weak**

| Weak | Why | Stronger |
|------|-----|----------|
| TCS kept growing revenue in the same week the RBI raised rates | Two unrelated events; fake tension | TCS reported another double-digit revenue quarter |
| India’s largest IT firm is still hiring growth | Mixed metaphor; vague | Titan sold more. The stock still fell. |
| Markets digest policy amid global headwinds | No fact | Domestic flyers will see a separate fuel charge on tickets again |
| GST Council moves to support ease of business narrative | Jargon; no concrete turn | The GST Council just made honest mistakes less frightening |

**Checklist before ship**

1. Read the title aloud. Would you say this to a friend at lunch?
2. Underline each factual claim. Is it in the first body paragraph?
3. Delete any second storyline (macro, rival news, “what it means for markets”).
4. If the title is boring, pick a sharper **true** fact from the same event; do not add drama.

## Narrative gates

- **Conflict or turn** — expected X, got Y; a regime ended/began
- **Causal chain** — why it happened and what it forces next
- **Writeability** — you can draft a clean 2-minute brief; if you can only list %, reject

## Article shape (Finimize)

Mirror [Finimize Newsroom style](https://finimize.com): short, concrete, no jargon fog.

Each note in `src/lib/desk-notes.ts` (+ matching `deskNewsItems` via the mapper):

1. **Title** — see **Titles (simple, interesting, true)** above; plain sentence; no “shares crash X%” as the hook
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
6. **sourceNote** — omit on routine desk notes. Do not cite internal table names, ingest paths, or “Not investment advice” boilerplate on `/news` pieces.
7. **Hero image** — `public/desk/{slug}.jpg` + `deskHeroImage("{slug}")`. Editorial composite — see [`desk-hero-prompts.md`](./desk-hero-prompts.md). No picsum; no clutter; no headline text in the image.

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

## Ship path (production)

1. Query Supabase for the window since the last successful run (default last 12 hours): **news wire + Twitter + Substack** (see `news-desk-automation.md`).
2. Cluster by *event*, not ticker. Score with lenses + gates.
3. Select 0–5 stories. If unsure, drop.
4. Append new notes to `src/lib/desk-notes.ts` (newest first). Update `deskTopics`. Do not delete older desk notes unless broken duplicates.
5. **Hero image** per new slug (`desk-hero-prompts.md`).
6. Run `npm run build`; fix failures.
7. **Commit and push to `origin/main`** so Vercel deploys production `/news`.
8. Do **not** open-only PRs for routine desk runs unless a human asked for review.

## Done when

- Changes are on **`main`** and production will show new notes on **`/news`** (or explicit no-ship note with 2–3 rejected candidates and why), and
- Each shipped note renders on `/news` and `/news/[slug]` with Finimize headers.
