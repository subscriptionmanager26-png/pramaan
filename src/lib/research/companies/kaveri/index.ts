import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { kaveriFy26Mdna } from "../../transcripts/kaveri-fy26-mdna";
import { kaveriQ1Fy27 } from "../../transcripts/kaveri-q1-fy27";

const SHARES_CRORE = 5.14;
const REF_PRICE = 715;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 255,
    sharesCrore: SHARES_CRORE,
    targetPe: 12,
    referencePrice: REF_PRICE,
    assumptions:
      "Maize and rice volumes soften again; revenue flat near ₹1,320 crore; OPM near 21%; FY27 CFO negative; working capital days stay above 160; ROCE near 13%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 305,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,480 crore (+6% YoY) with non-cotton mix above 82%; OPM near 24%; net CFO positive near ₹180 crore after FY26 trough; borrowings remain negligible.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 340,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Maize and hybrid rice rebound; export revenue doubles again; new cotton products exceed 40% of cotton volumes; OPM near 26%; ROCE re-tests 18% with CFO above ₹250 crore.",
  }),
];

export const kaveriDeepResearch: DeepCompanyResearch = {
  articleSlug: "kaveri-midcap-memo",
  companyName: "Kaveri Seed Company Ltd",
  nseSymbol: "KSCL",
  bseCode: "532899",
  valueDrivers: [
    "Hybrid seed volume and realisation across cotton, maize, hybrid rice, selection rice, and vegetables",
    "Non-cotton versus cotton revenue mix and new product contribution within cotton",
    "Operating profit margin through production cost inflation and farmer pass-through",
    "Working capital days, inventory conditioning cycles, and cash from operations versus PAT",
    "Research and development spend as percent of turnover and pipeline of 125 plus hybrids",
    "Export revenue growth and subsidiary footprint in Bangladesh and other markets",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/KSCL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹715, MCap ₹3,678 cr, book ~₹342/sh, ROCE 15.8%, 52w ₹685–1,097, equity capital 10 cr (5.14 cr shares at ₹2 face).",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/kaveri-seed-co./kscl/532899/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY26 audited result filings with seasonal revenue and OPM bridges.",
    },
    {
      url: "https://www.kaveriseeds.in/investor-relations",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹1,303.77 cr; PAT ₹283.26 cr; non-cotton mix and export growth commentary.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1146,
        FY25: 1202,
        FY26: 1392,
        "TTM Jun26": 1279,
      },
      comment: "FY26 per Screener consolidated; FY25 base before maize-led FY26 acceleration.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 286,
        FY25: 291,
        FY26: 337,
        "TTM Jun26": 293,
      },
      comment: "FY26 OPM near 24%; Q1 FY27 seasonal spike not in full-year row.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 300,
        FY25: 282,
        FY26: 296,
        "TTM Jun26": 249,
      },
      comment: "TTM PAT eased on Q1 FY27 revenue decline versus strong prior year quarter.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 25,
        FY25: 24,
        FY26: 24,
        "Q1 FY27": 40,
      },
    },
    {
      label: "Cash from operations (net)",
      unit: "₹ cr",
      periods: {
        FY24: 389,
        FY25: 197,
        FY26: -6,
      },
      comment: "FY26 CFO turned negative as inventory days rose toward 608 on Screener.",
    },
    {
      label: "Working capital days",
      unit: "days",
      periods: {
        "Mar FY25": 99,
        "Mar FY26": 171,
      },
      comment: "Screener consolidated ratio; seed conditioning drives seasonal spikes.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        "Mar FY25": 0,
        "Mar FY26": 0,
      },
      comment: "Company described as almost debt free on Screener.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY25: 20,
        "Mar FY26": 16,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 342,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY26 revenue",
      promise: "Grow revenue through non-cotton hybrids and export expansion.",
      outcome: "FY26 revenue ₹1,392 cr (+16% YoY) with non-cotton revenue +23%.",
      status: "beat",
      commentary: "Maize and hybrid rice led; cotton revenue declined mid-single digits.",
    },
    {
      period: "FY26 margins",
      promise: "Protect profitability despite cotton cost inflation and illegal seed competition.",
      outcome: "FY26 OPM near 24% with PAT ₹296 cr versus ₹282 cr in FY25.",
      status: "met",
      commentary: "Higher cotton production costs cited in investor presentation.",
    },
    {
      period: "Exports",
      promise: "Scale international hybrid registrations and subsidiary sales.",
      outcome: "Management guided ~90% export revenue growth in FY26; Q1 FY27 export revenue ₹5.8 cr vs ₹1.15 cr YoY.",
      status: "partial",
      commentary: "Base still small versus domestic; Bangladesh integration ongoing.",
    },
    {
      period: "Q1 FY27 volume",
      promise: "Sustain premium hybrid offtake through kharif dispatch window.",
      outcome: "Q1 FY27 revenue ₹742 cr (-9% YoY) with maize volumes -39% on Karnataka acreage.",
      status: "missed",
      commentary: "CMD cited El Nino rainfall deficit; cotton volumes held with richer new product mix.",
    },
    {
      period: "Working capital",
      promise: "Manage inventory and receivable cycles through peak season.",
      outcome: "FY26 net CFO -₹6 cr; working capital days 171 Mar FY26.",
      status: "missed",
      commentary: "Inventory days near 608 Mar FY26 on Screener; collections weighted to H2.",
    },
    {
      period: "Balance sheet",
      promise: "Operate with minimal leverage and strong liquidity.",
      outcome: "Borrowings zero Mar FY26; investments and reserves support conditioning capex.",
      status: "beat",
      commentary: "Supports dividend continuity near 9% payout on FY26 PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (hybrid seed franchise with seasonal Q1 earnings). Cross-check: FY26 operating profit near ₹337 cr at 11× EV/EBITDA less net cash near ₹400 cr (investments minus liabilities) implies enterprise equity near ₹3,300 cr or about ₹642 per share before quality premium for R&D pipeline.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹305 cr at 14× implies about ₹831 (+16% vs ₹715), clearing the Buy threshold; bear ~₹595 (-17%) if maize weakness persists with weak CFO.",
  },
  transcripts: [kaveriFy26Mdna, kaveriQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track non-cotton versus cotton revenue each year from investor presentations.",
    "Monitor working capital days and CFO each quarter versus seasonal inventory build.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if maize acreage or cotton illegal seed commentary shifts on results calls.",
  ],
};
