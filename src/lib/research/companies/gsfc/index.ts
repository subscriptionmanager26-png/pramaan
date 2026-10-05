import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { gsfcFy25Mdna } from "../../transcripts/gsfc-fy25-mdna";
import { gsfcQ2Fy26 } from "../../transcripts/gsfc-q2-fy26";

const SHARES_CRORE = 40;
const REF_PRICE = 147;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 520,
    sharesCrore: SHARES_CRORE,
    targetPe: 7.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Caprolactam spreads compress; nylon-6 volumes flat; other income falls as treasury is drawn; fertiliser reimbursement lags; Mar 2026 style weak quarters repeat.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 700,
    sharesCrore: SHARES_CRORE,
    targetPe: 8.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹12,000 cr with OPM 7%; caprolactam mid-cycle; melamine stable; other income near ₹250 cr; borrowings under ₹50 cr; dividend payout near 30%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 880,
    sharesCrore: SHARES_CRORE,
    targetPe: 9.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Caprolactam and nylon-6 spreads tighten; TTM-style Sep 2025 quarter margins persist; CFO improves above ₹400 cr; ROCE re-rates above 9%; fertiliser policy partial catch-up.",
  }),
];

export const gsfcDeepResearch: DeepCompanyResearch = {
  articleSlug: "gsfc-midcap-memo",
  companyName: "Gujarat State Fertilizers & Chemicals",
  nseSymbol: "GSFC",
  bseCode: "500690",
  valueDrivers: [
    "Caprolactam and capro-benzene spread versus benzene, ammonia, and sulphur feedstock costs",
    "Nylon-6 virgin polymer and compound realisations versus automotive and consumer durable demand",
    "Manufactured and traded fertiliser volume with urea and complex subsidy reimbursement timing",
    "Melamine and allied industrial chemical margins through the Vadodara complex",
    "Other income and investment portfolio contribution to reported PAT (TTM near ₹277 cr)",
    "Working capital days, CFO conversion, and dividend payout near 30% at PSU reference price",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/GSFC/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹147, consolidated P&L, quarterly OPM, borrowings Mar FY26, 40 cr shares (face ₹2), TTM metrics.",
    },
    {
      url: "https://www.gsfclimited.com/investor-relations/annual-reports/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 caprolactam leadership narrative, fertiliser and melamine portfolio.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/gujarat-state-fertilizers-chemicals-ltd/gsfc/500690/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 investor presentations and quarterly results through Jun 2026.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 9155,
        FY25: 9534,
        FY26: 10946,
        "TTM Jun26": 12344,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM lifted by Jun 2026 quarter sales ₹3,583 cr.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 514,
        FY25: 636,
        FY26: 790,
        "TTM Jun26": 830,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 6,
        FY25: 7,
        FY26: 7,
        "TTM Jun26": 7,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 564,
        FY25: 591,
        FY26: 673,
        "TTM Jun26": 693,
      },
      comment: "Other income contributed materially; Sep 2025 quarter PAT ₹324 cr flattered TTM versus Mar 2026 ₹52 cr.",
    },
    {
      label: "Other income",
      unit: "₹ cr",
      periods: {
        FY24: 385,
        FY25: 323,
        FY26: 287,
        "TTM Jun26": 277,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: -268,
        FY25: 83,
        FY26: 136,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 5,
        FY25: 2,
        "Mar FY26": 27,
      },
      comment: "Consolidated borrowings remain low versus ₹4,610 cr investments Mar FY26.",
    },
    {
      label: "Capital work in progress",
      unit: "₹ cr",
      periods: {
        FY25: 690,
        "Mar FY26": 192,
      },
      comment: "CWIP rolled into fixed assets ₹3,331 cr Mar FY26 as major projects completed.",
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 308,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Caprolactam leadership",
      promise: "Defend market share in caprolactam and nylon-6 compounds.",
      outcome: "Screener and annual report continue to cite leadership; FY26 OPM recovered to 7% from FY24 trough.",
      status: "partial",
      commentary: "Spreads normalised from FY23 peak; premium volume data requires Screener login.",
    },
    {
      period: "Fertiliser throughput",
      promise: "Maintain manufactured fertiliser volumes and selective traded volumes.",
      outcome: "Revenue rose FY25 to FY26 but fertiliser margins stayed thin per call excerpts.",
      status: "partial",
      commentary: "Segment splits for FY26 not in free sources used here.",
    },
    {
      period: "Debt-free balance sheet",
      promise: "Fund capex without re-leveraging.",
      outcome: "Borrowings ₹27 cr Mar FY26 versus investments ₹4,610 cr.",
      status: "met",
      commentary: "Interest expense remained low TTM near ₹17 cr.",
    },
    {
      period: "Dividend continuity",
      promise: "Keep payout near 30% with yield attractive at PSU multiples.",
      outcome: "FY26 payout 30% on Screener; dividend yield near 3.4% at reference price.",
      status: "met",
      commentary: "Dividend supports total return when P/E sits near 8.5×.",
    },
    {
      period: "Cash conversion",
      promise: "Improve CFO after FY24 negative operating cash flow.",
      outcome: "CFO rose to ₹136 cr FY26 but CFO/OP only 34%; working capital days 154.",
      status: "partial",
      commentary: "Management flagged collections focus on Q2 FY26 call excerpts.",
    },
    {
      period: "Capex roll-forward",
      promise: "Complete CWIP projects and stabilise depreciation.",
      outcome: "CWIP fell to ₹192 cr Mar FY26 from ₹690 cr FY25; depreciation TTM ₹208 cr.",
      status: "met",
      commentary: "FY27 spend skews to maintenance per curated call commentary.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (PSU chemicals and fertilisers, caprolactam cycle). Cross-check: TTM operating profit near ₹830 cr at 7× EV/EBITDA implies enterprise value near ₹5,810 cr; less net debt near ₹27 cr yields equity near ₹5,783 cr or ₹145 per share, roughly in line with CMP, so the market prices mid-cycle spreads and treasury-backed other income.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹700 cr at 8.5× implies about ₹149 (+1.4% vs ₹147), below the 15% Buy hurdle; bull ~₹209 (+42%) needs sustained caprolactam spreads and CFO recovery together.",
  },
  transcripts: [gsfcFy25Mdna, gsfcQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track caprolactam and nylon-6 spread commentary in investor presentations.",
    "Monitor Department of Fertilizers reimbursement notices affecting urea economics.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating recurring operating profit from other income run-rate near ₹250 cr.",
  ],
};
