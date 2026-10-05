import type { DeepCompanyResearch } from "../../types";
import { buildPatPeScenario } from "../../valuation-math";
import { rallisFy25Mdna } from "../../transcripts/rallis-fy25-mdna";
import { rallisQ4Fy26 } from "../../transcripts/rallis-q4-fy26";

const SHARES_CRORE = 19.42;
const REF_PRICE = 200;
const REF_DATE = "2026-10-01";

const scenarios = [
  buildPatPeScenario({
    label: "bear",
    fiscalYear: "FY27E",
    patCrore: 155,
    sharesCrore: SHARES_CRORE,
    targetPe: 17,
    referencePrice: REF_PRICE,
    assumptions:
      "Below-normal monsoon and raw material inflation compress crop care OPM toward 10%; seeds growth slows; export B2B volumes weak; CFO stays below ₹150 crore; ROCE flat near 10%.",
  }),
  buildPatPeScenario({
    label: "base",
    fiscalYear: "FY27E",
    patCrore: 200,
    sharesCrore: SHARES_CRORE,
    targetPe: 21,
    referencePrice: REF_PRICE,
    assumptions:
      "Sales near ₹3,050 crore with EBITDA margin near 12%; crop care volume growth 4 to 5%; seeds mid-teens growth continues; net cash flows from operations near ₹200 crore; borrowings remain negligible.",
  }),
  buildPatPeScenario({
    label: "bull",
    fiscalYear: "FY27E",
    patCrore: 235,
    sharesCrore: SHARES_CRORE,
    targetPe: 24,
    referencePrice: REF_PRICE,
    assumptions:
      "Favourable kharif acreage and pricing pass-through lift EBITDA margin toward 13.5%; CSM and export B2B rebound; new launches ALSTOR and FIPLAM scale; ROCE re-expands above 14% with stable WC days.",
  }),
];

export const rallisDeepResearch: DeepCompanyResearch = {
  articleSlug: "rallis-midcap-memo",
  companyName: "Rallis India Ltd",
  nseSymbol: "RALLIS",
  bseCode: "500355",
  valueDrivers: [
    "Domestic crop care volume, price/mix, and channel reach across ~80% of India districts",
    "Seeds revenue growth (cotton, maize, in-licensed hybrids) and soil or plant health adjacency",
    "EBITDA margin and cost optimisation after FY26 record EBITDA ₹362 crore at 12.5%",
    "Contract manufacturing and export B2B (CSM) utilisation at RICH and technical sites",
    "Working capital, inventory days, and cash from operations versus PAT (FY26 net CFO ₹172 crore)",
    "Tata promoter alignment, almost debt-free balance sheet, and liquid reserves near ₹541 crore",
  ],
  sources: [
    {
      url: "https://www.screener.in/company/RALLIS/consolidated/",
      accessedAt: "2026-10-04",
      kind: "screener",
      note: "CMP ₹200, MCap ₹3,883 cr, consolidated P/E 24.6×, book ₹87.2/sh, ROCE 12.8%, promoter 55.08% Jun 2026.",
    },
    {
      url: "https://www.rallis.com/Upload/PDF/Annual-Report-2025-26.pdf",
      accessedAt: "2026-10-04",
      kind: "annual-report",
      note: "FY26 revenue ₹2,897 cr, PAT ₹184 cr, EBITDA ₹361 cr, EPS ₹9.46, cash from operations series.",
    },
    {
      url: "https://www.tatachemicals.com/media/newsroom/press-releases/in-fiscal-year-2025-26-rallis-india-limited-reports",
      accessedAt: "2026-10-04",
      kind: "investor-presentation",
      note: "Apr 2026 results release confirming 9% revenue growth and highest-ever EBITDA.",
    },
    {
      url: "https://www.bseindia.com/stock-share-price/rallis-india-ltd/rallis/500355/",
      accessedAt: "2026-10-04",
      kind: "exchange-filing",
      note: "Regulation 30 quarterly results, investor presentations, concall transcripts.",
    },
  ],
  financials: [
    {
      label: "Revenue from operations",
      unit: "₹ cr",
      periods: {
        FY24: 2463,
        FY25: 2663,
        FY26: 2897,
        "TTM Jun26": 2897,
      },
      comment: "FY24 revenue inferred from FY25 directors report base; FY26 per audited results.",
    },
    {
      label: "EBITDA",
      unit: "₹ cr",
      periods: {
        FY24: 250,
        FY25: 287,
        FY26: 362,
      },
      comment: "FY26 highest ever per management; margin 12.5% on revenue.",
    },
    {
      label: "Reported PAT",
      unit: "₹ cr",
      periods: {
        FY24: 113,
        FY25: 125,
        FY26: 184,
        "TTM Jun26": 184,
      },
      comment: "FY26 PAT up 47% YoY; exceptional items net ₹26 cr charge per directors report.",
    },
    {
      label: "EBITDA margin %",
      unit: "%",
      periods: {
        FY24: 10.1,
        FY25: 10.8,
        FY26: 12.5,
      },
    },
    {
      label: "Cash from operations (net)",
      unit: "₹ cr",
      periods: {
        FY24: 217,
        FY25: 295,
        FY26: 172,
      },
      comment: "FY26 lower after tax outflow ₹68 cr and inventory build for kharif coverage per call.",
    },
    {
      label: "Cash and liquid balances",
      unit: "₹ cr",
      periods: {
        "Mar FY26": 541,
      },
    },
    {
      label: "Borrowings",
      unit: "₹ cr",
      periods: {
        "Mar FY26": 93,
      },
      comment: "Screener pros cite almost debt free; borrowings modest versus liquid reserves.",
    },
    {
      label: "ROCE %",
      unit: "%",
      periods: {
        FY25: 11,
        "Mar FY26": 12.8,
      },
    },
    {
      label: "Book value per share",
      unit: "₹",
      periods: {
        "Oct 2026": 87.2,
      },
    },
  ],
  guidanceLog: [
    {
      period: "Revenue growth",
      promise: "Deliver mid-single-digit to high-single-digit consolidated revenue growth through crop care and seeds.",
      outcome: "FY26 revenue ₹2,897 cr (+9% YoY) with crop care ₹2,416 cr (+8%) and seeds ₹481 cr (+15%).",
      status: "met",
      commentary: "Volume-led growth despite price softness in parts of crop care.",
    },
    {
      period: "EBITDA margin",
      promise: "Expand margins via cost optimisation and mix shift toward higher-margin products.",
      outcome: "FY26 EBITDA ₹362 cr at 12.5% margin (+170 bps YoY per broker snapshot on results).",
      status: "beat",
      commentary: "Record EBITDA despite Q4 seasonally loss-making at PAT level.",
    },
    {
      period: "Seeds turnaround",
      promise: "Grow seeds portfolio through cotton, maize, and in-licensed hybrids.",
      outcome: "Seeds revenue ₹481 cr (+15% YoY) cited on FY26 concall.",
      status: "met",
      commentary: "Management expects cotton seed to lead FY27 growth if monsoon distribution holds.",
    },
    {
      period: "Working capital",
      promise: "Maintain discipline on receivables and inventory through digital demand tools.",
      outcome: "FY26 net CFO ₹172 cr vs ₹295 cr in FY25; inventory slightly elevated for kharif war coverage.",
      status: "partial",
      commentary: "Collections smooth per CFO; inventory days rose tactically ahead of input inflation.",
    },
    {
      period: "CSM / exports",
      promise: "Broaden contract manufacturing registrations and export customer base.",
      outcome: "CSM Q4 grew 59% YoY but full-year export line de-grew on Metribuzin and Pendimethalin volumes.",
      status: "partial",
      commentary: "Molecule-level volatility; registrations with global players continue per CEO remarks.",
    },
    {
      period: "Balance sheet",
      promise: "Operate with minimal leverage and strong liquidity.",
      outcome: "Liquid balances near ₹541 cr Mar FY26; borrowings below ₹100 cr on Screener snapshot.",
      status: "beat",
      commentary: "Balance sheet supports WC and selective inorganic options per CFO.",
    },
  ],
  valuation: {
    methodology:
      "Forward consolidated PAT × P/E (Tata-backed domestic agchem and seeds platform). Cross-check: FY26 EBITDA ₹362 cr at 11× EV/EBITDA less net cash near ₹450 cr implies enterprise equity near ₹3,550 cr or about ₹183 per share before any quality premium for seeds mix.",
    referencePrice: REF_PRICE,
    referenceDate: REF_DATE,
    sharesCrore: SHARES_CRORE,
    scenarios,
    crossCheck:
      "Base FY27 PAT ₹200 cr at 21× implies about ₹216 (+8% vs ₹200), below the 15% Buy hurdle; bull ~₹290 (+45%) needs margin hold plus export recovery.",
  },
  transcripts: [rallisFy25Mdna, rallisQ4Fy26],
  workflow: [
    "Refresh Screener after each quarterly result; update referencePrice and shares.",
    "Track crop care versus seeds revenue splits in investor presentations.",
    "Monitor inventory days and net CFO each quarter after kharif build.",
    "Replace curated concall quotes with BSE/NSE verbatim transcripts when uploaded.",
    "Recompute FY27E PAT if monsoon or raw material inflation guidance shifts on concalls.",
  ],
};
