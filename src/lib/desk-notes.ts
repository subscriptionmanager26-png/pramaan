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
    slug: "hul-detergent-price-hike",
    title: "HUL just raised detergent prices again",
    summary:
      "Wheel, Rin, and Surf Excel packs cost more from October. Surf Excel Easy Wash alone has seen four hikes in 2026. The move lands in the same week households face higher loan rates and festival shopping.",
    category: "company",
    companyOrSector: "Hindustan Unilever / FMCG",
    publishedAt: "2026-10-07T20:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("hul-detergent-price-hike"),
    keyTakeaways: [
      "October price increases across Wheel, Rin, and Surf Excel pack sizes.",
      "Surf Excel Easy Wash 1 kg now ₹172 vs ₹167; four cumulative hikes in 2026 on some SKUs.",
      "Comes alongside RBI tightening and other consumer prints still showing spend.",
    ],
    sourceNote:
      "From HUL detergent pricing coverage in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Hindustan Unilever raised prices on its main detergent brands in October 2026. Wheel, Rin, and Surf Excel packs across sizes cost more on the shelf. Surf Excel Easy Wash 1 kg moved to ₹172 from ₹167. The 500 g pack rose to ₹87 from ₹85. Some Surf Excel lines have seen four separate increases in 2026 alone.",
      "What does this mean?",
      "Staple makers are still passing higher input and marketing costs to shoppers. Detergent sits in almost every middle-class basket. A few-rupee move on a kilo bag is small in isolation. It adds up next to higher EMIs after the RBI rate hike and bigger festival grocery bills.",
      "The same news window still shows demand in other lanes. Titan reported double-digit jewellery growth with richer tickets. Jubilant FoodWorks posted roughly 12% revenue growth at Domino's India. Tata Steel lifted India deliveries. Shoppers are not walking away from spend. They are absorbing selective price steps on daily goods.",
      "Why should I care?",
      "If you manage a household budget, track the brands you buy every month. Switching to a smaller pack or a rival brand is often the first response before anyone cuts dining out or festival purchases. For investors, HUL's move is a read on pricing power in mass FMCG, not a demand collapse signal. Watch Q2 FMCG earnings for whether volumes hold after these hikes.",
    ],
  },
  {
    slug: "tata-steel-india-demand-q2",
    title: "Tata Steel's India plants kept running through the rains",
    summary:
      "July–September India crude steel output rose 10% year on year and deliveries rose 7%. Auto and special products hit a record second quarter. Management cited stable demand across segments despite the monsoon.",
    category: "company",
    companyOrSector: "Tata Steel",
    publishedAt: "2026-10-07T19:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("tata-steel-india-demand-q2"),
    keyTakeaways: [
      "India crude steel production 6.21 mt in Q2 FY27, up 10% YoY; deliveries 5.97 mt, up 7% YoY.",
      "Automotive & Special Products about 1.1 mt, best-ever Q2, up 19% YoY.",
      "Branded products and retail also posted best-ever second-quarter volumes.",
    ],
    sourceNote:
      "From Tata Steel Q2 FY27 production release in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Tata Steel reported provisional India volumes for the quarter ended September 2026. Crude steel production was 6.21 million tonnes, up 10% from a year ago and 8% from the June quarter. Deliveries reached 5.97 million tonnes, up 7% year on year. Output rose at Jamshedpur and Kalinganagar.",
      "What does this mean?",
      "Heavy industry did not stall in the monsoon quarter. The Automotive & Special Products vertical shipped about 1.1 million tonnes, its best second quarter on record and up 19% year on year. Branded products and retail also hit record Q2 volumes. That points to carmakers, infrastructure, and rural retail still pulling metal.",
      "The print sits beside consumer data from the same week. Jubilant FoodWorks grew revenue about 12%. PC Jeweller reported roughly 28% revenue growth. Titan's jewellery lines grew about 21%. Steel volumes are a different category, but they tell the same broad story: activity is still moving.",
      "Why should I care?",
      "If you follow industrials or autos, Tata Steel's mix matters more than the headline tonnage. Auto steel at record levels supports the case that vehicle production schedules stayed full. Watch global steel prices and any RBI-linked slowdown in construction credit. For households, it is indirect: steady steel demand usually means ongoing work on roads, housing, and cars, which feeds jobs and income in manufacturing hubs.",
    ],
  },
  {
    slug: "jubilant-domios-q2-revenue",
    title: "Domino's India sales picked up after a slow start to the year",
    summary:
      "Jubilant FoodWorks reported about 12% consolidated revenue growth in the September quarter. Domino's India like-for-like sales rose 4.1% as quick-service demand improved.",
    category: "company",
    companyOrSector: "Jubilant FoodWorks",
    publishedAt: "2026-10-07T18:45:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("jubilant-domios-q2-revenue"),
    keyTakeaways: [
      "Consolidated revenue about ₹2,609 cr, up 11.9% YoY; standalone revenue up 11.6%.",
      "Domino's India like-for-like growth 4.1% in the quarter.",
      "Brokers expect Q2 growth to beat the prior quarter though fuel and food costs still pinch margins.",
    ],
    sourceNote:
      "From Jubilant FoodWorks Q2 business update in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "Jubilant FoodWorks, which runs Domino's Pizza in India, said consolidated revenue for the quarter ended 30 September 2026 rose 11.9% year on year to about ₹2,609 crore. Standalone revenue rose 11.6% to ₹1,886 crore. Domino's India posted 4.1% like-for-like sales growth.",
      "What does this mean?",
      "Quick-service restaurants entered 2026 with soft footfall. The September quarter shows a step up. People are ordering pizza again at a faster clip than in the spring. Like-for-like growth below double digits still means existing stores sold more than a year ago, not just new openings.",
      "Costs remain a drag. Fuel and dairy still pressure store margins. That is why the stock reaction may stay muted even when the top line improves. On the demand side, the number fits other prints from the same week: Titan's consumer businesses up 25%, Karnataka beer volumes up sharply after a tax redesign, and HUL raising detergent prices because households still buy.",
      "Why should I care?",
      "Eating out is a simple check on discretionary mood. A mid-single-digit like-for-like at Domino's suggests urban spend is thawing, not roaring. If you eat out regularly, promotions and delivery fees still drive the bill more than menu list prices. If you invest in consumer names, compare Jubilant's December quarter after festivals. One quarter of pickup does not erase margin worry, but it pushes back on the idea that consumers have gone into hibernation.",
    ],
  },
  {
    slug: "borrowers-pay-more-savers-wait",
    title: "Banks moved loan rates up fast. Savers may not get the same lift.",
    summary:
      "PNB, Bank of Baroda, and Indian Bank raised lending rates within hours of the RBI hike. Many lenders may keep deposit rates steady while FCNR dollar deposits leave the system flush with cash. Bajaj Finance still lifted FD rates by up to 40 bps.",
    category: "industry",
    companyOrSector: "Banks / deposits",
    publishedAt: "2026-10-07T19:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("borrowers-pay-more-savers-wait"),
    keyTakeaways: [
      "Large PSU banks raised lending rates the same day as the 25 bps repo hike to 5.50%.",
      "Analysts say FCNR(B) inflows may let banks delay deposit rate increases.",
      "Bajaj Finance hiked FD rates 15–40 bps; seniors can earn up to 8.15% on select tenures.",
    ],
    sourceNote:
      "From bank MCLR / deposit transmission wraps and Bajaj Finance FD notices in mn_news_items (7 Oct 2026). Not investment advice.",
    body: [
      "What's going on here?",
      "On 7 October 2026 the RBI raised the repo rate to 5.50%. Within hours Punjab National Bank, Indian Bank, and Bank of Baroda announced higher lending rates. Borrowers on floating home and business loans will see EMIs drift up as those benchmarks feed through.",
      "What does this mean?",
      "Transmission is asymmetric. Loan pricing often moves first because banks protect margins when funding costs rise. Deposit rates do not always follow on day one. Coverage after the MPC meeting argued that heavy FCNR(B) dollar deposit inflows have left the system liquid, so lenders can hold savings rates steady for now. Governor Sanjay Malhotra said that surplus should fade by the end of the financial year, which leaves room for deposit hikes later if tightening continues.",
      "Not every saver waits on a big bank. Bajaj Finance, a large NBFC depositor platform, raised fixed deposit rates by 15 to 40 basis points on tenures from 12 to 60 months, effective 7 October. Senior citizens can earn up to 8.15% on some longer buckets. That gives rate-sensitive savers an alternative while PSU banks pause.",
      "Why should I care?",
      "If you borrow, reprice your EMI with your lender and compare offers before you sign a festival-season home loan. If you save, shop FD rates across banks and NBFCs instead of assuming your existing account will automatically pay more. The RBI's tightening story from the same day is about inflation risk. This follow-on is about who feels it first in their monthly cash flow.",
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
  "hul-detergent-price-hike": "companies",
  "tata-steel-india-demand-q2": "companies",
  "jubilant-domios-q2-revenue": "companies",
  "borrowers-pay-more-savers-wait": "policy",
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
