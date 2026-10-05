import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { uplFy25Mdna } from "../../transcripts/upl-fy25-mdna";
import { uplQ2Fy26 } from "../../transcripts/upl-q2-fy26";

const SHARES_CRORE = 84.36;
const REF_PRICE = 517;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 720,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "Channel destocking persists; OPM stays near 7%; other income normalises lower; debtor days above 200; Latin America pricing pressure; biosolutions ramp slower than guided.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 1180,
    sharesCrore: SHARES_CRORE,
    targetPe: 34,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales recover toward ₹6,200 cr with OPM near 11%; core PAT ex-lumpy treasury gains; working capital days improve modestly from 289; NPP mix lifts margin; borrowings stay below ₹1,000 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1550,
    sharesCrore: SHARES_CRORE,
    targetPe: 38,
    referencePrice: REF_PRICE,
    assumptions:
      "Double-digit volume growth in crop protection; Sep 2025 style 20% OPM quarters repeat; CFO turns positive; ROCE re-expands above 12%; global agchem re-rating toward historical premium.",
  }),
];

export const uplDeepResearch: DeepCompanyResearch = {
  articleSlug: "upl-midcap-memo",
  companyName: "UPL Ltd",
  nseSymbol: "UPL",
  bseCode: "512070",
  valueDrivers: [
    "Global crop protection volume, price/mix, and channel inventory normalisation across ~140 markets",
    "Differentiated and sustainable (NPP / biosolutions) portfolio share versus generic actives",
    "Operating margin recovery after FY25 trough OPM near 3% and TTM rebound toward 10%",
    "Working capital (debtor days, WC days) and cash from operations versus reported PAT quality",
    "Other income and treasury gains versus core operating profit (FY25 PAT inflated by lumpy gains)",
    "Manufacturing cost position across 43 global plants and India export hub competitiveness",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/UPL/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹517, MCap ₹43,613 cr, consolidated P&L through Mar FY26, TTM PAT ₹752 cr, 84.36 cr shares (face ₹2), borrowings ₹869 cr Mar FY26 standalone table.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/upl-ltd/upl/512070/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 quarterly results, investor presentations, and annual report filings.",
    },
    {
      url: "https://www.upl-ltd.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "OpenAg platform: crop protection, seeds, biosolutions; fifth-largest global agchem positioning.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 5398,
        FY25: 5330,
        FY26: 5748,
        "TTM Jun26": 5485,
      },
      comment: "Five-year sales CAGR negative on Screener; TTM still down about 11% YoY.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 402,
        FY25: 155,
        FY26: 422,
        "TTM Jun26": 532,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 7,
        FY25: 3,
        FY26: 7,
        "TTM Jun26": 10,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 1208,
        FY25: 2939,
        FY26: 785,
        "TTM Jun26": 752,
      },
      comment: "FY25 PAT includes other income ₹2,552 cr; TTM other income ₹715 cr still material versus OP ₹532 cr.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: -411,
        FY25: -923,
        FY26: -2243,
      },
    },
    {
      label: "Free cash flow",
      unit: "₹ cr",
      periods: {
        FY24: -1091,
        FY25: -1211,
        FY26: -2309,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 1852,
        FY25: 597,
        "Mar FY26": 869,
      },
      comment: "Screener pros flag almost debt free versus peak leverage years; standalone borrowings table shown.",
    },
    {
      label: "Investments",
      unit: "₹ cr",
      periods: {
        FY25: 5533,
        "Mar FY26": 5967,
      },
    },
    {
      label: "Debtor days",
      unit: "days",
      periods: {
        FY25: 253,
        "Mar FY26": 210,
      },
    },
    {
      label: "Working capital days",
      unit: "days",
      periods: {
        FY24: -60,
        "Mar FY26": 289,
      },
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY25: 1,
        "Mar FY26": 9,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 166,
      },
    },
  ],
  guidanceLog: [
    {
      period: "OpenAg growth",
      promise: "Grow differentiated crop protection and biosolutions while stabilising global market share.",
      outcome: "TTM sales ₹5,485 cr still below FY22 peak ₹16,449 cr on Screener consolidated series after portfolio resets.",
      status: "partial",
      commentary: "Volume recovery visible in Sep 2025 quarter OPM 20% but not yet sustained through Jun 2026.",
    },
    {
      period: "Working capital",
      promise: "Reduce channel inventory and improve cash conversion after the agchem downcycle.",
      outcome: "Working capital days rose to 289 Mar FY26; CFO was negative ₹2,243 cr in FY26.",
      status: "missed",
      commentary: "Debtor days 210 Mar FY26 versus 152 in FY24 per Screener ratios.",
    },
    {
      period: "Operating margin",
      promise: "Restore double-digit OPM as price/mix and cost programs offset generic pressure.",
      outcome: "FY25 OPM 2.9%; FY26 7%; TTM 10% with Sep 2025 quarter at 20% and Jun 2026 at 3.4%.",
      status: "partial",
      commentary: "Margin recovery is quarter-lumpy; base case assumes 11% OPM FY27 not peak 20%.",
    },
    {
      period: "Balance sheet",
      promise: "Deleverage and protect investment grade metrics post Arysta integration era.",
      outcome: "Borrowings ₹869 cr Mar FY26 with investments ₹5,967 cr; Screener pros cite almost debt free.",
      status: "beat",
      commentary: "Net treasury cushion large but does not offset negative CFO without WC release.",
    },
    {
      period: "Shareholder returns",
      promise: "Maintain dividend payout through the cycle.",
      outcome: "Dividend payout 65% FY26 with yield 1.16% at reference price; FY25 payout 16% when PAT was inflated.",
      status: "met",
      commentary: "Payout ratio swings with lumpy PAT; cash dividend depends on WC normalisation.",
    },
    {
      period: "NPP / biosolutions",
      promise: "Increase sustainable portfolio revenue share and pipeline monetisation.",
      outcome: "Screener insights metrics login-gated; management commentary on concalls cites NPP as margin lever.",
      status: "partial",
      commentary: "Segment revenue split requires annual report note refresh in section 18 gaps.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (global crop protection platform with biosolutions optionality). Cross-check: TTM operating profit ₹532 cr at 14× EV/EBITDA plus investments ₹5,967 cr less borrowings ₹869 cr implies equity near ₹12,500 cr or about ₹148 per share if margins stay trough-level, explaining why the market prices recovery not TTM PAT alone.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹1,180 cr at 34× implies about ₹475 (-8% vs ₹517), below the 15% Buy hurdle; bull ~₹698 (+35%) needs sustained OPM above 15% and positive CFO.",
  },
  transcripts: [uplFy25Mdna, uplQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track channel inventory and Latin America seasonality on concalls.",
    "Separate other income from core OP when updating FY27E PAT.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Monitor debtor days and CFO each quarter; downgrade if WC days stay above 250 with negative CFO.",
  ],
};
