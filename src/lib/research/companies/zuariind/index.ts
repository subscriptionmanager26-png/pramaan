import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { zuariindFy25Mdna } from "../../transcripts/zuariind-fy25-mdna";
import { zuariindQ2Fy26 } from "../../transcripts/zuariind-q2-fy26";

const SHARES_CRORE = 3.0;
const REF_PRICE = 282;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 65,
    sharesCrore: SHARES_CRORE,
    targetPe: 7,
    referencePrice: REF_PRICE,
    assumptions:
      "Sugar margins compress; consolidated interest near ₹260 cr; Sep 2025 style other-income spikes do not repeat; Texmaco stakes mark down; holding company discount widens.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 92,
    sharesCrore: SHARES_CRORE,
    targetPe: 8.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Normalized consolidated PAT below TTM ₹106 cr after stripping one-offs; sugar and SPE contribute mid-single-digit OPM; dividend upstream from Chambal partial; borrowings flat near ₹2,650 cr.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 125,
    sharesCrore: SHARES_CRORE,
    targetPe: 10,
    referencePrice: REF_PRICE,
    assumptions:
      "Group integration accelerates with disclosed stake monetisation or special dividend; sugar and ethanol recover; quoted portfolio re-rates with fertilizer peers; interest coverage improves above 1.5× on consolidated OP.",
  }),
];

export const zuariindDeepResearch: DeepCompanyResearch = {
  articleSlug: "zuariind-midcap-memo",
  companyName: "Zuari Industries",
  nseSymbol: "ZUARIIND",
  bseCode: "500780",
  valueDrivers: [
    "Mark-to-market value of quoted strategic investments (Chambal, Zuari Agro Chemicals, Mangalore Chemicals, Texmaco Rail, Texmaco Infrastructure) versus Zuari Industries market cap",
    "Holding company discount and Adventz group restructuring (Paradeep, Mangalore Chemicals amalgamation, fertilizer platform alignment)",
    "Consolidated sugar, ethanol, and power economics at Zuari Sugar and bioenergy JVs versus seasonal inventory and crush volumes",
    "Consolidated borrowings, interest expense (~₹241 cr TTM), and NCD/refinancing capacity at holding level",
    "Dividend and other income from subsidiaries and associates versus recurring operating profit",
    "Promoter holding near 56.7% and real estate or SPE monetisation optionality",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/ZUARIIND/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹282, MCap ₹839 cr, consolidated book ₹1,196, investments ₹4,851 cr Mar FY26, borrowings ₹2,657 cr, TTM PAT ₹106 cr, 3.0 cr shares (face ₹10).",
    },
    {
      url: "https://www.bseindia.com/xml-data/corpfiling/AttachHis/f8621ffc-7526-484b-8174-75c280927067.pdf",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Q4 FY25 deck: quoted strategic investments ₹4,701 cr at 31 Mar 2025; Chambal stake ₹3,177 cr; Paradeep acquired via ZMPPL with OCP.",
    },
    {
      url: "https://www.screener.in/company/ZUARIIND/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "Standalone FY26 PAT ₹12 cr on revenue ₹874 cr; standalone investments ₹3,140 cr Mar FY26; borrowings ₹1,160 cr standalone.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 838,
        FY25: 970,
        FY26: 1045,
        "TTM Jun26": 1099,
      },
      comment: "FY24 to FY26 from Screener consolidated P&L; TTM lifted by sugar and trading seasonality.",
    },
    {
      label: "Operating profit (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 52,
        FY25: 50,
        FY26: 71,
        "TTM Jun26": 48,
      },
    },
    {
      label: "OPM % (consolidated)",
      unit: "%",
      periods: {
        FY24: 6.0,
        FY25: 5.0,
        FY26: 7.0,
        "TTM Jun26": 4.3,
      },
    },
    {
      label: "Other income (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 1041,
        FY25: 154,
        FY26: 324,
        "TTM Jun26": 346,
      },
      comment: "FY24 included exceptional treasury and investment gains; FY26 TTM other income still dominates headline PAT quality.",
    },
    {
      label: "Reported PAT (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 713,
        FY25: -94,
        FY26: 106,
        "TTM Jun26": 106,
      },
      comment: "FY24 PAT not repeatable; normalize FY27 toward ₹90 cr base excluding Sep 2025 PAT ₹164 cr on ₹225 cr other income.",
    },
    {
      label: "Interest expense (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 282,
        FY25: 262,
        FY26: 243,
        "TTM Jun26": 241,
      },
    },
    {
      label: "Borrowings (consolidated)",
      unit: "₹ cr",
      periods: {
        FY24: 2436,
        FY25: 2568,
        "Mar FY26": 2657,
      },
    },
    {
      label: "Quoted strategic investments (management table)",
      unit: "₹ cr",
      periods: {
        "Mar FY24": 3704,
        "Mar FY25": 4701,
        "Jun FY26": 3099,
      },
      comment: "Jun FY26 Screener machine note on market value of investments vs MCap ₹839 cr; Mar FY25 from Q4 FY25 investor deck.",
    },
    {
      label: "Book value per share (consolidated)",
      unit: "₹",
      periods: {
        "Oct 2026": 1196,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Strategic portfolio",
      promise: "Grow and protect quoted fertilizer and engineering stakes while monetising non-core assets.",
      outcome: "Quoted book value rose to ₹4,701 cr Mar FY25; stock still trades below sum-of-parts on Screener pros.",
      status: "partial",
      commentary: "Chambal mark-to-market drove FY25 increase; Texmaco Rail stake fell 18% in deck table.",
    },
    {
      period: "Paradeep platform",
      promise: "Integrate phosphatic capacity via ZMPPL and group restructuring.",
      outcome: "Paradeep listed and scaled; Mangalore amalgamation pending at Oct 2026 reference.",
      status: "partial",
      commentary: "Zuari Industries benefits via promoter chain, not consolidated Paradeep PAT.",
    },
    {
      period: "Sugar and bioenergy",
      promise: "Operate ethanol and cogeneration profitably through Zuari Sugar and ZEBPL.",
      outcome: "Consolidated inventory days above 400 on Screener; OPM volatile quarter to quarter.",
      status: "partial",
      commentary: "Cane crush and recovery rates not modeled line by line in this memo.",
    },
    {
      period: "Leverage",
      promise: "Refinance NCDs and seasonal lines without permanent leverage step-up.",
      outcome: "Borrowings ₹2,657 cr Mar FY26; interest coverage low on consolidated metrics.",
      status: "missed",
      commentary: "FY25 consolidated PAT negative ₹94 cr despite investment gains in prior year.",
    },
    {
      period: "Shareholder returns",
      promise: "Maintain modest dividend when cash permits.",
      outcome: "Dividend yield near 0.35% at reference price; payout ratio low in loss years.",
      status: "partial",
      commentary: "Special dividends depend on Chambal or stake sale proceeds.",
    },
    {
      period: "Holding company unlock",
      promise: "Reduce conglomerate discount through transparency and capital allocation.",
      outcome: "Public float near 41%; FII holding near 1.1% Jun 2026.",
      status: "pending",
      commentary: "No announced buyback at Oct 2026 reference on sources used.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Adventz holding company, investment portfolio and sugar overlay). Cross-check: quoted strategic investments near ₹3,099 cr Jun 2026 per Screener versus market cap ₹839 cr implies ~73% discount before debt; attributing 65% of Chambal stake value alone exceeds MCap, so equity value is sensitive to monetisation timing rather than FY27 sugar PAT alone.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹92 cr at 8.5× implies about ₹261 (-7% vs ₹282), below the 15% Buy hurdle; bull ~₹417 (+48%) needs credible stake monetisation or special dividend, not mark-to-market alone.",
  },
  transcripts: [zuariindFy25Mdna, zuariindQ2Fy26],
  workflow: [
    "Refresh Screener consolidated and standalone tables after each result; update referencePrice.",
    "Track Q4 FY25 and FY26 investor decks for quoted investment table and Chambal share count.",
    "Monitor BSE scheme documents for Mangalore Chemicals and Paradeep amalgamation.",
    "Replace curated concall quotes with BSE/NSE transcript PDFs when uploaded.",
    "Recompute FY27E normalized PAT stripping Sep 2025 and Dec 2023 style other-income spikes.",
  ],
};
