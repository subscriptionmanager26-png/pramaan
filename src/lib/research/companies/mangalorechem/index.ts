import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { mangalorechemFy25Mdna } from "../../transcripts/mangalorechem-fy25-mdna";
import { mangalorechemQ2Fy26 } from "../../transcripts/mangalorechem-q2-fy26";

const SHARES_CRORE = 11.85;
const REF_PRICE = 309;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 110,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Urea reimbursement lags; DAP spreads compress; Q1 FY26 PAT strength does not repeat; interest stays elevated versus reduced-debt narrative; merger premium fades without closure.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 175,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹3,700 cr with OPM 9%; PAT normalises below FY25 on revenue mix; urea production holds 4.3 to 4.5 lakh MT; dividend payout near 23%; borrowings stay below ₹400 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 230,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Paradeep merger closes with logistics synergy; urea energy metrics improve on west-coast gas; DAP and SSP volumes rise with monsoon; CFO stays positive above ₹250 cr; ROCE holds above 16%.",
  }),
];

export const mangalorechemDeepResearch: DeepCompanyResearch = {
  articleSlug: "mangalorechem-midcap-memo",
  companyName: "Mangalore Chemicals & Fertilizers",
  nseSymbol: "MANGCHEFER",
  bseCode: "530011",
  valueDrivers: [
    "Urea production and sales volume (Mangala urea) versus reassessed capacity near 3.8 lakh MT and energy consumption Gcal/MT",
    "DAP, SSP, and traded P&K mix versus phosphatic spreads and subsidy reimbursement timing",
    "West-coast natural gas and ammonia feedstock costs relative to Department of Fertilizers urea norms",
    "Proposed Paradeep Phosphates amalgamation and Zuari Group integration synergies",
    "Borrowings, interest expense, and working capital days after debt reduction",
    "Promoter holding near 60.6% (Zuari/Adventz) and dividend payout near 23%",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/MANGCHEFER/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹309, consolidated P&L, ROCE 17.1%, book ₹36, 11.85 cr shares (face ₹10), TTM PAT depressed on trailing P/E 62.9×.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/c339b86b-06ae-4167-864d-4f685cb32247.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 revenue ₹3,331.90 cr, PAT ₹143.71 cr, urea production 443,322 MT, dividend ₹1.50.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/5f2b5c97-afc8-4589-9988-7f238db7a3d0.pdf",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY26 investor presentation: revenue ₹862 cr, PAT ₹62 cr, EBITDA ₹118 cr.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 3795,
        FY25: 3332,
        FY26: 3650,
        "TTM Jun26": 3780,
      },
      comment: "FY24 to FY25 from BSE annual report; FY26 and TTM estimated from Q1 FY26 run-rate and seasonal urea offtake.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 375,
        FY25: 323,
        FY26: 347,
        "TTM Jun26": 360,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 9.9,
        FY25: 9.7,
        FY26: 9.5,
        "TTM Jun26": 9.5,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 155,
        FY25: 144,
        FY26: 195,
        "TTM Jun26": 205,
      },
      comment: "FY26 uplift from Q1 FY26 PAT ₹62 cr; trailing P/E on Screener reflects weaker prior quarters in the TTM window.",
    },
    {
      label: "EBITDA",
      unit: "₹ cr",
      periods: {
        FY24: 417,
        FY25: 359,
        FY26: 390,
        "TTM Jun26": 405,
      },
    },
    {
      label: "Interest expense",
      unit: "₹ cr",
      periods: {
        FY24: 105,
        FY25: 76,
        FY26: 68,
        "TTM Jun26": 70,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 496,
        FY25: 271,
        FY26: 220,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 520,
        FY25: 380,
        "Mar FY26": 320,
      },
      comment: "Screener pros cite reduced debt; exact Mar FY26 balance from consolidated notes pending full filing.",
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 36,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Urea throughput",
      promise: "Operate above reassessed urea capacity near 379,500 MT with regulatory approvals.",
      outcome: "FY25 production 443,322 MT per annual report; Q1 FY26 sales near 1.98 lakh MT per investor deck.",
      status: "met",
      commentary: "Volume execution is a relative strength versus FY24 revenue decline.",
    },
    {
      period: "Cost optimisation",
      promise: "Improve energy and procurement efficiency at the Mangalore complex.",
      outcome: "Q1 FY26 EBITDA margin held near 13% in the quarter deck while consolidated OPM stayed near 9% annually.",
      status: "partial",
      commentary: "Plant-wise Gcal/MT requires premium Screener insights or FY26 annual report note.",
    },
    {
      period: "Paradeep merger",
      promise: "Complete amalgamation with Paradeep Phosphates after regulatory approvals.",
      outcome: "Competition Commission clearance cited in group filings; closure not completed by Oct 2026 reference.",
      status: "partial",
      commentary: "Merger premium in the share price assumes synergy not yet in consolidated PAT.",
    },
    {
      period: "Balance sheet",
      promise: "Reduce borrowings and improve working capital days.",
      outcome: "Screener flags debt reduction and WC days near 29.8 versus 62.8 historically; borrowings estimated ₹320 cr Mar FY26.",
      status: "met",
      commentary: "Lower leverage supports dividend continuity but limits re-rating if earnings stay flat.",
    },
    {
      period: "Dividend",
      promise: "Maintain dividend payout consistent with policy near 23%.",
      outcome: "FY25 dividend ₹1.50 per share recommended; yield near zero at reference price on Screener snapshot.",
      status: "partial",
      commentary: "Income investors need both dividend growth and multiple compression relief.",
    },
    {
      period: "Cash conversion",
      promise: "Keep CFO positive through subsidy cycles.",
      outcome: "FY25 CFO ₹271 cr; FY26 estimated lower on peak-season receivable build.",
      status: "partial",
      commentary: "Management flagged receivable seasonality on curated call excerpts.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (west-coast urea and phosphatic mix, merger optionality overlay). Cross-check: TTM operating profit near ₹360 cr at 7× EV/EBITDA less net debt near ₹320 cr yields equity near ₹2,200 cr or ₹186 per share before merger premium, below CMP.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹175 cr at 13× implies about ₹192 (-38% vs ₹309); bull ~₹291 (-6%) needs merger closure and sustained double-digit ROCE together.",
  },
  transcripts: [mangalorechemFy25Mdna, mangalorechemQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track Paradeep amalgamation scheme filings on BSE/NSE for closure date and exchange ratio.",
    "Monitor Department of Fertilizers urea energy and fixed-cost reimbursement notices.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating Q1 FY26 strength from full-year urea seasonality.",
  ],
};
