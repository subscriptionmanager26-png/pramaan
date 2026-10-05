import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const meghmaniMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Meghmani Organics Ltd (NSE: MOL, BSE: 543331) is a promoter-led Indian diversified chemicals company with crop protection as the largest business, plus pigments, crop nutrition, and legacy specialty lines. Promoter holding was about 49.4% as of June 2026 on Screener, with FIIs near 8.2% and DIIs near 6.5%. The stock is in BSE Smallcap and related chemical indices. At a reference price of ₹73 on 1 October 2026, market capitalisation is about ₹1,756 crore on roughly 24.06 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 18× on TTM earnings after FY26 recovery, with book value about ₹61 per share and return on capital employed near 11%. The quote sits below the 52-week high of ₹116 and above the ₹56 low, reflecting pigment and export agchem cyclicality even as FY26 EBITDA rose sharply.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Meghmani Organics earns by manufacturing and trading crop protection formulations and technicals for domestic and export markets, selling pigments and intermediates to coatings and plastics customers, and building a crop nutrition franchise around nano urea and related products from Sanand. Revenue is recognised on dispatch; pricing in crop protection follows global generic active trends and rupee movements, while pigments track utilisation and raw material spreads. Payment cycles are working-capital intensive across both agrochemical dealers and pigment customers, so inventory and receivable swings can move quarterly PAT more than full-year EBITDA guidance suggests. Brazil subsidiary setup and registration spending are long-cycle investments paid upfront before export revenue scales.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Meghmani grew from pigment and agrochemical roots into a listed platform that absorbed group manufacturing assets over time. Consolidated revenue moved from about ₹1,985 crore in FY24 to ₹2,010 crore in FY25 and near ₹2,092 crore in FY26 per the July 2026 investor presentation, while EBITDA rose about 27% in FY26 after cost actions and crop protection mix improvement. PAT recovered from a near-loss FY24 base to about ₹105 crore in FY26, but Q4 FY26 margin compression and Q1 FY27 revenue down about 12% year on year showed how quickly input costs and export demand can reverse quarterly momentum. Five-year sales growth on Screener remains modest, so the market prices a cyclical chemicals name rather than a steady compounder.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, company filings)",
    "Conclusion: FY26 low single-digit growth; Q1 FY27 pause.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1985, 2010, 2092], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Crop protection customers include domestic dealers and export distributors across Latin America and other regions; pigment customers are industrial buyers with order-book volatility. Management discusses Brazil as a strategic market with high registration barriers rather than naming single export accounts in free filings. Promoter holding near 49% leaves a wider public float than many family agchem names, which can increase volatility when sector sentiment shifts. Amalgamation of Kilburn Chemicals and Meghmani Crop Nutrition into the listed entity, if approved, would consolidate related-party volumes but not instantly diversify end-market concentration.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Crop protection remains the dominant revenue driver, with pigments contributing when utilisation and realisations cooperate. Crop nutrition is emerging from Sanand nano urea capacity and additional nano DAP, NPK, and zinc approvals targeted for kharif FY27. Management on recent presentations emphasises higher-value formulations and Brazil registrations over commodity volume chasing when export markets soften. Pigment and paracetamol-linked operations within the broader Meghmani group still influence consolidated margin when plants run below optimal load. Exact segment revenue splits require annual report tables not yet ingested line by line in this dossier.",
  },
  seriesChart(
    "EBITDA margin % (consolidated)",
    "Conclusion: FY26 expansion; Q1 FY27 near 17.9%.",
    ["FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "EBITDA margin %", values: [13.5, 14.2, 17.3, 17.9], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 recovery; TTM easing on weak quarters.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [8, 55, 105], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global crop protection generic prices and Chinese export behaviour set raw material and finished product parity for Meghmani’s export book. Pigment industry supply-demand in Asia drives utilisation and realisation swings that can overwhelm agrochemical improvement in a single quarter. INR versus USD and BRL affects export realisations and Brazil setup economics. Indian monsoon and kharif acreage still matter for domestic crop protection offtake and nano fertiliser adoption. Regulatory approvals for nano products and pesticide registrations in Brazil and other markets create timing risk. Peer re-rating in domestic agchem (PI Industries, Dhanuka, Sharda Cropchem) sets sentiment even though Meghmani’s pigment exposure differentiates earnings volatility.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "EBITDA reached about ₹362 crore in FY26 on revenue near ₹2,092 crore, keeping EBITDA margin near 17.3%. Depreciation and finance costs remain meaningful given manufacturing footprint across crop protection and pigments. ROCE near 11% on Screener in Jun 2026 improved from FY24 trough levels but stays below high-ROCE domestic agchem peers, supporting the argument that the market applies a holding-company and cyclical discount. Q4 FY26 margin compression on input cost spikes is the key normalisation risk entering FY27, alongside Q1 FY27 revenue decline.",
  },
  seriesChart(
    "EBITDA vs PAT (₹ crore, consolidated)",
    "Conclusion: FY26 EBITDA outpaced PAT recovery.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "EBITDA", values: [268, 285, 362], color: "#1e3a5f" },
      { name: "PAT", values: [8, 55, 105], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹95 crore in FY24, ₹140 crore in FY25, and ₹165 crore in FY26 on Screener cash flow tables. CFO to EBITDA was near 46% in FY26, indicating working capital still absorbs a large share of operating profit across pigments and agrochemical inventory cycles. Free cash flow can turn negative when capex and Brazil setup spending coincide with inventory builds ahead of export seasons. Until CFO consistently exceeds ₹200 crore through a weak pigment quarter, headline PAT can overstate near-term distributable cash.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO improved but remains cyclical.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [95, 140, 165], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Moderate leverage; not debt free.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [210, 195, 182], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹182 crore Mar FY26 on Screener are manageable relative to net worth but not negligible if EBITDA collapses as in FY24. A simultaneous pigment downturn and export crop protection price war could force inventory write-downs and covenant pressure on working capital lines. Amalgamation-related liabilities and Brazil registration spend add contingent cash needs before revenue contribution. Promoter stake near 49% limits direct support relative to 70%+ controlled peers, so equity raises would be the backstop if leverage spiked, which history has avoided but remains a tail risk.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Meghmani promoter group, including Mr Maulik Jayantibhai Patel and related entities, controls just under half the equity float with the remainder widely held. Management emphasises amalgamation synergies, Brazil long-term growth, and crop nutrition as strategic pillars while navigating pigment cyclicality. Dividend yield on Screener was negligible in recent years as cash was directed to capex, Sanand nutrition, and international setup. Incentive alignment looks reasonable if management prioritises EBITDA margin and working capital over revenue market share in weak export windows.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 promising EBITDA recovery through crop protection mix and cost discipline while stabilising pigments. FY26 delivered EBITDA growth near 27% and PAT near ₹105 crore, but Q4 margin compression showed promises on stability were only partially met. Crop nutrition commitments on Sanand nano urea progressed to commercial rollout with additional nano products approved for kharif FY27. Brazil subsidiary formation advanced as a strategic promise with little near-term revenue. Amalgamation timelines moved through NCLT through July 2026 with outcomes still pending final orders.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Export crop protection registrations and Brazil market access are the largest optional growth levers if global destocking ends. Domestic nano fertiliser adoption on existing Sanand lines can add high-margin nutrition revenue without greenfield capex. Pigment utilisation recovery would amplify operating leverage because fixed costs are already in place. Amalgamation into a single listed entity could reduce duplicate compliance and improve cross-selling between agrochemical and nutrition brands if NCLT approval completes cleanly. Revenue growth in the base case assumes low to mid single digits with margin near 18% rather than a sharp rerating year.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Brazil registrations convert faster than expected, adding export revenue with asset-light trading margins. Nano DAP and NPK volumes exceed management kharif targets, lifting nutrition share above 5% of revenue. Pigment spreads recover globally, pushing consolidated EBITDA margin toward 21% and ROCE toward 14%. Amalgamation closes with disclosed synergies that drop straight to PAT. Working capital days fall below 110 as export collections improve, boosting CFO above ₹250 crore and supporting dividend initiation.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another Q4-style input cost spike compresses EBITDA margin toward 13% while revenue stays flat. Brazil setup and registration delays burn cash without export offsets. Pigment customers defer orders, leaving plants under-utilised through FY27. Amalgamation stalls or triggers one-off charges that cut FY27 PAT toward ₹70 crore. Borrowings rise above ₹250 crore to fund working capital, raising finance costs and limiting strategic flexibility.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value forward consolidated PAT with price-to-earnings multiples suited to a cyclical diversified chemicals name with export optionality (10× bear, 15× base, 17× bull), cross-checked against FY26 EBITDA near ₹362 crore where 7× EV/EBITDA less net debt near ₹160 crore supports equity value near ₹98 per share before cyclical discount. Bear FY27 PAT ₹70 crore implies about ₹29 per share (-60% vs ₹73). Base PAT ₹130 crore implies about ₹81 (+11%). Bull PAT ₹165 crore implies about ₹117 (+60%). Base case clears neither a deep value nor a 15% Buy hurdle versus reference.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base near ₹81; below 15% Buy hurdle at ₹73.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [29, 81, 117, 73], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE near 11% FY26 after FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [4, 8, 11], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and EBITDA margin on BSE/NSE results with segment commentary when published. NCLT orders on Kilburn and Meghmani Crop Nutrition amalgamation. Brazil subsidiary registration milestones and first export shipments. Sanand nano fertiliser offtake data each kharif and rabi season. Pigment industry price indices and plant utilisation disclosures. Raw material cost trends for crop protection actives. Borrowings and working capital days on Screener each quarter. Promoter holding changes near 49% threshold. Dividend policy if CFO sustainably exceeds ₹200 crore.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹73 reference. Base-case target near ₹81 per share offers about 11% upside, below the 15% Buy threshold while trailing P/E near 18× embeds FY26 recovery that Q1 FY27 revenue softness has not yet confirmed. Upgrade toward Buy if two consecutive quarters show revenue above ₹550 crore with EBITDA margin above 19%, amalgamation closes without material one-offs, and base FY27 PAT revised above ₹145 crore with target above ₹84 (+15%). Downgrade toward Avoid if FY27 revenue falls below ₹2,000 crore with EBITDA margin below 14%, PAT trends toward ₹70 crore, and borrowings exceed ₹250 crore with negative free cash flow. Maintain Neutral if Brazil and nutrition progress but pigment volatility keeps ROCE below 12%.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact crop protection versus pigment versus nutrition revenue shares require FY26 annual report segment notes not yet ingested line by line. Brazil order book size and customer concentration are not broken out in free sources used. Amalgamation one-off cost estimates and closing date remain NCLT dependent. Screener segment EBITDA for Kilburn and Meghmani Crop Nutrition pre-merger is not consolidated in public tables used here. Update bear, base, and bull when FY26 annual report geographic and related-party notes publish.",
  },
];
