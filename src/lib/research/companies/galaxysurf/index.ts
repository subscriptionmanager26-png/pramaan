import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { galaxysurfFy25Mdna } from "../../transcripts/galaxysurf-fy25-mdna";
import { galaxysurfQ1Fy27 } from "../../transcripts/galaxysurf-q1-fy27";

/** ~3.55 crore shares (equity capital ₹35 cr, face value ₹10). */
const SHARES_CRORE = 3.55;
const REF_PRICE = 2377;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 340,
    sharesCrore: SHARES_CRORE,
    targetPe: 20,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue growth slows to high single digits; OPM stays near nine percent on feedstock spikes and export pricing pressure; specialty care mix stalls; market applies mid-cycle surfactant multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 455,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹6,500 cr (+13% YoY) with OPM near twelve percent; PAT builds on Q1 FY27 run-rate without assuming every quarter matches June 2026 peak; net CFO near ₹400 cr; ROCE re-tests sixteen percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 520,
    sharesCrore: SHARES_CRORE,
    targetPe: 23,
    referencePrice: REF_PRICE,
    assumptions:
      "Specialty care share rises; OPM sustains mid-teens in H2 FY27; export home and personal care volumes accelerate; re-rating toward upper-teens ROCE with borrowings still below ₹300 cr.",
  }),
];

export const galaxysurfDeepResearch: DeepCompanyResearch = {
  articleSlug: "galaxysurf-midcap-memo",
  companyName: "Galaxy Surfactants Ltd",
  nseSymbol: "GALAXYSURF",
  bseCode: "542724",
  valueDrivers: [
    "Performance surfactants versus specialty care product volume, realisation, and mix",
    "Operating profit margin through fatty alcohol and oleochemical feedstock pass-through",
    "Customer concentration among global and Indian FMCG home and personal care brands",
    "Export revenue share, geography mix, and qualification cycles for new grades",
    "Working capital (inventory days, debtor days) and net cash from operations versus PAT",
    "Capex, capital work in progress, and borrowings on debottlenecking and specialty assets",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/GALAXYSURF/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹2,377, MCap ₹8,427 cr, book ~₹774/sh, ROCE 13.5%, 52w ₹1,510–2,659, ~3.55 cr shares.",
    },
    {
      url: "https://www.galaxysurfactants.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Oleochemical surfactants and specialty care for home and personal care; 205+ product grades per company site.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/galaxy-surfactants-ltd/galaxysurf/542724/",
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
        FY24: 3792,
        FY25: 4221,
        FY26: 5245,
        "TTM Jun26": 5752,
      },
      comment: "TTM growth near 27% per Screener; FY26 includes volume-led recovery.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 462,
        FY25: 484,
        FY26: 467,
        "TTM Jun26": 601,
      },
      comment: "FY26 full-year OPM nine percent; TTM lifted by Jun 2026 quarter strength.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 301,
        FY25: 305,
        FY26: 267,
        "TTM Jun26": 354,
      },
      comment: "FY26 PAT depressed versus FY25; TTM PAT reflects Jun 2026 quarter ₹166 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 12,
        FY25: 11,
        FY26: 9,
        "TTM Jun26": 10,
      },
      comment: "Q1 FY27 quarterly OPM near 14% on Screener table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 16,
        FY26: 14,
      },
      comment: "ROCE fell as assets and investments rose through FY26.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 518,
        FY25: 421,
        FY26: 333,
      },
      comment: "FY26 CFO/OP near 86%; inventory build ahead of volume ramp.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 187,
        FY25: 210,
        FY26: 235,
      },
      comment: "Leverage modest versus reserves ₹2,709 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 85.03,
        FY25: 86.0,
        FY26: 75.41,
        "TTM Jun26": 99.79,
      },
      comment: "Face value ₹10; trailing P/E near 23.2 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue through surfactants and specialty care volumes.",
      outcome: "Revenue ₹4,221 cr (+11% YoY); PAT ₹305 cr.",
      status: "met",
      commentary: "Top-line met; margin moderated on feedstock.",
    },
    {
      period: "FY26 margin",
      promise: "Hold operating profit margin in low teens.",
      outcome: "FY26 OPM nine percent; several quarters between eight and ten percent.",
      status: "missed",
      commentary: "Spread compression and mix weighed on full year.",
    },
    {
      period: "Balance sheet",
      promise: "Remain effectively debt free with conservative leverage.",
      outcome: "Borrowings ₹235 cr Mar FY26; investments ₹474 cr; still low net debt.",
      status: "met",
      commentary: "Not zero debt but manageable versus equity.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash despite inventory builds.",
      outcome: "Net CFO ₹333 cr on operating profit ₹467 cr; free cash flow ₹198 cr.",
      status: "partial",
      commentary: "CFO/OP below FY24 peak but positive FCF.",
    },
    {
      period: "FY27 outlook",
      promise: "Double-digit revenue growth with margin normalisation toward low-to-mid teens.",
      outcome: "Q1 FY27 revenue ₹1,782 cr; OPM 14%; PAT ₹166 cr supports volume trend.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT further.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian oleo-based surfactant and specialty care leader). Cross-check: TTM operating profit near ₹601 cr at 10× EV/EBITDA less net debt near zero (investments exceed borrowings) implies enterprise equity well above ₹6,000 cr (~₹1,690/sh) only if margins stay depressed; mid-teens OPM re-rates equity toward base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹455 cr at 22× implies about ₹2,820 (+19% vs ₹2,377); trailing multiple embeds FY26 margin trough, leaving room for Buy if Q1 FY27 margin persists part year.",
  },
  transcripts: [galaxysurfFy25Mdna, galaxysurfQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track performance surfactants versus specialty care when investor deck publishes segment splits.",
    "Monitor inventory days, investments, and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or other income fades.",
  ],
};
