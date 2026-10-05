import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const heranbaMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Heranba Industries Ltd (NSE: HERANBA, BSE: 531266) is a promoter-led Indian export-oriented agrochemical company manufacturing formulations and technical grade products from Vapi, Gujarat, and allied sites. Promoter holding was about 73.8% as of June 2026 on Screener, with FIIs near 2.4% and DIIs near 4.1%. The stock is in BSE Commodities and related small-cap indices. At a reference price of ₹172 on 1 October 2026, market capitalisation is about ₹689 crore on roughly 4.01 crore shares (face value ₹10). Trailing consolidated price-to-earnings is not meaningful on TTM losses, with book value about ₹202 per share and return on capital employed near negative 2%. The quote sits well below the 52-week high of ₹365 and near the ₹155 low, reflecting two consecutive loss years even as Q1 FY27 operating profit margin improved toward 13.6%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Heranba earns by selling agrochemical formulations and technical grade actives to export customers and domestic distributors, recognised on dispatch. Pricing follows global generic indices, customer contracts, and registration-led mix, so operating profit margin can swing from double digits in strong quarters to mid-single digits across a loss year. Payment cycles are export-heavy: receivable and inventory days run long relative to domestic branded peers, which makes cash from operations sensitive to distributor restocking. Capacity at Vapi supports both legacy molecules and newer registrations, but the listed story is export volume, realisation, provisions, and working capital discipline after FY25 earnings collapsed.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Heranba scaled export formulations through the 2010s, with consolidated revenue near ₹1,319 crore in FY22 and reported PAT near ₹104 crore per Screener. Generic price pressure, inventory provisions, and weak realisations cut PAT to ₹2 crore in FY24 and negative ₹78 crore in FY25 on revenue near ₹1,595 crore. FY26 TTM revenue eased to ₹1,526 crore while PAT stayed near negative ₹77 crore, keeping ROCE negative. Q1 FY27 revenue jumped to about ₹437 crore with operating profit margin near 13.6%, the first strong quarter in over a year, but the market at ₹172 prices only a partial recovery until full-year earnings and cash conversion confirm.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY25 peak sales; FY26 slight moderation.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1257, 1410, 1595, 1526], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers are overseas formulators, distributors, and domestic channel partners; management discusses export geographies on presentations rather than naming top buyers in free quarterly sources. Concentration risk sits at the molecule and region level when herbicide or insecticide realisations move together. Promoter control near 74% aligns strategy with the founding group, while public float near 26% is enough for retail turnover but limited FII ownership below 3% can amplify volatility. Registration dependence means a delay in one regulated market can stall revenue for specific SKUs even when other regions remain healthy.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans insecticides, herbicides, and fungicides in both formulations and technical grades, with export merchandise dominating the revenue bridge in recent years. Q1 FY27 commentary in our curated excerpts cites stronger shipment volumes and better mix versus the prior year trough quarter, lifting operating profit margin toward low teens. Domestic formulation remains a smaller but stabilising leg when export distributors destock. Management targets a richer mix of registered products as legacy generics mature, but free sources do not break out exact formulation versus technical revenue each quarter.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY25 trough near 4.3%; Q1 FY27 spike.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [6, 7, 4.3, 6, 13.6], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: Losses in FY25–FY26 TTM after FY22 peak.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [104, 34, 2, -78, -77], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic agrochemical prices and Chinese export supply set realisations for many molecules Heranba sells abroad. INR versus USD and EUR moves import parity and receivable values. Latin America and other export regions follow their own distributor inventory cycles, which can desynchronise from Indian monsoon seasonality. Regulatory renewals and ban lists in the EU and Americas create both delay risk and opportunity for compliant registrations. Peer re-rating in export technical names (Bharat Rasayan, Sharda Cropchem) sets sector sentiment. Working capital swings can move quarterly PAT and CFO even when gross margins look stable for a single quarter.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit was near ₹69 crore in FY25 on revenue near ₹1,595 crore, keeping OPM near 4.3% before below-the-line items drove the reported loss. FY26 TTM operating profit recovered toward ₹87 crore on slightly lower revenue, implying OPM near 6% but still insufficient to cover finance costs and provisions fully. EPS moved from ₹26.08 in FY22 to negative ₹18.84 on TTM Jun 2026 per Screener. Book value per share near ₹202 on equity plus reserves near ₹810 crore provides some asset anchor, but negative ROCE tells investors capital is not yet earning its cost after the downcycle.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Operating line recovered before PAT turned positive.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [98, 69, 87], color: "#1e3a5f" },
      { name: "PAT", values: [2, -78, -77], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹107 crore in FY23 and ₹101 crore in FY24 on Screener, then negative near ₹96 crore in FY25 as working capital absorbed cash despite revenue growth. FY26 showed near-zero net CFO, indicating collections and inventory still neutralised operating recovery. Until CFO sustainably exceeds ₹60 crore while PAT turns positive, headline quarterly margins can overstate distributable cash. Export receivable days typically run higher than domestic agchem peers, so a single strong shipment quarter can inflate revenue without immediate cash collection.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY25 outflow; FY26 flat.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [107, 101, -96, 0], color: "#1e3a5f" }],
  ),
  seriesChart(
    "EPS (₹ per share, reported)",
    "Conclusion: Loss per share in FY25–FY26 TTM.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "EPS", values: [26.08, 8.72, 0.77, -19.1, -18.84], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Heranba is not highly levered relative to net worth on Screener, with reserves near ₹770 crore against equity capital ₹40 crore Mar FY26, but moderate borrowings can still rise if working capital funding is needed through another loss year. Solvency risk rises if negative PAT repeats while receivable days stretch further and banks tighten limits. Capex for formulation lines and registration spending continues even in downturns, which pressures free cash flow when CFO is weak. Promoter support near 74% reduces governance risk but does not guarantee equity issuance will never be needed if losses persist multiple years.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The promoter group led by the Rander family has controlled Heranba since its listing in 2021, with a manufacturing heritage in Vapi agrochemical clusters. Executive compensation is not load-bearing in our sources, but capital allocation emphasises capacity and registrations over high dividend payout. Public float near 26% and modest DII participation near 4% mean the stock can move sharply on quarterly margin prints. Alignment looks acceptable if management prioritises returning to positive ROCE before chasing revenue growth in weak pricing environments.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY25 expecting to navigate export pricing pressure; instead reported PAT near negative ₹78 crore with OPM near 4.3%, a clear miss. FY26 aimed at stabilising losses; TTM PAT near negative ₹77 crore marks partial progress on revenue but not on bottom line. Q1 FY27 delivered revenue near ₹437 crore and OPM near 13.6%, beating near-term margin hopes though full-year proof is pending. Commitments to positive cash from operations remain open with FY26 CFO near zero. Investors should treat Q1 FY27 as necessary but not sufficient for re-rating from 52-week lows.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is sustaining double-digit operating profit margin for more than one quarter as export realisations normalise. Second is revenue growth toward ₹1,650 crore without repeating FY25-style provisions. Third is positive net cash from operations with improving debtor days. Fourth is registration-led mix in higher-margin formulations. Fifth is utilisation of Vapi capacity as distributor inventories normalise in key export regions. Growth does not require equity dilution if leverage stays moderate and promoters avoid aggressive inorganic bets.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Export restocking persists and OPM holds near 12% for FY27 full year. Provisions reverse partially and PAT approaches ₹95 crore. CFO exceeds ₹110 crore with working capital days falling materially. ROCE turns positive toward 14% and the market re-rates from loss-making multiples toward 13× forward earnings. Equity could approach our bull band near ₹308 per share on that path.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Generic prices weaken again and OPM falls back toward 5% with revenue flat near ₹1,480 crore. Additional inventory or receivable provisions push PAT toward ₹12 crore or continued losses. CFO stays negative and borrowings rise. FY27 EPS remains near zero or negative and the stock de-rates toward book or below, consistent with our bear case near ₹30 per share at 10× on minimal earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a cyclical export formulation franchise (10× bear, 12× base, 13× bull), cross-checked with FY26 operating profit near ₹87 crore at 8× EV/EBITDA plus net worth near ₹810 crore supporting asset backing above market cap but not replacing earnings recovery. Bear FY27 PAT ₹12 crore implies about ₹30 per share (-83% vs ₹172 reference). Base PAT ₹52 crore implies about ₹156 (-9%). Bull PAT ₹95 crore implies about ₹308 (+79%). Base case does not clear the 15% upside hurdle required for a Buy at the reference price.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base below reference; bull needs full-year margin proof.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [30, 156, 308, 172], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Q1 FY27 rebound versus weak Jun 2025 quarter.",
    ["Jun-24", "Sep-24", "Dec-24", "Mar-25", "Jun-25", "Sep-25"],
    [{ name: "Sales", values: [275, 424, 300, 258, 296, 437], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with export mix commentary. Generic active price indices versus management realisation remarks. Net cash from operations and debtor days each quarter on Screener. Provision reversals or new charges in footnotes. Registration approvals in EU and Latin America. Promoter holding changes above 73% band. Any equity raise or borrowing increase on exchange filings. Peer export multiples for Bharat Rasayan and Sharda Cropchem. Dividend policy when PAT turns positive.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹172 reference. Base-case target near ₹156 per share implies about 9% downside, so the risk-reward does not meet our Buy threshold despite Q1 FY27 margin improvement. Upgrade toward Buy if two consecutive quarters show consolidated revenue above ₹420 crore with OPM above 11%, reported PAT positive, and net CFO above ₹40 crore, lifting base FY27 PAT toward ₹65 crore and target above ₹198 (+15%). Downgrade toward Avoid if FY27 PAT stays negative with OPM below 6% and CFO below zero while borrowings rise, cutting fair value toward our bear band near ₹30 per share.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact export country and customer concentration requires annual report notes not yet ingested line by line. Formulation versus technical revenue split and provision detail are not modelled separately. Segment EBIT for domestic versus export is not broken out in free sources. Borrowing maturity schedule on Screener is not load-bearing in this memo. Update bear, base, and bull when FY26 annual report geographic and related-party notes publish.",
  },
];
