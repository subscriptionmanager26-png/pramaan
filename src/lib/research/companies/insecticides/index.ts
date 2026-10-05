import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { insecticidesFy25Mdna } from "../../transcripts/insecticides-fy25-mdna";
import { insecticidesQ2Fy26 } from "../../transcripts/insecticides-q2-fy26";

const SHARES_CRORE = 2.91;
const REF_PRICE = 569;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 115,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Delayed monsoon and herbicide discounting keep revenue flat near ₹2,150 crore; EBITDA margin compresses toward 9%; net CFO below ₹120 crore; ROCE slips toward 12%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 150,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,280 crore with EBITDA margin near 11.5%; Maharatna mix and export lines offset generic pressure; net CFO near ₹160 crore; borrowings stay below ₹250 crore versus reserves.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 178,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Normal monsoon lifts volume high single digits; EBITDA margin expands toward 13% on premium brands and plant utilisation; export and biologics contribute; ROCE re-tests 18% with stable working capital days.",
  }),
];

export const insecticidesDeepResearch: DeepCompanyResearch = {
  articleSlug: "insecticides-midcap-memo",
  companyName: "Insecticides (India) Ltd",
  nseSymbol: "INSECTICID",
  bseCode: "532645",
  valueDrivers: [
    "Domestic agrochemical volume, price/mix, and dealer reach across insecticides, fungicides, and herbicides",
    "Share of Maharatna and premium branded products versus generic molecule exposure",
    "EBITDA margin and gross profit conversion through seasonal quarters and raw material pass-through",
    "Working capital days, inventory ahead of kharif/rabi, and cash from operations versus PAT",
    "Technical and formulation capacity utilisation at Chopanki, Dahej, and Udhampur",
    "Export registration pipeline, biologics pilots, and moderate leverage capital allocation",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/INSECTICID/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹569, MCap ₹1,655 cr, consolidated P/E 13.2×, book ₹419/sh, ROCE 15.8%, promoter 72.3% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/insecticides-india-ltd/insecticides/532645/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and Q2 FY26 investor presentations, quarterly PAT and revenue bridges.",
    },
    {
      url: "https://www.insecticidesindia.com/investors-desk/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹2,140 cr, PAT ₹139 cr, EBITDA ₹227 cr per Aug 2026 investor deck.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1985,
        FY25: 2055,
        FY26: 2140,
        "TTM Jun26": 2140,
      },
      comment: "FY26 per Q1 FY27 investor presentation; FY24/FY25 interpolated from Screener growth trend.",
    },
    {
      label: "EBITDA",
      unit: "₹ cr",
      periods: {
        FY24: 218,
        FY25: 222,
        FY26: 227,
      },
      comment: "FY26 per management presentation; margin near 10.6% on consolidated revenue.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 142,
        FY25: 139,
        FY26: 139,
        "TTM Jun26": 139,
      },
      comment: "FY26 PAT per Aug 2026 earnings deck; flat YoY after Q1 FY27 volume softness.",
    },
    {
      label: "EBITDA margin %",
      unit: "%",
      periods: {
        FY24: 11.0,
        FY25: 10.8,
        FY26: 10.6,
      },
      comment: "Compression in Q1 FY27 (-20% EBITDA YoY) flags near-term margin risk.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 18,
        FY25: 17,
        FY26: 15.8,
      },
      comment: "Screener consolidated ROCE Jun 2026; below Dhanuka-like quality agchem peers.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 154,
        FY25: 130,
        FY26: 145,
      },
      comment: "Working-capital-intensive agchem profile; FY26 estimated from Screener cash-flow trend.",
    },
  ],
  guidanceLog: [
    {
      period: "FY26 volume",
      promise:
        "Return to high single-digit consolidated revenue growth once channel inventory normalises after weak kharif.",
      outcome: "FY26 revenue near ₹2,140 crore (+4% YoY) but Q1 FY27 revenue down 12% YoY on delayed spraying.",
      status: "partial",
      commentary:
        "Management blamed climatic abnormality on Q2 FY26 deck; premium brands still outpaced generics within the portfolio.",
    },
    {
      period: "Margin",
      promise: "Protect gross margin near 32% and stabilise EBITDA margin above 11% through mix and cost programmes.",
      outcome: "Q1 FY27 gross margin near 31.6% but EBITDA down 20% YoY on volume; FY26 EBITDA margin 10.6%.",
      status: "partial",
      commentary:
        "Fixed field marketing and employee costs absorbed volume decline; finance cost rose on working capital lines.",
    },
    {
      period: "Capex and capacity",
      promise: "Commission formulation and technical expansions at Chopanki, Dahej, and Udhampur over FY26-FY27.",
      outcome: "CWIP visible on balance sheet; utilisation ramp cited as FY27 margin lever on investor decks.",
      status: "partial",
      commentary:
        "Until utilisation crosses management thresholds, depreciation and interest can lag revenue recovery.",
    },
    {
      period: "Exports",
      promise: "Expand Middle East, CIS, and Africa registrations with merchandise supply starting after approvals.",
      outcome: "Export contribution still modest in quarterly mix; registration timelines remain a swing factor.",
      status: "partial",
      commentary:
        "Export success would diversify domestic monsoon risk but is not yet large enough to offset weak kharif in base case.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (domestic branded agchem with Maharatna mix). Cross-check: FY26 EBITDA near ₹227 cr at 10× EV/EBITDA less net debt near ₹180 cr implies about ₹620 per share before any recovery premium.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹150 cr at 13× implies about ₹670 (+18% vs ₹569), clearing the Buy threshold; bear ~₹435 (-24%) if volume recovery slips.",
  },
  transcripts: [insecticidesFy25Mdna, insecticidesQ2Fy26],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track Maharatna versus generic mix each quarter on investor decks.",
    "Monitor debtor and inventory days versus CFO conversion.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if FY26 volume guidance changes on results calls.",
  ],
};
