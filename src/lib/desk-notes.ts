import type { NewsItem, ResearchArticle } from "@/lib/site";

/** Finimize-style section labels rendered as headings on `/news/[slug]`. */
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

export function getDeskNote(slug: string) {
  return deskNotes.find((n) => n.slug === slug);
}

/**
 * Desk notes for the news rail. Keep Finimize shape:
 * What's going on here? → What does this mean? → Why should I care?
 * Brief, concrete, no stock % in the first sentence.
 */
export const deskNotes: ResearchArticle[] = [
  {
    slug: "tcs-corporate-tech-demand",
    title: "TCS reported another double-digit revenue quarter",
    summary:
      "Tata Consultancy Services grew rupee revenue about 11% and net profit about 15% in the quarter to 30 September 2026. The board also declared a ₹12 interim dividend.",
    category: "company",
    companyOrSector: "TCS / IT services",
    publishedAt: "2026-10-08T19:15:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("tcs-corporate-tech-demand"),
    keyTakeaways: [
      "Q2 FY27 revenue about ₹73,188 crore, up 11% year on year in rupee terms.",
      "Net profit about ₹13,884 crore, up roughly 15%; results beat most Street estimates.",
      "Second interim dividend of ₹12 per share declared alongside the results.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, Tata Consultancy Services reported results for the quarter ended 30 September 2026. Revenue reached about ₹73,188 crore, up 11% from a year earlier in rupee terms. Net profit was about ₹13,884 crore, up roughly 15%. The board declared a second interim dividend of ₹12 per share.",
      "What does this mean?",
      "TCS sells software, cloud, and outsourcing to large banks, retailers, and manufacturers. Revenue rises when those clients sign new work or renew existing contracts. The September quarter covers activity that was already booked or delivered in July, August, and September, not a single policy week in October. Double-digit growth here means those clients were still buying through the summer.",
      "Why should I care?",
      "If you work in tech or sell to enterprises, the largest Indian IT vendor is a rough pulse check on demand from big companies. If you only follow the stock, one quarter does not set the year. Watch whether growth slows in coming quarters if clients trim discretionary projects. This note is about corporate spending through September, not about household EMIs or day-to-day rates.",
    ],
  },
  {
    slug: "airlines-fuel-surcharge-atf",
    title: "Domestic flyers will see a separate fuel charge on tickets again",
    summary:
      "Akasa Air added a ₹375–₹1,150 fuel surcharge on domestic routes and ₹2,500 on international flights as aviation turbine fuel prices stay high. Air India and Air India Express also revised surcharges the same day.",
    category: "industry",
    companyOrSector: "Aviation / households",
    publishedAt: "2026-10-08T18:45:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("airlines-fuel-surcharge-atf"),
    keyTakeaways: [
      "Akasa set domestic fuel surcharges between ₹375 and ₹1,150 per ticket segment.",
      "International surcharge on Akasa set at ₹2,500, per airline statement.",
      "Air India and Air India Express also revised fuel surcharges on 8 October.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, Akasa Air introduced a fuel surcharge on bookings because aviation turbine fuel costs have stayed elevated. Domestic routes now carry a surcharge between ₹375 and ₹1,150 depending on the sector. International flights carry a ₹2,500 surcharge. Air India and Air India Express issued separate statements the same day revising their own fuel surcharges.",
      "What does this mean?",
      "Airlines buy aviation turbine fuel in a market linked to global crude. When that input cost stays high, margins shrink unless ticket prices move. Carriers often add or raise a separate fuel surcharge instead of changing every base fare on the website. That is why Akasa published rupee ranges and legacy carriers revised surcharges the same day. For families booking Diwali or winter trips, the fare shown in search may be lower than the total at checkout once the fuel line is added.",
      "Why should I care?",
      "If you are booking flights for the holidays, compare the final checkout price, not just the advertised fare. A ₹500–₹1,000 surcharge per leg adds up on family trips. Watch whether IndiGo and other rivals match the step. If they do, the industry is accepting that passengers will pay more for the same seat. If only one carrier moves, you still have a chance to switch. Either way, this is a household budget story before it is a stock story.",
    ],
  },
  {
    slug: "gst-council-eases-penalties",
    title: "The GST Council just made honest mistakes less frightening",
    summary:
      "India’s GST Council limited arrest powers, raised prosecution thresholds, and cut routine penalties. Rates were left unchanged. The aim is to reduce fear-driven compliance fights for businesses.",
    category: "industry",
    companyOrSector: "GST / SMEs",
    publishedAt: "2026-10-08T17:40:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("gst-council-eases-penalties"),
    keyTakeaways: [
      "Arrest powers removed from GST enforcement in the Council’s Thursday package.",
      "Prosecution threshold raised to ₹5 crore from ₹1 crore for offences.",
      "General penalty cut to ₹10,000 from ₹25,000; late filing faces proportionate penalty only.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, the Goods and Services Tax Council met and agreed to soften several punitive rules. Tax officials will no longer have arrest powers under GST. The threshold for prosecution in GST offences rises to ₹5 crore from ₹1 crore. The standard penalty falls to ₹10,000 from ₹25,000. If a taxpayer files late, makes an error, or pays late, officials can recover tax, charge interest, and apply a proportionate penalty, but not stack open-ended punishments on top.",
      "What does this mean?",
      "For years, small and mid-sized firms have argued that GST enforcement felt criminal for paperwork slips. The Council left tax rates unchanged and said rate decisions will be taken once a year at a dedicated meeting. That separates the politics of rates from the mechanics of compliance.",
      "The change is policy, not a tax cut. Your invoice still carries the same GST percentages. The difference is how aggressively the state can escalate a dispute.",
      "Why should I care?",
      "If you run a business, update your compliance playbook with your chartered accountant. Lower fear of arrest does not mean intentional evasion is safe. If you are a salaried shopper, the near-term effect is indirect: smoother supply chains and fewer sudden shutdown stories at vendors you rely on. Watch state-level implementation. Rules written in Delhi still depend on how local officers apply them on the ground.",
    ],
  },
  {
    slug: "banks-lend-into-renewable-power",
    title: "Four in ten new bank loans are flowing into power projects",
    summary:
      "Fresh data highlighted by market researchers shows nearly 40% of recent bank loan disbursements went to power projects, led by solar and wind. Capital is chasing generation assets even as policy rates rise.",
    category: "industry",
    companyOrSector: "Banks / renewables",
    publishedAt: "2026-10-08T09:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("banks-lend-into-renewable-power"),
    keyTakeaways: [
      "About 40% of bank loan disbursements in the sample went to power projects.",
      "Solar and wind projects dominated that lending bucket.",
      "Figure cited from Zerodha Capital analysis of bank disbursements.",
    ],
    body: [
      "What's going on here?",
      "Research circulated on 8 October 2026 pointed to a sharp tilt in bank lending. Almost 40% of loan disbursements in the dataset went to power projects, with solar and wind making up most of that slice. The numbers come from Zerodha Capital’s work on where fresh bank credit is landing.",
      "What does this mean?",
      "When the RBI raises rates, you might expect banks to pull back everywhere. Instead, lenders are still funding long-dated assets where tariffs and power purchase agreements give some visibility. Solar and wind fit that mould. Transmission and thermal projects also sit in the power bucket, but the emphasis in the note is on renewable builds.",
      "That matters for industrial policy. India needs more electrons on the grid as factories and data centres expand. Banks are voting with disbursements even as bond yields spike on the same day’s trading.",
      "Why should I care?",
      "Households do not pick loan books, but they feel the outcomes. More renewable supply can stabilise power costs over time. Heavy bank concentration in one sector also raises risk questions if projects slip on timelines. If you own bank shares or work in energy, watch whether this lending pace continues after the RBI’s tightening cycle. For everyone else, read it as a sign that clean power is still getting funded, not starved, in late 2026.",
    ],
  },
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
  "tcs-corporate-tech-demand": "companies",
  "airlines-fuel-surcharge-atf": "policy",
  "gst-council-eases-penalties": "policy",
  "banks-lend-into-renewable-power": "markets",
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
  url: `/news/${note.slug}`,
  image: note.image,
}));
