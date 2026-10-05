import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const paradeepMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Paradeep Phosphates Ltd (NSE: PARADEEP, BSE: 543530) is India's second-largest private sector phosphatic fertiliser company, promoted through Zuari Maroc Phosphates by Zuari Agro Chemicals and Morocco's OCP Group with about 57.9% promoter holding as of June 2026 on Screener. The stock sits in Nifty Smallcap 250 and related mid-small indices. At a reference price of ₹151 on 1 October 2026, market capitalisation is about ₹15,704 crore on roughly 103.8 crore shares (face value ₹10). Trailing price-to-earnings is near 14.4× on TTM earnings, with book value about ₹65.3 per share and return on equity near 16.2%. The quote sits below the 52-week high of ₹202 and above the ₹99.7 low, reflecting integration capex, higher borrowings, and trailing earnings inflated by the Jun 2026 quarter rather than a clean mid-cycle reset.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Paradeep manufactures and trades DAP, multiple NPK grades, Zypmite, and smaller urea tonnage at Paradeep, Odisha and Zuarinagar, Goa, alongside industrial co-products such as phospho-gypsum and hydrofluorosilicic acid. Farmers and dealers pay subsidised retail prices on P&K fertilisers while the company receives reimbursement from the Department of Fertilizers on nutrient-based subsidy norms. Industrial buyers pay market-linked prices on acid and sulphur derivatives. Revenue therefore mixes policy-linked phosphatic economics with integration benefits when captive phosphoric and sulphuric acid replace imports. Payment cycles tie to subsidy receivables and seasonal inventory, which showed up in negative cash from operations in FY26 despite record operating profit on Screener.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1981 and listed in May 2022 after GOI exited its residual stake, Paradeep scaled from a single Odisha complex to 3.0 MMTPA finished capacity after acquiring Zuari's Goa plant in June 2022. FY24 was a transition year with PAT about ₹100 crore on revenue ₹11,575 crore and OPM near 6% as raw material volatility lingered. FY25 inflected with PAT ₹662 crore on revenue ₹16,959 crore and OPM 9% as volumes crossed 3 MMTPA and phosphoric acid debottlenecking cut import reliance. FY26 accelerated to PAT ₹996 crore on revenue ₹21,826 crore with OPM 10% and TTM PAT ₹1,072 crore aided by Jun 2026 PAT ₹393 crore but offset by Mar 2026 PAT ₹156 crore. Borrowings rose to ₹6,906 crore by March 2026 while CWIP fell to ₹424 crore as projects neared commissioning.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line doubled in three years on volume and integration.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [11575, 16959, 21826, 23447], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers include millions of farmers reached through about 70,000 retail points across 15 states under Jai Kisaan and Navratna brands per the FY25 annual report, plus industrial buyers for acid and gypsum. No single private buyer dominates disclosure, but OCP and Zuari control at the promoter level aligns raw material strategy with manufacturing and distribution. FII holding fell toward 5.1% in June 2026 from higher post-listing peaks while DII holding near 18% and public float near 19% provide liquidity. Concentration risk is policy and commodity: delayed P&K reimbursement affects the entire fertiliser division simultaneously. OCP linkage diversifies rock supply but does not remove global sulphur and ammonia volatility.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Screener and company decks describe phosphatic fertilisers as the core, with DAP and NPK grades driving volume and urea a smaller slice of the 3.0 MMTPA footprint. FY26 recovery came with OPM rising from 9% in FY25 to 10% consolidated, but quarterly OPM ranged from 8% in Dec 2025 to 12% in Jun 2026. Premium Screener insights hide exact DAP and NPK tonnage splits without login. Mix shift toward higher captive acid should lift margin when sulphuric and phosphoric projects commission; mix toward traded raw materials when imports spike compresses ROCE. Goa ammonia energy projects add urea cost flexibility but remain smaller than phosphatic revenue in management narrative.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Interest expense rose with borrowings, keeping PAT well below operating profit.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [672, 1574, 2208, 2292], color: "#1e3a5f" },
      { name: "PAT", values: [100, 662, 996, 1072], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global phosphate rock, phosphoric acid, sulphur, and ammonia prices feed Paradeep's import bill even with OCP contracts. Department of Fertilizers decisions on nutrient-based subsidy and reimbursement timelines dominate domestic cash conversion. Monsoon and sowing patterns drive DAP and NPK offtake across eastern and southern clusters. Interest rates matter because borrowings reached ₹6,906 crore Mar FY26 with TTM interest near ₹555 crore. Index flows from smallcap ETFs and mutual fund rebalancing moved the register as FII ownership normalised after listing. Mangalore Chemicals merger headlines can re-rate the name on capacity synergy even before closure.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin rose from 6% in FY24 to 10% in FY26 and TTM on Screener. ROCE recovered from 7% in FY24 to 15% in FY26. Five-year profit CAGR near 35% on Screener pros reflects the FY24 trough and FY25 to FY26 rebound rather than a smooth compounding path. ROE averaged about 12.3% over three years on Screener cons, below the 16.2% last year spike, so the market applies a leverage and working-capital discount despite 14.4× trailing P/E. Investors should normalise trailing earnings using FY27 PAT closer to ₹1,100 crore rather than extrapolating Jun 2026 alone.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin expanded with integration; quarterly dispersion remains wide.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [6, 9, 10, 10], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was positive ₹1,437 crore in FY24 and ₹1,648 crore in FY25, then turned negative ₹1,012 crore in FY26 on Screener despite ₹2,208 crore operating profit. CFO to operating profit was negative 46% in FY26, a sharp miss versus FY25 at 105%. Free cash flow was negative ₹1,878 crore in FY26 after investing outflows near ₹557 crore. Subsidy receivable timing and inventory build explain swings more than accounting PAT quality alone. Dividend payout near 16% in FY26 signals board confidence, but sustained CFO above ₹800 crore is needed to fund integration capex and borrowings without further leverage.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 reverted to negative CFO after two strong years.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [1437, 1648, -1012], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹6,906 crore at March 2026 are the primary risk vector versus investments of ₹25 crore. Net debt near ₹6,880 crore with rising interest can compress PAT toward our bear band even if operating profit holds. A simultaneous subsidy delay and phosphoric acid price spike would cut FY27 PAT without threatening solvency given promoter support and listed access to debt markets. Equity dilution is unlikely near-term, but dividend cuts and capex slowdown would precede distress. Negative free cash flow at mid-teens ROCE is a warning on quality of earnings, not on going concern given OCP and Zuari backing.",
  },
  seriesChart(
    "Borrowings vs investments (₹ crore, Mar FY26)",
    "Conclusion: Leverage rose with integration; net debt drives interest risk.",
    ["Borrowings", "Investments"],
    [{ name: "Mar FY26", values: [6906, 25], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under Zuari and OCP oversight with stable promoter holding above 56%. Incentives emphasise volume growth, backward integration, energy efficiency, and market share in phosphatic fertilisers visible in FY25 MD&A and results decks. That aligns with growth-oriented holders but can encourage inventory and capex when reimbursement lags. Independent directors and audit committees follow listed company norms. Management communication on acid commissioning and working capital is explicit in curated call excerpts, which helps investors track CFO risk rather than treating PAT as fully cash-backed.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised phosphoric acid expansion toward 700 KTPA, sulphuric acid and power commissioning, 3 MMTPA volume scale, Mangalore Chemicals merger closure, improved cash conversion, and sustained dividends. Acid production rose toward 486 KTPA in FY25 and volumes crossed 3 MMTPA. Sulphuric acid and merger timelines remain partially delivered. Cash conversion promises missed in FY26 with negative CFO. Dividends continued at modest yield. Overall, delivery is mixed: operations and margins recovered, balance sheet levered, subsidy timing still open.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: higher DAP and NPK utilisation when monsoon and sowing support offtake across Odisha, Goa, and traded markets. Margin: sulphuric and phosphoric integration if 700 KTPA acid and 1.9 MMTPA sulphuric projects cut import costs. Raw materials: OCP rock contracts and berth access at Paradeep port reduce logistics risk. Balance sheet: CFO recovery as receivables clear could stabilise net borrowings. Corporate: MCF merger could lift capacity toward 3.7 MMTPA with southern logistics synergy. These drivers are partially priced at 14.4× TTM earnings, so FY27 must show PAT near ₹1,100 crore with OPM above 9% and positive CFO to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Sulphuric acid and phosphoric projects commission on schedule, cutting imported acid spend materially in FY27. Department of Fertilizers clears P&K subsidy receivables faster, turning CFO positive above ₹1,200 crore. Mangalore Chemicals merger closes with cost synergies on logistics and urea-ammonia chains. Global DAP prices stay firm while captive acid shields spreads. Borrowings fall below ₹6,000 crore as capex peaks. FY27 PAT could approach ₹1,320 crore and support our bull band near ₹197 per share at 15.5× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Phosphoric acid and sulphur prices spike while integration slips, compressing OPM toward FY24 levels. Subsidy reimbursement stays delayed through FY27 while Paradeep carries working capital near peak season inventory. Interest on ₹7,000 crore borrowings rises with refi costs. Jun 2026 style PAT does not repeat and Sep 2025 strength normalises lower. CFO stays negative while capex continues, forcing further debt. FY27 PAT could fall toward ₹780 crore and compress equity toward our bear case near ₹83 per share at 11× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a levered integrated phosphatic name (11× bear, 13.5× base, 15.5× bull), cross-checked with TTM operating profit near ₹2,292 crore at 7× EV/EBITDA less net debt near ₹6,880 crore implying about ₹89 per share if mid-cycle margins persist without CFO recovery. Bear FY27 PAT ₹780 crore implies about ₹83 per share (-45% vs ₹151 reference). Base PAT ₹1,100 crore implies about ₹143 (-5.3%). Bull PAT ₹1,320 crore implies about ₹197 (+30%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds trailing Jun 2026 earnings unless integration and CFO recover together.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs integration and cash conversion together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [83, 143, 197, 151], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Jun 2026 quarter drove trailing optimism; Mar 2026 normalized lower.",
    ["Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "PAT", values: [342, 182, 156, 393], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Interest expense (₹ crore, TTM vs FY26)",
    "Conclusion: Interest rose with borrowings, capping PAT leverage to operating profit.",
    ["FY25", "FY26", "TTM Jun-26"],
    [{ name: "Interest", values: [443, 528, 555], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings rebounded from FY24 trough; FY26 marked step change.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [100, 662, 996, 1072], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Commissioning updates on sulphuric acid toward 1.9 MMTPA and phosphoric acid toward 700 KTPA. Department of Fertilizers P&K subsidy settlement and receivable ageing in investor presentations. Quarterly DAP and NPK volume commentary when exchange transcripts publish. Borrowings and CWIP balances each quarter. Mangalore Chemicals merger closure filings on BSE and NSE. OCP rock contract pricing versus spot acid imports. Peer phosphatic re-rating if ROCE stays above 15% with positive CFO for two consecutive quarters.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹151 reference. Base-case target near ₹143 offers about 5.3% downside versus reference, below our 15% Buy hurdle, while integration optionality and negative FY26 CFO keep the name off Avoid unless spreads and subsidy both fail together. Upgrade to Buy if two consecutive quarters show consolidated OPM above 10% with CFO above ₹300 crore and documented P&K reimbursement catch-up, lifting base PAT toward ₹1,180 crore and target above ₹174 (+15%). Downgrade to Avoid if TTM PAT falls below ₹850 crore with OPM under 7%, borrowings rise above ₹7,500 crore, and CFO stays negative while interest exceeds ₹600 crore TTM.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for phosphatic versus industrial co-products for FY26 are not in the free sources used. DAP and NPK production volumes on Screener require premium login. Exact FY27 capex phasing by sulphuric and phosphoric project is not modeled line by line. Subsidy receivable ageing needs note-level reconciliation. Mangalore Chemicals merger closing date and synergy quantification are not in our base PAT. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
