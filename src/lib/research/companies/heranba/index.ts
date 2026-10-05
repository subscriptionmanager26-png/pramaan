import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { heranbaFy25Mdna } from "../../transcripts/heranba-fy25-mdna";
import { heranbaQ1Fy27 } from "../../transcripts/heranba-q1-fy27";

const SHARES_CRORE = 4.01;
const REF_PRICE = 172;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 12,
    sharesCrore: SHARES_CRORE,
    targetPe: 10,
    referencePrice: REF_PRICE,
    assumptions:
      "Generic realisations stay weak; revenue flat near ₹1,480 crore; OPM near 5%; net CFO negative; provisions repeat; ROCE stays below 5%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 52,
    sharesCrore: SHARES_CRORE,
    targetPe: 12,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,580 crore (+3% YoY) with OPM near 9%; Q1 FY27 margin recovery partly sustained; net CFO near ₹60 crore; borrowings stable below ₹120 crore.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 95,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Export restocking and mix lift OPM toward 12%; revenue near ₹1,680 crore; working capital days improve; ROCE re-tests 14% with positive CFO above ₹110 crore.",
  }),
];

export const heranbaDeepResearch: DeepCompanyResearch = {
  articleSlug: "heranba-midcap-memo",
  companyName: "Heranba Industries Ltd",
  nseSymbol: "HERANBA",
  bseCode: "531266",
  valueDrivers: [
    "Export formulation and technical revenue mix across insecticides, herbicides, and fungicides",
    "Operating profit margin through generic price cycles, provisions, and plant utilisation at Vapi",
    "Working capital days, receivables, inventory, and cash from operations versus reported PAT",
    "Registration depth and geography mix in regulated export markets versus domestic channel",
    "Borrowings, net worth, and capex for formulation capacity without equity dilution",
    "Promoter-led capital allocation and recovery from FY25 loss year",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/HERANBA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹172, MCap ₹689 cr, book ~₹202/sh, ROCE negative TTM, 52w ₹155–365, equity capital 40 cr (4.01 cr shares).",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/heranba-industries-ltd/heranba/531266/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY25 result filings with revenue, OPM, and PAT bridges.",
    },
    {
      url: "https://www.heranba.co.in/investor-relations",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 consolidated revenue ~₹1,595 cr with reported loss; FY26 TTM sales ~₹1,526 cr per Screener P&L.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 1257,
        FY24: 1410,
        FY25: 1595,
        FY26: 1526,
        "TTM Jun26": 1526,
      },
      comment: "FY26 per Screener consolidated table; FY25 peak before margin collapse.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 77,
        FY24: 98,
        FY25: 69,
        FY26: 87,
      },
      comment: "FY25 OPM near 4.3%; FY26 recovery toward 6% on TTM.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 34,
        FY24: 2,
        FY25: -78,
        FY26: -77,
        "TTM Jun26": -77,
      },
      comment: "Loss years driven by provisions and weak realisations; Q1 FY27 shows partial operating recovery.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 6,
        FY24: 7,
        FY25: 4.3,
        FY26: 6,
        "Q1 FY27": 13.6,
      },
      comment: "Q1 FY27 per Screener quarterly table; full-year sustainability unproven.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 8,
        FY25: -4,
        FY26: -2,
      },
      comment: "Screener consolidated ROCE negative TTM Jun 2026 after FY25 loss.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 107,
        FY24: 101,
        FY25: -96,
        FY26: 0,
      },
      comment: "FY25 CFO outflow on working capital; FY26 near breakeven per Screener cash flow.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY23: 8.72,
        FY24: 0.77,
        FY25: -19.1,
        FY26: -18.84,
      },
      comment: "On ~4.01 crore shares; loss per share mirrors PAT trajectory.",
    },
    {
      label: "Equity plus reserves",
      unit: "₹ cr",
      periods: {
        FY24: 843,
        FY25: 841,
        FY26: 810,
      },
      comment: "Book value per share near ₹202 on 4.01 cr shares Mar FY26.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 profitability",
      promise: "Protect margins and collections through export downcycle.",
      outcome: "Reported PAT near negative ₹78 crore on revenue near ₹1,595 crore.",
      status: "missed",
      commentary:
        "Operating profit margin fell toward 4.3% with provisions; net CFO turned negative near ₹96 crore.",
    },
    {
      period: "FY26 recovery",
      promise: "Stabilise revenue and reduce loss magnitude versus FY25.",
      outcome: "TTM revenue near ₹1,526 crore with PAT still near negative ₹77 crore.",
      status: "partial",
      commentary: "Top line eased but losses persisted; market de-rated shares toward 52-week lows.",
    },
    {
      period: "Q1 FY27 margin",
      promise: "Show operating leverage as export volumes normalise.",
      outcome: "Q1 FY27 revenue near ₹437 crore with OPM near 13.6%.",
      status: "beat",
      commentary: "Single quarter does not prove full-year recovery; watch Sep and Dec 2026 margins.",
    },
    {
      period: "FY27 cash conversion",
      promise: "Restore positive net cash from operations.",
      outcome: "Pending; FY26 CFO near zero on Screener.",
      status: "pending",
      commentary: "Upgrade case requires CFO above ₹60 crore with debtor days falling from peak cycle levels.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (export formulation agchem). Cross-check: FY26 operating profit near ₹87 cr at 8× EV/EBITDA plus net worth near ₹810 cr less moderate borrowings supports asset backing but not loss-making earnings multiple.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹52 cr at 12× implies about ₹156 (-9% vs ₹172), below the 15% Buy hurdle; bull ~₹308 (+79%) if margins re-test low teens for a full year.",
  },
  transcripts: [heranbaFy25Mdna, heranbaQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track export geography mix when annual report publishes.",
    "Monitor debtor and inventory days versus CFO each quarter.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if generic price indices or provision reversals move on results calls.",
  ],
};
