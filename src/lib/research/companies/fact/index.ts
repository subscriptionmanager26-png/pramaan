import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { factFy25BoardReport } from "../../transcripts/fact-fy25-board-report";
import { factFy25Mdna } from "../../transcripts/fact-fy25-mdna";

const SHARES_CRORE = 64.69;
const REF_PRICE = 735;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 70,
    sharesCrore: SHARES_CRORE,
    targetPe: 10,
    referencePrice: REF_PRICE,
    assumptions:
      "Phosphoric acid stays tight, Factamfos utilisation below 70% of nameplate, trading margins compress; no material benefit from restructuring.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 220,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Partial raw-material normalisation, 1650 TPD NP plant ramps slowly, traded DAP/TSP adds volume but not FY23-style margins; interest bill stays near ₹245 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 420,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Restructuring approved, phosphoric/SNPT contracts stabilise supply, composite production approaches 13–14 lakh MT with OPM back toward high single digits on consolidated sales.",
  }),
];

export const factDeepResearch: DeepCompanyResearch = {
  articleSlug: "fact-midcap-memo",
  companyName: "Fertilizers and Chemicals Travancore",
  nseSymbol: "FACT",
  bseCode: "4278",
  valueDrivers: [
    "Subsidy-linked net retention on Factamfos and ammonium sulphate (Department of Fertilizers pricing, not free-market ASP)",
    "Factamfos and ammonium sulphate capacity utilisation vs 633.5k / 225k MT nameplate",
    "Phosphoric acid and RLNG input cost and availability (import vs domestic mix)",
    "Working-capital and borrowings tied to subsidy receivables and inventory (CFO vs operating profit)",
    "Government capex, restructuring, and 1650 TPD NP plant execution (10 → 15 lakh MT path)",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/FACT/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹735, share count, consolidated P&L, balance sheet, quarterly OPM, borrowings Sep 2025.",
    },
    {
      url: "https://fact.co.in/images/upload/Annual-Report-2024-25_7655.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 production, sales, capex, restructuring request, MD&A utilization and outlook.",
    },
    {
      url: "https://alphastreet.com/india/fact-q2-fy26-earnings-results/",
      accessedAt: "2026-10-04",
      kind: "news",
      note: "Q2 FY26 revenue ₹1,629 cr and PAT ₹21 cr cross-check (editorial summary, not load-bearing alone).",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY21: 3259,
        FY22: 4425,
        FY23: 6198,
        FY24: 5051,
        FY25: 4051,
        "TTM Sep25": 5293,
      },
    },
    {
      label: "Operating profit (EBIT)",
      unit: "₹ cr",
      periods: {
        FY21: 551,
        FY22: 596,
        FY23: 755,
        FY24: 358,
        FY25: 95,
        "TTM Sep25": 105,
      },
      comment: "FY23 peak; FY25 collapse as phosphoric acid constrained Factamfos.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY21: 17,
        FY22: 13,
        FY23: 12,
        FY24: 7,
        FY25: 2.3,
        "TTM Sep25": 2.0,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY21: 350,
        FY22: 346,
        FY23: 613,
        FY24: 128,
        FY25: 41,
        "TTM Sep25": 28,
      },
      comment: "FY20/FY23 inflated by large other income; FY24 Mar quarter had ₹129 cr other income drag.",
    },
    {
      label: "Other income",
      unit: "₹ cr",
      periods: {
        FY21: 68,
        FY22: 22,
        FY23: 136,
        FY24: -42,
        FY25: 241,
        "TTM Sep25": 219,
      },
    },
    {
      label: "Interest",
      unit: "₹ cr",
      periods: {
        FY21: 245,
        FY22: 244,
        FY23: 248,
        FY24: 247,
        FY25: 246,
        "TTM Sep25": 246,
      },
      comment: "~₹245 cr run-rate regardless of PAT level; coverage thin when OPM is 2%.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY21: 1021,
        FY22: 152,
        FY23: 638,
        FY24: 280,
        FY25: 140,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY23: 1842,
        FY24: 1810,
        FY25: 1805,
        "Sep 25": 3837,
      },
      comment: "Sep 2025 spike on Screener; verify filing for WC draw vs new term debt.",
    },
    {
      label: "Factamfos production",
      unit: "MT",
      periods: {
        "FY24 AR": 827717,
        "FY25 AR": 644768,
      },
      comment: "Standalone annual report production table.",
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 21.2,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY24 MoU (DoF)",
      promise: "Performance parameters under annual MoU with Department of Fertilizers.",
      outcome: "Rated 'Good' for FY23-24 MoU cycle.",
      status: "met",
      commentary:
        "Disclosed in FY25 board report; FY24-25 MoU evaluation still pending at report date.",
    },
    {
      period: "FY25 production (Factamfos)",
      promise: "Ministry production target for Factamfos at Udyogamandal (MD&A cites 64% of ministry target achieved on 95% of installed capacity basis).",
      outcome: "644,768 MT produced vs 827,717 MT prior year.",
      status: "missed",
      commentary:
        "Miss driven by phosphoric acid availability and cost, not plant shutdown.",
    },
    {
      period: "FY25 ammonium sulphate",
      promise: "Operate AS plant at nameplate.",
      outcome: "250,578 MT record production (111% of installed capacity per MD&A).",
      status: "beat",
      commentary: "Partial offset to Factamfos shortfall.",
    },
    {
      period: "1650 TPD NP plant",
      promise: "Progress LSTK NP plant at Cochin Division.",
      outcome: "Civil works and equipment delivery ongoing; not commissioned in FY25.",
      status: "pending",
      commentary: "Load-bearing for FY27+ volume and margin scenarios.",
    },
    {
      period: "Financial restructuring",
      promise: "Submit GOI loan conversion/write-off package to Department of Fertilizers.",
      outcome: "Proposal submitted; under consideration per MD&A.",
      status: "pending",
      commentary: "Bull case requires approval; no public term sheet in filings reviewed.",
    },
    {
      period: "FY25 dividend",
      promise: "Board recommended ₹0.39 final dividend per share.",
      outcome: "AGM approved path; ~₹25.2 cr cash outflow.",
      status: "met",
      commentary: "High payout ratio vs FY25 PAT highlights policy vs earnings mismatch.",
    },
  ],
  valuation: {
    methodology:
      "Forward normalized PAT × P/E (regulated fertilizer earnings, heavy interest load). Cross-check: FY25 consolidated EBITDA ~₹132 cr (OP ₹95 cr + D&A ₹37 cr) at 7× EV/EBITDA implies enterprise value near ₹924 cr, below Sep 2025 borrowings alone, so equity value is highly sensitive to restructuring and earnings recovery.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "At CMP ₹735, market cap ~₹47,550 cr prices in sustained FY23-like profitability (PAT ₹600 cr+) or material balance-sheet relief not yet approved.",
  },
  transcripts: [factFy25BoardReport, factFy25Mdna],
  workflow: [
    "Refresh Screener consolidated tables after each quarterly result; update referencePrice.",
    "Pull FACT annual report and exchange outcome filings for production MT, subsidy receivable, and borrowings bridge.",
    "Track DoF restructuring and 1650 TPD NP project milestones in MD&A or capex updates.",
    "Replace AR excerpts with concall transcripts if NSE uploads investor meet audio/transcript.",
    "Recompute FY27E PAT from explicit Factamfos MT, OPM %, and interest ₹245 cr run-rate before changing scenarios.",
  ],
};
