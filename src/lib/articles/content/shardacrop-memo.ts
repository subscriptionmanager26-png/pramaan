import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const shardacropMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Sharda Cropchem Ltd (NSE: SHARDACROP, BSE: 538666) is a promoter-led Indian export agrochemicals platform that builds product dossiers, secures registrations abroad, and trades technical grade actives and formulations plus a smaller non-agrochemical book (conveyor belts, industrial chemicals). Promoter holding was about 74.8% as of June 2026 on Screener, with FIIs near 3.1% and DIIs near 9.2%. The stock is in Nifty Total Market and BSE Commodities indices. At a reference price of ₹709 on 1 October 2026, market capitalisation is about ₹6,398 crore on roughly 9.02 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 10.2× on FY26 earnings, with book value about ₹348 per share and return on capital employed near 30.2%. The quote sits well below the 52-week high of ₹1,298 and near the ₹698 low, reflecting cyclical agchem sentiment even as FY26 earnings rebounded.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Sharda Cropchem earns by exporting agrochemical products registered in overseas markets, sourcing finished formulations and technicals from third-party manufacturers under an asset-light model. Revenue is recognised on shipment; pricing mixes herbicides, fungicides, and insecticides with geography-specific margins. Payment follows export distributor credit terms, so receivable days run high versus domestic branded agchem peers. Non-agrochemical trading adds volume with lower strategic focus. The listed story is registration pipeline depth, gross margin through commodity cycles, working capital discipline, and a debt-free balance sheet with liquid investments that flatter other income in strong years.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Sharda built a global registration library over two decades, peaking in FY23 before a FY24 collapse when Chinese generic dumping and post-Covid destocking cut revenue to ₹3,163 crore and PAT to ₹32 crore. FY25 and FY26 staged a sharp recovery: revenue reached ₹4,320 crore and ₹5,268 crore with PAT ₹304 crore and ₹681 crore as operating profit margin moved from 10% to 20%. Five-year profit CAGR near 24% on Screener contrasts with a share price still below prior peaks, so the market prices the next downturn more heavily than the registration moat.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY24 trough; FY26 above FY22 scale.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [3580, 4045, 3163, 4320, 5268], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is overseas distributors and retailers across Europe, NAFTA, Latin America, and rest of world; management on recent calls discusses region-wise gross margins rather than naming single customers. Concentration risk sits at the geography and molecule level when herbicide prices swing. Promoter control near 75% aligns registration spending and dividend policy with the Bubna family. Public float near 25% is enough for FII participation but thin enough that global agchem indices move the quote. Non-agrochemical buyers diversify end markets slightly but remain export-led with similar credit profiles.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Agrochemicals dominate revenue: technical grade actives and formulations across fungicides, herbicides, and insecticides registered for resale. Q1 FY27 commentary cited agrochemical revenue up 8% year on year versus non-agrochemical up 15%, with gross margin 36.7% on favourable mix even as Europe revenue softened. Management tracks more than three thousand active registrations with over one thousand applications pending, which supports future SKU breadth without owning large manufacturing campuses. Mix shift toward higher-margin Europe and NAFTA pockets versus LATAM volatility is the margin lever investors watch each quarter.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 OPM near 20%; Q1 FY27 at 17%.",
    ["FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [10, 14, 20, 17], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT ₹681 cr; TTM easing on seasonality.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [32, 304, 681], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic agrochemical prices and Chinese supply set import parity and distributor willingness to restock; FY24 showed how fast profits can collapse when both fall together. INR versus USD and EUR affects realised export prices and working capital. Europe distributor inventory cycles move quarterly revenue independently of Indian monsoon. Regulatory renewals and ban lists in EU and LATAM can delay shipments for registered molecules. Peer multiples for PI Industries, UPL, and Sumitomo Chemical India anchor sector sentiment even though Sharda is export registration led rather than domestic branded. Debtor days near 166 on Screener amplify working capital swings in risk-off periods.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit reached about ₹1,059 crore in FY26 on revenue ₹5,268 crore, keeping OPM near 20%. Other income was about ₹142 crore in FY26, adding stability below the line but not the core moat. Depreciation rose with fixed assets and capital work in progress near ₹1,236 crore combined Mar FY26, yet capital intensity stays lower than integrated manufacturers. ROCE near 30.2% on Screener in Jun 2026 reflects the rebound from FY24 trough ROCE near 4%, supporting the view that normalized earnings power exceeds the depressed FY24 year but remains cyclical.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: FY26 spread widened on tax and other income normalisation.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [303, 615, 1059], color: "#1e3a5f" },
      { name: "PAT", values: [32, 304, 681], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹341 crore in FY24, ₹604 crore in FY25, and ₹656 crore in FY26 on Screener cash flow tables. CFO to operating profit was near 62% in FY26, acceptable but capped by export receivables. Free cash flow was about ₹158 crore in FY26 after investing outflows for fixed assets and investments. Until CFO stays above ₹700 crore through a weak Europe quarter, headline PAT can overstate near-term distributable cash because debtors rebuild when distributors restock.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO recovered with revenue; still debtor sensitive.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [341, 604, 656], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days (consolidated, Screener)",
    "Conclusion: Near 166 days FY26; export credit terms dominate.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Debtor days", values: [173, 165, 166], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Sharda Cropchem reported zero borrowings Mar FY26 with liquid investments and cash about ₹767 crore as of June 2026 per the Q1 FY27 call, so refinancing risk is minimal. Liquidity stress would require simultaneous revenue collapse and receivable balloon, forcing working capital draws that history suggests promoters would cover with investments before leverage returns. The main balance sheet sensitivity is mark-to-market on investments and FX on receivables, not solvency, unless management pursued debt-funded acquisitions, which the asset-light model has avoided.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Bubna promoter group holds about 75% and has led the registration-led export strategy for decades. Dividend payout averaged near 44% over five years on Screener, signalling willingness to return cash when PAT rebounds. Public float near 25% gives institutions visibility, yet FII ownership in low single digits can amplify volatility when global agchem multiples compress. Incentive alignment looks reasonable if management prioritises registration depth and cash conversion over reckless volume in weak pricing environments.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised FY25 recovery toward pre-FY24 scale after the agrochemical downcycle and delivered with FY25 PAT ₹304 crore and FY26 PAT ₹681 crore. FY27 guidance calls for ten to fifteen percent revenue growth with five to ten percent volume growth; Q1 FY27 revenue up 9% to ₹1,074 crore is on track but Europe volume softness keeps the promise partial until restocking normalises. Registration targets above three thousand active with more than one thousand pending were met on the Jul 2026 call. Working capital improvement of ten days to 88 in Q1 FY27 partially met efficiency goals while debtor days remain structurally high.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Conversion of pending registrations into sellable SKUs across Europe and LATAM is the first lever. Second is volume recovery in Europe as distributor inventories normalise after soft Q1 FY27 revenue there. Third is pricing stability after the FY24 collapse, which supports gross margin near 37% if Chinese oversupply stays disciplined. Fourth is non-agrochemical export growth, which ran 15% in Q1 FY27 but carries lower strategic weight. Fifth is reinvestment of free cash into dossiers without leverage. None of these require equity dilution given the debt-free profile.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Europe volumes rebound high single digits with gross margin staying above 44% as cited on the Q1 FY27 call. LATAM margins recover from Q1 compression while NAFTA holds above 32% gross margin. FY27 revenue growth hits the top of the 10 to 15 percent guidance band with OPM above 21%. Net CFO exceeds ₹750 crore as working capital days fall sustainably below 90. ROCE stays above 28% and the market re-rates toward 13× forward earnings. FY27 PAT could approach ₹780 crore and support our bull band near ₹1,125 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another global agchem price war compresses gross margin toward 32% and OPM toward 14%. Europe restocking delays repeat FY24-style quarterly losses in weak seasons. Debtor days rise above 180 with CFO below ₹450 crore. FY27 PAT could fall toward ₹480 crore and equity toward our bear case near ₹479 per share at 9× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a cyclical export registration platform (9× bear, 11× base, 13× bull), cross-checked with FY26 operating profit near ₹1,059 crore at 8× EV/EBITDA less net cash near ₹760 crore implying about ₹854 per share on operating earnings before cyclical discount. Bear FY27 PAT ₹480 crore implies about ₹479 per share (-32% vs ₹709 reference). Base PAT ₹650 crore implies about ₹792 (+12%). Bull PAT ₹780 crore implies about ₹1,125 (+59%). Base case does not clear the 15% upside hurdle versus reference at a 10.2× trailing multiple.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base near ₹792; below 15% Buy hurdle at ₹709.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [479, 792, 1125, 709], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE near 30% FY26 after FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [4, 16, 30.2], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and region-wise gross margin on BSE/NSE results and earnings calls. Registration count and pending pipeline updates in annual reports. Europe distributor restocking commentary each quarter. Global agrochemical price indices and Chinese export behaviour. Debtor, inventory, and payable days on Screener versus management working capital day targets. Liquid investment balance and other income. Promoter holding steady near 75%. Dividend declarations relative to PAT. LATAM and NAFTA volume trends when herbicide pricing moves. Non-agrochemical segment growth and margin disclosure.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹709 reference. Base-case target near ₹792 per share offers about 12% upside, below the 15% Buy threshold while trailing P/E near 10.2× already embeds cyclical caution after FY26 recovery. Upgrade toward Buy if two consecutive quarters show revenue above ₹1,200 crore with OPM above 20%, Europe volumes inflect positive, and base FY27 PAT revised above ₹700 crore with target above ₹815 (+15%). Downgrade toward Avoid if FY27 revenue growth falls below 5% with OPM below 15%, gross margin compresses toward 32%, and PAT trends toward ₹480 crore with CFO below ₹450 crore. Maintain Neutral if registration pipeline expands but debtor days stay above 160 and the stock re-rates above 12× forward earnings without volume confirmation.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact revenue share by herbicide, fungicide, and insecticide requires annual report segment notes not yet ingested line by line. Customer and distributor concentration by country is not broken out in free sources used. Screener insight fields for registration counts by year are login-gated beyond management call disclosures. Non-agrochemical margin contribution is not modelled separately. Update bear, base, and bull when FY26 annual report geographic segment and related-party notes publish.",
  },
];
