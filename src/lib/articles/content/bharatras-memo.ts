import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const bharatrasMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Bharat Rasayan Ltd (NSE: BHARATRAS, BSE: 590021) is a promoter-led Indian manufacturer of technical grade pesticides and intermediates for the global agrochemical industry, controlled by the Bharat Group with about 75% promoter holding as of June 2026 on Screener. The stock is in BSE Commodities and related indices. At a reference price of ₹999 on 1 October 2026, market capitalisation is about ₹1,660 crore on roughly 1.66 crore shares (face value ₹5). Trailing consolidated price-to-earnings is near 11.4× on TTM earnings, with book value about ₹767 per share and return on capital employed near 16%. The quote sits well below the 52-week high of ₹3,030 and above the ₹977 low, reflecting a roughly 60% one-year de-rating even as FY26 earnings recovered from the FY24 trough.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Bharat Rasayan earns by manufacturing and exporting technical actives and intermediates such as lambda cyhalothrin, thiamethoxam, and metribuzin, plus newer molecules including fluxametamide and tolfenpyrad, to formulators and distributors overseas and in India. Revenue is recognised on dispatch; pricing follows global generic indices and contract cycles, so operating profit margin can swing from low single digits in weak quarters to high teens in strong ones. Payment cycles are export-long with debtor days near 113 and inventory days near 150 at March FY26 on Screener. The company remains asset-light relative to integrated formulators but working capital intensity is high, so cash from operations matters as much as headline PAT.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Bharat Rasayan built scale in selected technical molecules over three decades, with the top ten products still accounting for about 66% of sales per company disclosures cited on investor materials. Consolidated revenue moved from about ₹1,234 crore in FY23 to ₹1,044 crore in FY24 during a generic price correction, then recovered to ₹1,171 crore in FY25 and ₹1,240 crore in FY26 per Screener. PAT fell from ₹125 crore in FY23 to ₹96 crore in FY24 before rebounding to ₹141 crore in FY25 and ₹146 crore in FY26. Operating profit margin collapsed to about 11% in FY24 and improved to near 16% in FY26, so the market prices another China supply or pricing cycle more than insolvency risk.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY24 trough; FY26 above FY23.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1234, 1044, 1171, 1240], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers are primarily export formulators and trading partners; historical disclosures indicate exports are a majority of standalone sales, which diversifies geography but ties results to regulated market demand and distributor inventory. Top-ten product concentration near two-thirds of revenue means a few molecules can move the P&L when generic prices shift. Promoter control at 75% aligns strategy with the founding family, while public float near 22% is small enough that technical agchem sentiment can dominate flows. FII ownership near 0.4% in June 2026 is minimal, increasing volatility on thin liquidity.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans insecticides, herbicides, and fungicides at the technical and intermediate stage rather than domestic farmer brands. Management highlights lambda cyhalothrin, fipronil, thiamethoxam, and intermediates such as metaphenoxy benzaldehyde as core earners, with newer launches intended to reduce dependence on legacy molecules over time. Mix shift toward higher-margin technicals in strong quarters shows up in OPM spikes near 22% in select periods on Screener quarterly tables. Domestic sales exist but the equity narrative remains export technical supply and registration depth, not retail crop protection marketing.",
  },
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY24 reset; FY26 near FY23 peak.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [125, 96, 141, 146], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: OPM 16% in FY26 after FY24 trough.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "OPM %", values: [15, 11, 15, 16], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic active ingredient prices and Chinese export supply set realisations for Bharat Rasayan’s technical basket. Rupee versus dollar moves affect reported revenue and import parity on intermediates. EU and other registration renewals create moat and delay risk. Customer destocking, as seen in FY24, can compress OPM into low double digits even when volumes hold. Peer re-rating in Indian technical names (Sharda Cropchem, PI Industries CSM) sets sector sentiment. Working capital days near 192 at March FY26 on Screener amplify quarterly PAT swings. The 60% one-year share price fall prices cyclical fear ahead of FY26 earnings recovery.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit reached about ₹199 crore in FY26 on consolidated revenue near ₹1,240 crore, keeping OPM near 16%. Other income near ₹25 crore in FY26 added stability below the line from investments and treasury items per Screener. Depreciation near ₹26 crore and interest near ₹5 crore remain modest relative to operating profit. ROCE near 16% in FY26 recovered from 12% in FY24 but remains far below the 34% peak in FY20 on Screener, supporting the view that the de-rated multiple reflects cyclical normalisation, not permanent impairment. Five-year sales CAGR near 3% highlights slow top-line growth despite molecule depth.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: FY26 OP recovery led PAT higher.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [118, 175, 199], color: "#1e3a5f" },
      { name: "PAT", values: [96, 141, 146], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹41 crore in FY24, ₹172 crore in FY25, and ₹132 crore in FY26 per Screener cash flow tables, with CFO to operating profit near 88% in FY26. Debtor days near 113 and inventory days near 150 at March FY26 show export working capital intensity; working capital days near 192 remain elevated. Free cash flow was positive near ₹59 crore in FY26 after capex. Until CFO stays above ₹120 crore through a generic price downcycle, headline PAT can overstate distributable cash if receivables stretch. FY25’s strong CFO followed inventory normalisation after FY24.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO solid; FY24 was weak.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [41, 172, 132], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Working capital days (consolidated, Screener)",
    "Conclusion: Near 192 days; monitor in downturns.",
    ["FY24", "FY25", "FY26"],
    [{ name: "WC days", values: [199, 170, 192], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Bharat Rasayan is almost debt free on Screener with borrowings near ₹1 crore Mar FY26 and investments near ₹324 crore versus reserves above ₹1,266 crore. Solvency risk is low unless management levered for a large acquisition, which history does not suggest at 75% promoter control. The risk is return on capital and working capital traps: if generic prices collapse while inventory and receivables rise together, CFO could turn weak without threatening covenants. CWIP near ₹46 crore Mar FY26 adds execution risk if new capacity ramps into oversupply. Dividend payout near 1% keeps reinvestment inside the company rather than returning cash quickly.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The promoter group holds about 75% and has led the company since incorporation in 1989 with a technical manufacturing focus. Executive compensation is not load-bearing in our sources, but capital allocation emphasises CWIP, liquid investments, and maintaining minimal debt rather than aggressive dividends. Public float near 22% gives some liquidity but FII ownership below 1% can amplify moves. Incentive alignment looks reasonable if management prioritises molecule diversification and balance sheet strength over chasing volume in weak pricing environments.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 targeting margin recovery after FY24 generic stress and continued launches in new technicals. FY26 OPM near 16% and PAT ₹146 crore delivered partial proof, though TTM revenue down 5% on Screener shows top-line momentum is not yet secure. Deleveraging promises were met with borrowings near nil. Product pipeline commitments for fluxametamide and tolfenpyrad remain in progress with top-ten concentration still near 66% of sales. FY27 mid-single-digit growth guidance from FY26 commentary is early: Q1 FY27 revenue ₹338 crore and PAT ₹37 crore support continuity but not automatic re-rating after the 60% one-year price fall.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is stable or improving generic prices for core technicals. Second is revenue from newer molecules that dilute top-ten concentration. Third is export volume recovery when distributors restock after destocking cycles. Fourth is operating leverage if OPM holds near 16% while CWIP assets commission. Fifth is treasury and investment income on a large investment book, though this is secondary to technical margins. Growth does not require equity dilution given minimal debt, so execution on registrations and customer wins drives the story.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Generic prices firm while Bharat Rasayan gains share in fluxametamide and tolfenpyrad. OPM expands toward 18% with quarterly spikes above 20%. Working capital days fall below 170 with CFO above ₹160 crore. ROCE re-tests 20% and the market re-rates from 11× toward 12× forward earnings. FY27 PAT could approach ₹195 crore and support our bull band near ₹1,410 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "China supply floods core molecules and OPM compresses toward 12% with revenue flat near ₹1,200 crore. Receivable days exceed 130 with CFO below ₹80 crore. New capacity ramps into weak demand, depressing ROCE toward 12%. FY27 PAT could fall toward ₹125 crore and equity toward our bear case near ₹678 per share at 9× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a cyclical technical export franchise (9× bear, 11.5× base, 12× bull), cross-checked with FY26 operating profit near ₹199 crore at 9× EV/EBITDA plus investments near ₹324 crore supporting asset backing well above debt. Bear FY27 PAT ₹125 crore implies about ₹678 per share (-32% vs ₹999 reference). Base PAT ₹170 crore implies about ₹1,178 (+18%). Bull PAT ₹195 crore implies about ₹1,410 (+41%). Base case clears the 15% upside hurdle versus reference if FY27 margins hold near FY26 without another FY24-style price shock.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears 15% upside; bear reflects generic downcycle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [678, 1178, 1410, 999], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE 16% post FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [12, 16, 16], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with molecule mix commentary. Generic active price indices versus management realisation remarks. Export customer inventory commentary on concalls. Debtor and inventory days each quarter on Screener. CWIP commissioning updates for new technical capacity. Promoter holding changes above 75% band. Investment book size and other income trends. Regulatory updates on molecules in the top-ten basket. Any dividend policy change from near-zero payout levels.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹999 reference. Base-case target near ₹1,178 per share offers about 18% upside with confirming mid-single-digit revenue growth, OPM near 16%, and CFO above ₹120 crore. Upgrade toward bull if two consecutive quarters show consolidated revenue above ₹350 crore with YoY growth, OPM above 17%, and top-ten product share falling below 60% of sales while new molecules scale. Downgrade toward Neutral if FY27 revenue stays below ₹1,220 crore with OPM below 14% and CFO below ₹100 crore, cutting base PAT toward ₹150 crore and target below ₹1,050. Downgrade toward Avoid if PAT falls below ₹110 crore with OPM below 12% and working capital days above 220 while generic prices weaken industry-wide.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact export country and customer concentration requires annual report notes not yet ingested line by line. Revenue share by molecule for fluxametamide and tolfenpyrad is not disclosed in free quarterly sources. Segment EBIT for technicals versus investments is not broken out. Energy and water intensity metrics on Screener insights are login-gated. Update bear, base, and bull when FY26 annual report related-party and export notes publish.",
  },
];
