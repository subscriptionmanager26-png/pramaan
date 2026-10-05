import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const kaveriMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Kaveri Seed Company Ltd (NSE: KSCL, BSE: 532899) is a promoter-led Indian hybrid seed company researching, producing, processing, and marketing field and vegetable seeds across twelve agro-climatic zones. Promoter holding was about 60.5% as of June 2026 on Screener, with FIIs near 17.5% and DIIs near 3.5%. The stock is in Nifty Total Market, Nifty Smallcap 500, and BSE Fast Moving Consumer Goods indices. At a reference price of ₹715 on 1 October 2026, market capitalisation is about ₹3,678 crore on roughly 5.14 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 14.7× on TTM earnings, with book value about ₹342 per share and return on capital employed near 15.8%. The quote sits well below the 52-week high of ₹1,097 and above the ₹685 low, reflecting a one-year de-rating even as FY26 revenue and non-cotton mix improved.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Kaveri earns when farmers and distributors pay for hybrid seed packets and bulk seed, recognised largely on dispatch through a seasonal kharif-heavy calendar. Revenue mixes cotton, maize, hybrid rice, selection rice, bajra, sunflower, vegetables, and smaller crops, with conditioning, processing, and marketing costs front-loaded before peak sowing. Pricing blends farmer affordability, competitive hybrid performance, and production cost pass-through, so operating profit margin can exceed 35% in the June quarter yet compress in low-volume September and March quarters. Payment cycles create long inventory and receivable windows: seed must be conditioned and positioned in channel before monsoon, which makes cash from operations lag reported PAT in build years.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Kaveri built a cotton hybrid franchise through the 2000s, then deliberately diversified after cotton price controls and illegal seed pressure cut cotton's share of revenue from over 60% toward roughly 18% in FY26 per company presentations. Consolidated revenue moved from about ₹1,146 crore in FY24 to ₹1,202 crore in FY25 and ₹1,392 crore in FY26 on Screener, while reported PAT was near ₹300 crore, ₹282 crore, and ₹296 crore over the same span. FY26 non-cotton revenue rose more than twenty-three percent, led by maize and hybrid rice, even as cotton revenue declined mid-single digits. Q1 FY27 revenue fell to about ₹742 crore versus ₹815 crore in Q1 FY26 as maize volumes dropped on Karnataka acreage, yet June quarter operating profit margin stayed near forty percent on mix.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY26 acceleration after modest FY25.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1146, 1202, 1392], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through distributors and retailers across eighteen states; management cites presence in twelve agro-climatic zones rather than naming top five customers in free quarterly sources. Concentration risk sits at the crop level when maize or cotton acreage shifts in one state (Karnataka maize in Q1 FY27 is the live example). Promoter control near 60% with rising FII ownership near high teens adds liquidity but can amplify de-rating when seasonal quarters miss street volume hopes. Export customers remain small versus domestic but grew quickly off a low base in FY26 and Q1 FY27 commentary.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans more than one hundred twenty-five hybrids across field and vegetable crops, with FY26 non-cotton revenue above ₹1,060 crore and cotton near ₹244 crore per investor materials cited in our FY26 excerpts. Maize revenue grew about forty percent in FY26; hybrid rice revenue grew near eighteen percent; vegetables grew high single digits. New cotton products expanded to roughly thirty percent of cotton volumes in FY26 and about thirty-seven percent in Q1 FY27, improving realisation per packet even when total cotton revenue falls. Management targets further export and Bangladesh subsidiary integration while keeping research spend near six percent of turnover.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Stable mid-twenties full year; Q1 FY27 seasonal peak.",
    ["FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [25, 24, 24, 40], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: PAT stable FY24–FY26; TTM eased on Q1 FY27 base.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [300, 282, 296, 249], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Monsoon timing, El Nino rainfall deficits, and state-level acreage decisions move maize, rice, and cotton sowing directly into Kaveri's volume bridge. Illegal cotton seed packets compress legitimate cotton volumes and raise production costs for compliant producers. Government restrictions on hybrid rice in select states (Punjab cited in FY26 materials) can block otherwise competitive products. Input cost inflation in seed conditioning and grow-out plots must be passed to farmers with a lag. Peer re-rating in agri-inputs (crop protection names in this repo) sets sentiment for hybrid seed as an adjacent ag spend. Working capital spikes can hit CFO and free cash flow even when June quarter margins look exceptional.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit reached about ₹286 crore in FY24 and ₹291 crore in FY25 before rising to ₹337 crore in FY26, keeping OPM near twenty-four percent despite cotton headwinds. Other income and tax lines are lumpy quarter to quarter on Screener, so investors should anchor on operating profit and full-year PAT rather than single quarters. EPS was near ₹58 in FY24 and ₹57 in FY26 per share on a lower share count after buybacks and capital changes. ROCE eased from about twenty percent toward sixteen percent Mar FY26 as working capital absorbed capital, even though borrowings stayed at zero.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Operating line led PAT recovery in FY26.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [286, 291, 337], color: "#1e3a5f" },
      { name: "PAT", values: [300, 282, 296], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹389 crore in FY24 and ₹197 crore in FY25 on Screener, then negative near ₹6 crore in FY26 as inventory days rose toward six hundred eight days at March FY26. Free cash flow followed the same pattern, turning negative in FY26 despite positive PAT, which is normal for seed companies in heavy build years but must normalize post dispatch. Until CFO exceeds ₹180 crore in FY27 while PAT holds near ₹280 crore, headline earnings overstate near-term distributable cash. June quarter PAT near ₹280 crore is seasonal and should not be annualised without adjusting for weaker September and March quarters.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 trough after strong FY24 conversion.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [389, 197, -6], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Working capital days (consolidated, Screener)",
    "Conclusion: FY26 spike to 171 days.",
    ["Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Days", values: [80, 99, 171], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Kaveri is almost debt free on Screener with zero borrowings Mar FY26 and investments near ₹401 crore, so solvency risk is low versus working capital stress. The balance sheet can still strain if inventory days stay above six hundred days while maize volumes disappoint two years in a row, forcing discounting or write-downs. Capex in conditioning plants and CWIP near ₹130 crore Mar FY26 continues through cycles. Tax disputes (company disclosed income tax demands under appeal in public commentary) can create one-off cash outflows though not necessarily ongoing earnings risk. Promoter holding near 60% reduces governance risk but does not eliminate execution risk on diversification.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Chairman and Managing Director G V Bhaskar Rao has led Kaveri for decades with a research-first culture and high R&D spend relative to sales. Executive pay is not load-bearing in our sources, but capital allocation favours hybrids, processing assets, and Bangladesh expansion over aggressive buybacks despite the share price de-rating. Dividend payout near nine percent on FY26 PAT signals confidence while retaining cash for seed inventory cycles. FII ownership above fifteen percent adds scrutiny on environmental and social disclosures, though seed companies face less ESG noise than chemicals peers in this repo.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY26 revenue and non-cotton growth targets were met with sixteen percent top-line growth and maize-led mix shift. Margin protection through cotton cost inflation was broadly met with stable OPM near twenty-four percent. Export growth guidance toward ninety percent increase in FY26 is on track directionally though absolute export revenue remains small. Q1 FY27 volume guidance implicitly missed as maize fell thirty-nine percent on acreage, partially offset by cotton mix improvement. Working capital discipline was missed with negative FY26 CFO. Investors should weigh FY26 beat against Q1 FY27 volume miss when setting FY27 expectations.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is sustaining high teens non-cotton revenue growth in maize and hybrid rice with stable OPM above twenty-two percent. Second is rebuilding maize volumes after Karnataka acreage cuts without discounting premium hybrids. Third is scaling export registrations and Bangladesh subsidiary sales from a low base. Fourth is new cotton product contribution above thirty-five percent of cotton volumes to stabilise that segment. Fifth is normalising working capital days toward one hundred twenty with positive CFO above ₹180 crore. Growth does not require equity issuance given zero borrowings and strong reserves near ₹1,746 crore Mar FY26.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon restores maize and rice acreage while cotton illegal seed pressure eases. OPM holds near twenty-six percent for FY27 full year with PAT approaching ₹340 crore. Export revenue scales faster than domestic and CFO exceeds ₹250 crore as inventory days fall below one hundred forty. ROCE re-tests eighteen percent and the market re-rates toward fifteen times forward earnings. Equity could approach our bull band near ₹993 per share on that path.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Maize and rice volumes stay weak for two seasons with revenue flat near ₹1,320 crore and OPM near twenty-one percent. FY27 CFO stays negative and inventory provisions rise. PAT falls toward ₹255 crore as tax and other lines normalise lower. The stock de-rates toward twelve times earnings, consistent with our bear case near ₹595 per share (-17% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a seasonal hybrid seed franchise (12× bear, 14× base, 15× bull), cross-checked with FY26 operating profit near ₹337 crore at 11× EV/EBITDA less net cash near ₹400 crore implying about ₹642 per share before any R&D pipeline premium. Bear FY27 PAT ₹255 crore implies about ₹595 per share (-17% vs ₹715 reference). Base PAT ₹305 crore implies about ₹831 (+16%). Bull PAT ₹340 crore implies about ₹993 (+39%). Base case clears the fifteen percent upside hurdle required for a Buy at the reference price, contingent on maize recovery and CFO normalisation.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears 15% upside; bear reflects prolonged maize weakness.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [595, 831, 993, 715], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Q1 FY27 below prior year; seasonality dominates.",
    ["Jun-24", "Sep-24", "Dec-24", "Mar-25", "Jun-25", "Jun-26"],
    [{ name: "Sales", values: [803, 137, 174, 90, 859, 742], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with crop-wise volume commentary. IMD monsoon updates and state sowing reports for maize, rice, and cotton. Investor presentation disclosures on non-cotton mix and new product contribution each quarter. Working capital days and net CFO on Screener after March and June peaks. Export revenue and Bangladesh subsidiary integration milestones. Research spend as percent of turnover near six percent. Tax appeal outcomes on disclosed demands. Promoter and FII holding changes. Dividend declarations relative to PAT and inventory build.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹715 reference. Base-case target near ₹831 per share offers about sixteen percent upside with confirming maize volume recovery, non-cotton mix above eighty percent of revenue, and FY27 net CFO above ₹180 crore. Upgrade toward bull if two consecutive quarters show consolidated revenue above ₹900 crore in seasonally strong windows with OPM above twenty-six percent and export revenue run-rate above ₹30 crore per year. Downgrade toward Neutral if FY27 revenue stays below ₹1,350 crore with OPM below twenty-two percent and CFO negative again, cutting base PAT toward ₹270 crore and target below ₹715. Downgrade toward Avoid if PAT falls below ₹240 crore with working capital days above two hundred while maize volumes decline a second year.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated from investor presentations pending BSE PDF replacement. Crop-wise revenue splits beyond cotton versus non-cotton require annual report tables not yet ingested line by line. Exact illegal cotton seed market share in each state is not quantified in free sources. Aditya Agritech integration economics and related-party details need FY26 annual report notes. Screener premium insights on packet volumes are login-gated. Update bear, base, and bull when FY26 integrated annual report segment and tax contingency notes publish.",
  },
];
