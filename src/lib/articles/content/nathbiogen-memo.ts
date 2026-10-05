import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const nathbiogenMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Nath Bio-Genes (India) Ltd (NSE: NATHBIOGEN, BSE: 537291) is a Nath Group agri-tech company that develops, processes, and markets hybrid and Bt cotton seeds plus field and vegetable seeds across India. Promoter holding was about 45.6% as of June 2026 on Screener, with negligible FII near 0.3% and public holders above 54%. At a reference price of ₹138 on 1 October 2026, market capitalisation is about ₹262 crore on roughly 1.897 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 7.7× on TTM earnings, with book value about ₹358 per share and return on capital employed near 7.1%. The quote sits below the 52-week high of ₹207 and above the ₹126 low, reflecting a small-cap de-rating despite FY26 revenue acceleration and a stock trading near 0.38 times stated book.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Nath Bio-Genes earns when farmers and distributors pay for conditioned hybrid and Bt seed packets, recognised largely on dispatch through a kharif-heavy calendar. Production relies on grower agreements: the company compensates farmers for cultivation on leased or contracted plots, then processes and brands seed for sale through dealers. Revenue mixes cotton Bt packets, hybrid paddy, maize, vegetables, and smaller lines, with plant nutrition adjacencies in some years. Pricing must cover grower payouts, conditioning costs, and distributor margins while staying competitive versus larger seed franchises. Payment quality depends on monsoon timing, cotton illegal seed pressure, and how much credit Nath extends to dealers in stressed geographies.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Incorporated in 1993, Nath Bio-Genes built a regional hybrid seed platform under the Nath Group, surviving the FY22 consolidated loss year (PAT near negative ₹67 crore on Screener) tied to inventory and provisioning noise before returning to profit. Consolidated revenue moved from about ₹234 crore in FY23 to ₹248 crore in FY24, ₹268 crore in FY25, and ₹445 crore in FY26, a sharp step-up as cotton and paddy volumes rebounded. Reported PAT was near ₹35 crore, ₹40 crore, ₹39 crore, and ₹42 crore over FY23 to FY26, so earnings grew far slower than sales. Operating profit margin fell from about 21% in FY23 to 12% in FY26 because grower costs and mix expansion absorbed much of the top-line gain. Q1 FY27 revenue was about ₹328 crore with operating profit margin near 11%, confirming the June quarter still dominates the fiscal year economics.",
  },
  seriesChart(
    "Revenue from operations (₹ crore, Screener consolidated)",
    "Conclusion: FY26 step-up; TTM near ₹490 cr.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [234, 248, 268, 445], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Farmers pay indirectly through distributors and retailers that stock Nath brands in cotton and paddy belts. The grower base that produces seed under rate agreements is fragmented across states, which reduces single-farmer risk but concentrates execution risk in weather and grower compliance. Dealer concentration is not disclosed in the free sources used; management on Q1 FY27 excerpts said it is avoiding new credit in weak cotton geographies while prioritising collections after dispatch. Export revenue is smaller than domestic for Nath versus global peers. Public shareholding above half the register means liquidity exists but free float is still small-cap, so block trades can move the quote more than fundamentals in thin weeks.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Cotton Bt packets remain a core identity for Nath Bio-Genes alongside hybrid paddy and expanding vegetable and maize lines. Screener premium insights on packet volumes are login-gated; FY26 MD&A excerpts cite cotton and paddy as drivers of the revenue jump while vegetables ramp more slowly. Operating profit margin compression in FY26 suggests mix shifted toward higher-volume, lower-margin packets or costlier grower settlements. Plant nutrition and micronutrient adjacencies appear in company descriptions but are not broken out in our ingested tables. Without crop-wise revenue percentages, we treat cotton plus paddy as the majority of FY26 growth and monitor whether vegetable lines can lift OPM back toward mid-teens.",
  },
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: PAT stable near ₹40 cr while sales scaled.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [35, 40, 39, 42], color: "#c27803" }],
  ),
  seriesChart(
    "OPM % (consolidated, Screener)",
    "Conclusion: Margin fell as revenue accelerated in FY26.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "OPM %", values: [21, 20, 19, 12], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Monsoon onset and cotton acreage decisions in Maharashtra, Telangana, and Gujarat drive packet offtake and inventory planning. Illegal cotton seed packets compress legitimate Bt volumes and pricing power, a structural headwind shared with larger listed seed names in this repo. Government trait approval timelines and state-level hybrid rice policies can open or close markets for new launches. Grower wage and input inflation flows into seed production agreements with a lag to selling prices. Small-cap liquidity and Nath Group related-party perception can dominate short-term price action. Peer multiples for Kaveri Seed and other hybrid franchises anchor sentiment even though Nath is far smaller and more leveraged on working capital.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "FY26 consolidated operating profit was near ₹52 crore on ₹445 crore revenue, down to 12% OPM from 19% in FY25 despite higher absolute rupees. Interest expense near ₹16 crore in FY26 matters on this market cap, and borrowings rose to about ₹138 crore at March FY26 while the company is not debt-free. Return on equity was about 5.5% and ROCE about 7.1% on Screener, far below Kaveri Seed’s mid-teens returns. Other income near ₹14 crore in FY26 supports PAT when operating leverage is thin. The FY22 loss year remains a reminder that seed inventory and provisioning can swing reported earnings; investors should focus on multi-year cash conversion, not one good June quarter alone.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, FY23–FY26)",
    "Conclusion: Gap widened as interest and below-the-line items matter.",
    ["FY23", "FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [49, 50, 51, 52], color: "#1e3a5f" },
      { name: "PAT", values: [35, 40, 39, 42], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹38 crore in FY23 and ₹75 crore in FY24, then slowed to ₹18 crore in FY25 and turned negative near ₹13 crore in FY26 on Screener even as PAT was ₹42 crore. Free cash flow was negative near ₹16 crore in FY26, matching the pattern we flagged for Kaveri Seed in the prior hand memo when inventory days spike. Debtor days improved toward 70 at March FY26, but working capital days were still near 253, so inventory conditioning ahead of kharif remains the binding constraint. Until FY27 delivers at least ₹25 crore net CFO while PAT holds near ₹40 crore, headline earnings overstate near-term distributable cash and keep our conviction at medium despite a statistically cheap P/E.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, Screener)",
    "Conclusion: FY26 CFO negative is the key quality flag.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [38, 75, 18, -13], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Borrowings (₹ crore, Mar year-end)",
    "Conclusion: Leverage rising with inventory funding needs.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [105, 110, 123, 138], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Contingent liabilities of about ₹89.3 crore on Screener equal roughly one-third of market capitalisation and can create sudden provisions or tax noise if cases move adversely. Rising borrowings with negative FY26 CFO reduce flexibility if a weak monsoon delays collections. Grower agreement disputes or crop failure on contracted plots can force write-offs in inventory. Low ROCE suggests the asset base earns poorly relative to expansion; further revenue growth without margin recovery would dilute book value slowly rather than crash the balance sheet. Promoter holding near 46% is stable but not a majority control cushion like Kaveri’s 60% plus register.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Nath Bio-Genes operates as the flagship listed agri entity of the Nath Group with long-tenured promoter leadership focused on hybrid seed reach rather than public-market liquidity events. Dividend payout near 9% on FY26 PAT signals modest cash return while retaining earnings for inventory and processing capacity. Executive compensation detail is not load-bearing in our sources, but low FII ownership means fewer external governance checks than mid-cap platform names. Incentives align with volume growth, which FY26 delivered; the open question is whether management will prioritise margin and cash conversion equally in FY27.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY26 messaging promised volume growth through distributors and hybrid lines; revenue beat sharply versus FY25. Margin promises to hold mid-teens OPM were missed as FY26 OPM landed near 12%. Cash conversion commitments implied seasonal normalization, yet FY26 net CFO was negative. Q1 FY27 dispatch targets were met with revenue near ₹328 crore and PAT near ₹32 crore, but that is one quarter. Contingent liability monitoring remains pending with no quantified outcome. Guidance credibility improves on volume execution and weakens on margin and cash until FY27 half-year results print.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is cotton Bt packet recovery if illegal seed pressure eases in core states. Second is hybrid paddy and maize expansion where Nath already has germplasm and dealer relationships. Third is vegetable seed lines that can lift mix if OPM recovers. Fourth is debtor discipline and inventory turns that flip CFO positive without starving dispatch. Fifth is modest operating leverage on fixed processing assets if revenue grows high single digits with stable grower costs. None of these require equity raises if borrowings plateau near ₹130 crore and contingent cases stay non-cash.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon plus cotton acreage stability lifts FY27 revenue toward ₹520 crore with OPM back toward 14%. Net CFO exceeds ₹60 crore as inventory days fall after peak dispatch. Contingent liabilities resolve with immaterial cash impact. ROCE re-tests 11% and the market re-rates toward 8.5 times forward earnings. FY27 PAT could approach ₹52 crore and support our bull band near ₹233 per share on that path.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Weak cotton season and persistent illegal packets keep revenue flat near ₹460 crore with OPM near 9%. FY27 net CFO stays negative while borrowings cross ₹150 crore. Legal provisions or tax spikes cut PAT toward ₹34 crore. ROCE stays near 6% and the stock de-rates toward 6.5 times earnings. Equity could drift toward our bear case near ₹116 per share, down about 16% from the ₹138 reference.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a small-cap hybrid seed franchise with working capital risk (6.5× bear, 7.5× base, 8.5× bull), cross-checked with FY26 operating profit near ₹52 crore at 8× EV/EBITDA less net debt near ₹120 crore implying about ₹156 per share before a contingent liability discount. Bear FY27 PAT ₹34 crore implies about ₹116 per share (-16% vs ₹138 reference). Base PAT ₹41 crore implies about ₹162 (+17%). Bull PAT ₹52 crore implies about ₹233 (+69%). Base case clears the fifteen percent upside hurdle required for a Buy at the reference price, contingent on FY27 cash conversion improving from the FY26 trough.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears 15% upside; bear reflects cotton and legal stress.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [116, 162, 233, 138], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Q1 FY27 vs Q1 FY26 revenue (₹ crore, Screener)",
    "Conclusion: June quarter growth supports FY27 volume bridge.",
    ["Q1 FY26", "Q1 FY27"],
    [{ name: "Sales", values: [284, 328], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE filings with cotton and paddy commentary. Monsoon and cotton acreage updates from IMD and state agriculture departments. Net cash from operations each half-year versus PAT. Borrowings and contingent liability footnotes in annual and quarterly reports. Debtor days and working capital days on Screener after September and December quarters. New hybrid launch announcements and trait approval news. Peer pricing for cotton Bt packets in key districts. Promoter or Nath Group related-party transactions if disclosed.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹138 reference. Base-case target near ₹162 per share offers about 17% upside with FY27 revenue near ₹490 crore, OPM near 11%, and net CFO turning positive. Upgrade toward bull if two consecutive quarters show OPM above 13% with net CFO above ₹30 crore cumulative and borrowings flat to down while contingent liabilities do not increase. Downgrade toward Neutral if FY27 revenue growth falls below 5% with OPM below 10% and net CFO stays negative while borrowings rise above ₹150 crore, cutting base PAT toward ₹36 crore and target below ₹140. Downgrade toward Avoid if PAT falls below ₹30 crore with a material cash provision on contingent cases and ROCE below 6% while interest coverage tightens.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Crop-wise revenue splits and cotton Bt packet volumes require annual report tables not yet ingested line by line. Exact dealer count and top-customer concentration are not in free sources. Dollar export contribution is not disclosed. Screener premium insights on R&D spend percent of sales are login-gated. Update bear, base, and bull when FY26 integrated annual report segment notes, contingent liability detail, and tax reconciliation publish.",
  },
];
