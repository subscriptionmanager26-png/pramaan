import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { neogenFy25Mdna } from "../../transcripts/neogen-fy25-mdna";
import { neogenQ1Fy27 } from "../../transcripts/neogen-q1-fy27";

/** ~3.00 crore shares (MCap ₹7,232 cr ÷ CMP ₹2,407 on Screener 2026-10-01). */
const SHARES_CRORE = 3.0;
const REF_PRICE = 2407;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 30,
    sharesCrore: SHARES_CRORE,
    targetPe: 125,
    referencePrice: REF_PRICE,
    assumptions:
      "Battery ramp slips to FY28; interest near ₹110 cr; OPM reverts toward fifteen percent; market de-rates specialty platform to low-one-hundred-twenty times forward earnings.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 48,
    sharesCrore: SHARES_CRORE,
    targetPe: 160,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,280 cr (+39% on TTM) with average OPM near seventeen percent; PAT recovers as Ionics contributes ~₹300 cr sales; parent debt trends lower post QIP.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 65,
    sharesCrore: SHARES_CRORE,
    targetPe: 175,
    referencePrice: REF_PRICE,
    assumptions:
      "Battery chemicals beat plan with high-teens Ionics margin; organolithium utilisation above eighty percent; interest coverage improves; market holds mid-one-hundred-seventies multiple on visible PAT ramp toward FY29 guide.",
  }),
];

export const neogenDeepResearch: DeepCompanyResearch = {
  articleSlug: "neogen-midcap-memo",
  companyName: "Neogen Chemicals Ltd",
  nseSymbol: "NEOGEN",
  bseCode: "542665",
  valueDrivers: [
    "Bromine and organolithium specialty intermediate volumes and pricing",
    "Neogen Ionics battery materials revenue ramp (electrolyte, salts, additives)",
    "Operating profit margin on legacy versus battery mix",
    "Interest expense and parent versus subsidiary leverage after QIP",
    "Capex execution on CWIP near ₹857 cr and project finance discipline",
    "Net cash from operations versus debtor days near 161 and inventory build",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/NEOGEN/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹2,407, MCap ₹7,232 cr, book ~₹309, ROCE 6.46%, 52w ₹967–2,500, ~3.0 cr shares, promoter 48.31%.",
    },
    {
      url: "https://www.neogenchem.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Investor deck on bromine/lithium chemistry and Neogen Ionics battery platform.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/neogen-chemicals-ltd/neogen/542665/",
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
        FY24: 691,
        FY25: 778,
        FY26: 862,
        "TTM Jun26": 926,
      },
      comment: "TTM +18% YoY; Jun 2026 quarter ₹250 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 110,
        FY25: 136,
        FY26: 137,
        "TTM Jun26": 154,
      },
      comment: "TTM OPM near seventeen percent vs sixteen percent FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 36,
        FY25: 35,
        FY26: 29,
        "TTM Jun26": 36,
      },
      comment: "TTM PAT flat YoY; Q1 FY27 PAT ₹17 cr on improved revenue.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 16,
        FY25: 18,
        FY26: 16,
        "TTM Jun26": 17,
      },
      comment: "Q1 FY27 OPM nineteen percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 9,
        FY26: 6,
      },
      comment: "Screener consolidated ROCE 6.46% TTM; battery capex weighs.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: -29,
        FY25: 196,
        FY26: -231,
      },
      comment: "FY26 CFO negative on working capital; FY25 benefited from release.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 409,
        FY25: 597,
        FY26: 1395,
      },
      comment: "Leverage funds Ionics capex; interest TTM ₹83 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 13.51,
        FY25: 13.2,
        FY26: 10.9,
        "TTM Jun26": 13.25,
      },
      comment: "Face value ₹10; trailing P/E near 203 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with specialty intermediate demand.",
      outcome: "Revenue ₹778 cr (+13% YoY); PAT ₹35 cr (-3% YoY).",
      status: "partial",
      commentary: "Top-line met but profit compressed on interest.",
    },
    {
      period: "FY26 revenue",
      promise: "Approach ₹850 cr consolidated sales with legacy growth.",
      outcome: "Revenue ₹862 cr; PAT ₹29 cr.",
      status: "met",
      commentary: "Sales met guide; PAT missed on finance cost.",
    },
    {
      period: "Battery commissioning",
      promise: "Phase electrolyte and salt plants through FY27.",
      outcome: "CWIP ₹857 cr Mar FY26; Ionics revenue still ramping.",
      status: "pending",
      commentary: "Majority of FY27 battery sales guided to H2.",
    },
    {
      period: "FY27 consolidated revenue",
      promise: "Guide ₹1,250–1,350 cr with Ionics ~₹300 cr.",
      outcome: "Reiterated on Q1 FY27 call; not yet in reported FY27 totals.",
      status: "pending",
      commentary: "Track quarterly Ionics revenue each result.",
    },
    {
      period: "Parent deleveraging",
      promise: "Reduce standalone borrowings post QIP toward ₹200–250 cr by FY27 end.",
      outcome: "Borrowings ₹1,395 cr consolidated Mar FY26; QIP proceeds deploying.",
      status: "pending",
      commentary: "Separate parent from Ionics project finance in monitoring.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian bromine/lithium specialty platform with battery optionality). Cross-check: TTM operating profit near ₹154 cr at 22× EV/EBITDA with net debt near ₹1,200 cr implies equity support between bear and base when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹48 cr at 160× implies about ₹2,560 (+6% vs ₹2,407); trailing multiple embeds battery optionality while ROCE near 6.5% limits margin of safety until Ionics profit scales.",
  },
  transcripts: [neogenFy25Mdna, neogenQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track Neogen Ionics revenue and margin separately when segment notes publish.",
    "Monitor bromine import costs and organolithium utilisation each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if consolidated interest exceeds ₹100 cr or battery revenue slips past H2 FY27.",
  ],
};
