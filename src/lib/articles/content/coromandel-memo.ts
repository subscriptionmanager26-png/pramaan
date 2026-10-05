import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const coromandelMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Coromandel International Ltd (NSE: COROMANDEL, BSE: 506395) is a Murugappa Group and EID Parry–linked crop nutrition and crop protection company headquartered in Secunderabad. The stock is in Nifty 500, Nifty Midcap 150, and Nifty Chemicals. Promoters held about 56% in June 2026 on Screener, with FIIs near 12% and DIIs near 20%. At a reference price of ₹1,764 on 1 October 2026, market capitalisation is about ₹52,000 crore on roughly 29.5 crore shares (face value ₹1). Trailing price-to-earnings is near 28× on TTM earnings, with book value about ₹426 per share and return on equity near 16%. The quote sits about 29% below the 52-week high of ₹2,499 but well above the ₹1,701 low, reflecting a quality agri franchise priced for integration capex rather than distress.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Coromandel manufactures and markets phosphatic fertilisers (NPK, DAP, SSP), trades urea and potash, and runs a crop protection and bio-products business. Crop nutrition still supplies the majority of revenue, but crop protection has risen toward 12% of the mix in FY26 per Screener segment notes. Farmers and dealers pay retail prices that blend market-based agrochemical realisations with subsidised nutrient products; the company also earns export revenue on biopesticides. Backward integration is the strategic pivot: sulphuric and phosphoric acid plants at Kakinada (about ₹1,100 crore) and a Senegal rock phosphate project (53.8% stake) aim to lock in intermediate costs. The Mana Gromor retail chain (1,200+ outlets) pushes specialty nutrients and crop protection into the same farmer relationship. Payment timing mixes quick agrochemical collections with fertiliser working capital tied to subsidy flows.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Coromandel built scale in single super phosphate and NPK across Andhra Pradesh, Telangana, Karnataka, and neighbouring states, then expanded manufacturing to 21 plants nationwide. FY23 revenue benefited from nutrient price inflation; profits normalised as phosphatic spreads tightened. FY25 consolidated revenue was about ₹24,085 crore on our Screener roll-up, with operating margin near 11% and PAT about ₹2,054 crore. FY26 TTM revenue accelerated to about ₹31,479 crore as urea trading volumes jumped from 13.6 to 22.7 lakh metric tons while NPK+DAP volumes rose to 42.8 lakh MT. TTM PAT softened to about ₹1,898 crore as the March 2026 quarter printed only ₹115 crore profit after tax with a high tax rate and weaker seasonal mix. Borrowings rose to ₹1,506 crore by March 2026 to fund Kakinada and the ₹820 crore NACL Industries acquisition.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener roll-up)",
    "Conclusion: TTM revenue re-accelerated on urea trading and NPK volume, not only price.",
    ["FY24", "FY25", "TTM Jun-26"],
    [{ name: "Sales", values: [22100, 24085, 31479], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Revenue is overwhelmingly domestic (about 94% in FY26). End demand is fragmented across millions of farmers, but the company discloses dependence on government subsidy programmes for fertiliser grades. Dealer and retail networks are broad (Screener cites 12,000 channel partners and 1,200 retail stores), which reduces single-customer risk relative to urea-only peers. Promoter holding above 55% anchors control; FII ownership increased through FY25 before moderating, which can add volatility when global agrochemical multiples compress. NACL adds a new set of agrochemical customers and export markets, slightly diversifying geographic exposure.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Phosphatic fertiliser remains the tonnage core: NPK+DAP sales reached 42.77 lakh MT in FY26 versus 39.88 lakh MT in FY25 on Screener insights. SSP volumes rose to 8.41 lakh MT. Urea is largely traded rather than manufactured, but volume more than doubled year on year to 22.65 lakh MT, changing working-capital needs. Specialty nutrients and nano DAP are smaller in rupees but strategically important for margin and differentiation. Crop protection grew faster than nutrition, with management targeting 20 to 25% revenue growth in that segment. Bio-products based on azadirachtin export to more than 40 countries. Mix shift toward crop protection and integrated retail is the bull case; mix shift toward low-spread traded urea is the bear case.",
  },
  seriesChart(
    "Fertiliser sales volume (lakh MT, Screener insights)",
    "Conclusion: Urea trading volume drove FY26 tonnage growth more than NPK alone.",
    ["FY25", "FY26"],
    [
      { name: "NPK+DAP", values: [39.88, 42.77], color: "#1e3a5f" },
      { name: "Urea (traded)", values: [13.59, 22.65], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global phosphoric acid, sulphur, and DAP prices set domestic spread when imports are open. Monsoon timing and rabi/kharif sowing patterns move quarterly fertiliser offtake. Department of Fertilizers subsidy release affects inventory and CFO. Crop protection multiples follow global generic agrochemical pricing and Chinese export competition. Coromandel-specific forces include Kakinada acid plant utilisation, Train H granulation startup, Senegal rock cost, and NACL integration. Currency moves matter on bio-product exports and imported intermediates. Policy headlines on nano fertilisers and organic inputs can re-rate the specialty portfolio independently of DAP.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit recovered from FY24 levels toward TTM near ₹3,217 crore, but operating margin compressed to about 10% on TTM revenue as urea trading grew at lower margin per rupee. ROCE on Screener stepped down from 38% in FY23 to 22% in FY26 as capital employed rose with capex and acquisitions. PAT did not keep pace with revenue in TTM because of a weak March 2026 quarter and prior-year other income spikes (March 2025 quarter other income was ₹473 crore on Screener). The history is an integrator investing through the downcycle, not a pure-play trading one-off.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: PAT lagged OP in TTM as tax and other income swung Q4 outcomes.",
    ["FY24", "FY25", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [2574, 2574, 3217], color: "#1e3a5f" },
      { name: "PAT", values: [1640, 2054, 1898], color: "#c27803" },
    ],
  ),
  seriesChart(
    "Operating margin % (consolidated, approximate)",
    "Conclusion: Margin compression versus FY23 peak reflects mix and integration costs.",
    ["FY23", "FY24", "FY25", "TTM"],
    [{ name: "OPM %", values: [12, 12, 11, 10], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations improved to ₹2,464 crore in FY25 before easing to ₹1,558 crore in FY26 on Screener as capex and working capital absorbed cash. Free cash flow was near zero in FY26 (₹22 crore) despite strong operating profit, which is typical when acid plants and acquisitions land in the same year. Inventory days rose toward 111 in FY26 while debtor days stayed near 24, a reasonable agrochemical profile but heavier than FY21 lows. CFO to operating profit ratio fell to about 71% in FY26, so earnings quality depends on subsidy timing and urea inventory turns over the next two quarters.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO remains positive but stepped down as integration capex intensified.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [591, 1428, 2464, 1558], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹1,506 crore at March 2026 are modest versus ₹24,461 crore total assets and ₹12,528 crore reserves, so solvency risk is low. The risk is return on incremental capital: if Kakinada acid plants or Senegal mining run over budget while phosphatic spreads compress, ROCE could drift below 18% and the stock de-rates from 28× trailing earnings. NACL goodwill and integration costs are not fully visible in our sources. A prolonged subsidy delay would stress working capital more than interest coverage. Fixed assets jumped to ₹6,737 crore in FY26, so depreciation will rise into FY27 even if utilisation ramps slowly.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with capex and M&A but stays far below asset base.",
    ["Mar FY24", "Mar FY25", "Mar FY26"],
    [{ name: "Borrowings", values: [492, 780, 1506], color: "#b91c1c" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Executive Chairman Arun Alagappan and Managing Director Sankarasubramanian Suresh lead a Murugappa-era governance culture with independent directors and published ESG reporting. Management incentives tie to revenue growth, profitability, and project execution on Kakinada and crop protection, which aligns with the stated strategy but can encourage capex when returns are unproven. Promoter stability reduces hostile risk but also limits float. The NACL deal shows willingness to use balance sheet capacity for inorganic crop protection scale, which helps long-term moat if integration succeeds.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised Kakinada backward integration, crop protection outperformance, retail expansion, and Senegal rock security. Acid plants commissioned in Q4 FY26. Crop protection mix rose and management maintained a 20 to 25% growth ambition. Urea trading exceeded prior volume targets, which helps revenue but not necessarily margin. NACL closed in August 2025. Train H granulation remains under construction for Q4 FY27. March 2026 PAT missed the run-rate implied by H1 FY26, flagging seasonality and tax noise rather than operational collapse.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: NPK Train H adds up to 7.5 lakh TPA at Kakinada; urea trading may stay elevated if spreads justify inventory. Margin: captive acid lowers imported phosphoric cost per tonne when utilisation exceeds 75%. Mix: crop protection and bio-products target high-teens to mid-20s growth, including NACL exports. Retail: Mana Gromor pushes specialty nutrients and CPC bundles. Raw material: Senegal rock phosphate ramp reduces external dependence. These drivers are partially priced at 28× trailing earnings, so execution must show up in FY27 PAT, not only revenue.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Acid plants reach steady state quickly, lifting phosphatic gross margin by 150 to 200 bps. Crop protection grows 25% with NACL synergies and export formulations. Nano DAP adoption accelerates, supporting premium pricing. Phosphatic global prices firm while captive rock contains cost. Working-capital days fall after subsidy normalisation. In that scenario FY27 PAT could approach ₹3,000 crore and justify a re-rating toward our bull price band near ₹2,441 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Global DAP prices fall while inventory is high, crushing traded fertiliser spreads. Acid plants face teething issues, keeping fixed costs underutilised. Urea trading volume stays high but low margin, diluting OPM. Crop protection growth slows to single digits on channel inventory. Senegal logistics cost overruns. Mar 2026-style tax and other-income volatility repeats. FY27 PAT could slip toward ₹1,700 crore and compress multiples toward our bear case near ₹1,037 per share.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples that reflect a quality agri integrator in a capex year (18× bear, 22× base, 24× bull), cross-checked with an EV/EBITDA sanity check on TTM operating profit. Bear FY27 PAT ₹1,700 crore implies about ₹1,037 per share (-41% vs ₹1,764 reference). Base PAT ₹2,550 crore implies about ₹1,902 (+8%). Bull PAT ₹3,000 crore implies about ₹2,441 (+38%). Base-case upside is below our 15% Buy threshold, so the reference price already captures much of the integration story unless bull drivers land together.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Only the bull scenario clears 15% upside; base is slightly above CMP but not enough for Buy.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1037, 1902, 2441, 1764], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: H1 FY26 strength faded in Mar 2026; seasonality matters for trailing multiples.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26"],
    [{ name: "PAT", values: [502, 793, 488, 115], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Monthly phosphoric acid plant utilisation and cost per tonne disclosures in investor decks. Train H mechanical completion at Kakinada. Crop protection segment PBIT margin after NACL consolidation. Urea trading volume versus inventory on balance sheet. Senegal rock shipment schedules. Q1 FY27 PAT and tax rate normalisation after weak Mar 2026 quarter. Any Department of Fertilizers change on nano product incentives. BSE/NSE concall transcripts for verbatim guidance on FY27 PAT bridge.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,764 reference. Base-case target near ₹1,902 offers about 8% upside, below our 15% Buy hurdle, while quality and integration optionality keep the name off Avoid. Upgrade to Buy if two consecutive quarters show consolidated OPM above 12% with crop protection revenue growth above 20% and FY27 PAT run-rate above ₹650 crore per quarter at normal tax rates, bringing base-case PAT toward ₹2,800 crore and target above ₹2,050. Downgrade to Avoid if phosphatic spreads compress for two quarters while borrowings exceed ₹2,000 crore without acid plant utilisation above 70%, or if TTM PAT falls below ₹1,600 crore with rising inventory days.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment PBIT for crop protection after NACL is not in the sources used. Exact acid plant cost per tonne and Senegal rock CIF cost are undisclosed. Urea trading margin per tonne is not broken out separately from manufactured NPK. March 2026 tax rate spike requires note-level reconciliation. Goodwill and amortisation from NACL are not modeled explicitly in scenarios. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
