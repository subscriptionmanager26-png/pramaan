import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const insecticidesMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Insecticides (India) Ltd (NSE: INSECTICID, BSE: 532645) is a promoter-led Indian agrochemical company manufacturing and marketing insecticides, fungicides, herbicides, and plant growth regulators under Maharatna and other brands through a nationwide dealer network. Promoter holding was about 72.3% as of June 2026 on Screener, with FIIs near 4.5% and DIIs near 5.1%. The stock is in BSE Commodities and related small-cap indices. At a reference price of ₹569 on 1 October 2026, market capitalisation is about ₹1,655 crore on roughly 2.91 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 13.2× on FY26 earnings, with book value about ₹419 per share and return on capital employed near 15.8%. The quote sits well below the 52-week high of ₹776 and above the ₹520 low, reflecting a de-rating after Q1 FY27 volume weakness even as gross margins held near 32%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Insecticides India earns by selling branded crop protection products to farmers through distributors and retailers, plus export and institutional channels as registrations mature. Revenue is recognised on dispatch; pricing mixes generic actives with Maharatna and other premium brands where the company can earn better gross margins. Payment cycles follow agrochemical seasonality: kharif and rabi peaks drive inventory and receivable swings, while field marketing and R&D remain largely fixed through trough quarters. Technical synthesis and formulation plants at Chopanki, Dahej, and Udhampur support domestic supply and export opportunities, but the listed story is still primarily domestic branded agchem volume, price/mix, and operating leverage on fixed costs.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Insecticides India built a research-led portfolio with hundreds of registrations and a pan-India footprint spanning Rajasthan, Gujarat, and Jammu and Kashmir manufacturing. Consolidated revenue moved from about ₹1,985 crore in FY24 to ₹2,055 crore in FY25 and near ₹2,140 crore in FY26 per the August 2026 investor presentation cited on the company website. PAT was near ₹142 crore in FY24 and about ₹139 crore in both FY25 and FY26 as EBITDA held near ₹227 crore in FY26 with margin near 10.6%. Q1 FY27 revenue fell about 12% year on year with PAT down about 24%, so the market prices a slower near-term growth path than the Maharatna brand narrative suggests.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, company filings)",
    "Conclusion: FY26 step-up; Q1 FY27 pause on industry volume.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1985, 2055, 2140], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through thousands of dealers; management emphasises field demonstrations and agronomy support, which spreads customer concentration relative to single-export molecule stories. Dealer credit quality depends on monsoon timing and crop prices, so receivable days can widen in delayed seasons without signalling permanent bad debt. Promoter control above 70% aligns product and dividend policy with the Aggarwal family, while public float near 28% is thin enough that global agchem sentiment can move the quote. Export customers add concentration at the registration level until multiple regions contribute meaningful revenue.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans insecticides, fungicides, herbicides, and plant growth regulators, with Maharatna and other premium brands intended to outgrow generic molecules. Q2 FY26 commentary cited premium products holding up better than herbicide categories exposed to discounting when spraying windows compress. Biologics and soil health pilots are emerging but still small relative to chemical crop protection. Management targets higher share of differentiated formulations and export merchandise over FY27 as Chopanki and Dahej capacities stabilise. Mix shift toward insecticides and fungicides in rice, cotton, and horticulture underpins the gross margin resilience seen in FY26 despite weak volumes.",
  },
  seriesChart(
    "Gross profit margin % (consolidated, management decks)",
    "Conclusion: Near 32% in Q1 FY27 despite volume decline.",
    ["FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "GPM %", values: [31.5, 31.8, 31.5, 31.6], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 flat YoY; Q1 FY27 down sharply on volume.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [142, 139, 139], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Indian monsoon distribution and acreage drive domestic volume; management on recent presentations cited abnormal kharif weather that reduced industry-wide agrochemical offtake and delayed spraying. Global generic active ingredient prices and China supply affect raw material costs, with pass-through lag visible in EBITDA margin when herbicides are discounted. Regulatory scrutiny on pesticide bans and registration renewals creates both delay risk and opportunity for compliant portfolios. Rupee versus dollar moves import parity on technicals. Peer re-rating in crop protection (Dhanuka, PI Industries, Rallis) sets sector sentiment even when Insecticides India is more domestic branded. Working capital and channel inventory ahead of rabi can swing quarterly PAT despite stable full-year gross margins.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "EBITDA reached about ₹227 crore in FY26 on consolidated revenue near ₹2,140 crore, keeping EBITDA margin near 10.6%. Other income near ₹12 crore in FY26 added stability below the line. Depreciation rose with Chopanki and Dahej capex, and finance costs increased on working capital lines near ₹17 crore in FY26 per management decks. ROCE near 15.8% on Screener remains respectable but below high-ROCE domestic agchem peers, supporting the argument that the de-rated multiple reflects volume and utilisation fears more than balance sheet stress. Five-year sales growth on Screener is positive but lumpy, highlighting cyclicality in the domestic channel.",
  },
  seriesChart(
    "EBITDA vs PAT (₹ crore, consolidated)",
    "Conclusion: EBITDA stable while PAT flat in FY26.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "EBITDA", values: [218, 222, 227], color: "#1e3a5f" },
      { name: "PAT", values: [142, 139, 139], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹154 crore in FY24 and near ₹145 crore in FY26 on Screener cash flow tables, after working capital seasonality typical of agrochemical distributors. CFO to EBITDA was near 64% in FY26, indicating acceptable conversion though weaker than asset-light franchises. Inventory and debtor days remain elevated versus urea names because crop protection channel stuffing ahead of kharif is industry standard. Free cash flow turned negative in some years when capex peaked, then recovered when inventory normalised. Until CFO stays above ₹160 crore through a weak monsoon year, headline PAT can overstate near-term distributable cash.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO recovered but remains working-capital sensitive.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [154, 130, 145], color: "#1e3a5f" }],
  ),
  seriesChart(
    "EBITDA margin % (consolidated)",
    "Conclusion: Margin near 10.6% in FY26; watch Q1 FY27 compression.",
    ["FY24", "FY25", "FY26"],
    [{ name: "EBITDA %", values: [11.0, 10.8, 10.6], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Insecticides India carries moderate borrowings relative to net worth on Screener, with debt to equity near 0.3 times and reserves above ₹1,200 crore Mar FY26. Liquidity risk rises if inventory and receivables balloon simultaneously in two weak monsoon years, forcing higher finance costs as seen in Q1 FY27. Capex overruns at Dahej or delayed export contributions would depress ROCE before they threaten solvency. The main balance sheet sensitivity is working capital absorption, not refinancing risk, unless management pursued a large debt-funded acquisition, which history does not suggest under promoter control.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Aggarwal promoter group holds about 72% and has led the company for decades with a farmer-outreach and Maharatna brand strategy. Executive compensation is not load-bearing in our sources, but capital allocation emphasises organic capex, dividends, and brand building while maintaining moderate leverage. Public float near 28% gives some institutional visibility, yet FII ownership near mid single digits can amplify volatility when global agchem multiples compress. Incentive alignment looks reasonable if management prioritises gross margin and premium mix over reckless volume targets in weak seasons.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 targeting high single-digit revenue growth through premium brands, export registrations, and capacity ramp. FY26 revenue near ₹2,140 crore delivered modest growth, but Q1 FY27 revenue down 12% showed that abnormal kharif weather can defer the recovery. Margin promises partially held: gross profit margin stayed near 32% even as EBITDA margin compressed on fixed costs. Capex and utilisation commitments remain in progress, with Chopanki and Dahej cited as FY27 levers while biologics pilots are still early. Working capital discipline was mixed: finance costs rose as inventory built ahead of rabi.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Recovery in domestic agrochemical volumes after normal monsoon distribution is the first lever. Second is scaling Maharatna and premium formulations that carry better margins than generic herbicides. Third is export merchandise as Middle East and CIS registrations convert to shipments. Fourth is plant utilisation at Chopanki, Dahej, and Udhampur lowering per-tonne costs as depreciation is absorbed over higher throughput. Fifth is biologics and adjacency products if regulatory paths stay manageable. None of these require equity dilution, which keeps the story focused on execution, mix, and working capital discipline.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon with favourable rabi and kharif distribution lifts volume high single digits without heavy discounting. Raw material inflation passes through with limited lag, holding EBITDA margin above 12%. Maharatna launches gain share quickly in rice and cotton, shifting mix toward insecticides and fungicides. Export lines contribute measurable revenue and diversify domestic weather risk. Net CFO exceeds ₹190 crore as inventory normalises post season. ROCE re-tests 18% and the market re-rates toward 15× forward earnings. FY27 PAT could approach ₹178 crore and support our bull band near ₹918 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another weak or uneven monsoon keeps industry volumes flat and forces herbicide discounting. Q1 FY27-style volume declines repeat with EBITDA margin toward 9% on fixed field costs. Delayed export registrations push out merchandise revenue. Working capital days rise with CFO below ₹110 crore and finance costs above ₹20 crore. FY27 PAT could fall toward ₹115 crore and equity toward our bear case near ₹435 per share at 11× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a working-capital-intensive domestic agchem franchise (11× bear, 13× base, 15× bull), cross-checked with FY26 EBITDA near ₹227 crore at 10× EV/EBITDA less net debt near ₹180 crore implying about ₹620 per share before any recovery premium. Bear FY27 PAT ₹115 crore implies about ₹435 per share (-24% vs ₹569 reference). Base PAT ₹150 crore implies about ₹670 (+18%). Bull PAT ₹178 crore implies about ₹918 (+61%). Base case clears the 15% upside hurdle versus reference if volume normalises after Q1 FY27 weakness.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears 15% upside; bear reflects prolonged volume weakness.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [435, 670, 918, 569], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE near 16% supports moderate quality premium.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [18, 17, 15.8], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and EBITDA margin on BSE/NSE results with premium mix commentary on investor decks. Monsoon and rabi acreage updates from IMD and Ministry of Agriculture. Export registration and first shipment announcements on exchange filings. Debtor and inventory days each quarter on Screener. Chopanki and Dahej utilisation commentary when management discloses. Herbicide category pricing versus raw material indices. Promoter holding changes above 72% band. Dividend declarations relative to PAT and capex plans. Regulatory updates on pesticide ban lists affecting portfolio molecules.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹569 reference. Base-case target near ₹670 per share offers about 18% upside with confirming volume recovery, EBITDA margin near 11.5%, and CFO above ₹150 crore. Upgrade toward bull if two consecutive quarters show revenue above ₹550 crore with YoY growth, EBITDA margin above 12%, and export revenue disclosed above 10% of sales while Maharatna mix expands. Downgrade toward Neutral if FY27 revenue stays below ₹2,150 crore with EBITDA margin below 10% and CFO below ₹120 crore, cutting base PAT toward ₹130 crore and target below ₹569. Downgrade toward Avoid if PAT falls below ₹110 crore with working capital days above 200 and ROCE below 13% while capex continues without revenue follow-through.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact Maharatna revenue share requires annual report segment notes not yet ingested line by line. Export order book size and customer concentration are not broken out in free sources used. Biologics revenue contribution is not separately disclosed. Chopanki and Dahej plant-wise EBITDA is management commentary only. Farmer reach and distributor counts on Screener insights are login-gated. Update bear, base, and bull when FY26 annual report segment and related-party notes publish.",
  },
];
