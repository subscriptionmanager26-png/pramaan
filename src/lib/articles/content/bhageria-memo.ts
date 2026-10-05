import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const bhageriaMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Bhageria Industries Ltd (NSE: BHAGERIA, BSE: 530661) manufactures dyes and dye intermediates, agrochemical formulations, and operates solar power generation plus EPC contracts from ISO-certified sites in Maharashtra. Promoter holding was about 71.8% as of June 2026 on Screener, with public float near twenty-eight percent and negligible FII near 0.05%. At a reference price of ₹382 on 1 October 2026, market capitalisation is about ₹1,667 crore on roughly 4.37 crore shares (face value ₹5). Trailing consolidated price-to-earnings is near 24 on earnings per share about ₹15.79, with book value about ₹137 per share and return on capital employed near 9.4%. The quote sits below the 52-week high of ₹425 and well above the ₹128 low after a one-year price rise near 116% as revenue and quarterly margins re-accelerated.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Bhageria earns margin on chemical manufacturing and trading: reactive dyes and intermediates sold to textile and industrial customers, plus crop protection formulations and technicals that ride India agchem demand. Solar assets generate captive power savings and third-party EPC fees when contracts bill. Payment follows chemical industry norms with debtor days near sixty-six days Mar FY26, improved from prior peaks. Revenue recognition mixes ex-Tarapur shipments, formulation sales, and project milestones on solar EPC.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Bhageria grew from a dyes base into a diversified chemicals and solar platform. Consolidated revenue fell from about ₹501 crore in FY23 to ₹494 crore in FY24 as margins compressed, then recovered to ₹595 crore in FY25 and ₹874 crore in FY26 with TTM sales near ₹1,003 crore on Screener. Operating profit margin troughed near nine percent in FY24 before FY25 and FY26 expansion. Reported profit after tax moved from ₹15 crore in FY23 to ₹44 crore in FY26 with TTM profit after tax near ₹68 crore after a strong Jun 2026 quarter. Fixed assets reached about ₹384 crore Mar FY26 while capital work in progress jumped toward ₹117 crore, signalling an active capex phase.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY26 and TTM step-change.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [501, 494, 595, 874, 1003], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers span textile mills, dye traders, agrochemical dealers, and solar EPC counterparties. Screener premium insights gate exact top-ten customer concentration; free filings describe export and domestic mix without naming accounts. Promoter control above seventy percent supports long-term capex, while the one-year share price rise increases scrutiny on related-party and dividend policy. Concentration risk is moderate: a weak dye intermediate cycle or delayed solar billing can still move quarterly operating profit by several crore rupees.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio blends legacy dyes and intermediates with faster-growing agrochemical formulations and solar generation or EPC. Exact segment percentages require the annual report; quarterly commentary and revenue acceleration in FY26 imply agchem and solar contributed more than in the FY24 trough. Q1 FY27 consolidated revenue near ₹286 crore with operating profit margin near fifteen percent suggests richer mix or volume leverage versus the ten percent FY26 full-year average. Investors should track whether mid-teens margin in Jun 2026 normalises or reflects one-off other income.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY24 trough; Q1 FY27 spike.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [11, 9, 14, 10, 15], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM lifted by FY26 and Q1 FY27.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [15, 19, 39, 44, 68], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global dye intermediate prices, cotton and textile demand, and domestic agchem channel inventory affect volumes at Tarapur. Solar policy, module costs, and EPC competition influence project margins. Raw material inflation without pass-through can compress operating profit margin quickly, as seen in FY24. The stock re-rated with TTM revenue growth near fifty-seven percent; any slowdown or margin mean reversion could unwind part of the one-year gain.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year compounded sales growth is near seventeen percent on Screener with three-year profit growth near forty-five percent after the FY24 reset. Return on equity recovered toward seven percent last year but remains below historical peaks. Inventory days fell toward thirty-two Mar FY26 while debtor days improved to sixty-six, shortening the cash conversion cycle to about fifty-six days. Dividend payout near twenty-four percent FY26 rewards shareholders while capex absorbs cash.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO scaled with revenue in FY26.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [28, 23, 49, 99], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Mostly yes in FY26: net cash from operations was about ₹99 crore with CFO to operating profit near 128% on Screener, while free cash flow was about negative ₹45 crore after investing outflows near ₹142 crore tied to capex and CWIP. Profit after tax and other income can diverge quarter to quarter; Jun 2026 other income near ₹16 crore on the quarterly table boosted profit after tax. Until capex peaks, investors should weight CFO and project completion over trailing price-to-earnings alone.",
  },
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings rose to about ₹109 crore Mar FY26 from near ₹46 crore a year earlier while CWIP stayed elevated. Interest near ₹3 crore annually is still modest relative to operating profit, but further debt-funded expansion without CFO support would stress return on capital employed. Contingent liabilities and related-party exposures need the annual report note. A prolonged dye down-cycle with solar EPC delays could trap working capital despite improved debtor metrics.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: FY26 leverage step-up with capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [47, 46, 109], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Bhageria promoter group retains majority control near seventy-two percent, aligning leadership with long-term chemical and solar investments. Dividend payout near twenty percent over recent years signals some cash return while growth capex continues. Free sources do not show large promoter selling in the Jun 2026 pattern. Alignment improves if return on capital employed sustains above ten percent after CWIP commissions without repeated equity issuance.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY26 delivered revenue near ₹874 crore and profit after tax ₹44 crore, beating the prior year on scale. Working capital improvement targets largely succeeded with debtor days near sixty-six. Capex funding was only partial success: borrowings doubled while free cash flow turned negative. Q1 FY27 beat on revenue near ₹286 crore and operating profit margin near fifteen percent, though sustainability through the monsoon and festival quarters still unproven.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Growth depends on agrochemical formulation penetration, dyes intermediate export recovery, and solar EPC or captive megawatt additions converting CWIP to earnings. Operating leverage from higher Tarapur throughput can lift margin toward twelve to fourteen percent if raw materials cooperate. Commissioning projects without further debt spikes would lift return on capital employed. Any new agchem technical or registration expands addressable domestic share.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sustains mid-teens operating profit margin on revenue above ₹1,100 crore, with profit after tax near ₹98 crore as solar and agchem mix rises and other income normalises lower but core EBIT grows. Return on capital employed could reach twelve percent, supporting a price-to-earnings multiple near twenty-four times.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case sees revenue stall near ₹950 crore with operating profit margin back toward nine percent on dye pricing pressure, leaving profit after tax near ₹55 crore at a seventeen times multiple. Delayed CWIP or higher borrowings above ₹130 crore would cap re-rating even if revenue holds.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a specialty chemicals and agchem name with solar adjacency (17× bear, 22× base, 24× bull), cross-checked with TTM operating profit near ₹116 crore at 9× EV/EBITDA less net debt implying equity near ₹265 per share unless mid-teens margin persists. Bear FY27 profit after tax ₹55 crore implies about ₹214 per share (-44% vs ₹382 reference). Base profit after tax ₹84 crore implies about ₹423 (+11%). Bull profit after tax ₹98 crore implies about ₹538 (+41%). Base upside sits below our fifteen percent Buy hurdle at the reference price.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base modestly above CMP; not yet Buy.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [214, 423, 538, 382], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [183, 157, 204, 242, 271, 286], color: "#c27803" }],
  ),
  seriesChart(
    "Return on capital employed %",
    "Conclusion: Recovery from FY24 trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [5, 8, 9], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. CWIP and fixed asset additions each quarter. Borrowings, interest, and CFO versus capex. Segment or product mix commentary on concalls. Solar EPC order wins and commissioning dates. Dye intermediate price indices and export shipment updates. Dividend declaration and promoter shareholding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹382 reference. Base-case target near ₹423 per share implies about eleven percent upside, below our fifteen percent Buy threshold because trailing multiples already embed much of the FY26 recovery. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above fourteen percent with profit after tax excluding large one-off other income and base FY27 profit after tax rises above ₹90 crore at a fair multiple below twenty-two times. Downgrade toward Avoid if operating profit margin falls below ten percent with borrowings above ₹130 crore and TTM profit after tax growth turns negative.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. Dyes versus agrochemical versus solar revenue split and export share are login-gated on Screener. Top customer concentration requires the annual report. Exact CWIP project list and commissioning dates need FY26 director report notes. Update bear, base, and bull when segment EBIT and solar EPC backlog disclosures publish.",
  },
];
