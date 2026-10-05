import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const deepakfertMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Deepak Fertilisers and Petrochemicals Corporation Ltd (NSE: DEEPAKFERT, BSE: 500645) is a Pune-headquartered integrated chemicals and crop nutrition company controlled by the Deepak family with about 45.6% promoter holding in June 2026 on Screener. The stock is in Nifty 500, Nifty MidSmallcap 400, and Nifty Chemicals. At a reference price of ₹1,301 on 1 October 2026, market capitalisation is about ₹16,422 crore on roughly 12.6 crore shares (face value ₹10). Trailing price-to-earnings is near 16.7× on TTM earnings, with book value about ₹542 per share and return on equity near 10.9%. The quote sits about 23% below the 52-week high of ₹1,681 but above the ₹865 low, reflecting a cyclical chemicals franchise investing through a heavy capex year rather than a distressed balance sheet.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Deepak Fertilisers runs an integrated value chain: ammonia and nitric acid feed bulk chemicals (including isopropyl alcohol) and mining chemicals (technical ammonium nitrate), while crop nutrition and agri services sell Smartek, Croptek, and traded fertiliser grades through the Mahadhan brand and retail network. Customers include mining and infrastructure companies for explosives inputs, industrial buyers for IPA and acids, and millions of farmers for subsidised and non-subsidised nutrients. Revenue mixes commodity-priced bulk products with brand-led crop solutions; margins swing with gas, ammonia, and propylene costs as well as TAN realisations. Real estate is a small legacy line. Payment cycles blend faster industrial collections with fertiliser working capital tied to subsidy flows and bulk inventory builds.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1979, the company expanded from fertiliser marketing into backward integration at Dahej and Taloja, building nitric acid, TAN, and IPA capacity that shares utilities across segments. FY23 was a peak profit year with PAT about ₹1,221 crore on Screener as spreads were favourable. FY24 normalised sharply to PAT ₹468 crore as bulk chemical margins compressed. FY25 rebounded to PAT ₹945 crore on revenue ₹10,274 crore and OPM near 19%. FY26 consolidated revenue rose to ₹11,506 crore but PAT fell to ₹739 crore as interest, depreciation, and a weak second half offset a spectacular June 2026 quarter (PAT ₹490 crore, OPM 26%). Borrowings stepped up to ₹5,670 crore by March 2026 while capital work in progress reached ₹3,053 crore, signalling an active expansion phase.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line re-accelerated into TTM even as FY26 PAT dipped on cost and timing.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [8676, 10274, 11506, 12104], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers are fragmented across mining, industrial chemicals, and agriculture, which limits single-buyer concentration relative to pure commodity traders. Mining chemicals tie to domestic coal and infrastructure blast demand; bulk chemicals serve paint, pharma, and industrial solvents; crop nutrition depends on monsoon-led farmer offtake and government subsidy mechanics for certain grades. Promoter holding near 46% provides strategic continuity but reduces free float. FII ownership near 10% and rising DII near 15% in June 2026 add institutional liquidity. Integrated plants mean internal transfer pricing between segments matters for reported segment margins, a disclosure gap we flag in section 18.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Bulk and mining chemicals provide volume and utilisation for shared Dahej infrastructure, while crop nutrition delivers brand and farmer touchpoints. Screener premium insights list TAN, IPA, nitric acid, and Croptek volume metrics, but free sources used here do not break segment revenue shares for FY26. Qualitatively, FY26 revenue growth came with higher sales in Jun 2026 (₹3,256 crore quarter) suggesting both fertiliser seasonality and stronger industrial realisations in that window. Specialty nutrition (Smartek, Croptek) is strategically important for margin per tonne but remains smaller than bulk chains in rupees unless management discloses mix. Mix shift toward mining chemicals helps when TAN prices firm; shift toward traded fertiliser compresses OPM.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: PAT volatility exceeded OP as interest and tax swung year to year.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [1287, 1925, 1685, 2016], color: "#1e3a5f" },
      { name: "PAT", values: [468, 945, 739, 985], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Domestic mining and infrastructure capex cycles move TAN demand and pricing. Global and regional IPA supply tightness affects bulk chemical spreads. Natural gas and ammonia costs feed nitric acid economics. Monsoon quality and rabi/kharif sowing patterns drive crop nutrition volumes. Department of Fertilizers policy and subsidy release timing swing working capital. Interest rates matter because borrowings exceeded ₹5,600 crore in March 2026. Deepak-specific forces include Dahej commissioning timelines, propylene linkage for IPA, and Mahadhan retail expansion. Peer multiples in Nifty Chemicals re-rate the stock when investors treat it as a pure chemical name versus a fertiliser marketer.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin peaked near 19% in FY25 before FY26 printed 15% on Screener, with TTM recovering toward 17% aided by Jun 2026. ROCE fell from 25% in FY23 to 11% in FY26 as capital employed rose with CWIP and borrowings. PAT CAGR over three years is negative on Screener headline metrics because FY23 was an exceptional base. The history is cyclical integration, not a steady compounder at current ROE near 11%. Investors should normalise Jun 2026 quarterly PAT when using trailing multiples.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin mean-reverted after FY25 peak; Jun 2026 quarter was an outlier high.",
    ["FY24", "FY25", "FY26", "Jun-26 Q"],
    [{ name: "OPM %", values: [15, 19, 15, 26], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was strong at ₹1,880 crore in FY25 but collapsed to ₹206 crore in FY26 despite ₹1,685 crore operating profit, with free cash flow negative ₹1,363 crore on Screener as investing outflows reached ₹1,559 crore. CFO to operating profit ratio fell to about 28% in FY26, so earnings quality is weak until working capital releases after capex peaks. Inventory days rose toward 79 in FY26 while debtor days were near 74. FY25 had benefited from favourable working capital; FY26 reversed that as expansion consumed cash. Dividend payout near 17% in FY26 signals confidence in long-term cash generation, but near-term conversion is the bear case trigger.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO whipsawed with WC and capex; FY26 was a trough year for conversion.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [493, 732, 1880, 206], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹5,670 crore at March 2026 are material versus reserves ₹6,718 crore and equity capital ₹126 crore, so leverage is the main risk, not insolvency. Interest near ₹353 crore in FY26 already consumes a large slice of operating profit. If Dahej projects delay while CWIP stays above ₹3,000 crore, ROCE could remain near 11% and the stock de-rates from 16× trailing earnings. Screener flags potential interest capitalisation, which would understate current expense until assets commercialise. A simultaneous IPA spread collapse and TAN volume slump would stress covenants before equity is impaired, but dividend and capex would likely pause first.",
  },
  seriesChart(
    "Borrowings vs CWIP (₹ crore, Mar FY26)",
    "Conclusion: Expansion is funded with higher debt and large CWIP, raising execution risk.",
    ["Borrowings", "CWIP"],
    [{ name: "Mar FY26", values: [5670, 3053], color: "#b91c1c" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Executive leadership under the Deepak promoter group emphasises integrated growth at Dahej and farmer-facing brands, with published investor decks on capacity and sustainability. Incentives align with volume and project completion, which helps utilisation but can encourage capex when spreads are mid-cycle. Promoter stability reduces hostile risk. Independent directors and audit committees follow listed company norms. The Mahadhan brand investment supports long-term crop nutrition pricing power if execution continues.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised integrated utilisation across bulk, mining, and crop segments, Dahej expansion, and specialty nutrition growth. FY25 delivered strong OPM and PAT recovery. FY26 missed cash conversion targets even as revenue grew. TAN utilisation improved per curated Q2 FY26 call excerpts. Dahej capex remains pending full commissioning with CWIP rising. Jun 2026 results beat run-rate implied by the weak Dec 2025 and Mar 2026 quarters, creating a debate about sustainable PAT.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: new TAN and acid capacity at Dahej once CWIP converts to fixed assets. Margin: IPA and nitric acid spreads if supply stays tight. Mix: Croptek and Smartek growth through Mahadhan retail. Utilisation: mining capex cycle lifting explosive demand. Cost: gas and ammonia procurement efficiency on integrated plants. These drivers are partially priced at 16.7× TTM earnings, so FY27 must show PAT above ₹900 crore with CFO recovery to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Dahej units commission on schedule, pushing TAN and acid volumes up 15% with stable realisations. IPA spreads widen on global supply disruption. Crop nutrition grows high teens with specialty share rising. Interest plateaus as debt is refinanced at lower rates after assets start. Working capital releases post capex, sending CFO above ₹1,200 crore. FY27 PAT could approach ₹1,280 crore and support a re-rating toward our bull band near ₹1,930 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "IPA prices fall while inventory is high, crushing bulk chemical OPM. TAN demand softens with mining slowdown. Capex overruns keep CWIP elevated and raise depreciation before revenue. Borrowings exceed ₹6,000 crore with interest above ₹400 crore. Jun 2026 margin spike proves non-recurring and PAT reverts toward ₹600 crore run-rate. Equity could compress toward our bear case near ₹702 per share.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to an integrated cyclical chemicals and fertiliser name (13× bear, 17× base, 19× bull), cross-checked with TTM EV/EBITDA on operating profit near ₹2,016 crore. Bear FY27 PAT ₹680 crore implies about ₹702 per share (-46% vs ₹1,301 reference). Base PAT ₹1,050 crore implies about ₹1,415 (+9%). Bull PAT ₹1,280 crore implies about ₹1,930 (+48%). Base-case upside sits below our 15% Buy threshold, so the reference price already embeds a reasonable FY27 recovery unless bull drivers align.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull requires capex and spread wins together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [702, 1415, 1930, 1301], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Jun 2026 dominated TTM; trailing P/E overstates normalised earnings power.",
    ["Dec-25", "Mar-26", "Jun-26"],
    [{ name: "PAT", values: [141, 139, 490], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings remain cyclical versus FY23 peak; FY26 was a down year on reported PAT.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [1221, 468, 945, 739], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Dahej and Taloja commissioning dates in exchange filings. Monthly TAN and IPA realisation commentary in investor presentations. CWIP roll-forward versus borrowings each quarter. CFO and inventory days after kharif season. Segment revenue mix when FY26 annual report publishes. Q2 FY27 PAT normalisation after Jun 2026 spike. BSE/NSE concall transcripts for verbatim volume KMT guidance. Any change in fertiliser subsidy settlement timelines affecting Mahadhan working capital.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,301 reference. Base-case target near ₹1,415 offers about 9% upside, below our 15% Buy hurdle, while cyclical optionality and integration keep the name off Avoid unless leverage trends worsen. Upgrade to Buy if two consecutive quarters show consolidated OPM above 17% with CFO above ₹400 crore and FY27 PAT run-rate above ₹280 crore per quarter at normal tax rates, lifting base PAT toward ₹1,150 crore and target above ₹1,500. Downgrade to Avoid if borrowings exceed ₹6,500 crore without commercial production from major CWIP, or if TTM PAT falls below ₹750 crore with CFO below ₹300 crore for a full year.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for bulk chemicals, mining chemicals, and crop nutrition are not in the free sources used. TAN, IPA, and Croptek volume KMT series on Screener require premium login. Exact interest capitalisation amounts need note-level reconciliation. Internal transfer pricing between Dahej units is undisclosed. Real estate contribution to FY26 PAT is not modeled separately. Update bear, base, and bull when FY26 annual report segment notes and capacity tables publish.",
  },
];
