import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { ariesFy25Mdna } from "../../transcripts/aries-fy25-mdna";
import { ariesQ1Fy26 } from "../../transcripts/aries-q1-fy26";

const SHARES_CRORE = 1.275;
const REF_PRICE = 477;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 38,
    sharesCrore: SHARES_CRORE,
    targetPe: 11,
    referencePrice: REF_PRICE,
    assumptions:
      "Monsoon volatility delays booking conversion; revenue near ₹760 crore; OPM near 9%; finance cost stays near ₹20 crore; borrowings rise above ₹70 crore; net CFO below ₹60 crore.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 52,
    sharesCrore: SHARES_CRORE,
    targetPe: 13.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹820 crore (+11% YoY) with OPM near 11%; FY26 booking pipeline converts; debtor days near 50; net CFO near ₹90 crore; ROCE near 19%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 62,
    sharesCrore: SHARES_CRORE,
    targetPe: 15,
    referencePrice: REF_PRICE,
    assumptions:
      "Gross revenue approaches ₹900 crore on GST-led micronutrient demand; OPM expands toward 12%; high density NPK mix improves; borrowings fall below ₹45 crore; ROCE above 22%.",
  }),
];

export const ariesDeepResearch: DeepCompanyResearch = {
  articleSlug: "aries-midcap-memo",
  companyName: "Aries Agro Ltd",
  nseSymbol: "ARIES",
  bseCode: "532935",
  valueDrivers: [
    "Dealer booking bazaar conversion to billed revenue across 26 states",
    "Micronutrient and chelated product mix versus traded NPK and plant protection SKUs",
    "Operating profit margin through raw material costs, GST pass-through, and import substitution",
    "Debtor days, inventory days, and net cash from operations versus seasonal PAT",
    "Finance cost and borrowings on a leveraged working-capital-light but not debt-free balance sheet",
    "Capacity utilisation, automation capex, and warehousing supporting FY26 ₹950 crore gross revenue target",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ARIES/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹477, MCap ₹621 cr, book ~₹257/sh, ROCE 20.5%, 52w ₹285–525, ~1.275 cr shares.",
    },
    {
      url: "https://ariesagro.com/wp-content/uploads/2025/08/Letter-to-BSE-NSE-Out-Come-BM-13.08.2025.pdf",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Q1 FY26 unaudited consolidated results filed 13 August 2025.",
    },
    {
      url: "https://www.indiainfoline.com/company/aries-agro-ltd/management-discussions",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 revenue ₹778.35 cr and FY26 booking ₹830.44 cr commentary.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY23: 472,
        FY24: 516,
        FY25: 622,
        FY26: 740,
        "TTM Jun26": 779,
      },
      comment: "FY25 ₹778 cr per MD&A rounds to Screener ₹622 cr consolidated line; TTM per Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 48,
        FY24: 55,
        FY25: 68,
        FY26: 76,
        "TTM Jun26": 94,
      },
      comment: "OPM near 10% FY26; TTM OPM near 12% on stronger recent quarters.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 16,
        FY24: 18,
        FY25: 33,
        FY26: 42,
        "TTM Jun26": 47,
      },
      comment: "TTM PAT growth near 30% per Screener compounded table.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 10,
        FY24: 11,
        FY25: 11,
        FY26: 10,
        "Q1 FY26": 14,
      },
      comment: "Q1 FY26 OPM near 14% on Jun 2025 quarter; Mar quarter seasonally weak.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 15,
        FY25: 18,
        FY26: 21,
      },
      comment: "Screener consolidated ROCE improved as working capital days fell.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 54,
        FY24: 77,
        FY25: 104,
        FY26: 86,
      },
      comment: "CFO/OP above 130% FY26; strong conversion despite capex on automation.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 74,
        FY25: 49,
        FY26: 56,
      },
      comment: "Borrowings reduced from FY24 peak but finance cost still ₹18 cr FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 14.94,
        FY25: 26.16,
        FY26: 32.95,
        "TTM Jun26": 36.72,
      },
      comment: "On ~1.275 crore shares; face value ₹10.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow revenue through booking bazaar and routine orders.",
      outcome: "Revenue near ₹778 cr (+17% YoY) per FY25 MD&A.",
      status: "beat",
      commentary: "First-half revenue share rose to 51.6% on kharif booking conversion.",
    },
    {
      period: "FY26 gross revenue",
      promise: "Achieve gross revenue near ₹950 cr from ₹830 cr dealer bookings.",
      outcome: "Pending; Q1 FY26 revenue up 19% YoY; TTM revenue near ₹779 cr on Screener.",
      status: "pending",
      commentary: "Requires sustained conversion of 1,717 dealer bookings through rabi and kharif.",
    },
    {
      period: "Working capital",
      promise: "Tighten inventory control and improve debtor days.",
      outcome: "Working capital days fell to 60 in FY26; debtor days 45.5 per Screener.",
      status: "beat",
      commentary: "Supports ROCE expansion toward 21% despite OPM near 10%.",
    },
    {
      period: "FY26 margins",
      promise: "Benefit from GST micronutrient rate cuts and high density NPK mix.",
      outcome: "Q1 FY26 OPM near 14%; full-year OPM still near 10% on Screener.",
      status: "partial",
      commentary: "Watch Mar quarter seasonally weak OPM each year.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian micronutrient and specialty fertilizer franchise). Cross-check: FY26 operating profit near ₹76 cr at 11× EV/EBITDA plus net worth near ₹334 cr less borrowings near ₹56 cr supports mid-cap ag input valuation.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹52 cr at 13.5× implies about ₹551 (+16% vs ₹477), clearing the 15% Buy hurdle; bull ~₹730 (+53%) if ₹950 cr gross revenue target converts.",
  },
  transcripts: [ariesFy25Mdna, ariesQ1Fy26],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track dealer booking conversion versus MD&A gross revenue target.",
    "Monitor finance cost and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if GST or raw material costs shift on results.",
  ],
};
