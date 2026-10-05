import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const neogenMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Neogen Chemicals Ltd (NSE: NEOGEN, BSE: 542665) manufactures bromine and lithium-based organic and organometallic compounds for pharmaceutical, agrochemical, engineering, and battery supply chains, with a listed subsidiary platform Neogen Ionics for electrolytes, salts, and additives. Promoter holding was about 48.31% as of September 2026 on Screener after a qualified institutional placement, with FIIs near 4.51% and DIIs near 23.43%. The stock is in Nifty Total Market, Nifty Smallcap 500, and related indices. At a reference price of ₹2,407 on 1 October 2026, market capitalisation is about ₹7,232 crore on roughly 3.0 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 203 on TTM earnings per share about ₹13.25, with book value about ₹309 per share and return on capital employed near 6.46%. The quote sits below the 52-week high of ₹2,500 and above the ₹967 low after a sixty percent one-year price rise while TTM profit after tax was flat near ₹36 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Neogen earns conversion margin on imported bromine and lithium salts processed into specialty intermediates sold to innovator and generic pharmaceutical customers, agrochemical technical buyers, and engineering clients, plus early battery materials sales through Neogen Ionics. Revenue is recognised largely on dispatch; bromine, lithium carbonate, and energy costs flow through cost of materials with partial lag on contracts, so operating profit margin compresses when input volatility outruns pricing. Payment cycles run through debtor days near 161 Mar FY26 and inventory near four hundred forty-five days, so net cash from operations can trail operating profit when battery capex and receivables build, though FY25 still delivered ₹196 crore net cash from operations on ₹136 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Neogen built India-leading organolithium and bromine chemistry capabilities over three decades, with FY24 representing a margin trough near sixteen percent operating profit margin before FY25 recovered briefly on volume. Consolidated revenue moved from ₹691 crore in FY24 to ₹778 crore in FY25 and ₹862 crore in FY26 with TTM sales near ₹926 crore. Operating profit followed ₹110 crore, ₹136 crore, and ₹137 crore across the same years. Reported profit after tax fell from ₹36 crore in FY24 to ₹29 crore in FY26 with TTM profit after tax near ₹36 crore after ₹35 crore in FY25. Borrowings rose toward ₹1,395 crore on Screener’s latest balance sheet while capital work in progress stood near ₹857 crore as Neogen Ionics battery plants advanced.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹926 cr ahead of battery ramp.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [691, 778, 862, 926], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global and domestic pharmaceutical active ingredient makers, agrochemical formulators, semiconductor and engineering clients buying organolithium reagents, and domestic battery cell manufacturers under early electrolyte qualification. Company materials cite export revenue share in premium datasets; Screener gates exact top-account concentration time series. Promoter holding near forty-eight percent after QIP supports battery capex while public float above twenty-three percent matters for liquidity. Concentration risk is moderate: delay in Ionics ramp or a bromine supply shock can still move consolidated operating profit by high single digit crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Legacy organic and inorganic specialty intermediates supplied the primary revenue through FY26 with management citing organolithium scale-up on the Q1 FY27 call, while Neogen Ionics battery materials remained small on revenue but large on capital work in progress and narrative optionality. Exact segment profit splits require investor presentations; investors should treat legacy operating profit margin holding near eighteen percent and Ionics reaching a three hundred crore rupee FY27 revenue guide with mid-to-high teen margins as the central swing factors for consolidated return on capital employed.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average sixteen percent; TTM at seventeen percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [16, 18, 16, 17], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹36 cr; earnings lagged the re-rating.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [36, 35, 29, 36], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global bromine supply from Israel and other sources, lithium salt pricing, and Indian battery policy move input costs before Ionics revenue catches up. Rupee volatility affects import costs on bromine and lithium with partial pass-through on contracts. Peer re-rating on battery materials names including Gujarat Fluorochemicals in this repo sets sentiment for optionality stories even when return on capital employed lags. The move from ₹967 toward ₹2,500 over fifty-two weeks can dominate short-term action even when quarterly profit after tax grows slowly.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Ten-year sales compound growth near twenty-four percent on Screener masks the FY26 margin and profit trough when operating profit margin fell to sixteen percent and profit after tax to ₹29 crore while interest expense rose. Operating profit moved from ₹136 crore FY25 toward ₹154 crore TTM as utilisation improved. Profit after tax compound growth turned negative over three years. Return on capital employed fell toward 6.46% as Ionics capex weighed on the denominator. Dividend yield near 0.04 percent at reference reflects reinvestment into battery capacity.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE near 6.5% TTM; below legacy economics.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [9, 9, 6], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹196 crore exceeded operating profit ₹136 crore with CFO to operating profit near one hundred fifty-three percent after working capital release. FY26 net cash from operations negative ₹231 crore trailed operating profit ₹137 crore with CFO to operating profit deeply negative as receivables and inventory built for battery projects. Free cash flow remained negative near ₹647 crore TTM as cash from investing outflows near ₹410 crore funded Ionics capex. If debtor days fall toward one hundred while inventory days remain elevated, profit after tax can align with net cash from operations without signalling earnings quality issues, but sustained negative free cash flow with borrowings above ₹1,500 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO turned negative on working capital.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [-29, 196, -231], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹1,395 crore on Screener’s Mar FY26 print against reserves ₹790 crore leave interest coverage thin; interest expense TTM near ₹83 crore is material relative to operating profit ₹154 crore. Capital work in progress near ₹857 crore ties up cash and raises execution risk if electrolyte plants slip or customer qualification delays revenue. Screener flags book-value multiple near 7.78 times as a watch item. A prolonged stretch of sub-fifteen percent operating profit margin with TTM net cash from operations below zero and borrowings above ₹1,600 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with Neogen Ionics capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [409, 597, 1395], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Harin Kanani leads as managing director with the Kanani promoter group holding about forty-eight percent after QIP dilution as of September 2026, aligning incentives with multi-year battery investments though public float above twenty-three percent still matters for liquidity. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Board independence and related-party disclosures with Neogen Ionics financing should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth partially met with profit after tax down three percent year on year. FY26 revenue met near ₹862 crore with profit after tax missing on finance cost. Battery commissioning remains pending with capital work in progress near ₹857 crore and Ionics revenue still ramping. FY27 consolidated revenue guide ₹1,250 to ₹1,350 crore remains pending in reported totals. Parent deleveraging toward ₹200 to ₹250 crore standalone borrowings remains pending with consolidated borrowings ₹1,395 crore Mar FY26.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Organolithium and specialty intermediate debottlenecking, Neogen Ionics electrolyte and salt commercialisation in the second half of FY27, and operating leverage on Thane and Dahej assets are the primary drivers. Management’s longer-term consolidated revenue guide toward ₹3,700 to ₹4,200 crore by FY29 depends on battery utilisation and can re-rate the stock if return on capital employed recovers toward double digits.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹65 crore with operating profit margin sustained above eighteen percent, Ionics quarterly revenue crossing eighty crore rupees by Q4 FY27, and the market holding a mid-one-hundred-seventies forward price-to-earnings multiple, implying a target near ₹3,792 per share or about fifty-seven percent above reference. Triggers include two consecutive quarters with TTM net cash from operations above ₹150 crore and parent borrowings trending below ₹400 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹30 crore with operating profit margin reverting toward fifteen percent on bromine cost spikes and battery ramp delays, with the market applying a one-hundred-twenty-five times multiple, implying a target near ₹1,250 per share or about forty-eight percent below reference. Triggers include TTM profit after tax falling below ₹32 crore with borrowings above ₹1,600 crore and TTM free cash flow remaining deeply negative.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Neogen Chemicals on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹1,200 crore. Base FY27E profit after tax ₹48 crore at one hundred sixty times implies about ₹2,560 per share, or about six percent above the ₹2,407 reference. Bear FY27E profit after tax ₹30 crore at one hundred twenty-five times implies about ₹1,250. Bull FY27E profit after tax ₹65 crore at one hundred seventy-five times implies about ₹3,792. Trailing price-to-earnings near two hundred three times already embeds battery optionality while return on capital employed near 6.46% limits margin of safety until Ionics profit scales.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; ROCE is the constraint.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1250, 2560, 3792, 2407], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at ₹250 cr recent peak.",
    ["Mar 2025", "Jun 2025", "Sep 2025", "Dec 2025", "Mar 2026", "Jun 2026"],
    [{ name: "Sales", values: [203, 187, 209, 220, 247, 250], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Neogen Ionics revenue and margin commentary on concalls. Electrolyte and salt plant commissioning milestones each quarter. Net cash from operations and free cash flow trends. Borrowings split between parent and subsidiary. Bromine and lithium input costs. Promoter holding after QIP and any further equity issuance.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹2,407 reference. Base-case target near ₹2,560 per share implies about six percent upside, below the fifteen percent hurdle for a Buy at this trailing multiple and sub-seven percent return on capital employed. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above nineteen percent with TTM profit after tax run-rate above ₹48 crore and return on capital employed trending above ten percent while the base-case target clears ₹2,770 per share. Downgrade toward Avoid if operating profit margin falls below fifteen percent with TTM net cash from operations negative for four quarters. Downgrade toward Avoid if borrowings exceed ₹1,700 crore while Ionics revenue remains below fifty crore rupees per quarter.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call and FY25 MD&A pending full ingestion. Legacy versus Ionics segment EBIT and exact export share are login-gated on Screener. Exact electrolyte qualification timelines by customer need investor presentation updates. Customer concentration for anchor battery contracts is not disclosed in public tables used here. Update bear, base, and bull when consolidated segment profit and Ionics volume metrics publish in the annual report.",
  },
];
