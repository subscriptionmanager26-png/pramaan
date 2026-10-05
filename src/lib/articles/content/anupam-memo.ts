import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const anupamMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Anupam Rasayan India Ltd (NSE: ANURAS, BSE: 543275) manufactures life-science specialty chemicals including agrochemical intermediates and actives, personal care antibacterials and ultraviolet protection ingredients, and pharmaceutical key starting materials, with fluorination and continuous-flow chemistry capabilities at Sachin and Dahej. Promoter holding was about 59.07% as of June 2026 on Screener, with FIIs near 7.72% and DIIs near 0.38%. The stock is in Nifty 500, Nifty Smallcap 250, and related mid-cap indices. At a reference price of ₹1,164 on 1 October 2026, market capitalisation is about ₹13,249 crore on roughly 11.38 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 75.8 on TTM earnings per share about ₹15.35, with book value about ₹290 per share and return on capital employed near 7.38%. The quote sits below the 52-week high of ₹1,415 and above the ₹1,047 low after a fifty-two percent TTM revenue surge while return on equity stayed near 5.55%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Anupam earns conversion margin on multi-step synthesis of regulated intermediates sold under long customer qualification cycles to global agrochemical innovators, personal care formulators, and pharmaceutical active ingredient makers. Revenue is recognised largely on dispatch; solvent, energy, and imported raw material costs flow through cost of materials with partial lag on export contracts, so operating profit margin compresses when customers destock or when new lines start with sub-optimal utilisation. Payment cycles run through debtor days near 148 Mar FY26 and inventory days near 490, so net cash from operations can trail operating profit when export customers extend inventory, though FY26 still delivered ₹334 crore net cash from operations on ₹526 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Anupam listed in 2021 after two decades as a private specialty manufacturer and used proceeds to expand fluorination and flow chemistry capacity. Consolidated revenue moved from ₹1,475 crore in FY24 to ₹1,437 crore in FY25 before jumping to ₹2,365 crore in FY26 with TTM sales near ₹2,535 crore. Operating profit followed ₹381 crore, ₹401 crore, and ₹526 crore across the same years. Reported profit after tax moved ₹167 crore, ₹160 crore, and ₹222 crore with TTM profit after tax near ₹225 crore. Borrowings rose toward ₹1,867 crore Mar FY26 while interest expense reached about ₹149 crore as Dahej expansion consumed capital.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹2,535 cr after FY26 inflection.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1475, 1437, 2365, 2535], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include multinational agrochemical and personal care companies that require multi-year validation for fluorinated and high-purity intermediates. Company materials cite export exposure and a growing multinational customer count; Screener premium gates exact top-ten revenue concentration time series. Promoter control near fifty-nine percent supports patient capex while public float above thirty percent leaves re-rating tied to leverage reduction after the FY26 growth burst. Concentration risk is moderate: delay in a large agrochemical contract or extended customer inventory can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Life-science specialty chemicals contributed over ninety percent of FY24 revenue with agrochemicals near sixty-five percent, personal care near seventeen percent, and pharmaceuticals near nine percent per company disclosures. FY26 revenue acceleration came from agrochemical volume recovery and new personal care molecules while pharma key starting materials remained a smaller but higher-margin pipeline. Q1 FY27 revenue ₹655 crore with operating profit margin twenty-five percent shows sequential strength from the Dec 2025 quarter when OPM touched twenty-five percent on ₹512 crore sales. Fluorination and continuous-flow assets at Dahej could add high-teens margin revenue at utilisation above seventy percent by FY28, not fully in the base case.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Margin fell from FY25 peak but stabilised near twenty-two percent TTM.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [26, 28, 22, 22], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global agrochemical inventory cycles move Anupam volumes before customer purchase orders normalise, as FY25 demonstrated when revenue dipped three percent despite a strong order book narrative. Chinese export competition on select intermediates can pressure realisations on legacy molecules. Rupee volatility affects export realisations with partial natural hedge on imported inputs. Indian specialty chemical peer re-rating (Neogen Chemicals and Gujarat Fluorochemicals in this repo) sets sentiment for leveraged growth names. Rising interest rates and borrowings toward ₹1,867 crore can dominate valuation even when revenue growth exceeds fifty percent TTM.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near twenty-four percent on Screener masks the FY25 pause when sales fell slightly from FY24 before FY26 re-accelerated. Operating profit margin peaked near twenty-eight percent in FY25 before compressing toward twenty-two percent in FY26 as depreciation and energy costs rose on commissioned lines. Profit after tax troughed in FY25 at ₹160 crore before recovering to ₹222 crore in FY26. Return on capital employed fell from low teens toward seven percent as capital employed rose faster than profit after tax. Dividend payout near ten percent reflects reinvestment priority on Dahej and Sachin expansions.",
  },
  seriesChart(
    "Reported profit after tax (₹ crore)",
    "Conclusion: PAT troughed in FY25 before TTM recovery.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [167, 160, 222, 225], color: "#c27803" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹334 crore exceeded profit after tax ₹222 crore, with CFO to operating profit near seventy-two percent after FY25 net cash from operations was negative ₹30 crore on stretched debtors. FY24 net cash from operations ₹59 crore was weak at twenty-eight percent of operating profit. Capital expenditure and investing outflows kept free cash flow negative ₹220 crore in FY26 despite improved CFO. If customers extend payment terms again, profit after tax can outpace net cash from operations temporarily without signalling permanent earnings quality issues, but two weak CFO years would be a downgrade trigger.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO recovered after FY25 working capital drag.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [59, -30, 334], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹1,867 crore Mar FY26 against reserves near ₹3,188 crore leave balance-sheet risk tied to interest coverage rather than immediate solvency. Interest expense near ₹149 crore FY26 on operating profit ₹526 crore still leaves coverage above three times, but further borrowings without revenue growth would compress headroom. Capital work in progress fell toward ₹114 crore as assets commissioned, yet investing outflows near ₹820 crore FY26 show ongoing capex intensity. A prolonged stretch of sub-twenty percent operating profit margin with negative free cash flow and rising borrowings would be the early warning, not a single weak quarter.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with Dahej expansion.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [1069, 1373, 1867], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Desai family founded Anupam Rasayan and retains majority control with Anupam Desai as managing director driving capacity expansion and customer qualification. Executive compensation ties to profitability and project milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near ₹1.5 per share offers minority holders modest cash return while promoters reinvest through retained earnings and leveraged capex. Insider trading windows and promoter pledging are monitored on exchange filings; Screener shows promoter holding stable near fifty-nine percent as of June 2026. Alignment is reasonable for a family-controlled growth platform but leverage raises the cost of mistakes for minority holders.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was missed with ₹1,437 crore sales down three percent as customers destocked. FY25 cash conversion guidance was missed with negative net cash from operations. FY26 revenue acceleration toward ₹2,365 crore was met with TTM above ₹2,535 crore. FY26 CFO recovery toward ₹334 crore was met though free cash flow remained negative. FY27 revenue guide toward ₹2,700 to ₹2,800 crore is pending; Q1 FY27 revenue ₹655 crore and profit after tax ₹51 crore support the trajectory but need H2 margin confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Order book conversion on agrochemical and personal care molecules adds high-margin volume as customer inventories normalise. Dahej fluorination and flow chemistry utilisation crossing sixty percent adds revenue with operating leverage on fixed assets. Pharma key starting material launches diversify mix toward higher purity grades. Operating leverage drops incremental revenue to profit at high marginal rates when interest expense stabilises. Working capital release if debtor days fall toward one hundred forty days frees cash for deleveraging.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees personal care and pharma mix rise, operating profit margin sustain mid-twenties in H2 FY27, and borrowings flat, lifting profit after tax near ₹340 crore at fifty-four times multiple and re-rating the stock toward ₹1,615 per share as return on capital employed returns toward ten percent. Faster-than-guided FY28 revenue on Dahej at normalized prices adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near twenty percent on customer destocking, leaves profit after tax near ₹210 crore at thirty-eight times multiple and ₹702 per share, down roughly forty percent from reference. Prolonged capex with borrowings above ₹2,200 crore and interest above ₹180 crore would force investors to haircut growth multiples despite revenue momentum.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a leveraged life-science specialty platform with fluorination moats and agrochemical cyclicality (38× bear, 50× base, 54× bull), cross-checked with TTM operating profit near ₹563 crore at twelve times EV/EBITDA when net debt near ₹1,800 crore caps downside near ₹430 per share only if margins stay at trough lows. Bear FY27 profit after tax ₹210 crore implies about ₹702 per share (-40% vs ₹1,164 reference). Base profit after tax ₹285 crore implies about ₹1,252 (+8%). Bull profit after tax ₹340 crore implies about ₹1,615 (+39%). Base case does not clear the fifteen percent upside hurdle versus reference while trailing price-to-earnings near seventy-six times embeds growth and leverage risk.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers high-single-digit upside, below Buy hurdle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [702, 1252, 1615, 1164], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [486, 731, 512, 636, 655], color: "#c27803" }],
  ),
  seriesChart(
    "Interest expense (₹ crore, consolidated P&L)",
    "Conclusion: Interest rose with borrowings on Dahej capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Interest", values: [89, 112, 149], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Order book and segment mix when investor decks publish. Debtor days, inventory days, and net cash from operations each quarter. Borrowings, interest expense, and project finance updates on concalls. Dahej and Sachin utilisation commentary. Dividend policy and FII holding changes. Agrochemical customer inventory commentary from global peers.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,164 reference. Base-case target near ₹1,252 per share implies about eight percent upside, below the fifteen percent Buy hurdle, with confirming mid-twenties operating profit margin, profit after tax run-rate above ₹55 crore per quarter, and borrowings stable near ₹1,900 crore while net cash from operations stays above ₹300 crore annualised. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty-four percent with TTM profit after tax above ₹260 crore and borrowings flat or down. Downgrade toward Avoid if operating profit margin falls below twenty percent with TTM net cash from operations below ₹200 crore or borrowings exceed ₹2,200 crore without matching revenue growth.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and MD&A pending full ingestion. Agrochemical versus personal care versus pharma revenue splits and export share are login-gated on Screener. Exact order book value and utilisation percentages for Dahej fluorination need investor presentation updates. Customer concentration percentages are premium-gated. Update bear, base, and bull when consolidated segment EBIT and volume metrics publish in the annual report.",
  },
];
