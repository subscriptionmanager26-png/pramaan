import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { lxchemFy25Mdna } from "../../transcripts/lxchem-fy25-mdna";
import { lxchemQ1Fy27 } from "../../transcripts/lxchem-q1-fy27";

/** ~27.85 crore shares (MCap ₹5,041 cr ÷ CMP ₹181 on Screener 2026-10-04). */
const SHARES_CRORE = 27.85;
const REF_PRICE = 181;
const REF_DATE = "2026-10-04";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 95,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Ethyl acetate spreads revert; OPM falls toward six percent; Dahej delays; borrowings above ₹650 cr; market applies high-teens multiple on trough PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 210,
    sharesCrore: SHARES_CRORE,
    targetPe: 26,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹3,250 cr (+4% on TTM) with average OPM near nine percent after normalising Q1 FY27 spike; PAT recovers from FY26 trough; borrowings stable near ₹540 cr pending Dahej ramp.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 265,
    sharesCrore: SHARES_CRORE,
    targetPe: 32,
    referencePrice: REF_PRICE,
    assumptions:
      "Dahej Phase II qualifies on schedule; fluorochemicals and specialty mix improve; OPM sustains low double digits; ROCE moves toward ten percent; market holds low-thirties multiple on visible PAT recovery.",
  }),
];

export const lxchemDeepResearch: DeepCompanyResearch = {
  articleSlug: "lxchem-midcap-memo",
  companyName: "Laxmi Organic Industries Ltd",
  nseSymbol: "LXCHEM",
  bseCode: "543277",
  valueDrivers: [
    "Essentials segment ethyl acetate and acetic anhydride volume, spread, and Lote capacity utilisation",
    "Specialty diketene derivatives mix, regulatory replacement products, and export share",
    "Operating profit margin versus acetic acid, ethanol, and energy costs on integrated sites",
    "Dahej Phase II commissioning, fluorochemicals ramp, and Project Vayu revenue timing",
    "Borrowings, capital work in progress, and return on capital employed recovery from FY26 trough",
    "Net cash from operations versus negative free cash flow during heavy capex years",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/LXCHEM/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹181, MCap ₹5,041 cr, book ~₹71.6, ROCE 4.72%, 52w ₹107–215, ~27.85 cr shares, promoter 69.34%.",
    },
    {
      url: "https://www.laxmi.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Essentials, specialty DDP, Dahej and Lote manufacturing footprint.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/laxmi-organic-industries-ltd/lxchem/543277/",
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
        FY24: 2865,
        FY25: 2985,
        FY26: 2847,
        "TTM Jun26": 3122,
      },
      comment: "TTM +5% YoY; Jun 2026 quarter ₹968 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 256,
        FY25: 286,
        FY26: 172,
        "TTM Jun26": 255,
      },
      comment: "TTM OPM near eight percent vs ten percent FY25; Q1 FY27 OPM twelve percent.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 121,
        FY25: 114,
        FY26: 79,
        "TTM Jun26": 126,
      },
      comment: "FY26 trough on weak H2; Q1 FY27 PAT ₹68 cr on favourable spreads.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 10,
        FY26: 6,
        "TTM Jun26": 8,
      },
      comment: "Margin compressed before Jun 2026 quarter rebound.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 9,
        FY26: 5,
      },
      comment: "ROCE trough on higher capital employed and softer FY26 margins.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 561,
        FY25: 108,
        FY26: 175,
      },
      comment: "FY25 CFO fell on working capital; FY26 CFO/OP near 107% on release.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 143,
        FY25: 258,
        FY26: 543,
      },
      comment: "Leverage rose with Dahej and fluorochemical capex; interest FY26 near ₹21 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 4.37,
        FY25: 4.1,
        FY26: 2.86,
        "TTM Jun26": 4.54,
      },
      comment: "Face value ₹2; trailing P/E near 40 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Mid-single-digit revenue growth with stable Essentials contribution.",
      outcome: "Revenue ₹2,985 cr (+4% YoY); specialty growth lagged on product phase-out.",
      status: "partial",
      commentary: "Top line grew; specialty mix target delayed.",
    },
    {
      period: "FY25 leverage",
      promise: "Fund Dahej Phase II while keeping operating cash positive.",
      outcome: "Net CFO ₹108 cr; borrowings ₹258 cr (+80% YoY); FCF negative.",
      status: "partial",
      commentary: "Capex absorbed cash; leverage still manageable.",
    },
    {
      period: "FY26 margins",
      promise: "Stabilise operating profit margin near high single digits.",
      outcome: "OPM six percent; PAT ₹79 cr; TTM margin recovered toward eight percent.",
      status: "missed",
      commentary: "Spread compression and depreciation weighed on reported margins.",
    },
    {
      period: "FY26 ROCE",
      promise: "Improve return on capital employed as new assets ramp.",
      outcome: "ROCE five percent on elevated capital base before Dahej revenue.",
      status: "missed",
      commentary: "FY27 commissioning critical for ROCE recovery.",
    },
    {
      period: "FY27 Dahej and outlook",
      promise: "Phase II capitalisation in Q2 FY27 with qualification and commercial ramp in H2 FY27.",
      outcome: "Q1 FY27 revenue ₹968 cr; PAT ₹68 cr; guide reiterated Jul 2026.",
      status: "pending",
      commentary: "Do not annualise Q1 spreads; validate H2 OPM near nine to ten percent.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian acetyl and diketene specialty platform with cyclical Essentials spreads). Cross-check: TTM operating profit near ₹255 cr at 8× EV/EBITDA less net debt near ₹520 cr caps downside near ₹120/sh only if margins stay at FY26 trough; low double-digit OPM on normalised spreads supports base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹210 cr at 26× implies about ₹196 (+8% vs ₹181); trailing P/E near 40× embeds cyclical Q1 FY27 spike, leaving Neutral until ROCE clears high single digits with Dahej revenue visible.",
  },
  transcripts: [lxchemFy25Mdna, lxchemQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track Essentials versus specialty revenue when investor deck publishes splits.",
    "Monitor Dahej Phase II capitalisation, fluorochemicals utilisation, and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if ethyl acetate spreads normalise faster than management guides.",
  ],
};
