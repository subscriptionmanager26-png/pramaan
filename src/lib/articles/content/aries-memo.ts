import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const ariesMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Aries Agro Ltd (NSE: ARIES, BSE: 532935) is a promoter-led Indian plant-nutrition company manufacturing micronutrients, chelated specialties, water-soluble NPK, and related crop inputs from multiple plants, with more than one hundred thirty brands across crops and agro-climatic zones. Promoter holding was about 52.7% as of June 2026 on Screener, with FIIs near 3.1% and negligible DII ownership. The stock is in BSE Commodities. At a reference price of ₹477 on 1 October 2026, market capitalisation is about ₹621 crore on roughly 1.275 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 13 on FY26 earnings, with book value about ₹257 per share, return on equity near 12.7%, and return on capital employed near 20.5%. The quote is up about 29% over one year and sits below the 52-week high of ₹525, pricing in strong TTM revenue growth but still-modest full-year operating profit margins near 10%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Aries earns by selling micronutrient and specialty fertilizer products to farmers through a dealer network that places annual booking orders before kharif and rabi seasons. Revenue is recognised on dispatch after discounts and rebates; the model blends manufactured chelated micronutrients with traded NPK and plant-protection SKUs. Payment quality depends on monsoon-led demand, GST-inclusive retail pricing, and dealer credit discipline. The company pioneered chelation technology for micronutrients in India and positions itself as a science-led niche player rather than a bulk urea supplier, which supports premium realizations on core brands but exposes margins to imported raw material costs on traded lines.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1969, Aries scaled from micronutrients into water-soluble NPK and biological adjacencies while keeping a dealer-led booking bazaar as the seasonal demand anchor. Consolidated revenue moved from about ₹472 crore in FY23 to ₹516 crore in FY24 and ₹622 crore in FY25 on Screener, with FY25 management discussion citing ₹778 crore of converted revenue on a slightly different reporting aggregation. FY26 revenue reached ₹740 crore with TTM sales near ₹779 crore and TTM PAT near ₹47 crore (+30% compounded profit growth on Screener). Operating profit margin stayed near 10% to 11% through FY25 and FY26 even as absolute operating profit rose, because material and distribution costs scaled with volume. Q1 FY26 revenue grew about 19% year on year per the August 2025 results filing, aligning with management’s ₹950 crore gross revenue ambition for FY26.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Accelerating top line; TTM near ₹779 cr.",
    ["FY23", "FY24", "FY25", "FY26", "TTM"],
    [{ name: "Sales", values: [472, 516, 622, 740, 779], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Farmers pay indirectly through about 1,717 dealers across 26 states who participated in the FY26 online booking bazaar, placing orders worth ₹830 crore to be lifted through the year per FY25 management discussion. That structure spreads geographic risk but concentrates seasonality: first-half revenue contributed 51.6% of FY25 sales. Promoter ownership above half keeps strategy aligned with long dealer relationships rather than quarterly margin maximisation. FII ownership below 4% limits institutional liquidity but reduces forced selling in downturns. Top-dealer concentration is not disclosed in free quarterly tables; investors should read trade receivable notes in the annual report for single-customer exposure.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Core manufactured micronutrients and chelated products carry brand equity and GST-sensitive retail pricing, while traded NPK and plant protection lines add volume with thinner margins. Management highlights import substitution through Made in India high density NPK and expects GST 2.0 rate cuts on micronutrients to boost affordability. Organic-certified products numbered 21 in company materials with 134 total brands, allowing crop-specific packs. Mix shift toward higher-margin micronutrients would lift OPM above the 10% FY26 consolidated print; failure to pass through raw material inflation on traded goods would keep margins flat despite revenue growth.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Stable near 10–11%; Q1 FY26 spike.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY26"],
    [{ name: "OPM %", values: [10, 11, 11, 10, 14], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY25–FY26 earnings inflection.",
    ["FY23", "FY24", "FY25", "FY26", "TTM"],
    [{ name: "PAT", values: [16, 18, 33, 42, 47], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Monsoon distribution and kharif planting intent drive booking conversion into billed revenue. GST changes on micronutrients and NPK alter farmer affordability and working-capital timing for dealers. Imported raw material prices and rupee moves affect traded product margins. Interest rates matter because borrowings, while down from FY24, still produced about ₹18 crore finance cost in FY26 on Screener. Peer re-rating among crop nutrition names (Coromandel, Rallis, Dhanuka) sets sentiment for ag-input multiples even when Aries’s micronutrient niche is less commodity-linked than urea.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit rose from ₹48 crore in FY23 to ₹76 crore in FY26 while OPM hovered near 10% to 11%, showing volume-led rather than margin-led expansion. ROCE improved to 21% in FY26 as working capital days fell to 60 and debtor days to 45.5 on Screener, a material improvement from FY23 levels above 100 days. Other income contributed ₹13 crore in FY26 and should not be treated as recurring operating earnings. Tax rates fluctuate quarter to quarter because of timing and incentives; use full-year cash tax when stress testing bear cases.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, Screener)",
    "Conclusion: Interest and tax bridge PAT below OP.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [55, 68, 76], color: "#1e3a5f" },
      { name: "PAT", values: [18, 33, 42], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operations was ₹77 crore in FY24, ₹104 crore in FY25, and ₹86 crore in FY26 on Screener, with CFO to operating profit above 130% in FY26 despite automation and warehousing capex absorbing investing cash flows. Free cash flow was ₹38 crore in FY26 after capex. Dealer booking models can pull forward receivables in strong monsoon years; the improvement in debtor days from 80 in FY24 to 46 in FY26 suggests collections discipline is working. Sustained CFO above ₹90 crore in FY27 would validate that PAT growth is not purely accrual from inventory build ahead of season.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, Screener)",
    "Conclusion: Strong conversion in FY24–FY26.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [54, 77, 104, 86], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Working capital days (Screener)",
    "Conclusion: Down to 60 days in FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Days", values: [97, 74, 60], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹56 crore at FY26 year end are manageable versus net worth near ₹334 crore, but finance cost near ₹18 crore shows the company is not debt free and remains sensitive to rate spikes if inventory financing needs rise. A failed monsoon that leaves dealers unable to lift booked orders would strand inventory and compress OPM in the seasonally weak March quarter, which posted near-zero operating profit margin in recent years. Capex on automation and ₹40 crore capital work in progress at FY26 increases execution risk if revenue misses the ₹950 crore gross target. Related-party and promoter dealings require annual report review though not load-bearing in this memo.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The founding Agarwal family retains majority control with stable 52.66% promoter holding across quarterly filings on Screener. Management emphasises dealer digitisation (online booking app), farmer engagement, and import substitution, which fits a multi-decade micronutrient franchise. Dividend payout near 5% to 8% signals modest cash return while funding automation capex. Incentives appear aligned for steady compounders though minority shareholders should watch finance cost and borrowings each year because growth is not entirely self-funded from CFO alone.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 promised mid-teens revenue growth through booking conversion and delivered about 17% revenue growth in MD&A terms. FY26 promised gross revenue near ₹950 crore against ₹830 crore bookings; Q1 FY26 revenue growth of 19% year on year is an early positive signal but the full-year target remains pending with TTM revenue near ₹779 crore on Screener. Working capital improvement promises were met with 60 working capital days in FY26. Margin promises from GST micronutrient benefits are partial: Q1 FY26 OPM near 14% but full-year OPM still near 10%.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is converting FY26 dealer bookings into billed revenue above ₹800 crore on a consolidated Screener basis. Second is mix shift to high density NPK and core micronutrients where Aries owns manufacturing depth. Third is GST-led demand elasticity on chelated products. Fourth is automation and warehousing lowering per-unit distribution cost. Fifth is modest export and plant protection adjacency though exports are not yet material in MD&A. Growth requires execution through two monsoon cycles, not one strong Q1.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bookings convert fully and gross revenue approaches ₹900 crore with OPM expanding toward 12%. Finance cost falls as borrowings drop below ₹45 crore. Net CFO exceeds ₹110 crore. FY27 PAT approaches ₹62 crore and supports our bull band near ₹730 per share (+53% vs ₹477 reference) at 15× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Erratic monsoon delays dealer lifts; revenue stalls near ₹760 crore with OPM near 9%. Raw material inflation on traded NPK compresses margins. Finance cost stays elevated and borrowings rise above ₹70 crore. FY27 PAT could slip toward ₹38 crore and equity toward our bear case near ₹328 per share at 11× earnings (-31% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a niche micronutrient franchise with improving ROCE (11× bear, 13.5× base, 15× bull), cross-checked with FY26 operating profit near ₹76 crore at 11× EV/EBITDA plus net worth supporting asset backing. Bear FY27 PAT ₹38 crore implies about ₹328 per share (-31% vs ₹477 reference). Base PAT ₹52 crore implies about ₹551 (+16%). Bull PAT ₹62 crore implies about ₹730 (+53%). Base case clears the 15% upside hurdle required for a Buy at the reference price, contingent on booking conversion through FY27.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base meets Buy threshold; bear tied to monsoon miss.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [328, 551, 730, 477], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Sep quarter peak; Mar quarter trough.",
    ["Jun-24", "Sep-24", "Dec-24", "Mar-25", "Jun-25", "Sep-25"],
    [{ name: "Sales", values: [135, 194, 170, 128, 161, 204], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with booking conversion commentary. Dealer booking bazaar totals for FY27 versus billed revenue. GST notifications on micronutrients and NPK. Raw material and import parity trends on conference calls. Borrowings and finance cost each quarter. Automation and CWIP capex completion. Promoter holding changes. Dividend policy as PAT scales. Peer ag-input multiples for Dhanuka and Rallis.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹477 reference. Base-case target near ₹551 per share implies about 16% upside, meeting our 15% Buy threshold if FY26 bookings convert through FY27. Upgrade toward bull near ₹730 if two consecutive quarters show consolidated revenue above ₹210 crore with OPM above 13%, borrowings below ₹45 crore, and net CFO above ₹100 crore, lifting base FY27 PAT toward ₹58 crore. Downgrade toward Neutral if revenue stalls below ₹760 crore with OPM below 9%, finance cost rises with borrowings above ₹70 crore, and fair value slides toward our bear band near ₹328 per share.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results letters and MD&A pending full transcript ingestion. Exact micronutrient versus traded NPK revenue split is not in free quarterly P&L tables. Dealer concentration and related-party sales require detailed annual report notes. Segment EBIT for manufacturing versus trading is not modelled separately. Export revenue is immaterial in recent MD&A but not tracked quarterly here. Update bear, base, and bull when FY26 annual report segment and tax reconciliation publish.",
  },
];
