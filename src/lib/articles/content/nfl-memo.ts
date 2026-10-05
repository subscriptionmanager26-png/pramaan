import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const nflMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "National Fertilizers Ltd (NSE: NFL, BSE: 523630) is a Navratna central public sector undertaking with about 74.7% promoter holding from the Government of India as of June 2026 on Screener. The stock is in BSE CPSE, Nifty Microcap 250, and Nifty Smallcap 500. At a reference price of ₹63.8 on 1 October 2026, market capitalisation is about ₹3,132 crore on roughly 49.1 crore shares (face value ₹10). Trailing price-to-earnings is near 11.5× on TTM earnings, with book value about ₹58 per share and return on equity near 5.9%. The quote sits below the 52-week high of ₹98.4 and near the ₹62.8 low, reflecting CPSE discount, rising debtor days, and trailing earnings inflated by Mar and Dec 2025 quarters rather than a clean mid-cycle reset.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "NFL manufactures neem coated urea, bio-fertilizers, and allied industrial products at multiple plants, and trades imported and domestic fertilisers, compost, seeds, and other agro inputs. Farmers and dealers pay subsidised retail prices on urea while the company receives reimbursement from the Department of Fertilizers on fixed costs and energy norms. Traded P&K and compost add margin when import parity moves. Revenue therefore mixes policy-linked urea economics with trading volumes and smaller bio-industrial lines. Payment cycles tie to subsidy receivables, which showed up in debtor days rising to 92 and negative FY26 cash from operations on Screener.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "NFL grew from a green-revolution era urea producer into one of the largest CPSE fertiliser suppliers, with consolidated interests including Ramagundam Fertilizers and Chemicals Limited. FY23 was a peak profit year with PAT about ₹456 crore on revenue ₹29,587 crore and OPM near 3.6% on Screener as volumes surged. FY24 normalised to PAT ₹65 crore on revenue ₹23,556 crore with OPM 2.6%. FY25 stabilised at PAT ₹76 crore on revenue ₹19,798 crore per the BSE annual report turnover table. FY26 rebounded to PAT ₹170 crore with OPM 3.9% and TTM PAT ₹273 crore aided by Mar 2026 PAT ₹118 crore but offset by weak Jun and Sep 2025 quarters. Borrowings rose to ₹3,964 crore by March 2026 from ₹2,001 crore a year earlier.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line re-accelerated TTM after FY25 dip.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [23556, 19798, 21519, 22480], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers include millions of farmers reached through a large dealer network across northern and central India, plus trading partners for imported fertilisers. GOI promoter control at 74.7% aligns strategy with fertiliser security objectives. FII holding stayed near 0.5% in June 2026 while DII fell toward 4.9% and public float near 20% provides liquidity. Concentration risk is policy: delayed reimbursement affects the entire urea division simultaneously. No single private buyer dominates disclosure, but contingent liabilities near ₹959 crore on Screener pros require monitoring in notes.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Own manufactured urea remains the volume anchor; traded fertilisers and agro products add revenue when domestic shortages appear. FY26 recovery came with OPM rising from 3.1% in FY25 to 3.9% consolidated, but quarterly OPM ranged from negative in Sep 2023 style troughs to 7% in Mar 2026. Premium Screener insights hide exact urea production LMT and market share percent without login. Mix shift toward traded volumes helps top-line when import parity moves; mix toward own urea without reimbursement compresses ROCE. Bio-fertilizers remain smaller than urea in MD&A narrative but support branding.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Interest and depreciation keep PAT below operating profit.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [617, 615, 837, 1012], color: "#1e3a5f" },
      { name: "PAT", values: [65, 76, 170, 273], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Department of Fertilizers decisions on urea fixed-cost and energy reimbursement dominate fertiliser profitability. Natural gas and naptha tariffs feed urea conversion costs at NFL plants. Monsoon and sowing patterns drive urea offtake. Traded fertiliser import parity moves trading margins. Interest rates matter because borrowings reached ₹3,964 crore Mar FY26 with TTM interest near ₹282 crore. CPSE index re-rating and divestment headlines can move PSU multiples independently of quarterly PAT. Ramagundam JV commissioning news affects consolidated earnings expectations.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin fell from 8% in FY22 to 2.6% in FY24 before recovering to 3.9% in FY26 and 4.5% TTM on Screener. ROCE fell from 15% in FY23 to 5% in FY24 and recovered to 8% in FY26. Three-year profit CAGR is negative on headline metrics because FY23 was an exceptional base. ROE averaged about 3.4% over three years on Screener pros, below cost of equity, so the market applies a PSU and working-capital discount despite 11.5× trailing P/E. Investors should normalise trailing earnings using FY27 PAT closer to ₹265 crore rather than extrapolating Mar 2026 alone.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin mean-reverted after FY23 peak; quarterly dispersion remains wide.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [8, 2.6, 3.9, 4.5], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹583 crore in FY24, then ₹2,485 crore in FY25, then turned negative ₹1,384 crore in FY26 on Screener despite ₹837 crore operating profit. CFO to operating profit was negative 160% in FY26, a sharp miss versus FY25 outlier. Free cash flow was negative ₹1,606 crore in FY26 after investing outflows near ₹222 crore. Subsidy receivable timing and inventory explain swings more than accounting PAT quality alone. Dividend payout near 30% in FY26 signals board intent, but sustained CFO above ₹800 crore is needed to fund dividends and capex without further borrowings.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY25 was an outlier; FY26 reverted to negative CFO.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [583, 2485, -1384], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹3,964 crore at March 2026 are the primary risk vector versus investments of ₹502 crore. Net debt near ₹3,460 crore with rising interest can compress PAT toward our bear band even if operating profit holds. A simultaneous reimbursement delay and traded margin collapse would cut FY27 PAT without threatening solvency given PSU backing. Equity dilution is unlikely near-term, but dividend cuts and capex slowdown would precede distress. Contingent liabilities near ₹959 crore add tail risk if claims crystallise. Negative free cash flow at high single-digit ROCE is a warning on quality of earnings, not on going concern given promoter support.",
  },
  seriesChart(
    "Borrowings trend (₹ crore, consolidated)",
    "Conclusion: Mar FY26 debt rebuild reversed FY25 deleveraging.",
    ["Mar FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [2001, 3964], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under GOI oversight with stable 74.7% promoter holding. Incentives emphasise fertiliser supply security, plant uptime, energy efficiency, and dividend continuity visible in payout ratios that spiked to 100% in FY25 on Screener. That aligns with income-oriented CPSE holders but can encourage dividends when CFO is weak. Independent directors and audit committees follow listed company norms, with C&AG comments appended to the FY25 annual report. Management communication on subsidy receivables is explicit in curated call excerpts, which helps investors track CFO risk rather than treating PAT as fully cash-backed.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised energy efficiency at urea plants, leadership urea throughput, Ramagundam JV progress, improved working capital, sustained dividends, and controlled leverage. OPM recovered partially into FY26 but remains below FY22. Debtor days worsened to 92 days. Borrowings doubled year on year. Dividends continued with variable payout. Cash conversion promises missed in FY26 with negative CFO. Overall, delivery is mixed: operations recovered, balance sheet levered seasonally, subsidy timing still open.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: higher urea and traded fertiliser utilisation when monsoon and sowing support offtake. Margin: reimbursement catch-up and energy project benefits if Gcal/MT falls. JV: Ramagundam urea capacity adds consolidated earnings when commissioned. Balance sheet: CFO recovery as receivables clear could reduce net borrowings. These drivers are partially priced at 11.5× TTM earnings, so FY27 must show PAT near ₹265 crore with OPM above 4% and positive CFO to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Department of Fertilizers clears overdue urea energy and fixed-cost claims, lifting fertiliser segment profit without volume change. Energy conservation projects cut consumption metrics materially in FY27. Debtor days fall below 70 with CFO above ₹1,200 crore. Borrowings fall below ₹3,000 crore as receivables clear. Interest expense flatlines despite higher base rates. FY27 PAT could approach ₹330 crore and support our bull band near ₹81 per share at 12× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Reimbursement stays delayed through FY27 while NFL carries working capital above 90 debtor days. Traded fertiliser margins compress on import volatility. Interest on ₹4,200 crore borrowings rises with refi costs. Mar 2026 style seasonal PAT does not repeat and weak quarters persist. CFO stays negative while capex continues, forcing further debt. FY27 PAT could fall toward ₹190 crore and compress equity toward our bear case near ₹35 per share at 9× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a Navratna CPSE urea leader with reimbursement and leverage overlay (9× bear, 11× base, 12× bull), cross-checked with TTM operating profit near ₹1,012 crore at 5.5× EV/EBITDA less net debt near ₹3,460 crore implying about ₹43 per share before cycle premium. Bear FY27 PAT ₹190 crore implies about ₹35 per share (-45% vs ₹63.8 reference). Base PAT ₹265 crore implies about ₹59 (-7%). Bull PAT ₹330 crore implies about ₹81 (+27%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds trailing TTM earnings unless reimbursement and CFO recover together.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs policy and cash conversion together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [35, 59, 81, 64], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Mar 2026 and Dec 2025 drove trailing optimism; mid-year quarters were weak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "PAT", values: [-32, -10, 94, 118], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days (consolidated)",
    "Conclusion: Receivable stretch worsened into Mar FY26.",
    ["Mar FY25", "Mar FY26"],
    [{ name: "Days", values: [60, 92], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings remain cyclical versus FY23 peak; FY26 marked partial recovery.",
    ["FY23", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [456, 65, 170, 273], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Department of Fertilizers notifications on urea fixed-cost and energy norms. Monthly subsidy receipt and receivable disclosures in investor presentations. Energy consumption metrics in annual report Form B. Borrowings and RFCL consolidation notes each quarter. BSE/NSE concall transcripts for verbatim volume guidance. CPSE index inclusion or divestment headlines. Peer PSU fertiliser re-rating if ROCE crosses 10% sustainably with positive CFO.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹63.8 reference. Base-case target near ₹59 offers about 7% downside versus reference, below our 15% Buy hurdle, while negative FY26 CFO and higher borrowings keep the name off Avoid unless reimbursement fails outright. Upgrade to Buy if two consecutive quarters show consolidated OPM above 5% with CFO above ₹400 crore and documented urea reimbursement catch-up, lifting base PAT toward ₹300 crore and target above ₹73 (+15%). Downgrade to Avoid if TTM PAT falls below ₹180 crore with OPM under 3%, borrowings rise above ₹4,500 crore, and CFO stays negative while interest exceeds ₹300 crore TTM.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for own urea versus traded fertilisers for FY26 are not in the free sources used. Urea production LMT and market share on Screener require premium login. Exact FY27 RFCL commissioning phasing is not modeled line by line. Subsidiary Urvarak Videsh Limited contribution needs consolidated note refresh. Contingent liability ₹959 crore requires claim-level reconciliation. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
