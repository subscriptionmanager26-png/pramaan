import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { bhagchemFy25Mdna } from "../../transcripts/bhagchem-fy25-mdna";
import { bhagchemQ1Fy27 } from "../../transcripts/bhagchem-q1-fy27";

const SHARES_CRORE = 13.0;
const REF_PRICE = 236;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 24,
    sharesCrore: SHARES_CRORE,
    targetPe: 16,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹580 crore with OPM near 10% after another inventory write-down; finance cost near ₹24 crore; net CFO below ₹30 crore; borrowings stay above ₹220 crore; ROCE near 4%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 38,
    sharesCrore: SHARES_CRORE,
    targetPe: 22,
    referencePrice: REF_PRICE,
    assumptions:
      "TTM revenue near ₹607 crore sustains with OPM near 12%; Q1 FY27 margin partly normalises to full year; interest near ₹20 crore; net CFO near ₹45 crore after FY26 trough; capex slows.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 52,
    sharesCrore: SHARES_CRORE,
    targetPe: 28,
    referencePrice: REF_PRICE,
    assumptions:
      "Export restocking and new technical lines lift revenue toward ₹680 crore with OPM near 14%; debtor days fall below 120; net CFO above ₹80 crore; ROCE re-tests 10% with borrowings flat.",
  }),
];

export const bhagchemDeepResearch: DeepCompanyResearch = {
  articleSlug: "bhagchem-midcap-memo",
  companyName: "Bhagiradha Chemicals & Industries Ltd",
  nseSymbol: "BHAGCHEM",
  bseCode: "531719",
  valueDrivers: [
    "Technical active ingredient capacity utilisation across thirty-two molecules and export formulation mix",
    "Operating profit margin through generic pricing, raw material pass-through, and plant loading at Hyderabad cluster",
    "Capex completion, fixed asset ramp, and depreciation plus interest on borrowings near ₹235 crore",
    "Debtor days, inventory days, and net cash from operations versus seasonal PAT swings",
    "Revenue growth from insecticide, fungicide, and herbicide portfolio versus customer concentration",
    "Return on capital employed recovery versus price-to-book near 4.4× and low promoter holding near 20%",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/BHAGCHEM/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹236, MCap ₹3,062 cr, book ~₹53.8/sh, ROCE 4.53%, 52w ₹170–317, ~13 cr shares.",
    },
    {
      url: "https://www.bhagirad.com/",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Product portfolio: insecticides, fungicides, herbicides, specialty intermediates.",
    },
    {
      url: "https://www.screener.in/company/BHAGCHEM/consolidated/",
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
        FY23: 502,
        FY24: 408,
        FY25: 440,
        FY26: 536,
        "TTM Jun26": 607,
      },
      comment: "FY24 trough on pricing; TTM +34% YoY per Screener compounded sales.",
    },
    {
      label: "Operating profit",
      unit: "₹ cr",
      periods: {
        FY23: 77,
        FY24: 43,
        FY25: 37,
        FY26: 57,
        "TTM Jun26": 79,
      },
      comment: "OPM recovered from 8% FY25 to 11% FY26 and 13% TTM.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY23: 45,
        FY24: 18,
        FY25: 14,
        FY26: 18,
        "TTM Jun26": 28,
      },
      comment: "TTM PAT +127% YoY per Screener; still below FY23 peak.",
    },
    {
      label: "OPM %",
      unit: "%",
      periods: {
        FY23: 15,
        FY24: 11,
        FY25: 8,
        FY26: 11,
        "Q1 FY27": 16,
      },
      comment: "Jun 2026 quarter OPM near 16% on Screener quarterly table.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY23: 22,
        FY24: 8,
        FY25: 5,
        FY26: 5,
      },
      comment: "Capex and higher capital base depressed returns despite margin recovery.",
    },
    {
      label: "Net cash from operations",
      unit: "₹ cr",
      periods: {
        FY23: 14,
        FY24: 34,
        FY25: -53,
        FY26: 12,
      },
      comment: "FY25 outflow on inventory and receivables; FY26 modest positive.",
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        FY24: 62,
        FY25: 89,
        FY26: 235,
      },
      comment: "Leverage rose with capex; TTM interest near ₹21 cr.",
    },
    {
      label: "EPS (reported)",
      unit: "₹",
      periods: {
        FY24: 1.75,
        FY25: 1.07,
        FY26: 1.4,
        "TTM Jun26": 2.12,
      },
      comment: "Face value ₹1; trailing P/E near 111 on ₹236 reference.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 margin",
      promise: "Stabilise operating profit margin after FY24 generic shock.",
      outcome: "OPM fell to 8% with PAT ₹14 cr; missed prior-year margin.",
      status: "missed",
      commentary: "Working capital build and pricing pressure outweighed volume.",
    },
    {
      period: "Capex commissioning",
      promise: "Complete multipurpose technical blocks and capitalise CWIP.",
      outcome: "Fixed assets ₹580 cr and CWIP ₹96 cr at Mar FY26; borrowings ₹235 cr.",
      status: "partial",
      commentary: "Assets on books; utilisation and ROCE still lag.",
    },
    {
      period: "Q1 FY27 recovery",
      promise: "Deliver stronger quarter on export and domestic mix.",
      outcome: "Jun 2026 revenue ₹195 cr with OPM 16% and PAT ₹13 cr on Screener.",
      status: "beat",
      commentary: "Early sign of margin recovery; must sustain through Mar quarter.",
    },
    {
      period: "Working capital",
      promise: "Improve collections and inventory turns.",
      outcome: "Debtor days 139 and inventory days 161 at FY26; CFO only ₹12 cr.",
      status: "partial",
      commentary: "Cycle still long versus FY23 levels near 94 debtor days.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Indian agrochemical technical manufacturer post-capex). Cross-check: TTM operating profit near ₹79 cr at 12× EV/EBITDA less net debt near ₹200 cr implies equity far below ₹236 unless PAT scales sharply.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹38 cr at 22× implies about ₹64 (-73% vs ₹236); trailing P/E near 111 prices a recovery our base does not fully capitalise at current quote.",
  },
  transcripts: [bhagchemFy25Mdna, bhagchemQ1Fy27],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track borrowings, finance cost, and CWIP capitalisation each quarter.",
    "Monitor debtor and inventory days versus CFO conversion.",
    "Replace curated call excerpts with BSE transcript PDF when re-filed.",
    "Recompute FY27E PAT if generic pricing or export mix shifts on results.",
  ],
};
