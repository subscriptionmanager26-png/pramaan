import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { archeanFy26Mdna } from "../../transcripts/archean-fy26-mdna";
import { archeanQ1Fy27 } from "../../transcripts/archean-q1-fy27";

/** ~12.35 crore shares (MCap ₹5,865 cr ÷ CMP ₹475 on Screener 2026-10-01). */
const SHARES_CRORE = 12.35;
const REF_PRICE = 475;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 85,
    sharesCrore: SHARES_CRORE,
    targetPe: 42,
    referencePrice: REF_PRICE,
    assumptions:
      "Bromine prices stay soft; OPM near eighteen percent; derivative ramp slips; market applies low-forties multiple on declining PAT.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 115,
    sharesCrore: SHARES_CRORE,
    targetPe: 50,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,150 cr (+3% on TTM) with average OPM near twenty-one percent; PAT recovers modestly from FY26 trough; borrowings stable near ₹470 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 145,
    sharesCrore: SHARES_CRORE,
    targetPe: 55,
    referencePrice: REF_PRICE,
    assumptions:
      "Bromine realisation rebound and derivative mix lift OPM above twenty-four percent; ROCE trends toward twelve percent; market holds low-fifties multiple on visible PAT recovery.",
  }),
];

export const archeanDeepResearch: DeepCompanyResearch = {
  articleSlug: "archean-midcap-memo",
  companyName: "Archean Chemical Industries Ltd",
  nseSymbol: "ACI",
  bseCode: "543657",
  valueDrivers: [
    "Bromine and industrial salt export volumes and realisations",
    "Operating profit margin on brine conversion and logistics costs",
    "Acume bromine derivatives utilisation and blended margin",
    "Sulphate of potash volumes and pricing in agriculture channels",
    "Borrowings and project finance for CWIP near ₹182 cr",
    "Net cash from operations versus inventory and treasury investment swings",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ACI/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹475, MCap ₹5,865 cr, book ~₹157, ROCE 7.41%, 52w ₹446–688, ~12.35 cr shares, promoter 53.43%.",
    },
    {
      url: "https://archeanchemicals.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Marine chemicals, brine reserves, and derivatives strategy.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/archean-chemical-industries-ltd/ACI/543657/",
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
        FY24: 1330,
        FY25: 1041,
        FY26: 1081,
        "TTM Jun26": 1116,
      },
      comment: "TTM flat YoY; Jun 2026 quarter ₹327 cr sales on Screener.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 463,
        FY25: 315,
        FY26: 239,
        "TTM Jun26": 228,
      },
      comment: "TTM OPM near twenty percent vs thirty percent FY25.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 319,
        FY25: 162,
        FY26: 105,
        "TTM Jun26": 96,
      },
      comment: "TTM PAT -49% YoY; Q1 FY27 PAT ₹30 cr.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 35,
        FY25: 30,
        FY26: 22,
        "TTM Jun26": 20,
      },
      comment: "Mar 2026 quarter OPM fifteen percent trough on Screener.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 25,
        FY25: 13,
        FY26: 7,
      },
      comment: "Screener consolidated ROCE 7.41% TTM; well below FY23 peak.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 379,
        FY25: 176,
        FY26: 140,
      },
      comment: "FY26 CFO positive but free cash flow negative ₹242 cr TTM.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 98,
        FY25: 235,
        FY26: 466,
      },
      comment: "Leverage rose with derivatives and expansion capex.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 25.85,
        FY25: 13.14,
        FY26: 8.66,
        "TTM Jun26": 7.85,
      },
      comment: "Face value ₹2; trailing P/E near 60.6 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Stabilise bromine and salt exports after FY24 normalisation.",
      outcome: "Revenue ₹1,041 cr (-22% YoY); PAT ₹162 cr (-49% YoY).",
      status: "missed",
      commentary: "Cycle correction sharper than guided on margins.",
    },
    {
      period: "FY26 revenue",
      promise: "Hold volumes while derivatives mix improves.",
      outcome: "Revenue ₹1,081 cr (+4% YoY); PAT ₹105 cr (-35% YoY).",
      status: "partial",
      commentary: "Top-line flat; profit still compressed.",
    },
    {
      period: "Derivatives utilisation",
      promise: "Ramp Acume bromine derivatives capacity.",
      outcome: "CWIP ₹182 cr Mar FY26; exact utilisation gated on Screener premium.",
      status: "pending",
      commentary: "Track quarterly derivative volume disclosures.",
    },
    {
      period: "FY27 margin recovery",
      promise: "Improve OPM from Mar 2026 trough.",
      outcome: "Q1 FY27 OPM twenty-one percent; full year pending.",
      status: "pending",
      commentary: "Base case assumes average OPM near twenty-one percent.",
    },
    {
      period: "Net debt discipline",
      promise: "Keep net debt to EBITDA below two times through FY27.",
      outcome: "Borrowings ₹466 cr Mar FY26 with PAT trough; ratio pending.",
      status: "pending",
      commentary: "Monitor each half-year credit rating update.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian marine bromine and salt exporter with derivatives optionality). Cross-check: TTM operating profit near ₹228 cr at 12× EV/EBITDA with net debt near ₹200 cr after treasury investments implies equity support between bear and base when margins stabilise.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹115 cr at 50× implies about ₹465 (-2% vs ₹475); trailing multiple near sixty-one times depressed earnings limits upside until PAT compounding resumes.",
  },
  transcripts: [archeanFy26Mdna, archeanQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track bromine and salt volume metrics when standalone insights publish.",
    "Monitor Acume derivatives revenue and utilisation each quarter.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if OPM falls below eighteen percent for two consecutive quarters.",
  ],
};
