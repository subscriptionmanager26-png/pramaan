import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { bestagroFy25Mdna } from "../../transcripts/bestagro-fy25-mdna";
import { bestagroQ1Fy27 } from "../../transcripts/bestagro-q1-fy27";

/** ~35 crore shares (face value ₹1; equity capital ₹35 cr Mar FY26 post capital change). */
const SHARES_CRORE = 35;
const REF_PRICE = 17.5;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 18,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue flat near ₹1,280 crore; OPM near 7%; loss quarters repeat on traded inventory; debtor days stay above 130; ROCE below 4%; market applies distressed small-cap multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 42,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,450 crore (+15% YoY) with OPM near 10%; Q1 FY27 margin partly sustained; net CFO near ₹80 crore; borrowings flat near ₹440 crore; ROCE re-tests 8%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 62,
    sharesCrore: SHARES_CRORE,
    targetPe: 20,
    referencePrice: REF_PRICE,
    assumptions:
      "Technical mix rises; export P2P contracts expand; OPM toward 13% on ₹1,600 crore revenue; debtor days fall toward 110; borrowings below ₹400 crore; ROCE above 12%.",
  }),
];

export const bestagroDeepResearch: DeepCompanyResearch = {
  articleSlug: "bestagro-midcap-memo",
  companyName: "Best Agrolife Ltd",
  nseSymbol: "BESTAGRO",
  bseCode: "539660",
  valueDrivers: [
    "Technical versus formulation revenue mix and plant-to-port (P2P) contract wins",
    "Operating profit margin through in-house actives, traded SKUs, and quarterly inventory marks",
    "Registration depth (120+ technical licenses, 500+ formulations) and patented product share",
    "Debtor days, inventory days, and net cash from operations versus volatile PAT",
    "Borrowings, interest coverage, and ROCE after FY23–FY24 leverage build-up",
    "Promoter holding near 50% and capital allocation across R&D and capacity debottlenecking",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/BESTAGRO/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹17.5, MCap ₹620 cr, book ~₹21.7/sh, ROCE 5.15%, ROE 1.11%, 52w ₹12.3–34.4, equity 35 cr shares.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/best-agrolife-ltd/bestagro/539660/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY25 consolidated result filings with revenue, OPM, borrowings, and PAT bridges.",
    },
    {
      url: "https://www.bestagrolife.com/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "Top 15 Indian agchem positioning; 70+ in-house formulations; P2P supply to MNCs per company site.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 1746,
        FY24: 1873,
        FY25: 1814,
        FY26: 1257,
        "TTM Jun26": 1272,
      },
      comment: "FY26 revenue fall on channel normalization; TTM per Screener consolidated P&L.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 314,
        FY24: 226,
        FY25: 200,
        FY26: 100,
        "TTM Jun26": 132,
      },
      comment: "FY23 peak OPM near 18%; FY26 trough near 8% before TTM recovery toward 10%.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 192,
        FY24: 106,
        FY25: 70,
        FY26: 9,
        "TTM Jun26": 30,
      },
      comment: "FY26 collapse on weak quarters; TTM PAT rebound on Q1 FY27 strength.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 18,
        FY24: 12,
        FY25: 11,
        FY26: 8,
        "Q1 FY27": 20,
      },
      comment: "Q1 FY27 per Screener quarterly table; full-year sustainability unproven.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY23: 34,
        FY24: 16,
        FY25: 13,
        FY26: 5,
      },
      comment: "Screener consolidated ROCE 5.15% TTM Jun 2026 after earnings downcycle.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 637,
        FY25: 478,
        FY26: 442,
      },
      comment: "Leverage elevated versus FY22; interest near ₹55 cr TTM.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: -180,
        FY24: 36,
        FY25: 228,
        FY26: 97,
      },
      comment: "FY25 CFO spike on working capital release; FY26 positive but below FY25.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY23: 5.41,
        FY24: 2.99,
        FY25: 1.97,
        FY26: 0.25,
        "TTM Jun26": 0.84,
      },
      comment: "Share count ~35 cr Mar FY26; trailing P/E near 21× at ₹17.5 reference.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue stability",
      promise: "Hold revenue near prior peak while expanding technical mix.",
      outcome: "Revenue near ₹1,814 crore with PAT near ₹70 crore, down from FY23 peak.",
      status: "partial",
      commentary: "Top line held better than FY26 but profitability compressed versus FY23.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Improve collections after FY24 working capital build.",
      outcome: "Net CFO near ₹97 crore in FY26 with PAT only near ₹9 crore.",
      status: "beat",
      commentary: "Cash recovery preceded earnings rebound; watch sustainability.",
    },
    {
      period: "Q1 FY27 margin",
      promise: "Restore double-digit operating profit margin after FY26 trough quarters.",
      outcome: "Q1 FY27 revenue near ₹396 crore with OPM near 20%.",
      status: "beat",
      commentary: "Compare against weak Jun 2025 base; Sep and Dec 2026 quarters needed.",
    },
    {
      period: "FY27 ROCE",
      promise: "Lift return on capital employed as revenue stabilises.",
      outcome: "Pending; ROCE 5% TTM Jun 2026.",
      status: "pending",
      commentary: "Upgrade case requires ROCE above 8% with PAT above ₹40 crore.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated technical plus formulation agchem). Cross-check: FY26 TTM operating profit near ₹132 cr at 8× EV/EBITDA less net debt near ₹350 cr supports equity near book (~₹21.7/sh) but not premium to FY26 PAT trough.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹42 cr at 18× implies about ₹22 (+24% vs ₹17.5), clearing the 15% Buy hurdle if margin recovery persists; bear ~₹7 (-58%) if loss quarters return.",
  },
  transcripts: [bestagroFy25Mdna, bestagroQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track borrowings and interest coverage each quarter.",
    "Monitor debtor days versus CFO and formulation versus technical mix commentary.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if inventory mark-down quarters recur in results.",
  ],
};
