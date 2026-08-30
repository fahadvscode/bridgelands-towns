export const SITE_URL = "https://bridgelandstowns.ca";
export const SITE_NAME = "Bridgelands Townhomes";
export const SITE_ORG_NAME = "Bridgelands Townhomes — Independent Project Information";
export const PROJECT_NAME = "Bridgelands";
export const PROJECT_ALT_NAME = "Bridgelands Homes";
export const CITY = "Vaughan (Woodbridge)";
export const CITY_SHORT = "Woodbridge";
export const MUNICIPALITY = "City of Vaughan";
export const REGION = "York Region";
export const PROVINCE = "Ontario";
export const INTERSECTION = "Weston Road & Teston Road";
export const BUILDERS_LINE = "Arista Homes, Deco Homes, and Opus Homes";
export const BUILDERS_SHORT = "Arista, Deco & Opus Homes";
export const STATUS = "Coming Soon";
export const STATUS_BADGE = "Coming Soon — VIP Registration Open";
export const SITE_SOURCE = SITE_URL;
export const LAST_UPDATED = "August 29, 2026";
export const LAST_UPDATED_ISO = "2026-08-29";
export const WORDMARK = "Bridgelands Towns";
export const WORDMARK_LOCATOR = "Woodbridge, Vaughan";
export const CTA_LABEL = "Register for VIP Access";
export const CTA_NAV_LABEL = "Register";
export const HERO_CTA_LABEL = "Get VIP Access — Free.";
export const FORM_HEADING = "VIP registration";
export const FORM_LEDE =
  "Free to register. Priority notice when townhome floor plans and pricing are released. No purchase obligation and no phone call required.";
export const CONTACT_EMAIL = "privacy@bridgelandstowns.ca";
export const HERO_EYEBROW = "Coming Soon · Woodbridge, Vaughan";
export const HERO_SUBHEAD =
  "A potential freehold townhome collection at the Bridgelands master-planned community, by Arista Homes, Deco Homes, and Opus Homes.";
export const HUB_URL = "https://bridgelands-woodbridge.ca";
export const HUB_LOCATION_URL = "https://bridgelands-woodbridge.ca/location";
export const DETACHED_URL = "https://bridgelandsdetached.com";

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website focused on Bridgelands' potential townhome collection. It is not the official website of Arista Homes, Deco Homes, or Opus Homes, and is not affiliated with or endorsed by any of them. All information is for illustration only and subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of August 29, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Bridgelands and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const UNVERIFIED_NOTE = "[UNVERIFIED — CONFIRM BEFORE LAUNCH]";

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Weston%20Road%20and%20Teston%20Road%2C%20Vaughan%2C%20Ontario&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const ADDRESS_LINE = "Near Weston Road & Teston Road, Woodbridge, Vaughan, Ontario";

export const HERO_IMAGE = {
  src: "/images/bridgelands-townhome-rendering.jpg",
  width: 1920,
  height: 1280,
  alt: "Illustrative townhome streetscape related to the expected Bridgelands townhome collection in Woodbridge, Vaughan. Not an official builder rendering.",
} as const;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "Bridgelands Townhomes — Woodbridge, Vaughan",
    description:
      "Expected freehold townhome collection at Bridgelands by Arista, Deco & Opus Homes. Register for VIP access.",
    h1: "Bridgelands Townhomes — Woodbridge, Vaughan",
  },
  collections: {
    path: "/collections",
    title: "Bridgelands Townhome Collection",
    description: "What's known about the expected Bridgelands townhome collection.",
    h1: "The Expected Bridgelands Townhome Collection",
  },
  pricing: {
    path: "/pricing",
    title: "Bridgelands Townhome Prices",
    description: "Pricing status for a potential Bridgelands townhome collection.",
    h1: "Bridgelands Townhome Pricing Status",
  },
  location: {
    path: "/location",
    title: "Bridgelands Townhomes Location",
    description: "Weston Rd & Teston Rd location, transit, and comparable townhome communities.",
    h1: "Bridgelands Townhomes Location — Weston Road & Teston Road",
  },
  faq: {
    path: "/faq",
    title: "Bridgelands Townhomes FAQ",
    description: "Answers about Bridgelands' potential townhome collection.",
    h1: "Bridgelands Townhomes — Frequently Asked Questions",
  },
  register: {
    path: "/register",
    title: "Register — Bridgelands Townhomes VIP",
    description: "Free VIP registration for Bridgelands townhome updates.",
    h1: "Register for VIP Access — Bridgelands Townhomes",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration received — Bridgelands Townhomes",
    description:
      "Your Bridgelands townhome VIP registration has been received. You will be notified when floor plans and pricing are released.",
    h1: "You are on the Bridgelands townhome VIP list",
    robots: { index: false, follow: true },
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — Bridgelands Townhomes",
    description:
      "How this independent Bridgelands townhome information site collects, stores, and uses registration information.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use — Bridgelands Townhomes",
    description:
      "Terms of use for this independent Bridgelands townhome information and registration website.",
    h1: "Terms of Use",
  },
} as const satisfies Record<string, PageMeta>;

export const NAV = [
  { href: "/collections", label: "Collection" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/collections", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
];

export const HOME_ANSWER =
  "A townhome collection at Bridgelands has not been officially confirmed by Arista Homes, Deco Homes, or Opus Homes as of August 2026. Based on the same builder trio's other joint communities — SouthCal in Caledon and The Castle Mile in Brampton, both of which include freehold townhomes — a comparable townhome collection at Bridgelands is a reasonable expectation pending official confirmation.";

export const HOME_WHAT_IS_ANSWER =
  "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, developed by Arista Homes, Deco Homes, and Opus Homes — the same trio behind SouthCal in Caledon and The Castle Mile in Brampton.";

export const QUICK_FACTS: { field: string; value: string }[] = [
  { field: "Builders", value: "Arista Homes, Deco Homes, Opus Homes" },
  { field: "Product Focus", value: "Townhome collection (expected, unconfirmed)" },
  { field: "Intersection", value: "Weston Road & Teston Road" },
  { field: "City", value: "Vaughan (Woodbridge), Ontario" },
  { field: "Ownership Structure", value: "Freehold expected, based on comparable builder projects" },
  { field: "Starting Price", value: "To be announced" },
  { field: "Status", value: "Coming Soon — VIP Registration Open" },
];

export const HOME_OVERVIEW: string[] = [
  "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, a neighbourhood within the City of Vaughan, Ontario, developed by a partnership of Arista Homes, Deco Homes, and Opus Homes. This site focuses specifically on what is known — and not yet known — about a potential townhome collection within the community.",
  "While Bridgelands' exact home types have not been officially confirmed, the same three-builder partnership has a track record of including freehold townhomes in its other joint GTA communities. SouthCal, near Hurontario Street and Highway 410 in Caledon, and The Castle Mile, at 9491 The Gore Road in Brampton's Castlemore area, both feature freehold townhome offerings alongside detached homes.",
  "The Castle Mile's freehold townhome and detached collection ranged from 1,583 to 4,050 square feet, which offers a rough sense of the scale these builders typically work at — though this is general context, not a confirmed size range for any future Bridgelands townhome product.",
  "As of August 2026, no townhome floor plans, sizes, or pricing have been released for Bridgelands. Buyers interested specifically in the townhome format can register here for priority notification the moment the builders confirm what's included in the community's product mix.",
];

export const HOME_WHY_TOWNS: string[] = [
  "Most public pages that mention Bridgelands treat the project as a single, undifferentiated community. That is useful for a first look. It is not useful if the question is whether a townhome — rather than a detached lot — is likely to be part of the offering, and what that product has looked like when this same builder trio has planned it elsewhere.",
  "This site exists for that second question. It does not impersonate Arista Homes, Deco Homes, or Opus Homes, and it does not invent a floor-plan book. It gathers the publicly sourced facts that apply to a townhome buyer at Weston Road and Teston Road, flags what remains unverified, and points to the comprehensive hub at bridgelands-woodbridge.ca whenever the answer is about builders, detached homes, or the wider Woodbridge area rather than the townhome line itself.",
  "For households comparing attached product across the north-west GTA, the relevant pattern is freehold towns at the trio's other joint communities, not a published Bridgelands price list. SouthCal's townhome offering is in active pre-construction registration in Caledon. The Castle Mile's mixed freehold collection in Brampton has been described, by a third-party source, as spanning 1,583 to 4,050 square feet and set to complete in 2025. Neither figure is a Bridgelands specification.",
  "What a Woodbridge townhome buyer can do today is narrow: register for notice, read the comparable product context, and treat every size, deposit, and occupancy claim that does not come from the builders as unconfirmed. That is the honest state of the market as of August 29, 2026.",
];

export const HOME_BUYER_NOTES: string[] = [
  "A townhome at a master-planned community is a different purchase from a detached lot even when both sit on the same street grid. Attached product typically trades a smaller lot and shared party walls for a lower entry price than the detached line, and — when it is freehold — avoids the condominium corporation structure that attached stacked towns sometimes carry. Bridgelands has not confirmed either the attached product or the tenure. Freehold is the working assumption only because SouthCal and The Castle Mile used it.",
  "VIP registration on this site does not reserve a unit, lock a price, or collect a deposit. It records a name, email, phone number, whether the registrant is a licensed real estate agent, and CASL consent, so that a townhome-interested buyer can be notified if and when floor plans are released. There is no phone number on this site and no named salesperson.",
];

export const COLLECTIONS_ANSWER =
  "A specific townhome collection has not yet been confirmed for Bridgelands. Based on the builder trio's comparable communities, a freehold townhome offering — potentially spanning multiple lot widths or configurations — is a reasonable expectation pending official release.";

export const COLLECTIONS_SIZE_ANSWER =
  "Exact sizes for a Bridgelands townhome collection have not been released. For general context, The Castle Mile's freehold townhome and detached product from the same builder trio ranged from 1,583 to 4,050 square feet across the full collection, mixed with detached homes.";

export const COLLECTIONS_FREEHOLD_ANSWER =
  "Ownership structure for a Bridgelands townhome collection has not been officially confirmed. The builder trio's other joint communities, including SouthCal and The Castle Mile, have offered freehold townhomes, making freehold a reasonable expectation pending confirmation.";

export const COLLECTION_CARD = {
  slug: "freehold-towns",
  name: "Freehold Townhome Collection (expected)",
  status: "Sizes, configurations, and pricing not yet confirmed",
  body: "Comparable product from the same builder trio at The Castle Mile ranged 1,583–4,050 sq ft across its full mixed collection. Register for release notification.",
};

export const COLLECTIONS_BODY: string[] = [
  "Arista Homes, Deco Homes, and Opus Homes have not published a Bridgelands townhome brochure, elevation set, or unit schedule as of August 29, 2026. Third-party project pages that describe the community as Coming Soon also leave home types, sizes, and bedroom counts as to be announced. Anyone stating a confirmed Bridgelands townhome lineup is ahead of the builders.",
  "The reason this page still discusses a townhome collection is the trio's other joint work. SouthCal, near Hurontario Street and Highway 410 in Caledon, includes freehold townhomes in an active pre-construction registration. The Castle Mile, at 9491 The Gore Road in Brampton's Castlemore area, included freehold townhomes in a mixed collection with detached homes. Those two communities are not Bridgelands, and their plans are not transferable. They are the only public pattern available for how this partnership has treated attached product.",
  "When a three-builder community does include towns, the offering is often split by lot width, storey count, or which partner constructs which street. That division has been visible at the group's other joint sites. It has not been disclosed for Bridgelands. Until a site plan names which builder is responsible for the attached product — if attached product is confirmed at all — treat any “Arista towns” or “Deco towns” claim as speculation.",
  "Square footage is the number buyers ask for first and the number this page cannot give. The Castle Mile range of 1,583 to 4,050 square feet covers both townhomes and detached homes in one mixed collection. It is not a Bridgelands townhome size band. A 20-foot town and a 50-foot detached lot can both sit inside that span. Registering here is how a townhome-focused buyer gets the actual numbers if they are released, rather than borrowing Brampton figures.",
  "Bedroom counts, garage configurations, basement options, and rooftop terraces are likewise unpublished. GTA freehold towns from this builder group have historically included a mix of three- and four-bedroom layouts with front-loaded or rear-lane parking depending on the street, but that history is not a specification for Woodbridge. This page will replace “expected” language with confirmed collections the moment the builders publish them.",
];

export const COLLECTIONS_WHAT_TO_WATCH: { title: string; body: string }[] = [
  {
    title: "A published unit mix",
    body: "The first document that turns this page from expectation into fact is a Bridgelands collection list that names townhomes as a product line, with lot widths or model names. Until that list exists, the townhome collection remains expected, not confirmed.",
  },
  {
    title: "Tenure on the plan",
    body: "Freehold versus condominium townhomes changes carrying costs, reserve-fund exposure, and how an assignment is documented. SouthCal and The Castle Mile used freehold towns. Bridgelands has not said which structure it will use, if it uses towns at all.",
  },
  {
    title: "Which builder constructs the attached product",
    body: "Multi-builder communities sometimes assign towns to one partner and detached homes to another. That assignment is unpublished for Bridgelands. Builder-spotlight sites at bridgelandsarista.ca, bridgelandsdeco.ca, and bridgelandsopus.ca cover each firm in more depth without answering this site-specific question.",
  },
];

export const PRICING_ANSWER =
  "Pricing for Bridgelands townhomes has not yet been announced. As comparable context only, The Castle Mile — from the same builder trio — offered freehold townhomes and detached homes ranging from 1,583 to 4,050 square feet; this is not a price or size guarantee for Bridgelands.";

export const PRICING_DEPOSIT_ANSWER =
  "No deposit structure has been published for Bridgelands, including for a potential townhome collection, as of August 2026. Registered buyers are typically notified of deposit terms once VIP pricing is released.";

export const PRICING_ROWS: { field: string; status: string }[] = [
  { field: "Starting Price", status: "To be announced" },
  { field: "Deposit Structure", status: "To be announced" },
  { field: "Maintenance Fees", status: "To be announced" },
  { field: "Tentative Occupancy", status: "To be announced" },
  { field: "Incentives", status: "To be announced" },
  { field: "Sizes", status: "To be announced" },
];

export const PRICING_BODY: string[] = [
  "A price for a Bridgelands townhome cannot be stated because Arista Homes, Deco Homes, and Opus Homes have not released one. Coming Soon, in this context, means the sales package — a price list, a deposit schedule, model names, and a launch date — has not been published. This page records that absence in public rather than hiding it behind a “call for pricing” wall.",
  "Comparable communities are useful for scale and useless for a budget. The Castle Mile's mixed freehold collection from the same trio spanned 1,583 to 4,050 square feet. That is a size observation from a Brampton project, not a Woodbridge sticker price. SouthCal's Caledon townhomes are in active pre-construction registration with their own, separate commercial terms. Neither project's pricing should be copied onto Bridgelands.",
  "Deposit structure is equally unpublished. GTA freehold-town launches often use a staged deposit payable over months after a firm agreement, sometimes with an extended schedule offered during a VIP window. None of those mechanics have been confirmed for Bridgelands. A third-party source discussing the community in general terms has mentioned VIP-access categories such as early floor-plan access and a potential extended deposit, without dollar amounts or a townhome-specific schedule. That claim is unverified for this product line.",
  "Maintenance fees depend on tenure. If Bridgelands towns are freehold in the same sense as SouthCal and The Castle Mile, monthly condominium fees may not apply in the stacked-town sense, though a small common-element or parcel-of-tied-land arrangement can still exist depending on how the plan of subdivision is registered. If the towns are condominium, a reserve fund and monthly fees would apply. Until tenure is published, any fee figure is invented.",
  "Occupancy is to be announced. The Castle Mile has been described by a third-party source as set to complete in 2025, which would place that Brampton community later in its cycle than a Coming Soon Woodbridge launch. That timeline does not describe Bridgelands. Incentives, assignment credits, and design-studio allowances are likewise unpublished. This site will not fabricate urgency or a “starting from” number to fill the table.",
];

export const PRICING_HOW_TO_READ: string[] = [
  "Read every “to be announced” cell as a current fact, not a missing graphic. The honest commercial status of a potential Bridgelands townhome as of August 29, 2026 is that there is no public price, no public deposit, and no public occupancy. Registration does not lock any of those terms.",
  "When a price list appears, townhome buyers should compare it against the detached line at the same community — if a detached line is confirmed — rather than against SouthCal or The Castle Mile. Lot width, included finishes, and development charges can move attached and detached pricing in different directions even on the same street. Until that list exists, the only action this site offers is a free VIP registration with no phone call.",
];

export const LOCATION_ANSWER =
  "Bridgelands is located near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, roughly a 10–13 minute drive from Maple GO Station.";

export const LOCATION_TRANSIT =
  "A third-party source places Bridgelands roughly a 10–13 minute drive from Maple GO Station, with a GO train ride to Toronto's Union Station of approximately 34 minutes, and close to Highways 400, 407, and 427.";

export const LOCATION_TRANSIT_BODY: string[] = [
  "For a townhome household, the commute question is usually whether a car is still required every weekday. At Weston Road and Teston Road, the working answer from a third-party source is a 10–13 minute drive to Maple GO Station, then about 34 minutes on the Barrie line to Union Station. That is a drive-to-GO pattern, not a published walk-to-platform promise. Bridgelands has not released a site plan showing pedestrian connections, a shuttle, or parking for the GO lot.",
  "Highways 400, 407, and 427 sit within reach of the same intersection, which is how many Woodbridge and Maple households already move toward Brampton, Pearson Airport, and midtown Toronto. A townhome buyer who already drives those corridors can treat the highway access as an existing regional fact. A buyer who needs a station at the end of a sidewalk should wait for a plan; this page will not invent one.",
];

export const LOCATION_SHOPPING =
  "Vaughan Mills Mall is cited by a third-party source as roughly an 8–11 minute drive away, and Cortellucci Vaughan Hospital as roughly a 7-minute drive away.";

export const LOCATION_SCHOOLS =
  "Nearby schools cited by a third-party source include Tommy Douglas Secondary School, Johnny Lombardi Public School, Teston Village Public School, Maple High School, and St. Joan of Arc Catholic High School. Exact catchment boundaries for Bridgelands have not been independently confirmed. For the full location breakdown including parks, recreation, and the complete school and healthcare context, see bridgelands-woodbridge.ca/location.";

export const LOCATION_COMPARE_ANSWER =
  "Bridgelands and SouthCal are separate communities from the same builder trio — Arista Homes, Deco Homes, and Opus Homes — in different cities (Vaughan vs. Caledon). SouthCal's townhome offering is in active pre-construction registration; a Bridgelands townhome collection has not yet been confirmed or priced.";

export const LOCATION_RECREATION =
  "Nearby recreational areas cited by a third-party source for the Weston Road and Teston Road area include North Maple Regional Park, Eagles Nest Golf Club, Copper Creek Golf Club, Chatfield District Park, Nashville Conservation Reserve, Maple Downs Golf & Country Club, Mackenzie Glen District Park, Wildberry Pond, Cold Creek Conservation Area, and Maple Nature Reserve Trail. Those amenities sit in the same part of Vaughan as the proposed community; they are not Bridgelands amenities until a site plan says so.";

export const COMPARISON_INTRO =
  "Bridgelands, SouthCal, and The Castle Mile share a builder partnership — Arista Homes, Deco Homes, and Opus Homes — and nothing else that a townhome buyer can rely on. They sit in three municipalities, follow three timelines, and will not share a price list or a floor-plan book.";

export const COMPARISON_ROWS: {
  community: string;
  location: string;
  status: string;
  highlight?: boolean;
}[] = [
  {
    community: "Bridgelands",
    location: "Weston Rd & Teston Rd, Woodbridge",
    status: "Expected, unconfirmed",
    highlight: true,
  },
  {
    community: "SouthCal",
    location: "Hurontario St & Hwy 410, Caledon",
    status: "Active — freehold towns in pre-construction",
  },
  {
    community: "The Castle Mile",
    location: "9491 The Gore Rd, Castlemore (Brampton)",
    status: "Freehold towns, 1,583–4,050 sq ft, completing 2025",
  },
];

export const LOCATION_AREA_BODY: string[] = [
  "Woodbridge is a neighbourhood inside the City of Vaughan, in York Region. The Weston Road and Teston Road intersection sits toward the north of that neighbourhood, closer to Maple's GO station and hospital cluster than to Woodbridge's older retail strips. A townhome here, if confirmed, would be a Vaughan purchase with York Region taxes, York Region school boards, and a Woodbridge mailing identity — not a Caledon or Brampton purchase wearing the same builder names.",
  "Vaughan Mills Mall, cited at roughly 8–11 minutes' drive by a third-party source, is the large enclosed retail node most often attached to this geography. Cortellucci Vaughan Hospital, cited at roughly seven minutes, is the acute-care anchor that earlier generations of Woodbridge buyers did not have nearby. Everyday grocery and plaza retail along Weston Road and Major Mackenzie Drive is already built; it is not a future amenity on a Bridgelands brochure.",
];

export const REGISTER_ANSWER =
  "Buyers can register for VIP access by submitting their name, email, and phone number through this site's registration form. Registration is free, requires no phone call, and provides priority notification when townhome floor plans and pricing are released.";

export const REGISTER_PAGE_ANSWER =
  "Registering for VIP access to Bridgelands townhome updates is free, takes under a minute, and requires no phone call.";

export const FAQ_INTRO =
  "Answers below reflect the most current publicly available information as of August 29, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Will Bridgelands have townhomes?",
    a: "A townhome collection at Bridgelands has not been officially confirmed by Arista Homes, Deco Homes, or Opus Homes as of August 2026. Based on the same builder trio's other joint communities — SouthCal in Caledon and The Castle Mile in Brampton, both of which include freehold townhomes — a comparable townhome collection at Bridgelands is a reasonable expectation pending official confirmation.",
  },
  {
    q: "How much do Bridgelands townhomes cost?",
    a: "Pricing for Bridgelands townhomes has not yet been announced. As comparable context only, The Castle Mile — from the same builder trio — offered freehold townhomes and detached homes ranging from 1,583 to 4,050 square feet; this is not a price or size guarantee for Bridgelands.",
  },
  {
    q: "How big are Bridgelands townhomes?",
    a: "Exact sizes for a Bridgelands townhome collection have not been released. For general context, The Castle Mile's freehold townhome and detached product from the same builder trio ranged from 1,583 to 4,050 square feet across the full collection, mixed with detached homes.",
  },
  {
    q: "Are Bridgelands townhomes freehold?",
    a: "Ownership structure for a Bridgelands townhome collection has not been officially confirmed. The builder trio's other joint communities, including SouthCal and The Castle Mile, have offered freehold townhomes, making freehold a reasonable expectation pending confirmation.",
  },
  {
    q: "What is Bridgelands and who is building it?",
    a: "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, developed by Arista Homes, Deco Homes, and Opus Homes — the same trio behind SouthCal in Caledon and The Castle Mile in Brampton.",
  },
  {
    q: "When will Bridgelands townhomes launch?",
    a: "No public launch date has been announced for any Bridgelands product, including a potential townhome collection, as of August 2026. The community is listed as “Coming Soon.” Registered buyers are typically notified first when floor plans and pricing are released.",
  },
  {
    q: "How do Bridgelands townhomes compare to SouthCal's townhomes?",
    a: "Bridgelands and SouthCal are separate communities from the same builder trio — Arista Homes, Deco Homes, and Opus Homes — in different cities (Vaughan vs. Caledon). SouthCal's townhome offering is in active pre-construction registration; a Bridgelands townhome collection has not yet been confirmed or priced.",
  },
  {
    q: "What schools are near Bridgelands townhomes?",
    a: "A third-party source lists nearby schools including Tommy Douglas Secondary School, Johnny Lombardi Public School, Teston Village Public School, Maple High School, and St. Joan of Arc Catholic High School for the Weston Road and Teston Road area.",
  },
  {
    q: "What transit is near Bridgelands townhomes?",
    a: "Bridgelands is positioned roughly a 10–13 minute drive from Maple GO Station, with a GO train ride to Toronto's Union Station of approximately 34 minutes, and close to Highways 400, 407, and 427.",
  },
  {
    q: "How do I register for VIP access to Bridgelands townhomes?",
    a: "Buyers can register for VIP access by submitting their name, email, and phone number through this site's registration form. Registration is free, requires no phone call, and provides priority notification when townhome floor plans and pricing are released.",
  },
  {
    q: "Is there a deposit structure for Bridgelands townhomes?",
    a: "No deposit structure has been published for Bridgelands, including for a potential townhome collection, as of August 2026. Registered buyers are typically notified of deposit terms once VIP pricing is released.",
  },
  {
    q: "What is the assignment policy for Bridgelands townhomes?",
    a: "No assignment policy has been published for Bridgelands as of August 2026. Assignment terms are typically disclosed in the Agreement of Purchase and Sale at VIP launch.",
  },
  {
    q: "Is there a cost to register for Bridgelands townhome updates?",
    a: "No. Registration is free and creates no purchase obligation — no phone call required.",
  },
  {
    q: "Who is building Bridgelands?",
    a: "Arista Homes, Deco Homes, and Opus Homes, in partnership.",
  },
  {
    q: "How is this website related to the builders?",
    a: "This is an independent information resource focused on Bridgelands' potential townhome product. It is not affiliated with or endorsed by Arista Homes, Deco Homes, or Opus Homes.",
  },
];

export const SIBLING_SITES: { domain: string; angle: string; url: string }[] = [
  {
    domain: "bridgelands-woodbridge.ca",
    angle: "Comprehensive project hub",
    url: "https://bridgelands-woodbridge.ca",
  },
  {
    domain: "bridgelandscommunities.ca",
    angle: "Woodbridge and Vaughan-area community guide",
    url: "https://bridgelandscommunities.ca",
  },
  {
    domain: "bridgelandscommunity.ca",
    angle: "Life within the planned Bridgelands community",
    url: "https://bridgelandscommunity.ca",
  },
  {
    domain: "bridgelandsdetached.com",
    angle: "Detached home collection",
    url: "https://bridgelandsdetached.com",
  },
  {
    domain: "bridgelandsarista.ca",
    angle: "Arista Homes spotlight",
    url: "https://bridgelandsarista.ca",
  },
  {
    domain: "bridgelandsdeco.ca",
    angle: "Deco Homes spotlight",
    url: "https://bridgelandsdeco.ca",
  },
  {
    domain: "bridgelandsopus.ca",
    angle: "Opus Homes spotlight",
    url: "https://bridgelandsopus.ca",
  },
];

export const FOOTER_BLURB =
  "Independent information and VIP registration focused on the potential townhome collection at Bridgelands, a Coming Soon master-planned community in Woodbridge, Vaughan.";
