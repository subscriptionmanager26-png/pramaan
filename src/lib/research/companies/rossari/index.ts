import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { rossariFy25Mdna } from "../../transcripts/rossari-fy25-mdna";
import { rossariQ1Fy27 } from "../../transcripts/rossari-q1-fy27";

/** ~5.53 crore shares (equity capital ₹11 cr, face value ₹2). */
const SHARES_CRORE = 5.53;
const REF_PRICE = 428;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 130,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue growth slows to high single digits; OPM near 10% on EO rationing and textile weakness; institutional losses persist; borrowings above ₹500 cr; market applies mid-cycle specialty chemicals multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 175,
    sharesCrore: SHARES_CRORE,
    targetPe: 16,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,750 cr (+15% YoY) with OPM near 12%; PAT normalises after FY26 other-income lumpiness; Unitop utilisation crosses fifty percent; net CFO near ₹120 cr; ROCE re-tests 14%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 200,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "HPPC and AHN mix rises; OPM toward 14% as EO availability eases; B2C exit completes; Thailand and export volumes accelerate; re-rating toward upper-teens ROCE with leverage stable.",
  }),
];

export const rossariDeepResearch: DeepCompanyResearch = {
  articleSlug: "rossari-midcap-memo",
  companyName: "Rossari Biotech Ltd",
  nseSymbol: "ROSSARI",
  bseCode: "543213",
  valueDrivers: [
    "HPPC, textile specialty chemicals (TSC), and animal health (AHN) revenue mix and volume growth",
    "Operating profit margin through ethylene oxide availability, raw material pass-through, and B2B versus institutional/B2C drag",
    "Unitop and greenfield ethoxylation capacity utilisation versus FY26 low-teens ramp",
    "Debtor and inventory days, net cash from operations versus capex-heavy FY26 phase",
    "Borrowings, interest coverage, and ROCE after FY25–FY26 leverage step-up",
    "Export geography mix, customer count, and product registration pipeline (4,280+ SKUs)",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ROSSARI/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹428, MCap ₹2,368 cr, book ~₹241/sh, ROCE 13.3%, 52w ₹373–691, ~5.53 cr shares.",
    },
    {
      url: "https://www.rossari.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Specialty chemicals across HPPC, TSC, AHN; seven Gujarat units; 50+ export countries per company site.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/rossari-biotech-ltd/rossari/543213/",
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
        FY24: 1831,
        FY25: 2080,
        FY26: 2396,
        "TTM Jun26": 2550,
      },
      comment: "TTM growth near 19% per Screener; FY26 includes volume-led HPPC strength.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 250,
        FY25: 265,
        FY26: 286,
        "TTM Jun26": 299,
      },
      comment: "OPM compressed from FY24 peak near 14% toward 12% TTM.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 131,
        FY25: 136,
        FY26: 149,
        "TTM Jun26": 151,
      },
      comment: "Mar 2026 quarter PAT ₹46 cr included elevated other income; normalise in base case.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 14,
        FY25: 13,
        FY26: 12,
        "TTM Jun26": 12,
      },
      comment: "Q1 FY27 quarterly OPM near 12% on Screener table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 18,
        FY25: 16,
        FY26: 13,
      },
      comment: "Falling ROCE as CWIP and borrowings rose through FY26.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 43,
        FY25: 137,
        FY26: 65,
      },
      comment: "FY26 CFO/OP near 47%; inventory and receivable build during capacity ramp.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 119,
        FY25: 218,
        FY26: 436,
      },
      comment: "Gross debt doubled FY25–FY26 to fund capex and working capital.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 23.66,
        FY25: 24.63,
        FY26: 26.94,
        "TTM Jun26": 27.22,
      },
      comment: "Face value ₹2; trailing P/E near 15.7 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue through HPPC and AHN while stabilising TSC.",
      outcome: "Revenue ₹2,080 cr (+13% YoY); PAT ₹136 cr.",
      status: "beat",
      commentary: "Top-line beat; margin moderated on EO and mix.",
    },
    {
      period: "Unitop utilisation",
      promise: "Ramp new ethoxylation capacity toward ninety percent over FY26–FY27.",
      outcome: "FY25 MD&A cites low-teens initial utilisation; Q1 FY27 commentary still in ramp phase.",
      status: "partial",
      commentary: "Utilisation is the main FY27 margin lever.",
    },
    {
      period: "EBITDA margin band",
      promise: "Hold consolidated EBITDA margin near low teens until EO eases.",
      outcome: "FY26 OPM 12%; Q1 FY27 OPM 12%; FY27 guide twelve to thirteen percent.",
      status: "met",
      commentary: "Core B2B margin higher but consolidated diluted by institutional drag.",
    },
    {
      period: "Cash conversion",
      promise: "Improve CFO after FY24 working capital spike.",
      outcome: "FY25 CFO ₹137 cr; FY26 CFO ₹65 cr with negative free cash flow.",
      status: "missed",
      commentary: "Capex and WC absorbed cash despite PAT growth.",
    },
    {
      period: "FY27 growth outlook",
      promise: "Target about fifteen percent revenue growth with eventual margin toward fifteen percent.",
      outcome: "Q1 FY27 revenue ₹697 cr supports volume trend; margin still at twelve percent.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian specialty chemicals platform with HPPC/TSC/AHN mix). Cross-check: TTM operating profit near ₹299 cr at 8× EV/EBITDA less net debt near ₹400 cr implies enterprise equity near ₹1,992 cr (~₹360/sh) before any re-rating for utilisation ramp.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹175 cr at 16× implies about ₹506 (+18% vs ₹428); EV/EBITDA cross-check keeps bear case credible if EO stress persists.",
  },
  transcripts: [rossariFy25Mdna, rossariQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track HPPC versus TSC versus AHN revenue when investor deck publishes segment splits.",
    "Monitor Unitop utilisation commentary and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Mar 2026 other-income lumpiness repeats or fades.",
  ],
};
