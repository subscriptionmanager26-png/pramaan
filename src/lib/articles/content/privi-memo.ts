import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const priviMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Privi Speciality Chemicals Ltd (NSE: PRIVISCL, BSE: 530117) manufactures and exports bulk aroma and fragrance chemicals including guaiacol, phenolic derivatives, and related intermediates used in fine fragrance, detergents, shampoos, and personal care formulations globally. The company ranks among the largest Indian exporters in several aroma molecules with promoter holding about 60.6% as of June 2026 on Screener after a qualified institutional placement diluted the stake from seventy-four percent. The stock is in Nifty 500, Nifty MidSmallcap 400, and related indices with active DII participation near ten percent. At a reference price of ₹3,573 on 1 October 2026, market capitalisation is about ₹13,957 crore on roughly 3.91 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 39.9 on TTM earnings per share about ₹89.47, with book value about ₹361 per share and return on capital employed near 22.3%. The quote sits below the 52-week high of ₹3,785 and above the ₹2,310 low after a one-year price gain near forty-eight percent while TTM profit after tax reached ₹342 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Privi earns conversion margin on phenolic feedstocks and proprietary processes that produce aroma chemicals sold under long-term supply relationships to global fragrance houses and domestic formulators. Revenue is recognised largely on dispatch with export invoicing in dollars, so rupee translation and spread between key raw materials and finished aroma prices move operating profit margin by two to four percentage points quarter to quarter. Payment cycles run through debtor days near seventy-five Mar FY26 and inventory near two hundred thirty-five days as campaign stock builds for export shipments, so net cash from operations can lag operating profit during rapid volume ramps even though FY26 delivered ₹550 crore net cash from operating activities on ₹651 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Privi scaled from a regional phenolic player into a global aroma champion over two decades, with FY24 representing a margin recovery year near nineteen percent operating profit margin before FY25 and FY26 expanded volumes and pricing on flagship molecules. Consolidated revenue moved from ₹1,752 crore in FY24 to ₹2,101 crore in FY25 and ₹2,564 crore in FY26 with TTM sales near ₹2,671 crore. Operating profit followed ₹329 crore, ₹458 crore, and ₹651 crore across the same years. Reported profit after tax rose from ₹95 crore in FY24 to ₹317 crore in FY26 with TTM profit after tax near ₹342 crore. Borrowings fell from ₹1,143 crore toward ₹1,021 crore Mar FY26 while capital work in progress rose toward ₹314 crore as debottlenecking and greenfield aroma lines advanced.",
  },
  seriesChart(
    "Revenue from operations (₹ crore, Screener consolidated)",
    "Conclusion: TTM ₹2,671 cr; Jun 2026 quarter ₹666 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1752, 2101, 2564, 2671], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include multinational fragrance and flavour houses, Indian fast-moving consumer goods formulators, and export traders serving regulated markets in Europe and North America. Company materials cite global leadership in more than ten products without disclosing top-customer revenue share in free tables; Screener gates export mix detail behind premium login. Promoter holding near sixty-one percent after the qualified institutional placement aligns incentives with capacity investments while DII holding near ten percent adds index-driven liquidity. Concentration risk is moderate: loss of a flagship molecule price reset or a prolonged outage at a coastal manufacturing site can move consolidated operating profit by low triple-digit crore rupees annually.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Guaiacol, vanillin-related chains, and phenolic aroma intermediates supply the majority of revenue with newer backward-integrated molecules adding margin as capacity qualifies customers. Management on the August 2026 call emphasised firm export demand while cautioning that raw material volatility can compress spreads in quarters following peak margin prints such as September 2025 when operating profit margin touched twenty-seven percent. Investors should treat sustained quarterly revenue above six hundred fifty crore rupees at mid-twenties operating profit margin and return on capital employed above twenty-two percent as the central swing factors for holding a premium trailing multiple.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average twenty-five percent; Q1 FY27 at twenty-three percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [19, 22, 25, 25], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT ₹317 cr; TTM ₹342 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [95, 185, 317, 342], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global fine fragrance demand, Chinese competitor pricing on phenolic chains, and crude-linked raw material costs shift volume before contract resets on annual supply agreements. Rupee moves against the dollar affect reported revenue on export-heavy quarters. Peer re-rating on Indian specialty chemical names including Jubilant Ingrevia and Paushak in this repo sets sentiment for integrated aroma platforms even when Privi’s market capitalisation is larger. The move from ₹2,310 toward ₹3,785 over fifty-two weeks can dominate short-term action even when Jun 2026 results show continued profit growth.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year profit compound growth near twenty-seven percent on Screener masks the FY23 trough when operating profit margin fell toward twelve percent before the FY24–FY26 recovery. Ten-year sales compound growth near fifteen percent reflects both organic volume and capacity additions. Return on capital employed rebounded from six percent FY23 toward twenty-two percent FY26 as assets earned on higher utilisation. Dividend payout near twelve percent FY26 at reference reflects reinvestment priority while borrowings remain above ₹1,000 crore.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE twenty-two percent TTM; upcycle from FY23 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [12, 16, 22], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹354 crore exceeded operating profit ₹329 crore with CFO to operating profit near one hundred sixteen percent. FY25 net cash from operations ₹281 crore trailed operating profit ₹458 crore as working capital absorbed cash during inventory build. FY26 net cash from operations ₹550 crore on operating profit ₹651 crore delivered CFO to operating profit near one hundred two percent. Free cash flow turned positive near ₹230 crore FY26 after investing outflows near ₹358 crore funded capacity. If inventory days fall toward two hundred while revenue holds, profit after tax can align with net cash from operations without signalling earnings quality issues, but sustained negative free cash flow with borrowings above ₹1,150 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO ₹550 cr; FCF positive after capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [354, 281, 550], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹1,021 crore Mar FY26 against reserves ₹1,373 crore leave headroom, but interest expense near ₹75 crore TTM can compress profit after tax if operating profit margin reverts below twenty-two percent. Capital work in progress near ₹314 crore ties up capital; a prolonged stretch of quarterly revenue below six hundred crore rupees with ROCE below eighteen percent and borrowings above ₹1,150 crore without matching free cash flow would be the early warning. Aroma spread collapses similar to FY23 would also pressure covenants even when absolute leverage looks manageable versus reserves.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Deleveraging from FY25 peak; still above ₹1,000 cr.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [1008, 1143, 1021], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The promoter group led by executive chairman Sudhir Mehta and managing director Mahesh Mehta controls Privi with promoter holding near sixty-one percent after the qualified institutional placement brought DII ownership toward ten percent. Leadership emphasises global customer intimacy and backward integration as the competitive moat. Dividend payout near twelve percent FY26 offers modest cash return while promoters funded expansion partly through debt and equity issuance. Higher public float after the placement improves liquidity but dilutes near-term earnings per share.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 volume and margin guidance was met with revenue up twenty percent and profit after tax up ninety-five percent. FY26 profitability expansion beat with profit after tax up seventy-one percent and operating profit margin twenty-five percent. Q1 FY27 revenue and profit after tax met expectations with Jun 2026 quarter revenue ₹666 crore and profit after tax ₹83 crore. Amalgamation of Privi Fine Sciences entities remains pending toward late calendar 2026. FY27 mid-teens revenue growth with mid-twenties operating profit margin remains the operating target.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Debottlenecked aroma capacity, backward integration into feedstocks, and export share gains in regulated markets are the primary drivers. Operating leverage on fixed manufacturing assets can lift profit after tax faster than revenue if quarterly sales sustain above six hundred fifty crore rupees. Deleveraging as free cash flow funds repayments would support return on capital employed above twenty-four percent and justify premium multiples.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹480 crore with operating profit margin sustained above twenty-six percent, quarterly revenue holding above seven hundred crore rupees in two of four quarters, and the market holding a forty-two times forward price-to-earnings multiple, implying a target near ₹5,156 per share or about forty-four percent above reference. Triggers include two consecutive quarters with TTM net cash from operations above ₹600 crore and borrowings trending below ₹900 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹280 crore with operating profit margin reverting toward twenty-one percent on spread compression, with the market applying a thirty-two times multiple, implying a target near ₹2,291 per share or about thirty-six percent below reference. Triggers include quarterly revenue falling below ₹550 crore with borrowings above ₹1,150 crore and TTM free cash flow turning negative.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Privi on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹850 crore. Base FY27E profit after tax ₹400 crore at thirty-eight times implies about ₹3,887 per share, or about nine percent above the ₹3,573 reference. Bear FY27E profit after tax ₹280 crore at thirty-two times implies about ₹2,291. Bull FY27E profit after tax ₹480 crore at forty-two times implies about ₹5,156. Trailing price-to-earnings near forty times already embeds the FY26 profit ramp while borrowings near ₹1,021 crore limit margin of safety until deleveraging accelerates.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; leverage is the constraint.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [2291, 3887, 5156, 3573], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter ₹666 cr vs ₹559 cr year ago.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [559, 679, 605, 722, 666], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Aroma spread and raw material commentary on concalls. Capacity commissioning and capital work in progress updates. Borrowings, interest expense, and free cash flow each quarter. Amalgamation scheme approval with stock exchanges and NCLT milestones. Export demand signals from global fragrance houses and peer results in this repo.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹3,573 reference. Base-case target near ₹3,887 per share implies about nine percent upside, below the fifteen percent Buy hurdle, with confirming average operating profit margin near twenty-five percent for FY27, profit after tax run-rate above ₹85 crore per quarter after normalising seasonality, and return on capital employed above twenty-two percent while borrowings trend below ₹950 crore. Upgrade toward Buy if two consecutive quarters show consolidated revenue at or above ₹700 crore with TTM profit after tax above ₹380 crore and return on capital employed above twenty-four percent with borrowings below ₹900 crore. Downgrade toward Avoid if operating profit margin falls below twenty-one percent with TTM profit after tax below ₹300 crore or borrowings above ₹1,200 crore without matching free cash flow.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call and MD&A pending full ingestion. Product-wise revenue splits and customer concentration percentages are login-gated on Screener premium tables. Exact volume in metric tonnes per flagship molecule need investor presentation updates. Segment profit for newly commissioned lines is absent in public filings we accessed. Update bear, base, and bull when amalgamation pro forma financials and plant-wise volume metrics publish in exchange filings.",
  },
];
