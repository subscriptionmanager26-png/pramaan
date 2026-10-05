import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { coromandelFy25Mdna } from "../../transcripts/coromandel-fy25-mdna";
import { coromandelQ2Fy26 } from "../../transcripts/coromandel-q2-fy26";

const SHARES_CRORE = 29.5;
const REF_PRICE = 1764;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 1700,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Global DAP and raw acid prices compress NPK spreads; Kakinada ramp costs linger; crop protection growth slows to high single digits; working capital rises with urea trading.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 2550,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "NPK+DAP volume near 43 to 45 lakh MT, crop protection revenue grows 18 to 20%, acid plants run at 75% utilisation, Senegal rock phosphate supplies Kakinada, net debt manageable below ₹2,000 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 3000,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Train H NPK granulation online at Kakinada, NACL synergy lifts export formulations, nano DAP adoption accelerates, retail cross-sell raises specialty nutrient mix, benign phosphatic pricing.",
  }),
];

export const coromandelDeepResearch: DeepCompanyResearch = {
  articleSlug: "coromandel-midcap-memo",
  companyName: "Coromandel International",
  nseSymbol: "COROMANDEL",
  bseCode: "506395",
  valueDrivers: [
    "Phosphatic fertiliser volume (NPK + DAP, SSP) and spread versus imported acid and rock phosphate cost",
    "Backward integration at Kakinada (sulphuric acid, phosphoric acid) and Senegal rock mine (53.8% stake)",
    "Crop protection and bio-products revenue growth and export mix (Azadirachtin leadership)",
    "Urea trading and distribution tonnage in South India (working-capital intensity)",
    "Mana Gromor retail network (1,200+ stores) for specialty nutrients and CPC cross-sell",
    "Subsidy settlement timing and inventory days on fertiliser versus agrochemical SKUs",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/COROMANDEL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,764, consolidated P&L, quarterly OPM, borrowings Mar FY26, share count.",
    },
    {
      url: "https://www.coromandel.biz/investor-relations/annual-reports/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 segment commentary, capex, retail and crop protection strategy.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/coromandel-international-ltd/coromandel/506395/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 presentations for Q2 FY26 and Kakinada commissioning updates.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 26800,
        FY24: 22100,
        FY25: 24085,
        "TTM Jun26": 31479,
      },
      comment: "FY23 to FY25 from quarterly roll-ups on Screener; TTM includes higher urea trading volume.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 3200,
        FY24: 2574,
        FY25: 2574,
        "TTM Jun26": 3217,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 12,
        FY24: 12,
        FY25: 11,
        "TTM Jun26": 10,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 2100,
        FY24: 1640,
        FY25: 2054,
        "TTM Jun26": 1898,
      },
      comment: "Mar 2025 quarter included large other income; Mar 2026 quarter PAT weak at ₹115 cr on Screener.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 591,
        FY24: 1428,
        FY25: 2464,
        FY26: 1558,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY23: 393,
        FY24: 492,
        FY25: 780,
        "Mar FY26": 1506,
      },
      comment: "Rise reflects Kakinada capex and NACL acquisition funding.",
    },
    {
      label: "NPK + DAP sales volume",
      unit: "lakh MT",
      periods: {
        "FY25 Screener": 39.88,
        "FY26 Screener": 42.77,
      },
    },
    {
      label: "Urea sales volume",
      unit: "lakh MT",
      periods: {
        "FY25 Screener": 13.59,
        "FY26 Screener": 22.65,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 426,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY25 crop protection growth",
      promise: "Outgrow crop nutrition segment; expand technicals and bio-products exports.",
      outcome: "Segment share rose toward 12% of revenue in FY26 per Screener business description.",
      status: "met",
      commentary: "Management reiterated 20 to 25% crop protection revenue growth target into FY26.",
    },
    {
      period: "Kakinada acid plants",
      promise: "Commission sulphuric and phosphoric acid plants (₹1,100 cr project).",
      outcome: "Commissioned Q4 FY26 per investor materials summarized on Screener.",
      status: "met",
      commentary: "Utilisation and cost per tonne are the FY27 margin swing factors.",
    },
    {
      period: "Train H NPK granulation",
      promise: "7.5 lakh TPA train to lift Kakinada site capacity toward 30 lakh TPA by Q4 FY27.",
      outcome: "Construction advanced; not fully commissioned in sources reviewed.",
      status: "pending",
      commentary: "Bull case assumes on-time start; delay pushes volume to FY28.",
    },
    {
      period: "NACL acquisition",
      promise: "Acquire 53.13% controlling stake for ₹820 crore (August 2025).",
      outcome: "Deal closed; integration underway.",
      status: "partial",
      commentary: "Synergy rupees per tonne not yet broken out in public filings used here.",
    },
    {
      period: "Senegal rock phosphate",
      promise: "Ramp fixed processing plant to secure rock for Kakinada.",
      outcome: "Production ramp cited in Screener expansion summary.",
      status: "partial",
      commentary: "Mine cost and logistics to India remain section 18 gaps.",
    },
    {
      period: "FY26 Mar quarter PAT",
      promise: "Seasonally softer Q4 after strong H1.",
      outcome: "Reported PAT ₹115 crore with 50% tax rate in Mar 2026 quarter on Screener.",
      status: "missed",
      commentary: "One-offs and tax rate need filing-level reconciliation.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated fertiliser and crop protection, capex cycle). Cross-check: TTM OP near ₹3,217 cr at 12× EV/EBITDA implies enterprise value near ₹38,600 cr; less net debt Mar FY26 near ₹1,506 cr yields equity near ₹37,100 cr or ₹1,258 per share, below CMP, so market pays for FY27 integration and crop protection mix.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹2,550 cr at 22× implies about ₹1,902 (+8% vs ₹1,764), below the 15% Buy hurdle; bull case ~₹2,441 (+38%) requires crop protection and acid integration to land together.",
  },
  transcripts: [coromandelFy25Mdna, coromandelQ2Fy26],
  workflow: [
    "Update Screener quarterly tables after each result; refresh referencePrice.",
    "Track Kakinada acid plant utilisation and Train H capex in exchange presentations.",
    "Monitor NACL consolidation impact on crop protection segment PBIT when segment notes publish.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT using explicit NPK lakh MT, crop protection growth %, and acid cost per tonne.",
  ],
};
