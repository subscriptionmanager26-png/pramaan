# Desk hero image prompts

Approved visual lanes: **Art Deco** and **Bauhaus** ([Looka overview](https://looka.com/blog/graphic-design-styles/)). Pick one lane per note; stay consistent across a ship batch when possible.

## Why “style-only” prompts fail

If the prompt leads with *“Bauhaus poster, primary colours, geometric shapes”*, the model optimises for **generic design homework**. It does not know that this image is for *RBI hike → EMIs → festive home loans*. Relevance comes from **story first**, style second.

**Art Deco often felt relevant** because symmetry, columns, sunbursts, and gold/black naturally read as *institution, money, weight* — close to central-bank stories without extra prompting.

**Bauhaus felt irrelevant** when shapes were decorative. In Bauhaus, **each shape must stand for something in the article** (house = rectangle, rate step-up = stepped bars or triangle pointing up, policy = circle/dial). Random circles and triangles are not “Bauhaus”; they are clip art.

## Prompt structure (always this order)

Copy this skeleton into the image tool. Fill sections 1–2 from the desk note; never skip them.

```
SUBJECT (read this first — non-negotiable)
- Event in one line: [who did what, to whom, when]
- Viewer should recognise in 2 seconds: [plain English, e.g. “home loans just got pricier”]
- India context (if any): [RBI, Mumbai airport, Karnataka excise, etc. — no maps with labels]

VISUAL METAPHOR (one scene, not a mood board)
- Focal scene: [single composition, e.g. “stylised family home beside rising stepped interest gauge”]
- Cause → effect in the picture: [e.g. “taller steps on gauge = higher EMI”]
- Must include: [2–4 concrete nouns from the story]
- Must NOT include: [logos, ticker, bank names, Domino’s, Airtel, RBI seal, readable text/numbers]

STYLE LANE (pick ONE)

A) Art Deco — symmetric poster; chevrons/sunburst; deep teal, burgundy, black, gold accents; glamorous 1920s–30s print; institutional + household glamour where the story is policy/consumption.

B) Bauhaus — 1920s Weimar poster; cream paper; red/blue/yellow + black; **each shape encodes the story** (document the mapping in the prompt); asymmetric balance; flat ink, no shading.

OUTPUT
- Aspect ratio: 16:9
- Flat graphic / screen print — not photo, not 3D, not UI mockup
- No words, no digits, no watermarks
```

## Style lane cheat sheet

| Lane | Use when the story is… | Relevance tricks |
|------|-------------------------|------------------|
| **Art Deco** | Policy, banks, rates, taxes, airports, “big institution vs household” | Columns, sunburst behind a home silhouette, chevrons showing “tightening”, symmetrical scales |
| **Bauhaus** | Behaviour, logistics, industrial supply, clear cause→effect | Label shapes in the prompt: “red triangle = higher rate”, “yellow rectangle = house”, “blue circle = policy meeting” |

## Worked example — RBI (`rbi-hike-household-budget`)

**Story anchor:** RBI raised repo 25 bps to 5.50%, stance “calibrated tightening”; home/car EMIs likely rise into festive housing season.

### Art Deco (relevant)

```
SUBJECT
- India’s central bank tightened policy; borrowing costs for households are heading up ahead of the festive home-buying season.
- Viewer should recognise in 2 seconds: a dignified “money got tighter for home buyers” moment.
- India context: Reserve Bank policy (no seal, no “RBI” text).

VISUAL METAPHOR
- Symmetric Art Deco poster: stylised classical bank facade (columns) in the upper half; in the lower half a modest Indian apartment block silhouette with a small doorway glow.
- Between them: a vertical chevron ladder or stepped motif rising upward (tightening / higher cost) — not a stock chart.
- Cause → effect: grandeur of policy above, ordinary housing below, visible “step up” between them.
- Must include: columns, home silhouette, upward steps/chevrons, gold accent lines.
- Must NOT include: logos, rupee symbols with numbers, Nifty, readable text.

STYLE: Art Deco poster 1920s–30s; deep teal, burgundy, black, metallic gold; flat print texture; symmetrical.

OUTPUT: 16:9, no text, no photo.
```

### Bauhaus (relevant — shape mapping required)

```
SUBJECT
- Same RBI hike story: households with floating home loans face higher EMIs; cuts are off the table for now.
- Viewer should recognise in 2 seconds: “my home loan just got more expensive.”

VISUAL METAPHOR
- Bauhaus exhibition poster on cream paper.
- SHAPE MAP (draw exactly this logic):
  - Yellow horizontal rectangle = house / housing
  - Red right triangle pointing up = rate increase / tighter policy
  - Blue circle = central bank / policy decision
  - Black stepped bars (3 steps, each taller) = EMI stepping up
- Composition: house left, stepped bars climbing from house toward circle; triangle wedges between house and circle.
- Cause → effect: bars grow toward the circle after the triangle “nudge.”
- Must NOT include: random decoration, letters, digits, real bank logos.

STYLE: Bauhaus primary colours, black outlines, asymmetric but balanced; flat screenprint.

OUTPUT: 16:9, no text, no photo.
```

## Quick anchors for other desk slugs

Use the same SUBJECT → METAPHOR → STYLE blocks; only the metaphor changes.

| Slug | 2-second read | Metaphor nouns |
|------|----------------|----------------|
| `dominos-lfl-accelerates` | Pizza chains busier at existing stores | Storefront rectangle, repeated door icons, footfall dots (not brand logo) |
| `coal-plants-four-day-stock` | Power plants almost out of coal | Coal pile shrinking, rail line, cooling tower silhouette, empty bin |
| `titan-growth-stock-fell` | Jewellery tills busy but fewer shoppers | Display case, few small figures vs large price tag shape |
| `airtel-postpaid-price-test` | Phone bill stepping up | Handset rectangle, bill slip shape growing, signal arcs |
| `mumbai-airport-rebuild-pause` | Flight cuts paused | Terminal + plane, pause/bar symbol, construction scaffold |
| `karnataka-beer-tax-sales` | Tax rule change, more beer sold | Bottle row + simple scale (tax vs volume), not brand labels |

## Anti-patterns (do not put these in prompts)

- Leading with style name only (“minimal Bauhaus icon on white”).
- “Abstract finance concept” with no house, plant, plate, tower, or ticket.
- Stock-photo language (“professional Indian family in kitchen”) — use **graphic poster** language instead.
- Asking for percentages or headlines in the image — use **steps, ladders, scales, taller bars** instead.

## File path

Save as `public/desk/{slug}.jpg`, reference `deskHeroImage("{slug}")` in `src/lib/desk-notes.ts`.

Style explorations for one story: `public/desk/examples/`.
