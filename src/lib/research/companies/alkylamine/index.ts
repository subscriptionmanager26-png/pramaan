import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { alkylamineFy25Mdna } from "../../transcripts/alkylamine-fy25-mdna";
import { alkylamineQ1Fy27 } from "../../transcripts/alkylamine-q1-fy27";

/** ~5.12 crore shares (MCap ₹10,216 cr ÷ CMP ₹1,997 on Screener 2026-10-01). */
const SHARES_CRORE = 5.12;
const REF_PRICE = 1997;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 155,
    sharesCrore: SHARES_CRORE,
    targetPe: 36,
    referencePrice: REF_PRICE,
    assumptions:
      "Ammonia disruption persists; acetonitrile utilisation stuck near sixty percent; OPM reverts toward seventeen percent; market applies mid-thirties multiple on flat earnings.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 210,
    sharesCrore: SHARES_CRORE,
    targetPe: 46,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹1,660 cr (+8% on FY26) with average OPM near nineteen percent; acetonitrile utilisation toward seventy-five percent; net cash balance sheet; ROCE near fifteen percent.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 245,
    sharesCrore: SHARES_CRORE,
    targetPe: 50,
    referencePrice: REF_PRICE,
    assumptions:
      "Import substitution on acetonitrile and firm pharma amine pricing lift OPM toward twenty-one percent; volume growth near ten percent; dividend payout rises; market holds low-fifties multiple.",
  }),
];

export const alkylamineDeepResearch: DeepCompanyResearch = {
  articleSlug: "alkylamine-midcap-memo",
  companyName: "Alkyl Amines Chemicals Ltd",
  nseSymbol: "ALKYLAMINE",
  bseCode: "506767",
  valueDrivers: [
    "Aliphatic amine and derivative volumes across pharma, agrochemical, and rubber end markets",
    "Ammonia and methanol input costs and pass-through on methylamine chains",
    "Acetonitrile plant utilisation and import-substitution economics after ADD",
    "Operating profit margin on integrated Patalganga and Kurkumbh assets",
    "Net cash from operations versus inventory and debtor days through ammonia shocks",
    "Return on capital employed on debottlenecking capex without leverage",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ALKYLAMINE/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,997, MCap ₹10,216 cr, book ~₹238, ROCE 13.8%, 52w ₹1,212–2,128, ~5.12 cr shares, promoter 46.2%.",
    },
    {
      url: "https://alkylamines.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Product portfolio: aliphatic amines, derivatives, acetonitrile, specialty solvents.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/alkyl-amines-chemicals-ltd/alkylamine/506767/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Audited FY26 results and May 2026 earnings call transcript on BSE.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 1482,
        FY25: 1572,
        FY26: 1536,
        "TTM Jun26": 1540,
      },
      comment: "FY26 flat YoY; Q4 FY26 revenue near ₹398 cr on exchange filing tables.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 285,
        FY25: 310,
        FY26: 295,
        "TTM Jun26": 298,
      },
      comment: "TTM OPM near nineteen percent; ammonia shock weighed H1 FY26.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 175,
        FY25: 186,
        FY26: 180,
        "TTM Jun26": 181,
      },
      comment: "FY26 PAT -3% YoY per audited results; EPS near ₹35.2.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 19,
        FY25: 20,
        FY26: 19,
        "TTM Jun26": 19,
      },
      comment: "Management targets high teens to twenty percent through-cycle.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY24: 16,
        FY25: 17,
        FY26: 14,
      },
      comment: "Screener consolidated ROCE 13.8% TTM after capex and flat PAT.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY24: 245,
        FY25: 210,
        FY26: 225,
      },
      comment: "Positive CFO each year; FY26 CFO to OPM near seventy-six percent.",
    },
    {
      label: "Borrowings (net debt)",
      unit: "₹ cr",
      periods: {
        FY24: -85,
        FY25: -62,
        FY26: -40,
      },
      comment: "Net cash position on consolidated balance sheet Mar FY26.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 34.2,
        FY25: 36.3,
        FY26: 35.2,
        "TTM Jun26": 35.4,
      },
      comment: "Face value ₹2; trailing P/E near 45 on TTM EPS.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 revenue",
      promise: "Grow volumes with stable amine spreads.",
      outcome: "Revenue ₹1,572 cr (+6% YoY); PAT ₹186 cr (+6% YoY).",
      status: "met",
      commentary: "Top line met; margin held near twenty percent OPM.",
    },
    {
      period: "FY26 revenue",
      promise: "Mid-single-digit volume growth with margin stability.",
      outcome: "Revenue ₹1,536 cr (-2% YoY); PAT ₹180 cr (-3% YoY).",
      status: "missed",
      commentary: "Ammonia disruption offset volume efforts; flat year per May 2026 call.",
    },
    {
      period: "Acetonitrile utilisation",
      promise: "Ramp toward eighty percent utilisation as import parity improves.",
      outcome: "Utilisation near sixty to sixty-five percent through FY26.",
      status: "partial",
      commentary: "ADD support helps; restart of ammonia chains gradual post Apr 2026.",
    },
    {
      period: "FY27 volume",
      promise: "Five to ten percent volume growth if ammonia normalises.",
      outcome: "Reiterated on Q4 FY26 call; not yet in reported FY27 totals.",
      status: "pending",
      commentary: "Track quarterly sales versus ₹398 cr Q4 FY26 base.",
    },
    {
      period: "Capex discipline",
      promise: "Fund debottlenecking from internal accruals without leverage.",
      outcome: "Net cash Mar FY26; capex near ₹120 cr FY26 on cash flow statement.",
      status: "met",
      commentary: "Balance sheet remains a moat versus leveraged specialty peers.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian integrated amines leader with net cash). Cross-check: TTM operating profit near ₹298 cr at 14× EV/EBITDA with net cash near ₹40 cr supports equity between bear and base when OPM holds high teens.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹210 cr at 46× implies about ₹1,887 (-5% vs ₹1,997); trailing multiple embeds quality balance sheet while flat FY26 earnings cap near-term upside.",
  },
  transcripts: [alkylamineFy25Mdna, alkylamineQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track acetonitrile utilisation and ammonia restart commentary each concall.",
    "Monitor ADD and import parity on acetonitrile quarterly.",
    "Replace curated call excerpts with full BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if OPM falls below seventeen percent for two quarters.",
  ],
};
