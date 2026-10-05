import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const factMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Fertilizers and Chemicals Travancore Ltd (NSE: FACT, BSE: 4278) is a Government of India controlled fertilizer and engineering PSU listed since 1960. The stock is in Nifty Midcap 150 and related indices, but 90% of the equity sits with the promoter (President of India). At a reference price of ₹735 on 1 October 2026, market capitalisation is about ₹47,550 crore on roughly 64.7 crore shares (face value ₹10). The trailing consolidated price-to-earnings ratio on Screener is above 3,000 because reported profit collapsed in FY25 while the share price held a large premium to book value of about ₹21 per share.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "FACT manufactures complex fertilizer Factamfos (NP 20:20:0:13), ammonium sulphate, and historically caprolactam, from Kochi (Udyogamandal and Cochin divisions). It also trades imported and third-party grades such as muriate of potash and, more recently, DAP and TSP. Revenue is not set like a consumer brand price list. The Department of Fertilizers fixes retention prices and subsidy flows on nutrient-based products, so the economic driver is subsidised net realisation per tonne plus cost recovery on inputs such as phosphoric acid, sulphur, ammonia, and re-gasified LNG (RLNG). Engineering arms FEDO and FEW sell fabrication and design services to external clients, but fertilizer operations dominate the consolidated story.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "FACT began in 1943 as India's first large-scale fertilizer plant in Kerala. Nationalisation in 1960 placed it under the Ministry of Chemicals and Fertilizers. Decades of losses left negative reserves through much of the 2010s until a sharp earnings spike in FY20 and especially FY22 and FY23 when global nutrient prices and subsidy accounting produced consolidated sales above ₹6,000 crore and operating margins near 12%. FY24 and FY25 reversed much of that: phosphoric acid scarcity and cost crushed Factamfos output, sales fell toward ₹4,050 crore in FY25, and operating margin compressed to about 2.3%. The market capitalisation rank nonetheless stayed in the top 200 list by size, reflecting index inclusion and a thin public float rather than current earnings power.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Revenue reverted after the FY23 spike; FY25 was more than one-third below the FY23 peak.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [{ name: "Sales", values: [3259, 4425, 6198, 5051, 4051, 5293], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End payers are farmers, but cash collection runs through the subsidy mechanism and dealer network. FACT reported over 30% share of NP 20:20:0:13 sales in South India and expanded dispatch into Madhya Pradesh and other states in FY25. Customer concentration at the retail level is fragmented; concentration at the shareholder level is extreme, with 90% promoter holding and only about 0.8% public float in recent shareholding pattern data. That structure can amplify price moves on small turnover days and decouple the quote from near-term earnings.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Factamfos remains the flagship complex fertilizer. FY25 standalone production was 644,768 MT of Factamfos versus 827,717 MT in FY24, while ammonium sulphate hit a record 250,578 MT. Marketing sales exceeded own production (11.63 lakh MT sold vs 8.95 lakh MT produced in FY25) because trading and imported product fill the gap. Caprolactam production was negligible in FY25 after 34,662 MT in FY24. The mix is shifting toward traded DAP/TSP and zincated Factamfos, which changes margin per tonne and working-capital needs even when headline tonnage grows.",
  },
  seriesChart(
    "Factamfos production vs ammonium sulphate (MT, annual report)",
    "Conclusion: Factamfos volume fell sharply in FY25 while ammonium sulphate set a record.",
    ["FY24", "FY25"],
    [
      { name: "Factamfos", values: [827717, 644768], color: "#1e3a5f" },
      { name: "Ammonium sulphate", values: [242577, 250578], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Three forces dominate. First, import availability and price of phosphoric acid and rock phosphate (FACT signed a three-year SNPT Togo rock phosphate agreement, but acid remains the bottleneck cited in the FY25 board report). Second, RLNG and energy costs for ammonia and sulphuric acid plants, mitigated partly by a five-year IOCL RLNG supply arrangement and open-access power at Udyogamandal. Third, policy: subsidy rates, GOI capex approvals, the pending financial restructuring package (loan conversion and interest write-off request), and execution of the 1650 TPD NP plant that management says can lift total fertilizer production from about 10 lakh MT toward 15 lakh MT.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Consolidated operating profit fell from ₹755 crore in FY23 to ₹95 crore in FY25 while interest stayed near ₹246 crore each year. Reported PAT followed: ₹613 crore in FY23, ₹128 crore in FY24 (including a March 2024 quarter with large negative other income), and ₹41 crore in FY25. Other income remains volatile (₹241 crore in FY25 consolidated), so PAT is a poor single-year anchor. Return on capital employed on Screener slid from about 30% in FY23 to 9% in FY25. The history is a boom on nutrient margins and subsidy timing, then a bust on input bottlenecks, not a smooth industrial compounder.",
  },
  seriesChart(
    "Operating profit vs interest (₹ crore, consolidated)",
    "Conclusion: Interest is almost fixed while operating profit swings, squeezing coverage in down cycles.",
    ["FY21", "FY22", "FY23", "FY24", "FY25"],
    [
      { name: "Operating profit", values: [551, 596, 755, 358, 95], color: "#1e3a5f" },
      { name: "Interest", values: [245, 244, 248, 247, 246], color: "#b91c1c" },
    ],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY23 peak PAT is not the run-rate; FY25 is closer to structural stress unless inputs normalize.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [{ name: "PAT", values: [350, 346, 613, 128, 41, 28], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was strong in FY21 (₹1,021 crore) and FY23 (₹638 crore) but weakened to ₹140 crore in FY25. Screener shows negative working-capital days recently, which often reflects subsidy receivables and payables timing rather than true negative investment in working capital. Free cash flow turned slightly negative in FY25 (-₹13 crore) after capex and investing outflows. When operating margin is 2%, the business still carries interest near ₹246 crore, so even modest CFO shortfalls push borrowing higher. Borrowings on Screener rose from ₹1,805 crore in March 2025 to ₹3,837 crore in September 2025, which needs a filing-level bridge we flag in section 18.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO tracked the earnings cycle down; FY25 did not fully fund interest and capex from operations alone.",
    ["FY21", "FY22", "FY23", "FY24", "FY25"],
    [{ name: "CFO", values: [1021, 152, 638, 280, 140], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Interest coverage against operating profit was below 0.5x in FY25. The AGM approved raising borrowing limits up to ₹5,000 crore, which signals management expects to fund working capital and capex with debt if restructuring is delayed. A failed phosphoric acid supply chain or prolonged low OPM would force further leverage. Positive offsets include GOI ownership, the submitted restructuring plan, and capex funded partly from internal accruals in management's narrative. Equity investors still price the stock far above book, so a repricing risk exists if restructuring terms dilute or disappoint.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Debt stepped up sharply by Sep 2025; balance-sheet risk rises if earnings stay at FY25 levels.",
    ["Mar FY23", "Mar FY24", "Mar FY25", "Sep 2025"],
    [{ name: "Borrowings", values: [1842, 1810, 1805, 3837], color: "#b91c1c" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Chairman and Managing Director S. C. Mudgerikar leads the executive team alongside functional directors for marketing and technical roles appointed by the Government of India. Remuneration of CMD and whole-time directors is fixed by the Government, not by minority vote. Strategic targets flow from annual MoU with the Department of Fertilizers (FY23-24 rated 'Good'). Minority shareholders depend on transparent capex execution, restructuring outcomes, and dividend policy (₹0.39 final dividend for FY25 on tiny PAT). Incentives align with production and social objectives; they do not automatically align with keeping the listed quote near normalized earnings power.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised progress on the 1650 TPD NP plant, SNPT rock phosphate supply, RLNG conversion of driers, and expansion of traded grades. FY25 delivered record ammonium sulphate output and commissioning of a 10,000 MT ammonia storage tank, but Factamfos production missed the prior year by about 183,000 MT because of phosphoric acid. The financial restructuring proposal was submitted but not approved in the annual report window. Dividend was maintained and increased versus the initial board recommendation, despite PAT of ₹41 crore on a standalone basis.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: commissioning of the 1650 TPD NP plant (management cites over 5 lakh MT incremental capacity when operational) and higher traded DAP/TSP via the OCP Nutricrops MoU. Cost: RLNG, open-access power, and debottlenecking of sulphuric and phosphoric acid plants if funded. Mix: zincated Factamfos and geographic expansion into Chhattisgarh, Gujarat, and Uttar Pradesh. Policy: approval of restructuring and possible Mini Ratna status. Near-term reported numbers already show TTM sales near ₹5,293 crore with still-thin OPM (~2%), so growth must show up in margin per tonne, not tonnage alone.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Phosphoric acid supply normalises and Factamfos runs consistently above 95% of nameplate while ammonium sulphate stays above 110%. Restructuring converts a meaningful slice of GOI loans to equity and cuts the ₹245 crore interest drag. NP plant starts on schedule and composite production approaches 13 to 14 lakh MT with operating margin back toward high single digits. In that world, consolidated PAT could approach ₹400 crore or more in FY27, still below FY23 but enough to re-rate the stock toward our bull case price band.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Phosphoric acid stays expensive and rationed, Factamfos utilisation falls under 70% of capacity, and trading margins compress. Restructuring stalls, leaving borrowings above ₹3,500 crore with PAT below ₹100 crore. Interest rates on working-capital lines rise with India’s broader rate cycle. Q2 FY26 showed revenue recovery to ₹1,629 crore but operating profit still only ₹39 crore on Screener quarterly data, so a revenue uptick without margin is not enough.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value normalized FY27 consolidated PAT with price-to-earnings multiples appropriate to a regulated, high-leverage PSU (10x bear, 15x base, 18x bull), cross-checked against EBITDA math that shows enterprise value below gross debt at FY25 run-rate EBITDA. Bear FY27 PAT ₹70 crore implies about ₹11 per share (-98% vs ₹735 reference). Base PAT ₹220 crore implies about ₹51 (-93%). Bull PAT ₹420 crore implies about ₹117 (-84%). Even the bull case sits far below the current quote, which embeds either repeated FY23-level profits or a balance-sheet event the market prices before disclosure.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: All three PAT scenarios sit well below the ₹735 reference; upside to base is not there on our math.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [
      {
        name: "Target / CMP",
        values: [11, 51, 117, 735],
        color: "#1e3a5f",
      },
    ],
  ),
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin compression is the core reason trailing P/E is meaningless at today's price.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [{ name: "OPM %", values: [17, 13, 12, 7, 2.3, 2.0], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Department of Fertilizers decision on the financial restructuring package. Mechanical completion and ramp of the 1650 TPD NP plant. Monthly production bulletins for Factamfos MT and phosphoric acid consumption. SNPT and domestic acid supply contracts. Borrowings trend in half-year balance sheets after the September 2025 spike. Q3 and Q4 FY26 operating margin after the Q2 revenue recovery. Any NSE investor meet transcript (none located in primary filings as of this dossier date).",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Avoid at ₹735 reference. Base-case target near ₹51 per share offers no margin of safety and no required 15% upside to base. We would reconsider toward Neutral only if restructuring terms are published and cut annual interest by at least ₹100 crore with visible PAT run-rate above ₹250 crore for two consecutive quarters. We would upgrade toward Buy only if operating margin returns above 8% on consolidated sales while net debt falls quarter-on-quarter and base-case PAT exceeds ₹350 crore with concall-level disclosure on segment margins. Downgrade triggers are redundant at Avoid, but a failed NP plant schedule or borrowings above ₹4,500 crore without restructuring would reinforce the view.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We do not have NSE-uploaded earnings call transcripts with Q&A for FACT; load-bearing quotes come from the FY25 annual report and MD&A. We lack a published bridge for the jump in borrowings to ₹3,837 crore as of September 2025 on Screener versus ₹1,805 crore in March 2025. Segment-level EBITDA for trading versus manufacturing is not broken out in sources used. Exact subsidy receivable days and pending nutrient subsidy claims would come from detailed notes in exchange filings. Caprolactam restart timing and margin is unclear after near-zero FY25 production. If those items appear in future filings, they should feed directly into the FY27 PAT scenarios above.",
  },
];
