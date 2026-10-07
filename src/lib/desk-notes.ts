import type { NewsItem, ResearchArticle } from "@/lib/site";

/** Finimize-style section labels rendered as headings on `/research/[slug]`. */
export const DESK_SECTION_HEADERS = [
  "What's going on here?",
  "What does this mean?",
  "Why should I care?",
] as const;

export function isDeskSectionHeader(para: string): boolean {
  return (DESK_SECTION_HEADERS as readonly string[]).includes(para.trim());
}

/** Thematic hero art: commit `public/desk/{slug}.jpg` (16:9 editorial) per note. */
export function deskHeroImage(slug: string): string {
  return `/desk/${slug}.jpg`;
}

/**
 * Desk notes for the news rail. Keep Finimize shape:
 * What's going on here? → What does this mean? → Why should I care?
 * Brief, concrete, no stock % in the first sentence.
 */
export const deskNotes: ResearchArticle[] = [
  {
    slug: "dominos-lfl-accelerates",
    title: "Domino’s footfall is picking up again — without waiting for Diwali",
    summary:
      "Jubilant FoodWorks grew revenue 12% in Q2. Like-for-like sales at Domino’s India rose to 4.1% from 2.5% in the prior quarter. That is a shopper-behaviour turn, not just new stores.",
    category: "company",
    companyOrSector: "Jubilant FoodWorks / QSR",
    publishedAt: "2026-10-07T19:05:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("dominos-lfl-accelerates"),
    keyTakeaways: [
      "Consolidated revenue +11.9% to ₹2,608.7 cr; standalone +11.6%.",
      "Domino’s India LFL: 4.1% vs 2.5% in Q1 — same-store demand improved.",
      "Net +108 group stores (88 Domino’s India); network 3,820 as of 30 Sep.",
    ],
    sourceNote:
      "From Jubilant FoodWorks Q2 FY27 business update and wire copies in mn_news_items (7 Oct 2026, ~12:05–12:55 UTC). Not investment advice.",
    body: [
      "What's going on here?",
      "On 7 October 2026, Jubilant FoodWorks gave its September-quarter business update. Consolidated revenue rose 11.9% year on year to ₹2,608.7 crore. Standalone revenue rose 11.6% to ₹1,885.8 crore. Domino’s India — the core — posted like-for-like (LFL) growth of 4.1%. That compares with 2.5% in the April–June quarter. The group added a net 108 stores in the quarter, including 88 Domino’s India outlets, taking the network to 3,820 stores.",
      "What does this mean?",
      "LFL growth measures sales at stores open at least a year. When LFL accelerates while the company is still opening doors, it usually means existing customers are visiting or ordering more often — not that growth is only math from new pins on the map. Management has been trying to revive dine-in and takeaway, which lagged delivery; the update fits a slow repair rather than a one-day festival spike.",
      "Put it next to other prints from the same week. Titan’s jewellery update showed fewer buyers but bigger tickets. Jubilant is the opposite shape at the margin: modest but improving same-store momentum in mass-market food. Popeyes is still small but called out as a second engine. Fuel and food-input costs remain high, so margin is a separate fight — this note is about demand on the ground.",
      "Why should I care?",
      "If you track Indian consumption, QSR LFL is a quick read on urban discretionary spend between big-ticket categories. Watch the full P&L for margin pressure from commodities. Watch Q3 for whether LFL holds when Diwali and winter menus land — and whether Jubilant can keep improving dine-in without giving away delivery share. A sustained LFL uptick would corroborate the “demand is alive, just mixed by category” story Titan’s update also hinted at.",
    ],
  },
  {
    slug: "coal-plants-four-day-stock",
    title: "India’s coal buffers are nearly empty — and summer prep is on the clock",
    summary:
      "More than 40% of coal-fired capacity had four days of fuel or less as of 4 October. Late heat, mine rain, and rail bottlenecks drained stocks. The fix is supply logistics, not a rate cut.",
    category: "industry",
    companyOrSector: "Power / coal supply",
    publishedAt: "2026-10-07T18:50:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("coal-plants-four-day-stock"),
    keyTakeaways: [
      "69 plants (~>40% of coal fleet) at ≤4 days stock as of 4 Oct — near five-year lows.",
      "Drivers: warm Oct demand, mine disruptions, rail constraints; ~90% of low-stock plants far from mines.",
      "Coal still ~70% of India power; Oct–Feb is the window to rebuild before next summer.",
    ],
    sourceNote:
      "From national coal-inventory coverage in mn_news_items (7 Oct 2026, ~10:07 UTC). Not investment advice.",
    body: [
      "What's going on here?",
      "Coal stockpiles at Indian power stations slid close to a five-year low. As of 4 October 2026, 69 plants — more than two-fifths of the coal-fired fleet — held four days of fuel or less. That threshold is treated as a minimum comfort level by operators. Coal still generates nearly 70% of India’s electricity, so low buffers raise the risk of load shedding if supply or transport stumbles again.",
      "What does this mean?",
      "Demand stayed unusually strong for October: warm weather kept cooling and irrigation load up when the system normally eases. Supply side, heavy rain disrupted some mines, and rail capacity remained tight. Plants burned inventory instead of fresh deliveries. Most plants with critically low stocks sit far from mines — so the problem is logistics as much as digging coal out of the ground.",
      "The calendar matters. Cooler months through February are when utilities usually rebuild stocks ahead of the next summer heatwave. Missing that window can leave the grid exposed in 2027. Analysts quoted on the wire pointed to possible short-term load management and a need for Coal India and Indian Railways to lift dispatches to power stations now, not after the first heat spike.",
      "Why should I care?",
      "Households and factories feel this as reliability of power, not as a Nifty headline. If you run manufacturing in states dependent on coal-heavy grids, watch state discom advisories and fuel reports through October–November. Investors often map the story to Coal India, railways, and IPPs — but the policy lever is dispatch and transport coordination. This is separate from the RBI rate hike the same day: monetary policy does not refill a stockyard.",
    ],
  },
  {
    slug: "rbi-hike-household-budget",
    title: "The RBI just made borrowing a little more expensive",
    summary:
      "India’s central bank raised its main rate to 5.50% and said cuts are off the table for now. The move is about inflation risk — and it lands right as households enter the festive borrowing season.",
    category: "industry",
    companyOrSector: "RBI / rates",
    publishedAt: "2026-10-07T18:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("rbi-hike-household-budget"),
    keyTakeaways: [
      "Repo rate: +25 bps to 5.50% — first hike in nearly four years.",
      "Stance: “calibrated tightening” — next move is hike or pause, not a cut.",
      "Growth forecast raised to 7.1%: RBI thinks the economy can take it.",
    ],
    sourceNote:
      "Sourced from RBI MPC coverage in mn_news_items (7 Oct 2026) and bank / economist wraps. Not investment advice.",
    body: [
      "What's going on here?",
      "On 7 October 2026, the Reserve Bank of India raised its main interest rate by 0.25 percentage points to 5.50%. It also changed its stance from “neutral” to “calibrated tightening.” In plain English: the period of rate cuts is over. The next decision is either another hike or a pause — not a cut.",
      "What does this mean?",
      "The RBI is reacting to inflation risk. Oil is expensive because of conflict in West Asia. Global bond yields are high. India’s monsoon was weaker than hoped. At the same time, the central bank raised its growth forecast for this financial year to 7.1%. So its own view is: the economy is strong enough that a small hike should not break it.",
      "That matters for households more than for bond traders. Banks use the repo rate as a reference when they set home loans, car loans, and business loans. Those rates often follow — not always the same day, but usually over the next weeks or months. Mid-income and first-time home buyers feel it first, because EMIs take a bigger share of their income. Premium buyers feel it less.",
      "The timing is awkward. The festive season is when developers try to close housing sales. Rates are going up just as that selling window opens.",
      "Why should I care?",
      "If you have a floating-rate loan, watch whether your bank raises the rate after this meeting. If you are shopping for a home before Diwali, treat EMI quotes as moving targets until lenders finish transmitting the hike. Economists mostly expect a shallow cycle — maybe another 0.25–0.50 points, then a stop — but that only holds if oil and inflation cool. Markets already sold bonds and stocks on the day; the rupee still weakened, because traders said the hike was expected and lacked “shock value.”",
    ],
  },
  {
    slug: "titan-growth-stock-fell",
    title: "Titan sold more — and the stock still fell. Here’s the behaviour that mattered.",
    summary:
      "Consumer sales grew 25%. Jewellery grew about 21%. Shares still dropped 4–5%. The market was not reacting to “bad growth.” It was reacting to fewer buyers and bigger tickets after three blowout quarters.",
    category: "company",
    companyOrSector: "Titan",
    publishedAt: "2026-10-07T17:45:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("titan-growth-stock-fell"),
    keyTakeaways: [
      "Consumer businesses +25%; jewellery ~+21%; watches +30%; eyewear +28%.",
      "Buyer growth: mid-single digits. Ticket sizes: still double digits.",
      "Festive buying shifted into the December quarter — timing, not a demand cliff.",
    ],
    sourceNote:
      "From Titan Q2 FY27 business update and broker wraps indexed in mn_news_items (6–7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Titan reported its July–September update. Consumer businesses grew 25% from a year ago. Domestic grew 22%. International grew 97%. Jewellery — the main business — grew about 21%. Watches grew 30%. Eyewear grew 28%. The share price still fell about 4–5% and hit a three-month low.",
      "What does this mean?",
      "The last three jewellery quarters grew between 40% and 46%. Many investors treated that pace as normal. A 21% jewellery quarter looks slow next to that streak — even though 21% is still solid growth in absolute terms.",
      "Two behaviour details matter more than the headline. First: buyer growth was only mid-single digits. Fewer people walked in and bought, compared with recent quarters. Second: average ticket size still rose in double digits. The people who did buy spent more per visit. Studded jewellery (diamonds and the like) grew in the early 30%s. Plain gold grew around 20%. Coins and investment gold cooled after a strong year-ago base.",
      "Festival dates also shifted later into the December quarter. Some jewellery buying that usually lands in September simply moved out of this print.",
      "Why should I care?",
      "This is a mix-and-timing story, not a demand cliff. Same window: Domino’s-parent Jubilant FoodWorks grew revenue about 12%; festive jewellery and retail still look constructive to several desk notes; GST-cut benefits are still expected to land in apparel and food into Oct–Dec. India is still spending — with fewer visits, richer baskets, and a later festival. Watch Q3: if footfall returns with festivals, the “miss” was calendar. If growth stays ticket-size heavy with soft buyer counts, the quality of growth stays fragile even when the % looks fine.",
    ],
  },
  {
    slug: "airtel-postpaid-price-test",
    title: "Airtel is testing whether households will pay more for the same SIM",
    summary:
      "New postpaid plans are 3–11% more expensive — the biggest such step since 2024. Existing users get auto-moved up. The real question is behaviour: will people stay, or shop?",
    category: "company",
    companyOrSector: "Bharti Airtel",
    publishedAt: "2026-10-07T17:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("airtel-postpaid-price-test"),
    keyTakeaways: [
      "Postpaid prices up 3–11% from 8 October 2026; entry from ₹499.",
      "Each plan includes one free international roaming trip per year.",
      "Prepaid follow-through is the harder test — not yet confirmed.",
    ],
    sourceNote:
      "From Bharti Airtel plan announcements and sector wraps in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Bharti Airtel launched new postpaid plans priced 3–11% higher than before — its largest postpaid step-up since 2024. Prices apply from 8 October 2026. Entry plans start at ₹499. Family packs also moved up. Existing customers get moved to the nearest higher plan. Each plan includes one free international roaming trip a year (about 5GB of data, 60 minutes of calls, five-day validity).",
      "What does this mean?",
      "Airtel is running a simple test: will households accept a higher monthly bill for the same connection if you add a clear perk and auto-upgrade them? Telecom companies have been doing versions of this for a while — remove cheap plans, push people onto higher average revenue per user. Postpaid users are stickier. Prepaid users switch more easily when price rises. That is why talk of a wider 10–15% tariff cycle over the next few months matters — and why it is still speculation until prepaid actually moves.",
      "The industry also wants this proof soon. Jio Platforms is preparing a large IPO, with talk of a valuation around ₹11 lakh crore. Showing that Indian customers will absorb higher tariffs helps that pricing story. For households, the IPO is background. The bill change is the event.",
      "Why should I care?",
      "If you are on Airtel postpaid, expect an auto-upgrade and a higher bill unless you actively change plan. Watch whether Vi and Jio match. Watch prepaid. If churn stays low after migration, higher ARPU sticks. If people leave or downgrade, the test failed — and the “pricing power” story for the whole sector gets harder to sell.",
    ],
  },
  {
    slug: "mumbai-airport-rebuild-pause",
    title: "Mumbai’s passenger crush just forced the government to hit pause",
    summary:
      "Adani Airports wanted to cut hundreds of weekly international flights to free Terminal 2 for a Terminal 1 rebuild. Airlines said the winter schedule cannot take that hit. The ministry paused the plan.",
    category: "industry",
    companyOrSector: "Aviation / Mumbai airports",
    publishedAt: "2026-10-07T17:15:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("mumbai-airport-rebuild-pause"),
    keyTakeaways: [
      "Plan: cut 265 of 770 weekly international departures from Terminal 2.",
      "IndiGo alone faced ~74 weekly international departures cut.",
      "Ministry pause; firm transition plan due 20 October (consult 13 Oct).",
    ],
    sourceNote:
      "From MoCA / MIAL / airline coverage in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Mumbai’s old Terminal 1 needs phased redevelopment from January 2027. That terminal handles domestic flights. During the works, about 5 million passengers a year need somewhere else to check in and board. Mumbai International Airport (MIAL), run by Adani Airports, wanted to free space in Terminal 2 by cutting 265 of 770 weekly international departures — starting late October. That would hit 46 airlines. IndiGo alone faced about 74 weekly international departures cut.",
      "Airlines refused. Winter schedules, crew, aircraft, and ground handling cannot be rebuilt that fast — and a forced push toward Navi Mumbai is not workable on a three-week clock. The civil aviation ministry paused the Terminal 1 plan. Airlines and the airport must file a firm transition plan by 20 October. A consult is set for 13 October.",
      "What does this mean?",
      "Adani Airports operates both Mumbai and Navi Mumbai. From the operator’s view, shifting some international flying uses the network it already owns. From the airlines’ view, it breaks sold schedules for someone else’s rebuild. This fight only exists because passenger volumes are high enough that Terminal 1 cannot stay as-is. Travel demand is the pressure. Policy is the brake.",
      "Why should I care?",
      "If you fly international from Mumbai this winter, watch the 20 October plan — slot cuts and terminal moves change connections. For the industry, the story is scarcity: India’s busiest airside cannot absorb a rushed rebuild without someone losing flights. The open question is whether the ministry forces a slower, airline-friendly glide path — or a dual-airport shift still happens after winter schedules reset.",
    ],
  },
  {
    slug: "karnataka-beer-tax-sales",
    title: "Karnataka changed how beer is taxed — and people bought a lot more of it",
    summary:
      "A May tax redesign tied excise more closely to alcohol content. By September, beer sales were up more than 40% and the state still collected more tax. Other states are watching.",
    category: "industry",
    companyOrSector: "Alcohol policy / consumption",
    publishedAt: "2026-10-07T17:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("karnataka-beer-tax-sales"),
    keyTakeaways: [
      "AIB tax regime from 11 May 2026: excise tied more to alcohol content.",
      "Apr–Sep: beer sales +41.3%; alcohol tax collections +13.4% to ₹22,191 cr.",
      "Clean policy → behaviour chain; other states studying the model.",
    ],
    sourceNote:
      "From Brewers Association of India / Karnataka AIB coverage in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "On 11 May 2026, Karnataka switched to an Alcohol-in-Beverage (AIB) tax system. Excise is tied more closely to how much alcohol is in the drink. There are fewer price slabs. An extra duty based on product value still applies. For April–September 2026, the Brewers Association of India reported alcohol tax collections up 13.4% to ₹22,191 crore, beer sales volume up 41.3%, and tax from beer up 19%. Other states are studying the same model.",
      "What does this mean?",
      "Cause and effect are easy to follow. The government changed the tax rules. What people buy, and how much of it, moved. The state still collected more tax. Beer — often treated as a lower-strength choice under content-based rules — grew fast. That is policy shaping behaviour, and behaviour showing up in sales. It is clearer evidence than a one-day stock jump with no explanation.",
      "Why should I care?",
      "Put this beside Titan’s richer tickets, Domino’s steady sales, and festive retail optimism: discretionary spending is not frozen. People react when tax design makes a preferred choice clearer or more attractive. Watch whether other states copy AIB — and whether Karnataka’s beer volume spike holds for a full year, or part of it was a one-time adjustment after the May switch.",
    ],
  },
];

const deskTopics: Record<string, NewsItem["topic"]> = {
  "dominos-lfl-accelerates": "companies",
  "coal-plants-four-day-stock": "policy",
  "rbi-hike-household-budget": "policy",
  "titan-growth-stock-fell": "companies",
  "airtel-postpaid-price-test": "companies",
  "mumbai-airport-rebuild-pause": "policy",
  "karnataka-beer-tax-sales": "policy",
};

export const deskNewsItems: NewsItem[] = deskNotes.map((note) => ({
  slug: note.slug,
  headline: note.title,
  summary: note.summary,
  source: "Pramaan Desk",
  publishedAt: note.publishedAt,
  topic: deskTopics[note.slug] ?? "markets",
  url: `/research/${note.slug}`,
  image: note.image,
}));
