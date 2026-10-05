import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { tatvchintFy25Mdna } from "../../transcripts/tatvchint-fy25-mdna";
import { tatvchintQ1Fy27 } from "../../transcripts/tatvchint-q1-fy27";

/** ~2.34 crore shares (MCap ₹4,078 cr ÷ CMP ₹1,743 on Screener 2026-10-04). */
const SHARES_CRORE = 2.34;
const REF_PRICE = 1743;
const REF_DATE = "2026-10-04";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 58,
    sharesCrore: SHARES_CRORE,
    targetPe: 42,
    referencePrice: REF_PRICE,
    assumptions:
      "Export destocking returns; OPM reverts toward fifteen percent; electrolyte salts remain immaterial; market applies low-forties multiple on flat PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 80,
    sharesCrore: SHARES_CRORE,
    targetPe: 50,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹610 cr (+10% on TTM) with average OPM near eighteen percent; PAT compounding off FY25 trough; borrowings stable near ₹120 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 105,
    sharesCrore: SHARES_CRORE,
    targetPe: 54,
    referencePrice: REF_PRICE,
    assumptions:
      "Structure-directing agent and PTC volumes sustain Jun 2026 run-rate; OPM above twenty percent; electrolyte salts contribute; market holds low-fifties multiple on visible PAT recovery.",
  }),
];

export const tatvchintDeepResearch: DeepCompanyResearch = {
  articleSlug: "tatvchint-midcap-memo",
  companyName: "Tatva Chintan Pharma Chem Ltd",
  nseSymbol: "TATVA",
  bseCode: "543321",
  valueDrivers: [
    "Phase transfer catalyst and structure-directing agent volumes and export realisations",
    "Operating profit margin on specialty intermediates and fixed-cost absorption at Ankleshwar and Dahej",
    "Pharma and agro intermediate mix and customer qualification pipeline",
    "Electrolyte salts and battery-material revenue contribution versus pilot scale",
    "Borrowings and capex for capacity and R&D after FY25 earnings reset",
    "Net cash from operations versus working capital and inventory after destocking cycle",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/TATVA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,743, MCap ₹4,078 cr, book ~₹334, ROCE 7.18%, 52w ₹1,022–1,880, ~2.34 cr shares, promoter 72.0%.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/tatva-chintan-pharma-chem-ltd/TATVA/543321/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "FY25 results and Q4 FY25 earnings call transcript on BSE.",
    },
    {
      url: "https://www.tatvachintan.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "PTC, SDA, and electrolyte salt product portfolio and manufacturing sites.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 394,
        FY25: 383,
        FY26: 506,
        "TTM Jun26": 556,
      },
      comment: "TTM +32% YoY off FY25 trough; Jun 2026 quarter ₹131 cr on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 69,
        FY25: 35,
        FY26: 94,
        "TTM Jun26": 108,
      },
      comment: "TTM OPM near nineteen percent vs nine percent FY25.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 30,
        FY25: 6,
        FY26: 42,
        "TTM Jun26": 51,
      },
      comment: "TTM PAT +745% YoY from FY25 trough; Q1 FY27 PAT ₹15 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 9,
        FY26: 18,
        "TTM Jun26": 19,
      },
      comment: "Mar 2025 quarter OPM seven percent trough on Screener.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 7,
        FY25: 1,
        FY26: 7,
      },
      comment: "Screener consolidated ROCE 7.18% TTM; far below FY22 twenty-six percent.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 98,
        FY25: 25,
        FY26: 31,
      },
      comment: "FY26 CFO positive but trailed operating profit amid WC swings.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 14,
        FY25: 36,
        FY26: 120,
      },
      comment: "Leverage rose with capacity and project spend post FY25.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 12.97,
        FY25: 2.44,
        FY26: 17.98,
        "TTM Jun26": 21.97,
      },
      comment: "Face value ₹10; trailing P/E near 77.8 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Navigate export destocking while maintaining strategic investments.",
      outcome: "Revenue ₹383 cr (-3% YoY); PAT ₹6 cr (-81% YoY); OPM nine percent.",
      status: "missed",
      commentary: "Macro and inventory cycles sharper than guided on margins.",
    },
    {
      period: "FY26 recovery",
      promise: "Demand uptick in second half with PTC and SDA green shoots.",
      outcome: "Revenue ₹506 cr (+32% YoY); PAT ₹42 cr (+600% YoY).",
      status: "beat",
      commentary: "Top-line recovery exceeded FY25 call tone.",
    },
    {
      period: "Electrolyte salts commercial",
      promise: "Commercial validation of electrolyte solutions in Q2 FY26.",
      outcome: "Revenue still immaterial in FY26 segment disclosures; qualification ongoing.",
      status: "partial",
      commentary: "Track quarterly specialty salts revenue when disclosed.",
    },
    {
      period: "FY27 margin",
      promise: "Average OPM in high teens with revenue ₹600–620 cr.",
      outcome: "Q1 FY27 OPM nineteen percent; full year pending.",
      status: "pending",
      commentary: "Base case assumes eighteen percent average OPM.",
    },
    {
      period: "ROCE recovery",
      promise: "Return on capital employed toward double digits as utilisation rises.",
      outcome: "ROCE 7.18% TTM Jun 2026; pending.",
      status: "pending",
      commentary: "Upgrade if ROCE clears ten percent for two quarters.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian specialty PTC and SDA producer with electrolyte optionality). Cross-check: TTM operating profit near ₹108 cr at 14× EV/EBITDA with net debt near ₹90 cr implies equity support between bear and base when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹80 cr at 50× implies about ₹1,709 (-2% vs ₹1,743); trailing multiple near seventy-eight times recovering earnings limits upside until PAT compounding proves durable.",
  },
  transcripts: [tatvchintFy25Mdna, tatvchintQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track PTC and SDA revenue splits when investor decks publish.",
    "Monitor electrolyte salt customer qualifications each half year.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if OPM falls below sixteen percent for two consecutive quarters.",
  ],
};
