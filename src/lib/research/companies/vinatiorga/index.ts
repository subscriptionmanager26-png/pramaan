import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { vinatiorgaFy25Mdna } from "../../transcripts/vinatiorga-fy25-mdna";
import { vinatiorgaQ1Fy27 } from "../../transcripts/vinatiorga-q1-fy27";

/** ~10.37 crore shares (equity capital ₹10 cr, face value ₹1). */
const SHARES_CRORE = 10.37;
const REF_PRICE = 1208;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 400,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue growth slows to mid-single digits; OPM mean-reverts to twenty-four percent on aromatics spikes and export destocking; ATBS ramp delays; market applies mid-cycle specialty chemical multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 500,
    sharesCrore: SHARES_CRORE,
    targetPe: 30,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,550 cr (+7% YoY) with OPM near twenty-eight percent on average; PAT builds on TTM run-rate without assuming every quarter matches FY26 peak; net CFO near ₹520 cr; ROCE re-tests twenty-one percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 550,
    sharesCrore: SHARES_CRORE,
    targetPe: 31,
    referencePrice: REF_PRICE,
    assumptions:
      "ATBS and polymer additive mix rises; OPM sustains high twenties in H2 FY27; export specialty volumes accelerate; re-rating toward FY23 ROCE peaks with balance sheet still net cash.",
  }),
];

export const vinatiorgaDeepResearch: DeepCompanyResearch = {
  articleSlug: "vinatiorga-midcap-memo",
  companyName: "Vinati Organics Ltd",
  nseSymbol: "VINATIORGA",
  bseCode: "524200",
  valueDrivers: [
    "Specialty chemical mix (IBB, ATBS, PAP, polymer additives) volume and realisation",
    "Operating profit margin through benzene, toluene, and sulphur feedstock pass-through",
    "ATBS and debottlenecked capacity utilisation across Maharashtra plants",
    "Export revenue share and global specialty intermediate demand cycles",
    "Working capital (debtor days, inventory) and net cash from operations versus PAT",
    "Capex, capital work in progress, and R&D on patent-protected niches",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/VINATIORGA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,208, MCap ₹12,524 cr, book ~₹305/sh, ROCE 19.8%, 52w ₹1,143–1,775, ~10.37 cr shares.",
    },
    {
      url: "https://www.vinatiorganics.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Global leader in IBB and ATBS; specialty chemicals for polymers, pharma, and personal care.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/vinati-organics-ltd/vinatiorga/524200/",
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
        FY24: 1900,
        FY25: 2248,
        FY26: 2227,
        "TTM Jun26": 2381,
      },
      comment: "FY26 flat YoY after FY25 rebound; TTM growth near 7% on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 471,
        FY25: 582,
        FY26: 655,
        "TTM Jun26": 665,
      },
      comment: "TTM operating profit lifted by FY26 full year and Jun 2026 quarter.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 323,
        FY25: 405,
        FY26: 444,
        "TTM Jun26": 448,
      },
      comment: "TTM PAT modestly above FY26 print as tax and other income normalise.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 25,
        FY25: 26,
        FY26: 29,
        "TTM Jun26": 28,
      },
      comment: "Margin recovery from FY24 trough; Q1 FY27 OPM near 24% on Screener.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 15,
        FY25: 18,
        FY26: 20,
      },
      comment: "ROCE rebounded as asset turns improved through FY26.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 332,
        FY25: 458,
        FY26: 558,
      },
      comment: "FY26 CFO/OP near 85%; strong conversion despite capex cycle.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 12,
        FY25: 8,
        FY26: 6,
      },
      comment: "Effectively debt free per Screener; reserves ₹3,151 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 31.15,
        FY25: 39.09,
        FY26: 42.8,
        "TTM Jun26": 43.26,
      },
      comment: "Face value ₹1; trailing P/E near 27.9 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue through specialty volumes and ATBS ramp.",
      outcome: "Revenue ₹2,248 cr (+18% YoY); PAT ₹405 cr.",
      status: "met",
      commentary: "Top-line beat; margin held mid-twenties.",
    },
    {
      period: "FY26 margin",
      promise: "Hold operating profit margin in mid-twenties with utilisation gains.",
      outcome: "FY26 OPM twenty-nine percent; several quarters between twenty-eight and thirty percent.",
      status: "met",
      commentary: "Mix and pass-through outperformed FY24 trough.",
    },
    {
      period: "Balance sheet",
      promise: "Remain effectively debt free while funding capex internally.",
      outcome: "Borrowings ₹6 cr Mar FY26; investments ₹190 cr; CWIP ₹214 cr.",
      status: "met",
      commentary: "Leverage negligible versus equity base.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite capex on ATBS lines.",
      outcome: "Net CFO ₹558 cr on operating profit ₹655 cr; free cash flow positive after capex.",
      status: "met",
      commentary: "CFO/OP above eighty-five percent.",
    },
    {
      period: "FY27 outlook",
      promise: "Low-double-digit revenue growth with high-twenties average OPM.",
      outcome: "Q1 FY27 revenue ₹696 cr; OPM 24%; PAT trend pending full quarter disclosure.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT further.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (global niche specialty chemical franchise in IBB/ATBS). Cross-check: TTM operating profit near ₹665 cr at 12× EV/EBITDA less net cash implies enterprise equity well above ₹7,500 cr (~₹720/sh) only if margins collapse; high-twenties OPM re-rates equity toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹500 cr at 30× implies about ₹1,446 (+20% vs ₹1,208); trailing multiple embeds FY24 margin trough recovery, leaving room for Buy if FY27 revenue growth holds with average OPM near twenty-eight percent.",
  },
  transcripts: [vinatiorgaFy25Mdna, vinatiorgaQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track IBB versus ATBS mix when investor deck publishes segment splits.",
    "Monitor CWIP, investments, and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or export mix shifts.",
  ],
};
