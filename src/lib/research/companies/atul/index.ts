import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { atulFy25Mdna } from "../../transcripts/atul-fy25-mdna";
import { atulQ1Fy27 } from "../../transcripts/atul-q1-fy27";

/** ~2.94 crore shares (equity capital ₹29 cr, face value ₹10). */
const SHARES_CRORE = 2.94;
const REF_PRICE = 5861;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 720,
    sharesCrore: SHARES_CRORE,
    targetPe: 20,
    referencePrice: REF_PRICE,
    assumptions:
      "Agrochemical export pricing softens; OPM reverts to mid-teens; crop protection inventory rebuild stalls; market applies cyclical specialty multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 880,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹7,200 cr (+15% on TTM) with average OPM near eighteen percent; PAT builds on Q1 FY27 run-rate; net CFO near ₹1,100 cr; borrowings below ₹200 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1020,
    sharesCrore: SHARES_CRORE,
    targetPe: 26,
    referencePrice: REF_PRICE,
    assumptions:
      "High-teens OPM sustained; crop protection actives gain share in 2,4-D and indoxacarb; performance chemicals pricing firm; ROCE moves toward eighteen percent.",
  }),
];

export const atulDeepResearch: DeepCompanyResearch = {
  articleSlug: "atul-midcap-memo",
  companyName: "Atul Ltd",
  nseSymbol: "ATUL",
  bseCode: "500027",
  valueDrivers: [
    "Crop protection bulk active volumes, pricing, and global channel inventory",
    "Life Science versus Performance chemical mix and operating profit margin",
    "Gujarat integrated site utilisation, energy, and phosgene chain uptime",
    "Export realisations and rupee impact on agrochemical actives",
    "Net cash from operations versus capex and treasury investments",
    "Return on capital employed and book-value multiple re-rating",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ATUL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹5,861, MCap ₹17,256 cr, book ~2.77×, ROCE 14.9%, 52w ₹5,560–7,198, ~2.94 cr shares, promoter 45.3%.",
    },
    {
      url: "https://www.atul.co.in/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Nine businesses under Life Science and Performance segments per FY25 materials.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/atul-ltd/atul/500027/",
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
        FY24: 4726,
        FY25: 5583,
        FY26: 6274,
        "TTM Jun26": 6643,
      },
      comment: "TTM lifted by Jun 2026 quarter ₹1,848 cr (+11% QoQ sales momentum).",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 639,
        FY25: 918,
        FY26: 1034,
        "TTM Jun26": 1189,
      },
      comment: "TTM OPM near eighteen percent vs sixteen percent FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 324,
        FY25: 499,
        FY26: 689,
        "TTM Jun26": 811,
      },
      comment: "TTM PAT +59% YoY per Screener compounded profit growth.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 14,
        FY25: 16,
        FY26: 16,
        "TTM Jun26": 18,
      },
      comment: "Q1 FY27 OPM twenty one percent on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 9,
        FY25: 13,
        FY26: 15,
      },
      comment: "Recovery from FY24 trough; still below FY20 peak near twenty-eight percent.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 667,
        FY25: 603,
        FY26: 1023,
      },
      comment: "FY26 CFO/OP near one hundred thirteen percent; free cash flow ₹851 cr.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 237,
        FY25: 202,
        FY26: 183,
      },
      comment: "Near debt-free balance sheet; investments ₹2,592 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 109.71,
        FY25: 164.37,
        FY26: 230.25,
        "TTM Jun26": 270.18,
      },
      comment: "Face value ₹10; trailing P/E near 21.7 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow consolidated revenue with stable crop protection and performance chemical demand.",
      outcome: "Revenue ₹5,583 cr (+18% YoY); PAT ₹499 cr.",
      status: "met",
      commentary: "Top-line and profit rebounded after FY24 margin compression.",
    },
    {
      period: "FY26 margin",
      promise: "Mid-teens average operating profit margin.",
      outcome: "FY26 OPM sixteen percent; TTM OPM eighteen percent.",
      status: "met",
      commentary: "Q1 FY27 stepped up to twenty one percent OPM.",
    },
    {
      period: "Balance sheet",
      promise: "Maintain conservative leverage while funding growth capex.",
      outcome: "Borrowings ₹183 cr Mar FY26; investments rose to ₹2,592 cr.",
      status: "met",
      commentary: "Treasury and subsidiary stakes absorb surplus cash.",
    },
    {
      period: "FY26 cash conversion",
      promise: "Convert operating profit to cash with disciplined working capital.",
      outcome: "Net CFO ₹1,023 cr on operating profit ₹1,034 cr.",
      status: "met",
      commentary: "Free cash flow ₹851 cr after capex.",
    },
    {
      period: "FY27 outlook",
      promise: "Low double digit revenue growth with high-teens average OPM.",
      outcome: "Q1 FY27 revenue ₹1,848 cr; OPM twenty one percent; PAT ₹254 cr pending full year.",
      status: "pending",
      commentary: "Validate on Sep and Dec 2026 quarters before raising base PAT above ₹880 cr.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian diversified Life Science and Performance chemicals platform). Cross-check: TTM operating profit near ₹1,189 cr at 14× EV/EBITDA on net cash posture implies equity support well above bear case when margins hold.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹880 cr at 24× implies about ₹7,184 (+23% vs ₹5,861); trailing multiple embeds FY24 earnings trough while TTM PAT ₹811 cr already recovered.",
  },
  transcripts: [atulFy25Mdna, atulQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track Life Science versus Performance segment revenue share when investor deck publishes.",
    "Monitor crop protection export pricing and channel inventory commentary each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves seasonal or tax rate shifts.",
  ],
};
