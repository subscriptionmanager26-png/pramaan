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
    slug: "rbi-hike-household-budget",
    title: "The RBI just made borrowing a little more expensive",
    summary:
      "India’s central bank raised its main rate to 5.50% and said cuts are off the table for now. Inflation worries are back, and the move lands just as many families borrow for the festive season.",
    category: "industry",
    companyOrSector: "RBI / rates",
    publishedAt: "2026-10-07T18:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("rbi-hike-household-budget"),
    keyTakeaways: [
      "Repo rate up 25 bps to 5.50%, first hike in nearly four years.",
      "Stance moved to “calibrated tightening”; cuts look unlikely near term.",
      "FY27 growth forecast raised to 7.1%.",
    ],
    sourceNote:
      "Sourced from RBI MPC coverage in mn_news_items (7 Oct 2026) and bank / economist wraps. Not investment advice.",
    body: [
      "What's going on here?",
      "On 7 October 2026, the Reserve Bank of India raised its main interest rate by 0.25 percentage points to 5.50%. It also shifted its stance from “neutral” to “calibrated tightening.” Rate cuts are over for now. The next meeting is more likely to bring another small hike or a pause than a cut.",
      "What does this mean?",
      "The RBI is worried about inflation. Oil prices are high after turmoil in West Asia. Global bond yields are elevated. India’s monsoon was weaker than hoped. Even so, the bank raised its growth forecast for this financial year to 7.1%. It thinks the economy can absorb a modest tightening.",
      "For most households, the link runs through the bank branch, not the bond market. Lenders use the repo rate as a guide when they price home loans, car loans, and business credit. Those loan rates usually adjust over the following weeks, not always overnight. Middle-income and first-time buyers tend to feel the squeeze first because EMI takes a larger share of their monthly budget.",
      "The calendar does not help. Developers push hard for sales around the festivals. Borrowing costs are ticking up in the same window.",
      "Why should I care?",
      "If you have a floating-rate loan, check whether your bank has revised your rate after this meeting. If you plan to buy a house soon, compare quotes from more than one lender. Banks often take a few weeks to pass on an RBI change, so the rate you hear today may not be the rate you get at disbursal. Many economists expect a short tightening cycle, perhaps another 0.25–0.50 points, unless oil and food inflation ease. Markets sold bonds and equities on the day. The rupee still slipped, partly because the hike was widely expected.",
    ],
  },
  {
    slug: "titan-growth-stock-fell",
    title: "Titan sold more. The stock still fell.",
    summary:
      "Consumer sales rose 25% and jewellery rose about 21%. The share price still dropped 4–5%. Investors focused on slower footfall and larger bills per visit after three very strong quarters.",
    category: "company",
    companyOrSector: "Titan",
    publishedAt: "2026-10-07T17:45:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("titan-growth-stock-fell"),
    keyTakeaways: [
      "Consumer businesses +25%; jewellery about +21%; watches +30%; eyewear +28%.",
      "Buyer growth in mid-single digits; ticket sizes still up double digits.",
      "Some festive demand likely shifted to the December quarter.",
    ],
    sourceNote:
      "From Titan Q2 FY27 business update and broker wraps indexed in mn_news_items (6–7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Titan’s July–September business update showed consumer businesses up 25% from a year ago. Domestic sales rose 22%. International sales rose 97%. Jewellery, the core line, grew about 21%. Watches grew 30%. Eyewear grew 28%. The stock still fell about 4–5% and touched a three-month low.",
      "What does this mean?",
      "Jewellery had grown 40–46% in each of the prior three quarters. A 21% quarter looks tame against that history, even though 21% is still healthy growth in absolute terms.",
      "Two details explain the market reaction. Buyer growth was only in the mid-single digits. Fewer people walked in than in recent quarters. Average spend per visit still rose at a double-digit pace. Studded jewellery grew in the low 30s. Plain gold grew around 20%. Coin and investment gold slowed against a tough comparison from last year.",
      "Festival dates also sit later this year. Some September jewellery sales may simply show up in the December quarter instead.",
      "Why should I care?",
      "Growth is still there, but the mix matters. Jubilant FoodWorks, another consumer name in the same news window, posted roughly 12% revenue growth. GST cuts should help apparel and food into the winter months. Spending has not shut off. Visits are lighter and baskets are richer, and the festival calendar is later. Watch the December quarter. If footfall returns with the festivals, today’s worry may be timing. If buyer counts stay soft while tickets stay large, growth quality stays a question even when the percentage looks fine.",
    ],
  },
  {
    slug: "airtel-postpaid-price-test",
    title: "Airtel is testing whether households will pay more for the same SIM",
    summary:
      "New postpaid plans cost 3–11% more, the largest postpaid increase since 2024. Existing users will be moved to higher plans automatically. The open question is whether people stay or switch.",
    category: "company",
    companyOrSector: "Bharti Airtel",
    publishedAt: "2026-10-07T17:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("airtel-postpaid-price-test"),
    keyTakeaways: [
      "Postpaid prices up 3–11% from 8 October 2026; entry from ₹499.",
      "Each plan includes one free international roaming trip per year.",
      "A similar move on prepaid, if it comes, would matter more for churn.",
    ],
    sourceNote:
      "From Bharti Airtel plan announcements and sector wraps in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Bharti Airtel raised postpaid plan prices by 3–11%, its biggest postpaid step since 2024. New prices apply from 8 October 2026. Entry plans start at ₹499. Family packs cost more too. Existing customers will be shifted to the nearest higher plan. Each plan now bundles one free international roaming trip per year (about 5GB of data, 60 minutes of calls, five-day validity).",
      "What does this mean?",
      "Airtel wants to know if subscribers will accept a higher monthly bill when the company adds a visible perk and moves them automatically. Indian telcos have been nudging users off cheap plans for years. Postpaid customers tend to stay put. Prepaid customers shop around when prices rise. Talk of a broader 10–15% tariff round over the next few months is still guesswork until prepaid prices actually move.",
      "The sector has a timing issue. Jio Platforms is heading toward a large IPO. Proof that Indians will pay more for mobile service helps how that deal is priced. For your household budget, the IPO is background noise. The bill is the event.",
      "Why should I care?",
      "If you are on Airtel postpaid, expect a higher plan unless you switch yourself. Watch whether Vi and Jio follow. Prepaid is the real test. If few people leave after the price rise, telcos keep pushing ARPU up. If churn picks up, the industry has less room to raise prices again soon.",
    ],
  },
  {
    slug: "mumbai-airport-rebuild-pause",
    title: "Mumbai’s passenger crush just forced the government to hit pause",
    summary:
      "Adani Airports wanted to cut hundreds of weekly international flights to free Terminal 2 for a Terminal 1 rebuild. Airlines pushed back on winter schedules. The ministry paused the plan.",
    category: "industry",
    companyOrSector: "Aviation / Mumbai airports",
    publishedAt: "2026-10-07T17:15:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("mumbai-airport-rebuild-pause"),
    keyTakeaways: [
      "Plan: cut 265 of 770 weekly international departures from Terminal 2.",
      "IndiGo alone faced about 74 weekly international departures at risk.",
      "Ministry pause; transition plan due 20 October; meeting on 13 October.",
    ],
    sourceNote:
      "From MoCA / MIAL / airline coverage in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Mumbai’s old Terminal 1 needs a phased rebuild from January 2027. It handles domestic traffic. While work is under way, roughly five million passengers a year need another place to check in. Mumbai International Airport (MIAL), run by Adani Airports, proposed cutting 265 of 770 weekly international departures from Terminal 2 from late October. Forty-six airlines would be affected. IndiGo alone would lose about 74 weekly international departures.",
      "Airlines said no. Winter schedules, crew, aircraft, and ground staff cannot be reshuffled in a few weeks. A forced shift to Navi Mumbai on that timeline was not workable. The civil aviation ministry paused the Terminal 1 plan. Airlines and the airport must submit a firm transition plan by 20 October. Officials meet on 13 October.",
      "What does this mean?",
      "Adani runs both Mumbai and Navi Mumbai. Moving some international flights is logical for the operator. For airlines, it breaks tickets already sold for someone else’s construction project. The fight exists because Mumbai is full. Demand is high. Policy stepped in to slow the disruption.",
      "Why should I care?",
      "If you fly international from Mumbai this winter, watch the 20 October plan. Terminal changes and slot cuts can break connections. For the industry, capacity at India’s busiest airport is scarce. Someone has to give up flights if T1 is to be rebuilt on a tight clock. The ministry may force a slower path that airlines can live with, or the dual-airport shift may return after winter schedules are set.",
    ],
  },
  {
    slug: "karnataka-beer-tax-sales",
    title: "Karnataka changed how beer is taxed. Sales jumped.",
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
      "Other states are studying the Karnataka model.",
    ],
    sourceNote:
      "From Brewers Association of India / Karnataka AIB coverage in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "On 11 May 2026, Karnataka moved to an Alcohol-in-Beverage (AIB) tax system. Excise tracks alcohol content more closely. There are fewer slabs. A value-based surcharge still applies. From April to September 2026, the Brewers Association of India reported alcohol tax collections up 13.4% to ₹22,191 crore, beer volumes up 41.3%, and tax from beer up 19%. Other states are looking at the same design.",
      "What does this mean?",
      "The state changed the rules. Buyers shifted toward beer, which often faces lighter treatment under content-based tax. Volumes rose sharply. Revenue still grew. You can see the policy and the shopping pattern in the same data set.",
      "Why should I care?",
      "Beer is one slice of discretionary spend, but it lines up with other signals from the same week. Titan saw bigger tickets. Jubilant posted steady food sales. People still spend when the tax map is clear. Watch whether other states copy AIB and whether Karnataka’s beer surge holds through a full year or fades after the first adjustment.",
    ],
  },
];

const deskTopics: Record<string, NewsItem["topic"]> = {
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
