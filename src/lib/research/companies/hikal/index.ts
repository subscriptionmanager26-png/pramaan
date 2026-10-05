import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { hikalFy25Mdna } from "../../transcripts/hikal-fy25-mdna";
import { hikalQ1Fy27 } from "../../transcripts/hikal-q1-fy27";

/** ~12.5 crore shares (equity capital ₹25 cr, face value ₹2). */
const SHARES_CRORE = 12.5;
const REF_PRICE = 218;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 20,
    sharesCrore: SHARES_CRORE,
    targetPe: 14,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue flat near ₹1,700 crore; OPM near 10%; repeat loss quarters on impairments and weak CDMO utilisation; interest near ₹65 crore; ROCE below 3%; market applies distressed multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 68,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,780 crore with OPM near 13%; PAT normalises after FY26 write-downs; net CFO near ₹250 crore; borrowings fall toward ₹650 crore; crop protection and pharma mix stabilises.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 95,
    sharesCrore: SHARES_CRORE,
    targetPe: 20,
    referencePrice: REF_PRICE,
    assumptions:
      "Pharma CDMO wins lift revenue toward ₹1,900 crore with OPM near 16%; Taloja and Mahad utilisation above 80%; impairments done; ROCE re-tests 10%; borrowings below ₹600 crore.",
  }),
];

export const hikalDeepResearch: DeepCompanyResearch = {
  articleSlug: "hikal-midcap-memo",
  companyName: "Hikal Ltd",
  nseSymbol: "HIKAL",
  bseCode: "524735",
  valueDrivers: [
    "Crop protection CDMO reactor utilisation at Taloja and Mahad versus multinational audit cycles",
    "Pharmaceutical API and advanced intermediate project mix at Panoli and Jigani",
    "Operating profit margin through plant loading, depreciation, and R&D spend as percent of sales",
    "Borrowings, interest coverage, and capex completion after FY23–FY26 fixed asset build",
    "Net cash from operations versus reported PAT when impairments and other income swing",
    "Promoter holding near 69% and capital allocation across segments",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/HIKAL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹218, MCap ₹2,690 cr, book ~₹97.2/sh, ROCE 3.51%, 52w ₹146–261, ~12.5 cr shares.",
    },
    {
      url: "https://www.hikal.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Crop protection and pharmaceutical CDMO partner; Taloja, Mahad, Panoli, Jigani, Pune R&D.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/hikal-ltd/hikal/524735/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Consolidated quarterly results through Jun 2026 quarter on Screener tables.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 2023,
        FY24: 1785,
        FY25: 1860,
        FY26: 1713,
        "TTM Jun26": 1735,
      },
      comment: "Five-year sales CAGR near 0%; TTM still below FY23 peak per Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 258,
        FY24: 267,
        FY25: 328,
        FY26: 220,
        "TTM Jun26": 233,
      },
      comment: "FY25 margin peak; FY26 reset on utilisation and mix.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 78,
        FY24: 70,
        FY25: 91,
        FY26: -49,
        "TTM Jun26": -34,
      },
      comment: "FY26 loss on impairments and weak H2; TTM still negative.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 13,
        FY24: 15,
        FY25: 18,
        FY26: 13,
        "TTM Jun26": 13,
      },
      comment: "Q1 FY27 OPM near 9% on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY23: 8,
        FY24: 8,
        FY25: 10,
        FY26: 4,
      },
      comment: "Higher capital base and lower EBIT depressed returns.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 315,
        FY24: 187,
        FY25: 280,
        FY26: 302,
      },
      comment: "CFO held up in FY26 despite reported loss; CFO/OP near 144% FY26.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 818,
        FY25: 765,
        FY26: 684,
      },
      comment: "Gross debt trending down; interest near ₹62 cr FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 5.64,
        FY25: 7.37,
        FY26: -3.95,
        "TTM Jun26": -2.72,
      },
      comment: "Face value ₹2; trailing P/E not meaningful on negative TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 margin expansion",
      promise: "Sustain higher operating profit margin on CDMO mix.",
      outcome: "OPM reached 18% with PAT ₹91 cr; beat FY24.",
      status: "beat",
      commentary: "Peak margin year before FY26 impairment cycle.",
    },
    {
      period: "Deleveraging",
      promise: "Use CFO to reduce borrowings after capex peak.",
      outcome: "Borrowings fell from ₹765 cr to ₹684 cr Mar FY26; CFO ₹302 cr.",
      status: "partial",
      commentary: "Progress on gross debt; interest coverage still thin on weak PAT.",
    },
    {
      period: "FY26 profitability",
      promise: "Deliver stable PAT on revenue recovery.",
      outcome: "Reported PAT -₹49 cr with -₹73 cr other income drag.",
      status: "missed",
      commentary: "Impairments and H2 weakness drove statutory loss.",
    },
    {
      period: "Q1 FY27 operations",
      promise: "Normalise plant uptime after maintenance.",
      outcome: "Jun 2026 revenue ₹403 cr with OPM 9% and PAT -₹7.5 cr.",
      status: "missed",
      commentary: "Margin recovery lagged; H2 FY27 needed for base case.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian crop protection and pharma CDMO manufacturer). Cross-check: TTM operating profit near ₹233 cr at 10× EV/EBITDA less net debt near ₹650 cr implies equity near ₹1,680 cr (~₹134/sh), below ₹218 reference unless PAT normalises faster.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹68 cr at 18× implies about ₹98 (-55% vs ₹218); EV/EBITDA cross-check supports discount until ROCE re-tests high single digits.",
  },
  transcripts: [hikalFy25Mdna, hikalQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track segment revenue mix when annual report publishes crop protection versus pharma.",
    "Monitor impairments, other income, and tax in PAT bridge each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if CDMO utilisation or customer audit outcomes shift.",
  ],
};
