import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { priviFy25Mdna } from "../../transcripts/privi-fy25-mdna";
import { priviQ1Fy27 } from "../../transcripts/privi-q1-fy27";

/** ~3.91 crore shares (MCap ₹13,957 cr ÷ CMP ₹3,573 on Screener 2026-10-01). */
const SHARES_CRORE = 3.91;
const REF_PRICE = 3573;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 280,
    sharesCrore: SHARES_CRORE,
    targetPe: 32,
    referencePrice: REF_PRICE,
    assumptions:
      "Aroma spreads compress; quarterly revenue reverts toward ₹550 cr; OPM falls toward twenty-one percent; interest stays elevated on ₹1,100 cr borrowings; market applies low-thirties multiple on cyclical PAT trough.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 400,
    sharesCrore: SHARES_CRORE,
    targetPe: 38,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹3,050 cr (+19% on TTM) with average OPM near twenty-five percent; Jun 2026 run rate partly normalises; borrowings stable near ₹950 cr; PAT builds on FY26 ₹317 cr base with amalgamation costs manageable.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 480,
    sharesCrore: SHARES_CRORE,
    targetPe: 42,
    referencePrice: REF_PRICE,
    assumptions:
      "Sustained ₹700 cr+ quarterly revenue with twenty-seven percent OPM; capacity debottlenecking lifts volumes; ROCE above twenty-four percent; deleveraging below ₹900 cr borrowings; market holds low-forties forward P/E on visible PAT ramp.",
  }),
];

export const priviDeepResearch: DeepCompanyResearch = {
  articleSlug: "privi-midcap-memo",
  companyName: "Privi Speciality Chemicals Ltd",
  nseSymbol: "PRIVISCL",
  bseCode: "530117",
  valueDrivers: [
    "Aroma chemical volume (MT) and export versus domestic mix",
    "Operating profit margin on guaiacol and phenolic derivative spreads",
    "Capacity expansion, capital work in progress, and commissioning timeline",
    "Gross borrowings, interest coverage, and free cash flow after capex",
    "Return on capital employed through the FY24–FY26 upcycle",
    "Amalgamation with Privi Fine Sciences entities and backward integration yields",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/PRIVISCL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹3,573, MCap ₹13,957 cr, book ~₹361, ROCE 22.3%, 52w ₹2,310–3,785, ~3.91 cr shares, promoter 60.6%.",
    },
    {
      url: "https://privi.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Global aroma chemical portfolio and manufacturing footprint.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/privi-speciality-chemicals/priviscl/530117/",
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
        FY24: 1752,
        FY25: 2101,
        FY26: 2564,
        "TTM Jun26": 2671,
      },
      comment: "TTM +22% YoY; Jun 2026 quarter ₹666 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 329,
        FY25: 458,
        FY26: 651,
        "TTM Jun26": 666,
      },
      comment: "TTM OPM near twenty-five percent; Q1 FY27 OPM twenty-three percent.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 95,
        FY25: 185,
        FY26: 317,
        "TTM Jun26": 342,
      },
      comment: "TTM PAT +61% YoY; TTM EPS ₹89.47.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 19,
        FY25: 22,
        FY26: 25,
        "TTM Jun26": 25,
      },
      comment: "Sep 2025 quarter OPM twenty-seven percent peak on Screener.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 12,
        FY25: 16,
        FY26: 22,
      },
      comment: "Screener ROCE 22.3% TTM after FY26 profit ramp.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 354,
        FY25: 281,
        FY26: 550,
      },
      comment: "FY26 CFO/OP 102%; FCF positive ₹230 cr after capex.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 1008,
        FY25: 1143,
        FY26: 1021,
      },
      comment: "Interest TTM near ₹75 cr; deleveraging from FY25 peak.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 24.27,
        FY25: 47.83,
        FY26: 83.77,
        "TTM Jun26": 89.47,
      },
      comment: "Face value ₹10; trailing P/E near 39.9 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow volumes on aroma portfolio and capacity debottlenecking.",
      outcome: "Revenue ₹2,101 cr (+20% YoY); PAT ₹185 cr (+95% YoY).",
      status: "met",
      commentary: "Margin expansion accompanied volume lift.",
    },
    {
      period: "FY25 capex",
      promise: "Commission aroma capacity and backward integration projects.",
      outcome: "CWIP ₹141 cr Mar FY25; fixed assets ₹1,156 cr Mar FY26.",
      status: "partial",
      commentary: "CWIP rose to ₹314 cr Mar FY26 as new lines advanced.",
    },
    {
      period: "FY26 profitability",
      promise: "Expand OPM toward mid-twenties with PAT growth.",
      outcome: "PAT ₹317 cr (+71% YoY); OPM twenty-five percent; ROCE twenty-two percent.",
      status: "beat",
      commentary: "Strong export pricing and utilisation.",
    },
    {
      period: "Q1 FY27 volume",
      promise: "Sustain FY26 momentum on key aroma molecules.",
      outcome: "Jun 2026 quarter revenue ₹666 cr; PAT ₹83 cr; OPM twenty-three percent.",
      status: "met",
      commentary: "Revenue in line; margin slightly below Sep 2025 peak.",
    },
    {
      period: "Amalgamation FY27",
      promise: "Complete merger of Privi Fine Sciences group entities.",
      outcome: "Pending; filings with exchanges; target late calendar 2026.",
      status: "pending",
      commentary: "Regulatory timeline remains the swing factor for consolidated structure.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (global aroma leader with capex optionality). Cross-check: TTM operating profit near ₹666 cr at 14× EV/EBITDA less net debt near ₹850 cr supports equity near ₹8,500–9,500 cr only if mid-twenties OPM persists.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹400 cr at 38× implies about ₹3,887 (+9% vs ₹3,573); trailing multiple already embeds FY26 PAT ramp while borrowings near ₹1,021 cr cap conviction until free cash flow funds deleveraging.",
  },
  transcripts: [priviFy25Mdna, priviQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track aroma volume MT and spread commentary on concalls.",
    "Monitor borrowings, interest, and CWIP each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if quarterly revenue falls below ₹600 cr for two consecutive quarters.",
  ],
};
