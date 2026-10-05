import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const chemplastMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Chemplast Sanmar Ltd (NSE: CHEMPLASTS, BSE: 543336) is a Sanmar group specialty and commodity chemicals company with leadership in speciality paste PVC resin, integrated chlor-alkali and chloromethanes, suspension PVC from the CCVL acquisition, custom manufactured chemicals, and refrigerant gas investments. Fairfax-backed promoter holding was about fifty-five percent as of mid 2026 on Screener. The stock is in Nifty Smallcap indices with liquidity adequate for mid-cap portfolios. At a reference price of ₹192 on 1 October 2026, market capitalisation is about ₹3,029 crore on roughly 15.78 crore shares (face value ₹5). Trailing consolidated price-to-earnings is not meaningful on negative TTM earnings per share near negative ₹24.8, with book value about ₹111 per share and return on capital employed near 0.34%. The quote sits below the 52-week high of ₹413 and above the ₹161 low after a one-year market-cap decline near fifty percent while TTM profit after tax fell to a loss near ₹391 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Chemplast earns conversion margin on chlorine, ethylene, and power-intensive chains processed into paste PVC, suspension PVC, caustic soda, chloromethanes, hydrogen peroxide, and customer-specific intermediates. Revenue is recognised largely on dispatch; PVC and caustic spreads can move operating profit by several hundred crore rupees annually when global PVC prices soften. Payment cycles run through debtor and inventory days that Screener flags as heavy, so net cash from operations can fall below interest expense even when plants run, which is the central risk in the current trough.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Chemplast expanded from paste PVC leadership into CCVL suspension PVC and downstream specialties, with FY24 representing a stronger consolidated profit after tax near ₹180 crore before FY25 and FY26 absorbed PVC spread compression and higher interest. Revenue moved from ₹4,150 crore in FY24 to ₹4,280 crore in FY25 and ₹4,249 crore in FY26 with TTM sales near ₹4,249 crore. Operating profit fell from ₹520 crore to ₹180 crore across the same span. Reported profit after tax swung from ₹180 crore profit in FY24 to a TTM loss near ₹391 crore. Gross borrowings stayed near ₹2,450 crore Mar FY26 while capital work in progress remained material for R-32 and debottlenecking projects.",
  },
  seriesChart(
    "Revenue from operations (₹ crore, consolidated Screener)",
    "Conclusion: TTM ₹4,249 cr; five-year sales CAGR near 2%.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [4150, 4280, 4249, 4249], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic footwear and plastisol formulators for paste PVC, pipe and profile makers for suspension PVC, pharmaceutical and agrochemical buyers for custom manufactured chemicals, and industrial clients for caustic and chloromethanes. Company materials cite global specialty relationships without disclosing top-customer revenue share in free tables. Promoter holding near fifty-five percent with Fairfax as a strategic shareholder aligns long-term capex with group balance sheet support, but minority holders bear cyclical PVC volatility. Concentration risk is sectoral: a prolonged suspension PVC down-cycle can overwhelm specialty growth.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Speciality paste PVC and custom manufactured chemicals carry higher margins and grew strongly in FY25 per MD&A, while suspension PVC and chlor-alkali commodities compressed consolidated operating profit margin toward four percent TTM. Management on the August 2026 call emphasised stable paste PVC volumes while flagging weak suspension realisations. Investors should treat sustained consolidated operating profit margin above seven percent with specialty revenue above ₹1,800 crore annually as the swing factors for profit after tax recovery.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: TTM OPM near 4%; Q1 FY27 still near 4%.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [12.5, 6.5, 4.2, 4.0], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM loss ₹391 cr; cycle trough.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [180, -50, -320, -391], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global PVC and caustic soda prices, Chinese export supply, and domestic construction demand shift volume and realisation before contract resets. Power and salt costs in Tamil Nadu affect chlor-alkali economics. Peer re-rating on Indian PVC names including Epigral in this repo sets sentiment even when Chemplast’s specialty mix differs. The move from ₹413 toward ₹161 over fifty-two weeks can dominate short-term action even when specialty volumes hold.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year sales compound growth near two percent on Screener masks the FY25–FY26 profit collapse when operating profit margin fell from double digits toward four percent. Return on capital employed fell from nine percent FY24 toward zero TTM. Dividend yield was nil at reference as losses constrained payout while interest stayed elevated.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE 0.34% TTM; recovery is the thesis.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [9, 3, 0.3], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities near ₹480 crore exceeded interest burden comfortably. FY25 net cash from operations near ₹220 crore fell as working capital absorbed cash during spread compression. FY26 net cash from operations near ₹150 crore remained positive but trailed interest near ₹250 crore annually, which Screener flags as low interest coverage. If inventory days fall while specialty mix rises, profit after tax can align with net cash from operations without signalling earnings quality issues, but sustained negative free cash flow with borrowings above ₹2,600 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO positive but below interest in trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [480, 220, 150], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Gross borrowings near ₹2,450 crore Mar FY26 against reserves near ₹1,750 crore leave limited equity cushion if losses persist. Interest expense stepping up with term debt can compress profit after tax if operating profit margin stays below five percent. A prolonged stretch of quarterly profit after tax losses with borrowings above ₹2,700 crore without PVC spread recovery would be the early warning. Integration capex overruns on R-32 would add pressure irrespective of specialty performance.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage elevated through PVC trough.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [2100, 2350, 2450], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Sanmar group, with Ramkumar Shankar as managing director context per FY25 disclosures, controls Chemplast with promoter holding near fifty-five percent and Fairfax as a long-term investor. Leadership emphasises specialty paste PVC technology and responsible-care credentials as competitive moats. Nil dividend at reference reflects trough earnings while the group supports strategic capex. Public float near forty-five percent means cyclical de-rating can overshoot fundamentals.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 specialty growth was partially met with specialty revenue up about forty-nine percent but consolidated profit after tax turned negative. FY25 leverage improvement was missed with thin interest coverage. FY26 margin normalisation was missed with operating profit margin near four percent. Q1 FY27 paste PVC volume stability was partially met with revenue ₹1,050 crore but profit after tax still negative. FY27 R-32 ramp remains pending.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "PVC spread recovery on suspension assets, sustained CMCD and paste PVC growth, chlor-alkali spread normalisation, and R-32 refrigerant revenue are the primary drivers. Operating leverage on fixed chlor-alkali infrastructure can lift profit after tax faster than revenue if operating profit margin moves toward eight percent. Deleveraging as net cash from operations exceeds interest would support return on capital employed recovery toward high single digits.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹280 crore with operating profit margin sustained above nine percent, with the market holding a twenty-two times forward price-to-earnings multiple, implying a target near ₹390 per share or about one hundred three percent above reference. Triggers include two consecutive quarters with consolidated profit after tax above ₹60 crore and borrowings trending below ₹2,300 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹40 crore with operating profit margin near three percent on prolonged PVC weakness, with the market applying a twelve times multiple, implying a target near ₹30 per share or about eighty-four percent below reference. Triggers include quarterly revenue below ₹950 crore with borrowings above ₹2,700 crore and net cash from operations below ₹100 crore.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Chemplast on forward consolidated profit after tax times price-to-earnings on cyclical recovery, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹2,400 crore. Base FY27E profit after tax ₹170 crore at nineteen times implies about ₹205 per share, or about seven percent above the ₹192 reference. Bear FY27E profit after tax ₹40 crore at twelve times implies about ₹30. Bull FY27E profit after tax ₹280 crore at twenty-two times implies about ₹390. Trailing losses embed trough pessimism while specialty growth alone is insufficient without commodity spread relief.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; cycle risk caps conviction.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [30, 205, 390, 192], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, consolidated Screener)",
    "Conclusion: Jun 2026 quarter ₹1,050 cr vs ₹1,080 cr year ago.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1080, 1060, 1020, 1040, 1050], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Specialty paste PVC versus suspension PVC mix on concalls. PVC and caustic spot spreads versus management commentary. Borrowings, interest expense, and net cash from operations each quarter. R-32 commissioning milestones and revenue disclosure. Working capital days trends flagged on Screener.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹192 reference. Base-case target near ₹205 per share implies about seven percent upside, below the fifteen percent Buy hurdle, with confirming operating profit margin toward seven percent for FY27, profit after tax run-rate turning positive with two consecutive profitable quarters, and net cash from operations covering at least seventy-five percent of interest while borrowings stay below ₹2,600 crore. Upgrade toward Buy if consolidated operating profit margin exceeds eight percent for two consecutive quarters with TTM profit after tax above ₹150 crore and return on capital employed above five percent without borrowings exceeding ₹2,700 crore. Downgrade toward Avoid if operating profit margin stays below four percent with TTM profit after tax loss exceeding ₹450 crore or borrowings above ₹2,800 crore without a credible spread recovery narrative.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from FY25 MD&A and the August 2026 earnings call pending full ingestion. Segment-wise EBITDA for paste PVC versus suspension PVC is not in free Screener tables. Exact R-32 revenue and utilisation percentages need investor presentation updates. Customer concentration and export mix percentages are absent in public filings we accessed. Update bear, base, and bull when segment results publish in the annual report.",
  },
];
