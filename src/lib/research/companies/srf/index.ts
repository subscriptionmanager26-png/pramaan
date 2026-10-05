import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { srfFy25Mdna } from "../../transcripts/srf-fy25-mdna";
import { srfQ1Fy27 } from "../../transcripts/srf-q1-fy27";

/** ~29.64 crore shares (equity capital ₹297 cr, face value ₹10). */
const SHARES_CRORE = 29.64;
const REF_PRICE = 2486;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 2050,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Refrigerant and tyre-cord pricing soften; OPM reverts toward eighteen percent; capex overhang keeps ROCE near twelve percent; market applies mid-cycle chemicals multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 2650,
    sharesCrore: SHARES_CRORE,
    targetPe: 32,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹18,000 cr (+7% on TTM) with average OPM near twenty-two percent; chemicals mix near fifty percent; net CFO near ₹2,700 cr; borrowings stable near ₹5,100 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 2950,
    sharesCrore: SHARES_CRORE,
    targetPe: 34,
    referencePrice: REF_PRICE,
    assumptions:
      "High-twenties OPM sustained on specialty fluorochemicals; packaging films margin recovery; new capacity utilisation beats plan; ROCE moves toward eighteen percent.",
  }),
];

export const srfDeepResearch: DeepCompanyResearch = {
  articleSlug: "srf-midcap-memo",
  companyName: "SRF Ltd",
  nseSymbol: "SRF",
  bseCode: "503806",
  valueDrivers: [
    "Chemicals revenue share and fluorochemical / specialty intermediate spreads",
    "Refrigerant pricing, regulation, and HFC versus legacy R22 mix",
    "Technical textiles tyre-cord volumes and nylon chip pass-through",
    "Packaging films BOPET/BOPP utilisation and export realisations",
    "Capex conversion (CWIP near ₹1,889 cr) and return on capital employed",
    "Net cash from operations versus borrowings near ₹5,083 cr Mar FY26",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/SRF/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹2,486, MCap ₹73,697 cr, book ~5.25×, ROCE 14.6%, 52w ₹2,314–3,239, ~29.64 cr shares, promoter 50.26%.",
    },
    {
      url: "https://www.srf.com/investors",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Chemicals, technical textiles, packaging films, and coated fabrics segments per FY25 materials.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/srf-ltd/srf/503806/",
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
        FY24: 13139,
        FY25: 14693,
        FY26: 15787,
        "TTM Jun26": 17001,
      },
      comment: "TTM +13% YoY; Jun 2026 quarter ₹5,033 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 2584,
        FY25: 2718,
        FY26: 3410,
        "TTM Jun26": 3817,
      },
      comment: "TTM OPM near twenty-two percent vs eighteen percent FY25.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 1336,
        FY25: 1251,
        FY26: 1835,
        "TTM Jun26": 2162,
      },
      comment: "TTM PAT +57% YoY per Screener compounded profit growth.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 20,
        FY25: 18,
        FY26: 22,
        "TTM Jun26": 22,
      },
      comment: "Q1 FY27 OPM twenty-five percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 13,
        FY25: 12,
        FY26: 15,
      },
      comment: "Recovery from FY25 trough; below FY22 peak near twenty-four percent.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 2094,
        FY25: 2487,
        FY26: 2554,
      },
      comment: "FY26 CFO/OP near ninety percent; free cash flow ₹747 cr.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 5031,
        FY25: 4726,
        FY26: 5083,
      },
      comment: "Leverage funds fluorochemical capex; CWIP ₹1,889 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 45.06,
        FY25: 42.2,
        FY26: 61.91,
        "TTM Jun26": 72.93,
      },
      comment: "Face value ₹10; trailing P/E near 32.9 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with chemicals and textiles recovery.",
      outcome: "Revenue ₹14,693 cr (+12% YoY); PAT ₹1,251 cr (-6% YoY).",
      status: "partial",
      commentary: "Top-line grew but margin compression and interest weighed on PAT.",
    },
    {
      period: "FY26 margin",
      promise: "Restore operating profit margin toward low twenties on mix improvement.",
      outcome: "FY26 OPM twenty-two percent; TTM OPM twenty-two percent.",
      status: "met",
      commentary: "Q1 FY27 stepped up to twenty-five percent OPM.",
    },
    {
      period: "Capex programme",
      promise: "Commission fluorochemical and allied capacity on schedule.",
      outcome: "CWIP ₹1,889 cr Mar FY26; fixed assets ₹13,926 cr.",
      status: "pending",
      commentary: "Track Dahej and battery-materials-linked blocks each quarter.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite capex intensity.",
      outcome: "Net CFO ₹2,554 cr on operating profit ₹3,410 cr; FCF ₹747 cr.",
      status: "met",
      commentary: "CFO/OP near ninety percent with inventory days near 131.",
    },
    {
      period: "FY27 outlook",
      promise: "Low double digit revenue growth with low-twenties average OPM.",
      outcome: "Q1 FY27 revenue ₹5,033 cr; OPM twenty-five percent; PAT ₹759 cr pending full year.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT above ₹2,650 cr.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian integrated fluorochemicals, technical textiles, and packaging films platform). Cross-check: TTM operating profit near ₹3,817 cr at 16× EV/EBITDA with net debt near ₹4,400 cr implies equity support between bear and base when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹2,650 cr at 32× implies about ₹2,905 (+17% vs ₹2,486); trailing multiple embeds FY25 earnings trough while TTM PAT ₹2,162 cr already recovered.",
  },
  transcripts: [srfFy25Mdna, srfQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track chemicals revenue share (target near fifty percent) when investor deck publishes.",
    "Monitor refrigerant pricing and tyre-cord export commentary each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or interest cost spikes.",
  ],
};
