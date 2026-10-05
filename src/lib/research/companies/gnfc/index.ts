import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { gnfcFy25Mdna } from "../../transcripts/gnfc-fy25-mdna";
import { gnfcQ2Fy26 } from "../../transcripts/gnfc-q2-fy26";

const SHARES_CRORE = 14.7;
const REF_PRICE = 589;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 720,
    sharesCrore: SHARES_CRORE,
    targetPe: 8,
    referencePrice: REF_PRICE,
    assumptions:
      "TDI and acetic acid spreads compress; urea fixed-cost reimbursement stays delayed; other income normalises lower; FY27 capex overruns without CCPP benefit.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 980,
    sharesCrore: SHARES_CRORE,
    targetPe: 9.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹8,500 cr with OPM 13%; chemical realisations mid-cycle; urea flat; CCPP contributes from H2 FY27; other income near ₹400 cr; almost debt free.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1150,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "TDI and nitric acid chain tight; technical grade urea export quota sustained; policy fixes urea energy reimbursement; CFO stays above ₹700 cr; ROCE re-rates above 14%.",
  }),
];

export const gnfcDeepResearch: DeepCompanyResearch = {
  articleSlug: "gnfc-midcap-memo",
  companyName: "Gujarat Narmada Valley Fertilizers & Chemicals",
  nseSymbol: "GNFC",
  bseCode: "500670",
  valueDrivers: [
    "TDI, acetic acid, and methanol spread versus ammonia and feedstock costs (industrial chemicals)",
    "Urea and complex fertiliser volume with Department of Fertilizers fixed-cost and energy reimbursement",
    "Technical grade urea and ammonium nitrate realisations versus defence and industrial demand",
    "FY27 capex near ₹2,800 cr and CCPP synchronization timing at Bharuch",
    "Other income and investment portfolio contribution to reported PAT",
    "Working capital days and CFO conversion after inventory and receivable build",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/GNFC/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹589, consolidated P&L, quarterly OPM, borrowings Mar FY26, share count, TTM metrics.",
    },
    {
      url: "https://www.gnfc.in/investor-relations/annual-reports/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 segment narrative, product portfolio, dividend policy.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/gujarat-narmada-valley-fertilizers-chemicals-ltd/gnfc/500670/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 investor presentations and results for Q4 FY26 and Jun 2026 quarter.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 7930,
        FY25: 7892,
        FY26: 7773,
        "TTM Jun26": 8410,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM re-accelerated on Jun 2026 quarter sales ₹2,238 cr.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 502,
        FY25: 615,
        FY26: 879,
        "TTM Jun26": 1241,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 6,
        FY25: 8,
        FY26: 11,
        "TTM Jun26": 15,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 497,
        FY25: 598,
        FY26: 809,
        "TTM Jun26": 1037,
      },
      comment: "Other income contributed materially; TTM PAT boosted by Mar and Jun 2026 quarters.",
    },
    {
      label: "Other income",
      unit: "₹ cr",
      periods: {
        FY24: 469,
        FY25: 501,
        FY26: 499,
        "TTM Jun26": 450,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 31,
        FY25: 605,
        FY26: 654,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 3,
        FY25: 106,
        "Mar FY26": 5,
      },
      comment: "Consolidated borrowings largely repaid; company described as almost debt free on Screener.",
    },
    {
      label: "Capital work in progress",
      unit: "₹ cr",
      periods: {
        FY24: 289,
        FY25: 382,
        "Mar FY26": 900,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 620,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Chemical segment recovery",
      promise: "Stabilise chemical realisations after FY22 to FY24 decline.",
      outcome: "FY26 OPM reached 11% with TTM 15% aided by Mar and Jun 2026 quarters.",
      status: "partial",
      commentary: "Screener notes chemicals were 60% of H1 FY25 revenue versus 70% in FY22; mix shift continues.",
    },
    {
      period: "FY27 capex programme",
      promise: "Execute near ₹2,800 crore capex with CCPP synchronization late June.",
      outcome: "CWIP rose to ₹900 cr Mar FY26 from ₹382 cr FY25.",
      status: "pending",
      commentary: "PAT benefit weighted to H2 FY27 per curated Q2 FY26 call excerpts.",
    },
    {
      period: "Urea policy reimbursement",
      promise: "Secure revisions to urea fixed cost and energy norms from government.",
      outcome: "Management reiterated delays on Q2 FY26 call; urea profitability remains constrained.",
      status: "pending",
      commentary: "Base case assumes partial relief, not full catch-up in FY27.",
    },
    {
      period: "Debt reduction",
      promise: "Maintain near debt-free balance sheet while funding projects.",
      outcome: "Borrowings ₹5 cr Mar FY26 versus ₹106 cr FY25.",
      status: "met",
      commentary: "Liquidity supported by investments ₹1,693 cr Mar FY26 on balance sheet.",
    },
    {
      period: "Dividend payout",
      promise: "Continue healthy dividend with payout near 40%.",
      outcome: "FY26 dividend payout 38% on Screener; yield near 3.6% at reference price.",
      status: "met",
      commentary: "Dividend supports total return at sub-10× trailing earnings.",
    },
    {
      period: "Working capital",
      promise: "Improve cash conversion after FY24 trough CFO.",
      outcome: "CFO rose to ₹654 cr FY26 but working capital days spiked to 157 on Screener.",
      status: "partial",
      commentary: "Inventory and receivable build needs monitoring each quarter.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (joint-sector chemicals and fertilisers, policy and spread cycle). Cross-check: TTM operating profit near ₹1,241 cr at 8× EV/EBITDA implies enterprise value near ₹9,928 cr; less net debt near ₹5 cr yields equity near ₹9,923 cr or ₹675 per share, below CMP, so the market prices FY27 chemical recovery and CCPP benefits.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹980 cr at 9.5× implies about ₹633 (+7.5% vs ₹589), below the 15% Buy hurdle; bull ~₹860 (+46%) needs TDI spreads and policy wins together.",
  },
  transcripts: [gnfcFy25Mdna, gnfcQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track CCPP synchronization and capex spend versus ₹2,800 cr FY27 guidance.",
    "Monitor urea reimbursement announcements from Department of Fertilizers.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating recurring operating profit from other income run-rate.",
  ],
};
