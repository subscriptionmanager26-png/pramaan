import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const jublingreaMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Jubilant Ingrevia Ltd (NSE: JUBLINGREA, BSE: 543271) is a global integrated life-science products company manufacturing pyridine and beta picoline derivatives, Vitamin B3 (niacinamide), acetic anhydride, specialty chemicals, nutrition ingredients, and custom research and manufacturing (CRAM) services for pharmaceutical and agrochemical customers. Promoter holding was about 45.22% as of June 2026 on Screener after a qualified institutional placement, with FIIs near 6.49% and DIIs near 24.98%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹638 on 4 October 2026, market capitalisation is about ₹10,162 crore on roughly 15.93 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 32 on TTM earnings per share about ₹19.37, with book value about ₹196 per share and return on capital employed near 11.4%. The quote sits below the 52-week high of ₹795 and above the ₹535 low after a four percent one-year price decline while TTM profit after tax grew near fifteen percent.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Jubilant Ingrevia earns conversion and formulation margin on specialty pyridine chemistry, nutrition actives, and acetic anhydride sold to global pharma, agrochemical, and industrial customers, plus exclusive CDMO manufacturing fees on long-duration contracts. Revenue is recognised largely on dispatch; acetic acid and energy costs flow through cost of materials with partial lag on quarterly contracts, so operating profit margin expands when pyridine and anhydride realisations improve and compresses when feedstock spikes faster than customer resets. Payment cycles run through debtor days near sixty-five Mar FY26 and inventory days near one hundred forty, while working capital days improved toward twenty-two on payables management, so net cash from operations can exceed profit after tax when payables stretch, as FY26 demonstrated when profit after tax reached ₹278 crore and net cash from operations ₹524 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Jubilant Ingrevia demerged from Jubilant Life Sciences in 2021 to focus on specialty chemicals, nutrition, and CRAM, building on more than forty years of pyridine leadership at Bharuch and Gajraula. Consolidated revenue moved from ₹4,136 crore in FY24 to ₹4,178 crore in FY25 and ₹4,388 crore in FY26 with TTM sales near ₹4,651 crore. Operating profit followed ₹427 crore, ₹519 crore, and ₹568 crore across the same years with TTM operating profit near ₹624 crore after the June 2026 quarter. Reported profit after tax rose from ₹183 crore in FY24 to ₹278 crore in FY26 with TTM profit after tax near ₹309 crore. Borrowings stayed near ₹792 crore while capital work in progress fell toward ₹154 crore Mar FY26 as Gajraula assets capitalised.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM near ₹4,651 cr after Q1 FY27 volume lift.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [4136, 4178, 4388, 4651], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include fifteen of the top twenty global pharma companies and seven of the top ten global agrochemical companies per company disclosures, with export revenue share material but login-gated on Screener premium tables. Promoter stake fell from fifty-one percent toward forty-five percent after the qualified institutional placement to meet minimum public shareholding norms, increasing free float for DIIs without signalling distress. Concentration risk is moderate: a two-quarter pyridine price correction or lumpy CDMO order timing can move consolidated operating profit by low double-digit crore rupees per quarter, as FY24 demonstrated when profit after tax troughed near ₹183 crore.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Specialty chemicals and nutrition together supplied roughly sixty-two percent of revenue in recent commentary with share expected to rise under the Pinnacle345 strategy, while acetic anhydride and related Essentials benefit from domestic market share when acetic acid prices rise. Agrochemical CDMO revenue is lumpy quarter to quarter on exclusive contract milestones. Investors should treat pyridine and Vitamin B3 pricing, specialty mix, CDMO utilisation, and Gajraula ramp as the central swing factors for consolidated return on capital employed moving from eleven percent toward low teens.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 OPM thirteen percent; Q1 FY27 fifteen percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [10, 12, 13, 13], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹309 cr after Q1 FY27 ₹106 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [183, 251, 278, 309], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global pyridine and beta picoline supply-demand and Chinese export pricing move Jubilant Ingrevia realisations before volume fully adjusts, as FY24 demonstrated when operating profit margin compressed toward ten percent before recovering in FY26. Acetic acid feedstock spikes affect acetic anhydride spreads with partial domestic market share gains when competitors face cost pressure. Agrochemical CDMO contract news and utilisation updates drive the specialty re-rating narrative. Gajraula multi-purpose plant commissioning and the large agrochemical innovator CDMO block at Bharuch dominate capex and return on capital employed discussion. Peer multiples on Laxmi Organic, Epigral, and Alkyl Amines in this repo anchor sentiment for Indian acetyls and specialty names.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Three-year sales compound growth near negative three percent on Screener masks the FY22 peak margin year when return on capital employed touched twenty-nine percent before normalising toward eleven percent in FY26 as capital employed rose. Profit after tax rebounded from ₹183 crore in FY24 toward TTM near ₹309 crore on acetic anhydride tailwinds and specialty volume. Return on equity held near ten percent despite book value trading above three times on growth capex. Dividend yield near 0.78 percent with payout near twenty-eight percent offers modest cash return while management reinvests four to five hundred crore rupees annually in multi-purpose plants.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE flat near eleven percent in FY25–FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [10, 11, 11], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹524 crore exceeded profit after tax ₹278 crore, with CFO to operating profit near 111 percent after FY25 net cash from operations ₹508 crore at ninety-eight percent of operating profit. FY24 net cash from operations ₹430 crore was strong at 101 percent of operating profit. Capital expenditure kept free cash flow positive ₹235 crore in FY26 on moderated investing intensity versus FY24. If borrowings rise while pyridine prices soften, profit after tax can lag net cash from operations temporarily when payables release, but two weak CFO years with leverage above ₹900 crore would be a downgrade trigger.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO stayed above ₹500 cr in FY25–FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [430, 508, 524], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹792 crore Mar FY26 against reserves near ₹3,110 crore leave balance-sheet risk tied to Gajraula execution and CDMO order timing rather than immediate solvency. Interest expense near ₹49 crore FY26 on operating profit ₹568 crore leaves coverage above eleven times. A prolonged stretch of sub-eleven percent operating profit margin with free cash flow turning negative and borrowings above ₹900 crore without matching Gajraula revenue would be the early warning, not a single strong quarter such as June 2026 when profit after tax was ₹106 crore on acetic anhydride tailwinds management may not repeat every quarter.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage stable near ₹790 cr through capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [740, 764, 792], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Jubilant group founded the business and retains significant influence with professional management driving Pinnacle345 and CDMO expansion. Executive compensation ties to profitability and project milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near thirty percent of profits offers minority holders cash return while promoters completed a qualified institutional placement to meet public float norms rather than exit the story. Promoter holding fell from fifty-one percent toward forty-five percent over two years on Screener. Alignment is reasonable for a group-influenced specialty platform but cyclical pyridine margins raise the cost of mistimed capex for minority holders.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was partially met with ₹4,178 crore sales though top line grew only one percent. FY25 cash guidance was met with net cash from operations ₹508 crore and positive free cash flow. FY26 revenue guidance toward mid-single-digit growth was beat at five percent with TTM near ₹4,651 crore. FY26 return on capital employed improvement was partially met at eleven percent flat. FY27 EBITDA guidance of ₹750 to eight hundred crore including other income is pending; Q1 FY27 revenue ₹1,300 crore and profit after tax ₹106 crore support the guide but need H2 CDMO orders and stable pyridine pricing.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Gajraula multi-purpose plant commercial production adds flexible capacity repurposable across molecules as customer requirements evolve, supporting management's twenty-five billion rupee incremental revenue potential from cumulative twenty billion rupee capex. Bharuch agrochemical CDMO block ramps on the large innovator contract with lumpy quarterly revenue. Specialty chemicals and nutrition mix rising above sixty-five percent lifts blended margin. Acetic anhydride domestic share gains when acetic acid prices stay elevated add Essentials profit. Working capital days near twenty-two with rising sales can release cash for dividends and deleveraging after Gajraula spend peaks.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees Gajraula and CDMO utilisation above seventy-five percent, operating profit margin sustain mid-fifteen percent through FY27, and borrowings flat near ₹790 crore, lifting profit after tax near ₹420 crore at thirty-five times multiple and re-rating the stock toward ₹923 per share as return on capital employed moves toward fourteen percent. Sustained pyridine tightness with stable acetic anhydride spreads adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near eleven percent on pyridine oversupply, leaves profit after tax near ₹290 crore at twenty-six times multiple and ₹473 per share, down roughly twenty-six percent from reference. Prolonged capex with borrowings above ₹900 crore and CDMO orders delayed would force investors to haircut multiples despite pyridine leadership.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an integrated life-science specialty and acetyls platform (26× bear, 31× base, 35× bull), cross-checked with TTM operating profit near ₹624 crore at ten times EV/EBITDA when net debt near ₹650 crore caps downside near ₹370 per share only if margins revert to FY24 trough levels. Bear FY27 profit after tax ₹290 crore implies about ₹473 per share (-26% vs ₹638 reference). Base profit after tax ₹360 crore implies about ₹701 (+10%). Bull profit after tax ₹420 crore implies about ₹923 (+45%). Base case clears neither a deep Avoid nor the fifteen percent Buy hurdle while trailing price-to-earnings near thirty-two times embeds acetic anhydride tailwind risk from Q1 FY27.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers low double-digit upside, below Buy hurdle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [473, 701, 923, 638], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter reached ₹1,300 cr.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1038, 1121, 1051, 1179, 1300], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Pyridine, beta picoline, and Vitamin B3 price trends versus Chinese supply. Acetic acid and acetic anhydride spread commentary. Gajraula commissioning and Bharuch CDMO utilisation updates on concalls. FY27 EBITDA guidance of ₹750 to eight hundred crore including other income. Borrowings, capital work in progress, and net cash from operations each quarter. Dividend policy and DII holding changes after the qualified institutional placement.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹638 reference. Base-case target near ₹701 per share implies about ten percent upside, below the fifteen percent Buy hurdle, with confirming average operating profit margin near fourteen percent for FY27, profit after tax run-rate above ₹85 crore per quarter after normalising acetic anhydride tailwinds, and borrowings stable near ₹800 crore while Gajraula revenue begins to contribute. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above fifteen percent with TTM profit after tax above ₹340 crore and return on capital employed toward thirteen percent without leverage above ₹850 crore. Downgrade toward Avoid if operating profit margin falls below eleven percent with TTM net cash from operations below ₹400 crore or borrowings exceed ₹900 crore without matching CDMO sales.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the July 2026 earnings call transcript and MD&A pending full ingestion. Specialty versus nutrition versus acetic anhydride revenue splits and export share are login-gated on Screener premium capacity tables. Exact Gajraula revenue and CDMO utilisation percentages need investor presentation updates. Customer concentration percentages and segment EBIT are premium-gated or absent in public filings we accessed. Update bear, base, and bull when consolidated segment results and plant-wise volume metrics publish in the annual report.",
  },
];
