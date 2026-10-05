import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { deepakfertFy25Mdna } from "../../transcripts/deepakfert-fy25-mdna";
import { deepakfertQ2Fy26 } from "../../transcripts/deepakfert-q2-fy26";

const SHARES_CRORE = 12.6;
const REF_PRICE = 1301;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 680,
    sharesCrore: SHARES_CRORE,
    targetPe: 13,
    referencePrice: REF_PRICE,
    assumptions:
      "IPA and bulk chemical spreads compress; TAN utilisation below 70%; interest on ₹5,670 cr borrowings stays elevated; Jun 2026 quarter margin spike proves non-recurring.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 1050,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹12,500 cr with OPM 15%; TAN and nitric acid utilisation 75 to 80%; CNB specialty mix stable; capex largely funded without further leverage spike; tax rate normalises near 25%.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 1280,
    sharesCrore: SHARES_CRORE,
    targetPe: 19,
    referencePrice: REF_PRICE,
    assumptions:
      "Dahej debottlenecking on time; mining capex cycle lifts TAN pricing; Croptek and Smartek grow high teens; bulk chemical spreads widen on tight IPA supply; CFO recovers above ₹1,200 cr.",
  }),
];

export const deepakfertDeepResearch: DeepCompanyResearch = {
  articleSlug: "deepakfert-midcap-memo",
  companyName: "Deepak Fertilisers and Petrochemicals Corporation",
  nseSymbol: "DEEPAKFERT",
  bseCode: "500645",
  valueDrivers: [
    "Technical ammonium nitrate and mining chemicals volume versus Dahej nameplate capacity",
    "Nitric acid and isopropyl alcohol spread versus ammonia and propylene input costs (bulk chemicals)",
    "CNB fertiliser tonnage (Smartek, Croptek, traded grades) and specialty share of crop nutrition revenue",
    "Mahadhan retail and agri-services penetration in Maharashtra and adjacent states",
    "Dahej and Taloja capex ramp (CWIP ₹3,053 cr Mar FY26) and post-commission utilisation",
    "Borrowings and interest cost on integrated chain working capital (fertiliser subsidy timing plus bulk inventory)",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/DEEPAKFERT/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹1,301, consolidated P&L, quarterly OPM, borrowings Mar FY26, share count, TTM metrics.",
    },
    {
      url: "https://www.dfpcl.com/investor-relations/annual-reports/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY25 segment narrative, capacity projects, Mahadhan strategy.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/deepak-fertilisers-and-petrochemicals-corporation-ltd/deepakfert/500645/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 investor presentations for Q2 FY26 and capex updates.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 8676,
        FY25: 10274,
        FY26: 11506,
        "TTM Jun26": 12104,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM includes Jun 2026 quarter revenue ₹3,256 cr.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY24: 1287,
        FY25: 1925,
        FY26: 1685,
        "TTM Jun26": 2016,
      },
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY24: 15,
        FY25: 19,
        FY26: 15,
        "TTM Jun26": 17,
      },
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 468,
        FY25: 945,
        FY26: 739,
        "TTM Jun26": 985,
      },
      comment: "FY24 PAT depressed versus FY23 peak ₹1,221 cr; Jun 2026 quarter PAT ₹490 cr on Screener.",
    },
    {
      label: "Cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 493,
        FY24: 732,
        FY25: 1880,
        FY26: 206,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 4149,
        FY25: 4152,
        "Mar FY26": 5670,
      },
      comment: "Step-up Mar FY26 reflects capex and working capital; interest FY26 near ₹353 cr.",
    },
    {
      label: "Capital work in progress",
      unit: "₹ cr",
      periods: {
        FY24: 754,
        FY25: 1408,
        "Mar FY26": 3053,
      },
    },
    {
      label: "Fixed assets",
      unit: "₹ cr",
      periods: {
        FY24: 6258,
        FY25: 6292,
        "Mar FY26": 6151,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 542,
      },
    },
  ],
  guidanceLog: [
    {
      period: "FY25 operating margin",
      promise: "Sustain double-digit OPM across integrated segments after FY23 peak normalisation.",
      outcome: "FY25 OPM reached 19% on Screener before FY26 moderated to 15%.",
      status: "partial",
      commentary: "Bulk chemical and fertiliser mix drove FY25 beat; FY26 integration costs and interest weighed.",
    },
    {
      period: "Dahej capacity expansion",
      promise: "Commission debottlenecking and downstream units to lift TAN and acid chain output.",
      outcome: "CWIP rose to ₹3,053 cr Mar FY26; fixed assets stable near ₹6,151 cr.",
      status: "pending",
      commentary: "FY27 volume and depreciation step-up depend on mechanical completion dates in section 18 gap list.",
    },
    {
      period: "TAN volume recovery",
      promise: "Align mining chemicals output with domestic explosive demand as capex cycles improve.",
      outcome: "Management cited improved utilisation on Q2 FY26 call excerpts curated in dossier.",
      status: "met",
      commentary: "Pricing and volume KMT not disclosed in free Screener insights; segment PBIT gap remains.",
    },
    {
      period: "Mahadhan specialty nutrition",
      promise: "Grow Croptek and Smartek faster than traded fertiliser grades.",
      outcome: "CNB revenue grew with FY26 sales ₹11,506 cr consolidated.",
      status: "partial",
      commentary: "Specialty share of CNB revenue requires premium Screener insights or AR segment note.",
    },
    {
      period: "FY26 cash generation",
      promise: "Convert FY25 earnings into CFO after inventory normalisation.",
      outcome: "CFO collapsed to ₹206 cr in FY26 despite ₹1,685 cr operating profit.",
      status: "missed",
      commentary: "Working capital and capex absorbed cash; free cash flow negative ₹1,363 cr on Screener.",
    },
    {
      period: "Jun 2026 quarter margin",
      promise: "Seasonal fertiliser and bulk chemical mix drives quarterly volatility.",
      outcome: "Jun 2026 OPM 26% with PAT ₹490 cr on Screener.",
      status: "beat",
      commentary: "Investors must judge how much is sustainable versus one-quarter product mix.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (integrated chemicals and crop nutrition, capex and leverage cycle). Cross-check: TTM OP near ₹2,016 cr at 10× EV/EBITDA implies enterprise value near ₹20,160 cr; less net debt Mar FY26 near ₹5,670 cr yields equity near ₹14,490 cr or ₹1,150 per share, below CMP, so the market pays for FY27 utilisation and Jun 2026 earnings power.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹1,050 cr at 17× implies about ₹1,415 (+9% vs ₹1,301), below the 15% Buy hurdle; bull ~₹1,930 (+48%) needs TAN spreads and capex ramp together.",
  },
  transcripts: [deepakfertFy25Mdna, deepakfertQ2Fy26],
  workflow: [
    "Refresh Screener quarterly tables after each result; update referencePrice and shares.",
    "Track Dahej/Taloja commissioning in exchange presentations and CWIP roll-forward.",
    "Monitor TAN and IPA volume or realisation disclosures when investor decks publish KMT data.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E PAT using explicit OPM %, interest on borrowings, and normalised tax rate.",
  ],
};
