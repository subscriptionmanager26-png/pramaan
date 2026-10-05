import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { astecFy26Mdna } from "../../transcripts/astec-fy26-mdna";
import { astecQ1Fy27 } from "../../transcripts/astec-q1-fy27";

const SHARES_CRORE = 2.23;
const REF_PRICE = 709;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 5,
    sharesCrore: SHARES_CRORE,
    targetPe: 8,
    referencePrice: REF_PRICE,
    assumptions:
      "Generic triazole and herbicide prices stay weak; revenue flat near ₹440 crore; OPM near 2%; interest near ₹32 crore; net CFO negative; borrowings stay above ₹420 crore.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 22,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹480 crore (+7% YoY) with OPM near 6%; CDMO projects add mix; interest ₹30 crore; debtor days fall toward 175; PAT still below FY22 peak ₹90 crore.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 55,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Export restocking and domestic formulation recovery lift OPM toward 12%; net CFO positive ₹60 crore; borrowings fall below ₹380 crore; ROCE turns positive toward 10%.",
  }),
];

export const astecDeepResearch: DeepCompanyResearch = {
  articleSlug: "astec-midcap-memo",
  companyName: "Astec LifeSciences Ltd",
  nseSymbol: "ASTEC",
  bseCode: "533138",
  valueDrivers: [
    "Technical active, formulation, and CDMO revenue mix across triazoles, herbicides, and intermediates",
    "Export versus domestic B2B split across roughly twenty-four countries and custom synthesis clients",
    "Operating profit margin through generic price cycles and plant utilisation at Maharashtra and Gujarat sites",
    "Debtor days, inventory, borrowings, and cash from operations versus reported PAT",
    "Interest coverage on ₹449 crore borrowings Mar FY26 and promoter-led balance sheet support",
    "R&D and registration depth for tebuconazole, propiconazole, and sulfonylurea portfolio",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ASTEC/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹709, MCap ₹1,579 cr, book ₹175/sh, ROCE -5.4%, promoter 71.97% Jun 2026, P/E not meaningful on losses.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/astec-lifesciences-ltd/astec/533138/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "FY26 and Q1 FY27 consolidated result filings with revenue and loss bridges.",
    },
    {
      url: "https://www.astecgroup.co.in/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "Product portfolio: tebuconazole, propiconazole, quizalofop, CDMO and B2B agchem positioning.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY22: 677,
        FY23: 628,
        FY24: 458,
        FY25: 381,
        FY26: 448,
        "TTM Jun26": 441,
      },
      comment: "FY24–FY25 trough on pricing and volumes; FY26 partial recovery per Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY22: 154,
        FY23: 77,
        FY24: -6,
        FY25: -66,
        FY26: -4,
      },
      comment: "FY26 near breakeven at OP line; quarterly OPM still volatile.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY22: 90,
        FY23: 26,
        FY24: -47,
        FY25: -135,
        FY26: -81,
        "TTM Jun26": -67,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY22: 23,
        FY23: 12,
        FY24: -1,
        FY25: -17,
        FY26: -1,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 494,
        FY25: 555,
        FY26: 449,
      },
      comment: "Deleveraging from FY25 peak but interest coverage remains thin on losses.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY22: 22,
        FY23: 8,
        FY24: -4,
        FY25: -13,
        FY26: -5,
      },
      comment: "Screener consolidated ROCE Jun 2026; recovery requires positive OP.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 10,
        FY25: -8,
        FY26: -81,
      },
      comment: "FY26 CFO weak with debtor days near 202 at Mar FY26.",
    },
    {
      label: "Debtor days",
      unit: "days",
      periods: {
        FY24: 135,
        FY25: 141,
        FY26: 202,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY26 margin turnaround",
      promise: "Restore operating profit after FY25 loss year.",
      outcome: "FY26 OPM near -1% with OP loss ₹4 crore versus -17% in FY25; Mar FY26 quarter OPM near 6%.",
      status: "partial",
      commentary: "Full-year PAT still -₹81 crore; turnaround incomplete at reference date.",
    },
    {
      period: "Working capital",
      promise: "Reduce inventory and improve collections.",
      outcome: "Debtor days rose to 202 at Mar FY26; inventory days near 169.",
      status: "missed",
      commentary: "FY26 net CFO -₹81 crore per Screener; collections lagged revenue recovery.",
    },
    {
      period: "Deleveraging",
      promise: "Lower borrowings from FY25 peak.",
      outcome: "Borrowings ₹449 crore Mar FY26 vs ₹555 crore Mar FY25.",
      status: "partial",
      commentary: "Interest ₹35 crore FY26 still burdens PBT while PAT negative.",
    },
    {
      period: "FY27 profitability",
      promise: "Return to positive PAT on mix and volume.",
      outcome: "Q1 FY27 revenue ₹84 crore with PAT loss ₹19 crore.",
      status: "pending",
      commentary: "Base FY27E PAT ₹22 crore assumes H2 recovery not yet visible in Q1.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E once earnings normalize (distressed agchem/CDMO). Cross-check: FY26 OP near -₹4 cr; 8× EV/EBITDA on FY22 peak EBITDA implies equity far below ₹709 if FY27 only partially recovers; net debt near ₹449 cr caps re-rating until ROCE turns positive.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹22 cr at 11× implies about ₹109 (-85% vs ₹709); bull ₹320 (-55%) if PAT ₹55 cr at 13×. CMP embeds a sharper FY22-style rebound than our base case supports.",
  },
  transcripts: [astecFy26Mdna, astecQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track borrowings and interest coverage each quarter.",
    "Monitor debtor days versus export collection commentary.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if CDMO wins or generic triazole prices move on results calls.",
  ],
};
