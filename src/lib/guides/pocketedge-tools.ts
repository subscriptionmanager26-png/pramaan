import type { Guide } from "./types";

const PE = "https://www.pocketedge.in";

/** Live calculators and data tools built on PocketEdge — opened on pocketedge.in. */
export const pocketedgeTools: Guide[] = [
  {
    slug: "etf-inav-tracker",
    title: "ETF iNAV tracker",
    summary:
      "Live NSE prices vs indicative NAV for India-listed ETFs. Spot premium or discount before you place a market order.",
    kind: "tool",
    topic: "Markets data",
    publishedAt: "2026-09-20T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/etf-tracker`,
    body: [
      "Compare last traded price to iNAV for hundreds of NSE-listed ETFs.",
      "Useful when buying global index feeders, gold ETFs, or sector ETFs where intraday premium matters.",
      "Not investment advice — a execution-quality check, not a buy signal.",
    ],
  },
  {
    slug: "gold-tracker",
    title: "Gold tracker",
    summary:
      "Track gold ETF and related prices in one view — helpful when gold is part of your global or inflation hedge sleeve.",
    kind: "tool",
    topic: "Commodities",
    publishedAt: "2026-09-18T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1610375461246-83c859bc4ea4?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/gold-tracker`,
    body: [
      "Consolidates gold-linked instruments for quick comparison.",
      "Pair with the iNAV tracker when choosing between gold ETFs.",
    ],
  },
  {
    slug: "mf-screener",
    title: "Mutual fund screener",
    summary:
      "Filter Indian mutual funds — including international and feeder funds — by category, returns, and risk metrics.",
    kind: "tool",
    topic: "Funds",
    publishedAt: "2026-09-15T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/resources/mf-screener`,
    body: [
      "Shortlist international funds without opening five AMC sites.",
      "Cross-check TER and benchmark before you SIP.",
    ],
  },
  {
    slug: "markets-overview",
    title: "Markets overview",
    summary: "Indices, sectors, and day-level context for Indian markets.",
    kind: "tool",
    topic: "Markets data",
    publishedAt: "2026-09-12T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/markets`,
    body: [
      "Start here for Nifty breadth and sector moves before you read the desk note.",
    ],
  },
  {
    slug: "business-model-library",
    title: "Business model library",
    summary:
      "Plain-language business model explainers for Indian listed companies — context before you size a global or domestic position.",
    kind: "tool",
    topic: "Research",
    publishedAt: "2026-09-10T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/business-model`,
    body: [
      "Use when a global ETF overlaps with Indian ADRs or sector peers you want to understand first.",
    ],
  },
  {
    slug: "explore-stocks",
    title: "Explore stocks",
    summary: "Screen and discover Indian equities by theme, sector, and fundamentals.",
    kind: "tool",
    topic: "Research",
    publishedAt: "2026-09-08T10:00:00+05:30",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    toolUrl: `${PE}/explore`,
    body: [
      "Complements Pramaan company memos — start on PocketEdge for breadth, return here for depth on a name.",
    ],
  },
];
