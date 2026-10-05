import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const deepaknitMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Deepak Nitrite Ltd (NSE: DEEPAKNTR, BSE: 506401) manufactures basic intermediates, fine and specialty chemicals, performance products, and phenolics including cumene, phenol, acetone, isopropyl alcohol, and advanced intermediates such as sodium nitrite, xylidines, and oximes. Promoter holding was about 49.3% as of June 2026 on Screener, with FIIs near 6.2% and DIIs near 23.8%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹1,493 on 1 October 2026, market capitalisation is about ₹20,361 crore on roughly 13.63 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 25.7 on TTM earnings per share about ₹57.43, with book value about ₹428 per share and return on capital employed near 11.4%. The quote sits below the 52-week high of ₹1,898 and above the ₹1,280 low after a nineteen percent one-year price decline while TTM profit after tax rebounded above the FY26 annual print.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Deepak earns spread and formulation margin on integrated phenolics and advanced intermediate molecules sold to laminates, plywood, automotive, construction, agrochemical, pharmaceutical, and dye intermediates customers in India and abroad. Revenue is recognised largely on dispatch; benzene, cumene, and energy costs flow through cost of materials with a lag on contract resets, so operating profit margin swings when phenol-acetone spreads move faster than customer price pass-through. Payment cycles run through debtor days near seventy Mar FY26 and inventory near fifty-seven days, so net cash from operations can lag operating profit when management builds working capital ahead of volume ramps, as FY26 demonstrated when profit after tax was ₹551 crore but net cash from operations ₹539 crore while borrowings rose toward ₹1,638 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Deepak scaled from a regional nitrite producer into India’s largest phenol and acetone manufacturer with a global rank in select advanced intermediates. Consolidated revenue moved from ₹7,682 crore in FY24 to ₹8,282 crore in FY25 before easing to ₹7,887 crore in FY26 with TTM sales near ₹8,575 crore. Operating profit margin peaked near twenty-four percent in FY22 before compressing toward thirteen percent in FY26 as phenolics spreads normalised from the prior cycle peak. Reported profit after tax fell from ₹811 crore in FY24 to ₹551 crore in FY26 with TTM profit after tax near ₹783 crore. Borrowings rose from ₹286 crore Mar FY24 to ₹1,638 crore Mar FY26 while capital work in progress reached ₹1,828 crore, signalling derivative and debottleneck capex through the trough.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM re-accelerated after FY26 dip.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [7682, 8282, 7887, 8575], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include laminate and plywood producers, automotive and construction formulators, agrochemical and pharmaceutical intermediate buyers, and global dye and rubber chemical users that require long qualification cycles for phenol, acetone, and nitrite grades. Company materials cite leadership in Indian phenol and acetone with roughly fifty percent domestic share; Screener premium gates exact customer counts and top-account concentration time series. Promoter holding near forty-nine percent supports patient capex through cyclical spreads, while rising DII holding near twenty-four percent leaves re-rating tied to return on capital employed recovery after FY26 compression. Concentration risk is moderate: a prolonged phenol down-cycle with delayed pass-through can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Phenolics supplied roughly sixty-eight percent of FY26 revenue versus seventy percent in FY25, covering cumene, phenol, acetone, isopropyl alcohol, and alpha methyl styrene for laminates, plywood, and industrial resins. Advanced intermediates contributed about thirty-two percent, including nitrites, nitro toluidines, xylidines, oximes, and optical brightening agents for colorants, rubber, paper, and agrochemical chains. Exact segment profit splits require investor presentations; investors should treat phenolics utilisation and spread recovery as the central swing factor for consolidated margin, with advanced intermediates providing diversification when export realisations hold.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 trough; Q1 FY27 rebound to twenty one percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [15, 13, 13, 16], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 trough; TTM recovery on Jun 2026 quarter.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [811, 697, 551, 783], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global benzene and cumene prices, domestic phenol-acetone spread dynamics, and Chinese export pricing on competing intermediates move Deepak’s margin bridge directly. Laminate and plywood demand tied to housing and furniture cycles drives phenolics volume. Advanced intermediate export realisations swing with agrochemical and dye end markets. Interest rates matter as borrowings crossed ₹1,600 crore while capex continues. Peer re-rating in Indian specialty and phenolics names in this repo sets sentiment even when Deepak’s integrated cost position differs. Working capital spikes can hit cash from operations and free cash flow even when quarterly margins look strong, as FY26 showed.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near nineteen percent on Screener masks the FY26 pause when sales dipped from FY25 despite FY24 starting point ₹7,682 crore. Operating profit followed: ₹1,127 crore FY24, ₹1,095 crore FY25, ₹987 crore FY26. Profit after tax moved ₹811 crore, ₹697 crore, and ₹551 crore across the same years. Return on capital employed fell from twenty-two percent toward eleven percent as capital employed rose on borrowings and capital work in progress. Dividend yield near zero point five percent at reference reflects reinvestment priority on derivative capacity.",
  },
  seriesChart(
    "Return on capital employed %",
    "Conclusion: ROCE troughed in FY26; recovery tied to spreads and capex completion.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [22, 16, 11], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹539 crore trailed operating profit ₹987 crore, with CFO to operating profit near fifty-five percent. FY25 net cash from operations ₹625 crore and FY24 ₹874 crore show conversion weakened as inventory and receivable days extended and capex absorbed cash. Free cash flow turned negative in FY26 as investing outflows exceeded operating inflows while borrowings funded the gap. If working capital normalises as phenolics volumes stabilise, profit after tax can converge toward net cash from operations without signalling permanent earnings quality issues, but investors should monitor quarterly CFO through FY27.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO softened through FY26 capex and WC build.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [874, 625, 539], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹1,638 crore Mar FY26 against reserves ₹5,810 crore leave balance-sheet risk manageable but no longer negligible if phenol spreads collapse for multiple quarters while interest expense rises. Capital work in progress near ₹1,828 crore ties up cash until derivative projects commission. Contingent liabilities and related-party exposures need annual report footnotes; Screener flags low return on equity and possible interest capitalisation as watch items. A prolonged stretch of sub-ten percent operating profit margin with negative free cash flow and rising borrowings above ₹2,000 crore would be the early warning for equity holders.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with phenolics capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [286, 1267, 1638], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Deepak group founded the company and retains near fifty percent promoter control with family executives running operations and capex execution. Executive compensation ties to profitability and capacity milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near fifteen percent in FY26 offers minority holders modest cash return while promoters reinvest through retained earnings and borrowings into phenolics derivatives. Insider trading windows and promoter pledging are monitored on exchange filings; Screener shows stable promoter holding near forty-nine percent as of October 2026. Alignment is reasonable for a cyclical integrated chemical franchise if leverage peaks as guided.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was met with ₹8,282 crore sales. FY26 margin guidance into low-to-mid teens was partially met at thirteen percent full year but missed in weak quarters such as December 2025 at nine percent OPM. Balance sheet guidance to fund capex while staying investment grade translated into higher borrowings rather than equity dilution. FY27 high single digit revenue growth with mid-teens average OPM is pending; Q1 FY27 revenue ₹2,578 crore and profit after tax ₹345 crore support recovery but need H2 confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Phenol and acetone utilisation above eighty-five percent adds high-volume revenue with operating leverage when spreads normalise. Advanced intermediate export mix in nitrites and xylidines diversifies away from pure phenolics beta. Derivative and debottleneck capex coming online in FY28 adds incremental tonnes without greenfield risk on the entire platform. Domestic laminate and plywood demand recovery lifts phenolics offtake. Operating leverage on integrated Dahej assets drops incremental revenue to profit at high marginal rates when utilisation rises. Borrowings plateau guides return on capital employed back toward mid-teens if spreads hold.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees phenolics spreads sustain high teens operating profit margin in H2 FY27, lifting profit after tax near ₹1,050 crore at twenty-seven times multiple and re-rating the stock toward ₹2,080 per share as return on capital employed returns toward eighteen percent. Faster-than-guided derivative commissioning adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near twelve percent on extended phenol down-cycle, leaving profit after tax near ₹620 crore at twenty-two times multiple and ₹1,000 per share, down roughly thirty-three percent from reference. Prolonged negative free cash flow with borrowings above ₹2,000 crore would force investors to haircut quality multiples despite integrated cost position.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an integrated phenolics leader with advanced intermediate diversification (22× bear, 26× base, 27× bull), cross-checked with TTM operating profit near ₹1,331 crore at nine times EV/EBITDA when net debt is material. Bear FY27 profit after tax ₹620 crore implies about ₹1,000 per share (-33% vs ₹1,493 reference). Base profit after tax ₹920 crore implies about ₹1,755 (+17%). Bull profit after tax ₹1,050 crore implies about ₹2,080 (+39%). Base case clears the fifteen percent upside hurdle versus reference if management delivers high single digit FY27 revenue with average operating profit margin near fifteen percent and net cash from operations improves toward ₹650 crore while borrowings plateau.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1000, 1755, 2080, 1493], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1890, 1902, 1975, 2120, 2578], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Phenol and acetone spread commentary on concalls. Advanced intermediate export realisations and volume. Borrowings, capital work in progress, and interest cost each quarter. Inventory days and debtor days versus cash conversion cycle. Derivative project commissioning updates. Dividend policy and DII holding changes. Benzene and cumene feedstock indices.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹1,493 reference. Base-case target near ₹1,755 per share implies about seventeen percent upside with confirming high single digit FY27 revenue trajectory, average operating profit margin near fifteen percent, and net cash from operations improving toward ₹650 crore while borrowings plateau below ₹1,800 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above eighteen percent with TTM profit after tax run-rate above ₹900 crore. Downgrade toward Neutral if operating profit margin falls below twelve percent with TTM net cash from operations below ₹500 crore. Downgrade toward Avoid if borrowings exceed ₹2,200 crore without matching derivative revenue or phenol spreads compress below FY26 trough for a full year.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and MD&A pending full ingestion. Phenolics versus advanced intermediate segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages for phenol and acetone plants need investor presentation updates. Interest capitalisation treatment on large capex projects is flagged by Screener machine insights but not fully reconciled here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
