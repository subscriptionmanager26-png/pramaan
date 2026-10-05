import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { epigralFy25Mdna } from "../../transcripts/epigral-fy25-mdna";
import { epigralQ1Fy27 } from "../../transcripts/epigral-q1-fy27";

/** ~4.31 crore shares (MCap ₹4,237 cr ÷ CMP ₹982 on Screener 2026-10-01). */
const SHARES_CRORE = 4.31;
const REF_PRICE = 982;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 220,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "Chloromethane spreads compress; OPM reverts toward eighteen percent; CWIP overruns delay ROCE recovery; market applies low-teens multiple on flat PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 280,
    sharesCrore: SHARES_CRORE,
    targetPe: 16,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹2,650 cr (+5% on TTM) with average OPM near twenty-two percent; PAT normalises below FY25 peak; borrowings stable near ₹570 cr; specialty mix above fifty-five percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 340,
    sharesCrore: SHARES_CRORE,
    targetPe: 18,
    referencePrice: REF_PRICE,
    assumptions:
      "CPVC and epichlorohydrin utilisation beat plan; OPM sustains mid-twenties; CWIP converts on schedule; ROCE recovers toward eighteen percent; market holds high-teens multiple.",
  }),
];

export const epigralDeepResearch: DeepCompanyResearch = {
  articleSlug: "epigral-midcap-memo",
  companyName: "Epigral Ltd",
  nseSymbol: "EPIGRAL",
  bseCode: "543332",
  valueDrivers: [
    "Chloromethanes, hydrogen peroxide, and CPVC volume, realisation, and utilisation",
    "Derivatives and specialty chemicals mix toward epichlorohydrin and chlorotoluene chain",
    "Operating profit margin versus caustic, chlorine, and energy costs on integrated Dahej assets",
    "Capex execution on CWIP near ₹451 cr and return on capital employed recovery toward high teens",
    "Debtor days, inventory days, and export collection timing on consolidated working capital",
    "Net cash from operations versus borrowings near ₹572 cr after FY25 deleveraging",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/EPIGRAL/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹982, MCap ₹4,237 cr, book ~₹515, ROCE 15.5%, 52w ₹806–1,760, ~4.31 cr shares, promoter 68.83%.",
    },
    {
      url: "https://www.epigral.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Investor materials on chlor-alkali integration, CMS, CPVC, and specialty derivatives.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/epigral-ltd/epigral/543332/",
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
        FY24: 1929,
        FY25: 2550,
        FY26: 2527,
        "TTM Jun26": 2626,
      },
      comment: "TTM +3% YoY; Jun 2026 quarter ₹705 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 481,
        FY25: 711,
        FY26: 566,
        "TTM Jun26": 582,
      },
      comment: "TTM OPM near twenty-two percent vs twenty-eight percent FY25 peak.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 196,
        FY25: 358,
        FY26: 332,
        "TTM Jun26": 271,
      },
      comment: "TTM PAT -24% YoY on weak Sep–Dec 2025 quarters; Q1 FY27 PAT ₹100 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 25,
        FY25: 28,
        FY26: 22,
        "TTM Jun26": 22,
      },
      comment: "Margin compressed as realisations normalised from FY25 peak.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 17,
        FY25: 25,
        FY26: 15,
      },
      comment: "ROCE trough on higher capital employed and softer H2 FY26 margins.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 398,
        FY25: 441,
        FY26: 436,
      },
      comment: "FY26 CFO/OP near ninety percent; FCF positive ₹50 cr on lower capex.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 964,
        FY25: 593,
        FY26: 572,
      },
      comment: "Leverage fell after FY25 prepayment; interest FY26 near ₹72 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 47.14,
        FY25: 82.91,
        FY26: 76.95,
        "TTM Jun26": 62.82,
      },
      comment: "Face value ₹10; trailing P/E near 15.6 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow revenue with specialty mix above fifty percent and stable chlor-alkali integration.",
      outcome: "Revenue ₹2,550 cr (+32% YoY); specialty mix crossed fifty percent.",
      status: "beat",
      commentary: "Volume and realisation recovery after FY24 correction.",
    },
    {
      period: "FY25 cash and leverage",
      promise: "Improve CFO and reduce borrowings after epichlorohydrin commissioning.",
      outcome: "Net CFO ₹441 cr; borrowings ₹593 cr (-38% YoY); FCF positive ₹254 cr.",
      status: "met",
      commentary: "Deleveraging validated before FY26 capex restart.",
    },
    {
      period: "FY26 revenue",
      promise: "Mid-single-digit growth with low-twenties OPM.",
      outcome: "Revenue ₹2,527 cr (flat YoY); OPM twenty-two percent; TTM ₹2,626 cr.",
      status: "partial",
      commentary: "Top line flat; margin below FY25 peak.",
    },
    {
      period: "FY26 ROCE",
      promise: "Sustain return on capital employed toward high teens.",
      outcome: "ROCE fifteen percent on softer H2 margins and higher CWIP.",
      status: "missed",
      commentary: "FY27 project ramp needed to restore mid-teens ROCE.",
    },
    {
      period: "FY27 outlook",
      promise: "Revenue ₹2,600–2,700 cr with low-twenties OPM and stable leverage.",
      outcome: "Q1 FY27 revenue ₹705 cr; PAT ₹100 cr; guide reiterated Jul 2026.",
      status: "pending",
      commentary: "Validate H2 margin and debtor days near sixty before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated Indian chlor-alkali and specialty chemical platform). Cross-check: TTM operating profit near ₹582 cr at 9× EV/EBITDA less net debt near ₹500 cr supports equity near ₹4,700 cr (~₹1,090/sh) only if margins re-expand; low-twenties OPM sustains base case.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹280 cr at 16× implies about ₹1,040 (+6% vs ₹982); trailing multiple embeds cyclical normalisation, leaving Neutral until ROCE clears mid-teens with CWIP converting.",
  },
  transcripts: [epigralFy25Mdna, epigralQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track specialty versus chlor-alkali mix when investor deck publishes splits.",
    "Monitor CWIP, project commissioning, and borrowings each quarter on concalls.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Jun 2026 margin proves one-off or chloromethane spreads weaken.",
  ],
};
