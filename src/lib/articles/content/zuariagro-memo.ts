import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const zuariagroMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Zuari Agro Chemicals Ltd (NSE: ZUARI, BSE: 534742) is the listed Adventz vehicle that today functions mainly as a holding company for the Zuari Maroc Phosphates joint venture stake in Paradeep Phosphates, with residual fertiliser retail and trading under the Zuari brand and a long-dated Goa land bank. Promoter holding was about 65.2% as of June 2026 on Screener, with 27.6% of promoter shares pledged per machine-generated pros. At a reference price of ₹213 on 1 October 2026, market capitalisation is about ₹895 crore on roughly 4.2 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 2.9× on TTM earnings, with book value about ₹497 per share and return on equity near 1.2%. The quote sits below the 52-week high of ₹346 and above the ₹175 low, reflecting a holding company discount despite consolidated investments near ₹2,581 crore at March 2026.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "After the slump sale of Jai Kisaan single super phosphate manufacturing to Paradeep Phosphates, Zuari Agro earns in two buckets. First, investment income: fair value changes, dividends, and interest on the Paradeep stake held through ZMPPL with Morocco's OCP Group, which shows up as other income and can dominate PAT in mark-to-market quarters. Second, continuing operations: traded and retail fertiliser volumes with operating margins that reached near 12% in the September 2025 quarter on Screener but can turn negative in low-volume quarters such as March 2026. Goa land remains on the balance sheet as option value, not recurring cash, until policy and approvals allow monetisation. Payment quality is therefore lumpy: retail operations fund working capital, while equity value for minority holders depends on Paradeep marks and eventual cash upstreaming.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Founded in 1967 as a flagship Adventz fertiliser name, Zuari Agro scaled SSP and complex fertilisers before group restructuring moved phosphatic manufacturing to Paradeep Phosphates. FY23 consolidated PAT was ₹539 crore when other income was ₹616 crore, a mix of investment and operating gains. FY24 PAT normalised to ₹171 crore on sales near ₹4,595 crore. FY25 PAT recovered to ₹231 crore with operating profit ₹378 crore and borrowings falling toward ₹717 crore after the manufacturing exit. FY26 PAT jumped to ₹982 crore and TTM PAT to ₹974 crore because the September 2025 quarter alone reported PAT near ₹840 crore on other income near ₹923 crore, not because retail sales doubled. Sales fell toward ₹3,200 crore in FY26 as the continuing business shrank, which is the setup for this memo: deep discount to book and investments at a reference price that already ignores trailing fair value spikes.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line stepped down after manufacturing slump sale; TTM reflects smaller footprint.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [4553, 4595, 4436, 3200, 2569], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Retail and traded fertiliser customers are fragmented dealers and farmers; Zuari Agro does not carry the national urea reimbursement profile of Chambal or NFL. Investment returns depend on Paradeep Phosphates market price and dividend policy, where ZMPPL ownership links Zuari Agro to OCP-backed rock supply but minority holders in Zuari Agro do not vote Paradeep board seats directly. Promoter Adventz control above 65% aligns capital allocation with group integration including Mangalore Chemicals and Paradeep amalgamation, which can benefit promoters before cash reaches Zuari Agro minorities. FII holding was near 2.3% in June 2026. Concentration risk is NAV: investments near ₹2,581 crore Mar FY26 against MCap ₹895 crore imply that a 15% Paradeep de-rating moves implied equity value more than a full year of retail operating profit.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Manufacturing SSP at scale is gone; continuing operations are fertiliser retail, trading, and allied agri inputs with seasonal volume. FY25 operating margin near 9% on ₹4,436 crore sales shows the residual business can earn, but FY26 quarterly sales swung from ₹1,423 crore in September 2025 to ₹187 crore in March 2026 on Screener, which makes mix analysis quarter-dependent. Investments rose from ₹1,425 crore Mar FY25 to ₹2,581 crore Mar FY26 as Paradeep stake marks increased. Goa land is not sold in the numbers we cite; it remains strategic optionality with policy friction noted on Screener. The economic mix trend is clear: Zuari Agro is becoming an investment-led balance sheet with a smaller trading wrapper.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: OPM improved on smaller sales base but quarterly volume swings remain extreme.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [7, 8, 9, 10, 9], color: "#c27803" }],
  ),
  seriesChart(
    "Consolidated investments (₹ crore, balance sheet)",
    "Conclusion: Paradeep stake marks drive asset growth post slump sale.",
    ["Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Investments", values: [1270, 1425, 2581], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Paradeep Phosphates share price and phosphoric acid spreads revalue Zuari Agro through fair value other income, which is why Sep 2025 PAT spiked. Domestic DAP and SSP import parity moves retail trading spreads in continuing operations. Goa land policy and litigation affect contingent liabilities near ₹374 crore and any monetisation headline. Promoter pledge levels at 27.6% of holding can widen discount if lenders force sales. Group amalgamation news on Mangalore Chemicals and Paradeep changes narrative but not necessarily Zuari Agro cash. Interest rates matter less than for leveraged urea PSUs because borrowings fell to ₹642 crore Mar FY26, yet refi on remaining debt still hits PAT when retail quarters are weak.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit was ₹338 crore in FY23, ₹362 crore in FY24, and ₹378 crore in FY25 before FY26 fell to ₹311 crore on lower sales. Reported PAT swung from ₹539 crore in FY23 to ₹171 crore in FY24, ₹231 crore in FY25, and ₹982 crore in FY26 with TTM ₹974 crore inflated by investment income. Interest expense fell from ₹211 crore in FY24 to ₹101 crore in FY26 as borrowings dropped. Return on equity looks weak at 1.2% because equity base expanded with investment marks while cash dividends stayed nil. ROCE near 16.4% on Screener reflects asset mix, not recurring retail economics alone.",
  },
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 and TTM are not normalized run-rate earnings.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [539, 171, 231, 982, 974], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Operating profit vs other income (₹ crore, annual)",
    "Conclusion: FY26 PAT quality ties to other income, not OP alone.",
    ["FY25", "FY26"],
    [
      { name: "Operating profit", values: [378, 311], color: "#1e3a5f" },
      { name: "Other income", values: [195, 1048], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹473 crore in FY24, ₹511 crore in FY25, and ₹203 crore in FY26 on Screener consolidated cash flow, while free cash flow was ₹453 crore, ₹433 crore, and ₹103 crore respectively. CFO to operating profit was 160% in FY25 and 81% in FY26, showing working capital release after the slump sale helped earlier years more than the latest. Fair value gains in Sep 2025 do not equal cash until Paradeep shares are sold or dividends paid. Negative net cash flow ₹201 crore in FY26 included financing outflows. Sustained CFO above ₹250 crore with falling pledge and contingent liabilities would signal that retail operations plus dividends fund the holding company without fresh marks.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO weakened in FY26 as earnings quality shifted to marks.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [473, 511, 203], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Contingent liabilities near ₹374 crore can crystallise if land or tax disputes go against the company. Promoter pledge at 27.6% raises forced-sale risk in a fertilizer de-rating. Paradeep stake marks can reverse: a 20% fall in Paradeep market cap would reduce investment carrying value and future other income without automatic debt paydown. Borrowings at ₹642 crore Mar FY26 are manageable versus FY20 peaks above ₹3,300 crore, but low dividend payout means equity holders rely on price appreciation, not deleveraging from retained cash to them. Retail quarters with negative operating profit, such as March 2026, can erode buffers if they persist through a full year.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage improved post slump sale; refi risk is secondary to NAV marks.",
    ["Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [1783, 717, 642], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under Adventz promoter oversight with stable holding above 65%. Incentives emphasise group phosphatic integration through Paradeep and ZMPPL rather than maximizing Zuari Agro standalone dividends, which aligns with promoter control but can frustrate minority holders seeking cash unlock. Management disclosure on Screener and BSE is adequate for investment line items, yet pledge and contingent liability flags require annual report diligence. Independent governance follows listed norms; the open question is whether fair value PAT will translate to payout or buybacks for minorities.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised to exit legacy SSP manufacturing cleanly, reduce leverage, protect the Paradeep platform via ZMPPL, monetise Goa land where possible, and restore shareholder returns. The slump sale met its balance sheet goal with borrowings down sharply and investments up. Leverage reduction beat prior targets. Dividends remain at zero yield at the reference date despite TTM PAT. Goa monetisation is still pending with contingent liabilities unresolved. Retail margin delivery was partial with strong September 2025 and weak March 2026 quarters. Overall, promises on structure succeeded more than promises on minority cash returns.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Paradeep re-rating on phosphoric acid integration and OCP rock supply lifts investment marks and potential dividends through ZMPPL. Partial monetisation of Paradeep or Goa land could fund special dividends and cut pledge overhang. Retail fertiliser spreads can add ₹200 crore to ₹300 crore annual operating profit if import parity stays favourable and volumes stabilise. Group amalgamation closing could simplify Adventz narrative and narrow holding discounts across listed vehicles. FY27 normalized PAT near ₹145 crore in our base case assumes none of the bull cash events fully land, so upside remains optionality-heavy.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Paradeep shares re-rate 25% while Zuari Agro marks through and upstreams a special dividend above ₹100 crore. Goa land sale clears contingent liabilities and adds cash to equity. Promoter pledge falls below 15% as Adventz refinances without share disposal. Retail OPM holds above 10% on sales above ₹3,500 crore annualised. Borrowings fall below ₹500 crore. FY27 PAT could approach ₹210 crore and support our bull band near ₹333 per share at 7× normalized earnings.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Paradeep de-rates on leverage or phosphoric acid oversupply, wiping fair value other income. Sep 2025 style gains do not repeat and Mar 2026 weak quarters persist through FY27. Contingent liabilities near ₹374 crore crystallise. Promoter pledge triggers overhang headlines. Retail OPM falls below 6% on import policy shifts. FY27 PAT could fall toward ₹75 crore and compress equity toward our bear case near ₹89 per share at 5× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to an Adventz investment holding with residual retail (5× bear, 5.75× base, 7× bull), cross-checked with investments ₹2,581 crore Mar FY26 versus MCap ₹895 crore and 0.43× book per Screener, which implies deep discount that only converts on cash events. Bear FY27 PAT ₹75 crore implies about ₹89 per share (-58% vs ₹213 reference). Base PAT ₹145 crore implies about ₹198 (-7%). Bull PAT ₹210 crore implies about ₹333 (+56%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds Paradeep optionality rather than normalized retail earnings alone.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs cash unlock from Paradeep or land.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [89, 198, 333, 213], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, consolidated Screener)",
    "Conclusion: Sep 2025 fair value quarter drives TTM; Mar 2026 was loss making.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "PAT", values: [127, 840, 40, -25], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Other income (₹ crore, consolidated quarterly)",
    "Conclusion: Investment marks dominate Sep 2025; other quarters are modest.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "Other income", values: [72, 923, 43, 11], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Paradeep Phosphates quarterly results and dividend declarations affecting ZMPPL upstream. BSE scheme filings for Mangalore Chemicals and Paradeep amalgamation. Zuari Agro annual report notes on fair value methodology for Paradeep stake. Goa land disposal or joint development announcements. Promoter pledge release in shareholding pattern. Retail volume and OPM in low-season quarters after March 2026. Contingent liability court outcomes. Any buyback or special dividend policy change for Adventz listed vehicles.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹213 reference. Base-case target near ₹198 offers about 7% downside versus reference, below our 15% Buy hurdle, while 0.43× book and large investment line keep the name off Avoid unless Paradeep marks collapse without balance sheet response. Upgrade to Buy if management announces cash upstreaming above ₹80 crore or pledge falls below 15% with a documented dividend policy, lifting base PAT toward ₹165 crore and target above ₹245 (+15%). Downgrade to Avoid if TTM PAT falls below ₹150 crore excluding fair value with Paradeep down 25%, borrowings rise above ₹900 crore, and contingent liabilities increase above ₹450 crore without asset sale proceeds.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact ZMPPL ownership percentage of Paradeep and dividend pass-through to Zuari Agro requires FY26 annual report note reconciliation. Goa land acreage and realisable value are not line-item disclosed in free sources. Retail segment revenue split versus pure investment income in FY26 is aggregated on Screener. Related-party transactions between Zuari Agro, Zuari Industries, and Paradeep need fresh filing review each year. Update bear, base, and bull when FY26 annual report publishes fair value hierarchy and contingent liability detail.",
  },
];
