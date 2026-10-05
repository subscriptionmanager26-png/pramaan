import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { paushakFy25Mdna } from "../../transcripts/paushak-fy25-mdna";
import { paushakQ1Fy27 } from "../../transcripts/paushak-q1-fy27";

/** ~2.47 crore shares (MCap ₹1,603 cr ÷ CMP ₹650 on Screener 2026-10-01). */
const SHARES_CRORE = 2.47;
const REF_PRICE = 650;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 35,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Agrochemical destocking returns; quarterly revenue reverts toward ₹55 cr; OPM falls toward twenty-three percent; ROCE stays below ten percent; market applies high-twenties multiple on trough PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 50,
    sharesCrore: SHARES_CRORE,
    targetPe: 34,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹280 cr (+14% on TTM) with average OPM near twenty-eight percent; new capacity contributes but not every quarter matches Jun 2026; borrowings stable near ₹80 cr; PAT recovers from FY26 trough.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 62,
    sharesCrore: SHARES_CRORE,
    targetPe: 40,
    referencePrice: REF_PRICE,
    assumptions:
      "Sustained ₹80 cr+ quarterly revenue with thirty percent OPM; CDMO wins convert; ROCE moves toward fourteen percent; export mix rises; market holds forty times forward earnings on visible PAT ramp.",
  }),
];

export const paushakDeepResearch: DeepCompanyResearch = {
  articleSlug: "paushak-midcap-memo",
  companyName: "Paushak Ltd",
  nseSymbol: "PAUSHAKLTD",
  bseCode: "532742",
  valueDrivers: [
    "Phosgene plant utilisation and downstream chloroformate / isocyanate volumes",
    "Operating profit margin on pharma versus agrochemical customer mix",
    "Panelav expansion revenue ramp and capital work in progress conversion",
    "Borrowings and interest coverage during FY25–FY26 capex cycle",
    "Net cash from operations versus inventory days near two hundred ninety at Mar FY26",
    "CDMO and custom synthesis pipeline conversion to recurring revenue",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/532742/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹650, MCap ₹1,603 cr, book ~₹199, ROCE 8.3%, 52w ₹342–958, ~2.47 cr shares, promoter 67.3%.",
    },
    {
      url: "https://www.paushak.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Phosgene specialty portfolio and Alembic group affiliation.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/paushak/paushakltd/532742/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Standalone quarterly results through Jun 2026 quarter on Screener tables.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 206,
        FY25: 211,
        FY26: 219,
        "TTM Jun26": 246,
      },
      comment: "TTM +15% YoY; Jun 2026 quarter ₹84 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 65,
        FY25: 60,
        FY26: 61,
        "TTM Jun26": 69,
      },
      comment: "TTM OPM near twenty-eight percent; Q1 FY27 OPM thirty-one percent.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 54,
        FY25: 49,
        FY26: 39,
        "TTM Jun26": 42,
      },
      comment: "FY26 PAT -20% YoY on depreciation and interest; TTM EPS ₹17.19.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 31,
        FY25: 28,
        FY26: 28,
        "TTM Jun26": 28,
      },
      comment: "Jun 2026 quarter OPM thirty-one percent on volume lift.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 11,
        FY26: 8,
      },
      comment: "Screener ROCE 8.3% TTM; expansion assets weigh on denominator.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 56,
        FY25: 38,
        FY26: 54,
      },
      comment: "FY26 CFO recovered vs FY25; FY25 FCF deeply negative on capex.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 0,
        FY25: 25,
        FY26: 77,
      },
      comment: "Term debt funds Panelav expansion; interest TTM near ₹2 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 22.09,
        FY25: 20.07,
        FY26: 15.95,
        "TTM Jun26": 17.19,
      },
      comment: "Face value ₹5; trailing P/E near 38 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow volumes on phosgene derivatives and CDMO pipeline.",
      outcome: "Revenue ₹211 cr (+2% YoY); PAT ₹49 cr (-9% YoY).",
      status: "partial",
      commentary: "Top line inching up; margin and PAT softened.",
    },
    {
      period: "FY25 capex",
      promise: "Commission downstream expansion at Panelav through FY26.",
      outcome: "CWIP ₹190 cr Mar FY25; fixed assets ₹377 cr Mar FY26.",
      status: "met",
      commentary: "Assets capitalised; CWIP fell to ₹26 cr Jun 2026.",
    },
    {
      period: "FY26 profitability",
      promise: "Restore profit growth as new lines ramp.",
      outcome: "PAT ₹39 cr (-20% YoY); ROCE eight percent.",
      status: "missed",
      commentary: "Depreciation and interest rose before revenue catch-up.",
    },
    {
      period: "Q1 FY27 volume",
      promise: "Higher utilisation post commissioning.",
      outcome: "Jun 2026 quarter revenue ₹84 cr; PAT ₹15 cr; OPM 31%.",
      status: "beat",
      commentary: "Validate sustainability through agrochemical season.",
    },
    {
      period: "FY27 ROCE",
      promise: "Improve ROCE toward low teens as expansion earns returns.",
      outcome: "Pending; management reiterated on Jul 2026 call.",
      status: "pending",
      commentary: "Requires two to three quarters at ₹70 cr+ revenue run rate.",
    },
  ],
  valuation: {
    methodology:
      "Forward standalone PAT × P/E (niche phosgene specialty platform). Cross-check: TTM operating profit near ₹69 cr at 12× EV/EBITDA less net debt near ₹75 cr supports equity near ₹750–800 cr only if Jun 2026 margin persists.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹50 cr at 34× implies about ₹688 (+6% vs ₹650); trailing multiple embeds Q1 FY27 spike while FY26 PAT trough caps conviction until ROCE recovers.",
  },
  transcripts: [paushakFy25Mdna, paushakQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track phosgene utilisation and product mix on concalls.",
    "Monitor borrowings, interest, and CWIP each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if quarterly revenue falls below ₹65 cr for two consecutive quarters.",
  ],
};
