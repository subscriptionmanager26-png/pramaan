/**
 * PocketEdge AI team — specialized advisors the user can unlock.
 * UI-first catalog; each advisor maps to its own chat space (Grok-bot style).
 */

export type AdvisorId = "general" | "mf" | "trader" | "stock" | "tax" | "macro";

export type AdvisorStatus = "unlocked" | "locked" | "soon";

export type Advisor = {
  id: AdvisorId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: AdvisorStatus;
  /** Accent used on avatar chip (CSS color from theme / hex ok for chips). */
  accent: string;
  monogram: string;
  suggestions: string[];
  greeting: string;
};

export const ADVISORS: Advisor[] = [
  {
    id: "general",
    name: "PocketEdge AI",
    shortName: "General",
    tagline: "Markets, portfolio, research",
    description:
      "Your general-purpose market co-pilot. News, portfolio questions, and research briefs.",
    status: "unlocked",
    accent: "#2f57ff",
    monogram: "PE",
    suggestions: [
      "What moved in Indian markets today?",
      "Summarise my portfolio risk",
      "Explain the latest RBI stance on rates",
    ],
    greeting: "Ask about markets, your portfolio, or research.",
  },
  {
    id: "mf",
    name: "MF AI",
    shortName: "MF",
    tagline: "Mutual funds & SIPs",
    description:
      "Pick and compare mutual funds, SIPs, and category fits — tuned for Indian MF data.",
    status: "unlocked",
    accent: "#0d9488",
    monogram: "MF",
    suggestions: [
      "Best large-cap funds for a 10-year SIP?",
      "Compare Parag Parikh Flexi Cap vs Motilal Midcap",
      "Should I switch from debt to equity hybrids now?",
    ],
    greeting: "I’ll help you choose and compare mutual funds.",
  },
  {
    id: "trader",
    name: "Trader AI",
    shortName: "Trader",
    tagline: "Setups & technicals",
    description:
      "Technical patterns, levels, and short-horizon setups — not a substitute for your risk rules.",
    status: "unlocked",
    accent: "#ea580c",
    monogram: "TR",
    suggestions: [
      "Show Nifty near-term structure and key levels",
      "Which large caps look oversold on daily RSI?",
      "Plan a breakout watchlist for this week",
    ],
    greeting: "Talk setups, levels, and technical patterns.",
  },
  {
    id: "stock",
    name: "Stock AI",
    shortName: "Stock",
    tagline: "Fundamentals & business quality",
    description:
      "Company deep-dives: earnings quality, moats, valuation, and what the numbers imply.",
    status: "unlocked",
    accent: "#7c3aed",
    monogram: "ST",
    suggestions: [
      "Walk me through Aarti Industries fundamentals",
      "Is this stock expensive vs its 5-year history?",
      "What risks matter most for this business?",
    ],
    greeting: "Ask about a company’s fundamentals and valuation.",
  },
  {
    id: "tax",
    name: "Tax AI",
    shortName: "Tax",
    tagline: "Filing, Schedule FA, residency",
    description: "Cross-border tax framing, Schedule FA, and residency questions — educational only.",
    status: "locked",
    accent: "#64748b",
    monogram: "TX",
    suggestions: [],
    greeting: "Unlock Tax AI for residency and Schedule FA help.",
  },
  {
    id: "macro",
    name: "Macro AI",
    shortName: "Macro",
    tagline: "Rates, flows, global tape",
    description: "Macro tape: rates, flows, FX, and how global moves land on India.",
    status: "soon",
    accent: "#64748b",
    monogram: "MC",
    suggestions: [],
    greeting: "Macro AI is coming soon.",
  },
];

export const DEFAULT_ADVISOR_ID: AdvisorId = "general";

export function isAdvisorId(value: string | null | undefined): value is AdvisorId {
  return Boolean(value && ADVISORS.some((a) => a.id === value));
}

export function getAdvisor(id: string | null | undefined): Advisor {
  if (isAdvisorId(id)) {
    return ADVISORS.find((a) => a.id === id) ?? ADVISORS[0]!;
  }
  return ADVISORS.find((a) => a.id === DEFAULT_ADVISOR_ID) ?? ADVISORS[0]!;
}

/**
 * One durable thread per advisor — conversation history is the context about you.
 * No per-message "new chat" minting.
 */
export function durableAdvisorThreadId(advisorId: AdvisorId) {
  return `adv_${advisorId}`;
}

export function advisorThreadPrefix(id: AdvisorId) {
  return `adv_${id}`;
}

export function threadBelongsToAdvisor(threadId: string, advisorId: AdvisorId) {
  const durable = durableAdvisorThreadId(advisorId);
  if (threadId === durable || threadId.startsWith(`${durable}_`)) return true;
  if (advisorId === "general") {
    // Legacy multi-thread chats fold under General until migrated.
    return threadId.startsWith("t_") || threadId === "portfolio";
  }
  return false;
}

/** Infer advisor from a thread id (legacy t_* → general). */
export function advisorIdFromThread(threadId: string): AdvisorId {
  for (const advisor of ADVISORS) {
    if (threadBelongsToAdvisor(threadId, advisor.id) && advisor.id !== "general") {
      return advisor.id;
    }
  }
  if (threadId === durableAdvisorThreadId("general") || threadId.startsWith("adv_general")) {
    return "general";
  }
  return DEFAULT_ADVISOR_ID;
}

/** @deprecated Prefer durableAdvisorThreadId — one continuous chat per agent. */
export function newAdvisorThreadId(advisorId: AdvisorId) {
  return durableAdvisorThreadId(advisorId);
}

export function aiHref(opts?: { agent?: AdvisorId; threadId?: string; inbox?: boolean }) {
  if (opts?.inbox) return "/ai";
  const params = new URLSearchParams();
  if (opts?.agent) params.set("agent", opts.agent);
  if (opts?.threadId) params.set("t", opts.threadId);
  const q = params.toString();
  return q ? `/ai?${q}` : "/ai";
}

/** Agents the user can already talk to (unlocked). */
export function unlockedAdvisors() {
  return ADVISORS.filter((a) => a.status === "unlocked");
}
