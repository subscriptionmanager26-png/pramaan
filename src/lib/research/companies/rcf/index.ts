import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { rcfFy25Mdna } from "../../transcripts/rcf-fy25-mdna";
import { rcfQ2Fy26 } from "../../transcripts/rcf-q2-fy26";

const SHARES_CRORE = 55.2;
const REF_PRICE = 107;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 320,
    sharesCrore: SHARES_CRORE,
    targetPe: 10,
    referencePrice: REF_PRICE,
    assumptions:
      "Urea reimbursement lags; industrial spreads compress; interest on higher borrowings near ₹4,100 cr; Mar 2026 style PAT spike does not repeat; CFO stays negative.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 500,
    sharesCrore: SHARES_CRORE,
    targetPe: 12.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹19,000 cr with OPM 5.5%; PAT normalises below TTM ₹447 cr peak; interest ₹320 cr; dividend payout near 30%; net debt stable after FY26 capex wave.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 620,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Policy clears urea energy claims; Trombay and Thal energy projects cut Gcal/MT; industrial chemicals hold Sep-Mar 2026 margin band; CFO turns positive above ₹800 cr; ROCE re-rates above 12%.",
  }),
];

export const rcfDeepResearch: DeepCompanyResearch = {
  articleSlug: "rcf-midcap-memo",
  companyName: "Rashtriya Chemicals & Fertilizers",
  nseSymbol: "RCF",
  bseCode: "524230",
  valueDrivers: [
    "Urea and NPK Suphala volume with Department of Fertilizers fixed-cost and energy reimbursement timing",
    "Trombay and Thal urea energy consumption (Gcal/MT) versus gas and power tariffs",
    "Industrial chemicals realisations (methanol, ammonia chain) versus feedstock costs",
    "Borrowings, interest expense, and capex/CWIP near ₹810 cr Mar FY26",
    "Subsidy receivables, working capital days, and CFO conversion after FY26 trough",
    "75% GOI promoter stake, dividend payout near 30%, and PSU valuation discount",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/RCF/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹107, consolidated P&L, quarterly OPM, borrowings Mar FY26, 55.2 cr shares (face ₹10), TTM PAT ₹447 cr.",
    },
    {
      url: "https://www.rcfltd.com/investor-relations/annual-reports/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 industrial and fertiliser division narrative, Trombay and Thal operations.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/rashtriya-chemicals-fertilizers-ltd/rcf/524230/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 investor presentations and quarterly results through Jun 2026.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 16981,
        FY25: 16934,
        FY26: 18480,
        "TTM Jun26": 18695,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM lifted by Mar and Jun 2026 quarter sales.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 520,
        FY25: 681,
        FY26: 956,
        "TTM Jun26": 1000,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 3,
        FY25: 4,
        FY26: 5,
        "TTM Jun26": 5,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 225,
        FY25: 242,
        FY26: 427,
        "TTM Jun26": 447,
      },
      comment: "Mar 2026 quarter PAT ₹187 cr and other income ₹113 cr flattered trailing earnings versus Jun 2026 ₹74 cr.",
    },
    {
      label: "Other income",
      unit: "₹ cr",
      periods: {
        FY24: 204,
        FY25: 169,
        FY26: 241,
        "TTM Jun26": 252,
      },
    },
    {
      label: "Interest expense",
      unit: "₹ cr",
      periods: {
        FY24: 190,
        FY25: 259,
        FY26: 295,
        "TTM Jun26": 308,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: -422,
        FY25: 2364,
        FY26: -471,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 3297,
        FY25: 2762,
        "Mar FY26": 4128,
      },
      comment: "Borrowings rose with capex and working capital; investments ₹1,380 cr Mar FY26.",
    },
    {
      label: "Capital work in progress",
      unit: "₹ cr",
      periods: {
        FY25: 579,
        "Mar FY26": 810,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 93,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Energy efficiency",
      promise: "Cut urea energy consumption at Trombay and Thal versus prior-year Gcal/MT.",
      outcome: "FY26 OPM recovered to 5% from FY24 trough; plant-wise Gcal/MT requires Screener premium.",
      status: "partial",
      commentary: "Management cited efficiency projects in FY25 MD&A; commissioning timing spans FY27.",
    },
    {
      period: "Fertiliser throughput",
      promise: "Maintain urea and Suphala volumes and dealer network reach.",
      outcome: "Revenue TTM near ₹18,695 cr; volumes resilient but margins policy-linked.",
      status: "partial",
      commentary: "Urea market share percent disclosed in premium Screener insights only.",
    },
    {
      period: "Industrial chemicals",
      promise: "Stabilise industrial division realisations after FY23 peak.",
      outcome: "Industrial production volumes partially visible; spreads remain below FY23.",
      status: "partial",
      commentary: "Segment revenue split for FY26 not in free sources used here.",
    },
    {
      period: "Capex funding",
      promise: "Fund CWIP without equity dilution.",
      outcome: "Borrowings ₹4,128 cr Mar FY26; CWIP ₹810 cr; no equity raise on Screener.",
      status: "partial",
      commentary: "Higher leverage increases interest TTM near ₹308 cr.",
    },
    {
      period: "Dividend continuity",
      promise: "Keep payout near 30% for income-oriented PSU holders.",
      outcome: "FY26 payout 30% on Screener; dividend yield near 2.2% at reference price.",
      status: "met",
      commentary: "Dividend supports total return when P/E sits near 14× on TTM earnings.",
    },
    {
      period: "Cash conversion",
      promise: "Improve CFO after volatile FY24 and FY26 swings.",
      outcome: "FY26 CFO negative ₹471 cr despite ₹956 cr operating profit; FY25 was an outlier positive ₹2,364 cr.",
      status: "missed",
      commentary: "Management flagged subsidy receivable timing on Q2 FY26 call excerpts.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (PSU fertiliser and industrial chemicals, reimbursement and leverage overlay). Cross-check: TTM operating profit near ₹1,000 cr at 6.5× EV/EBITDA less net debt near ₹2,750 cr (borrowings minus investments) yields equity near ₹6,750 cr or ₹122 per share before cycle premium, above CMP if Mar 2026 earnings persist.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹500 cr at 12.5× implies about ₹113 (+5.6% vs ₹107), below the 15% Buy hurdle; bull ~₹157 (+47%) needs reimbursement catch-up and sustained 6% OPM together.",
  },
  transcripts: [rcfFy25Mdna, rcfQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track Department of Fertilizers reimbursement notices and urea energy norm revisions.",
    "Monitor Trombay and Thal energy consumption disclosures in annual report.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating Mar 2026 one-off other income from run-rate near ₹200 cr.",
  ],
};
