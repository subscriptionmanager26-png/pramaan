import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const atulMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Atul Ltd (NSE: ATUL, BSE: 500027) is a Lalbhai Group diversified Indian chemical company spanning Life Science Chemicals (crop protection actives and formulations) and Performance and Other Chemicals (polymer additives, aromatics, phosgene derivatives, and allied specialties) across nine businesses. Promoter holding was about 45.3% as of June 2026 on Screener, with FIIs near 7.4% and DIIs near 25.9%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹5,861 on 1 October 2026, market capitalisation is about ₹17,256 crore on roughly 2.94 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 21.7 on TTM earnings per share about ₹270.18, with book value about ₹2,113 per share and return on capital employed near 14.9%. The quote sits below the 52-week high of ₹7,198 and above the ₹5,560 low after a four percent one-year price decline while TTM profit after tax rose near fifty-nine percent.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Atul earns conversion margin on multi-step chemistry from integrated Gujarat sites into crop protection bulk actives, formulations, and performance chemicals sold to global agrochemical innovators, polymer producers, and industrial users. Revenue is recognised largely on dispatch; benzene, chlorine, and energy costs flow through cost of materials with a lag on export contract resets, so operating profit margin compresses when input volatility outruns pricing. Payment cycles run through debtor days near seventy-four Mar FY26 and inventory near ninety days, so net cash from operations can exceed profit after tax when working capital releases, as FY26 demonstrated when profit after tax was ₹689 crore and net cash from operations ₹1,023 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Atul built India-first positions in vat dyes, crop care chemicals, phosgene chemistry, and select actives such as 2,4-D and indoxacarb over decades, with FY20 representing a peak return on capital employed near twenty-eight percent before FY24 margin compression. Consolidated revenue moved from ₹4,726 crore in FY24 to ₹5,583 crore in FY25 and ₹6,274 crore in FY26 with TTM sales near ₹6,643 crore. Operating profit followed ₹639 crore, ₹918 crore, and ₹1,034 crore across the same years. Reported profit after tax rebounded from ₹324 crore in FY24 to ₹689 crore in FY26 with TTM profit after tax near ₹811 crore. Borrowings stayed near ₹183 crore Mar FY26 while investments in subsidiaries and treasury balances rose toward ₹2,592 crore, signalling surplus cash deployment rather than balance sheet stress.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹6,600 cr on volume and pricing recovery.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [4726, 5583, 6274, 6643], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global crop protection formulators, polymer and rubber additive users, and industrial phosgene derivative buyers that require multi-year validation for actives and intermediates. Company materials cite more than two hundred crop protection customers and leadership shares in select actives; Screener premium gates exact top-account concentration time series. Promoter holding near forty-five percent supports patient capex and R&D, while DII holding near twenty-six percent leaves re-rating tied to return on capital employed recovery toward high teens. Concentration risk is moderate: prolonged agrochemical channel destocking or sharp benzene down-cycles can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Life Science Chemicals supplied about twenty-nine percent of FY26 revenue versus thirty percent in FY25, covering crop protection bulk actives such as 2,4-D, indoxacarb, and sulfonylurea herbicides plus formulations. Performance and Other Chemicals contributed the balance across polymer additives, aromatics, and phosgene-based specialties. Exact segment profit splits require investor presentations; investors should treat crop protection export realisations and Gujarat plant uptime as the central swing factors for consolidated margin, with performance chemicals providing diversification when polymer demand holds.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average sixteen percent; Q1 FY27 at twenty one percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [14, 16, 16, 18], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT +59% YoY on Screener.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [324, 499, 689, 811], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global agrochemical channel inventory and export pricing move Atul volumes before domestic polymer demand catches up. Benzene, chlorine, and energy costs affect spreads on performance chemicals with partial pass-through on contracts. Rupee volatility affects export realisations on crop protection actives with natural hedge on some imported inputs. Indian specialty chemical peer re-rating (Aarti Industries and Deepak Nitrite in this repo) sets sentiment for integrated names with crop exposure. The move from ₹7,198 toward ₹5,560 over fifty-two weeks can dominate short-term action even when quarterly profit after tax sets new highs.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near eleven percent on Screener masks the FY24 margin trough when operating profit margin fell to fourteen percent before recovering toward eighteen percent TTM. Operating profit moved from ₹918 crore FY25 toward ₹1,189 crore TTM as utilisation improved. Profit after tax compound growth turned sharply positive TTM after flat five-year trends. Return on capital employed recovered from nine percent FY24 toward fifteen percent FY26 but remains below FY20 peak. Dividend yield near 0.51 percent at reference reflects reinvestment into subsidiaries and treasury assets.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE recovered from FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [9, 13, 15], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹603 crore trailed profit after tax ₹499 crore modestly with CFO to operating profit near eighty-two percent. FY26 net cash from operations ₹1,023 crore exceeded profit after tax ₹689 crore, with CFO to operating profit near one hundred thirteen percent. Free cash flow reached ₹851 crore in FY26 after capex as working capital days improved toward sixty-nine. If debtor days stay below seventy-five while inventory days remain near ninety, profit after tax can align with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO re-accelerated with margin recovery.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [667, 603, 1023], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹183 crore Mar FY26 against reserves ₹6,192 crore leave interest coverage ample; interest expense TTM near ₹17 crore is immaterial relative to operating profit. Large investment balances in subsidiaries and treasury assets tie up cash but are funded from internal accruals rather than leverage in the base case. Contingent liabilities and related-party exposures need annual report footnotes; Screener flags book-value multiple near 2.77 times but not acute distress signals. A prolonged stretch of sub-fourteen percent operating profit margin with negative free cash flow and rising borrowings above ₹400 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Near debt-free; investments fund strategic stakes.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [237, 202, 183], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Lalbhai family founded the platform and retains near forty-five percent promoter control with professional management overseeing nine business verticals. Executive compensation ties to profitability and safety milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near thirteen percent in FY26 offers minority holders cash return while promoters reinvest through retained earnings and subsidiary stakes. Insider trading windows and promoter pledging are monitored on exchange filings; alignment is reasonable for a diversified chemical franchise if return on capital employed sustains mid-teens.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was met with ₹5,583 crore sales and profit after tax recovery. FY26 mid-teens average operating profit margin guidance was met at sixteen percent full year and improved in TTM and Q1 FY27 at twenty-one percent OPM. Balance sheet guidance to stay conservative on leverage was met with borrowings below ₹200 crore. FY27 low double digit revenue growth with high-teens average OPM is pending; Q1 FY27 revenue ₹1,848 crore and profit after tax ₹254 crore support recovery but need H2 confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2-3 years?" },
  {
    type: "p",
    text: "Crop protection actives crossing higher utilisation add high-margin tonnes without full greenfield risk on the entire platform. Performance chemicals pricing normalisation from FY24 trough lifts operating leverage on integrated phosgene chains. Export channel restocking after destocking lifts volume when global formulators rebuild inventory. Domestic polymer and industrial demand recovery lifts performance segment revenue. Operating leverage on debottlenecked assets drops incremental revenue to profit at high marginal rates when OPM holds near eighteen percent. Treasury and subsidiary stakes can be redeployed into organic capex if returns exceed cost of capital.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees operating profit margin sustain twenty percent in H2 FY27, lifting profit after tax near ₹1,020 crore at twenty-six times multiple and re-rating the stock toward ₹9,020 per share as return on capital employed returns toward eighteen percent. Faster-than-guided export pricing on 2,4-D and indoxacarb adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near fifteen percent on renewed agrochemical export pricing pressure, leaving profit after tax near ₹720 crore at twenty times multiple and ₹4,898 per share, down roughly sixteen percent from reference. Prolonged channel destocking with inventory days above one hundred would force investors to haircut quality multiples despite integrated cost position.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a diversified Life Science and Performance chemical platform with net cash posture (20× bear, 24× base, 26× bull), cross-checked with TTM operating profit near ₹1,189 crore at fourteen times EV/EBITDA when net debt is negligible. Bear FY27 profit after tax ₹720 crore implies about ₹4,898 per share (-16% vs ₹5,861 reference). Base profit after tax ₹880 crore implies about ₹7,184 (+23%). Bull profit after tax ₹1,020 crore implies about ₹9,020 (+54%). Base case clears the fifteen percent upside hurdle versus reference if management delivers low double digit FY27 revenue with average operating profit margin near eighteen percent and net cash from operations stays above ₹1,000 crore while borrowings remain below ₹250 crore.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [4898, 7184, 9020, 5861], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1478, 1552, 1574, 1670, 1848], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Crop protection export pricing and channel inventory commentary on concalls. Life Science versus Performance segment revenue share in investor decks. Net cash from operations and free cash flow each quarter. Treasury and subsidiary investment balances. 2,4-D and indoxacarb volume trends. Energy and benzene input costs. Dividend policy and FII holding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹5,861 reference. Base-case target near ₹7,184 per share implies about twenty-three percent upside with confirming low double digit FY27 revenue trajectory, average operating profit margin near eighteen percent, and net cash from operations staying above ₹1,000 crore while borrowings remain below ₹250 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above twenty percent with TTM profit after tax run-rate above ₹850 crore. Downgrade toward Neutral if operating profit margin falls below sixteen percent with TTM net cash from operations below ₹800 crore. Downgrade toward Avoid if agrochemical export pricing collapses for a full year with TTM profit after tax below ₹600 crore despite stable revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and FY25 MD&A pending full ingestion. Life Science versus Performance segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages by site need investor presentation updates. Tax rate volatility in quarterly results is flagged by Screener but not fully reconciled here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
