import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { indofilFy25Mdna } from "../../transcripts/indofil-fy25-mdna";
import { indofilH1Fy26 } from "../../transcripts/indofil-h1-fy26";

/** ~22.96 million shares per OTC dealer disclosures (Oct 2026). */
const SHARES_CRORE = 2.296;
/** Indicative unlisted OTC reference; not an exchange last traded price. */
const REF_PRICE = 1475;
const REF_DATE = "2026-10-02";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 380,
    sharesCrore: SHARES_CRORE,
    targetPe: 6.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Mancozeb realisations soften; OPM toward 9%; specialty chemicals flat; export LC delays widen working capital; OTC market applies deeper illiquidity discount.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 480,
    sharesCrore: SHARES_CRORE,
    targetPe: 7.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Revenue near ₹4,750 crore with OPM near 11%; Dahej utilisation stable; net CFO near ₹420 crore; balance sheet leverage unchanged; unlisted P/E near listed midcap agchem discount.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 560,
    sharesCrore: SHARES_CRORE,
    targetPe: 8.5,
    referencePrice: REF_PRICE,
    assumptions:
      "Export fungicide volumes accelerate; specialty chemicals mix rises; OPM toward 12.5%; IPO sentiment lifts OTC multiples; ROE re-tests double digits with stable dividend payout.",
  }),
];

export const indofilDeepResearch: DeepCompanyResearch = {
  articleSlug: "indofil-midcap-memo",
  companyName: "Indofil Industries Ltd",
  nseSymbol: "INDOFIL",
  bseCode: "UNLISTED",
  valueDrivers: [
    "Mancozeb and fungicide export volume, realisation, and Dahej capacity utilisation",
    "Domestic crop protection formulations and dealer reach under K. K. Modi Group",
    "Specialty and performance chemicals mix (leather, coatings, plastics, textiles)",
    "Operating profit margin through raw material pass-through and plant automation",
    "Working capital, export LC cycles, and cash from operations versus PAT",
    "Unlisted OTC liquidity, book value per share, and potential IPO re-rating optionality",
  ],
  sources: [
    {
      url: "https://buyunlistedshares.com/unlisted-shares/indofil-industries-limited",
      accessedAt: "2026-10-04",
      kind: "news",
      note: "Indicative OTC price ₹1,475 (2 Oct 2026), MCap ~₹3,203 cr, P/E ~7.1, book ~₹2,831/sh, ROE ~7%; secondary dealer snapshot, not exchange data.",
    },
    {
      url: "https://www.indofil.com/",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "Business divisions, Dahej/Thane sites, 120+ country presence, mancozeb leadership claim.",
    },
    {
      url: "https://www.transparentcapital.co.in/company_report.php?id=18",
      accessedAt: "2026-10-04",
      kind: "news",
      note: "ISIN INE071I01016, ~22.96 mn shares, scrip name INDOFIL; OTC reference cross-check.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations (estimated)",
      unit: "₹ cr",
      periods: {
        FY24: 4320,
        FY25: 4480,
        FY26: 4620,
      },
      comment: "Estimated from PAT margin and OTC dealer revenue hints; replace with audited figures when DRHP or annual report ingested.",
    },
    {
      label: "Operating profit (estimated)",
      unit: "₹ cr",
      periods: {
        FY24: 475,
        FY25: 492,
        FY26: 508,
      },
      comment: "Implied OPM near 11% on estimated revenue; aligns with integrated agchem plus specialty blend.",
    },
    {
      label: "Reported PAT (estimated)",
      unit: "₹ cr",
      periods: {
        FY24: 410,
        FY25: 435,
        FY26: 452,
      },
      comment: "FY26 PAT implied from OTC P/E ~7.1 on ~₹3,203 cr MCap at ₹1,475 reference.",
    },
    {
      label: "OPM % (estimated)",
      unit: "%",
      periods: {
        FY24: 11.0,
        FY25: 11.0,
        FY26: 11.0,
      },
      comment: "Stable low-double-digit margin assumption pending audited segment breakup.",
    },
    {
      label: "Book value per share (dealer snapshot)",
      unit: "₹/sh",
      periods: {
        FY26: 2831,
      },
      comment: "OTC dealer table Oct 2026; shares trade at large discount to stated book.",
    },
    {
      label: "Return on equity (dealer snapshot)",
      unit: "%",
      periods: {
        FY26: 7.0,
      },
      comment: "Modest ROE versus listed agchem peers; reflects asset-heavy Dahej base and unlisted discount.",
    },
  ],
  guidanceLog: [
    {
      period: "FY25 export normalisation",
      promise: "Crop protection growth as export channels restock after prior destocking.",
      outcome: "Estimated mid-single-digit revenue growth with stable mancozeb utilisation.",
      status: "partial",
      commentary: "H1 FY26 commentary cited improved export offtake; exact audited numbers not in free exchange filings.",
    },
    {
      period: "Specialty chemicals diversification",
      promise: "Expand performance chemicals to reduce sole dependence on agrochemical cycles.",
      outcome: "Modest H1 FY26 growth in leather and textile lines per curated update.",
      status: "partial",
      commentary: "Mix shift is strategic but segment revenue not disclosed in sources used.",
    },
    {
      period: "Public listing",
      promise: "Market speculation on IPO timing; no DRHP filed as of Oct 2026 dealer notes.",
      outcome: "Company remains unlisted; OTC prices set by private market liquidity.",
      status: "pending",
      commentary: "Valuation must treat reference price as indicative OTC, not NSE/BSE CMP.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E on unlisted OTC reference, with book-value cross-check (dealer book ~₹2,831/sh vs ₹1,475 reference implies ~0.52× price-to-book). Illiquidity and absent public float warrant discount to listed Sumitomo/Sharda multiples.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹480 cr at 7.5× implies ~₹1,567 (+6% vs ₹1,475 OTC reference), below 15% Buy hurdle; bull ~₹2,071 (+40%) requires PAT upgrade and multiple expansion.",
  },
  transcripts: [indofilFy25Mdna, indofilH1Fy26],
  workflow: [
    "Replace estimated financials with audited annual report or DRHP tables when published.",
    "Refresh OTC reference price from dated dealer snapshots; never treat as exchange CMP.",
    "Track mancozeb global pricing and Dahej utilisation commentary each half year.",
    "Monitor IPO/DRHP filings on SEBI and group press releases.",
    "Recompute FY27E PAT if specialty chemicals mix disclosure improves.",
  ],
};
