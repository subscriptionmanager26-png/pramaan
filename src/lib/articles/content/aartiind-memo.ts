import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const aartiindMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Aarti Industries Ltd (NSE: AARTIIND, BSE: 524208) is an integrated Indian specialty chemicals manufacturer spanning benzene-based chains, nitro-chloro aromatics, and pharma and agrochemical intermediates for global formulators. Promoter holding was about 41.8% as of June 2026 on Screener, with FIIs near 18.2% and DIIs near 12.4%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹465 on 1 October 2026, market capitalisation is about ₹16,871 crore on roughly 36.2 crore shares (face value ₹5). Trailing consolidated price-to-earnings is near 31.8 on TTM earnings per share about ₹14.64, with book value about ₹164 per share and return on capital employed near 7%. The quote sits below the 52-week high of ₹552 and above the ₹338 low after a one-year market-cap gain near twenty-two percent while profit after tax rebounded from the FY25 trough.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Aarti earns spread and conversion margin on multi-step chemistry from benzene and chlorination routes into downstream intermediates sold under long qualification cycles to agrochemical, polymer, and pharmaceutical customers. Revenue is recognised largely on dispatch; benzene, nitric acid, and energy costs flow through cost of materials with a lag on export contracts, so operating profit margin compresses when input volatility outruns formula resets. Payment cycles run through debtor days near sixty-two Mar FY26 and inventory near one hundred twenty-nine days, so net cash from operations can trail operating profit when the company builds stock ahead of project commissioning, as FY26 demonstrated when profit after tax was ₹419 crore and net cash from operations ₹781 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Aarti scaled from a single-site benzene player into a multi-location nitro-chloro and specialty intermediate platform over two decades, with FY22 representing a peak operating profit margin near twenty-eight percent before the post-pandemic normalisation. Consolidated revenue moved from ₹6,371 crore in FY24 to ₹7,269 crore in FY25 and ₹8,286 crore in FY26 with TTM sales near ₹9,010 crore. Operating profit followed ₹978 crore, ₹997 crore, and ₹1,168 crore across the same years. Reported profit after tax fell to ₹331 crore in FY25 before recovering to ₹419 crore in FY26 with TTM profit after tax near ₹531 crore. Borrowings rose toward ₹4,966 crore Mar FY26 while capital expenditure kept free cash flow negative, explaining low return on capital employed despite the TTM earnings rebound.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹9,000 cr on volume recovery.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [6371, 7269, 8286, 9010], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global agrochemical innovators, polymer stabiliser producers, and pharmaceutical API manufacturers that require multi-year validation for nitro-chloro and benzene derivatives. Company materials cite export exposure across North America, Europe, and Asia; Screener premium gates exact customer counts and top-account concentration time series. Promoter holding near forty-two percent supports patient capex on downstream blocks, while FII holding near eighteen percent leaves re-rating tied to return on capital employed proof after the leverage build. Concentration risk is moderate: prolonged benzene spread compression or delayed project utilisation can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans benzene chain products, nitro-chloro aromatics, and higher-value pharma and agrochemical intermediates with management targeting mix shift toward downstream molecules. FY25 investor materials highlighted growth in specialty intermediates even as legacy lines faced price pressure. Q1 FY27 revenue ₹2,387 crore with operating profit margin sixteen percent shows sequential improvement from FY26 averages near fourteen percent. Newly commissioned units need seventy percent utilisation before they contribute at FY22 margin levels, which the base case assumes only partly in FY27.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Margin troughed FY25-FY26; Q1 FY27 improved.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [15, 14, 14, 15], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Benzene and chlorination input prices move Aarti spreads before customer resets catch up. Global agrochemical destocking and export pricing pressure weighed on FY25 and FY26 earnings while volumes recovered into FY27. Rupee volatility affects export realisations with partial natural hedge on imported inputs. Indian specialty chemical peer re-rating (Deepak Nitrite and Clean Science in this repo) sets sentiment for integrated names with leverage. The move from ₹338 to ₹552 over fifty-two weeks can dominate short-term action even when quarterly profit after tax rebounds.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth on Screener masks the FY22 peak margin year when operating profit margin touched twenty-eight percent before compressing toward mid-teens. Operating profit moved from ₹1,720 crore FY22 toward ₹1,168 crore FY26 as normalisation and project drag offset volume gains. Profit after tax swung from ₹1,186 crore FY22 to ₹331 crore FY25 before TTM recovery near ₹531 crore. Return on capital employed fell from mid-teens toward seven percent as borrowings and capital work in progress rose. Dividend yield near one percent at reference reflects reinvestment priority on growth assets.",
  },
  seriesChart(
    "Reported profit after tax (₹ crore)",
    "Conclusion: PAT troughed FY25; TTM rebounded.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [416, 331, 419, 531], color: "#c27803" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹1,238 crore exceeded profit after tax ₹331 crore, with CFO to operating profit near one hundred twenty-three percent. FY26 net cash from operations ₹781 crore fell below profit after tax ₹419 crore as working capital and project inventory builds absorbed cash, with CFO to operating profit near sixty-seven percent. Free cash flow stayed negative in FY24 through FY26 as investing outflows near ₹1,100 crore to ₹1,400 crore annually funded capacity. If inventory days fall toward one hundred ten while debtor days stay below sixty-five, profit after tax can align better with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO strong in FY25; FY26 absorbed by WC.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [1210, 1238, 781], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹4,966 crore Mar FY26 against reserves ₹5,774 crore leave interest coverage sensitive to operating profit margin swings; interest expense TTM near ₹364 crore consumes a double-digit share of operating profit at mid-teens margin. Capital work in progress and project liabilities tie up cash but are funded from internal accruals and term debt rather than equity dilution in the base case. Contingent liabilities and related-party exposures need annual report footnotes; Screener flags tax rate volatility but not acute distress signals. A prolonged stretch of sub-thirteen percent operating profit margin with negative free cash flow and borrowings above ₹5,500 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with growth capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [3623, 3848, 4966], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Gogri and affiliated promoter group founded the platform and retains near forty-two percent promoter control with family executives overseeing operations and project execution. Executive compensation ties to profitability and capacity milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near one percent in FY26 offers minority holders modest cash return while promoters reinvest through retained earnings and borrowings into nitro-chloro and downstream blocks. Insider trading windows and promoter pledging are monitored on exchange filings; alignment is reasonable for a leveraged specialty franchise if return on capital employed improves as guided.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was met with ₹7,269 crore sales. FY26 margin guidance into mid-teens was partially met at fourteen percent full year but improved in TTM and Q1 FY27 at sixteen percent OPM. Balance sheet guidance to fund capex translated into higher borrowings rather than equity dilution. FY27 mid-teens average OPM with high single digit revenue growth is pending; Q1 FY27 revenue ₹2,387 crore and profit after tax ₹155 crore support recovery but need H2 confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2-3 years?" },
  {
    type: "p",
    text: "Commissioned nitro-chloro and specialty intermediate units crossing seventy percent utilisation add high-margin tonnes without full greenfield risk on the entire platform. Benzene chain spreads normalising from FY25 trough lift operating leverage on integrated sites. Pharma and agrochemical intermediate export mix diversifies away from single-product beta. Domestic polymer and API demand recovery lifts volume when global destocking ends. Operating leverage on debottlenecked assets drops incremental revenue to profit at high marginal rates when utilisation rises. Borrowings plateau guides return on capital employed back toward ten percent if spreads hold.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees operating profit margin sustain seventeen percent in H2 FY27, lifting profit after tax near ₹820 crore at thirty times multiple and re-rating the stock toward ₹679 per share as return on capital employed returns toward ten percent. Faster-than-guided project utilisation adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near thirteen percent on extended benzene down-cycle, leaving profit after tax near ₹500 crore at twenty-four times multiple and ₹331 per share, down roughly twenty-nine percent from reference. Prolonged negative free cash flow with borrowings above ₹5,500 crore would force investors to haircut quality multiples despite integrated cost position.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an integrated benzene and nitro-chloro platform with leverage (24× bear, 28× base, 30× bull), cross-checked with TTM operating profit near ₹1,335 crore at ten times EV/EBITDA when net debt is material. Bear FY27 profit after tax ₹500 crore implies about ₹331 per share (-29% vs ₹465 reference). Base profit after tax ₹700 crore implies about ₹541 (+16%). Bull profit after tax ₹820 crore implies about ₹679 (+46%). Base case clears the fifteen percent upside hurdle versus reference if management delivers high single digit FY27 revenue with average operating profit margin near fifteen percent and net cash from operations improves toward ₹900 crore while borrowings plateau below ₹5,200 crore.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [331, 541, 679, 465], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1675, 2100, 2318, 2205, 2387], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Benzene and nitro-chloro spread commentary on concalls. Export realisations and agrochemical customer destocking. Borrowings, capital work in progress, and interest cost each quarter. Inventory days and debtor days versus cash conversion cycle. Project commissioning and utilisation updates. Dividend policy and FII holding changes. Chlorine and benzene feedstock indices.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹465 reference. Base-case target near ₹541 per share implies about sixteen percent upside with confirming high single digit FY27 revenue trajectory, average operating profit margin near fifteen percent, and net cash from operations improving toward ₹900 crore while borrowings plateau below ₹5,200 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above seventeen percent with TTM profit after tax run-rate above ₹650 crore. Downgrade toward Neutral if operating profit margin falls below thirteen percent with TTM net cash from operations below ₹700 crore. Downgrade toward Avoid if borrowings exceed ₹5,500 crore without matching project revenue or benzene spreads compress below FY26 trough for a full year.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and MD&A pending full ingestion. Benzene chain versus nitro-chloro segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages for newly commissioned units need investor presentation updates. Tax rate volatility in FY25 and FY26 quarters is flagged by Screener but not fully reconciled here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
