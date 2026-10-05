import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { zuariagroFy25Mdna } from "../../transcripts/zuariagro-fy25-mdna";
import { zuariagroQ2Fy26 } from "../../transcripts/zuariagro-q2-fy26";

const SHARES_CRORE = 4.2;
const REF_PRICE = 213;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 75,
    sharesCrore: SHARES_CRORE,
    targetPe: 5,
    referencePrice: REF_PRICE,
    assumptions:
      "Paradeep stake marks down 20%; Sep 2025 fair value gains do not repeat; retail fertiliser OPM falls to 6%; contingent liabilities crystallise; promoter pledge overhang widens discount.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 145,
    sharesCrore: SHARES_CRORE,
    targetPe: 5.75,
    referencePrice: REF_PRICE,
    assumptions:
      "Normalized consolidated PAT below TTM ₹974 cr after stripping Sep 2025 ₹840 cr quarter; operating profit near ₹250 cr on smaller traded volume; other income near ₹120 cr; borrowings flat near ₹642 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 210,
    sharesCrore: SHARES_CRORE,
    targetPe: 7,
    referencePrice: REF_PRICE,
    assumptions:
      "Paradeep re-rates with phosphatic spreads; partial Goa land monetisation or dividend upstream from ZMPPL; retail margin holds 10% OPM; borrowings fall below ₹500 cr; holding discount narrows toward 0.55× book.",
  }),
];

export const zuariagroDeepResearch: DeepCompanyResearch = {
  articleSlug: "zuariagro-midcap-memo",
  companyName: "Zuari Agro Chemicals",
  nseSymbol: "ZUARI",
  bseCode: "534742",
  valueDrivers: [
    "Fair value and dividend yield on Paradeep Phosphates stake held via ZMPPL (~56% economic linkage per group disclosures)",
    "Residual fertiliser retail and traded volume mix versus slump-sale exit from SSP manufacturing",
    "Consolidated investments (₹2,581 cr Mar FY26) versus market cap and book value per share near ₹497",
    "Borrowings, contingent liabilities (₹374 cr), and promoter pledge (27.6% of holding per Screener)",
    "Goa land bank monetisation optionality versus state policy friction",
    "Adventz group restructuring (Mangalore Chemicals and Paradeep amalgamation) and holding company discount",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ZUARI/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹213, MCap ₹895 cr, consolidated book ₹497/sh, investments ₹2,581 cr Mar FY26, borrowings ₹642 cr, TTM PAT ₹974 cr, 4.2 cr shares (face ₹10), ROCE 16.4%.",
    },
    {
      url: "https://www.screener.in/company/PARADEEP/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "Paradeep Phosphates CMP and market cap for cross-check of ZMPPL stake NAV sensitivity.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/zuari-agro-chemicals-ltd/zuari/534742/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Corporate announcements, quarterly results PDFs, and shareholding pattern through Jun 2026.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations (consolidated)",
      unit: "₹ cr",
      periods: {
        FY23: 4553,
        FY24: 4595,
        FY25: 4436,
        FY26: 3200,
        "TTM Jun26": 2569,
      },
      comment: "Top-line fell after SSP slump sale; TTM reflects smaller continuing retail and trading footprint.",
    },
    {
      label: "Operating profit (consolidated)",
      unit: "₹ cr",
      periods: {
        FY23: 338,
        FY24: 362,
        FY25: 378,
        FY26: 311,
        "TTM Jun26": 228,
      },
    },
    {
      label: "OPM % (consolidated)",
      unit: "%",
      periods: {
        FY23: 7,
        FY24: 8,
        FY25: 9,
        FY26: 10,
        "TTM Jun26": 9,
      },
    },
    {
      label: "Other income (consolidated)",
      unit: "₹ cr",
      periods: {
        FY23: 616,
        FY24: 195,
        FY25: 195,
        FY26: 1048,
        "TTM Jun26": 1074,
      },
      comment: "FY26 and TTM dominated by Sep 2025 quarter other income near ₹923 cr on investment fair value.",
    },
    {
      label: "Reported PAT (consolidated)",
      unit: "₹ cr",
      periods: {
        FY23: 539,
        FY24: 171,
        FY25: 231,
        FY26: 982,
        "TTM Jun26": 974,
      },
      comment: "Normalize FY27 toward ₹145 cr base excluding Sep 2025 PAT ₹840 cr.",
    },
    {
      label: "Interest expense (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 211,
        FY25: 168,
        FY26: 101,
        "TTM Jun26": 85,
      },
    },
    {
      label: "Borrowings (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 1783,
        FY25: 717,
        "Mar FY26": 642,
      },
    },
    {
      label: "Investments (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 1270,
        FY25: 1425,
        "Mar FY26": 2581,
      },
    },
    {
      label: "Book value per share (consolidated)",
      unit: "₹",
      periods: {
        "Oct 2026": 497,
      },
    },
  ],
  guidanceLog: [
    {
      period: "SSP slump sale",
      promise: "Transfer Jai Kisaan SSP manufacturing to Paradeep and simplify Zuari Agro into a holding and retail platform.",
      outcome: "Sales fell from ₹4,595 cr FY24 toward ₹3,200 cr FY26; investments rose with Paradeep stake.",
      status: "met",
      commentary: "Operating footprint shrank; NAV now tied to Paradeep mark and dividends.",
    },
    {
      period: "ZMPPL / Paradeep stake",
      promise: "Anchor long-term phosphate rock via OCP partnership through ZMPPL ownership of Paradeep Phosphates.",
      outcome: "Investments ₹2,581 cr Mar FY26; Sep 2025 fair value gain drove headline PAT.",
      status: "partial",
      commentary: "Minority holders need cash dividends or partial monetisation to capture NAV.",
    },
    {
      period: "Retail fertiliser",
      promise: "Grow traded and retail fertiliser volumes under Zuari brand.",
      outcome: "Q2 FY26 OPM near 12% on ₹1,423 cr sales; Mar FY26 quarter operating loss on low volume.",
      status: "partial",
      commentary: "Volume seasonality remains high post manufacturing exit.",
    },
    {
      period: "Goa land monetisation",
      promise: "Monetise land banks to reduce leverage and fund growth.",
      outcome: "Contingent liabilities ₹374 cr; no large cash land sale in sources used through Oct 2026.",
      status: "pending",
      commentary: "State land policy changes cited on Screener as constraint.",
    },
    {
      period: "Leverage reduction",
      promise: "Cut borrowings after slump sale proceeds.",
      outcome: "Borrowings ₹642 cr Mar FY26 from ₹1,783 cr Mar FY24.",
      status: "beat",
      commentary: "Interest coverage improved versus FY20 stress years.",
    },
    {
      period: "Shareholder returns",
      promise: "Resume dividends when recurring PAT stabilises.",
      outcome: "Dividend yield 0% at Oct 2026 reference despite TTM PAT spike.",
      status: "missed",
      commentary: "Management retained cash amid pledge and contingent liability overhang.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Adventz holding / investment vehicle with residual retail). Cross-check: investments ₹2,581 cr Mar FY26 versus MCap ₹895 cr and book ₹497/sh (0.43× book per Screener) implies deep discount to stated assets; equity value hinges on Paradeep stake marks and monetisation, not retail OPM alone.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹145 cr at 5.75× implies about ₹198 (-7% vs ₹213), below the 15% Buy hurdle; bull ~₹333 (+56%) needs Paradeep re-rating plus cash upstream, not repeated fair value quarters.",
  },
  transcripts: [zuariagroFy25Mdna, zuariagroQ2Fy26],
  workflow: [
    "Refresh Screener consolidated P&L and investment line after each result; update referencePrice.",
    "Track Paradeep CMP and ZMPPL ownership notes in BSE filings for NAV sensitivity.",
    "Monitor Goa land and contingent liability footnotes in annual report.",
    "Replace curated quotes with BSE concall transcripts when uploaded.",
    "Recompute FY27E normalized PAT excluding Sep 2025 and FY23 investment spikes.",
  ],
};
