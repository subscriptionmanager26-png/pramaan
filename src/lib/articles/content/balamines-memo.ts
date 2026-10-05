import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const balaminesMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Balaji Amines Ltd (NSE: BALAMINES, BSE: 530999) manufactures methylamines, aliphatic amines, and specialty derivatives for pharmaceutical, agrochemical, and industrial customers, and also owns a five-star hotel in Solapur that contributes a small share of consolidated profit. Promoter holding was about 54.56% as of June 2026 on Screener, with FIIs near 3.17% and DIIs near 1.58%. The stock is in Nifty Total Market, Nifty Smallcap 500, and related indices. At a reference price of ₹2,052 on 1 October 2026, market capitalisation is about ₹6,649 crore on roughly 3.24 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 32.6 on TTM earnings per share about ₹63.01, with book value about ₹610 per share and return on capital employed near 11.0%. The quote sits below the 52-week high of ₹2,630 and above the ₹905 low after a forty-five percent one-year price rise while TTM profit after tax rebounded on the June 2026 quarter.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Balaji Amines earns conversion margin on methanol and ammonia processed into methylamines and downstream derivatives sold under contract and spot pricing, plus ancillary hospitality revenue. Revenue is recognised largely on dispatch; feedstock and energy costs flow through cost of materials with partial lag on quarterly contracts, so operating profit margin expands when specialty mix improves and compresses when export realisations soften. Payment cycles run through debtor days near eighty-nine on Screener and inventory days near one hundred thirteen, so net cash from operations can trail operating profit when inventory builds ahead of export shipments, though FY24 still delivered ₹334 crore net cash from operations on ₹324 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Balaji Amines scaled methylamine leadership over three decades with a FY22 earnings peak before the FY24–FY25 correction. Consolidated revenue moved from ₹1,631 crore in FY24 to ₹1,389 crore in FY25 and ₹1,419 crore in FY26 with TTM sales near ₹1,523 crore. Operating profit followed ₹324 crore, ₹232 crore, and ₹265 crore across the same years with TTM operating profit near ₹327 crore after the June 2026 quarter. Reported profit after tax moved from ₹232 crore in FY24 to ₹159 crore in FY25 and ₹169 crore in FY26 with TTM profit after tax near ₹211 crore after ₹78 crore in the June 2026 quarter. Borrowings rose toward ₹133 crore while capital work in progress stood near ₹512 crore as derivative projects advanced.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹1,523 cr after Q1 FY27 rebound.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1631, 1389, 1419, 1523], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic and multinational pharmaceutical and agrochemical producers, industrial formulators, and export buyers across multiple geographies cited in annual reports. Company materials cite domestic leadership in methylamines; Screener gates exact top-account concentration time series. Promoter holding near fifty-five percent supports long-term capex while public float above forty percent matters for liquidity. Concentration risk is moderate: delay in a large export order or a sharp methanol cost spike can still move consolidated operating profit by high single digit crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Methylamines and aliphatic amines supplied the primary revenue through FY26 with management citing specialty derivatives as the margin lever on the Q1 FY27 call, while the Solapur hotel remained immaterial to operating profit. Exact segment profit splits require investor presentations; investors should treat domestic pharma and agrochemical pull, export realisation, and derivative share as the central swing factors for consolidated return on capital employed recovering from eleven percent toward mid-teens.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average nineteen percent; TTM at twenty-one percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [20, 17, 19, 21], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹211 cr; Q1 FY27 drove the step-up.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [232, 159, 169, 211], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global methanol and ammonia pricing, rupee moves against export invoicing, and domestic pharma and agrochemical production cycles move input costs and volumes before pricing catches up. Peer re-rating on Indian amine names including Alkyl Amines sets sentiment even when Balaji Amines’ balance sheet stays manageable. The move from ₹905 toward ₹2,630 over fifty-two weeks can dominate short-term action even when quarterly profit after tax rebounds.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Ten-year sales compound growth near eight percent on Screener masks the FY25 trough when revenue fell fifteen percent year on year after the FY23 peak. Operating profit compound growth turned negative over five years before TTM recovery. Return on capital employed fell toward 11.0% as capex rose and utilisation normalised. Dividend yield near 0.54 percent at reference reflects payout near twenty percent of profit after tax while reinvestment continues in derivatives.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE near 11% TTM; below FY22 peak near 49%.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [17, 11, 11], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹334 crore exceeded operating profit ₹324 crore with CFO to operating profit near one hundred three percent. FY26 net cash from operations ₹184 crore trailed operating profit ₹265 crore with CFO to operating profit near sixty-nine percent as investing outflows near ₹344 crore funded capex. Free cash flow turned negative near ₹186 crore TTM when capital work in progress rose. If inventory days fall toward ninety while debtor days remain below ninety-five, profit after tax can align with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO positive but down from FY24 peak on capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [334, 255, 184], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹133 crore on Screener’s Mar FY26 print against reserves ₹1,970 crore leave interest coverage ample; capital work in progress near ₹512 crore ties up cash and raises execution risk if derivative plants slip. A prolonged stretch of sub-fifteen percent operating profit margin with TTM free cash flow deeply negative and borrowings above ₹250 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with CWIP; still modest vs reserves.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [20, 11, 133], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Welling and related promoter group holds about fifty-five percent as of June 2026, aligning incentives with multi-year capex though public float above forty percent still matters for liquidity. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Board independence and related-party disclosures with hospitality assets should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue and profit after tax missed as volumes corrected. FY26 revenue grew modestly with profit after tax up six percent year on year. Working capital days improved toward sixty-nine Mar FY26. FY27 full-year margin band high teens to low twenties remains pending after one quarter at twenty-five percent operating profit margin. Capex on derivatives remains pending with capital work in progress near ₹512 crore.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Commissioning of derivative and environmental projects, domestic pharma and agrochemical demand, and export recovery when global amine pricing stabilises are the primary drivers. Management’s capex programme can add mid-single-digit volume if utilisation rises without another working capital shock.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹260 crore with operating profit margin sustained above twenty-one percent, derivative plants ramp on schedule, and the market holding a low-thirties forward price-to-earnings multiple, implying a target near ₹2,728 per share or about thirty-three percent above reference. Triggers include two consecutive quarters with return on capital employed above fourteen percent and TTM net cash from operations above ₹250 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹175 crore with operating profit margin reverting toward fifteen percent on methanol cost spikes, with the market applying a twenty-eight times multiple, implying a target near ₹1,512 per share or about twenty-six percent below reference. Triggers include TTM profit after tax falling below ₹185 crore with borrowings above ₹200 crore and free cash flow negative for four quarters.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Balaji Amines on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with modest net debt. Base FY27E profit after tax ₹228 crore at thirty-one times implies about ₹2,181 per share, or about six percent above the ₹2,052 reference. Bear FY27E profit after tax ₹175 crore at twenty-eight times implies about ₹1,512. Bull FY27E profit after tax ₹260 crore at thirty-four times implies about ₹2,728. Trailing price-to-earnings near thirty-two times embeds recovery hope while return on capital employed near eleven percent limits margin of safety until capex earns its keep.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; ROCE recovery is the watch item.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1512, 2181, 2728, 2052], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at ₹456 cr recent peak.",
    ["Mar 2025", "Jun 2025", "Sep 2025", "Dec 2025", "Mar 2026", "Jun 2026"],
    [{ name: "Sales", values: [353, 358, 341, 331, 395, 456], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Methanol and ammonia cost trends versus domestic amine realisations. Capital work in progress capitalisation and borrowings each quarter. Export commentary on concalls. Dividend declarations and payout ratio. Promoter holding and any equity issuance.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹2,052 reference. Base-case target near ₹2,181 per share implies about six percent upside, below the fifteen percent hurdle for a Buy while return on capital employed remains near eleven percent. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty percent with return on capital employed trending above fourteen percent while the base-case target clears ₹2,360 per share. Downgrade toward Avoid if operating profit margin falls below fifteen percent with TTM profit after tax below ₹175 crore. Downgrade toward Avoid if borrowings exceed ₹250 crore while capital work in progress fails to convert to revenue within four quarters.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call and FY25 MD&A pending full ingestion. Exact methylamine versus derivative EBIT splits are login-gated on Screener. Hotel segment profit is not broken out in public tables used here. Customer concentration for top export accounts needs annual report updates. Update bear, base, and bull when segment profit and commissioning dates publish in investor presentations.",
  },
];
