import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { bharatrasFy26Mdna } from "../../transcripts/bharatras-fy26-mdna";
import { bharatrasQ1Fy27 } from "../../transcripts/bharatras-q1-fy27";

const SHARES_CRORE = 1.66;
const REF_PRICE = 999;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 125,
    sharesCrore: SHARES_CRORE,
    targetPe: 9,
    referencePrice: REF_PRICE,
    assumptions:
      "Generic active prices fall and top-ten molecules de-rate; revenue flat near ₹1,200 crore; OPM compresses toward 12%; net CFO below ₹90 crore; ROCE slips toward 12%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 170,
    sharesCrore: SHARES_CRORE,
    targetPe: 11.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,290 crore (+4% YoY) with OPM near 16%; new technical launches offset China supply pressure; net CFO near ₹130 crore; borrowings stay below ₹25 crore versus investments above ₹300 crore.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 195,
    sharesCrore: SHARES_CRORE,
    targetPe: 12,
    referencePrice: REF_PRICE,
    assumptions:
      "Export volumes inflect on fluxametamide and tolfenpyrad; OPM expands toward 18%; working capital days improve; ROCE re-tests 20% with stable capex.",
  }),
];

export const bharatrasDeepResearch: DeepCompanyResearch = {
  articleSlug: "bharatras-midcap-memo",
  companyName: "Bharat Rasayan Ltd",
  nseSymbol: "BHARATRAS",
  bseCode: "590021",
  valueDrivers: [
    "Technical grade pesticide and intermediate revenue, with top-ten products near two-thirds of sales",
    "Export versus domestic mix, customer concentration, and registration depth in regulated markets",
    "Operating profit margin through generic active price cycles and plant utilisation",
    "Working capital days, inventory, receivables, and cash from operations versus PAT",
    "Almost debt-free balance sheet, liquid investments, and low dividend payout reinvestment",
    "CWIP and technical capacity additions for new molecules (fluxametamide, tolfenpyrad, diuron)",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/BHARATRAS/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹999, MCap ₹1,660 cr, consolidated P/E 11.4×, book ₹767/sh, ROCE 16%, promoter 74.99% Jun 2026.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/bharat-rasayan-ltd/bharatras/590021/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "FY26 and Q1 FY27 result filings with revenue and OPM bridges.",
    },
    {
      url: "https://www.bharatgroup.co.in/investor-relations",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹1,240 cr, PAT ₹146 cr, OPM 16% per Screener consolidated P&L.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 1234,
        FY24: 1044,
        FY25: 1171,
        FY26: 1240,
        "TTM Jun26": 1203,
      },
      comment: "FY24 trough on pricing; FY26 recovery per Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 191,
        FY24: 118,
        FY25: 175,
        FY26: 199,
      },
      comment: "FY26 OPM near 16%; quarterly volatility remains high.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 125,
        FY24: 96,
        FY25: 141,
        FY26: 146,
        "TTM Jun26": 143,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 15,
        FY24: 11,
        FY25: 15,
        FY26: 16,
      },
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 12,
        FY25: 16,
        FY26: 16,
      },
      comment: "Screener consolidated ROCE Jun 2026; below FY20 peak near 34%.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 41,
        FY25: 172,
        FY26: 132,
      },
      comment: "Working-capital-heavy technical export profile; FY25 strong conversion.",
    },
  ],
  guidanceLog: [
    {
      period: "FY26 margin recovery",
      promise: "Restore operating profit margin after FY24 generic price shock.",
      outcome: "FY26 OPM near 16% with PAT ₹146 crore on revenue ₹1,240 crore.",
      status: "met",
      commentary:
        "Mar FY26 quarter PAT near ₹38 crore supported full-year earnings; TTM PAT ₹143 crore shows slight moderation.",
    },
    {
      period: "Deleveraging",
      promise: "Reduce borrowings and maintain almost debt-free posture.",
      outcome: "Borrowings ₹1 crore Mar FY26; investments ₹324 crore.",
      status: "met",
      commentary: "Interest expense negligible; liquidity supports CWIP without equity raise.",
    },
    {
      period: "Product pipeline",
      promise: "Launch and scale new technical molecules beyond legacy top-ten basket.",
      outcome: "Management cites fluxametamide, tolfenpyrad, and diuron on FY26 commentary.",
      status: "partial",
      commentary: "Revenue still concentrated in top ten products near 66% of sales per company disclosures.",
    },
    {
      period: "FY27 growth",
      promise: "Mid-single-digit revenue growth with stable margins.",
      outcome: "Q1 FY27 revenue ₹338 crore with PAT ₹37 crore; OPM near 15%.",
      status: "partial",
      commentary: "TTM revenue down 5% on Screener flags that execution must prove before re-rating from 60% one-year price decline.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (technical export agchem). Cross-check: FY26 operating profit near ₹199 cr at 9× EV/EBITDA plus investments near ₹324 cr less working capital implies equity value above ₹999 if margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹170 cr at 11.5× implies about ₹1,178 (+18% vs ₹999), clearing the Buy threshold; bear ~₹678 (-32%) if generic prices repeat FY24 stress.",
  },
  transcripts: [bharatrasFy26Mdna, bharatrasQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track top-ten product concentration when annual report publishes.",
    "Monitor debtor and inventory days versus CFO each quarter.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if China generic supply or export realisations shift on results calls.",
  ],
};
