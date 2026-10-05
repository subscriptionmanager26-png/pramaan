import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { meghmaniFy25Mdna } from "../../transcripts/meghmani-fy25-mdna";
import { meghmaniQ1Fy27 } from "../../transcripts/meghmani-q1-fy27";

const SHARES_CRORE = 24.06;
const REF_PRICE = 73;
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
      "Pigment utilisation stays weak; export crop protection pricing rolls over; Q4-style margin compression repeats; amalgamation costs linger; net CFO below ₹120 crore.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 130,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,180 crore (+4% YoY) with consolidated EBITDA margin near 18%; Brazil subsidiary spends ahead of revenue; crop nutrition nano products scale in kharif; borrowings stable near ₹180 crore.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 165,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "Export crop protection volumes inflect; pigment spreads recover; EBITDA margin expands toward 21%; amalgamation synergies cut overhead; ROCE re-tests 14% with working capital days below 120.",
  }),
];

export const meghmaniDeepResearch: DeepCompanyResearch = {
  articleSlug: "meghmani-midcap-memo",
  companyName: "Meghmani Organics Ltd",
  nseSymbol: "MOL",
  bseCode: "543331",
  valueDrivers: [
    "Crop protection export and domestic volume, pricing, and formulation mix versus pigment and paracetamol utilisation",
    "Consolidated EBITDA margin through raw material cycles and plant absorption across segments",
    "Crop nutrition rollout (nano urea and approved nano DAP/NPK/zinc) on Sanand infrastructure",
    "Brazil wholly owned subsidiary and registration-led international expansion",
    "Working capital days, inventory, and receivables across agrochemical and pigment channels",
    "Amalgamation of Kilburn Chemicals and Meghmani Crop Nutrition into the listed entity",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/MOL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹73, MCap ~₹1,756 cr, consolidated P/E near 18× on TTM, book ~₹61/sh, ROCE ~11%, promoter ~49% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/meghmani-organics-ltd/mol/543331/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY26 annual result filings with revenue and EBITDA bridges.",
    },
    {
      url: "https://meghmani.com/wp-content/uploads/2026/07/Q1-FY27-Investor-Presentation.pdf",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Q1 FY27 revenue ₹522.9 cr, EBITDA margin 17.9%, amalgamation and Brazil strategy slides.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1985,
        FY25: 2010,
        FY26: 2092,
        "Q1 FY27": 523,
      },
      comment: "FY26 revenue per investor presentation; Q1 FY27 down ~12% YoY on export softness.",
    },
    {
      label: "EBITDA",
      unit: "₹ cr",
      periods: {
        FY24: 268,
        FY25: 285,
        FY26: 362,
      },
      comment: "FY26 EBITDA up ~27% YoY per management commentary; Q4 FY26 margin compression noted.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 8,
        FY25: 55,
        FY26: 105,
        "TTM Jun26": 98,
      },
      comment: "FY26 PAT recovery after FY24 trough; TTM eased on weak Q4 and Q1 FY27.",
    },
    {
      label: "EBITDA margin %",
      unit: "%",
      periods: {
        FY24: 13.5,
        FY25: 14.2,
        FY26: 17.3,
        "Q1 FY27": 17.9,
      },
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 4,
        FY25: 8,
        FY26: 11,
      },
      comment: "Screener consolidated ROCE Jun 2026; below specialty agchem leaders.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 95,
        FY25: 140,
        FY26: 165,
      },
      comment: "CFO improved with EBITDA but remains working-capital sensitive in pigments.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 210,
        FY25: 195,
        FY26: 182,
      },
      comment: "Moderate leverage versus integrated peers; not debt free.",
    },
  ],
  guidanceLog: [
    {
      period: "FY26 recovery",
      promise:
        "Restore EBITDA growth through crop protection mix and cost control while stabilising pigments.",
      outcome:
        "FY26 revenue ₹2,092 cr (+4% YoY) with EBITDA up ~27%; PAT recovered to ~₹105 cr but Q4 margins compressed on input costs.",
      status: "partial",
      commentary:
        "Full-year improvement masked quarterly volatility that carried into Q1 FY27 revenue decline.",
    },
    {
      period: "Crop nutrition",
      promise:
        "Commercialise nano urea and additional nano fertilisers on Sanand lines without major new capex.",
      outcome:
        "Sanand nano urea commissioned; nano DAP, NPK, and zinc approvals cited for kharif FY27 rollout.",
      status: "partial",
      commentary: "Revenue contribution still small versus crop protection; success depends on channel adoption.",
    },
    {
      period: "Brazil subsidiary",
      promise: "Establish Brazil presence to access registration-led agrochemical growth.",
      outcome: "Wholly owned subsidiary formation discussed on FY26 concall; revenue contribution not yet material.",
      status: "partial",
      commentary: "Long gestation; near-term P&L carries setup cost before export scale.",
    },
    {
      period: "Amalgamation",
      promise:
        "Merge Kilburn Chemicals and Meghmani Crop Nutrition into Meghmani Organics for synergies and single branding.",
      outcome:
        "NCLT process advanced through Jun 2026 meetings; second motion filed Jul 2026 per Q1 FY27 deck.",
      status: "partial",
      commentary: "Closing timeline and one-off costs not fully quantified in free sources.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (diversified agchem and pigments with nutrition optionality). Cross-check: FY26 EBITDA near ₹362 cr at 7× EV/EBITDA less net debt near ₹160 cr implies enterprise equity near ₹2,370 cr or about ₹98 per share before holding-company discount, so sub-15× forward earnings embeds pigment and export cyclicality.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹130 cr at 15× implies about ₹81 (+11% vs ₹73), below the 15% Buy hurdle; bear ~₹29 (-60%) if margins mean-revert; bull ~₹117 (+60%) if Brazil and nutrition scale coincide with pigment recovery.",
  },
  transcripts: [meghmaniFy25Mdna, meghmaniQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track crop protection versus pigment EBITDA splits when AR segment notes publish.",
    "Monitor NCLT amalgamation milestones and one-off charges.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if raw material indices or export pricing move sharply.",
  ],
};
