import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { paradeepFy25Mdna } from "../../transcripts/paradeep-fy25-mdna";
import { paradeepQ2Fy26 } from "../../transcripts/paradeep-q2-fy26";

const SHARES_CRORE = 103.8;
const REF_PRICE = 151;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 780,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Global DAP and phosphoric acid prices compress spreads; sulphuric acid ramp slips; interest on borrowings near ₹7,000 cr; FY26 negative CFO persists; Jun 2026 quarter strength does not repeat.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 1100,
    sharesCrore: SHARES_CRORE,
    targetPe: 13.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹24,000 cr with OPM 9%; PAT normalises below TTM ₹1,072 cr; phosphoric acid 700 KTPA partly online; interest ₹580 cr; dividend payout near 18%; net debt stable after capex peak.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1320,
    sharesCrore: SHARES_CRORE,
    targetPe: 15.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Sulphuric and phosphoric integration cuts imported acid cost; volumes hold above 3.2 MMTPA; CFO turns positive above ₹1,200 cr; MCF merger closes with synergy; ROCE stays above 16%.",
  }),
];

export const paradeepDeepResearch: DeepCompanyResearch = {
  articleSlug: "paradeep-midcap-memo",
  companyName: "Paradeep Phosphates",
  nseSymbol: "PARADEEP",
  bseCode: "543530",
  valueDrivers: [
    "DAP and NPK sales volume (3.0 MMTPA capacity, Goa plus Paradeep) versus phosphatic spread over rock, sulphur, and ammonia",
    "Captive phosphoric acid production (500 KTPA toward 700 KTPA) and sulphuric acid expansion toward 1.9 MMTPA",
    "OCP and Zuari promoter linkage for Morocco rock and long-term raw material contracts",
    "Department of Fertilizers P&K subsidy reimbursement timing versus dealer billing cycles",
    "Borrowings, interest expense, and capex on integration projects (CWIP near ₹424 cr Mar FY26)",
    "Working capital days, inventory, and CFO conversion after FY26 trough",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/PARADEEP/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹151, consolidated P&L, quarterly OPM, borrowings Mar FY26, 103.8 cr shares (face ₹10), TTM PAT ₹1,072 cr.",
    },
    {
      url: "https://www.paradeepphosphates.com/uploads/content/annual-report-2024-25.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 revenue ₹13,820 cr, EBITDA ₹1,367 cr, acid debottlenecking, sulphuric acid project, MCF merger status.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/paradeep-phosphates-ltd/paradeep/543530/",
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
        FY24: 11575,
        FY25: 16959,
        FY26: 21826,
        "TTM Jun26": 23447,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM lifted by strong Sep 2025 to Jun 2026 quarters.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 672,
        FY25: 1574,
        FY26: 2208,
        "TTM Jun26": 2292,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 6,
        FY25: 9,
        FY26: 10,
        "TTM Jun26": 10,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 100,
        FY25: 662,
        FY26: 996,
        "TTM Jun26": 1072,
      },
      comment: "Jun 2026 quarter PAT ₹393 cr flattered trailing earnings versus Mar 2026 ₹156 cr.",
    },
    {
      label: "Other income",
      unit: "₹ cr",
      periods: {
        FY24: 45,
        FY25: 124,
        FY26: 51,
        "TTM Jun26": 116,
      },
    },
    {
      label: "Interest expense",
      unit: "₹ cr",
      periods: {
        FY24: 366,
        FY25: 443,
        FY26: 528,
        "TTM Jun26": 555,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1437,
        FY25: 1648,
        FY26: -1012,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 4014,
        FY25: 5100,
        "Mar FY26": 6906,
      },
      comment: "Borrowings rose with integration capex and working capital; investments ₹25 cr Mar FY26.",
    },
    {
      label: "Capital work in progress",
      unit: "₹ cr",
      periods: {
        FY25: 584,
        "Mar FY26": 424,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 65.3,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Phosphoric acid capacity",
      promise: "Expand captive acid from 500 KTPA toward 700 KTPA to cut imported acid reliance.",
      outcome: "FY25 production about 486 KTPA per annual report; brownfield ₹250 cr approved.",
      status: "partial",
      commentary: "Commissioning phasing spans FY26 and FY27; margin benefit lags volume ramp.",
    },
    {
      period: "Sulphuric acid and power",
      promise: "Commission 1,500 TPD sulphuric acid plant with integrated 23 MW power by October 2025.",
      outcome: "Management cited 60% completion in FY25 MD&A; Q2 FY26 call reiterated Q3 FY26 sulphuric target.",
      status: "partial",
      commentary: "Delay would leave steam and green power credits for FY28 rather than FY27 base case.",
    },
    {
      period: "Volume and market share",
      promise: "Cross 3 MMTPA sales volumes and deepen pan India retail reach.",
      outcome: "FY25 press release cited 3.03 million tonnes; TTM revenue near ₹23,447 cr on Screener.",
      status: "met",
      commentary: "Premium Screener DAP and NPK tonnage tables require login for quarter splits.",
    },
    {
      period: "Mangalore Chemicals merger",
      promise: "Close merger after Competition Commission approval for 3.7 MMTPA combined capacity.",
      outcome: "Approval received per FY25 MD&A; closure timing not in free quarterly filings used here.",
      status: "partial",
      commentary: "Bull scenario assumes synergy; base case does not embed full merger PAT uplift.",
    },
    {
      period: "Cash conversion",
      promise: "Improve CFO after peak season working capital build.",
      outcome: "FY26 CFO negative ₹1,012 cr despite ₹2,208 cr operating profit; FY25 was positive ₹1,648 cr.",
      status: "missed",
      commentary: "Management flagged subsidy receivable timing on Q2 FY26 call excerpts.",
    },
    {
      period: "Dividend",
      promise: "Maintain payout consistent with listed private phosphatic peer policy.",
      outcome: "FY26 payout near 16% on Screener; FY25 dividend ₹1 per share recommended in results deck.",
      status: "met",
      commentary: "Yield near 1% at reference price; growth investors focus on integration capex over yield.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated phosphatic name, leverage and subsidy WC overlay). Cross-check: TTM operating profit near ₹2,292 cr at 7× EV/EBITDA less net debt near ₹6,880 cr (borrowings minus investments) yields equity near ₹9,200 cr or ₹89 per share before integration premium, below CMP if mid-cycle margins persist without CFO recovery.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹1,100 cr at 13.5× implies about ₹143 (-5.3% vs ₹151), below the 15% Buy hurdle; bull ~₹197 (+31%) needs acid integration and positive CFO together.",
  },
  transcripts: [paradeepFy25Mdna, paradeepQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track sulphuric and phosphoric acid commissioning milestones in investor presentations.",
    "Monitor Department of Fertilizers P&K subsidy settlement notices and receivable ageing.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating Jun 2026 quarter strength from run-rate near ₹250 cr per quarter.",
    "Update merger closure assumptions when Mangalore Chemicals exchange filings publish.",
  ],
};
