import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const gsfcMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Gujarat State Fertilizers & Chemicals Ltd (NSE: GSFC, BSE: 500690) is a Vadodara-based public sector undertaking promoted by the Government of Gujarat, listed since 1962. At a reference price of ₹147 on 1 October 2026, market capitalisation is about ₹5,854 crore on roughly 40 crore shares (face value ₹2). Trailing price-to-earnings is near 8.5× on TTM earnings, with book value about ₹308 per share and return on equity near 5.5%. The quote sits below the 52-week high of ₹200 and above the ₹139 low, reflecting a PSU discount on low ROE, heavy other income in reported PAT, and cyclical caprolactam spreads rather than a distressed balance sheet.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "GSFC manufactures caprolactam, nylon-6 virgin polymer and compounds, melamine, and a range of fertilisers including urea and complex grades, alongside traded fertiliser volumes when import parity allows. Industrial customers pay market-linked prices for caprolactam and nylon-6; melamine serves laminates and resins; fertiliser grades depend on government subsidy and reimbursement mechanics. Revenue mixes cyclical chemical spreads with regulated fertiliser volumes. Payment cycles combine chemical collections with fertiliser working capital tied to subsidy flows, which showed up in working capital days near 154 on Screener for Mar FY26.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "GSFC built Gujarat's integrated fertiliser and caprolactam chain over six decades. FY22 was a peak profit year with PAT about ₹899 crore on revenue ₹9,085 crore and OPM near 15% on Screener as chemical realisations surged. FY23 remained strong at PAT ₹1,266 crore before FY24 normalised to PAT ₹564 crore as OPM fell to 6%. FY25 stabilised at PAT ₹591 crore on revenue ₹9,534 crore. FY26 recovered to PAT ₹673 crore with OPM 7% and TTM PAT ₹693 crore aided by Sep 2025 PAT ₹324 crore but offset by Mar 2026 PAT ₹52 crore. CWIP fell to ₹192 crore by March 2026 as projects rolled into fixed assets ₹3,331 crore while borrowings stayed near ₹27 crore.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line re-accelerated TTM on stronger Jun 2026 quarter sales.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [9155, 9534, 10946, 12344], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers span automotive and engineering buyers for nylon-6 compounds, industrial users for caprolactam and melamine, and millions of farmers for subsidised fertilisers. No single buyer dominates disclosure, but government fertiliser policy effectively sets urea economics. Promoter holding from Gujarat state entities near 38% plus government category holdings reduces governance surprise but can slow strategic pivots. FII holding fell from near 21% to about 12% between Mar 2023 and Jun 2026 while public float rose, adding liquidity but also trading volatility. Treasury investments mean reported other income near ₹277 crore TTM is a recurring feature investors must normalise when valuing core operations.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Screener highlights GSFC as market leader in the caprolactam to nylon-6 value chain, with compounds used in consumer durables and automotives. Fertiliser volumes anchor scale while chemicals drive margin swings. FY26 recovery came with higher revenue and stable 7% OPM, but quarterly OPM ranged from 3.2% in Mar 2026 to 11% in Sep 2025, showing spread volatility. Traded fertiliser volumes add top-line in favourable import windows without commensurate margin. Segment revenue splits for FY26 are not in the free sources used here. Mix shift toward caprolactam helps when benzene-linked spreads widen; mix toward traded fertiliser compresses returns.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: PAT tracks operating profit less than at GNFC but other income still matters at ₹277 cr TTM.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [514, 636, 790, 830], color: "#1e3a5f" },
      { name: "PAT", values: [564, 591, 673, 693], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Caprolactam and benzene spread moves dominate chemical profitability. Nylon-6 demand follows automotive production and engineering cycles. Melamine prices track global urea and natural gas indirectly. Department of Fertilizers decisions on urea fixed-cost and energy reimbursement affect fertiliser profitability. Monsoon and sowing patterns drive fertiliser offtake. Interest rates matter less near-term because borrowings are minimal, but opportunity cost of large treasury balances affects other income. Peer re-rating among Gujarat PSU chemical names can pull GSFC multiples even when fundamentals are unchanged.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin fell from 15% in FY22 to 6% in FY24 before stabilising at 7% in FY26 and TTM on Screener. ROCE fell from 13% in FY22 to 6% in FY24 and recovered to 7% in FY26. Three-year profit CAGR is negative on headline metrics because FY23 was an exceptional base. ROE averaged about 5% over three years, below cost of equity, so the market rightly treats GSFC as cyclical with a PSU governance discount. Investors should normalise Sep 2025 quarterly PAT when using trailing multiples near 8.5×.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin mean-reverted after FY22 peak; quarterly dispersion remains wide.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [15, 6, 7, 7], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was negative ₹268 crore in FY24 despite ₹514 crore operating profit, then recovered to ₹83 crore in FY25 and ₹136 crore in FY26 on Screener. CFO to operating profit improved to about 34% in FY26, well below ideal conversion. Working capital days jumped to 154 in FY26 from 93 in FY25. Free cash flow was negative ₹172 crore in FY26 after investing outflows. Other income flatters PAT versus pure operating cash generation. Dividend payout near 30% in FY26 signals board confidence, but sustained CFO above ₹400 crore is needed to fund dividends and maintenance capex without liquidating investments.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY24 was an outlier trough; FY26 recovery remains incomplete versus PAT.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [-268, 83, 136], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹27 crore at March 2026 are not the risk vector. The balance sheet risk is treasury drawdown and capex timing: investments fell from ₹6,015 crore in FY24 to ₹4,610 crore in FY26 as cash funded operations and projects. A simultaneous caprolactam price collapse and fertiliser reimbursement delay would cut PAT toward our bear band without threatening solvency. Equity impairment is unlikely; dividend cuts and production curtailment would come first. Negative free cash flow at low leverage is a warning on quality of earnings, not on going concern.",
  },
  seriesChart(
    "Investments vs borrowings (₹ crore, Mar FY26)",
    "Conclusion: Liquidity cushion is large; leverage is not the constraint.",
    ["Investments", "Borrowings"],
    [{ name: "Mar FY26", values: [4610, 27], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under PSU oversight with Gujarat promoter entities holding a stable 38% stake. Incentives emphasise plant uptime, dividend continuity visible in payout ratios near 30%, and social objectives in fertiliser supply. That aligns with income-oriented shareholders but can encourage production even when spreads are weak. Independent directors and audit committees follow listed company norms. Management communication on working capital and caprolactam spreads is explicit in curated call excerpts, which helps investors track conversion risk rather than hiding it inside blended margins.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised caprolactam leadership, fertiliser throughput, debt-free funding of projects, sustained dividends, and improved cash conversion after FY24. Chemical margins recovered partially into FY26 but remain below FY22. Debt is effectively absent on consolidated metrics. Dividends continued. CWIP completion rolled into higher fixed assets. Cash conversion promises remain partially met with working capital days at 154. Overall, delivery is mixed: balance sheet liquid, spread and CFO outcomes still open.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: higher caprolactam and nylon-6 utilisation when automotive and engineering demand holds. Margin: caprolactam and melamine spreads if benzene-linked economics tighten. Policy: urea fixed-cost revision would lift fertiliser segment ROCE. Treasury: redeploying investments into debottlenecking without equity dilution. Working capital: collections improvement would release cash and support dividend headroom. These drivers are largely priced at 8.5× TTM earnings, so FY27 must show operating PAT closer to ₹750 crore excluding one-off other income spikes to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Caprolactam spreads stay firm for multiple quarters similar to Sep 2025. Nylon-6 compound volumes grow high single digits with stable realisations. Government implements partial urea energy and fixed-cost revisions, lifting fertiliser segment profit without volume change. Other income holds near ₹280 crore while operating profit rises. Working capital days fall below 100, pushing CFO above ₹500 crore. FY27 PAT could approach ₹880 crore and support our bull band near ₹209 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Caprolactam prices fall in a global oversupply wave while GSFC carries inventory. Urea reimbursement stays delayed through FY27. Other income drops as investments are liquidated to fund dividends and capex. Working capital days stay above 140, keeping CFO near ₹100 crore despite accounting PAT. Mar 2026 style weak quarters repeat. FY27 PAT could fall toward ₹520 crore and compress equity toward our bear case near ₹98 per share at 7.5× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a PSU cyclical chemicals and fertiliser name (7.5× bear, 8.5× base, 9.5× bull), cross-checked with TTM operating profit near ₹830 crore at 7× EV/EBITDA implying about ₹145 per share before any recovery premium. Bear FY27 PAT ₹520 crore implies about ₹98 per share (-33% vs ₹147 reference). Base PAT ₹700 crore implies about ₹149 (+1.4%). Bull PAT ₹880 crore implies about ₹209 (+42%). Base-case upside sits below our 15% Buy threshold, so the reference price already embeds mid-cycle spreads and treasury-backed earnings unless CFO and spreads outperform together.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs spreads and cash conversion together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [98, 149, 209, 147], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Sep 2025 quarter drove optimism; Mar 2026 quarter was a trough.",
    ["Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "PAT", values: [324, 158, 52, 159], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings remain cyclical versus FY23 peak; FY26 marked partial recovery.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [899, 564, 673, 693], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Department of Fertilizers notifications on urea fixed-cost and energy norms. Monthly caprolactam and benzene spread commentary in investor presentations. Nylon-6 compound volume disclosures in annual report segment notes. Working capital days and inventory build each quarter. Investment portfolio balance versus dividend declarations. BSE/NSE concall transcripts for verbatim volume guidance. Completion of maintenance capex without fresh CWIP spikes. Peer PSU chemical re-rating if ROCE crosses 9% sustainably.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹147 reference. Base-case target near ₹149 offers about 1.4% upside, below our 15% Buy hurdle, while low leverage and dividend yield near 3.4% keep the name off Avoid unless spreads and cash conversion both fail. Upgrade to Buy if two consecutive quarters show consolidated OPM above 9% with CFO above ₹150 crore and caprolactam spread commentary stays positive, lifting base PAT toward ₹780 crore and target above ₹169. Downgrade to Avoid if TTM PAT falls below ₹600 crore with OPM under 6% and working capital days stay above 150 while other income drops below ₹220 crore.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for chemicals versus fertilisers for FY26 are not in the free sources used. Caprolactam, nylon-6, and melamine volume series on Screener require premium login. Exact FY27 capex phasing by project is not modeled line by line. Treasury gain breakdown inside other income needs note-level reconciliation. Traded fertiliser margin per tonne is not separated in our operating view. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
