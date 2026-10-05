import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { jublingreaFy25Mdna } from "../../transcripts/jublingrea-fy25-mdna";
import { jublingreaQ1Fy27 } from "../../transcripts/jublingrea-q1-fy27";

/** ~15.93 crore shares (MCap ₹10,162 cr ÷ CMP ₹638 on Screener 2026-10-01). */
const SHARES_CRORE = 15.93;
const REF_PRICE = 638;
const REF_DATE = "2026-10-04";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 290,
    sharesCrore: SHARES_CRORE,
    targetPe: 26,
    referencePrice: REF_PRICE,
    assumptions:
      "Pyridine and Vitamin B3 realisations soften; CDMO utilisation below seventy percent; OPM reverts toward eleven percent; market applies mid-twenties multiple on flat PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 360,
    sharesCrore: SHARES_CRORE,
    targetPe: 31,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹4,850 cr (+4% on TTM) with average OPM near fourteen percent; PAT benefits from acetic anhydride tailwind and specialty mix; borrowings stable near ₹800 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 420,
    sharesCrore: SHARES_CRORE,
    targetPe: 35,
    referencePrice: REF_PRICE,
    assumptions:
      "Gajraula and Bharuch CDMO ramp beat plan; OPM sustains mid-fifteen percent; ROCE moves toward fourteen percent; market holds mid-thirties multiple on visible EBITDA guide achievement.",
  }),
];

export const jublingreaDeepResearch: DeepCompanyResearch = {
  articleSlug: "jublingrea-midcap-memo",
  companyName: "Jubilant Ingrevia Ltd",
  nseSymbol: "JUBLINGREA",
  bseCode: "543271",
  valueDrivers: [
    "Pyridine, beta picoline, and Vitamin B3 (niacinamide) pricing and global supply-demand",
    "Specialty chemicals and nutrition revenue mix versus acetic anhydride Essentials",
    "Agrochemical and pharmaceutical CDMO contract utilisation and order visibility",
    "Operating profit margin versus acetic acid feedstock and energy costs",
    "Gajraula multi-purpose plant ramp and cumulative ₹2,000 cr capex revenue potential",
    "Borrowings, return on capital employed, and net cash from operations through capex cycle",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/JUBLINGREA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹638, MCap ₹10,162 cr, book ~₹196, ROCE 11.4%, 52w ₹535–795, ~15.93 cr shares, promoter 45.22%.",
    },
    {
      url: "https://www.jubilantingrevia.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Pinnacle345 strategy, pyridine leadership, specialty and CDMO footprint.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/jubilant-ingrevia-ltd/jublingrea/543271/",
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
        FY24: 4136,
        FY25: 4178,
        FY26: 4388,
        "TTM Jun26": 4651,
      },
      comment: "TTM +11% YoY; Jun 2026 quarter ₹1,300 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 427,
        FY25: 519,
        FY26: 568,
        "TTM Jun26": 624,
      },
      comment: "TTM OPM near thirteen percent; Q1 FY27 OPM fifteen percent.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 183,
        FY25: 251,
        FY26: 278,
        "TTM Jun26": 309,
      },
      comment: "TTM PAT +15% YoY; Q1 FY27 PAT ₹106 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 10,
        FY25: 12,
        FY26: 13,
        "TTM Jun26": 13,
      },
      comment: "Margin recovery from FY24 trough on specialty mix.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 10,
        FY25: 11,
        FY26: 11,
      },
      comment: "ROCE held near eleven percent despite higher capital employed.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 430,
        FY25: 508,
        FY26: 524,
      },
      comment: "FY26 CFO/OP near 111%; FCF positive ₹235 cr.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 740,
        FY25: 764,
        FY26: 792,
      },
      comment: "Leverage stable through Gajraula spend; interest FY26 near ₹49 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 11.48,
        FY25: 15.77,
        FY26: 17.45,
        "TTM Jun26": 19.37,
      },
      comment: "Face value ₹1; trailing P/E near 32 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow revenue with rising specialty and nutrition share under Pinnacle345.",
      outcome: "Revenue ₹4,178 cr (+1% YoY); specialty plus nutrition near sixty-two percent mix.",
      status: "partial",
      commentary: "Top line flat; mix shift progressed as guided.",
    },
    {
      period: "FY25 cash and leverage",
      promise: "Improve CFO and fund capex largely from internal accruals.",
      outcome: "Net CFO ₹508 cr; FCF positive ₹156 cr; borrowings ₹764 cr (+3% YoY).",
      status: "met",
      commentary: "Cash generation covered majority of FY25 capex.",
    },
    {
      period: "FY26 revenue",
      promise: "Mid-single-digit growth with low-teens OPM.",
      outcome: "Revenue ₹4,388 cr (+5% YoY); OPM thirteen percent; TTM ₹4,651 cr.",
      status: "beat",
      commentary: "Volume and acetic anhydride tailwind supported H2.",
    },
    {
      period: "FY26 ROCE",
      promise: "Improve return on capital employed toward low teens.",
      outcome: "ROCE eleven percent flat YoY on higher fixed assets.",
      status: "partial",
      commentary: "Gajraula revenue needed to lift ROCE above twelve percent.",
    },
    {
      period: "FY27 EBITDA outlook",
      promise: "FY27 EBITDA including other income ₹750–800 cr with seventy percent utilisation on commissioned assets ex-Gajraula MPP.",
      outcome: "Q1 FY27 revenue ₹1,300 cr; PAT ₹106 cr; guide reiterated Jul 2026.",
      status: "pending",
      commentary: "Validate H2 CDMO order flow and pyridine pricing before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated life-science specialty and acetyls platform). Cross-check: TTM operating profit near ₹624 cr at 10× EV/EBITDA less net debt near ₹650 cr supports equity near ₹5,900 cr (~₹370/sh) only if margins revert to FY24 trough; low-teens OPM sustains base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹360 cr at 31× implies about ₹701 (+10% vs ₹638); trailing multiple embeds specialty recovery, leaving Neutral until ROCE clears twelve percent with Gajraula contributing.",
  },
  transcripts: [jublingreaFy25Mdna, jublingreaQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track specialty plus nutrition EBITDA share when investor deck publishes splits.",
    "Monitor Gajraula commissioning, CDMO utilisation, and borrowings each quarter on concalls.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 acetic anhydride tailwind proves one-off or pyridine weakens.",
  ],
};
