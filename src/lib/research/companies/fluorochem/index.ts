import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { fluorochemFy25Mdna } from "../../transcripts/fluorochem-fy25-mdna";
import { fluorochemQ1Fy27 } from "../../transcripts/fluorochem-q1-fy27";

/** ~10.98 crore shares (MCap ₹47,691 cr ÷ CMP ₹4,342 on Screener 2026-10-01). */
const SHARES_CRORE = 10.98;
const REF_PRICE = 4342;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 500,
    sharesCrore: SHARES_CRORE,
    targetPe: 48,
    referencePrice: REF_PRICE,
    assumptions:
      "Fluoropolymer pricing softens and battery materials ramp slips; OPM reverts toward twenty-two percent; borrowings exceed ₹3,000 cr; market applies high-forties multiple on compressed PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 650,
    sharesCrore: SHARES_CRORE,
    targetPe: 77,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹5,600 cr (+6% on TTM) with average OPM near twenty-five percent; PAT builds on Q1 FY27 run-rate; net CFO near ₹900 cr; battery materials still sub-scale on profit.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 780,
    sharesCrore: SHARES_CRORE,
    targetPe: 82,
    referencePrice: REF_PRICE,
    assumptions:
      "High-twenties OPM sustained on fluoropolymers; R32 and PVDF volumes beat plan; battery materials reach three-digit quarterly revenue by Q4 FY27; ROCE moves toward fourteen percent; multiple holds near eighty times.",
  }),
];

export const fluorochemDeepResearch: DeepCompanyResearch = {
  articleSlug: "fluorochem-midcap-memo",
  companyName: "Gujarat Fluorochemicals Ltd",
  nseSymbol: "FLUOROCHEM",
  bseCode: "542812",
  valueDrivers: [
    "Fluoropolymer volume, realisation, and utilisation on PTFE and new-age grades",
    "Fluorochemicals mix (R32, HFC blends, HF chain) and pricing versus fluorspar",
    "Battery materials revenue ramp, customer qualification, and margin dilution",
    "Operating profit margin and operating leverage on Dahej integrated site",
    "Capex execution (CWIP near ₹1,900 cr) and return on capital employed recovery",
    "Net cash from operations versus borrowings near ₹2,721 cr on Screener",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/FLUOROCHEM/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹4,342, MCap ₹47,691 cr, book ~₹716, ROCE 9.64%, 52w ₹2,917–4,959, ~10.98 cr shares, promoter 63.80%.",
    },
    {
      url: "https://www.gfl.co.in/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Q4FY26 investor presentation on fluoropolymers, fluorochemicals, bulk chemicals, and battery materials.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/gujarat-fluorochemicals-ltd/fluorochem/542812/",
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
        FY24: 4281,
        FY25: 4737,
        FY26: 4996,
        "TTM Jun26": 5303,
      },
      comment: "TTM +12% YoY; Jun 2026 quarter ₹1,588 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 915,
        FY25: 1100,
        FY26: 1201,
        "TTM Jun26": 1372,
      },
      comment: "TTM OPM near twenty-six percent vs twenty-four percent FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 435,
        FY25: 546,
        FY26: 574,
        "TTM Jun26": 600,
      },
      comment: "TTM PAT +5% YoY; Q1 FY27 PAT run-rate improved on revenue.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 21,
        FY25: 23,
        FY26: 24,
        "TTM Jun26": 26,
      },
      comment: "Q1 FY27 OPM twenty-six percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 8,
        FY25: 9,
        FY26: 10,
      },
      comment: "Screener consolidated ROCE 9.64% TTM; depressed by battery capex.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 626,
        FY25: 545,
        FY26: 961,
      },
      comment: "FY26 CFO/OP near eighty percent after heavy investing outflows.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 1556,
        FY25: 2096,
        FY26: 2721,
      },
      comment: "Leverage funds battery and fluoropolymer capex; interest TTM material.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 39.59,
        FY25: 49.71,
        FY26: 52.56,
        "TTM Jun26": 54.64,
      },
      comment: "Face value ₹1; trailing P/E near 77.2 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with fluoropolymer and refrigerant demand.",
      outcome: "Revenue ₹4,737 cr (+11% YoY); PAT ₹546 cr (+26% YoY).",
      status: "met",
      commentary: "Top-line and profit recovered from FY24 margin trough.",
    },
    {
      period: "FY26 margin",
      promise: "Restore operating profit margin toward mid-twenties on mix.",
      outcome: "FY26 OPM twenty-four percent; TTM OPM twenty-six percent.",
      status: "met",
      commentary: "Q1 FY27 sustained twenty-six percent OPM on fluoropolymer realisations.",
    },
    {
      period: "R32 commercialisation",
      promise: "Commence R32 production and sales in FY26.",
      outcome: "Management cited March 2026 start on Q1 FY27 call.",
      status: "met",
      commentary: "Monitor pricing and utilisation through FY27.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Improve net cash from operations after FY25 working capital drag.",
      outcome: "Net CFO ₹961 cr on operating profit ₹1,201 cr; FCF still negative on capex.",
      status: "partial",
      commentary: "Operating cash improved but investing outflows near ₹1,168 cr TTM.",
    },
    {
      period: "FY27 battery capex",
      promise: "Execute ~₹2,300 cr battery materials capex with chemical capex ~₹800 cr.",
      outcome: "CWIP ₹1,900 cr Jun 2026; revenue ramp pending.",
      status: "pending",
      commentary: "Validate quarterly battery revenue and ROCE path before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian integrated fluoropolymers and fluorochemicals platform with battery optionality). Cross-check: TTM operating profit near ₹1,372 cr at 18× EV/EBITDA with net debt near ₹2,200 cr implies equity support between bear and base when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹650 cr at 77× implies about ₹4,557 (+5% vs ₹4,342); trailing multiple embeds fluoropolymer recovery while battery capex keeps ROCE below ten percent.",
  },
  transcripts: [fluorochemFy25Mdna, fluorochemQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track fluoropolymer versus fluorochemicals revenue share when investor deck publishes.",
    "Monitor R32 pricing, fluorspar costs, and US tariff commentary each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if battery materials revenue beats or misses three-digit quarterly run-rate.",
  ],
};
