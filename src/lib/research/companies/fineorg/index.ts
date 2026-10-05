import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { fineorgFy25Mdna } from "../../transcripts/fineorg-fy25-mdna";
import { fineorgQ1Fy27 } from "../../transcripts/fineorg-q1-fy27";

/** ~3.07 crore shares (equity capital ₹15 cr, face value ₹5). */
const SHARES_CRORE = 3.07;
const REF_PRICE = 5131;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 380,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue stalls near ₹2,400 crore; OPM mean-reverts to 18% on oleochemical spread compression; other income fades; borrowings rise with capex; market applies mid-cycle specialty chemicals multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 500,
    sharesCrore: SHARES_CRORE,
    targetPe: 34,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,550 crore (+8% YoY) with OPM near 21%; PAT normalises after FY26 other-income volatility; net CFO near ₹450 crore; ROCE re-tests 22%; multiple in line with premium oleochemical peers.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 540,
    sharesCrore: SHARES_CRORE,
    targetPe: 36,
    referencePrice: REF_PRICE,
    assumptions:
      "Export food and polymer additive mix rises; OPM sustains mid-twenties in H1 FY27; new capacity utilisation crosses seventy percent; re-rating toward FY23 ROCE peaks with balance sheet still net cash.",
  }),
];

export const fineorgDeepResearch: DeepCompanyResearch = {
  articleSlug: "fineorg-midcap-memo",
  companyName: "Fine Organic Industries Ltd",
  nseSymbol: "FINEORG",
  bseCode: "541557",
  valueDrivers: [
    "Polymer additives, food emulsifiers, and personal care ingredient volume and realisation",
    "Operating profit margin through palm/oleochemical feedstock pass-through and product mix",
    "Installed capacity utilisation and debottlenecking across Maharashtra plants",
    "Export revenue share, customer qualification cycles, and distributor reach",
    "Working capital (inventory days, debtor days) and net cash from operations versus PAT",
    "Capex, capital work in progress, and borrowings after FY26 expansion phase",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/FINEORG/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹5,131, MCap ₹15,732 cr, book ~₹869/sh, ROCE 21.5%, 52w ₹3,856–5,407, ~3.07 cr shares.",
    },
    {
      url: "https://www.fineorganics.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Oleochemical-based additives for food, plastics, cosmetics, coatings, and feed nutrition.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/fine-organic-industries-ltd/fineorg/541557/",
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
        FY23: 3023,
        FY24: 2123,
        FY25: 2269,
        FY26: 2366,
        "TTM Jun26": 2472,
      },
      comment: "FY24 normalised after FY23 inventory-led spike; TTM growth near 7% on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 829,
        FY24: 532,
        FY25: 512,
        FY26: 480,
        "TTM Jun26": 531,
      },
      comment: "TTM operating profit lifted by Jun 2026 quarter strength.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 618,
        FY24: 412,
        FY25: 410,
        FY26: 417,
        "TTM Jun26": 438,
      },
      comment: "TTM PAT includes elevated other income in several FY26 quarters.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 27,
        FY24: 25,
        FY25: 23,
        FY26: 20,
        "TTM Jun26": 21,
      },
      comment: "Q1 FY27 quarterly OPM near 25% on Screener table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 31,
        FY25: 26,
        FY26: 21,
      },
      comment: "Compressed as assets and CWIP expanded; Jun 2026 quarter margin recovery helps.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 635,
        FY25: 204,
        FY26: 430,
      },
      comment: "CFO/OP near 116% FY26; inventory build explains FY25 dip.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 4,
        FY25: 3,
        FY26: 68,
      },
      comment: "Still modest versus reserves ₹2,649 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 134.34,
        FY25: 133.89,
        FY26: 136.03,
        "TTM Jun26": 142.89,
      },
      comment: "Face value ₹5; trailing P/E near 35.9 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 margin band",
      promise: "Stabilise OPM in a twenty to twenty-five percent range.",
      outcome: "FY25 OPM 23%; FY26 full year 20%; Jun 2026 quarter 25%.",
      status: "partial",
      commentary: "Full-year average below band; quarterly recovery underway.",
    },
    {
      period: "FY25 balance sheet",
      promise: "Remain effectively debt free.",
      outcome: "Borrowings ₹3 cr Mar FY25; ₹68 cr Mar FY26.",
      status: "partial",
      commentary: "Leverage still low versus equity; monitor FY27 capex funding.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite inventory builds.",
      outcome: "Net CFO ₹430 cr on operating profit ₹480 cr.",
      status: "beat",
      commentary: "CFO/OP above 100% supports dividend and capex.",
    },
    {
      period: "Q1 FY27 growth",
      promise: "Mid-single to low-double-digit revenue growth for FY27.",
      outcome: "Jun 2026 revenue ₹694 cr (+18% YoY quarter); PAT ₹138 cr.",
      status: "beat",
      commentary: "Validate through softer quarters before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian oleochemical specialty additives leader). Cross-check: TTM operating profit near ₹531 cr at 14× EV/EBITDA less net debt near ₹50 cr implies equity near ₹7,384 cr (~₹2,405/sh) unless mid-twenties OPM persists.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹500 cr at 34× implies about ₹5,547 (+8% vs ₹5,131); trailing multiple already embeds quality, capping base upside below Buy hurdle.",
  },
  transcripts: [fineorgFy25Mdna, fineorgQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track polymer versus food versus personal care mix when annual report publishes segment note.",
    "Monitor CWIP, fixed assets, and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Q1 FY27 margin proves seasonal or other income fades.",
  ],
};
