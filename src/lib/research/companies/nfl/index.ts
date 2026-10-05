import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { nflFy25Mdna } from "../../transcripts/nfl-fy25-mdna";
import { nflQ2Fy26 } from "../../transcripts/nfl-q2-fy26";

const SHARES_CRORE = 49.1;
const REF_PRICE = 63.8;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 190,
    sharesCrore: SHARES_CRORE,
    targetPe: 9,
    referencePrice: REF_PRICE,
    assumptions:
      "Urea reimbursement lags; debtor days stay above 90; borrowings near ₹4,200 cr; interest TTM rises; Mar 2026 PAT strength does not repeat; traded fertiliser margins compress.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 265,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹22,500 cr with OPM 4%; PAT normalises below TTM ₹273 cr; urea throughput stable; dividend payout near 30%; borrowings flat to slightly lower after WC season.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 330,
    sharesCrore: SHARES_CRORE,
    targetPe: 12,
    referencePrice: REF_PRICE,
    assumptions:
      "Policy clears overdue urea energy claims; energy projects cut Gcal/MT; CFO turns positive above ₹1,200 cr; ROCE re-rates above 10%; Ramagundam JV contributes on schedule.",
  }),
];

export const nflDeepResearch: DeepCompanyResearch = {
  articleSlug: "nfl-midcap-memo",
  companyName: "National Fertilizers",
  nseSymbol: "NFL",
  bseCode: "523630",
  valueDrivers: [
    "Neem coated urea production and total fertiliser sales volume (own plus traded) versus domestic urea market share",
    "Blended energy consumption (Gcal/MT) and plant capacity utilisation across NFL units",
    "Department of Fertilizers fixed-cost and energy reimbursement timing and subsidy receivable days",
    "Borrowings, interest expense, and seasonal working capital after FY26 debt rebuild",
    "Bio-fertilizer and industrial product mix versus traded P&K and compost volumes",
    "74.7% GOI promoter stake, dividend payout near 30%, and CPSE valuation band",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/NFL/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹63.8, consolidated P&L, quarterly OPM, borrowings Mar FY26 ₹3,964 cr, 49.1 cr shares (face ₹10), TTM PAT ₹273 cr.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/6898b164-5bf8-4159-bd52-dc02cfcff05b.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 turnover ₹19,794.50 cr, PAT ₹76.26 cr (standalone table), Navratna CPSE urea leadership narrative.",
    },
    {
      url: "https://www.nationalfertilizers.com/investor-relations/financial-results/",
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
        FY24: 23556,
        FY25: 19798,
        FY26: 21519,
        "TTM Jun26": 22480,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM lifted by Dec 2025 and Mar 2026 quarter sales.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 617,
        FY25: 615,
        FY26: 837,
        "TTM Jun26": 1012,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 2.6,
        FY25: 3.1,
        FY26: 3.9,
        "TTM Jun26": 4.5,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 65,
        FY25: 76,
        FY26: 170,
        "TTM Jun26": 273,
      },
      comment: "TTM uplift from Mar 2026 PAT ₹118 cr and Dec 2025 ₹94 cr versus weak Jun and Sep 2025 quarters.",
    },
    {
      label: "Interest expense",
      unit: "₹ cr",
      periods: {
        FY24: 277,
        FY25: 233,
        FY26: 253,
        "TTM Jun26": 282,
      },
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 583,
        FY25: 2485,
        FY26: -1384,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 4091,
        FY25: 2001,
        "Mar FY26": 3964,
      },
      comment: "Borrowings doubled Mar FY26 versus Mar FY25 on working capital; investments ₹502 cr Mar FY26.",
    },
    {
      label: "Debtor days",
      unit: "days",
      periods: {
        FY25: 60,
        "Mar FY26": 92,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 58,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Energy efficiency",
      promise: "Cut blended urea energy consumption (Gcal/MT) through conservation projects.",
      outcome: "FY26 OPM recovered to 3.9% from FY25 trough; plant-wise metrics require Screener premium.",
      status: "partial",
      commentary: "Annual report Form B highlights ongoing technology absorption at urea units.",
    },
    {
      period: "Urea throughput",
      promise: "Maintain leadership urea production share among CPSE fertiliser companies.",
      outcome: "Revenue TTM near ₹22,480 cr; volumes resilient but margins policy-linked.",
      status: "partial",
      commentary: "Exact LMT production on Screener insights is login-gated.",
    },
    {
      period: "Ramagundam JV",
      promise: "Progress Ramagundam Fertilizers and Chemicals Limited urea project on schedule.",
      outcome: "Consolidated accounts include RFCL; commissioning timing spans FY27 in MD&A.",
      status: "partial",
      commentary: "JV equity method and capex phasing need note-level refresh each year.",
    },
    {
      period: "Working capital",
      promise: "Improve debtor days and subsidy receivable collection.",
      outcome: "Debtor days rose to 92 Mar FY26 from 60 Mar FY25 on Screener.",
      status: "missed",
      commentary: "FY26 CFO negative ₹1,384 cr despite ₹837 cr operating profit.",
    },
    {
      period: "Dividend continuity",
      promise: "Maintain CPSE-consistent dividend payout when cash permits.",
      outcome: "FY25 payout 100% on Screener; FY26 payout 30%; yield near 1.6% at reference price.",
      status: "partial",
      commentary: "High payout in loss quarters is not sustainable without CFO recovery.",
    },
    {
      period: "Leverage",
      promise: "Fund seasonal WC without permanent leverage step-up.",
      outcome: "Borrowings ₹3,964 cr Mar FY26 versus ₹2,001 cr Mar FY25.",
      status: "missed",
      commentary: "Interest TTM ₹282 cr caps PAT leverage to operating profit recovery.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Navratna CPSE urea leader, reimbursement and WC overlay). Cross-check: TTM operating profit near ₹1,012 cr at 5.5× EV/EBITDA less net debt near ₹3,460 cr (borrowings minus investments) yields equity near ₹2,100 cr or ₹43 per share before cycle premium, below CMP if mid-cycle margins persist without reimbursement catch-up.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹265 cr at 11× implies about ₹59 (-7% vs ₹63.8), below the 15% Buy hurdle; bull ~₹81 (+27%) needs subsidy clearance and positive CFO together.",
  },
  transcripts: [nflFy25Mdna, nflQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track Department of Fertilizers reimbursement notices and urea energy norm revisions.",
    "Monitor RFCL commissioning milestones in consolidated notes.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT separating Mar 2026 seasonal PAT from run-rate near ₹220 cr.",
  ],
};
