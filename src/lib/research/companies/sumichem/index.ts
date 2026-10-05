import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { sumichemFy25Mdna } from "../../transcripts/sumichem-fy25-mdna";
import { sumichemQ2Fy26 } from "../../transcripts/sumichem-q2-fy26";

const SHARES_CRORE = 49.9;
const REF_PRICE = 418;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 480,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Flat revenue near ₹3,200 crore with OPM compressing toward 17% on herbicide discounting; other income normalises; net CFO below ₹350 crore; ROCE slips toward 18%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 640,
    sharesCrore: SHARES_CRORE,
    targetPe: 36,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹3,350 crore with OPM near 21%; specialty mix from SCC and Valent bioscience lines offsets generic pressure; net CFO near ₹450 crore; almost debt free balance sheet with treasury income moderating.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 720,
    sharesCrore: SHARES_CRORE,
    targetPe: 40,
    referencePrice: REF_PRICE,
    assumptions:
      "Normal monsoon lifts volume mid single digits; OPM expands toward 23% on proprietary mix; export and Africa merchandise accelerate; net CFO above ₹500 crore; ROCE re-tests 25% with stable working capital days.",
  }),
];

export const sumichemDeepResearch: DeepCompanyResearch = {
  articleSlug: "sumichem-midcap-memo",
  companyName: "Sumitomo Chemical India Ltd",
  nseSymbol: "SUMICHEM",
  bseCode: "542920",
  valueDrivers: [
    "Domestic crop protection volume, price/mix, and distributor reach across insecticides, fungicides, and herbicides",
    "Share of parent-sourced specialty and biological products versus generic herbicide exposure post Excel integration",
    "Operating profit margin and EBITDA conversion through seasonal quarters and raw material pass-through",
    "Working capital days, inventory ahead of kharif/rabi, and cash from operations versus PAT",
    "Export and Africa registration pipeline plus backward integration on selected technicals",
    "Treasury and investment income, almost debt free capital allocation, and 75% promoter control from SCC Japan",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/SUMICHEM/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹418, MCap ₹20,844 cr, consolidated P/E 36.5×, book ₹67.9/sh, ROCE 22.1%, promoter 75% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/sumitomo-chemical-india-ltd/sumichem/542920/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and Q2 FY26 results filings, quarterly revenue and PAT bridges.",
    },
    {
      url: "https://www.sumichem.co.in/investor-relations/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹3,238 cr, PAT ₹543 cr, OPM 21% per Screener consolidated P&L.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 2844,
        FY25: 3149,
        FY26: 3238,
        "TTM Jun26": 3245,
      },
      comment: "FY26 per Screener consolidated P&L; five-year sales CAGR near 4% flags mature domestic growth.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 475,
        FY25: 633,
        FY26: 671,
      },
      comment: "FY26 OPM near 21% on consolidated figures.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 370,
        FY25: 506,
        FY26: 543,
        "TTM Jun26": 579,
      },
      comment: "FY26 PAT per Screener; TTM boosted by strong Q1 FY27 quarter on Screener.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 20,
        FY26: 21,
        "Q2 FY26": 23,
      },
      comment: "Margin resilience in specialty mix; herbicide weakness visible in weaker quarters.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 20,
        FY25: 25,
        FY26: 22,
      },
      comment: "Screener consolidated ROCE; quality premium versus slower top-line CAGR.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 757,
        FY25: 452,
        FY26: 446,
      },
      comment: "FY24 spike on working capital release; FY25-FY26 normalised near ₹450 cr.",
    },
  ],
  guidanceLog: [
    {
      period: "Volume and mix",
      promise:
        "Grow domestic branded offtake through SCC proprietary portfolio and Excel generics network while shifting mix toward specialty insecticides and fungicides.",
      outcome:
        "FY26 revenue near ₹3,238 crore (+3% YoY) with OPM 21%; TTM sales growth still negative on Screener headline.",
      status: "partial",
      commentary:
        "Management on Q2 FY26 deck cited premium products holding up better than herbicides when spraying windows compressed.",
    },
    {
      period: "Margin",
      promise: "Sustain operating profit margin above 20% through parent-sourced specialty molecules and cost programmes.",
      outcome: "FY26 OPM 21%; Q2 FY26 OPM near 23% but quarterly volatility remains high.",
      status: "partial",
      commentary:
        "Other income from treasury adds below-the-line stability but should not be modelled as permanent margin expansion.",
    },
    {
      period: "International",
      promise: "Expand Africa and export merchandise as registrations mature.",
      outcome: "International revenue share not fully broken out in free sources; Africa cited as growth pillar on investor site.",
      status: "partial",
      commentary:
        "Export success would diversify domestic monsoon risk but timing remains registration-dependent.",
    },
    {
      period: "Balance sheet",
      promise: "Maintain almost debt free profile with healthy dividend payout near mid-teens to low-thirties percent of PAT.",
      outcome: "Borrowings ₹63 cr Mar FY26 versus investments ₹1,153 cr; dividend payout 12% FY26 on Screener.",
      status: "met",
      commentary:
        "Liquid balance sheet supports dividends and WC seasonality without equity dilution.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (parent-backed specialty agchem with Excel generics scale). Cross-check: FY26 operating profit near ₹671 cr at 12× EV/EBITDA less net cash near ₹900 cr (investments minus borrowings) implies equity value near ₹8,900 cr or about ₹178 per share on operating earnings alone, so market embeds specialty premium and treasury income in the multiple.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹640 cr at 36× implies about ₹462 (+11% vs ₹418), below the 15% Buy hurdle; bear ~₹269 (-36%) if margin and other income normalise; bull ~₹577 (+38%) if volume and mix re-rate together.",
  },
  transcripts: [sumichemFy25Mdna, sumichemQ2Fy26],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track specialty versus generic mix each quarter on investor decks.",
    "Monitor debtor, inventory, and payable days versus CFO conversion.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if treasury other income or tax rate shifts materially.",
  ],
};
