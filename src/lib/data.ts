import type { ContentItem, Creator, EventItem, SourceKind, Topic } from "./types";
import { topicSlug } from "./utils";
import deepakIngested from "@/data/ingested/deepak-shenoy.json";

export const topics: Topic[] = [
  { slug: "mutual-funds", name: "Mutual funds", blurb: "SIPs, factsheets, direct vs regular, and how AMCs actually make money." },
  { slug: "taxation", name: "Taxation", blurb: "New regime, capital gains, ELSS, and what changed after indexation." },
  { slug: "markets", name: "Markets", blurb: "Daily tape, macros, and what the move actually means." },
  { slug: "retirement", name: "Retirement", blurb: "NPS, EPF, corpus maths, and withdrawal sequences." },
  { slug: "smallcaps", name: "Smallcaps", blurb: "Liquidity, freeze risk, and how research analysts cover the names." },
  { slug: "insurance", name: "Insurance", blurb: "Term, health, and the products that do not belong in a portfolio." },
  { slug: "fixed-income", name: "Fixed income", blurb: "Debt funds, SGBs, target-maturity, and credit risk in plain English." },
  { slug: "personal-finance", name: "Personal finance", blurb: "Cashflow, emergency funds, and behaviour — the unglamorous core." },
  { slug: "asset-allocation", name: "Asset allocation", blurb: "How registered advisers actually split money across years, not weeks." },
  { slug: "ipos", name: "IPOs", blurb: "DRHP reads, grey market noise, and when to skip the listing day." },
];

export const creators: Creator[] = [
  deepakIngested.creator as Creator,
  {
    slug: "ananya-mehra",
    name: "Ananya Mehra",
    city: "Mumbai",
    headline: "Makes mutual funds feel like a household appliance — useful, boring, on.",
    bio: "SEBI-registered investment adviser running a fee-only practice. Ananya publishes a Sunday Substack on SIPs and behaviour, and a YouTube series that walks through AMC factsheets line by line. She does not sell products. She does not take trail.",
    sebi: { type: "RIA", number: "INA000013482", validTill: "2028-03-31" },
    specialties: ["Mutual funds", "Personal finance", "Asset allocation"],
    sources: [
      { kind: "youtube", handle: "@ananyamehra", url: "https://youtube.com/@ananyamehra" },
      { kind: "substack", handle: "thesipdesk", url: "https://thesipdesk.substack.com" },
    ],
    initials: "AM",
    color: "#2154E8",
  },
  {
    slug: "vikram-shah",
    name: "Vikram Shah",
    city: "Bengaluru",
    headline: "Smallcap research without the Telegram tip culture.",
    bio: "Research analyst covering Indian small and midcaps. Vikram's public work is the opposite of a hot tip: thesis memos, what would kill the idea, and a monthly kill-list of names he no longer holds in the model book.",
    sebi: { type: "RA", number: "INH000011904", validTill: "2027-11-12" },
    specialties: ["Smallcaps", "Markets", "IPOs"],
    sources: [
      { kind: "youtube", handle: "@shahresearch", url: "https://youtube.com/@shahresearch" },
      { kind: "twitter", handle: "@vikramshah_ra", url: "https://x.com/vikramshah_ra" },
    ],
    initials: "VS",
    color: "#0C1B33",
  },
  {
    slug: "priya-natarajan",
    name: "Priya Natarajan",
    city: "Chennai",
    headline: "Retirement maths for people who still have a day job.",
    bio: "Registered investment adviser focused on retirement and NPS. Priya's Substack is long, numbered, and allergic to 'fire your job at 40' content. Most of her readers are 35–50 with EPF, a home loan, and one neglected NPS tier.",
    sebi: { type: "RIA", number: "INA000009771", validTill: "2027-06-30" },
    specialties: ["Retirement", "Taxation", "Personal finance"],
    sources: [
      { kind: "substack", handle: "afterthesalary", url: "https://afterthesalary.substack.com" },
      { kind: "twitter", handle: "@priya_nps", url: "https://x.com/priya_nps" },
    ],
    initials: "PN",
    color: "#8A3D2F",
  },
  {
    slug: "rohan-kapoor",
    name: "Rohan Kapoor",
    city: "New Delhi",
    headline: "Macro without the mysticism.",
    bio: "Research analyst writing about rates, flows, and the Indian tape. Rohan records a Tuesday podcast with a single chart and a single claim. If the claim does not survive the week, he posts the retraction on Twitter before the next episode.",
    sebi: { type: "RA", number: "INH000008220", validTill: "2028-01-15" },
    specialties: ["Markets", "Fixed income", "Asset allocation"],
    sources: [
      { kind: "podcast", handle: "One Chart Tuesday", url: "https://podcasts.apple.com/one-chart-tuesday" },
      { kind: "twitter", handle: "@rohankapoor_ra", url: "https://x.com/rohankapoor_ra" },
    ],
    initials: "RK",
    color: "#1F6B4A",
  },
  {
    slug: "neha-gupta",
    name: "Neha Gupta",
    city: "Pune",
    headline: "Tax is a design constraint, not a personality.",
    bio: "RIA who used to file returns for a Big Four desk. Neha's YouTube is a plain-language walkthrough of the new regime, capital gains, and the forms people actually get stuck on. She will not take a 'save tax with this product' brief.",
    sebi: { type: "RIA", number: "INA000015019", validTill: "2027-09-08" },
    specialties: ["Taxation", "Mutual funds", "Personal finance"],
    sources: [
      { kind: "youtube", handle: "@nehaguptaria", url: "https://youtube.com/@nehaguptaria" },
      { kind: "twitter", handle: "@neha_gupta_ria", url: "https://x.com/neha_gupta_ria" },
    ],
    initials: "NG",
    color: "#6B3FA0",
  },
  {
    slug: "arjun-desai",
    name: "Arjun Desai",
    city: "Mumbai",
    headline: "PMS allocation notes for people who already have a CA.",
    bio: "Portfolio manager running a SEBI-registered PMS. Public writing is a Substack on allocation and a short podcast after each quarterly. The point of listing here is so prospects can see the public work before a discovery call.",
    sebi: { type: "PMS", number: "INP000007441", validTill: "2028-05-20" },
    specialties: ["Asset allocation", "Markets", "Fixed income"],
    sources: [
      { kind: "substack", handle: "allocationnote", url: "https://allocationnote.substack.com" },
      { kind: "podcast", handle: "The Grid", url: "https://podcasts.apple.com/the-grid" },
    ],
    initials: "AD",
    color: "#9A6B12",
  },
  {
    slug: "kavya-iyer",
    name: "Kavya Iyer",
    city: "Hyderabad",
    headline: "Forensic reads of businesses that look cheap until they are not.",
    bio: "Research analyst. Kavya's YouTube is a whiteboard, a annual report, and a red pen. She covers midcaps and does a public 'I was wrong' episode every quarter — the opposite of a track-record montage.",
    sebi: { type: "RA", number: "INH000014560", validTill: "2027-12-01" },
    specialties: ["Smallcaps", "IPOs", "Markets"],
    sources: [
      { kind: "youtube", handle: "@kavyaiyerra", url: "https://youtube.com/@kavyaiyerra" },
      { kind: "substack", handle: "redpen", url: "https://redpen.substack.com" },
    ],
    initials: "KI",
    color: "#B42318",
  },
  {
    slug: "sameer-khan",
    name: "Sameer Khan",
    city: "Lucknow",
    headline: "First-principles money for first-job households.",
    bio: "Registered investment adviser working mostly with 25–35 year olds outside the metro bubble. Hindi + English YouTube. He is blunt about insurance mis-selling and the SIP videos that skip asset allocation entirely.",
    sebi: { type: "RIA", number: "INA000012208", validTill: "2028-02-14" },
    specialties: ["Personal finance", "Insurance", "Mutual funds"],
    sources: [
      { kind: "youtube", handle: "@sameerkhanria", url: "https://youtube.com/@sameerkhanria" },
      { kind: "twitter", handle: "@sameer_ria", url: "https://x.com/sameer_ria" },
    ],
    initials: "SK",
    color: "#0F6B7A",
  },
  {
    slug: "meera-joshi",
    name: "Meera Joshi",
    city: "Mumbai",
    headline: "Debt funds explained without calling them 'safe'.",
    bio: "Research analyst who spent a decade on a fixed-income desk. Meera's Substack is the place people go after they have already been burned by a credit-risk fund that was sold as liquid.",
    sebi: { type: "RA", number: "INH000006773", validTill: "2027-08-19" },
    specialties: ["Fixed income", "Mutual funds", "Taxation"],
    sources: [
      { kind: "substack", handle: "duration", url: "https://duration.substack.com" },
      { kind: "twitter", handle: "@meera_duration", url: "https://x.com/meera_duration" },
    ],
    initials: "MJ",
    color: "#1A4D6F",
  },
  {
    slug: "aditya-rao",
    name: "Aditya Rao",
    city: "Bengaluru",
    headline: "Goals first. Products last. Insurance almost never as investment.",
    bio: "RIA running a planning-led practice. Aditya's Twitter is a stream of worked examples — a 32-year-old with ESOPs, a couple with two home loans, a parent funding undergrad abroad. The YouTube is newer and slower.",
    sebi: { type: "RIA", number: "INA000010884", validTill: "2028-04-02" },
    specialties: ["Insurance", "Asset allocation", "Retirement"],
    sources: [
      { kind: "twitter", handle: "@aditya_rao_ria", url: "https://x.com/aditya_rao_ria" },
      { kind: "youtube", handle: "@adityaraoplan", url: "https://youtube.com/@adityaraoplan" },
    ],
    initials: "AR",
    color: "#2F4B2A",
  },
];

export const content: ContentItem[] = [
  ...(deepakIngested.content as ContentItem[]),
  {
    slug: "sip-feels-useless-bull-market",
    creatorSlug: "ananya-mehra",
    kind: "newsletter",
    source: "substack",
    title: "Why your SIP feels useless in a bull market",
    summary:
      "A 12% year does not mean your SIP 'isn't working'. Ananya walks through rupee-cost averaging with last year's Nifty path, and the three moments people actually pause.",
    topic: "Mutual funds",
    publishedAt: "2026-08-21T07:00:00+05:30",
    duration: "8 min read",
    url: "https://thesipdesk.substack.com/p/sip-feels-useless",
    featured: true,
  },
  {
    slug: "how-to-read-amc-factsheet",
    creatorSlug: "ananya-mehra",
    kind: "video",
    source: "youtube",
    title: "How to read an AMC factsheet in 14 minutes",
    summary:
      "Expense ratio is the easy line. The useful ones are portfolio turnover, the cash sleeve, and whether the 'flexi cap' is just a largecap with a story.",
    topic: "Mutual funds",
    publishedAt: "2026-08-18T18:00:00+05:30",
    duration: "14 min",
    url: "https://youtube.com/watch?v=amc-factsheet",
  },
  {
    slug: "smallcap-freeze-is-not-a-glitch",
    creatorSlug: "vikram-shah",
    kind: "thread",
    source: "twitter",
    title: "A smallcap freeze is not a glitch. It is the product.",
    summary:
      "Vikram's 12-post thread on why gates and valuation freezes show up in the same funds that were sold as 'the next decade of India'.",
    topic: "Smallcaps",
    publishedAt: "2026-08-21T11:20:00+05:30",
    duration: "12 posts",
    url: "https://x.com/vikramshah_ra/status/smallcap-freeze",
    featured: true,
  },
  {
    slug: "kill-list-august",
    creatorSlug: "vikram-shah",
    kind: "video",
    source: "youtube",
    title: "August kill-list: three names that left the book",
    summary:
      "Not a rant. Working capital, promoter pledge, and a related-party loop that was always there — Vikram just stopped pretending it was 'priced in'.",
    topic: "Smallcaps",
    publishedAt: "2026-08-16T09:30:00+05:30",
    duration: "22 min",
    url: "https://youtube.com/watch?v=kill-list-aug",
  },
  {
    slug: "nps-after-60-is-the-hard-part",
    creatorSlug: "priya-natarajan",
    kind: "newsletter",
    source: "substack",
    title: "NPS after 60 is the hard part. Accumulation is easy.",
    summary:
      "Annuity rules, the lump-sum, and why a 45-year-old should design the exit now — not in the year they retire and the form looks hostile.",
    topic: "Retirement",
    publishedAt: "2026-08-20T08:00:00+05:30",
    duration: "11 min read",
    url: "https://afterthesalary.substack.com/p/nps-after-60",
    featured: true,
  },
  {
    slug: "epf-vs-nps-vs-taxable",
    creatorSlug: "priya-natarajan",
    kind: "newsletter",
    source: "substack",
    title: "EPF vs NPS vs a taxable index fund, for one salary",
    summary:
      "A worked example with actual contribution caps. Priya refuses to answer 'which is best' without the tax slab and the retirement age.",
    topic: "Retirement",
    publishedAt: "2026-08-13T10:00:00+05:30",
    duration: "6 min read",
    url: "https://afterthesalary.substack.com/p/epf-vs-nps",
  },
  {
    slug: "rbi-pause-is-not-a-pivot",
    creatorSlug: "rohan-kapoor",
    kind: "podcast",
    source: "podcast",
    title: "The RBI pause is not a pivot (one chart)",
    summary:
      "Tuesday episode. Real rates, the USDINR sleeve, and why 'cuts are coming' is still a wish, not a path.",
    topic: "Markets",
    publishedAt: "2026-08-19T07:00:00+05:30",
    duration: "18 min",
    url: "https://podcasts.apple.com/one-chart-tuesday/rbi-pause",
  },
  {
    slug: "fii-outflow-thread",
    creatorSlug: "rohan-kapoor",
    kind: "thread",
    source: "twitter",
    title: "FIIs sold. That is not the same as India is uninvestable.",
    summary:
      "Flows, the passive bid, and a reminder that domestic SIPs are now large enough to be a character in the story — not a footnote.",
    topic: "Markets",
    publishedAt: "2026-08-21T09:05:00+05:30",
    duration: "9 posts",
    url: "https://x.com/rohankapoor_ra/status/fii-sold",
  },
  {
    slug: "new-regime-is-the-default",
    creatorSlug: "neha-gupta",
    kind: "video",
    source: "youtube",
    title: "The new regime is the default. Here is when the old one still wins.",
    summary:
      "A 16-minute walkthrough with HRA, 80C, and a home loan. Neha shows the crossover point instead of saying 'it depends'.",
    topic: "Taxation",
    publishedAt: "2026-08-17T19:00:00+05:30",
    duration: "16 min",
    url: "https://youtube.com/watch?v=new-regime-default",
    featured: true,
  },
  {
    slug: "elss-after-indexation",
    creatorSlug: "neha-gupta",
    kind: "thread",
    source: "twitter",
    title: "ELSS after indexation went away. The lock-in did not.",
    summary:
      "If you are still buying ELSS for 'tax plus equity', run the numbers against the new LTCG slab. The lock-in is now the expensive part.",
    topic: "Taxation",
    publishedAt: "2026-08-12T12:00:00+05:30",
    duration: "9 posts",
    url: "https://x.com/neha_gupta_ria/status/elss-after-indexation",
  },
  {
    slug: "60-30-10-is-not-a-personality",
    creatorSlug: "arjun-desai",
    kind: "newsletter",
    source: "substack",
    title: "60/30/10 is not a personality. It is a starting grid.",
    summary:
      "How Arjun's PMS thinks about equity, debt, and the sleeve that is allowed to be opportunistic — and the clients for whom it is the wrong grid entirely.",
    topic: "Asset allocation",
    publishedAt: "2026-08-15T11:00:00+05:30",
    duration: "7 min read",
    url: "https://allocationnote.substack.com/p/60-30-10",
  },
  {
    slug: "annual-report-red-pen",
    creatorSlug: "kavya-iyer",
    kind: "video",
    source: "youtube",
    title: "Red pen on a 'clean' annual report",
    summary:
      "Related parties, auditor rotation, and a footnote that does more work than the MD&A. Kavya does not name a buy. She names the questions.",
    topic: "Smallcaps",
    publishedAt: "2026-08-19T20:00:00+05:30",
    duration: "31 min",
    url: "https://youtube.com/watch?v=red-pen-ar",
  },
  {
    slug: "ipo-grey-market-is-not-research",
    creatorSlug: "kavya-iyer",
    kind: "newsletter",
    source: "substack",
    title: "The grey market is a mood. The DRHP is the work.",
    summary:
      "A listing-week essay on why GMP is not a valuation, and the three DRHP sections Kavya reads before she decides to skip.",
    topic: "IPOs",
    publishedAt: "2026-08-14T08:30:00+05:30",
    duration: "9 min read",
    url: "https://redpen.substack.com/p/gmp-is-a-mood",
  },
  {
    slug: "term-insurance-before-sip",
    creatorSlug: "sameer-khan",
    kind: "video",
    source: "youtube",
    title: "Buy term insurance before you buy a SIP. Yes, still.",
    summary:
      "A first-job video in Hindi and English. Sameer is tired of 24-year-olds with three thematic funds and no cover.",
    topic: "Insurance",
    publishedAt: "2026-08-20T17:30:00+05:30",
    duration: "11 min",
    url: "https://youtube.com/watch?v=term-before-sip",
  },
  {
    slug: "ulip-is-not-a-tax-hack",
    creatorSlug: "sameer-khan",
    kind: "thread",
    source: "twitter",
    title: "If someone sold you a ULIP as a tax hack, here is the unwind.",
    summary:
      "Surrender charges, the 'bonus', and the SIP you could have been running. Sameer keeps the maths on one screen.",
    topic: "Insurance",
    publishedAt: "2026-08-18T13:10:00+05:30",
    duration: "8 posts",
    url: "https://x.com/sameer_ria/status/ulip-unwind",
  },
  {
    slug: "credit-risk-was-never-liquid",
    creatorSlug: "meera-joshi",
    kind: "newsletter",
    source: "substack",
    title: "Credit risk was never liquid. The brochure was.",
    summary:
      "Meera on the funds that were sold as 'debt plus a little extra'. Duration, credit, and why 'slightly higher YTM' is not a strategy.",
    topic: "Fixed income",
    publishedAt: "2026-08-21T06:45:00+05:30",
    duration: "10 min read",
    url: "https://duration.substack.com/p/credit-risk-brochure",
    featured: true,
  },
  {
    slug: "target-maturity-for-a-known-date",
    creatorSlug: "meera-joshi",
    kind: "newsletter",
    source: "substack",
    title: "Target-maturity funds are for a date. Not for a vibe.",
    summary:
      "If you know the year the money needs to show up — a down payment, a tuition bill — this is the product. If you do not, it is not.",
    topic: "Fixed income",
    publishedAt: "2026-08-11T09:00:00+05:30",
    duration: "4 min read",
    url: "https://duration.substack.com/p/target-maturity-date",
  },
  {
    slug: "esops-and-a-home-loan",
    creatorSlug: "aditya-rao",
    kind: "thread",
    source: "twitter",
    title: "A 32-year-old with ESOPs and a home loan, on one page",
    summary:
      "Concentration risk, the vesting calendar, and why Aditya will not let the ESOP 'be the equity allocation'. A planning note, not a product pitch.",
    topic: "Asset allocation",
    publishedAt: "2026-08-19T14:00:00+05:30",
    duration: "11 posts",
    url: "https://x.com/aditya_rao_ria/status/esops-home-loan",
  },
  {
    slug: "health-cover-before-fancy-riders",
    creatorSlug: "aditya-rao",
    kind: "video",
    source: "youtube",
    title: "Health cover: a base plan before the riders",
    summary:
      "Room rent, restoration, and the rider that is just a more expensive waiting period. Aditya keeps it to one family and one city.",
    topic: "Insurance",
    publishedAt: "2026-08-10T18:00:00+05:30",
    duration: "13 min",
    url: "https://youtube.com/watch?v=health-base-plan",
  },
  {
    slug: "direct-vs-regular-is-not-the-whole-story",
    creatorSlug: "ananya-mehra",
    kind: "newsletter",
    source: "substack",
    title: "Direct vs regular is not the whole story. Behaviour is.",
    summary:
      "Trail is real. So is the adviser who stopped a client from rotating into a sector fund in March. Ananya tries to hold both facts at once.",
    topic: "Mutual funds",
    publishedAt: "2026-08-07T07:00:00+05:30",
    duration: "7 min read",
    url: "https://thesipdesk.substack.com/p/direct-vs-regular",
  },
];

export const events: EventItem[] = [
  {
    slug: "factsheet-clinic-aug",
    creatorSlug: "ananya-mehra",
    title: "Factsheet clinic: bring one fund, leave with a method",
    summary:
      "A 60-minute webinar. Ananya screenshares three live factsheets from the audience. No stock tips. No scheme recommendations. Just the reading order.",
    format: "webinar",
    startsAt: "2026-08-26T19:30:00+05:30",
    timezone: "IST",
    location: "Zoom",
    registerUrl: "https://thesipdesk.substack.com/factsheet-clinic",
    topic: "Mutual funds",
    seats: "120 seats",
  },
  {
    slug: "smallcap-ama-sept",
    creatorSlug: "vikram-shah",
    title: "AMA: what a freeze taught this cycle",
    summary:
      "Open questions on liquidity, gates, and how Vikram changed position sizing after 2024–25. He will not discuss individual names from the kill-list live.",
    format: "ama",
    startsAt: "2026-09-03T20:00:00+05:30",
    timezone: "IST",
    location: "YouTube Live",
    registerUrl: "https://youtube.com/@shahresearch/live",
    topic: "Smallcaps",
  },
  {
    slug: "nps-exit-workshop",
    creatorSlug: "priya-natarajan",
    title: "Workshop: design the NPS exit at 45, not 60",
    summary:
      "A 90-minute working session. Bring your NPS login and a target year. Priya walks the annuity vs lump-sum split with real sliders.",
    format: "workshop",
    startsAt: "2026-09-06T10:00:00+05:30",
    timezone: "IST",
    location: "Zoom",
    registerUrl: "https://afterthesalary.substack.com/nps-workshop",
    topic: "Retirement",
    seats: "40 seats",
  },
  {
    slug: "one-chart-live",
    creatorSlug: "rohan-kapoor",
    title: "Live: one chart, then questions",
    summary:
      "A shorter live version of the Tuesday show. Rohan puts up the chart 10 minutes early so the comments can actually be about it.",
    format: "live",
    startsAt: "2026-08-25T08:30:00+05:30",
    timezone: "IST",
    location: "Twitter Live",
    registerUrl: "https://x.com/rohankapoor_ra",
    topic: "Markets",
  },
  {
    slug: "itr-office-hours",
    creatorSlug: "neha-gupta",
    title: "ITR office hours for salaried + ESOP folks",
    summary:
      "Neha will not file your return. She will walk the two screens people freeze on — schedule FA-adjacent questions, and ESOP perquisite.",
    format: "webinar",
    startsAt: "2026-08-28T19:00:00+05:30",
    timezone: "IST",
    location: "Zoom",
    registerUrl: "https://youtube.com/@nehaguptaria",
    topic: "Taxation",
    seats: "80 seats",
  },
  {
    slug: "pms-quarterly-webinar",
    creatorSlug: "arjun-desai",
    title: "Q1 allocation note, for clients and prospects",
    summary:
      "The public version of Arjun's quarterly. What changed in the grid, what did not, and the questions he wants in the discovery call.",
    format: "webinar",
    startsAt: "2026-09-10T17:00:00+05:30",
    timezone: "IST",
    location: "Zoom",
    registerUrl: "https://allocationnote.substack.com/q1-webinar",
    topic: "Asset allocation",
  },
  {
    slug: "drhp-reading-group",
    creatorSlug: "kavya-iyer",
    title: "DRHP reading group: one filing, one hour",
    summary:
      "Kavya picks a live IPO filing. Attendees read the risk factors and related-party section beforehand. The hour is for the arguments.",
    format: "workshop",
    startsAt: "2026-09-02T19:00:00+05:30",
    timezone: "IST",
    location: "Google Meet",
    registerUrl: "https://redpen.substack.com/drhp-group",
    topic: "IPOs",
    seats: "25 seats",
  },
  {
    slug: "first-job-money-lucknow",
    creatorSlug: "sameer-khan",
    title: "First-job money, in Lucknow",
    summary:
      "An in-person evening for people in their first or second job. Term, emergency fund, SIP. Sameer will be rude about ULIPs. Tea is included.",
    format: "workshop",
    startsAt: "2026-08-30T16:00:00+05:30",
    timezone: "IST",
    location: "Hazratganj, Lucknow",
    registerUrl: "https://youtube.com/@sameerkhanria",
    topic: "Personal finance",
    seats: "35 seats",
  },
  {
    slug: "debt-funds-past",
    creatorSlug: "meera-joshi",
    title: "What 'safe debt' meant in 2020, and what it means now",
    summary:
      "A recorded webinar from earlier this month. Kept up because the questions still arrive every week.",
    format: "webinar",
    startsAt: "2026-08-08T18:00:00+05:30",
    timezone: "IST",
    location: "Zoom",
    registerUrl: "https://duration.substack.com/safe-debt",
    topic: "Fixed income",
  },
];

const now = new Date("2026-08-21T18:30:00+05:30");

export function getCreator(slug: string) {
  return creators.find((c) => c.slug === slug);
}

export function getContent(slug: string) {
  return content.find((c) => c.slug === slug);
}

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function contentByCreator(slug: string) {
  return content
    .filter((c) => c.creatorSlug === slug)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function eventsByCreator(slug: string) {
  return events
    .filter((e) => e.creatorSlug === slug)
    .sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
}

export function contentBySource(kind: SourceKind) {
  return latestContent().filter((c) => c.source === kind);
}

export function featuredContent() {
  const heroRank = (kind: ContentItem["kind"]) =>
    kind === "newsletter" || kind === "video" ? 0 : 1;
  return content
    .filter((c) => c.featured)
    .sort(
      (a, b) =>
        heroRank(a.kind) - heroRank(b.kind) ||
        +new Date(b.publishedAt) - +new Date(a.publishedAt),
    );
}

export function latestContent() {
  return [...content].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export function upcomingEvents() {
  return events
    .filter((e) => new Date(e.startsAt) >= now)
    .sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
}

export function pastEvents() {
  return events
    .filter((e) => new Date(e.startsAt) < now)
    .sort((a, b) => +new Date(b.startsAt) - +new Date(a.startsAt));
}

export function contentByTopic(name: string) {
  return latestContent().filter((c) => c.topic === name);
}

export function eventsByTopic(name: string) {
  return [...upcomingEvents(), ...pastEvents()].filter((e) => e.topic === name);
}

export function creatorsByTopic(name: string) {
  return creators.filter((c) => c.specialties.includes(name));
}

export function topicBySlug(slug: string) {
  return topics.find((t) => t.slug === slug);
}

export function topicFromName(name: string) {
  return topics.find((t) => topicSlug(t.name) === topicSlug(name)) ?? topics.find((t) => t.name === name);
}

export function countContent(slug: string) {
  return content.filter((c) => c.creatorSlug === slug).length;
}

export function countUpcoming(slug: string) {
  return upcomingEvents().filter((e) => e.creatorSlug === slug).length;
}

/** Mock “followed” voices for Portfolio until auth exists. */
export const portfolioCreatorSlugs = [
  "deepak-shenoy",
  "ananya-mehra",
  "vikram-shah",
  "priya-natarajan",
  "rohan-kapoor",
];

export function portfolioCreators() {
  return portfolioCreatorSlugs.map((slug) => getCreator(slug)).filter(Boolean) as Creator[];
}

export function portfolioContent() {
  const set = new Set(portfolioCreatorSlugs);
  return latestContent().filter((c) => set.has(c.creatorSlug));
}

export function newsTopics() {
  return ["Markets", "Taxation", "IPOs", "Fixed income", "Mutual funds"];
}

export function newsContent() {
  const set = new Set(newsTopics());
  const tagged = latestContent().filter((c) => set.has(c.topic));
  return tagged.length ? tagged : latestContent();
}

export type HomeFeedEntry =
  | { type: "content"; item: ContentItem }
  | { type: "event"; event: EventItem };

/** Suggested Home feed: recent work with upcoming events woven in. */
export function homeFeed(): HomeFeedEntry[] {
  const pieces = latestContent().slice(0, 10);
  const eventsList = upcomingEvents().slice(0, 3);
  const out: HomeFeedEntry[] = [];
  let e = 0;
  pieces.forEach((item, i) => {
    out.push({ type: "content", item });
    if ((i === 1 || i === 4 || i === 7) && eventsList[e]) {
      out.push({ type: "event", event: eventsList[e] });
      e += 1;
    }
  });
  while (e < eventsList.length) {
    out.push({ type: "event", event: eventsList[e] });
    e += 1;
  }
  return out;
}
