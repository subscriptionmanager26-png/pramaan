import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const paushakMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Paushak Ltd (NSE: PAUSHAKLTD, BSE: 532742) manufactures phosgene-based specialty chemicals including chloroformates, isocyanates, carbamoyl chlorides, and carbonates for pharmaceutical, agrochemical, dye, and performance material customers, with custom synthesis and CDMO services from Panelav, Gujarat. The company is part of the Alembic group; promoter holding was about 67.3% as of June 2026 on Screener, with negligible FII ownership and public float near thirty-three percent. The stock trades on BSE Commodities indices with modest NSE liquidity. At a reference price of ₹650 on 1 October 2026, market capitalisation is about ₹1,603 crore on roughly 2.47 crore shares (face value ₹5). Trailing standalone price-to-earnings is near 38 on TTM earnings per share about ₹17.19, with book value about ₹199 per share and return on capital employed near 8.3%. The quote sits below the 52-week high of ₹958 and above the ₹342 low after a one-year decline near thirty-two percent while TTM profit after tax fell toward ₹42 crore from the FY24 peak near ₹54 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Paushak earns conversion margin on phosgene and allied feedstocks processed into hazardous specialty intermediates sold under contracts to innovator and generic pharmaceutical makers, agrochemical technical buyers, and industrial clients. Revenue is recognised largely on dispatch; phosgene safety protocols and batch campaign scheduling mean utilisation swings can move operating profit margin by several hundred basis points quarter to quarter. Payment cycles run through debtor days near ninety-two Mar FY26 and inventory near two hundred ninety-two days as raw materials build for campaigns, so net cash from operations can lag operating profit during expansion even though FY26 still delivered ₹54 crore net cash from operating activities on ₹61 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Paushak built India-leading phosgene chemistry over five decades under Alembic group stewardship, with FY24 representing a peak profit after tax near ₹54 crore before FY25 and FY26 absorbed depreciation and interest on a Panelav expansion. Revenue moved from ₹206 crore in FY24 to ₹211 crore in FY25 and ₹219 crore in FY26 with TTM sales near ₹246 crore after the June 2026 quarter reached ₹84 crore. Operating profit followed ₹65 crore, ₹60 crore, and ₹61 crore across the same years. Reported profit after tax fell from ₹54 crore in FY24 to ₹39 crore in FY26 with TTM profit after tax near ₹42 crore. Borrowings rose toward ₹77 crore Mar FY26 while capital work in progress fell to ₹26 crore after assets were capitalised near ₹377 crore gross block.",
  },
  seriesChart(
    "Revenue from operations (₹ crore, Screener standalone)",
    "Conclusion: TTM ₹246 cr; Jun 2026 quarter spiked to ₹84 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [206, 211, 219, 246], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic and export pharmaceutical active ingredient makers, agrochemical formulators buying chloroformates and isocyanates, and industrial clients in dyes and performance chemicals. Company materials cite regulated-market CDMO relationships without disclosing top-customer revenue share in free tables; Screener gates export mix detail. Promoter holding above sixty-seven percent aligns incentives with safety and capacity investments while low FII ownership keeps liquidity thinner than Nifty 500 specialty peers. Concentration risk is moderate: loss of a large agrochemical campaign or extended plant shutdown for phosgene safety review can move consolidated operating profit by low double digit crore rupees annually.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Chloroformates, isocyanates, and carbamoyl chlorides supply the majority of revenue with CDMO and semi-specialty products adding margin as Panelav expansion lines qualify customers. Management on the July 2026 call emphasised higher load factors post commissioning while cautioning that monsoon-linked agrochemical seasons can soften offtake. Investors should treat sustained quarterly revenue above seventy crore rupees at high twenties operating profit margin and return on capital employed recovering toward twelve percent as the central swing factors for re-rating away from the FY26 earnings trough.",
  },
  seriesChart(
    "Operating profit margin % (standalone)",
    "Conclusion: FY26 average twenty-eight percent; Q1 FY27 at thirty-one percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [31, 28, 28, 28], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, standalone)",
    "Conclusion: FY26 trough ₹39 cr; TTM ₹42 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [54, 49, 39, 42], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Agrochemical inventory cycles, pharmaceutical export demand, and rupee moves against dollar invoicing shift volume before pricing resets on annual contracts. Regulatory scrutiny on phosgene handling and environmental compliance can delay campaigns even when demand exists. Peer re-rating on Indian specialty chemical names including Jubilant Ingrevia and Anupam Rasayan in this repo sets sentiment for CDMO-capable intermediates even when Paushak’s market capitalisation is smaller. The move from ₹958 toward ₹342 over fifty-two weeks can dominate short-term action even when the June 2026 quarter shows revenue acceleration.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Ten-year sales compound growth near eleven percent on Screener masks the FY26 profit after tax decline when depreciation near ₹21 crore and interest near ₹2 crore TTM weighed on reported earnings while revenue still grew. Operating profit compound growth turned negative over three years as ROCE fell from seventeen percent FY24 toward eight percent FY26. Dividend payout near sixteen percent FY26 at reference reflects conservative cash return while expansion debt was drawn.",
  },
  seriesChart(
    "Return on capital employed % (standalone, Screener)",
    "Conclusion: ROCE eight percent TTM; expansion dilutes returns.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [17, 11, 8], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹56 crore exceeded operating profit ₹65 crore with CFO to operating profit near eighty-six percent. FY25 net cash from operations ₹38 crore trailed operating profit ₹60 crore as working capital absorbed cash during construction. FY26 net cash from operations ₹54 crore on operating profit ₹61 crore delivered CFO to operating profit near eighty-nine percent. Free cash flow remained negative near ₹34 crore TTM as cash from investing outflows near ₹95 crore funded Panelav capex. If inventory days fall toward two hundred while revenue holds, profit after tax can align with net cash from operations without signalling earnings quality issues, but sustained negative free cash flow with borrowings above ₹90 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO recovered; capex drove negative FCF.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [56, 38, 54], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹77 crore Mar FY26 against reserves ₹479 crore leave headroom, but interest expense stepping up with term debt can compress profit after tax if operating profit margin reverts below twenty-five percent. Fixed assets near ₹377 crore tie up capital; a prolonged stretch of quarterly revenue below sixty crore rupees with ROCE below eight percent and borrowings above ₹100 crore without CDMO revenue would be the early warning. Phosgene safety incidents industry-wide can also trigger shutdown audits irrespective of balance-sheet strength.",
  },
  seriesChart(
    "Borrowings (₹ crore, standalone)",
    "Conclusion: Leverage rose with Panelav expansion capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [0, 25, 77], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Alembic group, led by the Amin family with Chirayu Amin as chairman context per group disclosures, controls Paushak with promoter holding near sixty-seven percent. Executive leadership emphasises safety culture on phosgene operations as the competitive moat. Dividend payout near sixteen percent FY26 offers modest cash return while promoters funded expansion partly through debt. Low public float and minimal FII ownership mean liquidity can gap on results days despite long-term alignment on niche chemistry.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 volume growth guidance was partially met with revenue up two percent but profit after tax down nine percent. Panelav expansion commissioning was met with capital work in progress falling and Jun 2026 quarter revenue jumping. FY26 profit recovery was missed with profit after tax down twenty percent. Q1 FY27 utilisation improvement beat with revenue ₹84 crore and profit after tax ₹15 crore. FY27 return on capital employed toward low teens remains pending.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Downstream chloroformate and isocyanate volumes on commissioned Panelav assets, CDMO molecule wins converting to recurring campaigns, and export penetration in regulated markets are the primary drivers. Operating leverage on phosgene infrastructure can lift profit after tax faster than revenue if quarterly sales sustain above seventy crore rupees. Deleveraging as free cash flow turns positive would support return on capital employed recovery toward twelve percent.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹62 crore with operating profit margin sustained above twenty-nine percent, quarterly revenue holding above eighty crore rupees in two of four quarters, and the market holding a forty times forward price-to-earnings multiple, implying a target near ₹1,004 per share or about fifty-four percent above reference. Triggers include two consecutive quarters with TTM net cash from operations above ₹60 crore and borrowings trending below ₹60 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹35 crore with operating profit margin reverting toward twenty-three percent on agrochemical destocking, with the market applying a twenty-eight times multiple, implying a target near ₹397 per share or about thirty-nine percent below reference. Triggers include quarterly revenue falling below ₹55 crore with borrowings above ₹90 crore and TTM free cash flow remaining negative.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Paushak on forward standalone profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹75 crore. Base FY27E profit after tax ₹50 crore at thirty-four times implies about ₹688 per share, or about six percent above the ₹650 reference. Bear FY27E profit after tax ₹35 crore at twenty-eight times implies about ₹397. Bull FY27E profit after tax ₹62 crore at forty times implies about ₹1,004. Trailing price-to-earnings near thirty-eight times already embeds the June 2026 revenue spike while return on capital employed near 8.3% limits margin of safety until expansion earns returns.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; ROCE is the constraint.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [397, 688, 1004, 650], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener standalone)",
    "Conclusion: Jun 2026 quarter ₹84 cr vs ₹56 cr year ago.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [56, 59, 49, 55, 84], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Phosgene utilisation and product mix commentary on concalls. Panelav capacity ramp and CDMO pipeline updates. Borrowings, interest expense, and capital work in progress each quarter. Agrochemical channel inventory signals from peers in this repo. Promoter buying or Alembic group strategic actions.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹650 reference. Base-case target near ₹688 per share implies about six percent upside, below the fifteen percent Buy hurdle, with confirming average operating profit margin near twenty-eight percent for FY27, profit after tax run-rate above ₹12 crore per quarter after normalising the June 2026 spike, and return on capital employed toward ten percent while borrowings stay below ₹85 crore. Upgrade toward Buy if two consecutive quarters show consolidated revenue at or above ₹75 crore with TTM profit after tax above ₹50 crore and return on capital employed above eleven percent without borrowings exceeding ₹90 crore. Downgrade toward Avoid if operating profit margin falls below twenty-four percent with TTM profit after tax below ₹38 crore or borrowings above ₹100 crore without matching CDMO revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the July 2026 earnings call and MD&A pending full ingestion. Export versus domestic revenue splits and CDMO revenue percentages are login-gated on Screener premium tables. Exact phosgene capacity utilisation percentages need investor presentation updates. Customer concentration percentages are absent in public filings we accessed. Update bear, base, and bull when segment results and plant-wise volume metrics publish in the annual report.",
  },
];
