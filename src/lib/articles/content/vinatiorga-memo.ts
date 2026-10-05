import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const vinatiorgaMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Vinati Organics Ltd (NSE: VINATIORGA, BSE: 524200) manufactures specialty chemicals including isobutyl benzene (IBB), 2-acrylamido-2-methylpropane sulphonic acid (ATBS), para amino phenol (PAP), and polymer additives supplied to global resin, pharma, and personal care customers. Promoter holding was about 74.5% as of June 2026 on Screener, with FIIs near 4.2% and DIIs near 8.1%. The stock is in Nifty 500 and related mid-cap indices. At a reference price of ₹1,208 on 1 October 2026, market capitalisation is about ₹12,524 crore on roughly 10.37 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 27.9 on TTM earnings per share about ₹43.26, with book value about ₹305 per share and return on capital employed near 19.8%. The quote sits below the 52-week high of ₹1,775 and above the ₹1,143 low after a twenty-eight percent one-year price decline while TTM profit after tax held near ₹448 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Vinati earns formulation margin on patent-protected and process-intensive specialty intermediates sold under long qualification cycles to multinational and Indian customers. Revenue is recognised largely on dispatch; benzene, toluene, and sulphur-based feedstock costs flow through cost of materials with a lag on export formula contracts, so operating profit margin swings when aromatics move faster than customer price resets. Payment cycles run through debtor days near mid-forties Mar FY26 and inventory near sixty days, so net cash from operations can exceed profit after tax when working capital releases, as FY26 demonstrated when profit after tax reached ₹444 crore and net cash from operations ₹558 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Vinati listed in 2006 and scaled into one of the world’s largest IBB producers before expanding ATBS and downstream specialties. Consolidated revenue moved from ₹1,900 crore in FY24 to ₹2,248 crore in FY25 and ₹2,227 crore in FY26 with TTM sales near ₹2,381 crore. Operating profit margin troughed near twenty-five percent in FY24 before recovering toward twenty-nine percent in FY26 as utilisation rose. Reported profit after tax rose from ₹323 crore in FY24 to ₹444 crore in FY26 with TTM profit after tax near ₹448 crore. Capital work in progress reached ₹214 crore Mar FY26 while borrowings stayed near ₹6 crore, signalling ATBS expansion without stressing leverage.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM growth re-accelerated after FY26 plateau.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1900, 2248, 2227, 2381], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global polymer, water treatment, and personal care formulators that require multi-year qualification for ATBS and IBB grades. Company materials cite leadership positions in IBB and ATBS with export exposure; Screener premium gates exact customer counts and top-account concentration time series. Promoter control near seventy-five percent supports patient capex and R&D, while FII holding near four percent leaves re-rating tied to margin proof after the FY24 trough. Concentration risk is moderate: loss of a major export account or a prolonged aromatics down-cycle with delayed pass-through can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans IBB for pharma and fragrance intermediates, ATBS for high-performance polymers and dispersants, PAP and other specialties, and polymer additives. Management highlights faster growth in ATBS and downstream derivatives even when exact segment revenue splits are disclosed primarily in the annual investor presentation. FY26 operating profit margin near twenty-nine percent suggests mix improved versus FY24 when revenue was ₹1,900 crore with OPM twenty-five percent. Q1 FY27 revenue ₹696 crore with OPM twenty-four percent shows export-heavy June quarters can run below the FY26 average without breaking the high-twenties full-year ambition.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Margin recovered from FY24 trough.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [25, 26, 29, 28], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Benzene and toluene spot prices on aromatics cycles move Vinati’s spread before export formula resets catch up. Global polymer and water-treatment demand drives ATBS volumes; destocking in developed markets compressed FY24 revenue before FY25 rebound. Rupee volatility affects export realisations with a partial natural hedge on imported feedstock. Indian specialty chemical peer re-rating (Fine Organic and Galaxy Surfactants in this repo) sets sentiment for premium-niche names. Small-cap liquidity and the twenty-eight percent one-year share price decline can dominate short-term action even when TTM profit after tax grows.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near eighteen percent on Screener masks the FY24 pause when sales fell from ₹2,066 crore in FY23 to ₹1,900 crore in FY24 before rebounding. Operating profit followed: ₹471 crore FY24, ₹582 crore FY25, ₹655 crore FY26. Profit after tax moved ₹323 crore, ₹405 crore, and ₹444 crore across the same years. Return on capital employed recovered from mid-teens toward twenty percent as asset turns improved. Dividend payout near twenty percent balances promoter liquidity with capex on ATBS lines.",
  },
  seriesChart(
    "Reported profit after tax (₹ crore)",
    "Conclusion: PAT re-accelerated through FY26.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [323, 405, 444, 448], color: "#c27803" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹558 crore exceeded profit after tax ₹444 crore, with CFO to operating profit near eighty-five percent. FY25 net cash from operations ₹458 crore and FY24 ₹332 crore show conversion improved as inventory days normalised from the FY23 spike. Capital expenditure on ATBS and debottlenecking consumed cash but borrowings stayed negligible, so free cash flow remained positive after dividends. If inventory rebuilds ahead of export shipments, profit after tax can outpace net cash from operations temporarily without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO strengthened through FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [332, 458, 558], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹6 crore Mar FY26 against reserves ₹3,151 crore leave balance-sheet risk low unless management levered a large acquisition, which is not in guidance. Capital work in progress ₹214 crore and investments ₹190 crore tie up cash but are funded from internal accruals. Contingent liabilities and related-party exposures need annual report footnotes; none flagged in public Screener alerts beyond routine GST and tax disputes typical for chemical exporters. A prolonged export receivable stretch above sixty days with negative free cash flow would be the early warning, not gross leverage.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Effectively debt free.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [12, 8, 6], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Lal family founded Vinati and retains majority control with professional management running plant operations and exports. Executive compensation ties to profitability and capacity milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near twenty percent offers minority holders cash return while promoters reinvest through retained earnings. Insider trading windows and promoter pledging are monitored on exchange filings; Screener shows no alarming pledge spike as of October 2026. Alignment is reasonable for a family-controlled specialty chemical franchise with global niches.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 guidance for revenue growth and mid-twenties margins was met with ₹2,248 crore sales and twenty-six percent OPM. FY26 margin ambition into high twenties was exceeded at twenty-nine percent OPM full year. Balance sheet guidance to stay debt free was met with borrowings under ₹10 crore. FY27 low-double-digit revenue growth with high-twenties average OPM is pending; Q1 FY27 revenue ₹696 crore supports volume but OPM twenty-four percent needs H2 mix improvement to hit the full-year average.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "ATBS capacity utilisation crossing seventy-five percent on debottlenecked lines adds volume with structurally higher realisations than legacy IBB. Export polymer and water-treatment demand recovery lifts shipment cadence after FY24 destocking. New specialty derivatives from R&D can raise mix toward twenty-nine to thirty percent OPM if feedstock stays stable. Operating leverage on fixed Maharashtra costs drops incremental revenue to profit at high marginal rates when plants run full. Working capital discipline keeps net cash from operations near eighty-five percent of operating profit, funding capex without equity dilution.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees ATBS mix rise, operating profit margin sustain high twenties in H2 FY27, and export volumes accelerate, lifting profit after tax near ₹550 crore at thirty-one times multiple and re-rating the stock toward ₹1,645 per share as return on capital employed returns toward twenty-two percent. Further investment income on the listed portfolio could add non-operating upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near twenty-four percent on aromatics spikes and export pricing pressure, leaving profit after tax near ₹400 crore at twenty-four times multiple and ₹926 per share, down roughly twenty-three percent from reference. Prolonged inventory builds with net cash from operations below ₹400 crore would force investors to haircut quality multiples despite promoter control.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a global niche specialty chemical leader with ATBS optionality (24× bear, 30× base, 31× bull), cross-checked with TTM operating profit near ₹665 crore at twelve times EV/EBITDA when net debt is negligible. Bear FY27 profit after tax ₹400 crore implies about ₹926 per share (-23% vs ₹1,208 reference). Base profit after tax ₹500 crore implies about ₹1,446 (+20%). Bull profit after tax ₹550 crore implies about ₹1,645 (+36%). Base case clears the fifteen percent upside hurdle versus reference if management delivers low-double-digit FY27 revenue with average operating profit margin near twenty-eight percent without assuming every quarter matches FY26 peak.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [926, 1446, 1645, 1208], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [542, 550, 531, 604, 696], color: "#c27803" }],
  ),
  seriesChart(
    "Return on capital employed %",
    "Conclusion: ROCE recovered from FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [15, 18, 20], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. IBB versus ATBS growth rates when investor decks publish. Benzene and toluene feedstock pass-through commentary on concalls. Inventory days, capital work in progress, and investments each quarter. Export customer qualification wins and formula price resets. Dividend policy and FII holding changes. ATBS capacity commissioning updates from capital work in progress roll-forward.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹1,208 reference. Base-case target near ₹1,446 per share implies about twenty percent upside with confirming low-double-digit FY27 revenue trajectory, average operating profit margin near twenty-eight percent, and net cash from operations above ₹500 crore while borrowings stay below ₹50 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above twenty-nine percent with TTM profit after tax run-rate above ₹480 crore. Downgrade toward Neutral if operating profit margin falls below twenty-five percent with TTM net cash from operations below ₹420 crore. Downgrade toward Avoid if aromatics spikes force inventory write-downs or borrowings exceed ₹200 crore without matching ATBS revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. IBB versus ATBS revenue splits, export share, and customer concentration are login-gated on Screener. Exact qualification timelines for new global ATBS accounts need investor presentation updates. Mark-to-market on listed investments near ₹190 cr Mar FY26 is not fully disaggregated in free filings. Update bear, base, and bull when segment EBIT and volume metrics publish in the annual report.",
  },
];
