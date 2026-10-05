import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { shardacropFy25Mdna } from "../../transcripts/shardacrop-fy25-mdna";
import { shardacropQ1Fy27 } from "../../transcripts/shardacrop-q1-fy27";

const SHARES_CRORE = 9.02;
const REF_PRICE = 709;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 480,
    sharesCrore: SHARES_CRORE,
    targetPe: 9,
    referencePrice: REF_PRICE,
    assumptions:
      "Global agchem prices roll over again; Europe volumes soften; OPM compresses toward 14%; debtor days stay above 170; net CFO below ₹450 crore.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 650,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹5,650 crore (+7% YoY) with OPM near 19%; registration pipeline converts steadily; gross margin near 36%; debt-free balance sheet with liquid investments above ₹750 crore.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 780,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "FY27 revenue growth hits upper guidance band; EBITDA margin expands toward 22% on mix and pricing; working capital days fall below 90; ROCE re-tests 32% with stable export collections.",
  }),
];

export const shardacropDeepResearch: DeepCompanyResearch = {
  articleSlug: "shardacrop-midcap-memo",
  companyName: "Sharda Cropchem Ltd",
  nseSymbol: "SHARDACROP",
  bseCode: "538666",
  valueDrivers: [
    "Export agrochemical volume, geographic mix (Europe, NAFTA, LATAM, ROW), and distributor restocking cycles",
    "Registration pipeline scale (active registrations and pending dossiers) driving asset-light revenue visibility",
    "Gross margin and EBITDA margin through commodity price cycles, FX, and product mix",
    "Debtor days, working capital days, and cash from operations versus reported PAT",
    "Debt-free balance sheet, liquid investments, and dividend payout versus reinvestment in registrations",
    "Non-agrochemical trading mix (conveyor belts, industrial chemicals) as a smaller margin lever",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/SHARDACROP/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹709, MCap ₹6,398 cr, consolidated P/E 10.2×, book ₹348/sh, ROCE 30.2%, promoter 74.82% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/sharda-cropchem-ltd/shardacrop/538666/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 results and investor presentations; quarterly revenue and PAT bridges.",
    },
    {
      url: "https://www.shardacropchem.com/investor-relations/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹5,268 cr, PAT ₹681 cr, OPM 20% per Screener consolidated P&L.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 3163,
        FY25: 4320,
        FY26: 5268,
        "TTM Jun26": 5357,
      },
      comment: "FY26 per Screener; FY24 trough after global agchem destocking.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 303,
        FY25: 615,
        FY26: 1059,
      },
      comment: "FY26 OPM near 20%; recovery from FY24 OPM 10%.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 32,
        FY25: 304,
        FY26: 681,
        "TTM Jun26": 626,
      },
      comment: "FY26 PAT per Screener; TTM lower on Q1 FY27 seasonality.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 10,
        FY25: 14,
        FY26: 20,
        "Q1 FY27": 17,
      },
      comment: "Q1 FY27 OPM per quarterly results; gross margin 36.7% on Jul 2026 call.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 4,
        FY25: 16,
        FY26: 30.2,
      },
      comment: "Screener consolidated ROCE Jun 2026; rebound as asset turns improve.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 341,
        FY25: 604,
        FY26: 656,
      },
      comment: "CFO recovered with revenue; still sensitive to debtor days near 166.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 18,
        FY25: 8,
        FY26: 0,
      },
      comment: "Debt free Mar FY26 on Screener balance sheet.",
    },
    {
      label: "Liquid investments (proxy)",
      unit: "₹ cr",
      periods: {
        FY25: 294,
        FY26: 361,
        "Jun FY27": 767,
      },
      comment: "Jun 2026 cash and liquid investments per Q1 FY27 call; includes investments line on Screener.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 recovery",
      promise:
        "Return revenue and earnings toward FY22 levels after FY24 agrochemical price collapse and channel destocking.",
      outcome: "FY25 revenue ₹4,320 cr and PAT ₹304 cr recovered sharply; FY26 revenue ₹5,268 cr and PAT ₹681 cr exceeded FY22 scale.",
      status: "beat",
      commentary:
        "Turnaround played out faster than bear-case FY24 implied; market still prices cyclicality via low trailing P/E.",
    },
    {
      period: "FY27 growth",
      promise: "Deliver ten to fifteen percent consolidated revenue growth with five to ten percent volume growth.",
      outcome: "Q1 FY27 revenue +9% YoY to ₹1,074 cr; full-year track depends on Europe restocking and LATAM mix.",
      status: "partial",
      commentary: "Management on Jul 2026 call maintained guidance; Europe revenue softened in Q1 but margins improved.",
    },
    {
      period: "Registrations",
      promise: "Expand active registrations toward three thousand plus with pending pipeline above one thousand.",
      outcome: "Q1 FY27 call cited 3,016 registrations and 1,027 pending applications.",
      status: "met",
      commentary: "Registration moat is the structural differentiator versus asset-heavy domestic agchem names.",
    },
    {
      period: "Working capital",
      promise: "Improve working capital days and collections while staying debt free.",
      outcome: "Working capital days improved ten days to 88 in Q1 FY27; debtor days still near 166 on Screener FY26.",
      status: "partial",
      commentary: "Export credit terms cap how fast debtor days can fall without sacrificing volume.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (export registration-led agchem platform with debt-free balance sheet). Cross-check: FY26 operating profit near ₹1,059 cr at 8× EV/EBITDA less net cash near ₹760 cr (Jun 2026 call) implies equity value near ₹7,700 cr or about ₹854 per share before cyclical discount, so sub-11× forward earnings embeds commodity and Europe volume risk.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹650 cr at 11× implies about ₹792 (+12% vs ₹709), below the 15% Buy hurdle; bear ~₹479 (-32%) if margins mean-revert; bull ~₹1,125 (+59%) if guidance band and re-rating coincide.",
  },
  transcripts: [shardacropFy25Mdna, shardacropQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track region-wise gross margin and volume commentary on earnings calls.",
    "Monitor registration additions versus pending pipeline each year in AR.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if FX or agrochemical price indices move sharply.",
  ],
};
