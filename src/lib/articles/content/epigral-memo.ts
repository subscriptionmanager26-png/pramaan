import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const epigralMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Epigral Ltd (NSE: EPIGRAL, BSE: 543332), formerly Meghmani Finechem, is an integrated manufacturer of chlor-alkali derivatives, chloromethanes, hydrogen peroxide, CPVC resin and compounds, epichlorohydrin, and other specialty chemicals at Dahej, Gujarat. Promoter holding was about 68.83% as of June 2026 on Screener, with FIIs near 1.03% and DIIs near 5.56%. The stock is in BSE Commodities and BSE 1000 indices. At a reference price of ₹982 on 1 October 2026, market capitalisation is about ₹4,237 crore on roughly 4.31 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 15.6 on TTM earnings per share about ₹62.82, with book value about ₹515 per share and return on capital employed near 15.5%. The quote sits below the 52-week high of ₹1,760 and above the ₹806 low after a forty-four percent one-year price fall while TTM profit after tax normalised from the FY25 peak.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Epigral earns conversion margin on captive chlorine and caustic consumed in chloromethanes, hydrogen peroxide, CPVC, and epichlorohydrin sold to infrastructure, water treatment, pharmaceutical, and agrochemical customers under contract and spot pricing. Revenue is recognised largely on dispatch; power, salt, and methanol costs flow through cost of materials with partial lag on quarterly contracts, so operating profit margin expands when specialty realisations improve and compresses when chloromethane export prices soften. Payment cycles run through debtor days near sixty Mar FY26 and inventory days near eighty-nine, so net cash from operations can trail operating profit when export collections slip, though FY25 still delivered ₹441 crore net cash from operations on ₹711 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Epigral scaled from a chlor-alkali base into specialty derivatives over two decades and rebranded after Meghmani Finechem demerged growth assets. Consolidated revenue moved from ₹1,929 crore in FY24 to ₹2,550 crore in FY25 and ₹2,527 crore in FY26 with TTM sales near ₹2,626 crore. Operating profit followed ₹481 crore, ₹711 crore, and ₹566 crore across the same years with TTM operating profit near ₹582 crore after the June 2026 quarter. Reported profit after tax moved from ₹196 crore in FY24 to ₹358 crore in FY25 and ₹332 crore in FY26 with TTM profit after tax near ₹271 crore after weak September and December 2025 quarters. Borrowings fell toward ₹572 crore while capital work in progress rose near ₹451 crore as chlorotoluene and downstream projects advanced.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM near ₹2,626 cr after Q1 FY27 rebound.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1929, 2550, 2527, 2626], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic CPVC pipe makers, water treatment formulators, pharmaceutical and agrochemical producers, and export buyers for chloromethanes and hydrogen peroxide. Company materials cite leadership positions in select chloromethanes and hydrogen peroxide grades; Screener gates exact top-account concentration time series. Promoter holding near sixty-nine percent supports long-term capex while public float above thirty percent matters for liquidity after the one-year price correction. Concentration risk is moderate: delay in a large CPVC order or a sharp chloromethane price correction can still move consolidated operating profit by high single digit crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Derivatives and specialty chemicals supplied over fifty percent of FY26 revenue versus twenty-five percent in FY22 per Screener product commentary, with chloromethanes, hydrogen peroxide, CPVC resin and compounds, and epichlorohydrin as the primary profit pools. Exact segment profit splits require investor presentations; investors should treat CPVC infrastructure pull, chloromethane export realisation, and epichlorohydrin utilisation as the central swing factors for consolidated return on capital employed recovering from fifteen percent toward high teens.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY25 peak twenty-eight percent; TTM at twenty-two percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [25, 28, 22, 22], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹271 cr after H2 FY26 softness.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [196, 358, 332, 271], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Chinese chloromethane and hydrogen peroxide export pricing moves Epigral realisations before domestic volumes fully adjust, as FY26 demonstrated when operating profit margin fell from twenty-eight percent toward twenty-two percent. Caustic soda and power costs on the Gujarat grid affect chlor-alkali conversion margins with partial pass-through lag. CPVC demand ties to infrastructure and plumbing cycles; epichlorohydrin prices correlate with epoxy resin end markets. Indian specialty chemical peer re-rating (Deepak Nitrite and Aarti Industries in this repo) sets sentiment for integrated Dahej names. Rising debtor days toward sixty can dominate free cash flow narrative even when profit after tax rebounds in Q1 FY27.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near twenty-five percent on Screener masks the FY24 correction when sales fell from ₹2,188 crore in FY23 to ₹1,929 crore before FY25 re-accelerated. Operating profit margin peaked near twenty-eight percent in FY25 before compressing toward twenty-two percent in FY26 as realisations normalised. Profit after tax troughed in FY24 at ₹196 crore before reaching ₹358 crore in FY25. Return on capital employed fell from twenty-five percent toward fifteen percent as capital employed rose and H2 FY26 margins softened. Dividend payout near six percent reflects reinvestment priority on chlorotoluene and specialty derivative capex.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE troughed at fifteen percent in FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [17, 25, 15], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹436 crore exceeded profit after tax ₹332 crore, with CFO to operating profit near ninety percent after FY25 net cash from operations ₹441 crore at seventy-eight percent of operating profit. FY24 net cash from operations ₹398 crore was strong at ninety-three percent of operating profit. Capital expenditure and investing outflows kept free cash flow positive only ₹50 crore in FY26 despite moderated capex versus FY25. If debtor days stay near sixty with export collections delayed, profit after tax can outpace net cash from operations temporarily without signalling permanent earnings quality issues, but two weak CFO years would be a downgrade trigger.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO stayed above ₹430 cr in FY25–FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [398, 441, 436], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹572 crore Mar FY26 against reserves near ₹2,178 crore leave balance-sheet risk tied to capex execution rather than immediate solvency. Interest expense near ₹72 crore FY26 on operating profit ₹566 crore leaves coverage above seven times, but capital work in progress near ₹451 crore shows another investment cycle underway. A prolonged stretch of sub-twenty percent operating profit margin with negative free cash flow and rising borrowings above ₹700 crore would be the early warning, not a single weak quarter such as September 2025 when profit after tax was ₹51 crore.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage fell after FY25 prepayment; stable in FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [964, 593, 572], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Meghmani group founded the predecessor entity and retains majority control through Epigral with professional management driving Dahej integration and specialty mix. Executive compensation ties to profitability and project milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near ₹5 per share offers minority holders modest cash return while promoters reinvest through retained earnings and phased capex. Insider trading windows and promoter pledging are monitored on exchange filings; Screener shows promoter holding stable near sixty-nine percent as of June 2026. Alignment is reasonable for a family-influenced industrial platform but cyclical margins raise the cost of mistimed expansion for minority holders.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue and specialty mix guidance was beat with ₹2,550 crore sales and derivatives above fifty percent of revenue. FY25 cash and deleveraging guidance was met with ₹441 crore net cash from operations and borrowings near ₹593 crore. FY26 revenue growth guidance was partially met with flat ₹2,527 crore sales though TTM crossed ₹2,626 crore. FY26 return on capital employed toward high teens was missed at fifteen percent. FY27 revenue guide toward ₹2,600 to ₹2,700 crore is pending; Q1 FY27 revenue ₹705 crore and profit after tax ₹100 crore support the trajectory but need H2 margin confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Chlorotoluene value chain and downstream specialty projects add high-margin volume as capital work in progress converts. CPVC compound demand from infrastructure and plumbing upgrades adds revenue with operating leverage on integrated chlorine. Hydrogen peroxide utilisation above eighty-five percent and epichlorohydrin normalisation add margin when export chloromethane prices stabilise. Operating leverage drops incremental revenue to profit at high marginal rates when power costs moderate. Working capital release if debtor days fall below fifty days frees cash for dividends or further deleveraging.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees specialty mix rise above sixty percent, operating profit margin sustain mid-twenties in H2 FY27, and borrowings flat, lifting profit after tax near ₹340 crore at eighteen times multiple and re-rating the stock toward ₹1,420 per share as return on capital employed returns toward eighteen percent. Faster-than-guided CPVC demand at normalized chloromethane prices adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near eighteen percent on chloromethane oversupply, leaves profit after tax near ₹220 crore at thirteen times multiple and ₹664 per share, down roughly thirty-two percent from reference. Prolonged capex with borrowings above ₹700 crore and CWIP stuck above ₹500 crore would force investors to haircut multiples despite integrated cost advantages.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an integrated chlor-alkali and specialty platform with cyclical chloromethane exposure (13× bear, 16× base, 18× bull), cross-checked with TTM operating profit near ₹582 crore at nine times EV/EBITDA when net debt near ₹500 crore caps downside near ₹1,090 per share only if margins re-expand to mid-twenties. Bear FY27 profit after tax ₹220 crore implies about ₹664 per share (-32% vs ₹982 reference). Base profit after tax ₹280 crore implies about ₹1,040 (+6%). Bull profit after tax ₹340 crore implies about ₹1,420 (+45%). Base case does not clear the fifteen percent upside hurdle versus reference while trailing price-to-earnings near sixteen times embeds normalisation risk after the FY25 peak.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers mid-single-digit upside, below Buy hurdle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [664, 1040, 1420, 982], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter rebounded to ₹705 cr.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [607, 587, 597, 736, 705], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. CPVC and chloromethane price trends versus Chinese exports. Debtor days, inventory days, and net cash from operations each quarter. Borrowings, capital work in progress, and project commissioning updates on concalls. Hydrogen peroxide and epichlorohydrin utilisation commentary. Dividend policy and DII holding changes. Power tariff and caustic soda cost moves on Gujarat industrial grid.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹982 reference. Base-case target near ₹1,040 per share implies about six percent upside, below the fifteen percent Buy hurdle, with confirming low-twenties operating profit margin, profit after tax run-rate above ₹65 crore per quarter, and borrowings stable near ₹570 crore while net cash from operations stays above ₹400 crore annualised. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty-four percent with TTM profit after tax above ₹300 crore and return on capital employed toward seventeen percent. Downgrade toward Avoid if operating profit margin falls below eighteen percent with TTM net cash from operations below ₹350 crore or borrowings exceed ₹700 crore without matching project revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the July 2026 earnings call transcript and MD&A pending full ingestion. Derivatives versus chlor-alkali revenue splits and export share are login-gated on Screener premium capacity tables. Exact utilisation percentages for epichlorohydrin and chlorotoluene projects need investor presentation updates. Customer concentration percentages are premium-gated. Update bear, base, and bull when consolidated segment EBIT and plant-wise volume metrics publish in the annual report.",
  },
];
