/** Live portfolio holdings (Pocketedge social_portfolios) — current book only. */

export type LiveHolding = {
  ticker: string;
  name?: string;
  qty: number;
  avg?: number;
  price?: number;
  value?: number;
  pnl?: number;
  pnlPct?: number;
  changePct?: number;
  assetType?: string;
  logoUrl?: string;
};

export type LivePortfolio = {
  id: string;
  name: string;
  updatedAt: string | null;
  holdings: LiveHolding[];
};

export type PortfolioInsight = {
  title: string;
  body: string;
};

export function normalizeHolding(raw: Record<string, unknown>): LiveHolding | null {
  const ticker = String(raw.ticker ?? raw.symbol ?? "")
    .trim()
    .toUpperCase();
  const qty = Number(raw.qty ?? raw.quantity ?? 0);
  if (!ticker || !Number.isFinite(qty) || qty <= 0) return null;
  const avg = Number(raw.avg ?? raw.avgPrice ?? raw.average_price);
  const price = Number(raw.price ?? raw.ltp);
  const value =
    Number(raw.value) ||
    (Number.isFinite(price) && price > 0 ? price * qty : Number.isFinite(avg) && avg > 0 ? avg * qty : 0);
  const pnl = Number(raw.pnl);
  const pnlPct = Number(raw.pnlPct ?? raw.pnl_pct);
  const changePct = Number(raw.changePct ?? raw.change_pct ?? raw.dayChangePct);
  return {
    ticker,
    name: typeof raw.name === "string" ? raw.name : undefined,
    qty,
    avg: Number.isFinite(avg) && avg > 0 ? avg : undefined,
    price: Number.isFinite(price) && price > 0 ? price : undefined,
    value: Number.isFinite(value) && value > 0 ? value : undefined,
    pnl: Number.isFinite(pnl) ? pnl : undefined,
    pnlPct: Number.isFinite(pnlPct) ? pnlPct : undefined,
    changePct: Number.isFinite(changePct) ? changePct : undefined,
    assetType: typeof raw.assetType === "string" ? raw.assetType : typeof raw.asset_type === "string" ? raw.asset_type : undefined,
    logoUrl:
      typeof raw.logoUrl === "string"
        ? raw.logoUrl
        : typeof raw.logo_url === "string"
          ? raw.logo_url
          : undefined,
  };
}

export function mapPortfolioRow(row: Record<string, unknown> | null | undefined): LivePortfolio | null {
  if (!row || row.kind === "watchlist" || row.is_archived || row.is_draft) return null;
  const holdingsRaw = Array.isArray(row.holdings) ? row.holdings : [];
  const holdings = holdingsRaw
    .map((h) => (h && typeof h === "object" ? normalizeHolding(h as Record<string, unknown>) : null))
    .filter((h): h is LiveHolding => Boolean(h))
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  return {
    id: String(row.id),
    name: String(row.name || "My portfolio"),
    updatedAt: typeof row.updated_at === "string" ? row.updated_at : typeof row.updatedAt === "string" ? row.updatedAt : null,
    holdings,
  };
}

export function portfolioTotals(holdings: LiveHolding[]) {
  const totalValue = holdings.reduce((s, h) => s + (h.value ?? 0), 0);
  const invested = holdings.reduce((s, h) => {
    if (h.avg != null && h.avg > 0) return s + h.avg * h.qty;
    return s + (h.value ?? 0);
  }, 0);
  const unrealized = totalValue - invested;
  const dayChange = holdings.reduce((s, h) => {
    if (h.changePct == null || h.value == null) return s;
    // changePct as fraction or percent — enrich often uses percent points
    const pct = Math.abs(h.changePct) <= 1 ? h.changePct : h.changePct / 100;
    return s + h.value * pct;
  }, 0);
  return { totalValue, invested, unrealized, dayChange };
}

export function allocationFromHoldings(holdings: LiveHolding[]) {
  const { totalValue } = portfolioTotals(holdings);
  if (totalValue <= 0) return [];
  const buckets = new Map<string, number>();
  for (const h of holdings) {
    const label =
      h.assetType === "fund"
        ? "Mutual funds"
        : h.assetType === "etf"
          ? "ETFs"
          : h.assetType === "commodity" || /gold|silver/i.test(h.ticker)
            ? "Commodities"
            : "Equity";
    buckets.set(label, (buckets.get(label) ?? 0) + (h.value ?? 0));
  }
  const colors = ["#2f57ff", "#0b0b0b", "#dce8ff", "#eaff4d", "#e7e7e7"];
  return [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value], i) => ({
      label,
      value,
      weightPct: (value / totalValue) * 100,
      color: colors[i % colors.length]!,
    }));
}

/** Insights derived only from the current holdings snapshot — no invented history. */
export function insightsFromHoldings(holdings: LiveHolding[]): PortfolioInsight[] {
  if (!holdings.length) return [];
  const { totalValue, invested, unrealized } = portfolioTotals(holdings);
  const out: PortfolioInsight[] = [];

  const top = [...holdings].sort((a, b) => (b.value ?? 0) - (a.value ?? 0))[0];
  if (top?.value && totalValue > 0) {
    const w = (top.value / totalValue) * 100;
    out.push({
      title: "Largest position",
      body: `${top.name || top.ticker} is about ${w.toFixed(1)}% of the book (${formatInr(top.value)}).`,
    });
  }

  if (totalValue > 0 && invested > 0) {
    const pct = (unrealized / invested) * 100;
    out.push({
      title: "Unrealized vs cost",
      body:
        unrealized === 0
          ? "Mark-to-market value matches invested cost on the lines that have an average price."
          : `Book is ${pct >= 0 ? "up" : "down"} ${Math.abs(pct).toFixed(1)}% versus average cost where cost is known.`,
    });
  }

  const alloc = allocationFromHoldings(holdings);
  if (alloc[0]) {
    out.push({
      title: "Asset mix",
      body: `${alloc[0].label} is the largest sleeve at ${alloc[0].weightPct.toFixed(0)}% of current value.`,
    });
  }

  const concentrated = holdings.filter((h) => totalValue > 0 && (h.value ?? 0) / totalValue >= 0.15);
  if (concentrated.length >= 2) {
    out.push({
      title: "Concentration",
      body: `${concentrated.length} holdings are each 15%+ of the book — position size risk is elevated.`,
    });
  } else if (holdings.length <= 3 && totalValue > 0) {
    out.push({
      title: "Breadth",
      body: `Only ${holdings.length} line${holdings.length === 1 ? "" : "s"} in the book — diversification is limited by construction.`,
    });
  }

  return out.slice(0, 4);
}

export function formatInr(amount: number, compact = false) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: compact && Math.abs(amount) >= 100_000 ? 1 : 0,
    notation: compact && Math.abs(amount) >= 100_000 ? "compact" : "standard",
  }).format(amount);
}

export function formatPct(value: number, signed = false) {
  const prefix = signed && value > 0 ? "+" : "";
  return `${prefix}${value.toFixed(2)}%`;
}

/** Merge proposal into current book. */
export function applyHoldingsUpdate(
  current: LiveHolding[],
  draft: { ticker: string; qty: number; avg?: number; name?: string }[],
  mode: "replace" | "merge",
): { ticker: string; qty: number; avg?: number; name?: string }[] {
  if (mode === "replace") {
    return draft.filter((h) => h.qty > 0).map((h) => ({ ticker: h.ticker, qty: h.qty, avg: h.avg, name: h.name }));
  }
  const map = new Map(current.map((h) => [h.ticker, { ticker: h.ticker, qty: h.qty, avg: h.avg, name: h.name }]));
  for (const h of draft) {
    if (h.qty <= 0) map.delete(h.ticker);
    else map.set(h.ticker, { ticker: h.ticker, qty: h.qty, avg: h.avg ?? map.get(h.ticker)?.avg, name: h.name ?? map.get(h.ticker)?.name });
  }
  return [...map.values()];
}
