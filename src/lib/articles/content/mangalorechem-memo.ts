import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const mangalorechemMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Mangalore Chemicals & Fertilizers Ltd (NSE: MANGCHEFER, BSE: 530011) is a Zuari Fertilisers and Chemicals subsidiary in the Adventz Group, headquartered at Panambur near Mangalore on India's west coast. The stock sits in fertiliser and small-cap indices with about 60.6% promoter holding as of September 2025 on Screener. At a reference price of ₹309 on 1 October 2026, market capitalisation is about ₹3,662 crore on roughly 11.85 crore shares (face value ₹10). Trailing price-to-earnings on Screener reads near 62.9× on depressed TTM earnings, with book value about ₹36 per share and return on equity near 14.3%. The quote trades below the 52-week high of ₹339 and above the ₹300 low, reflecting merger optionality with Paradeep Phosphates, a rich multiple on trailing profit, and volatile quarterly PAT after FY25 revenue normalised lower.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "MCF manufactures Mangala urea, DAP, SSP, and plant nutrition products at its coastal complex, and trades complementary fertiliser grades where economics allow. Farmers and dealers pay subsidised retail prices on urea and controlled phosphatic grades while the company receives reimbursement from the Department of Fertilizers on fixed costs and energy norms. Industrial co-products such as ammonium bicarbonate and sulphuric acid sell at market-linked prices. Revenue therefore mixes policy-linked urea economics with phosphatic spreads and smaller industrial lines. Payment cycles tie to subsidy receivables and dealer credit, which showed up in working capital days falling toward 30 on Screener pros but remaining seasonally volatile in management commentary.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "MCF evolved from a west-coast ammonia-urea complex into a Zuari Group platform for southern fertiliser supply. FY23 revenue near ₹3,600 crore and PAT near ₹135 crore on Screener marked a mid-cycle base. FY24 revenue rose to about ₹3,795 crore with PAT near ₹155 crore as operating margin widened toward 9.9%. FY25 revenue fell to ₹3,332 crore per the BSE annual report while PAT was ₹144 crore as top-line normalised after a strong FY24 comparator. FY26 rebounded operationally with Q1 revenue ₹862 crore and PAT ₹62 crore per the July 2025 investor deck. Borrowings trended lower versus the FY23 peak as management emphasised deleveraging in Screener pros.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener and BSE)",
    "Conclusion: FY25 dip reversed partially in FY26 on urea seasonality.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [3795, 3332, 3650, 3780], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers include farmers across Karnataka and neighbouring states reached through a dealer network, with phosphatic grades competing against national players. Zuari promoter control near 60.6% aligns strategy with group integration including the proposed Paradeep Phosphates amalgamation. FII holding rose toward 3.0% and DII toward 8.6% in September 2025 on Screener, while public float near 27% provides liquidity. Concentration risk is policy and seasonality: delayed reimbursement or a weak monsoon affects the entire urea division simultaneously. No single private buyer dominates disclosure, but group-related transactions require monitoring in related-party notes.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Urea remains the volume anchor with FY25 production of 443,322 MT against reassessed capacity near 379,500 MT per the annual report. DAP, SSP, and plant nutrition products add margin when phosphatic spreads widen. FY25 revenue decline reflected lower top-line versus FY24 rather than plant shutdowns. Q1 FY26 urea sales near 1.98 lakh MT in the investor deck confirms seasonal strength. Premium Screener insights hide exact phosphatic production volumes without login. Mix shift toward traded P&K helps when import parity moves; mix toward urea without reimbursement compresses ROCE. Industrial co-products remain smaller than fertiliser revenue in MD&A narrative.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Interest fell with deleveraging, keeping PAT closer to operating profit.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [375, 323, 347, 360], color: "#1e3a5f" },
      { name: "PAT", values: [155, 144, 195, 205], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Department of Fertilizers decisions on urea fixed-cost and energy reimbursement dominate urea profitability. West-coast natural gas and ammonia tariffs feed conversion costs at Panambur. Monsoon and sowing patterns drive urea offtake across the southern market. DAP and SSP prices move with global phosphatic benchmarks and domestic subsidy policy. Paradeep merger headlines re-rate the stock on integration optionality even before consolidated earnings reflect synergy. Interest rates matter less than for heavily levered peers after borrowings fell, but cost of borrowing on Screener pros still reads high relative to PSU fertiliser names. Zuari Group capital allocation across Goa, Mangalore, and Paradeep assets influences sentiment.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin held near 9.7% to 9.9% from FY24 through FY26 estimates on Screener and BSE data, above many single-digit PSU peers. ROCE reached 17.1% on Screener pros while three-year return on equity averaged about 12.1%, reflecting earnings volatility. FY25 PAT fell modestly versus FY24 despite stable margins because revenue contracted. Trailing P/E near 62.9× embeds a weak TTM PAT window rather than FY25 run-rate near ₹144 crore, which would imply about 25× on market cap. Investors should normalise on FY27 PAT closer to ₹175 crore in our base case rather than extrapolating Q1 FY26 alone.",
  },
  seriesChart(
    "Operating margin % (consolidated)",
    "Conclusion: High single-digit OPM persisted through FY25 revenue dip.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [9.9, 9.7, 9.5, 9.5], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹496 crore in FY24, then ₹271 crore in FY25, then an estimated ₹220 crore in FY26 on Screener direction and management seasonality commentary. CFO to operating profit remained positive but fell as receables built through peak urea billing. Free cash flow turned positive in FY25 near ₹182 crore on third-party summaries aligned with Screener cash flow tables. Subsidy receivable timing explains swings more than accounting PAT quality alone. Dividend payout near 23% signals board confidence, but sustained CFO above ₹250 crore is needed to fund dividends and maintenance capex without re-levering.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO stayed positive but stepped down after FY24 outlier.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [496, 271, 220], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings estimated near ₹320 crore at March 2026 are manageable versus FY24 levels near ₹520 crore, but a simultaneous reimbursement delay and phosphatic spread collapse would cut FY27 PAT without threatening solvency given Zuari support. Equity dilution is unlikely near-term absent merger share issuance under the Paradeep scheme. Dividend cuts would signal stress before distress. Negative free cash flow combined with merger integration capex would be the warning sign. Net debt near zero on some quarterly decks is a strength relative to Paradeep's levered profile, but the stock price already capitalises group optionality.",
  },
  seriesChart(
    "Borrowings trend (₹ crore, consolidated)",
    "Conclusion: Deleveraging reduced interest drag into FY26.",
    ["FY24", "FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [520, 380, 320], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under Zuari and Adventz oversight with stable promoter holding. Incentives emphasise plant uptime, urea energy efficiency, southern market share, and progress on the Paradeep amalgamation visible in FY25 MD&A and investor decks. That aligns with holders betting on integration but can encourage optimism in merger timelines while standalone PAT grows slowly. Independent directors and audit committees follow listed company norms. Management communication on urea volumes and receivable seasonality is explicit in curated call excerpts, which helps investors separate merger premium from run-rate earnings.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised urea production above reassessed capacity, cost optimisation, debt reduction, dividend continuity, Paradeep merger progress, and improved working capital metrics. FY25 urea production exceeded capacity on approved metrics. OPM stayed near 10%. Borrowings fell on Screener trends. Dividend of ₹1.50 was recommended for FY25. Merger remains partially delivered with regulatory clearance but no closure by the reference date. Cash conversion promises were mixed: CFO positive but down sequentially. Overall, delivery is solid operationally, incomplete strategically on merger closure, and expensive in the market until synergy lands in reported PAT.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: urea and phosphatic utilisation when monsoon supports southern sowing. Margin: reimbursement catch-up and energy metrics if Gcal/MT improves on west-coast gas. Integration: Paradeep amalgamation could lift group capacity toward 3.7 MMTPA with logistics synergy cited in Paradeep MD&A excerpts. Balance sheet: continued deleveraging supports dividends. These drivers are largely priced at 8.6× book and a trailing P/E that embeds merger hope, so FY27 must show PAT near ₹175 crore with OPM above 9% and merger clarity to justify CMP near ₹309.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Paradeep merger closes with identifiable cost synergy on procurement and dispatch. Urea energy reimbursement accelerates, lifting fertiliser segment profit without volume change. DAP and SSP spreads widen while Mangalore runs at high utilisation through two strong monsoons. Borrowings fall below ₹200 crore as CFO exceeds ₹300 crore annually. FY27 PAT could approach ₹230 crore and support our bull band near ₹291 per share at 15× earnings, still slightly below CMP unless the market assigns a higher integration premium.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Merger stalls or dilutes minority holders without synergy. Urea reimbursement lags through FY27 while revenue mix shifts to lower-margin traded grades. Q1 FY26 PAT strength fades into weak kharif quarters. Interest costs stay elevated on working capital lines despite lower gross borrowings. CFO turns negative while the market removes merger premium. FY27 PAT could fall toward ₹110 crore and compress equity toward our bear case near ₹102 per share at 11× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a west-coast urea and phosphatic name with merger overlay (11× bear, 13× base, 15× bull), cross-checked with TTM operating profit near ₹360 crore at 7× EV/EBITDA less net debt near ₹320 crore implying about ₹186 per share before integration premium. Bear FY27 PAT ₹110 crore implies about ₹102 per share (-67% vs ₹309 reference). Base PAT ₹175 crore implies about ₹192 (-38%). Bull PAT ₹230 crore implies about ₹291 (-6%). Base-case upside is far below our 15% Buy threshold, while the reference price embeds Paradeep amalgamation hope and a rich multiple on normalised earnings.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Even bull case sits below CMP without a higher integration premium.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [102, 192, 291, 309], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, curated and Screener)",
    "Conclusion: Q1 FY26 drove optimism; prior quarters were weaker.",
    ["Q4 FY25", "Q1 FY26", "Q2 FY26E", "Q3 FY26E"],
    [{ name: "PAT", values: [16, 62, 40, 42], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Urea production (MT, annual report)",
    "Conclusion: FY25 output exceeded reassessed nameplate capacity.",
    ["FY24", "FY25"],
    [{ name: "Urea MT (000s)", values: [435, 443], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: FY26 marked partial recovery from FY25 revenue dip.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [155, 144, 195, 205], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "BSE and NSE scheme of amalgamation filings for Paradeep and Mangalore Chemicals. Department of Fertilizers notifications on urea energy norms. Quarterly urea production and sales volumes in investor presentations. Subsidy receivable and working capital days each quarter. Zuari Group commentary on southern market strategy. Peer re-rating if west-coast urea names show ROCE above 16% with positive CFO for two consecutive quarters. Commissioning or debottlenecking updates at the Panambur complex.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹309 reference. Base-case target near ₹192 implies about 38% downside versus reference, but merger optionality and Zuari backing keep the name off Avoid unless integration fails outright. The stock is not a Buy because normalised FY27 PAT × P/E does not offer 15% upside to base without paying a large integration premium. Upgrade to Buy if amalgamation closes with disclosed synergy above ₹80 crore annualised, two consecutive quarters show consolidated OPM above 10% with CFO above ₹80 crore, and base PAT rises toward ₹220 crore lifting target above ₹355 (+15%). Downgrade to Avoid if merger is withdrawn, TTM PAT falls below ₹120 crore with OPM under 7%, and borrowings rise above ₹600 crore while CFO stays negative for two quarters.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for urea versus phosphatic versus industrial co-products for FY26 are not in the free sources used. DAP and SSP production volumes on Screener require premium login. Exact Paradeep exchange ratio and synergy quantification are not in our base PAT. Subsidy receivable ageing needs note-level reconciliation from the FY26 annual report. Q2 through Q4 FY26 consolidated figures are partly estimated from seasonal patterns until filings publish. Update bear, base, and bull when amalgamation closes or FY26 segment notes publish.",
  },
];
