import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const indofilMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Indofil Industries Ltd (ISIN INE071I01016) is an unlisted, promoter-led Indian integrated chemical company under the K. K. Modi Group, manufacturing crop protection and specialty performance chemicals from Dahej and Thane. The scrip name INDOFIL appears in OTC dealer databases; there is no NSE or BSE listing as of October 2026, so there is no exchange last traded price. We use an indicative unlisted reference of ₹1,475 per share dated 2 October 2026 from secondary OTC dealer snapshots cited in our dossier, not as investment advice on private-market execution. On about 2.296 crore shares, that reference implies market capitalisation near ₹3,203 crore. Dealer tables cite book value near ₹2,831 per share and return on equity near 7%, so the OTC quote sits near 0.52 times stated book with a trailing price-to-earnings near 7.1 on estimated FY26 earnings. Liquidity, lot sizes, and counterparty risk in the unlisted market are material differences versus listed peers such as Sumitomo Chemical India or Sharda Cropchem.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Indofil earns by selling mancozeb-based fungicides and other agrochemical formulations to export customers and domestic channels, plus specialty chemicals into leather, coatings, plastics, and textiles. Revenue is recognised on dispatch; export contracts often run on letters of credit and longer receivable cycles than domestic dealer sales. Dahej provides integrated technical and formulation scale, while Thane supports administrative and research functions per company materials. Payment quality depends on global crop prices, distributor inventory, and end-industry demand in specialty segments. Because the company is unlisted, there is no daily price discovery: OTC prints can lag operational news by weeks and vary across dealers.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Indofil built a global mancozeb franchise over decades, expanding Dahej into a multi-product, automation-focused site with ISO certifications cited on the corporate website. Estimated consolidated revenue moved from about ₹4,320 crore in FY24 to ₹4,480 crore in FY25 and ₹4,620 crore in FY26 in our working model, which we derived from margin hints and OTC valuation math until audited public filings are ingested. Estimated profit after tax rose from about ₹410 crore to ₹452 crore over the same span, implying stable low-double-digit operating profit margins near 11%. The stock narrative in private markets is slower than listed agchem re-ratings: dealer snapshots show a 52-week OTC range roughly ₹1,375 to ₹1,925 versus our ₹1,475 reference, reflecting illiquidity more than quarterly earnings volatility alone.",
  },
  seriesChart(
    "Estimated revenue (₹ crore, model until DRHP)",
    "Conclusion: Mid-single-digit growth; replace with audited figures.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [4320, 4480, 4620], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Export formulators and distributors across more than one hundred twenty countries absorb a large share of fungicide volumes per company positioning, which spreads geographic risk but can concentrate molecule exposure to mancozeb pricing cycles. Domestic farmers reach Indofil through dealer networks tied to the group agrochemical franchise. Specialty chemicals customers in leather and textiles are fewer but cyclical on export orders and infrastructure-linked coatings demand. Private-market shareholders include employees, promoters, and OTC investors with minimum lots often near ten to seventeen shares on dealer platforms, which keeps free float illiquid compared with listed midcaps. Customer concentration at the top-buyer level is not disclosed in the free sources used here.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Agricultural chemicals centre on mancozeb and related fungicides, with formulations and technical supply integrated at Dahej. Specialty and performance chemicals serve leather, coatings, plastics, and textiles, providing partial diversification away from pure crop cycles. Management commentary in our curated H1 FY26 excerpts cites mancozeb utilisation above eighty percent in strong months and modest specialty growth when leather customers restock. The strategic intent is Customer Proximity: R&D-led product extensions and global partnerships rather than commodity-only expansion. Without audited segment revenue in our sources, we treat mix stability as an assumption to verify when a DRHP or annual report publishes segment tables.",
  },
  seriesChart(
    "Estimated PAT (₹ crore, model)",
    "Conclusion: Gradual PAT growth on stable OPM.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [410, 435, 452], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Estimated OPM % (consolidated model)",
    "Conclusion: Near 11% across estimated years.",
    ["FY24", "FY25", "FY26"],
    [{ name: "OPM %", values: [11.0, 11.0, 11.0], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Because Indofil trades OTC, price moves follow private-market liquidity, IPO speculation, and block deals as much as quarterly earnings. Global mancozeb and generic fungicide prices, China supply, and Latin America channel inventory drive export realisations. Rupee versus dollar affects export competitiveness and import parity on intermediates. Listed agchem peer multiples (Sumitomo Chemical India, Coromandel, Sharda Cropchem) set a mental anchor even though Indofil cannot be arbitraged against NSE. Regulatory changes on pesticide registrations affect export timelines. Any DRHP filing or group restructuring headline can re-rate OTC prints before audited numbers reach all holders.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Our estimated operating profit near ₹508 crore in FY26 on ₹4,620 crore revenue keeps OPM near 11%, below high-ROCE listed formulation names but acceptable for an integrated export-heavy platform. Dealer snapshots show ROE near 7% and book value near ₹2,831 per share, implying assets earn modest returns relative to stated net worth. We do not have exchange-filed quarterly P&L tables; investors relying on OTC data should demand audited annual reports directly from the company or depository statements. Depreciation on Dahej expansions and working capital for export LC are the main bridges between operating profit and cash, similar to listed integrated agchem names but harder to verify without public filings.",
  },
  seriesChart(
    "Operating profit vs estimated PAT (₹ crore)",
    "Conclusion: Tax and below-the-line items modest in model.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [475, 492, 508], color: "#1e3a5f" },
      { name: "PAT", values: [410, 435, 452], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Curated H1 FY26 commentary asserts positive net cash from operating activities despite seasonal inventory ahead of export shipments, but we lack published cash-flow statements in the free sources used. Export-heavy agchem models typically run CFO at 70% to 90% of operating profit when receivable days stay controlled; we assume net CFO near ₹400 crore in FY26 in our working notes until audited cash flows arrive. Free cash flow after Dahej maintenance capex is the key unknown: integrated sites can consume capital even when PAT grows. OTC investors should treat cash conversion as a due-diligence item, not something dealer price tables capture.",
  },
  seriesChart(
    "OTC reference vs book value per share (₹, dealer snapshots)",
    "Conclusion: Quote near half of stated book; verify book with audited accounts.",
    ["OTC ref (Oct 26)", "Book value (dealer)"],
    [{ name: "₹/sh", values: [1475, 2831], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Return on equity % (dealer snapshot, FY26)",
    "Conclusion: ROE near 7% supports value, not growth, framing.",
    ["FY26 ROE"],
    [{ name: "ROE %", values: [7.0], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Integrated chemical assets at Dahej create fixed-cost leverage if utilisation falls below breakeven for mancozeb trains. Export LC delays or customer defaults would stress working capital though group backing under K. K. Modi may ease refinancing. Environmental compliance and safety at multi-product sites are ongoing liabilities typical of Indian chemical majors. Because financial statements are not on Screener, leverage ratios in our model are placeholders: investors need latest audited borrowings and contingent liabilities before sizing distress risk. A failed or delayed IPO does not by itself break operations, but it can compress OTC multiples and trap shareholders needing liquidity.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Indofil operates under the K. K. Modi Group with long-tenured industrial ownership rather than public-market quarterly pressure. Management emphasises R&D, automation, and global registrations in corporate materials, which aligns with multi-decade chemical franchises. Unlisted employees and insiders may hold stock with different liquidity needs than external OTC buyers, creating potential misalignment on dividend versus reinvestment. Without a public market float, governance relies on board oversight and group policies rather than activist investors. Incentive alignment looks adequate for stability but opaque for minority OTC purchasers who cannot easily verify executive compensation or related-party transactions without audited reports.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 messaging pointed to export channel normalisation after destocking; our estimated revenue growth and stable mancozeb utilisation in H1 FY26 commentary suggest partial delivery, pending audited proof. Specialty chemicals diversification was promised as a buffer to ag cycles; curated updates cite modest growth but no segment percentages. IPO expectations circulate in dealer notes, yet DRHP status remained not filed in October 2026 snapshots, so listing timing is still pending. Dividend yield near 0.7% in dealer tables hints at modest cash return while the stock trades below stated book. Promises to OTC buyers should be validated against signed annual reports, not dealer marketing pages alone.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Export fungicide volume as Latin America and Asia restock after weak years is the first lever. Second is Dahej utilisation and cost per tonne on mancozeb and allied molecules. Third is specialty chemicals share as leather, textile, and coatings customers expand orders. Fourth is new registrations and formulations in crop protection without proportional capex. Fifth is a potential public listing that could improve liquidity and re-rate multiples toward listed peers. Growth does not require equity dilution in our base case, but capex at Dahej may still absorb cash if export prices soften.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Global fungicide prices firm while Indofil keeps mancozeb share; OPM expands toward 12.5% on ₹4,900 crore revenue. Specialty chemicals accelerate faster than crop protection. Net CFO exceeds ₹480 crore and leverage stays conservative. IPO filing re-rates OTC prints toward listed agchem multiples. FY27 PAT approaches ₹560 crore and supports our bull band near ₹2,071 per share (+40% vs ₹1,475 reference) at 8.5× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Mancozeb prices weaken and utilisation falls; OPM compresses toward 9% on flat revenue. Export LC delays inflate working capital with CFO below ₹320 crore. OTC liquidity dries up and prints fall toward the ₹1,375 dealer low regardless of operations. FY27 PAT could slip toward ₹380 crore and equity toward our bear case near ₹1,076 per share at 6.5× earnings (-27% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples discounted for unlisted illiquidity (6.5× bear, 7.5× base, 8.5× bull), cross-checked with dealer book value near ₹2,831 per share versus ₹1,475 reference (about 0.52× price-to-book). Bear FY27 PAT ₹380 crore implies about ₹1,076 per share (-27% vs ₹1,475 OTC reference). Base PAT ₹480 crore implies about ₹1,567 (+6%). Bull PAT ₹560 crore implies about ₹2,071 (+40%). Base case does not clear the 15% upside hurdle used for listed Buy calls; unlisted liquidity and unverified audited numbers keep us at Neutral rather than Buy despite modest base upside.",
  },
  seriesChart(
    "Scenario target price vs OTC reference (₹ per share)",
    "Conclusion: Base +6%; bull needs PAT and multiple expansion.",
    ["Bear", "Base", "Bull", "OTC reference"],
    [{ name: "Target / ref", values: [1076, 1567, 2071, 1475], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Implied trailing P/E at OTC reference (FY26 PAT model)",
    "Conclusion: Near 7× on estimated earnings.",
    ["FY26 est. PAT", "MCap at ref"],
    [{ name: "P/E ~7.1", values: [452, 3203], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "SEBI DRHP or IPO filing by Indofil or group entities. Audited annual report with segment revenue for crop protection versus specialty chemicals. Global mancozeb price indices and Brazil or Latin America import data. Dahej utilisation or expansion announcements on the corporate website. OTC dealer price and lot-size changes on dated platforms. Dividend declarations relative to estimated PAT. Related-party transactions in any future public filing. Listed peer multiples (Sumitomo Chemical India, Sharda Cropchem) for relative valuation sanity checks.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,475 OTC reference (2 October 2026). Base-case target near ₹1,567 per share offers about 6% upside, below our 15% Buy hurdle for listed names, and unlisted execution risk warrants a higher bar. Upgrade toward Buy if audited FY27 PAT exceeds ₹520 crore with OPM above 11.5%, net CFO above ₹450 crore, and OTC or eventual listed price still implies less than 7× forward earnings while a credible IPO timeline appears. Downgrade toward Avoid if estimated PAT falls below ₹400 crore with OPM below 10%, CFO weakens on export LC stress, or OTC prints persist above ₹1,800 without earnings upgrades (multiple risk). Downgrade if material governance or environmental liabilities surface in audited reports.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-filed quarterly results, Screener consolidated tables, and verbatim public concall transcripts; financials in this memo are estimated from OTC dealer valuation math and curated management excerpts until a DRHP or annual report is ingested. Exact export versus domestic revenue split, top customer concentration, borrowings, and cash-flow statements are not load-bearing in free sources used. OTC prices differ across dealers and dates; our reference is one dated snapshot, not a transaction price for the reader. BSE code UNLISTED is a placeholder. Update bear, base, and bull when audited FY26 financials and segment notes are available from the company or IPO filing.",
  },
];
