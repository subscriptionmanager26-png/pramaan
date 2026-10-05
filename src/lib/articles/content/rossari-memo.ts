import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const rossariMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Rossari Biotech Ltd (NSE: ROSSARI, BSE: 543213) manufactures specialty chemicals across Home, Personal and Performance Chemicals (HPPC), textile specialty chemicals (TSC), and animal health and nutrition (AHN), with more than four thousand two hundred eighty products from seven Gujarat units and exports to fifty plus countries. Promoter holding was about 68.1% as of June 2026 on Screener, with FIIs near 2.0% and DIIs near 14.6%. The stock is in BSE 1000 and BSE Commodities. At a reference price of ₹428 on 1 October 2026, market capitalisation is about ₹2,368 crore on roughly 5.53 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 15.7 on TTM earnings per share about ₹27.22, with book value about ₹241 per share and return on capital employed near 13.3%. The quote sits below the 52-week high of ₹691 and above the ₹373 low after a one-year price fall near thirty-four percent even as revenue and TTM profit after tax kept growing.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Rossari earns margin on formulation and performance chemicals sold to FMCG, textile, agro, oil and gas, and institutional customers, plus animal nutrition products through distributors. Revenue is recognised largely on dispatch; ethoxylation and surfactant chains tie margins to ethylene oxide availability and benzene-linked feedstocks. Payment cycles run through debtor days near eighty-five Mar FY26 and inventory near eighty-eight days, so net cash from operations can lag operating profit during capacity ramps, as FY26 demonstrated when profit after tax rose but cash from operations fell to ₹65 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Rossari listed in 2021 after scaling from a 2003 start into one of India’s largest textile chemical platforms, then diversified into HPPC and AHN. Consolidated revenue jumped from ₹709 crore in FY21 to ₹1,656 crore in FY23 after acquisitions and organic growth, then reached ₹2,396 crore in FY26 with TTM sales near ₹2,550 crore. Operating profit margin peaked near seventeen percent in FY21 before compressing toward twelve percent in FY26 as ethylene oxide rationing, institutional cleaning losses, and capex depreciation weighed. Reported profit after tax moved from ₹80 crore in FY21 to ₹149 crore in FY26 with TTM profit after tax near ₹151 crore. Borrowings rose from ₹218 crore Mar FY25 to ₹436 crore Mar FY26 while capital work in progress reached ₹173 crore, signalling an active expansion phase at Unitop and other sites.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Steady double-digit growth through FY26.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1656, 1831, 2080, 2396, 2550], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers span FMCG multinationals, textile mills, agrochemical formulators, oilfield service companies, and institutional cleaning channels, served through four hundred plus distributors per company materials. Screener premium gates exact customer counts and export share time series; free filings describe broad diversification across HPPC, TSC, and AHN without naming top accounts each quarter. Promoter control above sixty-eight percent supports long-cycle capex, while FII holding near two percent leaves re-rating tied to margin proof rather than passive flows. Concentration risk is moderate: a prolonged textile slowdown or EO shortage can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "HPPC has become the largest growth engine, with FY25 MD&A citing double-digit growth even when TSC softened. AHN grew faster in several FY26 quarters on animal nutrition formulations. TSC remains cyclical with export and domestic textile demand. Institutional and B2C cleaning verticals dilute consolidated margin despite management efforts to exit low-margin SKUs. Exact segment revenue splits require investor presentations or premium datasets; investors should treat mix shift toward HPPC and pharma-linked categories as the central bull case for margin recovery.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Compression from FY24 toward twelve percent TTM.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [13, 14, 13, 12, 12], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: Gradual PAT growth despite margin pressure.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [107, 131, 136, 149, 151], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Ethylene oxide supply and pricing dominate surfactant economics; management flagged rationing through FY26 and guided FY27 EBITDA margin in a twelve to thirteen percent band until domestic EO capacity eases. Textile export demand and global tariff uncertainty affect TSC realisations. Crude-linked and benzene-linked feedstock volatility passes through with a lag. Interest rates matter as borrowings doubled year on year Mar FY26. Peer multiples for specialty chemical names with similar HPPC exposure anchor sentiment. The one-year share price fall despite revenue growth shows the market prioritising margin and cash conversion over top-line alone.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compounded near twenty-eight percent on Screener while profit compounded near eleven percent, illustrating operating leverage that worked on the way up and stalled as margins normalised. FY24 operating profit near ₹250 crore on ₹1,831 crore revenue was the last fourteen percent OPM print. FY26 operating profit near ₹286 crore on ₹2,396 crore revenue kept OPM at twelve percent. Return on capital employed fell from eighteen percent FY24 to thirteen percent FY26 as assets and debt expanded. Dividend payout stayed near two percent, so reinvestment drives the story.",
  },
  seriesChart(
    "Operating profit (₹ crore, consolidated)",
    "Conclusion: OP grows slower than revenue as OPM compresses.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OP", values: [223, 250, 265, 286, 299], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash conversion is the key bear risk. FY25 net cash from operations was strong at ₹137 crore on operating profit ₹265 crore, but FY26 net cash from operations fell to ₹65 crore while operating profit rose to ₹286 crore and free cash flow was negative ₹175 crore on Screener. Inventory days near eighty-eight and debtor days near eighty-five explain part of the gap; capex and investing outflows near ₹220 crore absorbed the rest. Until CFO re-tests at least seventy percent of operating profit with borrowings stabilising, the market can reasonably cap the multiple even if profit after tax prints new highs.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO weak versus PAT growth.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [43, 137, 65], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹436 crore Mar FY26 against reserves ₹1,322 crore are manageable but rising quickly from ₹218 crore a year earlier. Interest expense trended up through FY26 quarters, reaching ₹11 crore in the Jun 2026 quarter. If EO stress forces inventory builds while textile customers delay payments, net debt could exceed ₹500 crore before Unitop utilisation contributes cash. Promoter holding stability and investment-grade internal targets reduce tail risk, but this is not a net-cash balance sheet like some agchem peers in this repo.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage step-up with capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [119, 218, 436], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Founders Sunil and Sanjay Ramniklal Chari lead strategy with long tenure since incorporation. Promoter holding near sixty-eight percent aligns capex and product registration investments with insider ownership, while low dividend payout keeps capital inside the growth plan. Employee costs rose with new labour code compliance per FY26 commentary, a near-term drag that should fade if revenue per employee improves with automation at Unitop.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised FY25 revenue growth, Unitop ramp, margin stability in a low-teens band, and improved cash conversion after FY24. FY25 revenue beat at ₹2,080 crore but FY26 cash conversion missed as CFO fell despite PAT growth. Unitop utilisation remains partial with ninety percent still guided for FY27. Q1 FY27 revenue near ₹697 crore and operating profit margin near twelve percent support the fifteen percent FY27 revenue growth outlook, but margin expansion toward fifteen percent remains pending. The dossier guidance log scores cash conversion as missed and utilisation as partial.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Volume growth in HPPC tied to FMCG and pharma customers, export expansion through Thailand operations, and AHN registrations drive the revenue bridge. Unitop ethoxylation moving from low-teens toward eighty percent plus utilisation is the main margin lever. Exiting loss-making B2C SKUs and institutional cleaning sub-scale lines would lift consolidated EBITDA toward core B2B mid-teens margins cited on calls. Saudi greenfield evaluation is optionality, not in the base case. Revenue CAGR near fifteen percent with flat twelve percent OPM already yields profit after tax above ₹170 crore run-rate if delivered.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees EO availability normalise, Unitop utilisation above eighty percent by H2 FY27, and institutional losses trimmed, lifting OPM toward fourteen percent on revenue above ₹2,850 crore. Profit after tax near ₹200 crore at seventeen times multiple re-rates the stock toward ₹615 per share as ROCE returns toward mid-teens. Export wins in Southeast Asia after Thailand plant stabilisation could add surprise upside.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps OPM near ten percent on EO rationing and textile weakness, leaving profit after tax near ₹130 crore at thirteen times multiple and ₹306 per share, down roughly twenty-nine percent from reference. Prolonged negative free cash flow with borrowings above ₹500 crore would force equity investors to price in a dilution or dividend cut risk despite promoter control.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a diversified specialty chemicals platform (13× bear, 16× base, 17× bull), cross-checked with TTM operating profit near ₹299 crore at 8× EV/EBITDA less net debt near ₹400 crore implying equity near ₹360 per share unless utilisation ramp lifts ROCE. Bear FY27 profit after tax ₹130 crore implies about ₹306 per share (-29% vs ₹428 reference). Base profit after tax ₹175 crore implies about ₹506 (+18%). Bull profit after tax ₹200 crore implies about ₹615 (+44%). Base case clears the fifteen percent upside hurdle versus reference if management delivers guided revenue growth without further margin erosion.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [306, 506, 615, 428], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [580, 544, 586, 582, 685, 697], color: "#c27803" }],
  ),
  seriesChart(
    "Return on capital employed %",
    "Conclusion: ROCE down as capex lands.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [18, 16, 13], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Unitop utilisation percentages and EO supply commentary on concalls. Segment HPPC versus TSC versus AHN growth rates when investor decks publish. Borrowings, interest, and CFO versus capex each quarter. Thailand plant revenue contribution and Saudi project announcements. Institutional and B2C exit milestones. Dividend policy and FII holding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹428 reference. Base-case target near ₹506 per share implies about eighteen percent upside with confirming fifteen percent FY27 revenue trajectory, stable twelve percent operating profit margin, and net cash from operations recovery above ₹100 crore while borrowings plateau. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above thirteen percent with Unitop utilisation above fifty percent and profit after tax run-rate exceeds ₹45 crore per quarter excluding large one-off other income. Downgrade toward Neutral if operating profit margin falls below eleven percent with borrowings above ₹500 crore and TTM net cash from operations stays below ₹80 crore. Downgrade toward Avoid if EO rationing forces inventory write-downs or interest coverage falls below four times on a trailing basis.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. HPPC, TSC, and AHN revenue splits and export share are login-gated on Screener. Exact Unitop utilisation percentages and customer qualification lists need investor presentation updates. Saudi greenfield economics and Thailand plant profit contribution are not in free filings. Update bear, base, and bull when segment EBIT and EO pass-through disclosures publish.",
  },
];
