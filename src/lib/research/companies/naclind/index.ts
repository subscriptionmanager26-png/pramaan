import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { naclindFy25Mdna } from "../../transcripts/naclind-fy25-mdna";
import { naclindQ1Fy27 } from "../../transcripts/naclind-q1-fy27";

const SHARES_CRORE = 23.5;
const REF_PRICE = 130;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 35,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,520 crore with OPM near 5% after another weak rabi mix; interest near ₹38 crore; net CFO flat; Coromandel synergies delayed; ROCE near 5%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 65,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,650 crore (+4% YoY) with OPM near 7.5%; Q1 FY27 margin partly sustained; borrowings near ₹280 crore; net CFO near ₹80 crore after FY26 outflow.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 105,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "Export restocking and Coromandel cross-sell lift OPM toward 9%; revenue near ₹1,780 crore; net CFO above ₹150 crore; ROCE re-tests 12% with debtor days below 95.",
  }),
];

export const naclindDeepResearch: DeepCompanyResearch = {
  articleSlug: "naclind-midcap-memo",
  companyName: "NACL Industries Ltd",
  nseSymbol: "NACLIND",
  bseCode: "524661",
  valueDrivers: [
    "Domestic formulation and export technical revenue mix across insecticides, herbicides, and fungicides",
    "Operating profit margin through plant utilisation at Srikakulam and Ethakota and generic price cycles",
    "Coromandel International integration: procurement, registrations, and channel cross-sell",
    "Working capital days, debtor and inventory cycles, and cash from operations versus reported PAT",
    "Borrowings, interest coverage, and debt reduction after FY24 peak leverage",
    "Contract manufacturing for MNCs and international brand registrations in Asia and Africa",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/NACLIND/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹130, MCap ₹3,055 cr, book ~₹29.2/sh, ROCE 8.1%, promoter 53.7% Coromandel Jun 2026, 52w ₹113–245.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/nacl-industries-ltd/naclind/524661/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY25 result filings; Coromandel open offer and control change disclosures Aug–Sep 2025.",
    },
    {
      url: "https://www.naclind.com/investor-relations",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 consolidated revenue ₹1,584 cr, PAT ₹5 cr, OPM 7%; FY25 loss year; 50+ products, 30+ export countries per company profile.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 2116,
        FY24: 1779,
        FY25: 1235,
        FY26: 1584,
        "TTM Jun26": 1519,
      },
      comment: "FY26 per Screener consolidated P&L; FY25 trough after FY23 peak.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 193,
        FY24: 17,
        FY25: -62,
        FY26: 103,
        "TTM Jun26": 106,
      },
      comment: "FY25 negative OPM near -5%; FY26 recovery toward 7%.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 95,
        FY24: -59,
        FY25: -92,
        FY26: 5,
        "TTM Jun26": 12,
      },
      comment: "Loss years FY24–FY25; FY26 barely profitable; Q1 FY27 PAT near ₹21 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 9,
        FY24: 1,
        FY25: -5,
        FY26: 7,
        "Q1 FY27": 11,
      },
      comment: "Q1 FY27 per Screener quarterly table; sustainability unproven.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY23: 724,
        FY24: 789,
        FY25: 399,
        FY26: 312,
      },
      comment: "Debt cut after FY24 peak; interest near ₹46 cr in FY26.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: -20,
        FY24: 50,
        FY25: 469,
        FY26: -104,
      },
      comment: "FY26 CFO outflow despite OP recovery; quality gap versus headline margin.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY23: 15,
        FY24: 0,
        FY25: -8,
        FY26: 8,
      },
      comment: "Screener consolidated ROCE 8.1% Jun 2026 after FY25 trough.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY23: 4.11,
        FY24: -2.55,
        FY25: -3.94,
        FY26: 0.2,
        "TTM Jun26": 0.53,
      },
      comment: "On ~23.5 crore shares; trailing P/E near 118× at ₹130 reference.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 profitability",
      promise: "Navigate destocking while protecting market share in domestic and export channels.",
      outcome: "Reported PAT near negative ₹92 crore on revenue near ₹1,235 crore.",
      status: "missed",
      commentary: "Operating profit turned negative; Mar 2025 quarter OPM near -37% on Screener.",
    },
    {
      period: "Debt reduction",
      promise: "Reduce borrowings and improve interest coverage.",
      outcome: "Borrowings fell from ₹789 cr (Mar FY24) to ₹312 cr (Mar FY26).",
      status: "beat",
      commentary: "Balance sheet lighter but interest coverage still thin when OPM compresses.",
    },
    {
      period: "Coromandel control",
      promise: "Complete promoter change and open offer process.",
      outcome: "Coromandel holding near 53.7% as of Jun 2026; open offer at ₹76.70 largely unaccepted.",
      status: "met",
      commentary: "Market price ₹130 embeds control premium far above offer price.",
    },
    {
      period: "FY26 earnings recovery",
      promise: "Return to positive operating and net profit for the full year.",
      outcome: "FY26 OP near ₹103 cr; PAT near ₹5 cr only.",
      status: "partial",
      commentary: "Operating line recovered; net profit minimal after interest and tax noise.",
    },
    {
      period: "Q1 FY27 margin",
      promise: "Show utilisation-led margin improvement post integration start.",
      outcome: "Q1 FY27 revenue near ₹383 cr with OPM near 11% and PAT near ₹21 cr.",
      status: "beat",
      commentary: "Single quarter; watch Sep and Dec 2026 for seasonality and CFO conversion.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated crop protection platform under Coromandel). Cross-check: FY26 operating profit near ₹103 cr at 9× EV/EBITDA less net debt near ₹300 cr implies equity near ₹630 cr or about ₹27 per share before control premium, far below ₹130 CMP.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹65 cr at 14× implies about ₹39 (-70% vs ₹130); bull ~₹76 (-41%) even with synergy optimism; CMP prices control and integration optionality beyond base earnings power.",
  },
  transcripts: [naclindFy25Mdna, naclindQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track Coromandel consolidation and related-party disclosures in exchange filings.",
    "Monitor CFO versus operating profit each quarter after FY26 mismatch.",
    "Replace curated concall quotes with BSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT when integration synergy numbers are quantified on calls.",
  ],
};
