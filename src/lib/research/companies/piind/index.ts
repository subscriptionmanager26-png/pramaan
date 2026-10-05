import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { piindFy25Mdna } from "../../transcripts/piind-fy25-mdna";
import { piindQ2Fy26 } from "../../transcripts/piind-q2-fy26";

const SHARES_CRORE = 15.18;
const REF_PRICE = 2236;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 1180,
    sharesCrore: SHARES_CRORE,
    targetPe: 20,
    referencePrice: REF_PRICE,
    assumptions:
      "CSM export dispatch slips another year; domestic channel destocking persists; Mar 2026 style weak quarters repeat; working capital days stay above 110; OPM falls toward 26%; Isagro synergy slower than guided.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 1520,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales recover toward ₹7,000 cr with OPM near 29%; PAT normalises below FY25 peak ₹1,866 cr; debtor days improve modestly from 80; Jambusar new blocks contribute H2 FY27; R&D spend steady near 7% of sales.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1780,
    sharesCrore: SHARES_CRORE,
    targetPe: 25,
    referencePrice: REF_PRICE,
    assumptions:
      "CSM order book converts to double-digit export growth; domestic formulations rebound on normal monsoon; CFO exceeds ₹1,400 cr; CWIP peaks and ROCE re-expands above 22%; multiple re-rates toward historical premium.",
  }),
];

export const piindDeepResearch: DeepCompanyResearch = {
  articleSlug: "piind-midcap-memo",
  companyName: "PI Industries",
  nseSymbol: "PIIND",
  bseCode: "523642",
  valueDrivers: [
    "Custom synthesis and manufacturing (CSM) export order book and molecule pipeline conversion to revenue",
    "Domestic agrochemical formulations and plant nutrition volume through distributor network",
    "Jambusar and Panoli multi-purpose plant utilisation, debottlenecking, and CWIP commercialisation",
    "Operating margin and mix between high-value CSM and domestic branded products",
    "Working capital (debtor days, inventory days) and almost debt-free balance sheet optionality",
    "R&D spend as percent of turnover and patent filings supporting long-cycle CSM wins",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/PIIND/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹2,236, consolidated P&L through Mar FY26, TTM PAT ₹1,312 cr, 15.18 cr shares (face ₹1), borrowings ₹65 cr Mar FY26.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/p-i-industries-ltd/piind/523642/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 quarterly results, investor presentations, and annual report filings.",
    },
    {
      url: "https://www.piind.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Corporate overview: global top-five agchem CSM positioning, integrated Gujarat manufacturing, domestic agri-inputs brands.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 7145,
        FY25: 7571,
        FY26: 6183,
        "TTM Jun26": 6012,
      },
      comment: "FY26 and TTM reflect CSM dispatch timing and domestic destocking per quarterly sales tables on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 2038,
        FY25: 2389,
        FY26: 1962,
        "TTM Jun26": 1821,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 29,
        FY25: 32,
        FY26: 32,
        "TTM Jun26": 30,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 1731,
        FY25: 1866,
        FY26: 1435,
        "TTM Jun26": 1312,
      },
      comment: "Mar FY26 PAT ₹198 cr and Dec 2025 ₹282 cr pulled TTM below FY26 annual as Jun 2026 recovered to ₹342 cr.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 2099,
        FY25: 1478,
        FY26: 694,
      },
    },
    {
      label: "Free cash flow",
      unit: "₹ cr",
      periods: {
        FY24: 1622,
        FY25: 771,
        FY26: -268,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 44,
        FY25: 52,
        "Mar FY26": 65,
      },
      comment: "Net debt negligible versus investments ₹3,256 cr Mar FY26.",
    },
    {
      label: "CWIP",
      unit: "₹ cr",
      periods: {
        FY24: 221,
        FY25: 444,
        "Mar FY26": 875,
      },
    },
    {
      label: "Debtor days",
      unit: "days",
      periods: {
        FY25: 58,
        "Mar FY26": 80,
      },
    },
    {
      label: "Working capital days",
      unit: "days",
      periods: {
        FY25: 60,
        "Mar FY26": 120,
      },
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY25: 25,
        "Mar FY26": 18,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 749,
      },
    },
  ],
  guidanceLog: [
    {
      period: "CSM order book",
      promise: "Maintain multi-year CSM export visibility and top-tier global agchem partnerships.",
      outcome: "FY25 sales ₹7,571 cr and PAT ₹1,866 cr were peaks; FY26 sales fell to ₹6,183 cr on dispatch timing.",
      status: "partial",
      commentary: "Dollar order book metrics on Screener insights are login-gated; revenue timing drove FY26 miss versus trend.",
    },
    {
      period: "Jambusar capacity",
      promise: "Commission new multi-purpose blocks and debottleneck existing trains at Jambusar.",
      outcome: "CWIP rose to ₹875 cr Mar FY26 from ₹444 cr Mar FY25 while fixed assets reached ₹3,228 cr.",
      status: "partial",
      commentary: "Commercial contribution weighted to H2 FY27 in management commentary pending note-level segment data.",
    },
    {
      period: "Domestic agri-inputs",
      promise: "Grow formulations and plant nutrition through distributor expansion.",
      outcome: "Domestic volumes faced destocking in H1 FY26; Sep 2025 quarter sales ₹1,753 cr recovered modestly.",
      status: "partial",
      commentary: "Segment revenue split requires annual report note refresh; Isagro integration ongoing.",
    },
    {
      period: "Working capital",
      promise: "Keep cash conversion cycle tight as export share rises.",
      outcome: "Debtor days increased to 80 Mar FY26; working capital days 120; FY26 CFO ₹694 cr versus OP ₹1,962 cr.",
      status: "missed",
      commentary: "CFO/OP fell to 53% in FY26 per Screener cash flow table.",
    },
    {
      period: "R&D intensity",
      promise: "Sustain high single-digit R&D spend supporting pipeline molecules.",
      outcome: "OPM held near 32% FY26 despite lower sales, implying cost flexibility on R&D and plants.",
      status: "met",
      commentary: "Exact R&D rupee spend percent on Screener insights requires premium login.",
    },
    {
      period: "Balance sheet",
      promise: "Operate with minimal leverage while funding capex and treasury investments.",
      outcome: "Borrowings ₹65 cr Mar FY26; investments ₹3,256 cr; company flagged as almost debt free on Screener pros.",
      status: "beat",
      commentary: "Treasury and investments cushion cyclical WC swings without equity dilution risk.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (global agchem CSM leader with domestic formulations overlay). Cross-check: TTM operating profit near ₹1,821 cr at 16× EV/EBITDA less net cash near ₹3,190 cr (investments minus borrowings) implies enterprise equity near ₹26,000 cr or about ₹1,710 per share before quality premium, below CMP if growth re-accelerates.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹1,520 cr at 22× implies about ₹2,198 (-2% vs ₹2,236), below the 15% Buy hurdle; bull ~₹2,930 (+31%) needs CSM dispatch normalisation and CFO recovery together.",
  },
  transcripts: [piindFy25Mdna, piindQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track CSM order book commentary and export dispatch schedules on concalls.",
    "Monitor Jambusar CWIP roll-forward versus capex guidance each quarter.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating Mar FY26 trough PAT from run-rate near ₹380 cr per quarter at normal utilisation.",
  ],
};
