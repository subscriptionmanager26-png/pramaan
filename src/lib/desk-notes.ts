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
    slug: "nppa-cancer-drug-trade-margin-cap",
    title: "India will cap mark-ups on many cancer medicines at 30%",
    summary:
      "On 9 October 2026 the government said trade margins on non-scheduled anti-cancer drugs would be limited to 30%. Regulators estimate some retail prices could fall 20% to 70% once the list is notified, saving patients about ₹2,500 crore a year.",
    category: "industry",
    companyOrSector: "Healthcare / pricing",
    publishedAt: "2026-10-09T17:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("nppa-cancer-drug-trade-margin-cap"),
    keyTakeaways: [
      "NPPA will cap trade margins on non-scheduled oncology drugs at 30%.",
      "Officials cite average mark-ups near 170%, with extreme cases above 700%.",
      "An expert panel will finalise which medicines are covered before notification.",
    ],
    body: [
      "What's going on here?",
      "On 9 October 2026, the National Pharmaceutical Pricing Authority said India will limit trade margins on non-scheduled anti-cancer medicines to 30%. The move extends earlier margin rules that applied only to a smaller set of oncology drugs. Regulators said mark-ups on these products averaged around 170%, with some distribution chains adding far more. Officials estimate retail prices could drop roughly 20% to 70% depending on the drug and channel, and that patients could save about ₹2,500 crore annually once the policy is in force. Hospital shares rose on the news, but brokerages warned that pharmacy income inside hospitals could face pressure.",
      "What does this mean?",
      "Cancer treatment often mixes hospital stays with high-cost medicines bought at the desk or through retail pharmacies. When the gap between the price to the retailer and the sticker price on the pack is wide, patients pay the spread. A margin cap attacks that layer, not the factory price itself. Hospitals had already sold off after courts questioned medicine pricing inside campuses. Friday’s rule is a clearer government line on affordability, though the final medicine list and notification date are still pending.",
      "Why should I care?",
      "If you are on long-term oncology medicines, ask your doctor and pharmacist whether your brand sits on the upcoming list and how billing might change. If you hold hospital stocks, treat the one-day rally as sentiment, not final maths. Watch the expert committee list, the formal NPPA notification, and whether states push for similar caps on other high-cost therapies.",
    ],
  },
  {
    slug: "jio-platforms-ipo-price-band",
    title: "Jio Platforms is said to price its IPO between ₹1,065 and ₹1,119 a share",
    summary:
      "Bloomberg reported on 9 October 2026 that Reliance’s digital arm could set a price band of ₹1,065 to ₹1,119 for its listing. At the top end the offer could raise about ₹30,200 crore and value the business near ₹12 lakh crore.",
    category: "industry",
    companyOrSector: "Telecom / IPO",
    publishedAt: "2026-10-09T16:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("jio-platforms-ipo-price-band"),
    keyTakeaways: [
      "Reported IPO band: ₹1,065 to ₹1,119 per share.",
      "Upper end could raise roughly ₹30,200 crore for Jio Platforms.",
      "Targeted valuation near ₹12 lakh crore at the top of the range.",
    ],
    body: [
      "What's going on here?",
      "On 9 October 2026, Bloomberg cited people familiar with the matter saying Jio Platforms will set its initial public offering price band between ₹1,065 and ₹1,119 per share. At the upper end, the issue could raise about ₹30,200 crore and value the Reliance-controlled digital business near ₹12 lakh crore. The band is not yet final until bankers and regulators sign off, but it sets expectations for one of India’s largest listings in years.",
      "What does this mean?",
      "A tight band tells institutional investors where the promoter is willing to sell and how much dilution is on offer. Jio bundles telecom, fibre, and digital services that millions of households already pay for each month. A high valuation leans on continued subscriber revenue and data use, not a single quarter of profit. For the wider market, a mega IPO can pull liquidity away from mid-cap names during the book-building window.",
      "Why should I care?",
      "If you plan to apply, wait for the official prospectus, not wire reports alone. Compare the band with listed peers on revenue per user and debt at the parent level. If you are a passive index investor, watch whether index providers include the stock quickly after listing and how much fresh paper hits the market in the same month as other large offers.",
    ],
  },
  {
    slug: "irb-festive-highway-toll-travel",
    title: "Festive travel pushed IRB’s highway toll collections up 24% in September",
    summary:
      "IRB Group said gross toll revenue reached ₹773 crore in September 2026, up from ₹622 crore a year earlier. The Mumbai-Pune expressway and Ahmedabad-Vadodara routes led the gain as Navaratri traffic picked up.",
    category: "industry",
    companyOrSector: "Infrastructure / travel",
    publishedAt: "2026-10-09T16:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("irb-festive-highway-toll-travel"),
    keyTakeaways: [
      "September 2026 gross toll revenue: ₹773 crore, up 24% year on year.",
      "Mumbai-Pune expressway collections rose to ₹162.1 crore.",
      "Management expects Navaratri and Diwali traffic to support the next two months.",
    ],
    body: [
      "What's going on here?",
      "On 9 October 2026, IRB Infrastructure reported that gross toll revenue across its highway portfolio reached ₹773 crore in September 2026, up 24% from ₹622 crore in September 2025. Wholly owned subsidiaries grew 17% on a like-for-like basis. The Mumbai-Pune expressway collected ₹162.1 crore versus ₹139.6 crore a year ago. Ahmedabad-Vadodara and Hyderabad outer ring assets also posted higher monthly receipts. Management linked the lift to economic activity and the start of the festive travel season.",
      "What does this mean?",
      "Toll receipts are a blunt read on wheeled trips: goods trucks, inter-city cars, and holiday buses. A September jump ahead of Navaratri and Diwali fits the pattern seen in other discretionary data this week, where people still spend when the occasion is clear. Not every road in the portfolio grew; a few mature assets were flat or slightly down, which is normal when comparing overlapping construction phases.",
      "Why should I care?",
      "If you track consumer demand, highway cash registers are a ground-level check beyond mall footfall surveys. If you invest in road operators or InvITs, one strong month does not reset traffic risk from fuel prices or monsoon disruptions. Watch October and November collections for confirmation that festive traffic sustained, and whether newer assets added in 2026 keep ramping without cannibalising older routes.",
    ],
  },
  {
    slug: "india-e3w-sales-september-surge",
    title: "Electric three-wheelers took nearly two-thirds of India’s 3W market in September",
    summary:
      "FADA data for September 2026 show electric three-wheeler retail sales at 86,024 units, up 40% year on year. Their share of total three-wheeler sales rose to 64.9% from 56.7% a year earlier.",
    category: "industry",
    companyOrSector: "Auto / EV",
    publishedAt: "2026-10-09T15:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("india-e3w-sales-september-surge"),
    keyTakeaways: [
      "September 2026 e3W sales: 86,024 units, up 40% year on year.",
      "Market share within three-wheelers: 64.9% versus 56.7% in September 2025.",
      "FADA published the retail tally on 9 October 2026.",
    ],
    body: [
      "What's going on here?",
      "On 9 October 2026, the Federation of Automobile Dealers Associations released September 2026 retail data for three-wheelers. Electric models reached 86,024 units, up 40% from 61,434 units in September 2025. Their share of all three-wheeler sales climbed to 64.9% from 56.7% a year earlier, an 8.2 percentage point shift in one year. The numbers cover dealer dispatches to buyers, not factory wholesale alone.",
      "What does this mean?",
      "Last-mile passenger and cargo trips in Indian cities still lean heavily on three-wheelers. When the electric slice crosses nearly two-thirds of the category, it is no longer a pilot niche. Lower running costs, local subsidies, and financing for fleet buyers all pull in the same direction. Petrol three-wheelers are not gone, but each percentage point of share is a permanent change in what dealers stock and what drivers service.",
      "Why should I care?",
      "If you buy or operate a fleet, compare total cost of ownership, battery warranty, and charging access on your routes before switching. If you follow auto stocks, pair this print with two-wheeler and commercial vehicle data to see whether urban mobility demand is broad or isolated. Watch whether state incentive schemes change after the festive quarter and whether finance companies tighten loans on older petrol inventory.",
    ],
  },
  {
    slug: "india-gold-import-bank-tax-parity",
    title: "Banks importing gold now pay the same GST as everyone else",
    summary:
      "Revenue Secretary Arvind Shrivastava told the GST Council on 8 October 2026 that India did not renew a tax break for banks on bullion imports. Lenders have been paying 3% integrated GST on gold, silver, and platinum brought in through bank channels since April.",
    category: "industry",
    companyOrSector: "Bullion / GST",
    publishedAt: "2026-10-09T08:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("india-gold-import-bank-tax-parity"),
    keyTakeaways: [
      "The earlier bank-specific benefit on precious metal imports was not extended, per the revenue secretary.",
      "Banks have faced 3% IGST on gold, silver, and platinum imports since April 2026.",
      "Officials cited tax parity across different import routes for bullion.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, Revenue Secretary Arvind Shrivastava briefed the Goods and Services Tax Council on precious metal imports. He said the government did not extend a tax benefit that had applied to banks bringing gold, silver, and platinum into India. Local media reported that lenders have been paying a 3% integrated goods and services tax on those imports since April. The change was framed as aligning how bullion enters the country whether the buyer is a bank, a trader, or another importer.",
      "What does this mean?",
      "India imports most of its gold. Banks play a big role in channelling metal to jewellers and refiners. When one route enjoyed lighter tax treatment, arbitrage followed. Charging the same integrated GST on bank imports closes that gap. It is a compliance and revenue story more than a retail price shock. Jewellery shops still set prices off global rates, duties, and local margins. The shift mainly changes the economics for banks and large bullion desks that had relied on the old break.",
      "Why should I care?",
      "If you buy gold jewellery, watch global prices and making charges first. This rule change is about how metal lands in India, not a new festival discount. If you work in bullion banking or imports, re-check landed cost models from April onward. Watch whether other import channels report similar parity steps and whether the Council discusses bullion again at its next rate-focused meeting.",
    ],
  },
  {
    slug: "gst-wider-input-tax-credits",
    title: "The GST Council wants more business costs to count for tax credits",
    summary:
      "After its 8 October 2026 meeting, the Council recommended letting firms claim input tax credit on more expenses, including staff health and life insurance, telecom towers outside factory gates, and certain free samples. Colgate-Palmolive India shares rose sharply on Friday as investors priced in easier working capital for consumer goods makers.",
    category: "industry",
    companyOrSector: "GST / FMCG",
    publishedAt: "2026-10-09T07:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("gst-wider-input-tax-credits"),
    keyTakeaways: [
      "Recommended ITC expansion covers employee health and life insurance premiums.",
      "Telecom towers and pipelines outside factory premises could qualify for credit.",
      "Free samples and some law-mandated write-offs may also become credit-eligible.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, the Goods and Services Tax Council met and backed a wider set of input tax credits for businesses. The package would let companies offset GST paid on more day-to-day costs. Draft recommendations include employee health and life insurance, telecom towers and pipelines that sit outside factory premises, free samples, and goods written off after expiry when law requires destruction. Officials pitched the move as cutting tax cascading and freeing working capital. Colgate-Palmolive India shares jumped as much as 8% on 9 October as the market linked the reforms to personal care and household brands with heavy marketing spend.",
      "What does this mean?",
      "Input tax credit is the mechanism that stops tax from piling up at every stage of production. When credits are blocked on insurance, towers, or samples, cash gets trapped until refunds clear. Opening those categories helps FMCG and infrastructure-heavy firms more than a pure software exporter. The Council’s penalty easing, announced the same day, addressed fear of enforcement. This piece addresses which invoices you can net off. Rates themselves were left unchanged.",
      "Why should I care?",
      "If you run a small business, ask your accountant which expenses may soon qualify once rules are notified. If you invest in consumer names, one-day stock moves are not the whole story. Watch the fine print on implementation dates and whether states ratify quickly. If credits flow as promised, margins and cash conversion can improve without a headline tax cut.",
    ],
  },
  {
    slug: "hindalco-odisha-mine-private-network",
    title: "Hindalco is building its own mobile network inside an Odisha mine",
    summary:
      "Vi Business and Hindalco Industries said on 8 October 2026 they will deploy a private network at the Baphlimali bauxite mine in Odisha. The multi-year deal covers dedicated spectrum, core, radio access, and managed services for safety, fleet, and surveillance tools.",
    category: "industry",
    companyOrSector: "Mining / telecom",
    publishedAt: "2026-10-09T07:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("hindalco-odisha-mine-private-network"),
    keyTakeaways: [
      "Partnership between Vi Business and Hindalco at the Baphlimali bauxite mine.",
      "Private network includes spectrum, core, RAN, and managed services.",
      "Use cases include worker safety, fleet management, surveillance, and a central command centre.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, Vi Business and Hindalco Industries announced a private mobile network at Hindalco’s Baphlimali bauxite mine in Odisha. The contract runs for multiple years. Vi will supply dedicated spectrum, a mobile core, radio access gear, and managed services. Hindalco called it the company’s first standalone private network at a mine site. The setup will feed an integrated command and control centre that watches trucks, workers, and equipment in real time.",
      "What does this mean?",
      "Open-pit mines are noisy, dusty, and spread out. Public 4G often struggles at depth or behind haul roads. A private network gives the operator control over coverage and priority for safety alerts. Fleet routing, CCTV, and environmental monitoring need stable bandwidth. Aluminium makers face pressure on costs and ESG reporting. Digitising a captive mine is a way to cut downtime and document compliance without waiting for nationwide tower upgrades.",
      "Why should I care?",
      "If you follow metals or mining, this is capex aimed at yield and safety, not a consumer tariff change. If you work in enterprise telecom, private 5G at factories and mines is a growing revenue line as carriers hunt beyond smartphone plans. Watch whether other ore and coal sites copy the model and whether Vi signs similar deals with rivals such as Airtel or Jio in other commodities.",
    ],
  },
  {
    slug: "fssai-glp-protein-supplement-notices",
    title: "India’s food regulator just called out protein drinks sold on Amazon and Flipkart",
    summary:
      "On 8 October 2026, FSSAI issued notices to Dr Reddy’s, Nestle Health Science, Tirupati Wellness, Amazon, Flipkart, and Netmeds over Celevida GLP marketing. The regulator said pack claims about muscle, immunity, and GLP-1 therapies could mislead shoppers.",
    category: "industry",
    companyOrSector: "Food safety / e-commerce",
    publishedAt: "2026-10-09T02:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("fssai-glp-protein-supplement-notices"),
    keyTakeaways: [
      "Notices on 8 October 2026 covered Celevida GLP sold on major e-commerce and pharmacy platforms.",
      "FSSAI flagged claims tying the product to GLP-1/GIP therapies and lean muscle preservation.",
      "Named parties include Dr Reddy’s, Nestle Health Science, Amazon, Flipkart, and Netmeds.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, the Food Safety and Standards Authority of India said it sent notices to Dr Reddy’s, Nestle Health Science, Tirupati Wellness, Amazon, Flipkart, and Netmeds. The case centres on Celevida GLP, a health supplement sold online. FSSAI posted on social media that advertising described the drink as high-protein support during GLP-1 and GIP therapies. Pack claims mentioned muscle strength, immunity support, and energy metabolism. The regulator said those claims could mislead buyers about what the product actually does.",
      "What does this mean?",
      "GLP-1 weight-loss drugs have moved from clinics into dinner-table conversation. Supplement makers often market protein powders and drinks beside that trend. FSSAI is drawing a line between food products and drug-linked promises. When a listing sits on Amazon or Flipkart, the platform and the brand both face questions about who checked the label. This is enforcement, not a new tax or ban. Shelves may stay stocked while companies respond to the notices.",
      "Why should I care?",
      "If you buy protein drinks or wellness powders online, read the label and the fine print on the listing. A product that mentions GLP-1 therapies is making a serious health claim. If you sell food or supplements, expect more scrutiny on marketplace copy, not just factory standards. Watch whether FSSAI widens the sweep beyond this SKU and whether platforms tighten listing rules after the notices.",
    ],
  },
  {
    slug: "smirnoff-ice-rtd-india-launch",
    title: "United Spirits is betting India’s next drinkers want canned cocktails",
    summary:
      "United Spirits launched Smirnoff Ice and Smirnoff Ice Max in Goa, Bengaluru, and Mumbai on 8 October 2026. The move targets ready-to-drink cocktails as vodka sales already neared ₹250 crore in the June quarter.",
    category: "industry",
    companyOrSector: "Alcohol / consumer",
    publishedAt: "2026-10-09T02:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("smirnoff-ice-rtd-india-launch"),
    keyTakeaways: [
      "Two RTD variants: 4% ABV Smirnoff Ice and 8% ABV Smirnoff Ice Max in jamun, cranberry, and citrus flavours.",
      "Rollout started in Goa, Bengaluru, and Mumbai ahead of the festive season.",
      "Smirnoff net sales value neared ₹250 crore in Q1 FY27 after about ₹350 crore in all of FY26.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, United Spirits introduced Smirnoff Ice in India’s ready-to-drink segment. The Diageo-backed company is selling Smirnoff Ice at 4% alcohol by volume and Smirnoff Ice Max at 8%, in flavours such as jamun, cranberry, and citrus. Sales began in Goa, Bengaluru, and Mumbai, with more cities planned before the festive season. Management said Smirnoff’s net sales value was already close to ₹250 crore in the first quarter of FY27, after roughly ₹350 crore across FY26.",
      "What does this mean?",
      "Ready-to-drink cocktails are still tiny next to beer, but they are growing faster than the global average. Indian drinkers have leaned toward stronger, flavour-led cans rather than the light seltzers that sold in the US. United Spirits is trying to catch people on new occasions, not only when they pour vodka at home. Karnataka’s recent beer tax experiment showed how rule changes can shift what people buy. This launch is a bet that younger legal-age buyers will mix formats when the product is easy to grab chilled.",
      "Why should I care?",
      "If you follow consumer names, RTD is a margin and shelf-space fight between beer, whisky, and canned cocktails. United Spirits did not publish a sales target for Smirnoff Ice yet. If you are a shopper, prices and availability will vary by state excise rules. Watch whether rivals such as Bacardi or local brewers push their own canned lines after the festive rollout, and whether jamun-style flavours keep winning in north India as they did for flavoured vodka.",
    ],
  },
  {
    slug: "india-bess-storage-viability-wall",
    title: "Aggressive battery-storage bids are starting to unravel in India",
    summary:
      "Mint reported on 8 October 2026 that cancelled or re-tendered battery storage projects have reached about 24 GWh since 2018, while many new awards were bid below viable tariffs. Experts warn up to a third of awarded capacity may struggle to reach financial close.",
    category: "industry",
    companyOrSector: "Power / renewables",
    publishedAt: "2026-10-09T01:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("india-bess-storage-viability-wall"),
    keyTakeaways: [
      "About 24 GWh of BESS capacity was cancelled or re-tendered between 2018 and 2026, per IESA data cited in reporting.",
      "That figure is over 11% of the 208 GWh storage target for this decade.",
      "Developers quoted sub-₹2 per unit tariffs while viable levels are closer to ₹2.4, according to industry sources in the story.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, reporting highlighted strain in India’s battery energy storage pipeline. Battery systems hold solar and wind power for use later. The government wants them bundled into future renewable tenders. Yet the India Energy Storage Alliance counted about 24 gigawatt-hours of projects cancelled or sent back for rebidding since 2018. That is more than one-tenth of the central target of 208 GWh by 2030. NTPC terminated a Maharashtra storage contract in September after the contractor missed milestones. Other states have annulled or challenged large tenders when tariffs or technical rules shifted after bids closed.",
      "What does this mean?",
      "Many developers bid very low tariffs, sometimes under ₹2 per kilowatt-hour, hoping battery prices would keep falling. Cell costs jumped after policy shifts in China during 2026. Viability gap funding awards also face stress when bidders underprice the work. Discoms and regulators want cheap storage, but banks need projects that can service debt. When contracts break, timelines slip and renewable firms must find other ways to balance the grid.",
      "Why should I care?",
      "Households feel this through power reliability and industrial tariffs, not through a stock tip. If storage slips, solar and wind farms may waste more midday power or depend on costly backups. If you work in energy or infrastructure debt, watch financial closure rates on rebid tenders. Retendered projects are quoting closer to ₹2.35 per unit in some cases, which is a sign the market is repricing risk after the cancellation wave.",
    ],
  },
  {
    slug: "us-perm-it-green-card-pause",
    title: "Washington just froze the green card queue for India’s largest IT firms",
    summary:
      "The US Labour Department suspended Cognizant, Infosys, TCS, Wipro, HCL, and Capgemini from the Permanent Labour Certification (PERM) programme on 8 October 2026. Microsoft and Adobe were suspended too. New and pending PERM filings for those employers will not move while the ban lasts.",
    category: "industry",
    companyOrSector: "IT services / US immigration",
    publishedAt: "2026-10-08T22:30:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("us-perm-it-green-card-pause"),
    keyTakeaways: [
      "PERM lets US employers sponsor H-1B workers for green cards; Labour will not accept new or pending filings for the named firms.",
      "Suspended Indian IT names include Cognizant, Infosys, TCS, Wipro, HCL, and Capgemini.",
      "DHS also proposed steep new fees for student OPT work permits on 7 October, tightening another US hiring pipeline.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, US Labour Secretary Keith Sonderling said the department is suspending several large technology employers from the Permanent Labour Certification programme. Indian IT services firms on the list include Cognizant, Infosys, Tata Consultancy Services, Wipro, HCL, and Capgemini. Microsoft and Adobe were suspended as well, with officials citing active federal investigations. The department said it will not accept new PERM applications and will not process pending ones involving those companies.",
      "What does this mean?",
      "PERM is the step many US employers use before they can sponsor an H-1B worker for a green card. A suspension does not cancel existing visas overnight. It stops the permanent residency pipeline for new filings at these employers while the ban is in force. For Indian IT services firms, US revenue depends on teams that rotate between India and client sites. Slower green card processing can make US postings less attractive and push hiring toward offshore delivery centres.",
      "The announcement landed a day after the Department of Homeland Security proposed large new fees for Optional Practical Training, another route foreign students use to work in the US after graduation. Taken together, the moves tighten legal paths from student visa to long-term US employment.",
      "Why should I care?",
      "If you work in IT services or plan to, client work in the US may still happen on short-term visas even when PERM is paused. Career planning for US residency through a suspended employer needs a reset. If you invest in IT stocks, this is a policy shock to how those firms staff US projects, not a comment on one quarter’s revenue. Watch whether clients shift work offshore, whether rivals not on the list gain share, and whether Washington lifts suspensions after investigations close.",
    ],
  },
  {
    slug: "ola-electric-rights-issue-choice",
    title: "Ola Electric is asking shareholders to pay again or own less",
    summary:
      "Ola Electric set a ₹27 rights issue price on 8 October 2026 to raise about ₹1,000 crore, roughly four months after a ₹780 crore institutional round. Shareholders must subscribe, sell their rights, or accept dilution when the issue opens on 22 October.",
    category: "company",
    companyOrSector: "Ola Electric / EV",
    publishedAt: "2026-10-08T22:00:00+05:30",
    readMinutes: 2,
    image: deskHeroImage("ola-electric-rights-issue-choice"),
    keyTakeaways: [
      "Rights issue: two shares for every 25 held at ₹27; record date 13 October; issue opens 22 October.",
      "Company earmarked ₹350 crore for debt repayment and ₹400 crore for R&D, manufacturing, and sales.",
      "September VAHAN registrations about 13,449 units, near 6.5% two-wheeler EV share.",
    ],
    body: [
      "What's going on here?",
      "On 8 October 2026, Ola Electric finalised terms for a ₹1,000 crore rights issue. Eligible shareholders get two new shares for every 25 they hold at ₹27 each. The record date is 13 October. The issue opens on 22 October and closes on 30 October. The price sits below the previous day’s market close, so investors face a familiar rights choice: put in more cash, sell the entitlement, or do nothing and let ownership shrink.",
      "What does this mean?",
      "Rights issues are a way to raise equity from people who already own the stock. Ola said about ₹350 crore will repay debt and about ₹400 crore will fund research, manufacturing, and sales infrastructure. The rest of the proceeds depend on how much call money shareholders pay over time. The fundraising follows a ₹780 crore institutional round in June. Two capital calls in one year signal the business still burns cash while it fights for scooter market share.",
      "June-quarter revenue fell sharply year on year even as the net loss narrowed. Operating cash outflow widened. September registration data put Ola near 6.5% of India’s electric two-wheeler market, behind TVS, Bajaj, Ather, and Hero. Founder Bhavish Aggarwal pledged shares to fund his own rights subscription, which keeps control but adds scrutiny.",
      "Why should I care?",
      "If you hold Ola shares, read the letter of offer before the record date. Subscribing protects your stake but sends more money into a company that is still losing cash. Selling rights entitlements captures some value without subscribing. Letting rights lapse is the cheapest option today and the most dilutive tomorrow. If you only follow EVs as a buyer, the rights issue does not change showroom prices immediately. It does show how much capital the company needs while volumes remain well below last year’s peaks.",
    ],
  },
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
  "nppa-cancer-drug-trade-margin-cap": "policy",
  "jio-platforms-ipo-price-band": "markets",
  "irb-festive-highway-toll-travel": "companies",
  "india-e3w-sales-september-surge": "companies",
  "india-gold-import-bank-tax-parity": "policy",
  "gst-wider-input-tax-credits": "policy",
  "hindalco-odisha-mine-private-network": "companies",
  "fssai-glp-protein-supplement-notices": "policy",
  "smirnoff-ice-rtd-india-launch": "companies",
  "india-bess-storage-viability-wall": "policy",
  "us-perm-it-green-card-pause": "policy",
  "ola-electric-rights-issue-choice": "companies",
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
