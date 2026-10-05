import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { navinfluorFy25Mdna } from "../../transcripts/navinfluor-fy25-mdna";
import { navinfluorQ1Fy27 } from "../../transcripts/navinfluor-q1-fy27";

/** ~5.13 crore shares (MCap ₹41,752 cr ÷ CMP ₹8,136 on Screener 2026-10-01). */
const SHARES_CRORE = 5.13;
const REF_PRICE = 8136;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 720,
    sharesCrore: SHARES_CRORE,
    targetPe: 40,
    referencePrice: REF_PRICE,
    assumptions:
      "CDMO pricing pressure and refrigerant normalisation; OPM reverts toward twenty-six percent; borrowings stay above ₹1,400 cr; market applies mid-forties specialty multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 900,
    sharesCrore: SHARES_CRORE,
    targetPe: 50,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹4,000 cr (+9% on TTM) with average OPM near thirty-two percent; PAT builds on Q1 FY27 run-rate; net CFO near ₹950 cr; borrowings below ₹1,350 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1000,
    sharesCrore: SHARES_CRORE,
    targetPe: 54,
    referencePrice: REF_PRICE,
    assumptions:
      "Low-thirties OPM sustained; CDMO share of profit after tax rises; new Gujarat capacity utilises above plan; ROCE holds near twenty-one percent; multiple holds above fifty times.",
  }),
];

export const navinfluorDeepResearch: DeepCompanyResearch = {
  articleSlug: "navinfluor-midcap-memo",
  companyName: "Navin Fluorine International Ltd",
  nseSymbol: "NAVINFLUOR",
  bseCode: "532504",
  valueDrivers: [
    "CDMO/CRAMS revenue growth, utilisation, and contract renewal rates",
    "High performance products (refrigerants, inorganic fluorides) pricing and mix",
    "Specialty organofluorines export volumes and customer concentration",
    "Operating profit margin expansion and fixed-cost leverage at Surat/Dewas",
    "Capex conversion (CWIP near ₹143 cr Mar FY26) and return on capital employed",
    "Net cash from operations versus borrowings near ₹1,272 cr Mar FY26",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/NAVINFLUOR/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹8,136, MCap ₹41,752 cr, book ~10.5×, ROCE 21.0%, 52w ₹4,521–8,950, ~5.13 cr shares, promoter 27.08%.",
    },
    {
      url: "https://www.nfil.in/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "CDMO, HPP, and specialty organofluorines segments per FY25 investor materials.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/navin-fluorine-international-ltd/navinfluor/532504/",
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
        FY24: 2065,
        FY25: 2349,
        FY26: 3314,
        "TTM Jun26": 3634,
      },
      comment: "TTM +42% YoY; Jun 2026 quarter ₹1,045 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 399,
        FY25: 534,
        FY26: 1082,
        "TTM Jun26": 1232,
      },
      comment: "TTM OPM near thirty-four percent vs twenty-three percent FY25.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 270,
        FY25: 289,
        FY26: 664,
        "TTM Jun26": 790,
      },
      comment: "TTM PAT +124% YoY per Screener compounded profit growth.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 19,
        FY25: 23,
        FY26: 33,
        "TTM Jun26": 34,
      },
      comment: "Q1 FY27 OPM thirty-four percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 11,
        FY25: 11,
        FY26: 21,
      },
      comment: "Recovery from FY24-FY25 trough as utilisation and pricing improved.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 750,
        FY25: 571,
        FY26: 894,
      },
      comment: "FY26 CFO/OP near ninety-seven percent; free cash flow ₹404 cr.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 1368,
        FY25: 1466,
        FY26: 1272,
      },
      comment: "Leverage funded prior capex cycle; interest TTM near ₹120 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 54.56,
        FY25: 58.19,
        FY26: 129.46,
        "TTM Jun26": 154.05,
      },
      comment: "Face value ₹2; trailing P/E near 52.5 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with CDMO and specialty fluorine demand.",
      outcome: "Revenue ₹2,349 cr (+14% YoY); PAT ₹289 cr (+7% YoY).",
      status: "partial",
      commentary: "Top-line grew but margin and interest weighed on profit conversion.",
    },
    {
      period: "FY26 margin",
      promise: "Restore operating profit margin toward high twenties on mix shift.",
      outcome: "FY26 OPM thirty-three percent; TTM OPM thirty-four percent.",
      status: "met",
      commentary: "Q1 FY27 sustained low-thirties OPM on CDMO leverage.",
    },
    {
      period: "Capex programme",
      promise: "Commission Surat and Gujarat capacity on schedule.",
      outcome: "CWIP ₹143 cr Mar FY26; fixed assets ₹3,324 cr.",
      status: "met",
      commentary: "Major greenfield largely capitalised; monitor incremental debottlenecking.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Improve net cash from operations after FY25 working capital build.",
      outcome: "Net CFO ₹894 cr on operating profit ₹1,082 cr; FCF ₹404 cr.",
      status: "met",
      commentary: "CFO/OP near ninety-seven percent with cash conversion cycle near sixty days.",
    },
    {
      period: "FY27 outlook",
      promise: "High teens revenue growth with low-thirties average OPM.",
      outcome: "Q1 FY27 revenue ₹1,045 cr; OPM thirty-four percent; PAT ₹243 cr pending full year.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT above ₹900 cr.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian specialty fluorochemicals and CDMO platform). Cross-check: TTM operating profit near ₹1,232 cr at 22× EV/EBITDA with net debt near ₹900 cr implies equity support between bear and base when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹900 cr at 50× implies about ₹8,772 (+8% vs ₹8,136); trailing multiple embeds FY25 earnings trough while TTM PAT ₹790 cr already re-rated.",
  },
  transcripts: [navinfluorFy25Mdna, navinfluorQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track CDMO versus HPP revenue share when investor deck publishes.",
    "Monitor refrigerant pricing and fluorspar cost commentary each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or interest cost spikes.",
  ],
};
