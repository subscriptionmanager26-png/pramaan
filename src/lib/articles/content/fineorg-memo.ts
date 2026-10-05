import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const fineorgMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Fine Organic Industries Ltd (NSE: FINEORG, BSE: 541557) manufactures oleochemical-based specialty additives used in polymer processing, food emulsifiers, feed nutrition, personal care, and coatings. Promoter holding was about 75.0% as of June 2026 on Screener, with FIIs near 4.3% and DIIs near 11.7%. The stock is in BSE Commodities and BSE 1000. At a reference price of ₹5,131 on 1 October 2026, market capitalisation is about ₹15,732 crore on roughly 3.07 crore shares (face value ₹5). Trailing consolidated price-to-earnings is near 35.9 on TTM earnings per share about ₹142.89, with book value about ₹869 per share and return on capital employed near 21.5%. The quote sits below the 52-week high of ₹5,407 and above the ₹3,856 low after an eleven percent one-year price rise while profit after tax normalised below the FY23 peak.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Fine Organic earns formulation margin on specialty additives sold to FMCG, polymer, feed, and personal care customers in India and abroad. Revenue is recognised on dispatch; palm oil, fatty alcohol, and oleochemical feedstock costs flow through cost of materials with a lag, so operating profit margin swings when raw material indices move faster than price pass-through. Payment cycles run through debtor days near fifty-four Mar FY26 and inventory near one hundred four days, so working capital can absorb cash even when operating profit prints strongly, as FY25 demonstrated before FY26 cash from operations rebounded to ₹430 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Fine Organic listed in 2017 and scaled into a global niche leader in food emulsifiers and polymer lubricants. Consolidated revenue spiked to ₹3,023 crore in FY23 on inventory and pricing effects, then normalised to ₹2,123 crore in FY24 and ₹2,366 crore in FY26 with TTM sales near ₹2,472 crore. Operating profit margin peaked near twenty-seven percent in FY23 before settling toward twenty percent in FY26 as spreads normalised. Reported profit after tax fell from ₹618 crore in FY23 to ₹417 crore in FY26 with TTM profit after tax near ₹438 crore. Borrowings rose from near zero to ₹68 crore Mar FY26 while capital work in progress reached ₹64 crore, signalling continued debottlenecking without stressing the balance sheet.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Post-FY23 normalisation with steady TTM growth.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [2123, 2269, 2366, 2472], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers include polymer processors, global food companies, feed nutrition formulators, and personal care brands served through distributors across many countries per company materials. Screener premium gates exact export share, distributor count, and top-customer concentration time series; free filings describe broad diversification across polymer, food, and personal care without naming accounts each quarter. Promoter control at seventy-five percent supports long-cycle R&D and capex, while FII holding near four percent leaves re-rating tied to margin proof at a premium multiple. Concentration risk is moderate: a prolonged oleochemical down-cycle or food regulation change in a major export market can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Polymer additives (lubricants, slip agents, anti-statics) and food emulsifiers remain the core profit pools, with personal care surfactants and feed nutrition additives growing off a smaller base. FY25 MD&A emphasised stabilising margins in a twenty to twenty-five percent band even as product mix shifted toward higher-value food and polymer grades. Exact segment revenue splits require investor presentations or premium datasets; investors should treat export food qualification wins and polymer additive volume recovery as the central bull case for margin re-expansion.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Compression from FY23 peak; Jun 2026 quarter rebound.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [27, 25, 23, 20, 21], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: PAT below FY23 peak but stable TTM.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [618, 412, 410, 417, 438], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Palm oil and oleochemical feedstock prices dominate input costs; management flagged quarterly margin swings of up to five points on raw material timing. Global food regulation and emulsifier specification changes affect export qualification timelines. Polymer demand tracks auto and packaging cycles. INR moves matter on export realisations. Peer multiples for Indian specialty chemical leaders with similar ROCE anchor sentiment. The trailing price-to-earnings near thirty-six times shows the market pays for balance-sheet quality and niche positioning, not for FY23-style peak earnings.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compounded near fourteen percent on Screener while profit compounded near eighteen percent, but the FY23 spike distorts the trend. FY24 operating profit near ₹532 crore on ₹2,123 crore revenue kept OPM at twenty-five percent. FY26 operating profit near ₹480 crore on ₹2,366 crore revenue held OPM at twenty percent. Return on capital employed fell from sixty-five percent FY23 to twenty-one percent FY26 as the asset base expanded. Dividend payout stayed near eight percent, so reinvestment and inventory builds drive the story.",
  },
  seriesChart(
    "Operating profit (₹ crore, consolidated)",
    "Conclusion: TTM OP recovering with Jun 2026 quarter.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OP", values: [532, 512, 480, 531], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash conversion improved materially in FY26. Net cash from operations was ₹430 crore on operating profit ₹480 crore, with CFO to operating profit near 116 percent on Screener. FY25 net cash from operations was only ₹204 crore when inventory days stretched above one hundred. Free cash flow was ₹288 crore FY26 after capex. Until inventory days fall toward ninety with stable debtor days, the market can reasonably debate whether TTM profit after tax near ₹438 crore is fully cash-backed, but FY26 data supports the quality narrative more than FY25 did.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO strong versus operating profit.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [635, 204, 430], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹68 crore Mar FY26 against reserves ₹2,649 crore are manageable but up from near zero a year earlier. If capex and inventory builds coincide with a margin trough, gross debt could rise above ₹150 crore before new lines contribute cash. Promoter holding stability and decades of internal accrual funding reduce tail risk; this remains one of the least leveraged specialty chemical names in the Indian mid-cap set, unlike leveraged peers in this repo.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Step-up FY26 still small versus equity.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [4, 3, 68], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The founding Shah family retains seventy-five percent promoter holding, aligning control with long-term capacity and R&D decisions. Executive compensation and related-party disclosures appear in the annual report; we did not flag material related-party leakage in consolidated profit after tax on Screener tables. Dividend yield near zero point two one percent at the reference price signals reinvestment over cash returns. Insider selling was not a headline item in the curated call excerpts; monitor shareholding each quarter for FII flows at premium valuations.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised margin stabilisation in a twenty to twenty-five percent band and a debt-light balance sheet through FY25. FY25 operating profit margin at twenty-three percent met the lower band, but FY26 full-year margin at twenty percent missed until the Jun 2026 quarter printed twenty-five percent. Borrowings stayed negligible through FY25 then rose with FY26 capex, a partial miss on absolute debt-free rhetoric but not a stress event. Cash conversion promises were met in FY26 with net cash from operations above operating profit. Q1 FY27 revenue and profit after tax beat the implied run-rate, but investors should wait for September and December 2026 quarters before treating margin recovery as structural.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Volume growth in polymer additives and food emulsifiers tied to India and export customers, plus personal care ingredient launches, drives the revenue bridge. Debottlenecking and greenfield lines moving toward seventy percent utilisation are the main margin and ROCE levers. Export qualification cycles for food grades can add high-margin revenue with a twelve to eighteen month lag. Revenue CAGR near eight percent with OPM near twenty-one percent in the base case yields profit after tax above ₹500 crore run-rate if delivered without another FY23-style inventory spike.",
  },
  seriesChart(
    "Return on capital employed %",
    "Conclusion: Normalising from FY23 peak as assets grow.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [31, 26, 21], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees revenue above ₹2,650 crore with operating profit margin sustaining mid-twenties on better feedstock spreads and export mix, leaving profit after tax near ₹540 crore at a thirty-six times multiple. Faster capacity utilisation without inventory blowouts could push return on capital employed back toward twenty-five percent and trigger FII inflows at a premium valuation.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case sees revenue stall near ₹2,400 crore with operating profit margin back toward eighteen percent on oleochemical spread compression, leaving profit after tax near ₹380 crore at a twenty-eight times multiple. Higher borrowings above ₹150 crore with inventory days above one hundred twenty would cap re-rating even if revenue holds.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a debt-light oleochemical specialty leader (28× bear, 34× base, 36× bull), cross-checked with TTM operating profit near ₹531 crore at 14× EV/EBITDA less net debt implying equity near ₹2,405 per share unless mid-twenties margin persists. Bear FY27 profit after tax ₹380 crore implies about ₹3,466 per share (-32% vs ₹5,131 reference). Base profit after tax ₹500 crore implies about ₹5,547 (+8%). Bull profit after tax ₹540 crore implies about ₹6,337 (+24%). Base upside sits below our fifteen percent Buy hurdle at the reference price because trailing multiples already embed quality.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base modestly above CMP; not yet Buy.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [3466, 5547, 6337, 5131], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [607, 588, 597, 555, 625, 694], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Palm oil and oleochemical feedstock indices versus management pass-through commentary. CWIP and fixed asset additions each quarter. Borrowings, inventory days, and net cash from operations versus capex. Export shipment and food emulsifier qualification updates on concalls. Dividend declaration and promoter or FII shareholding changes. New product launches in personal care and polymer additives.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹5,131 reference. Base-case target near ₹5,547 per share implies about eight percent upside, below our fifteen percent Buy threshold because trailing price-to-earnings near thirty-six times already prices in balance-sheet quality and niche positioning. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty-three percent with profit after tax excluding large one-off other income and base FY27 profit after tax rises above ₹520 crore at a fair multiple below thirty-four times. Downgrade toward Avoid if operating profit margin falls below eighteen percent with inventory days above one hundred twenty and TTM profit after tax growth turns negative.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. Polymer versus food versus personal care revenue split and export share are login-gated on Screener. Top customer concentration requires the annual report. Exact CWIP project list and commissioning dates need FY26 director report notes. Update bear, base, and bull when segment EBIT and capacity utilisation disclosures publish.",
  },
];
