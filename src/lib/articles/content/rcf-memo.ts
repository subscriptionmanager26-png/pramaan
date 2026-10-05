import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const rcfMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Rashtriya Chemicals & Fertilizers Ltd (NSE: RCF, BSE: 524230) is a Mumbai-headquartered central public sector undertaking with about 75% promoter holding from the Government of India as of June 2026 on Screener. The stock is in BSE CPSE, Nifty Microcap 250, and Nifty Smallcap 500. At a reference price of ₹107 on 1 October 2026, market capitalisation is about ₹5,892 crore on roughly 55.2 crore shares (face value ₹10). Trailing price-to-earnings is near 14.2× on TTM earnings, with book value about ₹93 per share and return on equity near 7.8%. The quote sits below the 52-week high of ₹157 and near the ₹106 low, reflecting PSU discount, higher borrowings after capex, and trailing earnings inflated by the Mar 2026 quarter rather than a clean earnings reset.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "RCF manufactures urea and NPK Suphala fertilisers at Trombay and Thal, alongside industrial chemicals including methanol and ammonia-linked products for domestic industrial buyers. Farmers and dealers pay subsidised retail prices on fertilisers while the company receives reimbursement from the Department of Fertilizers on fixed costs and energy norms. Industrial customers pay market-linked prices subject to feedstock volatility. Revenue therefore mixes policy-linked fertiliser economics with cyclical industrial spreads. Payment cycles tie to subsidy receivables and dealer credit, which showed up in debtor days near 93 and volatile cash from operations on Screener for Mar FY26.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "RCF expanded from the Trombay complex into Thal to secure west-coast urea capacity for India's green revolution legacy. FY22 was a peak profit year with PAT about ₹702 crore on revenue ₹12,812 crore and OPM near 8% on Screener as commodity realisations surged. FY23 remained strong at PAT ₹966 crore before FY24 normalised sharply to PAT ₹225 crore as OPM fell to 3%. FY25 stabilised at PAT ₹242 crore on revenue ₹16,934 crore. FY26 rebounded to PAT ₹427 crore with OPM 5% and TTM PAT ₹447 crore aided by Mar 2026 PAT ₹187 crore but offset by Jun 2026 PAT ₹74 crore. Borrowings rose to ₹4,128 crore by March 2026 while CWIP reached ₹810 crore and investments ₹1,380 crore.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line re-accelerated TTM after FY25 plateau.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [16981, 16934, 18480, 18695], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers include millions of farmers reached through a large dealer network, industrial buyers for methanol and allied chemicals, and government entities administering fertiliser subsidy. No single private buyer dominates disclosure, but GOI promoter control at 75% aligns strategy with fertiliser security objectives. FII holding stayed near 2.4% in June 2026 while public float near 22% provides liquidity. Concentration risk is policy: delayed reimbursement affects the entire fertiliser division simultaneously. Industrial division diversification helps but remains smaller than fertiliser revenue in management narrative.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Screener describes two divisions: industrial chemicals and fertilisers. Urea and Suphala anchor volume; industrial products add margin when methanol and ammonia spreads widen. FY26 recovery came with OPM rising from 4% in FY25 to 5% consolidated, but quarterly OPM ranged from 4% in Sep 2025 to 6% in Mar 2026. Premium Screener insights hide exact production volumes for industrial chemicals and urea without login. Mix shift toward industrial helps when spreads tighten; mix toward urea without reimbursement compresses ROCE. Traded volumes are less prominent in RCF narrative than at peer traders.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Interest expense rose with borrowings, keeping PAT below operating profit.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [520, 681, 956, 1000], color: "#1e3a5f" },
      { name: "PAT", values: [225, 242, 427, 447], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Department of Fertilizers decisions on urea fixed-cost and energy reimbursement dominate fertiliser profitability. Natural gas and power tariffs feed Trombay and Thal energy consumption metrics. Monsoon and sowing patterns drive urea offtake. Industrial chemical prices move methanol and ammonia spreads. Interest rates matter because borrowings reached ₹4,128 crore Mar FY26 with TTM interest near ₹308 crore. CPSE index re-rating and divestment headlines can move PSU multiples independently of quarterly PAT. Global urea and ammonia benchmarks indirectly affect sentiment even when domestic prices are regulated.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin fell from 8% in FY22 to 3% in FY24 before recovering to 5% in FY26 and TTM on Screener. ROCE fell from 21% in FY23 to 6% in FY24 and recovered to 10% in FY26. Three-year profit CAGR is negative on headline metrics because FY23 was an exceptional base. ROE averaged about 5.7% over three years on Screener pros, below cost of equity, so the market applies a PSU and leverage discount despite the Mar 2026 earnings spike. Investors should normalise trailing P/E near 14.2× using FY27 PAT closer to ₹500 crore rather than extrapolating Mar 2026 alone.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin mean-reverted after FY23 peak; quarterly dispersion remains wide.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [8, 3, 5, 5], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was negative ₹422 crore in FY24, then spiked to ₹2,364 crore in FY25, then turned negative ₹471 crore again in FY26 on Screener despite ₹956 crore operating profit. CFO to operating profit was negative 38% in FY26, a sharp miss versus FY25 outlier. Free cash flow was negative ₹1,545 crore in FY26 after investing outflows near ₹1,299 crore. Subsidy receivable timing and capex explain swings more than accounting PAT quality alone. Dividend payout near 30% in FY26 signals board confidence, but sustained CFO above ₹600 crore is needed to fund dividends and CWIP without further borrowings.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY25 was an outlier; FY26 reverted to negative CFO.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [-422, 2364, -471], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹4,128 crore at March 2026 are the primary risk vector versus investments of ₹1,380 crore. Net debt near ₹2,750 crore with rising interest can compress PAT toward our bear band even if operating profit holds. A simultaneous reimbursement delay and industrial spread collapse would cut FY27 PAT without threatening solvency given PSU backing. Equity dilution is unlikely near-term, but dividend cuts and capex slowdown would precede distress. Negative free cash flow at mid-single-digit ROCE is a warning on quality of earnings, not on going concern given promoter support.",
  },
  seriesChart(
    "Borrowings vs investments (₹ crore, Mar FY26)",
    "Conclusion: Leverage rose faster than treasury; net debt drives interest risk.",
    ["Borrowings", "Investments"],
    [{ name: "Mar FY26", values: [4128, 1380], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under GOI oversight with stable 75% promoter holding. Incentives emphasise fertiliser supply security, plant uptime, energy efficiency, and dividend continuity visible in payout ratios near 30%. That aligns with income-oriented and CPSE index holders but can encourage production when reimbursement lags. Independent directors and audit committees follow listed company norms. Management communication on subsidy receivables and energy projects is explicit in curated call excerpts, which helps investors track CFO risk rather than treating PAT as fully cash-backed.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised energy efficiency at Trombay and Thal, stable fertiliser throughput, industrial division stabilisation, capex without equity dilution, sustained dividends, and improved cash conversion. OPM recovered partially into FY26 but remains below FY22. Debt rose with CWIP as promised funding mix included borrowings. Dividends continued. Cash conversion promises missed in FY26 with negative CFO. Overall, delivery is mixed: operations recovered, balance sheet levered, subsidy timing still open.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: higher urea and Suphala utilisation when monsoon and sowing support offtake. Margin: reimbursement catch-up and energy project benefits if Gcal/MT falls. Industrial: methanol and ammonia spreads if feedstock costs ease. Balance sheet: CFO recovery as receivables clear could reduce net borrowings. Capex: CWIP commissioning near ₹810 crore can lift depreciation but improve energy economics. These drivers are partially priced at 14.2× TTM earnings, so FY27 must show PAT near ₹500 crore with OPM above 5.5% and positive CFO to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Department of Fertilizers clears overdue urea energy and fixed-cost claims, lifting fertiliser segment profit without volume change. Trombay and Thal energy projects cut consumption metrics materially in FY27. Industrial chemicals hold Mar 2026 margin band for multiple quarters. Borrowings fall below ₹3,500 crore as CFO exceeds ₹900 crore. Interest expense flatlines despite higher base rates. FY27 PAT could approach ₹620 crore and support our bull band near ₹157 per share at 14× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Reimbursement stays delayed through FY27 while RCF carries working capital. Industrial spreads compress on imported ammonia volatility. Interest on ₹4,100 crore borrowings rises with refi costs. Mar 2026 style other income does not repeat and Jun 2026 weak quarters persist. CFO stays negative while capex continues, forcing further debt. FY27 PAT could fall toward ₹320 crore and compress equity toward our bear case near ₹58 per share at 10× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a levered PSU fertiliser and industrial name (10× bear, 12.5× base, 14× bull), cross-checked with TTM operating profit near ₹1,000 crore at 6.5× EV/EBITDA less net debt near ₹2,750 crore implying about ₹122 per share if mid-cycle margins persist. Bear FY27 PAT ₹320 crore implies about ₹58 per share (-46% vs ₹107 reference). Base PAT ₹500 crore implies about ₹113 (+5.6%). Bull PAT ₹620 crore implies about ₹157 (+47%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds trailing Mar 2026 earnings unless reimbursement and CFO recover together.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs policy and cash conversion together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [58, 113, 157, 107], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Mar 2026 quarter drove trailing optimism; Jun 2026 normalized lower.",
    ["Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "PAT", values: [105, 81, 187, 74], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Interest expense (₹ crore, TTM vs FY26)",
    "Conclusion: Interest rose with borrowings, capping PAT leverage to operating profit.",
    ["FY25", "FY26", "TTM Jun-26"],
    [{ name: "Interest", values: [259, 295, 308], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings remain cyclical versus FY23 peak; FY26 marked partial recovery.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [702, 225, 427, 447], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Department of Fertilizers notifications on urea fixed-cost and energy norms. Monthly subsidy receipt and receivable disclosures in investor presentations. Trombay and Thal energy consumption metrics in annual report. Borrowings and CWIP balances each quarter. BSE/NSE concall transcripts for verbatim volume guidance. Industrial chemical spread commentary in results decks. CPSE index inclusion or divestment headlines. Peer PSU fertiliser re-rating if ROCE crosses 12% sustainably with positive CFO.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹107 reference. Base-case target near ₹113 offers about 5.6% upside, below our 15% Buy hurdle, while higher leverage and negative FY26 CFO keep the name off Avoid unless reimbursement and spreads both fail. Upgrade to Buy if two consecutive quarters show consolidated OPM above 6% with CFO above ₹200 crore and documented urea reimbursement catch-up, lifting base PAT toward ₹560 crore and target above ₹123 (+15%). Downgrade to Avoid if TTM PAT falls below ₹350 crore with OPM under 4%, borrowings rise above ₹4,500 crore, and CFO stays negative while interest exceeds ₹330 crore TTM.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for industrial versus fertilisers for FY26 are not in the free sources used. Urea and Suphala production volumes on Screener require premium login. Exact FY27 capex phasing by Trombay and Thal project is not modeled line by line. Subsidy receivable ageing needs note-level reconciliation. Industrial chemical margin per tonne is not separated in our operating view. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
