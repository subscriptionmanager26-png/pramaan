import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const bestagroMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Best Agrolife Ltd (NSE: BESTAGRO, BSE: 539660) is an integrated Indian agrochemical manufacturer ranked among the top fifteen domestic players, producing technical grade actives and more than five hundred formulations for insecticides, herbicides, fungicides, and plant growth regulators. Promoter holding was about 50.4% as of June 2026 on Screener, with FIIs near 5.6% and a broad public float near 42%. The stock trades in BSE Commodities. At a reference price of ₹17.5 on 1 October 2026, market capitalisation is about ₹620 crore on roughly 35 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 21 on TTM earnings per share of ₹0.84, with book value about ₹21.7 per share and return on capital employed near 5.1%. The quote sits well below the 52-week high of ₹34.4 and above the ₹12.3 low, reflecting FY26 earnings collapse before Q1 FY27 margin rebound.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Best Agrolife earns through a plant-to-port model: in-house technical manufacturing feeds formulations and direct sales to blue-chip domestic companies and multinational customers, plus traded volumes when margin warrants. Revenue is recognised on dispatch; quarterly operating profit margin can swing from twenty percent to negative teens when low-margin traded inventory is marked down, as seen in Mar 2025 and Mar 2026 quarters on Screener. Payment cycles stretch through debtor days near 142 Mar FY26, so net cash from operations can exceed reported profit after tax in recovery years (FY25 CFO near ₹228 crore) while PAT collapses in down quarters.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "The Sahyog Multibase to Best Agrolife journey accelerated after the 2018 amalgamation with Best Agrochem, scaling consolidated revenue from near ₹905 crore in FY21 to ₹1,746 crore in FY23 with operating profit margin near eighteen percent and reported profit after tax near ₹192 crore. Leverage and working capital built through FY24 as borrowings peaked near ₹637 crore. FY25 revenue near ₹1,814 crore still carried PAT near ₹70 crore, but FY26 revenue fell toward ₹1,257 crore with PAT near ₹9 crore as several quarters printed losses at the operating line. TTM revenue near ₹1,272 crore and TTM PAT near ₹30 crore recovered partly on Q1 FY27 revenue near ₹396 crore with operating profit margin near twenty percent, yet return on capital employed remains far below the FY23 peak.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY23 peak; FY26 trough; TTM stabilising.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1746, 1873, 1814, 1257, 1272], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers include large domestic formulators and multinational buyers sourcing technical actives and formulations; management cites P2P relationships on the corporate website without naming top accounts in free quarterly filings. Concentration risk sits in traded SKU volumes and a handful of legacy molecules when prices correct. Promoter holding near fifty percent aligns strategy with the founding group while still leaving a liquid public register above sixty thousand shareholders Jun 2026. Delayed export or domestic channel payments show up quickly in debtor days above one hundred forty, which is higher than many formulation peers.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans more than seventy in-house formulations and over one hundred twenty technical manufacturing licenses, including brands such as Ronfen, Citigen, and Azaro per company materials. Q1 FY27 curated commentary highlights richer in-house technical mix lifting operating profit margin, versus FY26 quarters where traded volumes drove negative margins. Patented product share and exact technical versus formulation revenue splits are not broken out each quarter in free sources, so investors should treat mix as a key swing factor behind volatile quarterly profit after tax.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY23 peak; FY26 trough; Q1 FY27 rebound.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [18, 12, 11, 8, 20], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY23 peak; FY26 trough; TTM partial recovery.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [192, 106, 70, 9, 30], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic agrochemical prices, Chinese supply, and customer inventory cycles move realisations for technical actives Best Agrolife manufactures. Domestic monsoon and channel stocking affect formulation offtake. INR versus USD affects export contracts and import parity on intermediates. Interest rates matter because borrowings near ₹442 crore Mar FY26 consume near ₹55 crore interest TTM with low reported profit after tax in FY26. Small-cap liquidity and prior year promoter restructuring history can amplify moves when quarterly margins flip sign. Peer multiples for Bharat Rasayan or Sharda Cropchem anchor sentiment even though Best Agrolife trades below book value at the reference price.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit peaked near ₹314 crore in FY23 on revenue near ₹1,746 crore, keeping OPM near eighteen percent. FY24 and FY25 still delivered OPM near twelve and eleven percent respectively, but FY26 operating profit fell toward ₹100 crore on lower revenue, implying OPM near eight percent before TTM recovery toward ten percent on stronger recent quarters. Reported profit after tax fell from ₹192 crore in FY23 to ₹9 crore in FY26, a sharper drop than revenue alone because finance costs and tax volatility on loss quarters matter. Book value per share near ₹21.7 exceeds the ₹17.5 reference, yet return on capital employed near five percent tells investors capital is not yet earning its cost after the downcycle.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Operating line recovered before PAT on interest and tax.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [
      { name: "Operating profit", values: [226, 200, 100, 132], color: "#1e3a5f" },
      { name: "PAT", values: [106, 70, 9, 30], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was negative near ₹180 crore in FY23 during working capital build, then positive ₹36 crore in FY24, ₹228 crore in FY25, and ₹97 crore in FY26 on Screener. FY25 cash recovery preceded the FY26 earnings trough, showing collections and inventory release can outpace accounting PAT when channels destock. Free cash flow turned positive near ₹91 crore in FY26 after deeply negative years during capex and receivable build. Sustainable upgrade requires CFO above ₹80 crore while PAT exceeds ₹40 crore annually, not just one strong cash year paired with weak earnings.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY25 spike; FY26 still positive.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [-180, 36, 228, 97], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days (consolidated, Screener)",
    "Conclusion: Extended to 142 days Mar FY26.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Debtor days", values: [73, 91, 113, 142], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹442 crore against FY26 profit after tax near ₹9 crore imply thin interest coverage when operating profit margin compresses again. A return of negative operating quarters like Mar 2025 or Mar 2026 would stress covenants if debtor days stay above one hundred forty. Inventory days near five hundred sixty Mar FY26 keep working capital heavy even when payables extend. Equity issuance in FY26 raised share count toward thirty-five crore, diluting per-share metrics after prior peak earnings. Environmental and safety compliance on multi-product chemical sites remains ongoing spend.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Promoters near fifty percent control provide strategic continuity through the integrated technical expansion, while public shareholders bear volatility from traded SKU strategy. Management emphasises registrations, patents, and P2P multinational supply on investor materials, aligning with long-term technical depth. Dividend payout near forty percent of profits in FY26 looks generous relative to low earnings, which can signal confidence or mask limited reinvestment options; either way, incentives depend on restoring ROCE toward double digits. Governance relies on board oversight and exchange disclosures rather than high institutional ownership below six percent FII.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 messaging aimed to stabilise revenue after FY24 peak while funding technical capacity; revenue held near ₹1,814 crore but profit after tax fell toward ₹70 crore, partially missing the FY23 earnings benchmark. FY26 cash conversion improved with net CFO near ₹97 crore even as reported profit after tax collapsed, a mixed outcome. Q1 FY27 operating profit margin near twenty percent beat recent trough quarters but follows a weak base. FY27 return on capital employed targets remain pending with ROCE near five percent TTM Jun 2026.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is revenue stabilisation above FY26 toward ₹1,450 crore in FY27 on domestic and export technical demand. Second is sustaining double-digit operating profit margin by shifting mix away from loss-making traded volumes. Third is cutting debtor days toward one hundred twenty to release cash and reduce borrowings. Fourth is monetising additional patented and off-patent molecules through the five hundred plus formulation platform. Fifth is ROCE recovery above eight percent so earnings justify re-rating from below-book market pricing.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Technical export contracts accelerate; OPM holds near thirteen percent on revenue above ₹1,600 crore. Borrowings fall below ₹400 crore with net CFO above ₹120 crore. FY27 profit after tax approaches ₹62 crore and our bull band near ₹35 per share (+103% vs ₹17.5 reference) at 20× forward earnings, though execution risk remains high given prior loss quarters.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Traded inventory marks return; OPM falls toward seven percent on flat revenue. Debtor days stay above one hundred forty with net CFO below ₹40 crore. FY27 profit after tax slips toward ₹18 crore and equity re-rates toward our bear case near ₹7 per share (-58% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples for a volatile integrated agchem name (14× bear, 18× base, 20× bull), cross-checked with book value near ₹21.7 per share versus ₹17.5 reference (about 0.81× price-to-book). Bear FY27 PAT ₹18 crore implies about ₹7 per share (-58%). Base PAT ₹42 crore implies about ₹22 (+24%). Bull PAT ₹62 crore implies about ₹35 (+103%). Base case clears the fifteen percent upside hurdle required for a Buy at the reference price, contingent on proving full-year margins after Q1 FY27.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base above reference; bear deeply below.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [7, 22, 35, 17.5], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Q1 FY27 near ₹396 cr vs weak prior-year quarters.",
    ["Jun-24", "Sep-24", "Dec-24", "Mar-25", "Jun-25", "Jun-26"],
    [{ name: "Sales", values: [519, 747, 274, 274, 381, 396], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with technical versus traded mix commentary. Debtor and inventory days each quarter versus net CFO. Borrowings and interest coverage on Screener. New patent grants and formulation registration counts in annual reports. Promoter holding changes near fifty percent. Any equity raise or warrant conversion affecting the thirty-five crore share base. Peer re-rating in technical agchem names. Dividend policy when PAT normalises above ₹40 crore.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹17.5 reference. Base-case target near ₹22 per share implies about twenty-four percent upside, meeting our Buy threshold if FY27 delivers PAT near ₹42 crore with OPM near ten percent. Upgrade conviction if two consecutive quarters show revenue above ₹380 crore with OPM above twelve percent, debtor days falling below one hundred thirty, and net CFO above ₹25 crore per quarter, lifting base FY27 PAT toward ₹50 crore and target above ₹26. Downgrade toward Neutral or Avoid if FY27 prints another operating loss quarter with borrowings rising above ₹480 crore and ROCE stuck below five percent, cutting fair value toward our bear band near ₹7 per share.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact technical versus formulation revenue and patented product share require annual report tables not ingested line by line. Customer concentration for P2P multinational contracts is not disclosed in free quarterly sources. Segment EBIT for export versus domestic is not modelled separately. Related-party trading volume is not load-bearing in this memo. Update bear, base, and bull when FY26 annual report publishes debtor ageing and debt maturity schedules.",
  },
];
