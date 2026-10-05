import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { bhageriaFy26Mdna } from "../../transcripts/bhageria-fy26-mdna";
import { bhageriaQ1Fy27 } from "../../transcripts/bhageria-q1-fy27";

/** ~4.37 crore shares (equity capital ₹22 cr, face value ₹5). */
const SHARES_CRORE = 4.37;
const REF_PRICE = 382;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 55,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue growth slows toward ₹950 crore; OPM retreats to 9% on dye intermediate pricing; solar EPC billing pauses; borrowings stay above ₹100 crore; market applies mid-cycle multiple.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 84,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,050 crore with OPM near 12%; PAT normalises after FY26 other-income volatility; net CFO near ₹90 crore; ROCE near 10%; multiple in line with specialty chemicals peers.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 98,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Agchem formulation mix rises; OPM sustains mid-teens in H1 FY27; solar captive and EPC margins hold; CWIP converts without debt spike; re-rating toward upper-teens ROCE.",
  }),
];

export const bhageriaDeepResearch: DeepCompanyResearch = {
  articleSlug: "bhageria-midcap-memo",
  companyName: "Bhageria Industries Ltd",
  nseSymbol: "BHAGERIA",
  bseCode: "530661",
  valueDrivers: [
    "Dyes and dye-intermediate volume, realisation, and Tarapur plant utilisation",
    "Agrochemical formulation and technical mix versus legacy dye revenue",
    "Operating profit margin through raw material pass-through and product mix",
    "Solar power generation, captive use, and third-party EPC contract billing",
    "Working capital (debtor days, inventory days) and net cash from operations versus PAT",
    "Capex, capital work in progress, and borrowings after FY26 expansion phase",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/BHAGERIA/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹382, MCap ₹1,667 cr, book ~₹137/sh, ROCE 9.41%, 52w ₹128–425, ~4.37 cr shares.",
    },
    {
      url: "https://www.bhageria.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "ISO-certified dyes, intermediates, agrochemicals, and solar power generation and EPC.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/bhageria-industries-ltd/bhageria/530661/",
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
        FY23: 501,
        FY24: 494,
        FY25: 595,
        FY26: 874,
        "TTM Jun26": 1003,
      },
      comment: "TTM sales growth 57% on Screener; FY26 rebound after FY24 margin trough.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 54,
        FY24: 44,
        FY25: 81,
        FY26: 91,
        "TTM Jun26": 116,
      },
      comment: "TTM operating profit lifted by H2 FY26 and Q1 FY27 run-rate.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 15,
        FY24: 19,
        FY25: 39,
        FY26: 44,
        "TTM Jun26": 68,
      },
      comment: "TTM PAT boosted by strong Jun 2026 quarter and other income.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 11,
        FY24: 9,
        FY25: 14,
        FY26: 10,
        "TTM Jun26": 12,
      },
      comment: "Q1 FY27 quarterly OPM near 15% on Screener table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 5,
        FY25: 8,
        FY26: 9,
      },
      comment: "Recovering but still below FY21 peaks; capex-heavy phase.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 23,
        FY25: 49,
        FY26: 99,
      },
      comment: "CFO/OP near 128% FY26; working capital days improved to 59.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 47,
        FY25: 46,
        FY26: 109,
      },
      comment: "Gross debt rose with CWIP near ₹117 cr Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 4.37,
        FY25: 9.26,
        FY26: 10.56,
        "TTM Jun26": 15.79,
      },
      comment: "Face value ₹5; trailing P/E near 24 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY26 scale-up",
      promise: "Grow revenue and restore margin after FY24 softness.",
      outcome: "Revenue ₹874 cr (+47% YoY); OPM 10%; PAT ₹44 cr.",
      status: "beat",
      commentary: "Top-line beat; full-year margin still below FY25 peak.",
    },
    {
      period: "Working capital",
      promise: "Improve debtor days and cash conversion cycle.",
      outcome: "Debtor days 66 Mar FY26; working capital days 59.",
      status: "beat",
      commentary: "CFO ₹99 cr supports capex funding.",
    },
    {
      period: "Capex discipline",
      promise: "Fund expansion without stressing balance sheet.",
      outcome: "Borrowings ₹109 cr; CWIP ₹117 cr; free cash flow negative FY26.",
      status: "partial",
      commentary: "Leverage up but still modest versus equity base.",
    },
    {
      period: "Q1 FY27 margin",
      promise: "Sustain higher quarterly run-rate.",
      outcome: "Jun 2026 revenue ₹286 cr; OPM 15%; PAT ₹34 cr.",
      status: "beat",
      commentary: "Validate through Sep and Dec 2026 quarters before raising base PAT.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian specialty chemicals and agchem manufacturer with solar adjacency). Cross-check: TTM operating profit near ₹116 cr at 9× EV/EBITDA less net debt near ₹85 cr implies equity near ₹1,159 cr (~₹265/sh), below ₹382 reference unless margin sustains mid-teens.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹84 cr at 22× implies about ₹423 (+11% vs ₹382); EV/EBITDA cross-check caps upside if OPM mean-reverts to 10%.",
  },
  transcripts: [bhageriaFy26Mdna, bhageriaQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track dyes versus agrochemical versus solar revenue mix when annual report publishes segment note.",
    "Monitor CWIP commissioning and borrowings each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if Q1 FY27 margin proves seasonal or one-off other income fades.",
  ],
};
