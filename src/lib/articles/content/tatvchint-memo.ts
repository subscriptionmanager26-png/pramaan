import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const tatvchintMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Tatva Chintan Pharma Chem Ltd (NSE: TATVA, BSE: 543321) manufactures phase transfer catalysts, structure-directing agents, pharma and agro intermediates, and electrolyte salts for energy storage from integrated sites at Ankleshwar and Dahej in Gujarat. Promoter holding was about 72.0% as of October 2026 on Screener, with public float near twenty-eight percent. The stock trades in Nifty Microcap indices. At a reference price of ₹1,743 on 4 October 2026, market capitalisation is about ₹4,078 crore on roughly 2.34 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 77.8 on TTM earnings per share about ₹21.97, with book value about ₹334 per share and return on capital employed near 7.18%. The quote sits below the 52-week high of ₹1,880 and above the ₹1,022 low after a sharp FY25 earnings reset followed by FY26 revenue and profit recovery.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Tatva Chintan earns conversion margin on specialty molecules sold under long qualification cycles to global pharma, agrochemical, and zeolite customers, plus domestic electrolyte salt trials for battery applications. Revenue is recognised on dispatch; raw material and energy costs flow through cost of goods sold, so operating profit margin expands when export volumes recover after destocking and compresses when customers draw down inventory. Payment cycles lengthened in FY25 when debtor days rose; working capital normalisation in FY26 helped cash conversion though free cash flow remained sensitive to capex.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Tatva Chintan listed in July 2021 after scaling global share in phase transfer catalysts, with FY22 representing a post-listing earnings peak near ₹96 crore profit after tax before the FY23 to FY25 cyclical correction. Consolidated revenue moved from ₹394 crore in FY24 to ₹383 crore in FY25 and ₹506 crore in FY26 with TTM sales near ₹556 crore. Operating profit followed ₹69 crore, ₹35 crore, and ₹94 crore across the same years with TTM operating profit near ₹108 crore. Reported profit after tax fell from ₹30 crore in FY24 to ₹6 crore in FY25 before rebounding to ₹42 crore in FY26 with TTM profit after tax near ₹51 crore. Borrowings rose from ₹14 crore toward ₹120 crore Mar FY26 as capacity and R&D spend continued through the trough.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM near ₹556 cr after FY25 trough.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [394, 383, 506, 556], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include multinational pharma and agrochemical producers, zeolite catalyst users for refining and emissions regulations, and emerging battery-material accounts for electrolyte salts. FY25 management commentary cited exports near sixty-one percent of revenue in the fourth quarter. Screener gates exact customer counts on premium insights. Promoter holding above seventy percent supports long-cycle qualification investments while public float below thirty percent can amplify volatility when earnings reset. Concentration risk is moderate: a two-quarter export slowdown can move consolidated operating profit by high single-digit crore rupees given fixed reactor assets.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Phase transfer catalysts and structure-directing agents supplied the majority of revenue through FY25 with pharma and agro intermediates and electrolyte salts as growth vectors. Q4 FY25 segment revenue was about ₹389 million on PTC, ₹346 million on SDA, and ₹327 million on pharma and agro intermediates on the May 2025 earnings call. Investors should treat PTC and SDA volume recovery and electrolyte salt commercial validation as the central swing factors for return on capital employed recovering from seven percent TTM toward low-teens historical averages.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: TTM nineteen percent; FY25 trough nine percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [17, 9, 18, 19], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹51 cr; up from FY25 trough.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [30, 6, 42, 51], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global pharma and agrochemical inventory cycles, zeolite demand linked to refining and Euro seven emissions timelines, rupee moves against the dollar on export contracts, and sentiment on specialty chemical recovery names in this repo set short-term multiples. Electrolyte salt narratives tied to energy storage can re-rate the stock independently of PTC earnings when customer qualifications succeed. The move from ₹1,880 toward ₹1,022 over fifty-two weeks can dominate action even when quarterly profit after tax compounding resumes.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Three-year sales compound growth near eight percent on Screener reflects the FY25 dip and FY26 rebound. Operating profit margin fell from twenty-five percent FY22 toward nine percent FY25 before recovering toward nineteen percent TTM. Return on capital employed fell toward 7.18% as capital employed rose while profit after tax troughed. Dividend yield near 0.11 percent at reference reflects payout resumption despite the FY25 earnings collapse.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE seven percent TTM; below FY22 twenty-six percent.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [7, 1, 7], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹98 crore exceeded operating profit ₹69 crore with strong collections after the prior year build. FY25 net cash from operations ₹25 crore trailed operating profit ₹35 crore as working capital absorbed cash during destocking. FY26 net cash from operations ₹31 crore trailed operating profit ₹94 crore with investing outflows near ₹116 crore on capacity. If working capital days normalise while capex moderates, profit after tax can align with net cash from operations, but sustained negative free cash flow with borrowings above ₹150 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO ₹31 cr positive but below OP.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [98, 25, 31], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹120 crore Mar FY26 against reserves near ₹900 crore leave interest coverage adequate with finance costs modest on Screener, but another export destocking cycle with operating profit margin below twelve percent could force higher leverage. Stock trades near 5.2 times book. A prolonged stretch of sub-fifteen percent operating profit margin with TTM free cash flow negative above ₹150 crore and borrowings above ₹180 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose through FY26 capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [14, 36, 120], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The promoter group holding about seventy-two percent aligns incentives with multi-decade specialty chemistry and customer qualification while public holders provide governance pressure after the FY25 reset. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Related-party disclosures and dividend policy should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 stabilisation missed with profit after tax down eighty-one percent year on year. FY26 recovery beat with revenue up thirty-two percent and profit after tax up six hundred percent year on year. Electrolyte salt commercialisation partially met with qualifications ongoing. FY27 margin and return on capital employed targets remain pending with Q1 FY27 operating profit margin near nineteen percent.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Structure-directing agent demand tied to emissions regulations, phase transfer catalyst share gains with new customer approvals, pharma and agro intermediate cross-selling, and operating leverage on fixed reactors at Ankleshwar and Dahej are the primary drivers. Management’s May 2025 commentary that the worst is behind us supports revenue compounding if return on capital employed recovers toward double digits.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹105 crore with operating profit margin sustained above twenty percent, electrolyte salts contributing incremental revenue, and the market holding a fifty-four times forward multiple on visible recovery, implying a target near ₹2,423 per share or about thirty-nine percent above reference. Triggers include two consecutive quarters with TTM profit after tax above ₹90 crore and return on capital employed trending above ten percent.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹58 crore with operating profit margin reverting toward fifteen percent on renewed export destocking, with the market applying a forty-two times multiple, implying a target near ₹1,041 per share or about forty percent below reference. Triggers include TTM profit after tax falling below ₹45 crore with borrowings above ₹180 crore and Mar 2025-style seven percent operating profit margin repeating for three quarters.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Tatva Chintan on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹90 crore. Base FY27E profit after tax ₹80 crore at fifty times implies about ₹1,709 per share, or about two percent below the ₹1,743 reference. Bear FY27E profit after tax ₹58 crore at forty-two times implies about ₹1,041. Bull FY27E profit after tax ₹105 crore at fifty-four times implies about ₹2,423. Trailing price-to-earnings near seventy-eight times recovering earnings limits upside until profit after tax compounding proves durable.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base roughly in line; multiple caps upside.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1041, 1709, 2423, 1743], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at ₹131 cr; recovery trend.",
    ["Mar 2025", "Jun 2025", "Sep 2025", "Dec 2025", "Mar 2026", "Jun 2026"],
    [{ name: "Sales", values: [108, 117, 124, 126, 128, 131], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. PTC and SDA segment revenue when disclosed. Electrolyte salt customer qualifications and commercial shipments. Net cash from operations and free cash flow trends. Borrowings and capex updates. Export realisation and rupee moves. Promoter and institutional shareholding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,743 reference. Base-case target near ₹1,709 per share implies about two percent downside, below the fifteen percent hurdle for a Buy while trailing multiples remain elevated on recovering earnings. Upgrade toward Buy if two consecutive quarters show TTM profit after tax above ₹80 crore with operating profit margin at or above twenty percent and return on capital employed trending above ten percent while the base-case target clears ₹2,004 per share. Downgrade toward Avoid if operating profit margin falls below fifteen percent with TTM profit after tax below ₹45 crore for three quarters. Downgrade toward Avoid if borrowings exceed ₹180 crore while electrolyte revenue remains immaterial.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the May 2025 earnings call and Q1 FY27 management commentary pending full ingestion. Exact PTC versus SDA volume time series are login-gated on Screener premium insights. Electrolyte salt revenue and customer concentration need annual report segment tables. Update bear, base, and bull when segment disclosures and electrolyte commercial shipments publish in the next annual report.",
  },
];
