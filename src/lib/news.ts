export type NewsTopic = "latest" | "markets" | "economy" | "tech" | "business";

export type PortfolioHolding = {
  symbol: string;
  label: string;
  weight: string;
};

export type NewsStory = {
  slug: string;
  headline: string;
  summary: string;
  source: string;
  publishedAt: string;
  topic: NewsTopic;
  /** CSS color for placeholder thumbnail */
  thumb: string;
  /** Shown on For You cards */
  whyItMatters?: string;
  holding?: string;
  url: string;
};

export const portfolioHoldings: PortfolioHolding[] = [
  { symbol: "RELIANCE", label: "Reliance", weight: "9.2%" },
  { symbol: "NVDA", label: "Nvidia", weight: "12.4%" },
  { symbol: "HDFCBANK", label: "HDFC Bank", weight: "8.1%" },
  { symbol: "GOLDBEES", label: "Gold ETF", weight: "4.6%" },
  { symbol: "INFY", label: "Infosys", weight: "5.3%" },
  { symbol: "TCS", label: "TCS", weight: "4.8%" },
  { symbol: "ITC", label: "ITC", weight: "3.9%" },
  { symbol: "SBIN", label: "SBI", weight: "3.1%" },
  { symbol: "BAJFINANCE", label: "Bajaj Fin", weight: "2.8%" },
  { symbol: "AXISBANK", label: "Axis Bank", weight: "2.4%" },
];

export const newsStories: NewsStory[] = [
  {
    slug: "nvidia-earnings-rally",
    headline: "Nvidia rallies 6% after stronger-than-expected earnings",
    summary:
      "Data-centre demand stayed ahead of Street forecasts. Guidance for the next quarter lifted chip and AI-linked names across Asia.",
    source: "Reuters",
    publishedAt: "2026-08-24T10:00:00+05:30",
    topic: "tech",
    thumb: "#76B900",
    whyItMatters: "Nvidia is 12.4% of your portfolio",
    holding: "NVDA",
    url: "https://www.reuters.com/",
  },
  {
    slug: "rbi-pause-liquidity",
    headline: "RBI holds rates; liquidity tweak calms bond yields",
    summary:
      "The policy repo stay was widely expected. A modest durable liquidity injection pulled G-sec yields off session highs.",
    source: "Economic Times",
    publishedAt: "2026-08-24T08:00:00+05:30",
    topic: "economy",
    thumb: "#1F6B4A",
    whyItMatters: "Rate path affects your debt sleeve and bank holdings",
    holding: "HDFCBANK",
    url: "https://economictimes.indiatimes.com/",
  },
  {
    slug: "hdfc-bank-nil-growth",
    headline: "HDFC Bank NIL growth slows; deposit franchise still sturdy",
    summary:
      "Management guided for a gradual catch-up in loan growth after the merger overhang. NIMs held within the guided band.",
    source: "Mint",
    publishedAt: "2026-08-24T06:30:00+05:30",
    topic: "markets",
    thumb: "#004C8F",
    whyItMatters: "HDFC Bank is 8.1% of your portfolio",
    holding: "HDFCBANK",
    url: "https://www.livemint.com/",
  },
  {
    slug: "reliance-jio-capex",
    headline: "Reliance earmarks fresh Jio capex as ARPU climbs",
    summary:
      "The conglomerate reiterated a multi-year spectrum and fibre plan. Street focus stays on cash conversion in the telecom arm.",
    source: "Bloomberg",
    publishedAt: "2026-08-23T18:00:00+05:30",
    topic: "business",
    thumb: "#1A3A6B",
    whyItMatters: "Reliance is 9.2% of your portfolio",
    holding: "RELIANCE",
    url: "https://www.bloomberg.com/",
  },
  {
    slug: "gold-etf-inflows",
    headline: "Gold ETFs see third straight week of inflows",
    summary:
      "Domestic investors added to bullion funds as the rupee stayed soft and global real rates eased slightly.",
    source: "Business Standard",
    publishedAt: "2026-08-23T14:00:00+05:30",
    topic: "markets",
    thumb: "#C9A227",
    whyItMatters: "Gold ETF is 4.6% of your portfolio",
    holding: "GOLDBEES",
    url: "https://www.business-standard.com/",
  },
  {
    slug: "infosys-deal-pipeline",
    headline: "Infosys flags steadier deal TCV; US banking still soft",
    summary:
      "Commentary pointed to selective large deals while discretionary spend in financial services remains cautious.",
    source: "CNBC-TV18",
    publishedAt: "2026-08-23T11:00:00+05:30",
    topic: "tech",
    thumb: "#007CC3",
    whyItMatters: "Infosys is 5.3% of your portfolio",
    holding: "INFY",
    url: "https://www.cnbctv18.com/",
  },
  {
    slug: "fpis-equity-buying",
    headline: "FPIs turn net buyers of Indian equities after six sessions",
    summary:
      "Flows concentrated in financials and large-cap IT. Domestic institutions stayed selective in midcaps.",
    source: "Moneycontrol",
    publishedAt: "2026-08-22T16:00:00+05:30",
    topic: "markets",
    thumb: "#E85D04",
    url: "https://www.moneycontrol.com/",
  },
  {
    slug: "gst-council-rates",
    headline: "GST Council keeps rates unchanged; compliance focus rises",
    summary:
      "No broad rate rejig. Officials emphasised invoice matching and refund timelines for exporters.",
    source: "Hindu Business Line",
    publishedAt: "2026-08-22T12:00:00+05:30",
    topic: "economy",
    thumb: "#6B3FA0",
    url: "https://www.thehindubusinessline.com/",
  },
  {
    slug: "ipo-pipeline-september",
    headline: "September IPO calendar fills out with three mainboard names",
    summary:
      "Bankers expect healthy subscription if secondary markets hold. Anchor books already circling two of the issues.",
    source: "Reuters",
    publishedAt: "2026-08-22T09:00:00+05:30",
    topic: "business",
    thumb: "#B42318",
    url: "https://www.reuters.com/",
  },
  {
    slug: "us-pce-soft",
    headline: "US PCE cools; Asia futures open firmer",
    summary:
      "A softer print revived rate-cut chatter. Asian ADR baskets and semiconductor futures led the overnight move.",
    source: "Bloomberg",
    publishedAt: "2026-08-21T21:00:00+05:30",
    topic: "economy",
    thumb: "#0C1B33",
    url: "https://www.bloomberg.com/",
  },
];

export const newsTopicTabs: { id: NewsTopic; label: string }[] = [
  { id: "latest", label: "Latest" },
  { id: "markets", label: "Markets" },
  { id: "economy", label: "Economy" },
  { id: "tech", label: "Tech" },
  { id: "business", label: "Business" },
];

export function forYouStories() {
  return newsStories.filter((s) => s.whyItMatters);
}

export function moreRelevantStories() {
  return forYouStories().slice(3);
}

export function globalStories(topic: NewsTopic = "latest") {
  if (topic === "latest") return newsStories;
  return newsStories.filter((s) => s.topic === topic);
}

export function parseNewsView(v?: string): "foryou" | "global" {
  return v === "global" ? "global" : "foryou";
}

export function parseNewsTopic(t?: string): NewsTopic {
  const allowed: NewsTopic[] = ["latest", "markets", "economy", "tech", "business"];
  if (t && (allowed as string[]).includes(t)) return t as NewsTopic;
  return "latest";
}
