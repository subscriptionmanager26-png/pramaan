import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { cleansciFy25Mdna } from "../../transcripts/cleansci-fy25-mdna";
import { cleansciQ1Fy27 } from "../../transcripts/cleansci-q1-fy27";

/** ~10.63 crore shares (equity capital ₹10.63 cr, face value ₹1). */
const SHARES_CRORE = 10.63;
const REF_PRICE = 803;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 240,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "China pricing pressure persists; OPM mean-reverts to low-thirties; Performance Chemical utilisation stalls below forty percent; market applies de-rated specialty multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 320,
    sharesCrore: SHARES_CRORE,
    targetPe: 31,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,050 cr (+9% YoY) with OPM near thirty-eight percent; PAT rebuilds on HALS run-rate and partial Performance Chemical 1 contribution; net CFO near ₹320 cr; ROCE near twenty-one percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 360,
    sharesCrore: SHARES_CRORE,
    targetPe: 33,
    referencePrice: REF_PRICE,
    assumptions:
      "Performance Chemical mix exceeds thirty percent of revenue; OPM sustains high-thirties in H2 FY27; hydroquinone and catechol commercialisation lifts spreads; re-rating toward historical premium specialty multiples.",
  }),
];

export const cleansciDeepResearch: DeepCompanyResearch = {
  articleSlug: "cleansci-midcap-memo",
  companyName: "Clean Science and Technology Ltd",
  nseSymbol: "CLEAN",
  bseCode: "543782",
  valueDrivers: [
    "HALS and established performance chemicals volume, realisation, and export mix",
    "Operating profit margin through China competition and key raw material spreads",
    "Performance Chemical 1 and 2 capacity utilisation and revenue ramp (Clean Fino Chem)",
    "New product pipeline share (target above twenty-five percent of revenue)",
    "Working capital, cash conversion, and debt-free balance sheet versus heavy capex",
    "Consolidation economics and backward integration on hydroquinone and catechol chains",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/CLEAN/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹803, MCap ₹8,535 cr, book ~₹149/sh, ROCE 20.7%, 52w ₹652–1,112, ~10.63 cr shares.",
    },
    {
      url: "https://cleanscience.co.in/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Green chemistry HALS and performance chemicals; Performance Chemical capex track per FY25 deck.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/clean-science-and-technology-ltd/clean/543782/",
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
        FY24: 791,
        FY25: 967,
        FY26: 957,
        "TTM Jun26": 982,
      },
      comment: "FY26 flat YoY after FY25 peak; TTM lifted by Jun 2026 quarter ₹268 cr.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 332,
        FY25: 388,
        FY26: 356,
        "TTM Jun26": 352,
      },
      comment: "FY26 OPM thirty-seven percent vs forty percent FY25; Q1 FY27 OPM thirty-six percent.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 244,
        FY25: 264,
        FY26: 230,
        "TTM Jun26": 248,
      },
      comment: "FY26 PAT down on softer quarters and forex; Q1 FY27 PAT ₹73 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 42,
        FY25: 40,
        FY26: 37,
        "TTM Jun26": 36,
      },
      comment: "Margin compression from China pricing; still structurally high vs peers.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 28,
        FY25: 26,
        FY26: 21,
      },
      comment: "ROCE fell as capital employed rose on subsidiary capex.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 285,
        FY25: 305,
        FY26: 278,
      },
      comment: "FY26 CFO/OP near seventy-eight percent; capex on Performance Chemical consumed cash.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 0,
        FY25: 0,
        FY26: 0,
      },
      comment: "Debt free Mar FY26; investments and cash fund capex.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 22.95,
        FY25: 24.84,
        FY26: 21.64,
        "TTM Jun26": 23.33,
      },
      comment: "Face value ₹1; trailing P/E near 34.4 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with diversification into newer launches.",
      outcome: "Revenue ₹967 cr (+22% YoY); newer products above twenty-five percent mix.",
      status: "met",
      commentary: "Top-line beat; margin still robust near forty percent.",
    },
    {
      period: "FY26 margin",
      promise: "Maintain high-thirties operating profit margin despite competition.",
      outcome: "FY26 OPM thirty-seven percent; Dec 2025 quarter OPM thirty-three percent.",
      status: "partial",
      commentary: "Full-year above mid-thirties but below FY25 peak.",
    },
    {
      period: "Balance sheet",
      promise: "Stay debt free while funding Performance Chemical capex.",
      outcome: "Borrowings zero Mar FY26; cash and investments fund CWIP.",
      status: "met",
      commentary: "Balance sheet remains a core moat.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite inventory and capex.",
      outcome: "Net CFO ₹278 cr on operating profit ₹356 cr; heavy capex on CFCL.",
      status: "partial",
      commentary: "CFO positive but below FY25 peak as assets build.",
    },
    {
      period: "FY27 outlook",
      promise: "HALS volume ramp and Performance Chemical revenue toward ₹300 cr potential by FY28.",
      outcome: "Q1 FY27 revenue ₹268 cr; PAT ₹73 cr; HALS run-rate improved in Q2 FY26 call.",
      status: "pending",
      commentary: "Validate Performance Chemical utilisation each quarter before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian green-chemistry specialty leader with HALS moat). Cross-check: TTM operating profit near ₹352 cr at 14× EV/EBITDA on negligible net debt supports equity near ₹4,900 cr (~₹461/sh) only if margins stay at TTM lows; high-thirties OPM re-rates toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹320 cr at 31× implies about ₹933 (+16% vs ₹803); trailing multiple embeds FY26 PAT trough, leaving room for Buy if Q1 FY27 margin holds through H2.",
  },
  transcripts: [cleansciFy25Mdna, cleansciQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track HALS tonnage and Performance Chemical revenue when investor deck publishes splits.",
    "Monitor China export pricing commentary and forex on concalls.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves one-off or capex slips.",
  ],
};
