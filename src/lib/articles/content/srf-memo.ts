import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const srfMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "SRF Ltd (NSE: SRF, BSE: 503806) is an Arun Bharat Ram Group integrated Indian manufacturer spanning chemicals (specialty fluorochemical intermediates, refrigerants, chloromethanes, and hydrogen fluoride), technical textiles (tyre cord and industrial yarns), packaging films (BOPET and BOPP), and coated fabrics. Promoter holding was about 50.26% as of June 2026 on Screener, with FIIs near 15.45% and DIIs near 22.44%. The stock is in Nifty 500, Nifty Midcap 100, Nifty Chemicals, and related indices. At a reference price of ₹2,486 on 1 October 2026, market capitalisation is about ₹73,697 crore on roughly 29.64 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 32.9 on TTM earnings per share about ₹72.93, with book value about ₹474 per share and return on capital employed near 14.6%. The quote sits below the 52-week high of ₹3,239 and above the ₹2,314 low after a fifteen percent one-year price decline while TTM profit after tax rose near fifty-seven percent.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "SRF earns conversion margin on fluorine chemistry, nylon and polyester tyre cord, and film extrusion sold to global agrochemical innovators, refrigerant blenders, tyre makers, and flexible packaging converters. Revenue is recognised largely on dispatch; fluorspar, energy, and nylon chip costs flow through cost of materials with partial lag on long-tenure export contracts, so operating profit margin compresses when input volatility outruns pricing. Payment cycles run through debtor days near fifty-nine Mar FY26 and inventory near one hundred thirty-one days, so net cash from operations can trail operating profit when working capital builds, though FY26 still delivered ₹2,554 crore net cash from operations on ₹3,410 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "SRF built India-leading refrigerant and specialty fluorochemical positions alongside tyre cord scale over five decades, with FY22 representing a peak return on capital employed near twenty-four percent before FY25 margin and interest pressure. Consolidated revenue moved from ₹13,139 crore in FY24 to ₹14,693 crore in FY25 and ₹15,787 crore in FY26 with TTM sales near ₹17,001 crore. Operating profit followed ₹2,584 crore, ₹2,718 crore, and ₹3,410 crore across the same years. Reported profit after tax rebounded from ₹1,336 crore in FY24 to ₹1,835 crore in FY26 with TTM profit after tax near ₹2,162 crore after FY25 dipped to ₹1,251 crore. Borrowings stood near ₹5,083 crore Mar FY26 while capital work in progress rose toward ₹1,889 crore, signalling active fluorochemical and allied capex rather than balance sheet deleveraging.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹17,000 cr on volume and mix recovery.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [13139, 14693, 15787, 17001], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global tyre manufacturers, refrigerant distributors, agrochemical and pharmaceutical innovators needing CF₃ intermediates, and packaging converters buying BOPET film. Company materials cite export presence across many countries; Screener premium gates exact top-account concentration time series. Promoter holding near fifty percent supports patient capex and R&D, while rising DII holding near twenty-two percent leaves re-rating tied to return on capital employed recovery toward high teens. Concentration risk is moderate: prolonged refrigerant pricing weakness or tyre-cord destocking can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The chemicals business supplied about forty-nine percent of FY26 revenue versus forty-six percent in FY25, covering specialty fluorochemical intermediates and refrigerant blends. Technical textiles, packaging films, and coated fabrics contributed the balance with tyre cord and BOPET volumes sensitive to auto and packaging cycles. Exact segment profit splits require investor presentations; investors should treat chemicals mix above fifty percent and Dahej utilisation as the central swing factors for consolidated margin, with textiles providing diversification when nylon chip costs normalise.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average twenty-two percent; Q1 FY27 at twenty-five percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [20, 18, 22, 22], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT +57% YoY on Screener.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [1336, 1251, 1835, 2162], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global refrigerant regulation and HFC pricing move chemicals realisations before domestic tyre demand catches up. Fluorspar, energy, and nylon chip costs affect spreads on fluorochemicals and tyre cord with partial pass-through on contracts. Rupee volatility affects export realisations on specialty intermediates with natural hedge on some imported inputs. Indian fluorochemical peer re-rating (Aarti Industries and Deepak Nitrite in this repo) sets sentiment for integrated names with capex cycles. The move from ₹3,239 toward ₹2,314 over fifty-two weeks can dominate short-term action even when quarterly profit after tax sets new highs.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near thirteen percent on Screener masks the FY25 margin trough when operating profit margin fell to eighteen percent before recovering toward twenty-two percent TTM. Operating profit moved from ₹2,718 crore FY25 toward ₹3,817 crore TTM as utilisation improved. Profit after tax compound growth turned sharply positive TTM after negative three-year trends. Return on capital employed recovered from twelve percent FY25 toward fifteen percent FY26 but remains below FY22 peak. Dividend yield near 0.36 percent at reference reflects reinvestment into fluorochemical capex.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE recovered from FY25 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [13, 12, 15], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹2,487 crore exceeded profit after tax ₹1,251 crore with CFO to operating profit near one hundred four percent. FY26 net cash from operations ₹2,554 crore trailed operating profit ₹3,410 crore modestly with CFO to operating profit near ninety percent as inventory days rose toward one hundred thirty-one. Free cash flow reached ₹747 crore in FY26 after capex as capital work in progress stayed elevated. If debtor days stay below sixty-five while inventory days remain near one hundred thirty, profit after tax can align with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO held above ₹2,500 cr despite capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [2094, 2487, 2554], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹5,083 crore Mar FY26 against reserves ₹13,745 crore leave interest coverage adequate; interest expense TTM near ₹267 crore is material but manageable relative to operating profit. Large capital work in progress near ₹1,889 crore ties up cash and raises execution risk if fluorochemical blocks slip. Screener flags interest capitalisation and book-value multiple near 5.25 times as watch items. A prolonged stretch of sub-eighteen percent operating profit margin with negative free cash flow and borrowings above ₹5,500 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage funds capex; CWIP elevated.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [5031, 4726, 5083], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Arun Bharat Ram family founded the platform and retains near fifty percent promoter control with professional management overseeing chemicals, textiles, and films divisions. Executive compensation ties to profitability and safety milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near fifteen percent in FY26 offers minority holders cash return while promoters reinvest through retained earnings and capex. Insider trading windows and promoter pledging are monitored on exchange filings; alignment is reasonable for a diversified fluorochemical franchise if return on capital employed sustains mid-teens.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was broadly met with ₹14,693 crore sales but profit after tax fell on margin and interest. FY26 low-twenties operating profit margin guidance was met at twenty-two percent full year and improved in TTM and Q1 FY27 at twenty-five percent OPM. Capex commissioning guidance remains pending with capital work in progress near ₹1,889 crore. FY27 low double digit revenue growth with low-twenties average OPM is pending; Q1 FY27 revenue ₹5,033 crore and profit after tax ₹759 crore support recovery but need H2 confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2-3 years?" },
  {
    type: "p",
    text: "Specialty fluorochemical intermediates crossing higher utilisation add high-margin tonnes without full greenfield risk on the entire platform. Refrigerant and chloromethanes pricing normalisation from FY25 trough lifts operating leverage on integrated HF chains. Export tyre-cord restocking after destocking lifts technical textiles volume when global auto builds inventory. Packaging films margin recovery on BOPET utilisation lifts films segment profit. Operating leverage on debottlenecked assets drops incremental revenue to profit at high marginal rates when OPM holds near twenty-two percent. Battery-materials-linked fluorochemical options can extend growth if returns clear hurdle rates.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees operating profit margin sustain twenty-four percent in H2 FY27, lifting profit after tax near ₹2,950 crore at thirty-four times multiple and re-rating the stock toward ₹3,382 per share as return on capital employed returns toward eighteen percent. Faster-than-guided specialty intermediate export pricing adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near eighteen percent on renewed refrigerant pricing pressure and tyre-cord softness, leaving profit after tax near ₹2,050 crore at twenty-eight times multiple and ₹1,937 per share, down roughly twenty-two percent from reference. Prolonged capex slippage with borrowings above ₹5,500 crore would force investors to haircut quality multiples despite integrated cost position.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an integrated fluorochemicals, technical textiles, and packaging films platform with moderate leverage (28× bear, 32× base, 34× bull), cross-checked with TTM operating profit near ₹3,817 crore at sixteen times EV/EBITDA when net debt is near ₹4,400 crore. Bear FY27 profit after tax ₹2,050 crore implies about ₹1,937 per share (-22% vs ₹2,486 reference). Base profit after tax ₹2,650 crore implies about ₹2,905 (+17%). Bull profit after tax ₹2,950 crore implies about ₹3,382 (+36%). Base case clears the fifteen percent upside hurdle versus reference if management delivers low double digit FY27 revenue with average operating profit margin near twenty-two percent and net cash from operations stays above ₹2,500 crore while borrowings remain below ₹5,300 crore.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1937, 2905, 3382, 2486], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [3819, 3640, 3713, 4615, 5033], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Refrigerant and specialty fluorochemical pricing commentary on concalls. Chemicals versus technical textiles revenue share in investor decks. Net cash from operations and free cash flow each quarter. Capital work in progress and commissioning milestones. Tyre-cord export volume trends. Energy and fluorspar input costs. Dividend policy and FII holding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹2,486 reference. Base-case target near ₹2,905 per share implies about seventeen percent upside with confirming low double digit FY27 revenue trajectory, average operating profit margin near twenty-two percent, and net cash from operations staying above ₹2,500 crore while borrowings remain below ₹5,300 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above twenty-four percent with TTM profit after tax run-rate above ₹2,500 crore. Downgrade toward Neutral if operating profit margin falls below twenty percent with TTM net cash from operations below ₹2,200 crore. Downgrade toward Avoid if refrigerant pricing collapses for a full year with TTM profit after tax below ₹1,800 crore despite stable revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and FY25 MD&A pending full ingestion. Chemicals versus technical textiles segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages by Dahej and other sites need investor presentation updates. Interest capitalisation treatment is flagged by Screener but not fully reconciled here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
