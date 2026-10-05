import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const chambalMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Chambal Fertilisers and Chemicals Ltd (NSE: CHAMBLFERT, BSE: 500085) is India’s largest single-location private sector urea manufacturer, controlled by the Zuari group with about 61% promoter holding as of mid 2026. The stock is in Nifty 500 and related mid-cap indices. At a reference price of ₹399 on 1 October 2026, market capitalisation is about ₹16,000 crore on roughly 40.1 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 8.3× on FY25 earnings, with book value near ₹260 per share and return on equity near 20%. The company exited its software business in FY21; today’s story is urea at Gadepan (Rajasthan), traded phosphatic and potassic fertilisers, crop protection chemicals, and an upcoming technical ammonium nitrate (TAN) plant.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Chambal runs three urea plants at Gadepan with nameplate capacity near 3.46 million tonnes per year. Urea is sold under the UTTAM brand largely to farmers in Rajasthan, Madhya Pradesh, and Uttar Pradesh through a dealer network. Pricing is not free market: the Department of Fertilizers sets farm-gate prices and pays nutrient subsidy, while gas cost is pooled domestically. The company therefore earns a conversion margin tied to energy efficiency (Gcal per tonne), plant uptime, and timely subsidy settlement. Beyond urea, Chambal trades DAP, TSP, MOP, and NPK grades, markets crop protection and specialty nutrients (CPC-SN), and earns equity income from Indo Maroc Phosphore (IMACID) in Morocco. Revenue can rise on traded fertiliser tonnage even when urea nameplate is flat, which changes mix and working capital.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1985 as a Zuari-backed project, Chambal expanded Gadepan in phases to three world-scale ammonia-urea trains. FY23 was an outlier year when consolidated sales exceeded ₹27,700 crore as global nutrient prices and domestic urea realisations spiked; PAT still fell to ₹1,034 crore as costs ran hot. FY24 and FY25 normalised: FY25 revenue was ₹16,646 crore (down 7% YoY) but operating margin recovered to about 15% and consolidated PAT rose 24% to ₹1,649 crore because urea plants ran harder and CPC-SN scaled. The share price fell about 23% over the year to October 2026 even as earnings improved, which is the setup for this memo: quality operations at a cyclical-sector multiple near the 52-week low.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Revenue reverted from the FY23 spike; FY25 was stable with TTM picking up on P&K trading.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [
      {
        name: "Sales",
        values: [12719, 16069, 27773, 17966, 16646, 20123],
        color: "#1e3a5f",
      },
    ],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Farmers pay subsidised retail prices, but Chambal’s cash comes from dealers and government subsidy mechanisms. Geographic concentration is high by design: Gadepan is one site, so any shutdown hits national supply only modestly but hits Chambal earnings directly. Promoter holding above 60% leaves a liquid public float near 15 to 18%; foreign portfolio investors were about 15% in early 2026. Customer concentration at farm level is fragmented; supplier concentration for gas is policy-driven through the pooled mechanism. IMACID gives partial backward integration into phosphoric acid but does not remove geopolitical risk on imported P&K.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Urea remains the volume anchor: FY25 production was 34.62 lakh MT and sales 34.71 lakh MT per the annual report. Traded P&K was muted in FY25 when DAP policy discouraged imports, but management guided a step-up toward 11 lakh MT in FY26 on the November 2025 call, roughly double the prior year’s traded tonnage. CPC-SN revenue reached ₹926 crore in FY25 with ₹247 crore contribution, growing faster than urea. Seeds and biologicals are small but strategic: FY25 introduced hybrid seed varieties and bio-nano phosphorus with TERI. TAN will add an industrial nitrogen product line from 2026 onward if commissioning holds.",
  },
  seriesChart(
    "Urea production vs sales (lakh MT, annual report)",
    "Conclusion: FY25 sold slightly above production; inventory stayed stable per management.",
    ["FY24", "FY25"],
    [
      { name: "Production", values: [33.83, 34.62], color: "#1e3a5f" },
      { name: "Sales", values: [32.56, 34.71], color: "#c27803" },
    ],
  ),
  seriesChart(
    "CPC-SN revenue (₹ crore, management disclosures)",
    "Conclusion: Agrochemicals mix is becoming a meaningful second engine beside urea.",
    ["FY24", "FY25", "Q2 FY26"],
    [{ name: "Revenue", values: [760, 926, 374], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Domestic gas price and pooling rules set the floor on urea conversion margin. Department of Fertilizers subsidy rates and settlement speed drive working capital and other income volatility. Global DAP and phosphoric acid prices move traded P&K spreads; management flagged DAP moving from about $650 to $850 per ton into H2 FY26 on the November 2025 call. Plant reliability matters disproportionately because there is only one complex: FY25 had a 36-day Gadepan-III shutdown and a 14-day Gadepan-I boiler outage, and Q2 FY26 had an unscheduled Gadepan-III stoppage. Policy shifts on import parity for DAP and NPK grades can swing revenue faster than urea nameplate.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit troughed in FY23 at ₹1,822 crore on 7% OPM when revenue was artificially high. FY25 operating profit was ₹2,501 crore on 15% OPM despite lower sales, showing margin recovery on cost and mix. Consolidated PAT followed: ₹1,276 crore in FY24, ₹1,649 crore in FY25, and TTM near ₹1,928 crore by September 2025 on Screener as Q2 FY26 added strength. Interest expense collapsed from ₹320 crore in FY23 to ₹48 crore in FY25 as borrowings fell to ₹99 crore, so urea downcycles no longer carry the same balance-sheet drag as in the 2010s. Other income remains material but smaller than the FY23 urea price spike era.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin recovery in FY24-FY25 is the core earnings story, not revenue growth.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [{ name: "OPM %", values: [19, 14, 7, 11, 15, 14], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: PAT re-accelerated after FY23 trough; TTM sits above FY25 full year.",
    ["FY21", "FY22", "FY23", "FY24", "FY25", "TTM"],
    [{ name: "PAT", values: [1748, 1566, 1034, 1276, 1649, 1928], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹3,327 crore in FY24 but ₹1,394 crore in FY25 as working capital absorbed subsidy-linked flows; Screener shows debtor days rising toward 36 by March 2026. That is not yet a red flag because subsidy receipts were described as timely on both the May and November 2025 calls, with subsidy outstanding only ₹265 crore at March 2025. Free cash flow remained positive in FY25 (₹824 crore) after capex excluding the large TAN project. When P&K trading doubles, inventory and receivable days can rise even with good policy support, so we watch H2 FY26 CFO after the revenue surge in Q2.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO dipped in FY25; must be monitored as P&K volumes scale.",
    ["FY23", "FY24", "FY25"],
    [{ name: "CFO", values: [3239, 3327, 1394], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Chambal is not balance-sheet fragile today: borrowings were ₹99 crore at March 2025 versus ₹3,358 crore in FY23. The risk is forward-looking. TAN capex was ₹1,052 crore spent by September 2025 with about ₹1,200 crore planned for FY26 including regular plant renewal, mostly funded from internal accruals per management. Screener shows borrowings back above ₹1,000 crore by March 2026, likely tied to TAN and working capital; we lack a published bridge in sources used. A prolonged gas price spike without tariff adjustment, or a subsidy payment delay at national level, could force debt higher quickly because urea working capital is large. IMACID is an asset, not a liability, but foreign JV cash repatriation timing adds noise to consolidated cash.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Deleveraging through FY25; re-borrowing for TAN and WC needs tracking.",
    ["Mar FY23", "Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [3358, 1874, 99, 1068], color: "#b91c1c" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Managing Director Abhay Baijal leads operations with a long-tenured manufacturing and finance bench (CFO Anuj Jain, manufacturing head Narinder Goyal). Promoter Zuari Agro Chemicals retains control and has used buybacks in prior years when the stock was cheaper versus book. Management incentives emphasise plant energy metrics, subsidy compliance, and diversification into CPC-SN and TAN, which align with minority shareholders when capital is reinvested at high teens ROCE (27% in FY25 on Screener). The main misalignment risk is pursuing traded volume for market share when global DAP prices compress dealer margins.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 promises on urea volume and CPC-SN growth were met or beaten despite shutdowns. TAN spend progressed but revenue is still pending commissioning targeted for January 2026. P&K import revival was cautious in FY25 (muted DAP trading) but FY26 guidance stepped up sharply on the November 2025 call. IMACID capacity expansion to 7 lakh MT phosphoric acid remains a 2026 to 2027 milestone. Dividend payout near 24% of PAT was maintained, supporting income investors at a 2.75% yield.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Debottlenecking and energy efficiency projects can add urea tonnes without a greenfield plant; management cited almost 0.8 lakh MT incremental annual capacity between FY24 and FY25 on the May 2025 call. TAN adds a new margin pool if statutory approvals and offtake hold. CPC-SN launches (weedicides, biologicals, nematicides) deepen wallet share per acre in Chambal’s dealer territories. P&K trading at 11 lakh MT multiplies revenue lines though not dollar-for-dollar like urea EBITDA. IMACID acid expansion supports consolidated PAT in the bull case. None of this requires FY23-style global price spikes, which keeps our base case grounded.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Gadepan runs at 100% plus debottlenecked tonnes with no unscheduled shutdowns. TAN ramps to 80 to 90% utilisation within two quarters of January 2026 start. IMACID earnings jump as acid capacity rises and Morocco operations stay stable. CPC-SN grows 20% annually with contribution margin above FY25 levels. Gas prices stay benign as in FY25 MD&A. In that world consolidated FY27 PAT could approach ₹2,250 crore, supporting our bull scenario near ₹617 per share on 11× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Repeated Gadepan-III outages like Q2 FY26 erase volume that cannot be recovered in a fixed subsidy year. DAP at $850 plus compresses P&K trading spreads after management doubled volume targets. TAN delays past FY27 leave capex stranded in CWIP without cash earnings. Gas pooling costs rise faster than retention price adjustments. Working capital stress if subsidy disbursement slows nationally. Bear FY27 PAT near ₹1,350 crore maps to about ₹269 per share at 8×, roughly 33% below the reference price.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value forward consolidated PAT with price-to-earnings multiples suited to a low-leverage urea leader with agchem optionality (8× bear, 10× base, 11× bull), cross-checked against FY25 EBITDA near ₹2,838 crore standalone where 7× EV/EBITDA supports equity value well above debt. Bear FY27 PAT ₹1,350 crore implies about ₹269 per share (-33% vs ₹399). Base PAT ₹1,900 crore implies about ₹474 (+19%). Bull PAT ₹2,250 crore implies about ₹617 (+55%). Base case clears the 15% upside hurdle versus reference, unlike distressed fertilizer names trading on hope of balance-sheet events.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base and bull offer positive upside; bear reflects operational and spread stress only, not insolvency.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [
      {
        name: "Target / CMP",
        values: [269, 474, 617, 399],
        color: "#1e3a5f",
      },
    ],
  ),
  seriesChart(
    "Interest expense (₹ crore, consolidated)",
    "Conclusion: Interest is no longer the earnings governor; gas and uptime are.",
    ["FY23", "FY24", "FY25", "TTM"],
    [{ name: "Interest", values: [320, 173, 48, 21], color: "#b91c1c" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: High teens ROCE supports reinvestment in TAN and plant reliability.",
    ["FY24", "FY25", "Mar FY26"],
    [{ name: "ROCE", values: [20, 27, 25], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "January 2026 TAN commissioning confirmation and first-quarter TAN ASP versus cost. Monthly urea production after Gadepan-III maintenance. Quarterly P&K traded tonnage and implied spread versus global DAP. CPC-SN contribution margin in investor decks. IMACID capacity ramp toward December 2026. Department of Fertilizers gas pooling notifications. Subsidy outstanding in balance sheet notes. Any buyback or dividend change given promoter ownership. Q3 and Q4 FY26 CFO after working capital build.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹399 reference. Base-case target near ₹474 per share offers about 19% upside with confirming plant uptime, CPC-SN growth, and manageable debt as TAN completes. Upgrade toward bull if TAN utilisation exceeds 80% within two quarters of start and consolidated PAT run-rate exceeds ₹500 crore per quarter with stable CFO. Downgrade toward Neutral if borrowings exceed ₹2,500 crore without TAN revenue, or if two consecutive quarters show urea production below 8 lakh MT with PAT below ₹350 crore on consolidated basis. Downgrade toward Avoid if subsidy settlement delays push debtor days above 60 with negative free cash flow.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We do not have segment-level EBITDA for urea versus traded P&K in the primary filings used; investor presentation gives revenue splits but not full margin bridges. Exact Gcal per tonne by plant for FY25 is not quoted in sources reviewed. Borrowings bridge from ₹99 crore to ₹1,068 crore by March 2026 on Screener is not reconciled to TAN debt versus working capital lines in notes. IMACID equity pickup in consolidated PAT is not broken out quarterly in our dossier. Dealer inventory days for urea at channel level are management assertions, not independently verified. TAN selling price and offtake contracts were not disclosed on calls reviewed. These gaps should be closed from exchange filings before tightening bear or bull PAT ranges.",
  },
];
