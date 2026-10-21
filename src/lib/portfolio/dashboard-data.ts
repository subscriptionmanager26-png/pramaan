/** Illustrative portfolio snapshot for the static dashboard UI (not live broker data). */

export type AllocationSlice = {
  label: string;
  weightPct: number;
  value: number;
  color: string;
};

export type HoldingRow = {
  name: string;
  symbol: string;
  assetClass: "Equity" | "MF" | "ETF" | "Gold" | "Cash";
  quantity: number;
  value: number;
  dayChangePct: number;
  weightPct: number;
};

export type SectorRow = {
  name: string;
  weightPct: number;
};

export type PerformancePoint = {
  label: string;
  portfolio: number;
};

export type PortfolioDashboardSnapshot = {
  asOf: string;
  totalValue: number;
  dayChange: number;
  dayChangePct: number;
  invested: number;
  unrealizedGain: number;
  xirrPct: number;
  allocation: AllocationSlice[];
  sectors: SectorRow[];
  holdings: HoldingRow[];
  performance: PerformancePoint[];
};

export const DEMO_PORTFOLIO_SNAPSHOT: PortfolioDashboardSnapshot = {
  asOf: "2026-10-20T09:30:00+05:30",
  totalValue: 18_475_230,
  dayChange: 42_850,
  dayChangePct: 0.23,
  invested: 14_200_000,
  unrealizedGain: 4_275_230,
  xirrPct: 14.2,
  allocation: [
    { label: "Indian equity", weightPct: 52, value: 9_607_120, color: "#2f57ff" },
    { label: "Mutual funds", weightPct: 28, value: 5_173_064, color: "#0b0b0b" },
    { label: "ETFs & index", weightPct: 12, value: 2_217_028, color: "#dce8ff" },
    { label: "Gold", weightPct: 5, value: 923_762, color: "#eaff4d" },
    { label: "Cash", weightPct: 3, value: 554_256, color: "#e7e7e7" },
  ],
  sectors: [
    { name: "Financials", weightPct: 22 },
    { name: "IT", weightPct: 18 },
    { name: "Consumer", weightPct: 14 },
    { name: "Industrials", weightPct: 11 },
    { name: "Healthcare", weightPct: 9 },
    { name: "Other", weightPct: 26 },
  ],
  holdings: [
    {
      name: "HDFC Bank",
      symbol: "HDFCBANK",
      assetClass: "Equity",
      quantity: 420,
      value: 1_842_600,
      dayChangePct: 0.45,
      weightPct: 9.97,
    },
    {
      name: "Nifty 50 ETF",
      symbol: "NIFTYBEES",
      assetClass: "ETF",
      quantity: 3200,
      value: 1_612_800,
      dayChangePct: 0.31,
      weightPct: 8.73,
    },
    {
      name: "Parag Parikh Flexi Cap",
      symbol: "PPFAS",
      assetClass: "MF",
      quantity: 18420,
      value: 1_489_200,
      dayChangePct: 0.12,
      weightPct: 8.06,
    },
    {
      name: "Infosys",
      symbol: "INFY",
      assetClass: "Equity",
      quantity: 680,
      value: 1_224_400,
      dayChangePct: -0.28,
      weightPct: 6.63,
    },
    {
      name: "SBI Gold ETF",
      symbol: "SETFGOLD",
      assetClass: "Gold",
      quantity: 2100,
      value: 923_762,
      dayChangePct: 0.52,
      weightPct: 5.0,
    },
    {
      name: "ICICI Prudential Nifty Next 50",
      symbol: "ICICINXT50",
      assetClass: "MF",
      quantity: 9200,
      value: 876_400,
      dayChangePct: 0.19,
      weightPct: 4.74,
    },
    {
      name: "Tata Consultancy Services",
      symbol: "TCS",
      assetClass: "Equity",
      quantity: 95,
      value: 812_750,
      dayChangePct: -0.15,
      weightPct: 4.4,
    },
    {
      name: "Liquid fund (parking)",
      symbol: "LIQUID",
      assetClass: "Cash",
      quantity: 1,
      value: 554_256,
      dayChangePct: 0.02,
      weightPct: 3.0,
    },
  ],
  performance: [
    { label: "Nov", portfolio: 100 },
    { label: "Dec", portfolio: 102.4 },
    { label: "Jan", portfolio: 101.1 },
    { label: "Feb", portfolio: 104.8 },
    { label: "Mar", portfolio: 106.2 },
    { label: "Apr", portfolio: 108.5 },
    { label: "May", portfolio: 107.9 },
    { label: "Jun", portfolio: 110.4 },
    { label: "Jul", portfolio: 112.1 },
    { label: "Aug", portfolio: 111.3 },
    { label: "Sep", portfolio: 114.6 },
    { label: "Oct", portfolio: 116.2 },
  ],
};

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
