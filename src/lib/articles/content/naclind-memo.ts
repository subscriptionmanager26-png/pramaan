import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const naclindMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "NACL Industries Ltd (NSE: NACLIND, BSE: 524661) is an Indian crop protection company manufacturing technical grade actives and formulations from Srikakulam and Ethakota, serving domestic dealers and export markets. Coromandel International Ltd became promoter with about 53.7% holding as of June 2026 after agreements and an open offer completed in August and September 2025. FIIs were near 0.1% and DIIs near 1.3% on Screener. The stock is in BSE Commodities and related indices. At a reference price of ₹130 on 1 October 2026, market capitalisation is about ₹3,055 crore on roughly 23.5 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 118× on TTM earnings of ₹0.53 per share, with book value about ₹29.2 per share and return on capital employed near 8.1%. The quote sits below the 52-week high of ₹245 and above the ₹113 low, reflecting FY24–FY25 losses, a partial FY26 recovery, and a control premium above Coromandel’s ₹76.70 open offer price.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "NACL earns by selling crop protection technicals and formulations to domestic distributors and export customers, plus contract manufacturing for multinational partners. Revenue is recognised on dispatch; pricing follows generic indices, registration-led mix, and seasonal channel behaviour. The asset base spans manufacturing plants, registrations in India and more than thirty export countries, and a dealer network cited at over fifty-five thousand counters on Screener. Payment cycles combine domestic credit with export LC timing, so receivable days near 106 in FY26 keep cash from operations sensitive to quarterly shipment phasing. Coromandel control adds strategic optionality on procurement and portfolio cross-sell, but listed shareholders still own earnings volatility and integration execution risk.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "NACL scaled revenue to about ₹2,116 crore in FY23 with operating profit margin near 9% and reported PAT near ₹95 crore per Screener. Destocking and weak realisations cut FY25 revenue to ₹1,235 crore and drove reported PAT near negative ₹92 crore with negative operating profit. FY26 consolidated revenue rebounded to ₹1,584 crore and operating profit to ₹103 crore, but reported PAT was only about ₹5 crore after interest near ₹46 crore and tax volatility. Q1 FY27 revenue near ₹383 crore with operating profit margin near 11% and PAT near ₹21 crore is the first strong quarter after the loss cycle, yet trailing earnings still justify a triple-digit P/E at ₹130 until full-year profit and cash conversion confirm.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY23 peak, FY25 trough, FY26 rebound.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [2116, 1779, 1235, 1584], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers include domestic dealers, export distributors, and multinational contract partners across insecticides, herbicides, and fungicides covering major crops. Management discusses export geographies and MNC manufacturing relationships rather than naming single buyers in free quarterly sources. Coromandel as promoter aligns strategy with Murugappa group crop protection ambitions, while public float near 45% expanded after the control change. Concentration risk sits at molecule and region level when generic prices move together. Contract manufacturing adds revenue stability but margin depends on utilisation and raw material pass-through terms not fully disclosed each quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans more than fifty products in technicals and formulations for Indian and export markets, with international brand registrations expanding in South-East Asia and Africa per company profile on Screener. FY26 recovery lifted formulation and technical shipments versus FY25, with Q1 FY27 showing double-digit operating profit margin on better utilisation. Domestic counter reach and logistics are cited as competitive strengths. Mix shift toward higher-margin registered exports is an integration lever with Coromandel, but segment revenue splits for technicals versus formulations are not in the free quarterly tables we used.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY25 trough; Q1 FY27 spike to 11%.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [9, 1, -5, 7, 11], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: Losses FY24–FY25; FY26 near breakeven.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [95, -59, -92, 5, 12], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic agrochemical prices and Chinese export supply set realisations for many molecules NACL manufactures. INR versus USD moves export competitiveness and import parity on intermediates. Coromandel International’s crop protection narrative and acquisition price anchor sentiment: the open offer at ₹76.70 versus CMP near ₹130 embeds a control premium. Indian monsoon and kharif rabi seasonality swing domestic formulation offtake. Regulatory registration timelines in export markets create delay risk and opportunity. Peer multiples for Coromandel, PI Industries, and Sharda Cropchem set sector context. Working capital swings can move quarterly PAT and cash from operations even when gross margins look stable for one quarter.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit was near ₹193 crore in FY23 on revenue near ₹2,116 crore, keeping OPM near 9%. FY24 and FY25 collapsed to near ₹17 crore and negative ₹62 crore operating profit respectively as revenue fell. FY26 operating profit recovered to ₹103 crore on ₹1,584 crore sales, implying OPM near 7%, but reported PAT near ₹5 crore shows interest, depreciation, and below-the-line items still absorb most of the operating line. EPS moved from ₹4.11 in FY23 to ₹0.20 in FY26 and TTM ₹0.53 per share. Book value per share near ₹29.2 implies the stock trades near 4.5× book on Screener, pricing integration hope more than normalized return on equity near 2.4%.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: OP recovered before PAT normalized.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [17, -62, 103], color: "#1e3a5f" },
      { name: "PAT", values: [-59, -92, 5], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was negative near ₹104 crore in FY26 on Screener despite operating profit near ₹103 crore, after FY25 reported a large ₹469 crore inflow tied to working capital release. FY24 CFO was only about ₹50 crore. Until CFO sustainably exceeds ₹80 crore while PAT exceeds ₹50 crore annually, headline margin recovery can overstate distributable cash. Debtor days near 106 and inventory days near 96 in FY26 keep the cash conversion cycle near 105 days. Q1 FY27 profit does not by itself prove full-year cash conversion; watch Sep and Dec 2026 quarters for receivable build ahead of export shipments.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 outflow despite OP recovery.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [50, 469, -104], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Cut from FY24 peak; still material.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [724, 789, 399, 312], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹312 crore at March 2026 are down from ₹789 crore in FY24 but interest near ₹46 crore in FY26 still pressures profit when OPM slips toward mid single digits. Screener flags low interest coverage when operating profit weakens. A repeat of Mar 2025 style quarters with OPM near negative thirty-seven percent would quickly erode the FY26 recovery. Integration costs or related-party pricing with Coromandel are not fully visible in quarterly filings we used. Fixed assets near ₹459 crore plus capital work in progress mean depreciation rises even if utilisation lags. Solvency risk is moderate given reduced debt, but earnings risk remains high at current multiples.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Coromandel International as promoter after August 2025 aligns NACL with Murugappa group crop protection strategy, including backward integration and registration depth cited in Coromandel’s own acquisition rationale. Legacy NACL management continues operations while integration planning proceeds. Dividend payout was zero in FY25 and FY26 after loss years. Public shareholders who did not tender into the ₹76.70 open offer remain exposed to execution and pricing of synergies. Incentive alignment improves if Coromandel quantifies cost and revenue synergy targets and reports segment performance post consolidation.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised debt reduction and a return toward profitability through FY26 after the FY25 loss year. Borrowings fell sharply and operating profit turned positive, meeting part of the promise, but reported PAT near ₹5 crore and negative FY26 cash from operations fell short of a clean earnings and cash turnaround. Coromandel promised control and integration benefits; early Q1 FY27 margins improved but synergy rupees were not quantified on our curated call excerpts. Open offer acceptance was minimal because market price stayed far above ₹76.70, signalling retail holders expect higher strategic value than the offer implied.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Volume: domestic formulation through dealer counters and export technical restocking after FY25 destocking. Margin: plant utilisation at Srikakulam and Ethakota sustaining OPM above 7%. Integration: Coromandel procurement, registration transfers, and cross-sell through combined crop protection reach. Mix: international brand expansion in Asia and Africa. Balance sheet: further borrowings reduction and interest coverage above 3× on consolidated operating profit. These drivers are partly priced at 118× trailing earnings, so FY27 PAT must re-rate toward FY23 levels for CMP to align with base fundamentals.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Coromandel integration delivers faster procurement savings and formulation cross-sell than we model, lifting OPM toward 9% on revenue near ₹1,780 crore. Export registrations accelerate in Africa and South-East Asia. Generic prices firm while utilisation stays high through four strong quarters. Net cash from operations exceeds ₹150 crore and borrowings fall below ₹250 crore. FY27 PAT approaches ₹105 crore and the market applies a strategic 17× multiple toward our bull band near ₹76 per share, still below ₹130 unless earnings overshoot and multiple expands further.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another global agchem price downcycle compresses OPM toward 5% and revenue flat near ₹1,520 crore. FY26 style cash from operations outflow repeats despite positive operating profit. Interest coverage weakens if borrowings stall near ₹310 crore while PAT stays below ₹35 crore. Integration distractions slow export shipments. Mar 2025 quarter losses repeat in a weak rabi season. Equity could drift toward our bear case near ₹16 per share at 11× on ₹35 crore PAT, or toward book-led levels near ₹29 if control premium deflates.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a Coromandel-controlled crop protection platform only after earnings normalize (11× bear, 14× base, 17× bull), cross-checked against FY26 operating profit near ₹103 crore at 9× EV/EBITDA less net debt near ₹300 crore implying equity far below CMP on operating math alone. Bear FY27 PAT ₹35 crore implies about ₹16 per share (-88% vs ₹130 reference). Base PAT ₹65 crore implies about ₹39 (-70%). Bull PAT ₹105 crore implies about ₹76 (-41%). None of our scenarios reach the 15% upside hurdle to reference; CMP embeds control and synergy optionality beyond base earnings power.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: All scenarios below CMP; Avoid on base math.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [16, 39, 76, 130], color: "#1e3a5f" }],
  ),
  seriesChart(
    "EPS (₹ per share, reported)",
    "Conclusion: TTM ₹0.53; far below FY23 peak.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "EPS", values: [4.11, -2.55, -3.94, 0.2, 0.53], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, OPM, PAT, and cash from operations on BSE/NSE results. Coromandel consolidation filings and related-party disclosures. Debtor and inventory days each quarter on Screener. Borrowings and interest versus operating profit. Any quantified synergy targets on concalls. Export registration wins in Africa and South-East Asia. Generic price indices versus management realisation remarks. Open market purchases by Coromandel above offer price. FY27 full-year PAT bridge versus Q1 FY27 annualised run-rate.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Avoid at ₹130 reference. Base-case target near ₹39 per share implies about 70% downside versus reference on FY27 PAT ₹65 crore at 14×, far from the 15% upside rule for Buy. Upgrade toward Neutral if two consecutive quarters show consolidated PAT above ₹18 crore with OPM above 8%, net CFO positive ₹40 crore combined, and borrowings below ₹280 crore. Upgrade toward Buy only if FY27 PAT run-rate exceeds ₹105 crore with documented Coromandel revenue synergies and base-case target clears ₹150 (+15% vs reference). Downgrade toward deeper Avoid if OPM falls below 4% for two quarters while CFO stays negative and borrowings rise above ₹400 crore.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact Coromandel synergy rupees and timeline are not quantified in free sources. Segment revenue for technicals, formulations, and contract manufacturing is not broken out quarterly. Related-party pricing with Coromandel entities needs FY26 annual report note verification. R&D spend as percent of sales is login-gated on Screener insights. Export customer concentration by country requires annual report disclosure. Update bear, base, and bull when post-merger integration KPIs and audited cash flow statements publish.",
  },
];
