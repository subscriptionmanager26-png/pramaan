# Desk hero prompts (editorial composite)

**Automation:** every new desk note must ship with `public/desk/{slug}.jpg` (see `desk-brief.md` ship path step 5).

Visualize the **economic idea**, not the headline. Use a **visual editorial concept** (composite + metaphor), not a literal scene description.

## Formula

**[Subject] + [visual metaphor] + [composition] + [mood/style] + [color] + [constraints]**

## Style (Pramaan default)

**Art Deco + Bauhaus together:**

- **From Art Deco:** symmetrical layout, chevrons, columns, gold line work, publication glamour.
- **From Bauhaus:** bold flat primaries (red, blue, yellow) on cream — **not** a default orange/peach/beige “fintech” wash.

Orange/peach in early RBI tests came from the PocketEdge-style template (“warm neutral + orange accents”). Pramaan covers use **Deco structure + Bauhaus colour** instead.

## Reusable template

```
Cinematic financial news editorial composite for an Indian investor audience.
Story: [TOPIC]. Core idea: [ECONOMIC IDEA].
[PRIMARY SUBJECT] anchors [LEFT/RIGHT]; [SECONDARY CONTEXT] on the other side.
Overlay a clear visual metaphor for [CORE IDEA]. Negative space on [SIDE] for headline.
Art Deco composition and gold accents + Bauhaus primary colour blocks on cream.
Realistic base blended with restrained graphic overlays. No people unless essential.
No written text, no clutter, no generic stock-market clichés. 16:9 landscape.
```

## Desk slugs — planning + prompts

### `rbi-hike-household-budget`

| Field | Value |
|-------|--------|
| Core idea | Monetary tightening; borrowing costs rise |
| Subject right | RBI stone facade (generic seal, no readable text) |
| Metaphor left | Rising bars + upward arrow |
| Prompt | Cinematic composite: RBI facade right, skyline left, rising bars/arrow overlay. Art Deco + Bauhaus primaries on cream, not orange. |

### `titan-growth-stock-fell`

| Field | Value |
|-------|--------|
| Core idea | Fewer buyers, bigger tickets |
| Subject right | Luxury jewellery storefront (generic) |
| Metaphor left | Few footprints vs one large ascending ticket/price form |

### `airtel-postpaid-price-test`

| Field | Value |
|-------|--------|
| Core idea | Postpaid bill steps up |
| Subject right | Telecom tower / signal motif (no carrier logo) |
| Metaphor left | Stepped ascending bars (monthly bill) |

### `mumbai-airport-rebuild-pause`

| Field | Value |
|-------|--------|
| Core idea | Rebuild forces flight cuts; government pauses plan |
| Subject right | Airport terminal silhouette |
| Metaphor left | Pause over scaffold + diverted flight paths |

### `karnataka-beer-tax-sales`

| Field | Value |
|-------|--------|
| Core idea | Tax rule change → beer volume surge, revenue still up |
| Subject right | Stylised state / policy architecture |
| Metaphor left | Multiplying bottle forms + balance scale |

## Metaphor cheat sheet (wire stories)

| Story type | Visual metaphor |
|------------|-----------------|
| FII selling | Capital flowing out of India |
| Oil shock | Barrel shadow over skyline |
| Rupee slip | Rupee drifting vs muted currencies |
| Rate hike | Rising bars / arrow / dial up |
| QSR LFL pickup | Same storefront, busier glow / repeat visit motif |

## File

`public/desk/{slug}.jpg` + `deskHeroImage("{slug}")` in `src/lib/desk-notes.ts`.
