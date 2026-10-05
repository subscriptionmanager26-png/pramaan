import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const zuariindMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Zuari Industries Ltd (NSE: ZUARIIND, BSE: 500780) is the Adventz group holding company, listed since the Zuari Agro Chemicals era and today anchoring quoted stakes in Chambal Fertilizers, Zuari Agro Chemicals, Mangalore Chemicals, Texmaco Rail, and Texmaco Infrastructure alongside sugar, bioenergy, real estate, and engineering services. Promoter holding was about 56.7% as of June 2026 on Screener. At a reference price of ₹282 on 1 October 2026, market capitalisation is about ₹839 crore on roughly 3.0 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 7.9× on TTM earnings, with consolidated book value about ₹1,196 per share and return on equity near 2.7%. The quote sits below the 52-week high of ₹379 and above the ₹210 low, reflecting a persistent holding company discount despite quoted investments that Screener flags above ₹3,099 crore versus ₹839 crore market cap.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Zuari Industries earns through three linked buckets. First, consolidated operating businesses: sugar crushing, ethanol, cogeneration, furniture, engineering, and real estate special purpose entities sell products and services at market or contract prices, with sugar working capital driving inventory cycles. Second, treasury and investment income: dividends, interest, and fair value movements on listed stakes and unlisted group entities flow through other income, which dominated FY24 consolidated profit. Third, promoter-level strategy: the company does not consolidate Chambal or Paradeep Phosphates earnings, but controls capital allocation across the fertilizer platform including the Zuari Maroc Phosphates joint venture with Morocco's OCP Group. Payment quality therefore mixes seasonal sugar cash conversion with lumpy investment gains, not steady operating margins alone.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Zuari Industries evolved from fertilizer manufacturing roots into a diversified Adventz holding vehicle after Chambal and other operating assets listed or restructured. FY24 consolidated revenue was ₹838 crore with operating profit ₹52 crore, but other income near ₹1,041 crore and exceptional items drove PAT to ₹713 crore, a level management cannot repeat. FY25 consolidated revenue rose to ₹970 crore while PAT turned negative ₹94 crore as sugar economics and interest absorbed operating profit despite quoted portfolio gains on paper. FY26 consolidated revenue reached ₹1,045 crore with PAT ₹106 crore and TTM PAT ₹106 crore as Sep 2025 quarter PAT ₹164 crore on elevated other income partially offset weak Mar 2026 quarters. Standalone FY26 revenue was ₹874 crore with PAT ₹12 crore, confirming that consolidated sugar and subsidiaries carry most operating volatility while standalone value sits in investments near ₹3,140 crore Mar FY26.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line grew modestly; profit quality remains non-operating heavy.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [838, 970, 1045, 1099], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Operating customers include sugar mills off-takers, ethanol buyers, engineering clients, and real estate counterparties on consolidated accounts. Investment returns depend on dividends and market prices from a concentrated portfolio: the Q4 FY25 investor deck showed about 595 lakh Chambal shares worth ₹3,177 crore at 31 March 2025, plus Zuari Agro Chemicals, Mangalore Chemicals, and Texmaco stakes. Promoter Adventz control near 56.7% aligns strategy with group integration including Paradeep and Mangalore Chemicals amalgamation, but minority holders in Zuari Industries do not receive direct pro-rata access to Chambal cash unless upstreamed. FII holding was near 1.1% and public float near 41% in June 2026. Concentration risk is portfolio and leverage: a fertilizer sector de-rating hits NAV before sugar recovers.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Consolidated sales mix spans sugar and ethanol, engineering and furniture, and management fees, while economic exposure tilts toward listed fertilizer equities. FY26 consolidated OPM near 7% on Screener is above FY25 5% but TTM OPM fell toward 4.3% as quarterly operating profit swung from negative in Dec 2025 to positive in Mar 2026. Sugar inventory days above 400 on consolidated ratios signal working capital intensity. Mix shift toward higher other income in Sep 2025 flattered PAT without improving recurring OPM. Premium Screener insights hide cane crushed and ethanol litres without login. Investors should track quoted investment table each quarter separately from sugar revenue because the stock behaves as a holding company discount play on Chambal and group fertilizer assets.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Other income and interest separate PAT from operating profit.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [52, 50, 71, 48], color: "#1e3a5f" },
      { name: "PAT", values: [713, -94, 106, 106], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Mark-to-market moves in Chambal Fertilizers and Texmaco Rail shares revalue NAV daily while Zuari Industries earnings lag. Fertilizer policy, urea reimbursement, and phosphatic spreads move Chambal and Paradeep sentiment, indirectly re-rating Zuari Industries. Sugar cane pricing, ethanol blending policy, and monsoon affect consolidated operating profit. Interest rates matter because consolidated borrowings reached ₹2,657 crore Mar FY26 with TTM interest near ₹241 crore, compressing coverage. Group restructuring headlines, including Mangalore Chemicals and Paradeep amalgamation, can narrow or widen the holding company discount independent of quarterly PAT. Real estate and SPE monetisation news moves the stock when management signals asset sales.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Return on equity averaged near zero over three years on Screener because FY24 one-off gains distorted the series. Consolidated ROCE was 5.45% in FY26 versus 3% in FY25. Operating margin expanded from 5% to 7% FY25 to FY26 but TTM OPM retreated to 4.3%. Three-year profit CAGR is negative on headline metrics because FY24 PAT is not a comparable base. Book value per share near ₹1,196 consolidated versus ₹282 price implies 0.24× price-to-book, a classic holding company discount. Investors should normalise FY27 PAT near ₹92 crore in our base case rather than extrapolating TTM ₹106 crore or Sep 2025 quarter alone.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin improved FY26 headline but TTM weakened on quarterly mix.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [6.0, 5.0, 7.0, 4.3], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹71 crore in FY24, negative ₹1 crore in FY25, and ₹144 crore in FY26 on Screener consolidated cash flow, volatile versus PAT swings. CFO to operating profit was 226% in FY26 because working capital released partially, but sugar inventory cycles can reverse quickly. Free cash flow was ₹118 crore in FY26 after investing outflows near ₹20 crore. Dividends from Chambal and other listed stakes may not fully pass through to Zuari Industries minority holders in cash each year. Sustained CFO above ₹150 crore with falling inventory days would signal that sugar operations fund interest without fresh borrowings.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO recovered; FY25 was flat despite operating profit.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [71, -1, 144], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Consolidated borrowings of ₹2,657 crore at March 2026 against investments of ₹4,851 crore look asset-heavy, but much investment is illiquid except quoted stakes, and sugar working capital can tie up cash. Interest near ₹241 crore TTM on operating profit near ₹48 crore TTM creates low coverage if other income normalises lower. Contingent liabilities near ₹582 crore on Screener pros add tail risk. A simultaneous Chambal de-rating and sugar loss would cut PAT toward our bear band without immediate insolvency given asset backing, but could force NCD refinancing on ₹200 crore unlisted debentures cited in the FY25 directors report. Equity dilution is unlikely near-term absent a large acquisition funded by shares.",
  },
  seriesChart(
    "Borrowings trend (₹ crore, consolidated)",
    "Conclusion: Leverage drifted up Mar FY24 to Mar FY26.",
    ["Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [2436, 2568, 2657], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under Adventz and promoter oversight with stable holding above 56%. Incentives emphasise portfolio preservation, group fertilizer integration, and sugar asset optimisation visible in FY25 MD&A and investor decks. That aligns with long-term holders seeking NAV unlock but can leave the listed holding company discount unresolved if Chambal dividends stay downstream. Independent directors and audit committees follow listed company norms. Management communication on quoted investment values is explicit in quarterly decks, which helps investors track sum-of-parts even when consolidated PAT is noisy.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised to grow strategic investments, integrate the Paradeep phosphatic platform, operate sugar and bioenergy profitably, control leverage, return modest dividends, and reduce the holding company discount. Quoted portfolio value rose to ₹4,701 crore Mar FY25 per the investor deck, but the stock discount persisted. FY25 consolidated PAT missed with a ₹94 crore loss. Borrowings rose to ₹2,657 crore Mar FY26. Dividend yield stayed below 0.4%. Integration promises on Mangalore Chemicals and Paradeep remained partial at the Oct 2026 reference. Overall delivery is mixed: NAV up on paper, earnings and unlock lagging.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "NAV: Chambal and fertilizer peer re-rating lifts quoted table value without Zuari Industries issuing shares. Cash: upstream dividends or partial stake monetisation could fund deleveraging and special payouts. Operations: ethanol and sugar margin recovery on consolidated accounts adds recurring PAT. Structure: closing Mangalore Chemicals and Paradeep amalgamation simplifies the group story and may narrow discount. These drivers are partially priced at 0.24× consolidated book, so FY27 must show normalized PAT near ₹92 crore with credible unlock headlines to justify bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Management announces a partial Chambal stake sale or special dividend upstreaming more than ₹200 crore to Zuari Industries. Chambal re-rates on urea efficiency and TAN optionality, lifting quoted NAV above ₹5,000 crore on the deck table. Sugar and ethanol margins recover with positive CFO above ₹200 crore two years running. Borrowings fall below ₹2,300 crore as proceeds repay NCDs. Interest coverage exceeds 2× on consolidated operating profit plus recurring other income. FY27 PAT could approach ₹125 crore and support our bull band near ₹417 per share at 10× earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Chambal and Texmaco shares de-rate 25% while Zuari Industries cannot monetise without promoter conflict headlines. Sugar losses return with inventory days staying above 450 and CFO turning negative. Interest on ₹2,800 crore borrowings rises with refi costs. Sep 2025 style other income does not repeat and Mar 2026 weak quarters persist. Holding company discount widens to 0.15× book. FY27 PAT could fall toward ₹65 crore and compress equity toward our bear case near ₹152 per share at 7× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to an Adventz holding company with sugar and investment volatility (7× bear, 8.5× base, 10× bull), cross-checked with quoted strategic investments near ₹3,099 crore Jun 2026 versus market cap ₹839 crore implying a large discount that only converts to cash upon monetisation. Bear FY27 PAT ₹65 crore implies about ₹152 per share (-46% vs ₹282 reference). Base PAT ₹92 crore implies about ₹261 (-7%). Bull PAT ₹125 crore implies about ₹417 (+48%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds optionality on NAV unlock rather than normalized earnings power alone.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs monetisation or special dividends.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [152, 261, 417, 282], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, consolidated Screener)",
    "Conclusion: Sep 2025 spike drove TTM; Mar 2026 quarter was loss making.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "PAT", values: [-0.5, 164, -26, -32], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Other income (₹ crore, consolidated quarterly)",
    "Conclusion: PAT quality ties to lumpy treasury and investment income.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "Other income", values: [45, 225, 47, 20], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual consolidated)",
    "Conclusion: FY24 peak is not repeatable; FY26 normalized below headline TTM.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [713, -94, 106, 106], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Q4 FY25 and subsequent investor decks updating the quoted strategic investment table. BSE scheme filings for Mangalore Chemicals and Paradeep Phosphates amalgamation. Chambal dividend declarations and Zuari Industries receipt in cash flow notes. Partial stake sale or buyback announcements on any listed holding. Sugar crush and ethanol volume disclosures in subsidiary annual reports. Refinancing terms on ₹200 crore NCDs and consolidated borrowings each half year. Peer holding company re-rating if another Adventz entity monetises fertilizer stakes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹282 reference. Base-case target near ₹261 offers about 7% downside versus reference, below our 15% Buy hurdle, while deep discount to quoted investments keeps the name off Avoid unless leverage and sugar losses compound. Upgrade to Buy if management announces a cash upstreaming event above ₹150 crore or partial Chambal monetisation with net debt reduction below ₹2,200 crore, lifting base PAT toward ₹110 crore and target above ₹324 (+15%). Downgrade to Avoid if consolidated TTM PAT falls below ₹50 crore with OPM under 3%, borrowings rise above ₹2,900 crore, and quoted portfolio value falls 20% without a balance sheet response.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact cane crushed, sugar recovery, and ethanol litres for FY26 consolidated subsidiaries are login-gated on Screener. Unquoted investment fair values below the quoted table are not broken out line by line in free sources. Timing and economics of Mangalore Chemicals and Paradeep amalgamation for Zuari Industries minority holders are not modeled as consolidated PAT. Related-party dividend upstreaming from Chambal to Zuari Industries requires note-level cash flow reconciliation each year. Update bear, base, and bull when FY26 annual report publishes refreshed investment and contingent liability notes.",
  },
];
