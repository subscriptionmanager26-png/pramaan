import { deskNewsItems, deskNotes } from "@/lib/desk-notes";

export type NewsItem = {
  slug: string;
  headline: string;
  summary: string;
  source: string;
  publishedAt: string;
  topic: "markets" | "economy" | "companies" | "policy";
  url: string;
  image: string;
};

export type ResearchArticle = {
  slug: string;
  title: string;
  summary: string;
  category: "industry" | "company";
  companyOrSector: string;
  publishedAt: string;
  readMinutes: number;
  image: string;
  body: string[];
  /** Optional bullets shown above the body on thematic desk notes. */
  keyTakeaways?: string[];
  /** Short source line for advisor-feed / filing synthesis pieces. */
  sourceNote?: string;
};

export type Advisor = {
  slug: string;
  name: string;
  license: string;
  startedIn: number;
  bio: string;
  image: string;
  social: { label: string; url: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  kind: "guide" | "tool";
  publishedAt: string;
  readMinutes?: number;
  image: string;
  body: string[];
  toolUrl?: string;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_SHORT =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_MID =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

/** News rail — desk notes link internally to `/research/[slug]`. */
export const newsFeed: NewsItem[] = [
  ...deskNewsItems,
  {
    slug: "tata-consumption-trent-titan-q2",
    headline: "Same festive calendar, two different machines: why Trent jumped and Titan slipped",
    summary:
      "Trent beat because existing stores bled less — even while opening fewer doors than expected. Titan’s jewellery miss was about fewer new buyers leaning on bigger tickets. One story is productivity healing; the other is price-heavy growth.",
    source: "Pramaan Desk",
    publishedAt: "2026-10-07T12:00:00+05:30",
    topic: "companies",
    url: "/research/tata-consumption-trent-titan-q2",
    image: "https://picsum.photos/seed/pramaan-tata-consumption/1200/750",
  },
  {
    slug: "gold-loans-surge-into-rate-hike",
    headline: "Gold loans look like a credit boom. A lot of it is gold prices doing the work.",
    summary:
      "When gold rises, the same jewellery unlocks a bigger loan. That inflates AUM — then the RBI hikes rates. The boom and the risk are the same collateral.",
    source: "Pramaan Desk",
    publishedAt: "2026-10-07T12:30:00+05:30",
    topic: "economy",
    url: "/research/gold-loans-surge-into-rate-hike",
    image: "https://picsum.photos/seed/pramaan-gold-loans/1200/750",
  },
];

/**
 * Thematic desk notes (multi-name / sector pieces).
 * Company deep memos live in `@/lib/articles`; these render via `/research/[slug]` fallback.
 */
export const researchArticles: ResearchArticle[] = [
  ...deskNotes,
  {
    slug: "tata-consumption-trent-titan-q2",
    title: "Same festive calendar, two different machines: why Trent jumped and Titan slipped",
    summary:
      "Trent’s surprise was not “more stores.” Revenue beat estimates even while openings lagged, because existing floor space stopped bleeding as badly. Titan’s jewellery miss was the opposite shape: growth leaned on bigger tickets while new buyers slowed — fragile when gold is expensive and Diwali sits in Q3.",
    category: "industry",
    companyOrSector: "Tata consumer / retail",
    publishedAt: "2026-10-07T12:00:00+05:30",
    readMinutes: 8,
    image: "https://picsum.photos/seed/pramaan-tata-consumption/1200/750",
    keyTakeaways: [
      "The behaviour change: Trent’s growth quality improved (less productivity drag) even as store additions undershot; Titan’s jewellery growth got more ticket-size heavy as buyer growth cooled to mid-single digits.",
      "Trent Q2: ₹5,788 cr revenue (+23% YoY) vs Citi’s ~18% estimate; only ~30 net stores vs ~44 expected — yet revenue/sq ft decline eased to ~−8.4% from −12–16% in prior quarters.",
      "Titan Q2: jewellery ~+21% (miss vs many ~25–27% estimates); buyers mid-single digits, tickets double digits; studded early-30s vs plain gold ~20%; coins weak; watches +30%, EyeCare +28%.",
      "Stock tape matched the insight: Trent +12–13% on the update; Titan −3 to −5% the next morning — same festive shift, opposite machines.",
    ],
    sourceNote:
      "Built from Trent and Titan exchange business updates, broker wraps (Citi, CLSA, Nomura, JPMorgan, Morgan Stanley via Upstox / Financial Express), and Pramaan-indexed advisor chatter. Verify against filings.",
    body: [
      "The one-line insight: do not treat “Tata consumption grew” as one fact. This week showed two machines. Trent’s machine improved because existing stores worked harder. Titan’s jewellery machine leaned harder on people spending more per visit — while fewer new buyers showed up.",
      "Think of a mall with two shops. Shop A (Trent / Zudio–Westside) had been opening doors so fast that each older door was selling a little less. That is productivity drag: revenue still rises, but the square foot is soft. Shop B (Titan jewellery) can also grow revenue without many new customers if each customer walks out with a bigger bill — especially when gold prices are high. Same “sales up” headline; completely different health check.",
      "What actually changed at Trent. Standalone Q2 FY27 revenue was ₹5,788 crore, up 23% from ₹4,724 crore. Zudio crossed 1,000 stores; the group ended at 1,342 stores after 17 net Zudio and 10 net Westside additions in the quarter. The market cared less about the 1,000th cake-cutting and more about the shape of the beat. Citi had modelled ~18% revenue growth and ~44 net store adds; Trent delivered faster revenue with only ~30 net adds, and with Diwali shifted into Q3. That combination usually means something else is doing the work: existing space. Citi’s own productivity proxy — average revenue per square foot — was still down ~8.4% year on year, but that is clearly better than the −12% to −16% declines of the prior four quarters. Broker notes that track sales-per-store told a similar story: the bleed eased sharply from Q1 into Q2. In plain English: the store maths stopped getting worse so fast — even before festive demand arrives.",
      "Why the stock jumped ~13%. Investors had been pricing Trent as “growth by square footage.” When growth accelerates while openings undershoot, the market briefly believes the harder thing: maturity, not just rollout. The caveats stay real — competition, cannibalisation, input-cost margins — which is why Citi stayed cautious even after calling the print a beat. Profit and cash conversion still have to prove the healing is durable. But the behaviour change this quarter is productivity, not another store-count victory lap.",
      "What actually changed at Titan. Consumer businesses grew ~25% overall (domestic ~22%, international ~97%). Jewellery — the franchise — grew ~21%. That number is not “bad growth.” It is slower than Q1’s ~39–41% pace and below several Street estimates in the mid-20s. Management and brokers pointed to the same three frictions: festive demand deferred into Q3, gold prices still elevated (Nomura cited gold ~46% higher year on year), and investment-led coin sales falling high-single digits from a high base. Strip coins out and Citi estimates underlying jewellery closer to 24–25%. The deeper tell is the buyer–ticket split: jewellery buyer growth in the mid-single digits, average ticket size in double digits. Studded jewellery grew early thirties versus ~20% for plain gold — mix that helps margins, but also confirms growth is riding value per visit more than a rush of new customers. CaratLane (+32%) outran the Tanishq–Mia–Zoya–beYon cluster (~20%). Watches (+30%) and EyeCare (+28%) were the cleaner engines.",
      "Why Titan slipped while Trent celebrated. Markets punish the wrong kind of miss. Trent’s miss-vs-model was on openings; revenue overshot. Titan’s miss was on jewellery revenue itself, with buyer growth cooling just as gold prices make each purchase harder. Premiumisation sounds sophisticated until you translate it: “we need the same (or fewer) people to spend more.” That works when aspirational demand is firm. It is brittle when rates are rising and gold is expensive. JPMorgan’s colour that July–August grew >25% and September softened on calendar shift is why the Street still hopes Q3 fixes the optics — but hope is not the insight. The insight is that Titan’s near-term growth quality is ticket-size heavy.",
      "The shared exam is December quarter. Both companies said demand stayed healthy for most of Q2 and that festive timing moved into Q3. So Q3 is not “another update.” It is the controlled experiment: does Trent’s productivity healing survive a real festive window, and does Titan’s buyer count reaccelerate once weddings and festivals land? If Trent’s revenue/sq ft keeps improving while openings stay disciplined, the market’s productivity thesis sticks. If Titan’s Q3 reacceleration is mostly higher gold tickets with soft buyer growth, the premiumisation story stays intact on paper and uncomfortable in the price.",
      "What this is not. It is not a buy or sell on TRENT or TITAN. It is a simpler read of a noisy week: two Tata consumer prints, one festive calendar, opposite stock reactions — because one business started healing how its existing doors sell, and the other leaned harder on how much each jewellery buyer spends.",
    ],
  },
  {
    slug: "gold-loans-surge-into-rate-hike",
    title: "Gold loans look like a credit boom. A lot of it is gold prices doing the work.",
    summary:
      "When gold prices rise, the same jewellery unlocks a bigger loan — so outstanding gold credit can surge without a matching surge in household stress stories. That AUM party just met the RBI’s first hike in years. The boom and the risk are the same collateral.",
    category: "industry",
    companyOrSector: "Gold loans / NBFC credit",
    publishedAt: "2026-10-07T12:30:00+05:30",
    readMinutes: 8,
    image: "https://picsum.photos/seed/pramaan-gold-loans/1200/750",
    keyTakeaways: [
      "The behaviour: rising gold prices inflate loan tickets against the same ornaments — AUM growth can look like demand when it is partly collateral revaluation.",
      "RBI data: NBFC gold loans +69.3% YoY to ₹3.41 lakh cr (June 2026) while overall NBFC credit was only mid-teens; CRIF: organised gold-loan AUM ~₹18.6 lakh cr (+50% YoY) by March, with a shift to larger tickets.",
      "Banks piled in (advisor notes flagged SBI personal gold loans near +97% YoY); Manappuram gold AUM nearly doubled in Q1 FY27 as non-gold lagged — competition intensifies just as policy tightens.",
      "7 Oct: RBI hiked 25 bps to 5.50% and shifted to calibrated tightening; JM Financial had already flagged gold financiers among the most rate-hike exposed NBFC cohorts.",
    ],
    sourceNote:
      "Built from RBI NBFC credit data (Indian Express), CRIF gold-loan industry colour (ET Now), Manappuram / Muthoot coverage (Mint), JM Financial / Emkay rate-hike NBFC notes, RBI MPC 7 Oct resolution, plus Pramaan-indexed advisor dashboards (Mata, Exencial/IIFL). Confirm official disclosures.",
    body: [
      "The one-line insight: a large slice of India’s gold-loan “boom” is not people suddenly discovering credit. It is higher gold prices raising how much cash the same jewellery can unlock. That makes the growth look spectacular — and it makes the risk travel with the same number.",
      "A simple picture. You pawn a chain. Last year the lender might advance ₹1 against it. If gold is worth much more this year, the same chain might unlock ₹1.40 under the same loan-to-value rule. Outstanding loans jump. The lender’s book looks like a growth rocket. Nothing magical happened to your income. The collateral got revalued. CRIF’s industry read for FY26 made that mechanism visible at scale: organised gold-loan AUM around ₹18.6 lakh crore by March 2026 (+50% year on year), with origination shifting toward larger tickets (share of loans above ₹2.5 lakh rising) even when account volumes were flatter. Premiumisation in gold lending is often gold-price math wearing a product label.",
      "What the official tape shows. RBI data for June 2026 put NBFC loans against gold jewellery up 69.3% year on year to ₹3.41 lakh crore — the fastest major retail bucket — while overall NBFC credit (including HFCs) grew only about 14%. Advisor dashboards in early October rhymed: Mata had NBFC credit ~+15.8% with gold ~+69%; IIFL’s banking note (via Exencial) had system bank loans ~+20% with gold loans inside that boom near +83%. Housing lagged. Large corporate loans were not the star. India’s credit impulse is real, but the fireworks are collateralised retail — gold first.",
      "Who is supplying the boom. Specialised NBFCs still matter, and they are leaning harder into gold. Manappuram’s Q1 FY27 showed gold-loan AUM nearly doubling, lifting gold to ~82% of consolidated AUM from ~65% a year earlier, while non-gold stayed muted; management talked 25–30% gold growth for FY27 versus Muthoot’s more modest ~15% target, plus hundreds of new gold branches after RBI eased prior-approval friction. Banks are not polite spectators. When a deposit franchise like SBI prints personal gold-loan growth near triple digits (as flagged in advisor notes), two things happen at once: the product is legitimised as mainstream household finance, and pure-play NBFCs face a competitor that funds cheaper. NBFCs’ share of gold origination value has risen (CRIF: roughly low-20s to low-30s over two years), but PSU banks still dominate originations. This is a land grab on a rising collateral pile — not a quiet niche.",
      "Then policy changed the weather. On 7 October the MPC unanimously raised the repo by 25 bps to 5.50% and shifted stance from neutral to calibrated tightening — rate cuts off the table near term; next move is hike or pause. Governor Malhotra’s framing was inflation risk from supply shocks (energy, food) meeting an economy strong enough to absorb some tightening, with credit growth itself on the watchlist (bank credit running high-teens). Emkay had already warned NBFC margins could compress ~5–15 bps on higher funding costs into a possible hike. JM Financial’s rate-hike playbook was blunter on cohorts: housing financiers relatively better placed; MFI, vehicle, and gold financiers among the most exposed — because wholesale-funded books feel the cost of funds before they can fully reprice sticky retail yields.",
      "Put the pieces together and the behaviour is clear. Gold-loan AUM is a joint function of (1) household need for liquidity, (2) formalisation of informal gold credit, and (3) the gold price that sizes every ticket. The industry celebrated (1) and (2). The last year overweight (3). Rising gold juiced tickets and LTVs that looked conservative on last year’s spot. That is fine while bullion stays elevated and funding is cheap. It is less fine when the RBI starts a tightening cycle and gold prices eventually mean-revert: recovery values shrink, competitive intensity from banks squeezes yields, and wholesale liabilities reprice first. The “credit boom” print can slow without India’s consumption story changing at all — because a chunk of the boom was never consumption. It was collateral.",
      "What to watch, simply. One: monthly gold-loan growth after the hike — does the fireworks cool, or does festive/rural liquidity demand keep the tape hot into December? Two: lender commentary on ticket size versus customer count (the same split that mattered for Titan jewellery). Three: bank versus NBFC share — if SBI-style books keep compounding, pure-play valuations must price share loss, not only credit cost. Four: gold price and LTV talk on earnings calls — if management needs today’s spot forever for today’s comfort, the cycle risk is already embedded.",
      "The reportable claim is narrow and practical. India’s gold-loan surge is a real product shift — and it is also a gold-price amplifier walking into higher policy rates. Read the AUM rocket with that in mind, not as proof that household leverage suddenly reinvented itself.",
    ],
  },
];

export const advisors: Advisor[] = [
  {
    slug: "lorem-advisor-one",
    name: "Lorem Ipsum",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2016,
    bio: LOREM,
    image: "https://picsum.photos/seed/pramaan-adv-1/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-two",
    name: "Dolor Sit Amet",
    license: "SEBI PMS · PLACEHOLDER",
    startedIn: 2014,
    bio: LOREM_SHORT,
    image: "https://picsum.photos/seed/pramaan-adv-2/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "Website", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-three",
    name: "Consectetur Elit",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2018,
    bio: LOREM_MID,
    image: "https://picsum.photos/seed/pramaan-adv-3/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "Substack", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-four",
    name: "Adipiscing Tempor",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2019,
    bio: LOREM,
    image: "https://picsum.photos/seed/pramaan-adv-4/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
];

export const guides: Guide[] = [
  {
    slug: "lorem-start-guide",
    title: "Lorem ipsum: how to start from scratch",
    summary: LOREM_SHORT,
    kind: "guide",
    publishedAt: "2026-09-26T10:00:00+05:30",
    readMinutes: 8,
    image: "https://picsum.photos/seed/pramaan-guide-1/1200/750",
    body: [LOREM, LOREM_MID, LOREM_SHORT],
  },
  {
    slug: "lorem-read-filing",
    title: "Ut enim ad minim: read a filing in 30 minutes",
    summary: LOREM_MID,
    kind: "guide",
    publishedAt: "2026-09-18T09:00:00+05:30",
    readMinutes: 6,
    image: "https://picsum.photos/seed/pramaan-guide-2/1200/750",
    body: [LOREM_SHORT, LOREM, LOREM_MID],
  },
  {
    slug: "lorem-checklist-tool",
    title: "Duis aute: remittance checklist",
    summary: LOREM,
    kind: "tool",
    publishedAt: "2026-09-10T10:00:00+05:30",
    image: "https://picsum.photos/seed/pramaan-guide-3/1200/750",
    toolUrl: "#checklist",
    body: [LOREM_SHORT, LOREM_MID, LOREM],
  },
  {
    slug: "lorem-allocation-tool",
    title: "Excepteur sint: simple allocation worksheet",
    summary: LOREM_SHORT,
    kind: "tool",
    publishedAt: "2026-09-05T10:00:00+05:30",
    image: "https://picsum.photos/seed/pramaan-guide-4/1200/750",
    toolUrl: "#worksheet",
    body: [LOREM, LOREM_SHORT, LOREM_MID],
  },
];

export function getResearch(slug: string) {
  return researchArticles.find((a) => a.slug === slug);
}

export function getAdvisor(slug: string) {
  return advisors.find((a) => a.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
