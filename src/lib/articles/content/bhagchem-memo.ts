import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const bhagchemMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Bhagiradha Chemicals & Industries Ltd (NSE: BHAGCHEM, BSE: 531719) is a Hyderabad-founded agrochemical manufacturer producing technical active ingredients and formulations across insecticides, fungicides, herbicides, and specialty intermediates. Promoter holding was about 19.6% as of June 2026 on Screener, with public float above 77% and negligible FII ownership near 0.1%. The stock is in BSE Commodities. At a reference price of ₹236 on 1 October 2026, market capitalisation is about ₹3,062 crore on roughly 13 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 111 on TTM earnings per share about ₹2.12, with book value about ₹53.8 per share, return on equity near 2.6%, and return on capital employed near 4.5%. The quote is down about 10% over one year but sits well above the 52-week low of ₹170, pricing a sharp TTM earnings rebound that our forward base case does not support at this multiple.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Bhagiradha earns by manufacturing and exporting technical grade actives and selling domestic formulations to crop protection marketers and distributors. Revenue is recognised on dispatch; export contracts often run on longer credit than domestic bulk sales. Payment quality depends on global generic pricing for molecules such as chlorpyrifos and fipronil, rupee competitiveness, and customer inventory cycles. The company positions itself as a multi-product technical supplier with thirty-two active ingredients rather than a single-molecule bet, which diversifies demand but still leaves margins exposed to China supply and Indian generic price wars.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1993 by a former Indian Institute of Chemical Technology scientist, Bhagiradha scaled from intermediates into integrated technical manufacturing. Consolidated revenue moved from about ₹502 crore in FY23 to ₹408 crore in FY24 and ₹440 crore in FY25 as generic pricing crushed volumes, then recovered to ₹536 crore in FY26 with TTM sales near ₹607 crore on Screener. Operating profit fell from ₹77 crore in FY23 to ₹37 crore in FY25 before rebounding to ₹57 crore in FY26, with TTM operating profit near ₹79 crore. Reported PAT collapsed from ₹45 crore in FY23 to ₹14 crore in FY25 and reached ₹18 crore in FY26, with TTM PAT near ₹28 crore (+127% compounded profit growth on Screener). The equity story shifted from a high-ROCE compounder toward a capex-heavy rebuild: borrowings rose to ₹235 crore at FY26 while fixed assets reached ₹580 crore.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY24 trough; TTM near ₹607 cr.",
    ["FY23", "FY24", "FY25", "FY26", "TTM"],
    [{ name: "Sales", values: [502, 408, 440, 536, 607], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Export formulators and domestic agrochemical marketers pay for technical supply and tolling arrangements; Screener flags export share in premium insights but free tables do not break out top-five customer concentration. Public shareholding above three quarters means quarterly results drive sentiment more than promoter support. Low promoter ownership near 20% differs from family-controlled peers such as Bharat Rasayan or Dhanuka and increases reliance on institutional bid depth that is still thin on Screener. Investors should read annual report customer notes for single-buyer exposure before treating TTM revenue growth as durable.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans insecticides (chlorpyrifos, fipronil, buprofezin), fungicides (azoxystrobin), herbicides (imazethapyr, clodinafop-propargyl), and intermediates such as R-HPPA per company materials. Higher-margin technical exports can lift OPM when plants load, while domestic formulation lines compete on price. Q1 FY27 operating profit margin near 16% on the June 2026 quarter suggests mix improved versus the 5% March 2025 quarter, but full-year margin still averaged near 11% in FY26. Without segment revenue in free quarterly tables, we assume export technicals led the TTM recovery and watch for margin mean reversion if generic prices soften.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY25 trough; Q1 FY27 spike.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [15, 11, 8, 11, 16], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM rebound from FY25 low.",
    ["FY23", "FY24", "FY25", "FY26", "TTM"],
    [{ name: "PAT", values: [45, 18, 14, 18, 28], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Generic agrochemical pricing in China and India sets realisations on mature molecules. Rupee moves affect export competitiveness and imported intermediate costs. Interest rates matter because borrowings near ₹235 crore produced TTM finance cost near ₹21 crore on Screener. Monsoon and kharif planting drive domestic formulation offtake. Peer multiples for PI Industries or UPL set a ceiling for quality agchem names, but Bhagiradha’s sub-5% ROCE places it closer to cyclical technical suppliers than integrated innovators. Retail interest in commodity stocks can keep price-to-book elevated even when earnings lag.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit margin fell from 15% in FY23 to 8% in FY25 before recovering to 11% in FY26, showing how generic cycles dominate over volume growth alone. ROCE collapsed from 22% in FY23 to 5% in FY26 as capital employed swelled with capex. Other income contributed ₹9 crore in FY25 and should not be treated as recurring operating earnings. Tax rates spiked in loss quarters (March 2025 tax rate 140% on Screener) and turned negative in Jun 2025; use full-year cash tax when stress testing bear cases.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, Screener)",
    "Conclusion: Interest and depreciation bridge PAT below OP.",
    ["FY24", "FY25", "FY26", "TTM"],
    [
      { name: "OP", values: [43, 37, 57, 79], color: "#1e3a5f" },
      { name: "PAT", values: [18, 14, 18, 28], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operations was ₹34 crore in FY24, negative ₹53 crore in FY25, and ₹12 crore in FY26 on Screener, with CFO to operating profit only 34% in FY26 despite higher PAT. Free cash flow was negative ₹148 crore in FY26 after heavy investing outflows near ₹160 crore. Debtor days rose to 139 and inventory days to 161 at FY26, explaining why earnings recovery did not fund the capex cycle internally. Sustained CFO above ₹60 crore in FY27 would validate that Q1 FY27 margin strength is cash-backed, not purely accrual from receivable build.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, Screener)",
    "Conclusion: FY25 outflow; FY26 modest recovery.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [14, 34, -53, 12], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days (Screener consolidated)",
    "Conclusion: Extended versus FY23 near 94 days.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Days", values: [94, 96, 144, 139], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹235 crore at FY26 year end against reserves near ₹685 crore are manageable on book value but expensive at TTM finance cost near ₹21 crore relative to TTM PAT near ₹28 crore. Another generic price down-cycle that compresses OPM toward 8% would strand ₹580 crore fixed assets below economic returns. Equity issuance in FY25 expanded share count; further dilution is a risk if CFO stays weak. Promoter holding near 20% limits confidence that insiders will absorb equity raises at distressed prices.",
  },
  seriesChart(
    "Borrowings (₹ crore, Screener consolidated)",
    "Conclusion: Leverage up with capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [62, 89, 235], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The founding family legacy continues in operations but promoter stake near 19.6% is low for a mid-cap agchem name, and Screener shows promoter holding down about 390 basis points over three years. Management emphasises capacity commissioning and export growth, which fits a technical manufacturer but leaves public shareholders funding the capex through leverage and equity. Dividend payout near 11% of profits signals modest cash return while growth absorbs cash. Incentives appear aligned for asset expansion more than near-term ROCE for minorities.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 promised margin stabilisation after FY24 but delivered 8% OPM and negative CFO. Capex promises advanced with fixed assets near ₹580 crore but ROCE stayed near 5%. Q1 FY27 promised operational recovery and delivered June 2026 revenue ₹195 crore with OPM near 16%, an early beat. Working capital improvement remains partial with debtor days still above 130. Full-year FY27 targets are pending with TTM revenue near ₹607 crore but trailing P/E near 111 already capitalising optimism.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is loading new technical lines toward utilisation that lifts OPM above 12% sustainably. Second is export customer restocking after FY25 destocking. Third is domestic formulation growth tied to kharif demand. Fourth is slowing capex so free cash flow turns positive and borrowings plateau. Fifth is mix shift to higher-value actives such as azoxystrobin technicals. Growth requires two years of CFO conversion, not one strong June quarter.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Generic prices firm, revenue approaches ₹680 crore with OPM near 14%, and net CFO exceeds ₹80 crore. Finance cost falls as borrowings flatline. FY27 PAT approaches ₹52 crore and supports our bull band near ₹112 per share (-53% vs ₹236 reference) at 28× earnings, still below the current quote.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Pricing weakens again, revenue stalls near ₹580 crore with OPM near 10%, and finance cost stays elevated. Working capital bleeds another year of negative CFO. FY27 PAT could slip toward ₹24 crore and equity toward our bear case near ₹30 per share at 16× earnings (-87% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a post-capex generic technical supplier with recovering but still low ROCE (16× bear, 22× base, 28× bull), cross-checked with TTM operating profit near ₹79 crore at 12× EV/EBITDA less net debt implying equity value far below the current market cap unless PAT doubles again. Bear FY27 PAT ₹24 crore implies about ₹30 per share (-87% vs ₹236 reference). Base PAT ₹38 crore implies about ₹64 (-73%). Bull PAT ₹52 crore implies about ₹112 (-53%). None of our scenarios meet the 15% upside hurdle required for a Buy at the reference price; the market’s trailing P/E near 111 embeds a bull case beyond our base.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: All scenarios below CMP; Avoid.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [30, 64, 112, 236], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter peak in recent set.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [123, 124, 140, 114, 158, 195], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, OPM, and PAT on BSE/NSE results with export commentary. Borrowings and finance cost each quarter. Debtor and inventory days versus CFO. Capex and CWIP capitalisation updates. Generic price trends for key actives on concalls. Promoter holding and any equity raise. Peer agchem multiples for Sharda Cropchem and Meghmani. Commissioning updates on new technical blocks.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Avoid at ₹236 reference. Base-case target near ₹64 per share implies about 73% downside because trailing multiples embed a recovery our FY27 PAT path does not justify. Upgrade toward Neutral if two consecutive quarters show consolidated OPM above 14% with net CFO above ₹40 crore, borrowings flat or down, and fair value rises above ₹200 on base FY27 PAT near ₹45 crore at 22×. Downgrade toward deeper Avoid if OPM falls below 9% with borrowings above ₹250 crore and CFO turns negative again, pushing fair value toward our bear band near ₹30 per share.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. Exact export versus domestic revenue split and top-five customer concentration are login-gated on Screener. Segment EBIT for technicals versus formulations is not modelled separately. Unquoted investment fair values and related-party sales require annual report notes. Update bear, base, and bull when FY26 annual report publishes segment, tax reconciliation, and capex schedules.",
  },
];
