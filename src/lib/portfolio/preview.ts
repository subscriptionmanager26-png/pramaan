import type { LiveHolding, LivePortfolio } from "@/lib/portfolio/holdings";

/** Sample book for local UI preview when auth is not configured. Never used in production. */
export const PREVIEW_HOLDINGS: LiveHolding[] = [
  {
    ticker: "HDFCBANK",
    name: "HDFC Bank",
    qty: 40,
    avg: 1480,
    price: 1652,
    value: 66_080,
    pnl: 6880,
    pnlPct: 11.6,
    changePct: 0.4,
    assetType: "equity",
  },
  {
    ticker: "INFY",
    name: "Infosys",
    qty: 25,
    avg: 1420,
    price: 1510,
    value: 37_750,
    pnl: 2250,
    pnlPct: 6.3,
    changePct: -0.2,
    assetType: "equity",
  },
  {
    ticker: "NIFTYBEES",
    name: "Nippon India ETF Nifty BeES",
    qty: 120,
    avg: 245,
    price: 268,
    value: 32_160,
    pnl: 2760,
    pnlPct: 9.4,
    changePct: 0.15,
    assetType: "etf",
  },
  {
    ticker: "GOLDBEES",
    name: "Nippon India ETF Gold BeES",
    qty: 50,
    avg: 58,
    price: 64.5,
    value: 3225,
    pnl: 325,
    pnlPct: 11.2,
    changePct: 0.3,
    assetType: "commodity",
  },
];

export type PreviewUiState = "pre_signup" | "empty" | "with_holdings";

export const PREVIEW_UI_STATES: { id: PreviewUiState; label: string }[] = [
  { id: "pre_signup", label: "Pre sign-up" },
  { id: "empty", label: "Signed in · no holdings" },
  { id: "with_holdings", label: "Signed in · with holdings" },
];

export function previewPortfolio(withHoldings = true): LivePortfolio {
  return {
    id: "preview-local",
    name: "Preview portfolio",
    updatedAt: new Date().toISOString(),
    holdings: withHoldings ? PREVIEW_HOLDINGS : [],
  };
}

export function isPortfolioPreviewEnabled() {
  if (process.env.NODE_ENV === "production") return false;
  if (process.env.NEXT_PUBLIC_PORTFOLIO_PREVIEW === "1") return true;
  // Default on in local next when Pocketedge auth env is missing.
  const url = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;
  return !url || !anon;
}
