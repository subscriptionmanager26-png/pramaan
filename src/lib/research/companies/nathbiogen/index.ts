import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { nathbiogenFy26Mdna } from "../../transcripts/nathbiogen-fy26-mdna";
import { nathbiogenQ1Fy27 } from "../../transcripts/nathbiogen-q1-fy27";

/** ~1.897 crore shares (equity ₹19 cr, face ₹10) per Screener Mar FY26. */
const SHARES_CRORE = 1.897;
const REF_PRICE = 138;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 34,
    sharesCrore: SHARES_CRORE,
    targetPe: 6.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Cotton Bt packet volumes soften on illegal seed competition; revenue flat near ₹460 crore; OPM compresses toward 9%; borrowings rise above ₹150 crore; net CFO stays negative; contingent liability provisions hit PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 41,
    sharesCrore: SHARES_CRORE,
    targetPe: 7.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹490 crore (+10% YoY) with OPM near 11%; hybrid paddy and vegetable mix stable; net CFO turns modestly positive near ₹25 crore; borrowings near ₹130 crore; ROCE toward 8%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 52,
    sharesCrore: SHARES_CRORE,
    targetPe: 8.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Strong monsoon lifts cotton and maize volumes; OPM expands toward 14%; export and plant nutrition adjacencies contribute; net CFO above ₹60 crore; ROCE re-tests 11% with debtor days below 65.",
  }),
];

export const nathbiogenDeepResearch: DeepCompanyResearch = {
  articleSlug: "nathbiogen-midcap-memo",
  companyName: "Nath Bio-Genes (India) Ltd",
  nseSymbol: "NATHBIOGEN",
  bseCode: "537291",
  valueDrivers: [
    "Cotton Bt and hybrid seed packet volumes, realisations, and grower production agreement costs",
    "Hybrid paddy, maize, and vegetable seed mix and distributor reach across India",
    "Operating profit margin through seasonal June quarter peak versus thin off-quarters",
    "Working capital days, inventory conditioning ahead of kharif, and cash from operations versus PAT",
    "Borrowings, contingent liabilities, and interest coverage on a small-cap balance sheet",
    "R&D and trait pipeline (hybrid and GM seeds) relative to sales and peer germplasm depth",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/NATHBIOGEN/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹138, MCap ₹262 cr, P/E 7.73×, book ₹358/sh, ROCE 7.1%, promoter 45.6%, FY26 CFO -₹13 cr, contingent liabilities ₹89.3 cr.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/nath-bio-genes-india-ltd/nathbiogen/537291/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY27 and FY26 consolidated result filings; share count and quarterly OPM bridges.",
    },
    {
      url: "https://www.nathbiogenes.com/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "Nath Group flagship; hybrid and Bt seed production via grower agreements; storage and processing footprint.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 234,
        FY24: 248,
        FY25: 268,
        FY26: 445,
        "TTM Jun26": 490,
      },
      comment: "FY26 per Screener consolidated P&L; step-up versus FY25 on cotton and paddy dispatch.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 49,
        FY24: 50,
        FY25: 51,
        FY26: 52,
        "TTM Jun26": 49,
      },
      comment: "Operating profit nearly flat in rupees while revenue scaled; OPM compressed.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 35,
        FY24: 40,
        FY25: 39,
        FY26: 42,
        "TTM Jun26": 39,
      },
      comment: "FY22 loss year (₹67 cr) excluded from forward bridge; other income supports EPS stability.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 21,
        FY24: 20,
        FY25: 19,
        FY26: 12,
        "Q1 FY27": 11,
      },
      comment: "Margin dilution as grower costs and mix rose with revenue acceleration.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 38,
        FY24: 75,
        FY25: 18,
        FY26: -13,
      },
      comment: "FY26 CFO negative despite PAT ₹42 cr; key quality flag versus headline growth.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY23: 105,
        FY24: 110,
        FY25: 123,
        FY26: 138,
      },
      comment: "Not debt-free; interest near ₹16 cr FY26 on Screener cash flow statement.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 7,
        FY25: 7,
        FY26: 7,
      },
      comment: "Low teens ROCE history; current single-digit returns on expanded asset base.",
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 358,
      },
      comment: "Stock near 0.38× book on Screener; reflects weak earnings power versus net worth.",
    },
  ],
  guidanceLog: [
    {
      period: "FY26 revenue",
      promise: "Grow domestic hybrid and Bt seed volumes through distributor expansion.",
      outcome: "FY26 revenue near ₹445 cr versus ₹268 cr in FY25 (+66% YoY on Screener).",
      status: "beat",
      commentary: "Volume-led; verify sustainability when grower costs normalise.",
    },
    {
      period: "Margin",
      promise: "Protect operating profit margin while scaling vegetable and paddy lines.",
      outcome: "FY26 OPM near 12% versus 19% in FY25 as costs rose with revenue.",
      status: "missed",
      commentary: "Management targets mid-teens OPM in FY26 MD&A excerpts when cotton realisations stabilise.",
    },
    {
      period: "Cash conversion",
      promise: "Convert seasonal profit into operating cash after inventory peaks.",
      outcome: "FY26 net CFO near negative ₹13 cr; free cash flow negative near ₹16 cr.",
      status: "missed",
      commentary: "Similar pattern to larger seed peers in heavy inventory years; must reverse in FY27 for upgrade.",
    },
    {
      period: "Working capital",
      promise: "Improve debtor days and discipline distributor credit.",
      outcome: "Debtor days improved toward 70 at Mar FY26; working capital days 253 Mar FY26.",
      status: "partial",
      commentary: "Collections better; inventory funding still elevated per Screener ratios.",
    },
    {
      period: "Balance sheet risk",
      promise: "Monitor contingent liabilities and legal cases without impairing operations.",
      outcome: "Contingent liabilities ₹89.3 cr disclosed on Screener cons page.",
      status: "pending",
      commentary: "Management asserts no going-concern threat; outcomes can hit other income and tax.",
    },
    {
      period: "Q1 FY27 season",
      promise: "Execute kharif dispatch with orderly collections.",
      outcome: "Q1 FY27 revenue near ₹328 cr; OPM near 11%; PAT near ₹32 cr per Screener quarterly table.",
      status: "met",
      commentary: "June quarter sets tone; Sep-Dec quarters historically thin on sales.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (small-cap hybrid seed franchise with grower-based production). Cross-check: FY26 operating profit near ₹52 cr at 8× EV/EBITDA less net debt near ₹120 cr implies enterprise equity near ₹296 cr or about ₹156 per share before contingent liability discount.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹41 cr at 7.5× implies about ₹162 (+17% vs ₹138), clearing the Buy threshold if CFO normalises; bear ~₹116 (-16%) if cotton volumes and legal provisions worsen.",
  },
  transcripts: [nathbiogenFy26Mdna, nathbiogenQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track cotton Bt packet volumes and paddy or vegetable mix when disclosed in presentations.",
    "Monitor CFO versus PAT each quarter; downgrade if FY27 CFO stays negative with rising borrowings.",
    "Replace curated concall quotes with BSE verbatim transcripts when uploaded.",
    "Update contingent liability and tax rate assumptions when annual report notes publish.",
  ],
};
