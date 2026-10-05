import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { deepaknitFy25Mdna } from "../../transcripts/deepaknit-fy25-mdna";
import { deepaknitQ1Fy27 } from "../../transcripts/deepaknit-q1-fy27";

/** ~13.63 crore shares (equity capital ₹27 cr, face value ₹2). */
const SHARES_CRORE = 13.63;
const REF_PRICE = 1493;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 620,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "Phenol spreads compress again; OPM mean-reverts to low teens; advanced intermediate export pricing weak; capex overhang keeps ROCE near ten percent; market applies trough-cycle multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 920,
    sharesCrore: SHARES_CRORE,
    targetPe: 26,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹9,200 cr (+7% YoY) with average OPM near fifteen percent; PAT rebuilds on Q1 FY27 run-rate without assuming every quarter matches June 2026 peak; net CFO near ₹650 cr; borrowings plateau below ₹1,800 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1050,
    sharesCrore: SHARES_CRORE,
    targetPe: 27,
    referencePrice: REF_PRICE,
    assumptions:
      "Phenolics utilisation above ninety percent; advanced intermediate mix rises; OPM sustains high teens in H2 FY27; derivative capex starts contributing; re-rating toward mid-cycle ROCE near eighteen percent.",
  }),
];

export const deepaknitDeepResearch: DeepCompanyResearch = {
  articleSlug: "deepaknit-midcap-memo",
  companyName: "Deepak Nitrite Ltd",
  nseSymbol: "DEEPAKNTR",
  bseCode: "506401",
  valueDrivers: [
    "Phenolics versus advanced intermediates revenue mix, volume, and realisation",
    "Operating profit margin through phenol-acetone spreads and cumene economics",
    "Phenol and acetone capacity utilisation and India market share",
    "Advanced intermediate export mix (nitrites, xylidines, oximes) and pricing",
    "Working capital, cash conversion, and borrowings through capex cycle",
    "Capital work in progress, derivative projects, and ROCE recovery path",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/DEEPAKNTR/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,493, MCap ₹20,361 cr, book ~₹428/sh, ROCE 11.4%, 52w ₹1,280–1,898, ~13.63 cr shares.",
    },
    {
      url: "https://www.deepaknitrite.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Integrated phenolics and advanced intermediates; Dahej and Roha manufacturing footprint.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/deepak-nitrite-ltd/deepakntr/506401/",
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
        FY24: 7682,
        FY25: 8282,
        FY26: 7887,
        "TTM Jun26": 8575,
      },
      comment: "FY26 dip on phenolics pricing; TTM re-accelerated on Jun 2026 quarter.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 1127,
        FY25: 1095,
        FY26: 987,
        "TTM Jun26": 1331,
      },
      comment: "FY26 full-year OPM thirteen percent; TTM lifted by margin recovery.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 811,
        FY25: 697,
        FY26: 551,
        "TTM Jun26": 783,
      },
      comment: "FY26 PAT trough; TTM PAT reflects Jun 2026 quarter ₹345 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 15,
        FY25: 13,
        FY26: 13,
        "TTM Jun26": 16,
      },
      comment: "Q1 FY27 quarterly OPM near twenty one percent on Screener table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 22,
        FY25: 16,
        FY26: 11,
      },
      comment: "ROCE fell as borrowings and CWIP rose through FY26.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 874,
        FY25: 625,
        FY26: 539,
      },
      comment: "FY26 CFO/OP near fifty-five percent; working capital absorbed cash.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 286,
        FY25: 1267,
        FY26: 1638,
      },
      comment: "Leverage rose with phenolics capex; reserves ₹5,810 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 59.45,
        FY25: 51.12,
        FY26: 40.36,
        "TTM Jun26": 57.43,
      },
      comment: "Face value ₹2; trailing P/E near 25.7 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue through phenolics and advanced intermediate volumes.",
      outcome: "Revenue ₹8,282 cr (+8% YoY); PAT ₹697 cr.",
      status: "met",
      commentary: "Top-line met; margin moderated on spreads.",
    },
    {
      period: "FY26 margin",
      promise: "Hold operating profit margin in low-to-mid teens.",
      outcome: "FY26 OPM thirteen percent; Dec 2025 quarter OPM nine percent.",
      status: "partial",
      commentary: "Full-year average met band; intra-year volatility high.",
    },
    {
      period: "Balance sheet",
      promise: "Fund capex while maintaining investment grade leverage profile.",
      outcome: "Borrowings ₹1,638 cr Mar FY26; CWIP ₹1,828 cr.",
      status: "partial",
      commentary: "Leverage up materially versus FY24; still equity-heavy.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite inventory and receivable builds.",
      outcome: "Net CFO ₹539 cr on operating profit ₹987 cr; free cash flow negative.",
      status: "missed",
      commentary: "Capex and working capital consumed cash in FY26.",
    },
    {
      period: "FY27 outlook",
      promise: "High single digit revenue growth with mid-teens average OPM.",
      outcome: "Q1 FY27 revenue ₹2,578 cr; OPM twenty one percent; PAT ₹345 cr supports recovery.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT further.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian integrated phenolics and advanced intermediates leader). Cross-check: TTM operating profit near ₹1,331 cr at 9× EV/EBITDA less net debt near ₹1,400 cr implies enterprise equity near ₹10,600 cr (~₹778/sh) at depressed margins; mid-teens OPM re-rates equity toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹920 cr at 26× implies about ₹1,755 (+17% vs ₹1,493); trailing multiple embeds FY26 earnings trough, leaving room for Buy if Q1 FY27 margin persists part year.",
  },
  transcripts: [deepaknitFy25Mdna, deepaknitQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track phenolics versus advanced intermediate mix when investor deck publishes segment splits.",
    "Monitor borrowings, CWIP, and inventory days each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or interest cost rises faster.",
  ],
};
