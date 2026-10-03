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
};

export type Advisor = {
  slug: string;
  name: string;
  license: string;
  startedIn: number;
  social: { label: string; url: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  kind: "guide" | "tool";
  publishedAt: string;
  readMinutes?: number;
  body: string[];
  toolUrl?: string;
};

export const newsFeed: NewsItem[] = [
  {
    slug: "nvidia-earnings-rally",
    headline: "Nvidia rallies 6% after stronger-than-expected earnings",
    summary:
      "Data-centre demand stayed ahead of Street forecasts. Guidance lifted chip and AI-linked names across Asia.",
    source: "Reuters",
    publishedAt: "2026-08-24T10:00:00+05:30",
    topic: "companies",
    url: "https://www.reuters.com/",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    slug: "rbi-pause-liquidity",
    headline: "RBI holds rates; liquidity tweak calms bond yields",
    summary:
      "The policy repo stay was widely expected. A modest durable liquidity injection pulled G-sec yields off session highs.",
    source: "Economic Times",
    publishedAt: "2026-08-24T08:00:00+05:30",
    topic: "economy",
    url: "https://economictimes.indiatimes.com/",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
  },
  {
    slug: "hdfc-bank-nil-growth",
    headline: "HDFC Bank loan growth slows; deposit franchise still sturdy",
    summary:
      "Management guided for a gradual catch-up after the merger overhang. NIMs held within the guided band.",
    source: "Mint",
    publishedAt: "2026-08-24T06:30:00+05:30",
    topic: "companies",
    url: "https://www.livemint.com/",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  },
  {
    slug: "reliance-jio-capex",
    headline: "Reliance earmarks fresh Jio capex as ARPU climbs",
    summary:
      "The conglomerate reiterated a multi-year spectrum and fibre plan. Street focus stays on cash conversion in telecom.",
    source: "Bloomberg",
    publishedAt: "2026-08-23T18:00:00+05:30",
    topic: "companies",
    url: "https://www.bloomberg.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    slug: "fpis-equity-buying",
    headline: "FPIs turn net buyers of Indian equities after six sessions",
    summary:
      "Flows concentrated in financials and large-cap IT. Domestic institutions stayed selective in midcaps.",
    source: "Moneycontrol",
    publishedAt: "2026-08-22T16:00:00+05:30",
    topic: "markets",
    url: "https://www.moneycontrol.com/",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
  },
  {
    slug: "gst-council-rates",
    headline: "GST Council keeps rates unchanged; compliance focus rises",
    summary:
      "No broad rate rejig. Officials emphasised invoice matching and refund timelines for exporters.",
    source: "Hindu Business Line",
    publishedAt: "2026-08-22T12:00:00+05:30",
    topic: "policy",
    url: "https://www.thehindubusinessline.com/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    slug: "ipo-pipeline-september",
    headline: "September IPO calendar fills out with three mainboard names",
    summary:
      "Bankers expect healthy subscription if secondary markets hold. Anchor books already circling two of the issues.",
    source: "Reuters",
    publishedAt: "2026-08-22T09:00:00+05:30",
    topic: "markets",
    url: "https://www.reuters.com/",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80",
  },
  {
    slug: "us-pce-soft",
    headline: "US PCE cools; Asia futures open firmer",
    summary:
      "A softer print revived rate-cut chatter. Asian ADR baskets and semiconductor futures led the overnight move.",
    source: "Bloomberg",
    publishedAt: "2026-08-21T21:00:00+05:30",
    topic: "economy",
    url: "https://www.bloomberg.com/",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
];

export const researchArticles: ResearchArticle[] = [
  {
    slug: "india-it-services-margin-cycle",
    title: "India IT services: where margins go from here",
    summary:
      "A plain read on utilisation, pyramid mix, and deal TCV — without the quarterly cheerleading.",
    category: "industry",
    companyOrSector: "IT services",
    publishedAt: "2026-08-18T10:00:00+05:30",
    readMinutes: 12,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    body: [
      "Indian IT services are no longer a pure volume story. Clients are still buying, but they are buying differently: fewer large transformations announced in public, more cost-takeout and selective AI pilots.",
      "Margin defence now sits in three places — utilisation discipline, offshore mix, and how aggressively firms discount to win logo work.",
      "For operators and investors, the useful question is whether pricing power returns when discretionary US financials spend stabilises.",
    ],
  },
  {
    slug: "nbfc-liquidity-and-funding",
    title: "NBFCs: funding costs after the liquidity squeeze",
    summary:
      "How wholesale-funded lenders are repricing books, and which balance sheets look resilient.",
    category: "industry",
    companyOrSector: "NBFCs",
    publishedAt: "2026-08-12T09:00:00+05:30",
    readMinutes: 10,
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&q=80",
    body: [
      "Wholesale funding spreads widened when markets priced a longer pause from the RBI. That hit growth NBFCs harder than deposit-led banks.",
      "The cleanest read-through is on incremental cost of funds versus what they can pass on to borrowers without stalling disbursements.",
      "Watch ALM gaps under one year, and how much of the book still floats with the repo.",
    ],
  },
  {
    slug: "reliance-cash-engine",
    title: "Reliance: reading the cash engine beyond Jio headlines",
    summary: "Retail, O2C, and digital — what still funds the next decade of capex.",
    category: "company",
    companyOrSector: "Reliance Industries",
    publishedAt: "2026-08-08T11:00:00+05:30",
    readMinutes: 14,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    body: [
      "Jio gets the attention; O2C and retail still pay a large share of the bills.",
      "Spectrum and fibre spend should be judged against ARPU trajectory and competitive intensity.",
      "For a global allocator, the stock is a conglomerate discount problem as much as a growth story.",
    ],
  },
  {
    slug: "hdfc-bank-after-merger",
    title: "HDFC Bank after the merger: growth vs franchise quality",
    summary:
      "Loan growth, deposit costs, and what “normalisation” actually means on this balance sheet.",
    category: "company",
    companyOrSector: "HDFC Bank",
    publishedAt: "2026-08-02T08:30:00+05:30",
    readMinutes: 11,
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80",
    body: [
      "The merger overhang was never only about CET1 maths. It was about how fast the combined entity could grow loans without paying up for deposits.",
      "Franchise quality still shows up in liability mix.",
      "Compare incremental credit costs and deposit costs together — not in isolation from the industry.",
    ],
  },
  {
    slug: "semiconductors-asia-supply",
    title: "Asia semiconductors: supply, pricing, and India exposure",
    summary: "A map of where Indian portfolios actually touch the chip cycle.",
    category: "industry",
    companyOrSector: "Semiconductors",
    publishedAt: "2026-07-28T10:00:00+05:30",
    readMinutes: 9,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    body: [
      "Most Indian retail exposure to semiconductors is still via US ADRs and a handful of domestic design/OSAT names.",
      "Pricing power in memory and logic moves on different clocks.",
      "Policy incentive schemes matter for the long build-out; they do not change next quarter’s ASP.",
    ],
  },
];

export const advisors: Advisor[] = [
  {
    slug: "meera-joshi",
    name: "Meera Joshi",
    license: "SEBI RIA · INA000013482",
    startedIn: 2016,
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "X", url: "https://x.com/" },
    ],
  },
  {
    slug: "arjun-desai",
    name: "Arjun Desai",
    license: "SEBI PMS · INP000005901",
    startedIn: 2014,
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "Website", url: "https://example.com" },
    ],
  },
  {
    slug: "priya-natarajan",
    name: "Priya Natarajan",
    license: "SEBI RIA · INA000009771",
    startedIn: 2018,
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "Substack", url: "https://substack.com/" },
    ],
  },
  {
    slug: "aditya-rao",
    name: "Aditya Rao",
    license: "SEBI RIA · INA000012440",
    startedIn: 2019,
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "X", url: "https://x.com/" },
    ],
  },
];

export const guides: Guide[] = [
  {
    slug: "start-global-investing-india",
    title: "How to start investing globally from India",
    summary: "Brokers, LRS limits, tax basics, and a simple first portfolio.",
    kind: "guide",
    publishedAt: "2026-08-10T10:00:00+05:30",
    readMinutes: 8,
    body: [
      "Decide the job of the global sleeve first: diversification, USD income, or a specific theme.",
      "Under LRS, track the annual remittance limit and bank paperwork early.",
      "Prefer a small number of broad ETFs over a long list of single names until you have a reason to concentrate.",
    ],
  },
  {
    slug: "read-a-10k-in-30-minutes",
    title: "Read a US 10-K in 30 minutes",
    summary: "Where to look first: business, risks, liquidity, and related parties.",
    kind: "guide",
    publishedAt: "2026-08-01T09:00:00+05:30",
    readMinutes: 6,
    body: [
      "Start with Item 1 (business) and Item 1A (risk factors).",
      "Cash flow from operations versus free cash flow tells you if growth is self-funded.",
      "Related-party notes and share-based compensation often explain more than the MD&A highlight reel.",
    ],
  },
  {
    slug: "lrs-remittance-checklist",
    title: "LRS remittance checklist",
    summary: "A one-page checklist before you wire money abroad.",
    kind: "tool",
    publishedAt: "2026-07-20T10:00:00+05:30",
    toolUrl: "#checklist",
    body: [
      "Confirm purpose code with your bank (portfolio investment vs others).",
      "Keep PAN, Form 15CA/CB path, and broker account proof ready.",
      "Note the USD amount, INR debit, and FX rate print on the same day for your records.",
    ],
  },
  {
    slug: "asset-allocation-worksheet",
    title: "Simple asset allocation worksheet",
    summary: "A lightweight sheet to split INR vs USD risk without overbuilding.",
    kind: "tool",
    publishedAt: "2026-07-12T10:00:00+05:30",
    toolUrl: "#worksheet",
    body: [
      "List goals with a year attached.",
      "Cap single-stock risk in both sleeves.",
      "Rebalance on calendar or bands — pick one rule and write it down.",
    ],
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
