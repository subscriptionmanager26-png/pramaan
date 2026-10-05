import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { dhanukaFy25Mdna } from "../../transcripts/dhanuka-fy25-mdna";
import { dhanukaQ2Fy26 } from "../../transcripts/dhanuka-q2-fy26";

const SHARES_CRORE = 4.46;
const REF_PRICE = 935;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 265,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Weak rabi and delayed kharif keep revenue flat near ₹2,050 crore; OPM compresses toward 17% on herbicide discounting; net CFO below ₹180 crore; ROCE slips toward 24%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 300,
    sharesCrore: SHARES_CRORE,
    targetPe: 16,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,150 crore with OPM near 19%; insecticide and fungicide launches offset herbicide softness; net CFO near ₹240 crore; borrowings stay below ₹100 crore versus liquid investments.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 335,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Normal monsoon and rabi recovery lift volume high single digits; OPM expands toward 21% on 9(3) mix; Dahej utilisation improves; ROCE re-tests 30% with stable working capital days.",
  }),
];

export const dhanukaDeepResearch: DeepCompanyResearch = {
  articleSlug: "dhanuka-midcap-memo",
  companyName: "Dhanuka Agritech Ltd",
  nseSymbol: "DHANUKA",
  bseCode: "507717",
  valueDrivers: [
    "Domestic agrochemical volume, price/mix, and dealer reach across herbicides, insecticides, and fungicides",
    "Share of differentiated 9(3) and specialty formulations versus generic herbicide exposure",
    "Operating profit margin and EBITDA conversion through seasonal quarters",
    "Working capital days, inventory build ahead of kharif/rabi, and cash from operations versus PAT",
    "Dahej technical manufacturing utilisation and new product registration pipeline",
    "Promoter-led capital allocation, almost debt-free balance sheet, and liquid investments",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/DHANUKA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹935, MCap ₹4,168 cr, consolidated P/E 14.3×, book ₹311/sh, ROCE 28.3%, promoter 69.81% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/dhanuka-agritech-ltd/dhanuka/507717/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q4 FY26 results filing with revenue, EBITDA, and PAT bridges.",
    },
    {
      url: "https://www.dhanuka.com/investor-relations/annual-reports",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 revenue ₹2,035 cr, PAT ₹297 cr, product registration count and segment commentary.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 1700,
        FY24: 1759,
        FY25: 2035,
        FY26: 2020,
        "TTM Jun26": 2020,
      },
      comment: "FY26 revenue per BSE Q4 FY26 filing; slight decline versus FY25 on industry volume softness.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 327,
        FY25: 417,
        FY26: 403,
      },
      comment: "FY26 OP per management filing; margin near 20% despite top-line pause.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 239,
        FY25: 297,
        FY26: 287,
        "TTM Jun26": 287,
      },
      comment: "FY26 PAT down modestly YoY after strong FY25 base.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 19,
        FY25: 20,
        FY26: 20,
        "Q2 FY26": 23,
      },
    },
    {
      label: "Cash from operations (net)",
      unit: "₹ cr",
      periods: {
        FY24: 134,
        FY25: 263,
        FY26: 240,
      },
      comment: "FY26 CFO improved versus FY24 on working capital discipline per annual cash flow statement.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        "Mar FY25": 74,
        "Mar FY26": 70,
      },
      comment: "Screener cites almost debt free; borrowings small versus reserves and investments.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY25: 28,
        "Mar FY26": 28.3,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 311,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY26 volume",
      promise: "Target high single-digit revenue growth through new launches and field reach.",
      outcome: "FY26 revenue near ₹2,020 crore, slightly below FY25 on weak kharif industry offtake.",
      status: "missed",
      commentary: "Management lowered FY26 volume guidance on Q2 FY26 call citing climatic abnormality.",
    },
    {
      period: "Margin",
      promise: "Protect operating profit margin through mix shift to insecticides and specialty formulations.",
      outcome: "FY26 OPM near 20% with Q2 FY26 at 23% on mix despite herbicide category pressure.",
      status: "met",
      commentary: "Cost control and product mix partially offset volume shortfall.",
    },
    {
      period: "Product pipeline",
      promise: "Launch multiple molecules across herbicides, insecticides, fungicides, and PGRs over two years.",
      outcome: "Lanevo, Miyako, and rice herbicide Dinkar cited as recent launches with strong season offtake in select crops.",
      status: "partial",
      commentary: "Full-year contribution still building; 9(3) registrations remain key KPI.",
    },
    {
      period: "Working capital",
      promise: "Maintain receivable and inventory discipline through seasonal peaks.",
      outcome: "Debtor days near 82 and inventory days near 132 Mar FY25 on Screener; FY26 CFO remained positive.",
      status: "partial",
      commentary: "Seasonal inventory build normal; collections described as orderly on concall.",
    },
    {
      period: "Balance sheet",
      promise: "Operate with minimal leverage and strong liquidity.",
      outcome: "Borrowings below ₹100 crore versus reserves above ₹1,390 crore Mar FY25.",
      status: "beat",
      commentary: "Supports dividend and capex without equity raise.",
    },
    {
      period: "Manufacturing",
      promise: "Ramp Dahej technical hub for export and domestic supply security.",
      outcome: "Fixed assets and CWIP rose through FY25 capex cycle; utilisation tracked internally.",
      status: "partial",
      commentary: "Segment revenue split for Dahej not disclosed in free sources used.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (domestic branded agchem with 9(3) mix). Cross-check: FY26 operating profit near ₹403 cr at 12× EV/EBITDA less net cash near ₹150 cr implies enterprise equity near ₹4,000 cr or about ₹897 per share before any quality premium for ROCE near 28%.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹300 cr at 16× implies about ₹1,076 (+15% vs ₹935), at the Buy threshold; bear ~₹832 (-11%) if volume recovery slips.",
  },
  transcripts: [dhanukaFy25Mdna, dhanukaQ2Fy26],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track insecticide versus herbicide mix each quarter on concalls.",
    "Monitor debtor and inventory days versus CFO conversion.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if FY26 volume guidance changes on results calls.",
  ],
};
