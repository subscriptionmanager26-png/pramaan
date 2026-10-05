import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { anupamFy25Mdna } from "../../transcripts/anupam-fy25-mdna";
import { anupamQ1Fy27 } from "../../transcripts/anupam-q1-fy27";

/** ~11.38 crore shares (MCap ₹13,249 cr ÷ CMP ₹1,164 on Screener 2026-10-01). */
const SHARES_CRORE = 11.38;
const REF_PRICE = 1164;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 210,
    sharesCrore: SHARES_CRORE,
    targetPe: 38,
    referencePrice: REF_PRICE,
    assumptions:
      "Order book slips; OPM reverts toward twenty percent; interest near ₹170 cr; market de-rates leveraged CDMO-style specialty name to high-thirties forward multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 285,
    sharesCrore: SHARES_CRORE,
    targetPe: 50,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,850 cr (+20% on TTM) with average OPM near twenty-three percent; PAT benefits from volume leverage; interest stable near ₹155 cr; ROCE stays below ten percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 340,
    sharesCrore: SHARES_CRORE,
    targetPe: 54,
    referencePrice: REF_PRICE,
    assumptions:
      "Agrochemical and personal care contracts ramp; OPM sustains mid-twenties; working capital releases; borrowings flat; market holds low-fifties multiple on visible PAT growth toward FY29.",
  }),
];

export const anupamDeepResearch: DeepCompanyResearch = {
  articleSlug: "anupam-midcap-memo",
  companyName: "Anupam Rasayan India Ltd",
  nseSymbol: "ANURAS",
  bseCode: "543275",
  valueDrivers: [
    "Life-science specialty chemical revenue (agrochemical, personal care, pharma KSM mix)",
    "Operating profit margin on fluorination and continuous-flow capacity utilisation",
    "Order book conversion and customer inventory cycles (debtor days near 148 Mar FY26)",
    "Interest expense and borrowings toward ₹1,867 cr Mar FY26 on Dahej/Sachin capex",
    "Net cash from operations versus inventory days near 490 Mar FY26",
    "Return on capital employed recovery from sub-eight percent trough",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ANURAS/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,164, MCap ₹13,249 cr, book ~₹290, ROCE 7.38%, 52w ₹1,047–1,415, ~11.38 cr shares, promoter 59.07%.",
    },
    {
      url: "https://anupamrasayan.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Specialty life-science chemicals; fluorination and flow chemistry capacity per investor deck.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/anupam-rasayan-india-ltd/anuras/543275/",
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
        FY24: 1475,
        FY25: 1437,
        FY26: 2365,
        "TTM Jun26": 2535,
      },
      comment: "FY26 +65% YoY; Jun 2026 quarter ₹655 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 381,
        FY25: 401,
        FY26: 526,
        "TTM Jun26": 563,
      },
      comment: "TTM OPM near twenty-two percent vs twenty-eight percent FY25.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 167,
        FY25: 160,
        FY26: 222,
        "TTM Jun26": 225,
      },
      comment: "TTM PAT +41% YoY; Q1 FY27 PAT ₹51 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 26,
        FY25: 28,
        FY26: 22,
        "TTM Jun26": 22,
      },
      comment: "Margin compressed as depreciation and input costs rose on new lines.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 7,
        FY26: 7,
      },
      comment: "ROCE trough on higher capital employed and interest burden.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 59,
        FY25: -30,
        FY26: 334,
      },
      comment: "FY26 CFO/OP near seventy-two percent after FY25 working capital drag.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 1069,
        FY25: 1373,
        FY26: 1867,
      },
      comment: "Leverage rose with Dahej expansion; interest FY26 near ₹149 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 11.71,
        FY25: 8.49,
        FY26: 14.94,
        "TTM Jun26": 15.35,
      },
      comment: "Face value ₹10; trailing P/E near 75.8 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Deliver order-book growth across agrochemical and personal care molecules.",
      outcome: "Revenue ₹1,437 cr (-3% YoY) on customer inventory destocking.",
      status: "missed",
      commentary: "Volumes delayed; margin held near twenty-eight percent OPM.",
    },
    {
      period: "FY25 cash conversion",
      promise: "Normalise working capital after FY24 stretch.",
      outcome: "Net CFO negative ₹30 cr; debtor days near 186.",
      status: "missed",
      commentary: "FY26 recovery needed to restore credibility.",
    },
    {
      period: "FY26 revenue",
      promise: "Accelerate revenue as Sachin and Dahej units ramp.",
      outcome: "Revenue ₹2,365 cr (+65% YoY); TTM above ₹2,535 cr.",
      status: "met",
      commentary: "Top-line inflection validated in H2 FY26 and Q1 FY27.",
    },
    {
      period: "FY26 balance sheet",
      promise: "Fund capex while improving CFO.",
      outcome: "Borrowings ₹1,867 cr; net CFO ₹334 cr; free cash flow still negative.",
      status: "partial",
      commentary: "CFO improved but leverage and capex keep FCF negative.",
    },
    {
      period: "FY27 outlook",
      promise: "Revenue toward ₹2,700–2,800 cr with mid-twenties OPM and stable interest.",
      outcome: "Q1 FY27 revenue ₹655 cr; PAT ₹51 cr; guide reiterated on Aug 2026 call.",
      status: "pending",
      commentary: "Validate H2 margin and debtor days toward 140 before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian life-science specialty chemical platform with leveraged capex cycle). Cross-check: TTM operating profit near ₹563 cr at 12× EV/EBITDA less net debt near ₹1,800 cr supports equity near ₹4,900 cr (~₹430/sh) only if margins stay at trough; mid-twenties OPM re-rates toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹285 cr at 50× implies about ₹1,252 (+8% vs ₹1,164); trailing multiple embeds growth and leverage, leaving Neutral until ROCE clears ten percent with borrowings flat.",
  },
  transcripts: [anupamFy25Mdna, anupamQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track order book and segment mix when investor deck publishes splits.",
    "Monitor interest expense and borrowings each quarter on concalls.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves one-off or capex slips.",
  ],
};
