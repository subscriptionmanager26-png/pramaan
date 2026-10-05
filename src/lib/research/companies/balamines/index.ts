import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { balaminesFy25Mdna } from "../../transcripts/balamines-fy25-mdna";
import { balaminesQ1Fy27 } from "../../transcripts/balamines-q1-fy27";

/** ~3.24 crore shares (MCap ₹6,649 cr ÷ CMP ₹2,052 on Screener 2026-10-01). */
const SHARES_CRORE = 3.24;
const REF_PRICE = 2052;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 175,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Amine spreads compress; OPM reverts toward fifteen percent; capex overruns keep ROCE near single digits; market applies high-twenties multiple on flat PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 228,
    sharesCrore: SHARES_CRORE,
    targetPe: 31,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,620 cr (+6% on TTM) with average OPM near twenty percent; PAT normalises below Q1 FY27 spike; borrowings stable near ₹130 cr; hotel remains immaterial.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 260,
    sharesCrore: SHARES_CRORE,
    targetPe: 34,
    referencePrice: REF_PRICE,
    assumptions:
      "Derivative volumes beat plan; OPM sustains low-twenties; CWIP converts on schedule; ROCE recovers toward mid-teens; market holds low-thirties multiple.",
  }),
];

export const balaminesDeepResearch: DeepCompanyResearch = {
  articleSlug: "balamines-midcap-memo",
  companyName: "Balaji Amines Ltd",
  nseSymbol: "BALAMINES",
  bseCode: "530999",
  valueDrivers: [
    "Methylamine and aliphatic amine volume, realisation, and utilisation",
    "Specialty derivative mix toward pharma and agrochemical customers",
    "Operating profit margin versus methanol, ammonia, and energy costs",
    "Capex execution on CWIP near ₹512 cr and return on capital employed recovery",
    "Working capital days and inventory build on export timing",
    "Net cash from operations versus borrowings near ₹133 cr after capex draw",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/BALAMINES/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹2,052, MCap ₹6,649 cr, book ~₹610, ROCE 11.0%, 52w ₹905–2,630, ~3.24 cr shares, promoter 54.56%.",
    },
    {
      url: "https://www.balajiamines.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Investor materials on amines, derivatives, and Solapur manufacturing hub.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/balaji-amines-ltd/balamines/530999/",
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
        FY24: 1631,
        FY25: 1389,
        FY26: 1419,
        "TTM Jun26": 1523,
      },
      comment: "TTM +11% YoY; Jun 2026 quarter ₹456 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 324,
        FY25: 232,
        FY26: 265,
        "TTM Jun26": 327,
      },
      comment: "TTM OPM near twenty-one percent vs nineteen percent FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 232,
        FY25: 159,
        FY26: 169,
        "TTM Jun26": 211,
      },
      comment: "TTM PAT +34% YoY aided by Q1 FY27 ₹78 cr quarter.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 20,
        FY25: 17,
        FY26: 19,
        "TTM Jun26": 21,
      },
      comment: "Q1 FY27 OPM twenty-five percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 11,
        FY26: 11,
      },
      comment: "Screener consolidated ROCE 11.0% TTM; below FY22 peak.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 334,
        FY25: 255,
        FY26: 184,
      },
      comment: "FY26 CFO positive but FCF negative on ₹344 cr investing outflows.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 20,
        FY25: 11,
        FY26: 133,
      },
      comment: "Leverage rose with CWIP; still modest versus reserves ₹1,970 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 63.22,
        FY25: 48.62,
        FY26: 51.6,
        "TTM Jun26": 63.01,
      },
      comment: "Face value ₹2; trailing P/E near 32.6 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Stabilise volumes after FY24 correction.",
      outcome: "Revenue ₹1,389 cr (-15% YoY); PAT ₹159 cr (-31% YoY).",
      status: "missed",
      commentary: "Margin and volume both compressed.",
    },
    {
      period: "FY26 revenue",
      promise: "Mid-single-digit recovery with high-teens OPM.",
      outcome: "Revenue ₹1,419 cr (+2% YoY); PAT ₹169 cr (+6% YoY).",
      status: "partial",
      commentary: "Sales barely grew; margin improved modestly.",
    },
    {
      period: "Capex programme",
      promise: "Advance derivative and environmental projects.",
      outcome: "CWIP ₹512 cr Mar FY26; borrowings ₹133 cr.",
      status: "pending",
      commentary: "Track commissioning and ROCE each half.",
    },
    {
      period: "FY27 margin band",
      promise: "Plan high teens to low twenties OPM for full year.",
      outcome: "Q1 FY27 OPM twenty-five percent; full year pending.",
      status: "pending",
      commentary: "First quarter may not repeat.",
    },
    {
      period: "Working capital",
      promise: "Reduce working capital days from FY25 peak.",
      outcome: "Working capital days near sixty-nine Mar FY26 vs 120 FY25.",
      status: "met",
      commentary: "Inventory days still above one hundred.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian methylamine leader with capex cycle). Cross-check: TTM operating profit near ₹327 cr at 14× EV/EBITDA with net debt near ₹100 cr implies equity support between base and bull when OPM holds near twenty percent.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹228 cr at 31× implies about ₹2,181 (+6% vs ₹2,052); ROCE near eleven percent and CWIP execution keep verdict Neutral until returns recover.",
  },
  transcripts: [balaminesFy25Mdna, balaminesQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track methanol and ammonia costs versus domestic amine realisations.",
    "Monitor CWIP capitalisation and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if two consecutive quarters show OPM below seventeen percent.",
  ],
};
