import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { chambalfertQ4Fy25 } from "../../transcripts/chambalfert-q4-fy25";
import { chambalfertQ2Fy26 } from "../../transcripts/chambalfert-q2-fy26";
import { chambalfertFy25Mdna } from "../../transcripts/chambalfert-fy25-mdna";

const SHARES_CRORE = 40.07;
const REF_PRICE = 399;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 1350,
    sharesCrore: SHARES_CRORE,
    targetPe: 8,
    referencePrice: REF_PRICE,
    assumptions:
      "Ammonia or RLNG prices spike, urea energy norms tighten without full pass-through, Gadepan-III reliability issues recur, P&K trading margins compress on higher global DAP, TAN ramp slips past FY27.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 1900,
    sharesCrore: SHARES_CRORE,
    targetPe: 10,
    referencePrice: REF_PRICE,
    assumptions:
      "Urea production holds near 34.5 to 35 lakh MT with energy savings, CPC-SN grows mid-teens, P&K traded volume near 10 to 11 lakh MT with normalized spreads, TAN contributes modestly from H2 FY27, consolidated net debt stays low.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 2250,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "TAN at 80 to 90% utilisation, IMACID JV earnings lift consolidated PAT, debottlenecking adds urea volume, CPC-SN and biologicals mix rises, subsidy receipts remain timely with working capital days stable.",
  }),
];

export const chambalDeepResearch: DeepCompanyResearch = {
  articleSlug: "chambalfert-midcap-memo",
  companyName: "Chambal Fertilisers and Chemicals",
  nseSymbol: "CHAMBLFERT",
  bseCode: "500085",
  valueDrivers: [
    "Urea nameplate utilisation and energy efficiency (Gcal per tonne) at Gadepan I, II, III",
    "Domestic gas pooling cost versus Department of Fertilizers retention price and subsidy settlement timing",
    "Traded P&K and NPK volume and spread (DAP, TSP, MOP) versus urea manufacturing margin",
    "Crop protection and specialty nutrients (CPC-SN) revenue and contribution per tonne sold",
    "TAN plant commissioning and IMACID phosphoric acid JV earnings (consolidated PAT bridge)",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/CHAMBLFERT/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹399, consolidated P&L, balance sheet, quarterly OPM, borrowings, share count, ROCE.",
    },
    {
      url: "https://chambalfertilisers.com/pdf/Annual-Report-for-the-Financial-Year-2024-2025.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 urea production 34.62 lakh MT, sales mix, gas volatility comment, seeds and TAN capex.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/700ea86f-43a5-48c6-8058-c8e2a8f8dd27.pdf",
      accessedAt: "2026-10-04",
      kind: "transcript",
      note: "Q4 FY25 call: EBITDA ₹2,838 cr, PAT ₹1,657 cr, shutdown days, CPC-SN CAGR, TAN spend ₹650 cr.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/82c8bb2d-0beb-4e16-86a8-f1d1f1cad1c1.pdf",
      accessedAt: "2026-10-04",
      kind: "transcript",
      note: "Q2 FY26 call: H1 PAT ₹1,240 cr, P&K volume target 11 lakh MT, TAN January 2026, CPC-SN +29%.",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/e226a875-ed21-4ac6-b68b-7fce52363411.pdf",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "May 2025 investor deck: segment revenue split urea vs P&K vs CPC-SN for Q4 and FY25.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY21: 12719,
        FY22: 16069,
        FY23: 27773,
        FY24: 17966,
        FY25: 16646,
        "TTM Sep25": 20123,
      },
      comment: "FY23 spike from higher urea and traded fertiliser prices; FY25 revenue down 7% YoY on lower P&K volumes.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY21: 2470,
        FY22: 2265,
        FY23: 1822,
        FY24: 2047,
        FY25: 2501,
        "TTM Sep25": 2743,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY21: 19,
        FY22: 14,
        FY23: 7,
        FY24: 11,
        FY25: 15,
        "TTM Sep25": 14,
      },
    },
    {
      label: "Reported PAT (consolidated)",
      unit: "₹ cr",
      periods: {
        FY21: 1748,
        FY22: 1566,
        FY23: 1034,
        FY24: 1276,
        FY25: 1649,
        "TTM Sep25": 1928,
      },
    },
    {
      label: "EBITDA (standalone, investor deck)",
      unit: "₹ cr",
      periods: {
        FY24: 2428,
        FY25: 2838,
        "Q4 FY25": 219,
      },
      comment: "Management cited FY25 standalone EBITDA growth of 17% on May 2025 call.",
    },
    {
      label: "Interest",
      unit: "₹ cr",
      periods: {
        FY23: 320,
        FY24: 173,
        FY25: 48,
        "TTM Sep25": 21,
      },
      comment: "Deleveraging after software divestiture and buyback era; interest near zero in recent quarters.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 3239,
        FY24: 3327,
        FY25: 1394,
        "TTM Sep25": 138,
      },
      comment: "FY25 CFO lower as working capital absorbed subsidy-linked receivables; monitor H2 FY26.",
    },
    {
      label: "Borrowings (consolidated)",
      unit: "₹ cr",
      periods: {
        FY23: 3358,
        FY24: 1874,
        FY25: 99,
        "Mar FY26": 1068,
      },
      comment: "Mar FY25 near debt-free; Mar FY26 uptick on Screener likely TAN and WC lines, verify note to accounts.",
    },
    {
      label: "Urea production",
      unit: "lakh MT",
      periods: {
        FY24: 33.83,
        FY25: 34.62,
        "Q2 FY26": 8.81,
      },
      comment: "FY25 from annual report; Q2 FY26 from Nov 2025 earnings call (vs 9.09 lakh MT prior year quarter).",
    },
    {
      label: "Urea sales",
      unit: "lakh MT",
      periods: {
        FY24: 32.56,
        FY25: 34.71,
        "Q2 FY26": 9.34,
      },
      comment: "Q2 FY26 sales from earnings call (vs 9.65 lakh MT prior year quarter).",
    },
    {
      label: "CPC-SN revenue (standalone, mgmt)",
      unit: "₹ cr",
      periods: {
        FY24: 760,
        FY25: 926,
        "Q2 FY26": 374,
      },
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 20,
        FY25: 27,
        "Mar FY26": 25,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY25 urea production",
      promise: "Operate three Gadepan plants at high utilisation despite planned maintenance.",
      outcome: "34.61 lakh MT produced vs 33.83 lakh MT in FY24.",
      status: "beat",
      commentary:
        "Achieved despite 36-day Gadepan-III shutdown and 14-day Gadepan-I boiler outage per Q4 FY25 call.",
    },
    {
      period: "FY25 CPC-SN",
      promise: "Grow crop protection and specialty nutrients with new product launches.",
      outcome: "Revenue ₹926 cr vs ₹760 cr; 25% CAGR cited; 12 new CPC products.",
      status: "beat",
      commentary: "Contribution ₹247 cr vs ₹175 cr per investor presentation.",
    },
    {
      period: "TAN plant",
      promise: "Progress technical ammonium nitrate project on statutory timeline.",
      outcome: "₹650 cr spent by Mar 2025; ₹1,052 cr by Sep 2025; commissioning targeted January 2026.",
      status: "partial",
      commentary: "On track per Q2 FY26 call but not yet revenue-generating in FY25.",
    },
    {
      period: "FY26 P&K traded volume",
      promise: "Increase P&K fertiliser tonnage versus FY25 muted DAP trading.",
      outcome: "Management guiding ~11 lakh MT vs ~5.5 lakh MT prior year on Q2 FY26 call.",
      status: "pending",
      commentary: "Higher global DAP prices in H2 FY26 may compress spread; monitor quarterly traded margin.",
    },
    {
      period: "IMACID capacity",
      promise: "Expand phosphoric acid capacity at Morocco JV.",
      outcome: "5 to 7 lakh MT expansion expected by December 2026 per Q4 FY25 call.",
      status: "pending",
      commentary: "Load-bearing for consolidated earnings in bull case, not standalone urea.",
    },
    {
      period: "FY25 dividend",
      promise: "Maintain dividend payout consistent with policy.",
      outcome: "Dividend payout ~24% of PAT per Screener.",
      status: "met",
      commentary: "Yield ~2.75% at ₹399 reference.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E for a single-location urea leader with growing CPC-SN and optional TAN/IMACID upside. Cross-check: FY25 standalone EBITDA ₹2,838 cr at 7× EV/EBITDA implies enterprise value ~₹19,866 cr; with Mar FY25 borrowings ₹99 cr, equity value is well above current market cap, so the stock is not debt-trapped like distressed PSUs.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "At ₹399, trailing consolidated P/E near 8.3× on FY25 PAT already prices cyclical normalization; base FY27E PAT ₹1,900 cr at 10× implies ~₹474 (+19% vs reference), meeting the >15% base upside rule for Buy.",
  },
  transcripts: [chambalfertQ4Fy25, chambalfertQ2Fy26, chambalfertFy25Mdna],
  workflow: [
    "Refresh Screener consolidated tables after each result; update referencePrice and share count post buyback.",
    "Pull Gadepan monthly production bulletins if published and reconcile to annual report lakh MT.",
    "Track TAN capex in CWIP and commissioning date on exchange filings.",
    "Update P&K traded volume and CPC-SN contribution from investor presentations each quarter.",
    "Recompute FY27E PAT from explicit urea Gcal, P&K spread, and IMACID equity pickup before changing scenarios.",
  ],
};
