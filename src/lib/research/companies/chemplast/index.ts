import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { chemplastFy25Mdna } from "../../transcripts/chemplast-fy25-mdna";
import { chemplastQ1Fy27 } from "../../transcripts/chemplast-q1-fy27";

/** ~15.78 crore shares (MCap ₹3,029 cr ÷ CMP ₹192 on Screener 2026-10-04). */
const SHARES_CRORE = 15.78;
const REF_PRICE = 192;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 40,
    sharesCrore: SHARES_CRORE,
    targetPe: 12,
    referencePrice: REF_PRICE,
    assumptions:
      "Suspension PVC spreads stay weak; consolidated OPM below four percent; interest near ₹260 cr; market applies low-teens multiple on minimal PAT recovery.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 170,
    sharesCrore: SHARES_CRORE,
    targetPe: 19,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹4,350 cr (+2% on TTM) with average OPM near seven percent; specialty paste PVC and CMCD mix lift margins; PAT normalises from TTM loss; borrowings flat near ₹2,450 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 280,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "PVC cycle recovery and R-32 ramp drive OPM toward ten percent; working capital release improves CFO; ROCE moves toward eight percent; market pays low-twenties forward P/E on visible PAT.",
  }),
];

export const chemplastDeepResearch: DeepCompanyResearch = {
  articleSlug: "chemplast-midcap-memo",
  companyName: "Chemplast Sanmar Ltd",
  nseSymbol: "CHEMPLASTS",
  bseCode: "543336",
  valueDrivers: [
    "Speciality paste PVC resin volume and import-substitution pricing",
    "Suspension PVC spreads and plant utilisation on CCVL assets",
    "Custom manufactured chemicals (CMCD) revenue growth and margin",
    "Integrated chlor-alkali, chloromethanes, and caustic soda chain spreads",
    "Gross borrowings, interest coverage, and net cash from operations through the cycle trough",
    "R-32 refrigerant commissioning and return on capital employed recovery",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/CHEMPLASTS/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹192, MCap ₹3,029 cr, book ~₹111, ROCE 0.34%, 52w ₹161–413, ~15.78 cr shares, promoter ~55%.",
    },
    {
      url: "https://www.chemplastsanmar.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Sanmar group specialty PVC, chlor-alkali, and CMCD portfolio disclosures.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/chemplast-sanmar/chemplasts/543336/",
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
        FY24: 4150,
        FY25: 4280,
        FY26: 4249,
        "TTM Jun26": 4249,
      },
      comment: "TTM flat YoY; five-year sales CAGR near two percent on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 520,
        FY25: 280,
        FY26: 180,
        "TTM Jun26": 170,
      },
      comment: "TTM OPM near four percent; Q1 FY27 OPM near four percent on Jun 2026 quarter.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 180,
        FY25: -50,
        FY26: -320,
        "TTM Jun26": -391,
      },
      comment: "TTM PAT loss on PVC cycle and interest; trailing P/E not meaningful.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 12.5,
        FY25: 6.5,
        FY26: 4.2,
        "TTM Jun26": 4.0,
      },
      comment: "Specialty mix partially offsets commodity PVC compression.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 3,
        FY26: 0.3,
      },
      comment: "Screener ROCE 0.34% TTM; negative PAT weighs on returns.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 480,
        FY25: 220,
        FY26: 150,
      },
      comment: "FY26 CFO positive but below interest burden; working capital remains heavy.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 2100,
        FY25: 2350,
        FY26: 2450,
      },
      comment: "Low interest coverage flagged on Screener; debt/EBITDA elevated in trough.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 11.4,
        FY25: -3.2,
        FY26: -20.3,
        "TTM Jun26": -24.8,
      },
      comment: "Face value ₹5; negative trailing EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 specialty growth",
      promise: "Grow specialty chemicals and CMCD while integrating CCVL assets.",
      outcome: "Specialty revenue rose ~49% YoY per FY25 MD&A; consolidated PAT turned negative.",
      status: "partial",
      commentary: "Volume story intact; commodity spreads broke consolidated earnings.",
    },
    {
      period: "FY25 leverage",
      promise: "Improve interest coverage through margin recovery and WC discipline.",
      outcome: "Borrowings near ₹2,350 cr; interest coverage remained thin.",
      status: "missed",
      commentary: "PVC trough arrived before deleveraging.",
    },
    {
      period: "FY26 profitability",
      promise: "Normalise operating profit margin as spreads stabilise.",
      outcome: "PAT loss near ₹320 cr; OPM near four percent.",
      status: "missed",
      commentary: "Suspension PVC pricing stayed the swing factor.",
    },
    {
      period: "Q1 FY27 paste PVC",
      promise: "Hold specialty paste PVC leadership volumes.",
      outcome: "Jun 2026 quarter revenue ₹1,050 cr; PAT loss near ₹75 cr.",
      status: "partial",
      commentary: "Top line stable; bottom line still negative.",
    },
    {
      period: "FY27 R-32 ramp",
      promise: "Commission refrigerant capacity per disclosed timeline.",
      outcome: "Pending; management reiterated phased start on Aug 2026 call.",
      status: "pending",
      commentary: "Track revenue contribution separately from PVC recovery.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E on cyclical recovery (integrated PVC and chlor-alkali). Cross-check: TTM operating profit near ₹170 cr at 10× EV/EBITDA less net debt near ₹2,400 cr implies equity near ₹0.8–1.0 cr per share in trough, so forward PAT recovery drives the base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹170 cr at 19× implies about ₹205 (+7% vs ₹192); market prices cycle trough until two consecutive profitable quarters print.",
  },
  transcripts: [chemplastFy25Mdna, chemplastQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track specialty paste PVC versus suspension PVC mix on concalls.",
    "Monitor borrowings, interest, and CFO each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if quarterly OPM stays below five percent for two consecutive quarters.",
  ],
};
