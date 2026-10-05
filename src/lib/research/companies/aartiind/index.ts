import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { aartiindFy25Mdna } from "../../transcripts/aartiind-fy25-mdna";
import { aartiindQ1Fy27 } from "../../transcripts/aartiind-q1-fy27";

/** ~36.2 crore shares (equity capital ₹181 cr, face value ₹5). */
const SHARES_CRORE = 36.2;
const REF_PRICE = 465;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 500,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Benzene spreads compress; OPM stalls near thirteen percent; interest near ₹400 cr; export pricing pressure persists; market applies leveraged specialty multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 700,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹9,400 cr (+4% YoY on TTM) with OPM near fifteen percent; PAT rebuilds on Q1 FY27 run-rate; net CFO near ₹900 cr; borrowings flat near ₹5,000 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 820,
    sharesCrore: SHARES_CRORE,
    targetPe: 30,
    referencePrice: REF_PRICE,
    assumptions:
      "New capacities exceed seventy-five percent utilisation; OPM re-tests seventeen percent; agrochemical export restocking lifts volumes; ROCE moves toward ten percent with deleveraging.",
  }),
];

export const aartiindDeepResearch: DeepCompanyResearch = {
  articleSlug: "aartiind-midcap-memo",
  companyName: "Aarti Industries Ltd",
  nseSymbol: "AARTIIND",
  bseCode: "524208",
  valueDrivers: [
    "Benzene and nitro-chloro chain spreads, utilisation, and export realisations",
    "Operating profit margin through commissioning drag and input cost volatility",
    "Pharma and agrochemical intermediate mix and customer qualification cycles",
    "Borrowings, interest coverage, and return on capital employed after capex wave",
    "Net cash from operations versus negative free cash flow during project spend",
    "Promoter holding and capital allocation across downstream specialty blocks",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/AARTIIND/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹465, MCap ₹16,871 cr, book ~2.83×, ROCE 7%, 52w ₹338–552, ~36.2 cr shares, promoter 41.8%.",
    },
    {
      url: "https://www.aarti-industries.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Integrated specialty chemicals; benzene chain and nitro-chloro portfolio per FY25 materials.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/aarti-industries-ltd/aartiind/524208/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Consolidated quarterly results through Jun 2026 quarter on Screener tables.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 6371,
        FY25: 7269,
        FY26: 8286,
        "TTM Jun26": 9010,
      },
      comment: "TTM lifted by stronger H2 FY26 and Jun 2026 quarter ₹2,387 cr.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 978,
        FY25: 997,
        FY26: 1168,
        "TTM Jun26": 1335,
      },
      comment: "TTM OPM near fifteen percent vs fourteen percent FY25-FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 416,
        FY25: 331,
        FY26: 419,
        "TTM Jun26": 531,
      },
      comment: "FY25 trough on tax and interest; TTM recovery on stronger quarters.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 15,
        FY25: 14,
        FY26: 14,
        "TTM Jun26": 15,
      },
      comment: "Q1 FY27 OPM sixteen percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 6,
        FY25: 6,
        FY26: 7,
      },
      comment: "Low single-digit ROCE while borrowings and CWIP elevated.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1210,
        FY25: 1238,
        FY26: 781,
      },
      comment: "FY26 CFO/OP near sixty-seven percent; working capital absorbed cash.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 3623,
        FY25: 3848,
        FY26: 4966,
      },
      comment: "Leverage rose with project spend; reserves ₹5,774 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 11.49,
        FY25: 9.13,
        FY26: 11.56,
        "TTM Jun26": 14.64,
      },
      comment: "Face value ₹5; trailing P/E near 31.8 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue through volume and new product lines.",
      outcome: "Revenue ₹7,269 cr (+14% YoY); PAT ₹331 cr.",
      status: "met",
      commentary: "Top-line met; profit compressed on margin and tax.",
    },
    {
      period: "FY26 margin",
      promise: "Stabilise operating profit margin in mid-teens.",
      outcome: "FY26 OPM fourteen percent; TTM OPM fifteen percent.",
      status: "partial",
      commentary: "Full-year average below FY22 peak; Q1 FY27 improved.",
    },
    {
      period: "Balance sheet",
      promise: "Fund growth capex while maintaining access to capital markets.",
      outcome: "Borrowings ₹4,966 cr Mar FY26; free cash flow negative.",
      status: "partial",
      commentary: "Leverage up; equity base still supports investment grade profile.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite project inventory builds.",
      outcome: "Net CFO ₹781 cr on operating profit ₹1,168 cr.",
      status: "partial",
      commentary: "CFO/OP below FY25 peak; capex consumed cash.",
    },
    {
      period: "FY27 outlook",
      promise: "Mid-teens average OPM with high single digit revenue growth.",
      outcome: "Q1 FY27 revenue ₹2,387 cr; OPM sixteen percent; PAT ₹155 cr pending full year.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT further.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian integrated benzene and nitro-chloro specialty platform). Cross-check: TTM operating profit near ₹1,335 cr at 10× EV/EBITDA less net debt near ₹4,500 cr implies enterprise equity near ₹8,850 cr (~₹244/sh) at depressed ROCE; mid-teens OPM re-rates equity toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹700 cr at 28× implies about ₹541 (+16% vs ₹465); trailing multiple embeds FY25 earnings trough while TTM PAT ₹531 cr already recovered.",
  },
  transcripts: [aartiindFy25Mdna, aartiindQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track benzene chain and nitro-chloro segment splits when investor deck publishes.",
    "Monitor borrowings, interest, and inventory days each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or interest rises faster.",
  ],
};
