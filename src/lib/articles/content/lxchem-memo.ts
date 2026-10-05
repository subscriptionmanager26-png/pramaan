import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const lxchemMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Laxmi Organic Industries Ltd (NSE: LXCHEM, BSE: 543277) manufactures ethyl acetate, acetic anhydride, acetaldehyde, solvents, and diketene derivative specialty chemicals from integrated sites at Lote and Dahej in Maharashtra and Gujarat. Promoter holding was about 69.34% as of June 2026 on Screener, with FIIs near 0.69% and DIIs near 3.83%. The stock is in Nifty Microcap 250 and BSE Commodities indices. At a reference price of ₹181 on 4 October 2026, market capitalisation is about ₹5,041 crore on roughly 27.85 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 40 on TTM earnings per share about ₹4.54, with book value about ₹72 per share and return on capital employed near 4.72%. The quote sits below the 52-week high of ₹215 and above the ₹107 low after FY26 earnings troughed before a sharp Q1 FY27 rebound on ethyl acetate spreads.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Laxmi Organic earns conversion margin on Essentials products sold largely to pharmaceutical, packaging, and industrial customers, plus specialty diketene derivatives exported to over thirty countries. Revenue is recognised on dispatch; acetic acid, ethanol, and energy costs flow through cost of materials with partial lag on quarterly contracts, so operating profit margin expands when ethyl acetate spreads widen and compresses when spreads normalise or specialty volumes face regulatory phase-outs. Payment cycles run through debtor days near sixty-seven Mar FY26 and inventory days near seventy, while borrowings rose toward ₹543 crore as Dahej Phase II capex accelerated, so free cash flow can stay negative even when profit after tax rebounds in Q1 FY27.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Laxmi Organic scaled from a single-site acetyls player into a dual-campus platform after acquiring diketene technology from Clariant and listing in December 2020. Consolidated revenue moved from ₹2,865 crore in FY24 to ₹2,985 crore in FY25 and ₹2,847 crore in FY26 with TTM sales near ₹3,122 crore. Operating profit followed ₹256 crore, ₹286 crore, and ₹172 crore across the same years with TTM operating profit near ₹255 crore after the June 2026 quarter. Reported profit after tax fell from ₹121 crore in FY24 to ₹79 crore in FY26 with TTM profit after tax near ₹126 crore after Q1 FY27 profit after tax ₹68 crore. Borrowings rose from ₹258 crore toward ₹543 crore while capital work in progress near ₹652 crore Mar FY26 reflects Dahej Phase II and fluorochemical investments.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM near ₹3,122 cr after Q1 FY27 volume spike.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [2865, 2985, 2847, 3122], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic pharmaceutical and agrochemical formulators, packaging ink producers, and export buyers for diketene derivatives. Company commentary cites Essentials supplying the majority of revenue with specialty growth tied to qualification cycles; Screener gates exact customer concentration time series. Promoter holding near sixty-nine percent supports multi-year Dahej capex while public float above twenty-five percent matters for liquidity after the one-year price fall. Concentration risk is moderate: a two-quarter ethyl acetate spread correction or delayed Dahej qualification can move consolidated operating profit by high single digit crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Essentials, led by ethyl acetate and acetic anhydride, supplied roughly seventy percent of revenue in recent commentary while specialty diketene derivatives faced a regulatory phase-out on one legacy molecule with replacement grades under customer approval. Fluorochemicals and Project Vayu add optionality from FY28 per management timelines. Investors should treat Essentials spread normalisation, Dahej specialty ramp, and fluorochemical utilisation as the central swing factors for consolidated return on capital employed recovering from five percent toward high single digits.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 trough six percent; Q1 FY27 twelve percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [9, 10, 6, 8], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹126 cr after Q1 FY27 rebound.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [121, 114, 79, 126], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Ethyl acetate and acetic acid spread cycles move Laxmi Organic realisations before volume fully adjusts, as FY26 demonstrated when operating profit margin fell from ten percent toward six percent before Q1 FY27 spiked on unusually favourable spreads management expects to normalise. Chinese export pricing on acetyls and solvent chains sets sentiment for Indian Essentials producers. Dahej commissioning timelines and fluorochemical ramp drive the specialty re-rating narrative. Rising borrowings toward ₹543 crore dominate free cash flow discussion even when profit after tax rebounds. Peer multiples on Vinati Organics, Deepak Nitrite, and Epigral in this repo anchor sentiment for Gujarat-Maharashtra specialty names.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year sales compound growth near ten percent on Screener masks the FY22 peak margin year when operating profit margin touched twelve percent before compressing toward six percent in FY26. Profit after tax troughed in FY26 at ₹79 crore before TTM recovery near ₹126 crore on Q1 FY27 earnings. Return on capital employed fell from nine percent toward five percent as capital work in progress and borrowings rose ahead of Dahej revenue. Dividend yield near 0.17 percent reflects reinvestment priority on Phase II and fluorochemical capex.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE troughed at five percent in FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [9, 9, 5], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹175 crore exceeded profit after tax ₹79 crore, with CFO to operating profit near 107 percent after FY25 net cash from operations ₹108 crore fell to thirty-eight percent of operating profit on working capital build. FY24 net cash from operations ₹561 crore was strong at 234 percent of operating profit. Capital expenditure kept free cash flow negative ₹427 crore in FY26 despite moderated investing intensity versus FY25. If borrowings keep rising while spreads normalise, profit after tax can outpace net cash from operations temporarily without signalling permanent earnings quality issues, but two weak CFO years with leverage above ₹650 crore would be a downgrade trigger.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO rebounded in FY26 after FY25 working capital drag.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [561, 108, 175], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹543 crore Mar FY26 against reserves near ₹1,930 crore leave balance-sheet risk tied to Dahej execution rather than immediate solvency. Interest expense near ₹21 crore FY26 on operating profit ₹172 crore leaves coverage above eight times, but capital work in progress near ₹652 crore shows another heavy investment cycle. A prolonged stretch of sub-seven percent operating profit margin with negative free cash flow and borrowings above ₹650 crore without matching Dahej revenue would be the early warning, not a single strong quarter such as June 2026 when profit after tax was ₹68 crore on temporary spread tailwinds.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage doubled into Dahej Phase II spend.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [143, 258, 543], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Goenka family founded Laxmi Organic and retains majority control with professional management driving Dahej expansion and specialty qualification. Executive compensation ties to profitability and project milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near ten percent of profits offers minority holders modest cash return while promoters reinvest through retained earnings and phased capex. Promoter holding drifted from seventy-two percent toward sixty-nine percent over three years on Screener, largely from secondary market activity rather than pledging spikes. Alignment is reasonable for a family-influenced industrial platform but cyclical Essentials margins raise the cost of mistimed expansion for minority holders.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth guidance was partially met with ₹2,985 crore sales though specialty mix lagged on product phase-out. FY25 cash guidance was partially met with positive operating cash but negative free cash flow and higher borrowings. FY26 margin guidance toward high single digits was missed at six percent operating profit margin. FY26 return on capital employed improvement was missed at five percent. FY27 Dahej Phase II capitalisation and qualification timeline is pending; Q1 FY27 revenue ₹968 crore and profit after tax ₹68 crore support volume recovery but need spread normalisation and H2 margin confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Dahej Phase II doubles diketene derivative capacity with commercial ramp targeted from Q4 FY27 through FY28 per July 2026 commentary. Lote ethyl acetate capacity and improved pharma and agrochemical customer inventories add Essentials volume when spreads normalise to mid-cycle levels. Fluorochemicals full ramp during FY27 and Project Vayu revenue from FY28 add specialty mix. Operating leverage drops incremental revenue to profit at high marginal rates when fixed Dahej costs absorb volume. Working capital release if inventory days stay near seventy with rising sales frees cash for deleveraging after capex peaks.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees Dahej qualify on schedule, operating profit margin sustain low double digits through FY27, and borrowings flat near ₹540 crore, lifting profit after tax near ₹265 crore at thirty-two times multiple and re-rating the stock toward ₹299 per share as return on capital employed moves toward ten percent. Sustained export specialty pull with normalised Essentials spreads adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near six percent on ethyl acetate oversupply, leaves profit after tax near ₹95 crore at eighteen times multiple and ₹61 per share, down roughly sixty-six percent from reference. Prolonged capex with borrowings above ₹650 crore and capital work in progress stuck above ₹700 crore would force investors to haircut multiples despite integrated acetyls cost position.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an Indian acetyl Essentials platform with specialty optionality (18× bear, 26× base, 32× bull), cross-checked with TTM operating profit near ₹255 crore at eight times EV/EBITDA when net debt near ₹520 crore caps downside near ₹120 per share only if margins stay at FY26 trough levels. Bear FY27 profit after tax ₹95 crore implies about ₹61 per share (-66% vs ₹181 reference). Base profit after tax ₹210 crore implies about ₹196 (+8%). Bull profit after tax ₹265 crore implies about ₹299 (+65%). Base case clears neither a deep Avoid nor the fifteen percent Buy hurdle while trailing price-to-earnings near forty times embeds Q1 FY27 spread spike risk.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers high single-digit upside, below Buy hurdle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [61, 196, 299, 181], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter reached ₹968 cr.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [693, 700, 719, 735, 968], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Ethyl acetate and acetic acid spread trends versus management normalisation commentary. Dahej Phase II capitalisation, qualification, and commercial ramp updates on concalls. Fluorochemicals utilisation and Project Vayu mechanical completion. Borrowings, capital work in progress, and net cash from operations each quarter. Specialty replacement product approvals after regulatory phase-out. Dividend policy and DII holding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹181 reference. Base-case target near ₹196 per share implies about eight percent upside, below the fifteen percent Buy hurdle, with confirming average operating profit margin near nine to ten percent for FY27, profit after tax run-rate above ₹45 crore per quarter after spread normalisation, and borrowings stable near ₹540 crore while Dahej revenue begins to contribute. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above eleven percent with TTM profit after tax above ₹200 crore and return on capital employed toward nine percent without leverage above ₹600 crore. Downgrade toward Avoid if operating profit margin falls below seven percent with TTM net cash from operations below ₹120 crore or borrowings exceed ₹650 crore without matching Dahej sales.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the July 2026 earnings call transcript and MD&A pending full ingestion. Essentials versus specialty revenue splits and export share are login-gated on Screener premium capacity tables. Exact Dahej Phase II revenue and fluorochemical utilisation percentages need investor presentation updates. Customer concentration percentages are premium-gated. Update bear, base, and bull when consolidated segment EBIT and plant-wise volume metrics publish in the annual report.",
  },
];
