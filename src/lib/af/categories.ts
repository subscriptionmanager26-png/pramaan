/** Discussion categories for advisor Twitter / Substack posts. */
export const AF_CATEGORIES = [
  "markets_macro",
  "stocks_equity",
  "mutual_funds",
  "ipo",
  "derivatives_trading",
  "commodities",
  "crypto",
  "policy_regulation",
  "personal_finance",
  "education_explainer",
  "promotion_marketing",
  "other",
] as const;

export type AfCategory = (typeof AF_CATEGORIES)[number];

type Rule = { category: AfCategory; patterns: RegExp[]; weight?: number };

const RULES: Rule[] = [
  {
    category: "ipo",
    patterns: [/\bipo\b/i, /\bdrhp\b/i, /\blisting\b/i, /\boffer for sale\b/i, /\bofs\b/i],
  },
  {
    category: "mutual_funds",
    patterns: [/\bmutual fund\b/i, /\b\bmf\b/i, /\bsip\b/i, /\bnav\b/i, /\betf\b/i, /\bsmallcase\b/i],
  },
  {
    category: "derivatives_trading",
    patterns: [
      /\bf&o\b/i,
      /\boptions?\b/i,
      /\bfutures?\b/i,
      /\bbtsts?\b/i,
      /\bintraday\b/i,
      /\bbanknifty\b/i,
      /\bnifty\b/i,
      /\bexpiry\b/i,
    ],
  },
  {
    category: "commodities",
    patterns: [/\bgold\b/i, /\bsilver\b/i, /\bcrude\b/i, /\boil\b/i, /\bcopper\b/i, /\bcommodity\b/i],
  },
  {
    category: "crypto",
    patterns: [/\bcrypto\b/i, /\bbitcoin\b/i, /\bethereum\b/i, /\bbtc\b/i, /\beth\b/i],
  },
  {
    category: "policy_regulation",
    patterns: [
      /\bsebi\b/i,
      /\brbi\b/i,
      /\birdai\b/i,
      /\bbudget\b/i,
      /\btax\b/i,
      /\bgst\b/i,
      /\bregulation\b/i,
      /\bpolicy\b/i,
    ],
  },
  {
    category: "personal_finance",
    patterns: [
      /\bemi\b/i,
      /\binsurance\b/i,
      /\bretirement\b/i,
      /\bnps\b/i,
      /\bepf\b/i,
      /\bsaving\b/i,
      /\bwill\b/i,
      /\bsuccession\b/i,
    ],
  },
  {
    category: "education_explainer",
    patterns: [
      /\bexplainer\b/i,
      /\bwhat (is|are|does)\b/i,
      /\bhow to\b/i,
      /\bguide\b/i,
      /\blesson\b/i,
      /\bframework\b/i,
      /\bdeep[- ]?dive\b/i,
    ],
  },
  {
    category: "promotion_marketing",
    patterns: [
      /\bjoin (our|my)\b/i,
      /\btelegram\b/i,
      /\bwhatsapp\b/i,
      /\bmembership\b/i,
      /\bsubscribe\b/i,
      /\bdm (me|for)\b/i,
      /\bcourse\b/i,
      /\bwebinar\b/i,
    ],
    weight: 0.8,
  },
  {
    category: "stocks_equity",
    patterns: [
      /\bstock\b/i,
      /\bequity\b/i,
      /\bshares?\b/i,
      /\bearnings?\b/i,
      /\bconcall\b/i,
      /\bq[1-4]\b/i,
      /\bfy\d{2}\b/i,
      /\bpe\b/i,
      /\bmarket cap\b/i,
    ],
  },
  {
    category: "markets_macro",
    patterns: [
      /\bmarket(s)?\b/i,
      /\bfii\b/i,
      /\bdii\b/i,
      /\byield\b/i,
      /\bfed\b/i,
      /\binflation\b/i,
      /\bgdp\b/i,
      /\brupee\b/i,
      /\bsensex\b/i,
    ],
  },
];

export function categorizeDiscussion(input: {
  title?: string | null;
  summary?: string | null;
  body?: string | null;
}): { category: AfCategory; confidence: number; rationale: string } {
  const text = [input.title, input.summary, input.body].filter(Boolean).join("\n").slice(0, 4000);
  if (!text.trim()) {
    return { category: "other", confidence: 0.2, rationale: "empty text" };
  }

  const scores = new Map<AfCategory, number>();
  const hits: string[] = [];

  for (const rule of RULES) {
    let score = 0;
    for (const re of rule.patterns) {
      if (re.test(text)) {
        score += rule.weight ?? 1;
        hits.push(`${rule.category}:${re.source}`);
      }
    }
    if (score > 0) scores.set(rule.category, (scores.get(rule.category) ?? 0) + score);
  }

  if (!scores.size) {
    return { category: "other", confidence: 0.35, rationale: "no rule matched" };
  }

  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  const [category, top] = ranked[0]!;
  const second = ranked[1]?.[1] ?? 0;
  const confidence = Math.min(0.95, 0.45 + top * 0.12 + (top > second ? 0.1 : 0));
  return {
    category,
    confidence: Number(confidence.toFixed(3)),
    rationale: hits.filter((h) => h.startsWith(`${category}:`)).slice(0, 6).join("; "),
  };
}
