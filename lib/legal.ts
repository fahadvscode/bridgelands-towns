import { CONTACT_EMAIL, LAST_UPDATED, SITE_ORG_NAME, SITE_SOURCE, SITE_URL } from "./content";

export const PRIVACY_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Who operates this website",
    paragraphs: [
      `${SITE_ORG_NAME} publishes ${SITE_URL} as an independent information and registration resource focused on the potential townhome collection at Bridgelands in Woodbridge, Vaughan, Ontario. This site is not the official website of Arista Homes, Deco Homes, or Opus Homes and is not affiliated with or endorsed by any of them.`,
    ],
  },
  {
    h2: "What is collected and why",
    paragraphs: [
      "When you submit the registration form, this site collects first name, last name, email address, telephone number, whether you are a licensed real estate agent, and a record of CASL consent. Those fields are used to notify registrants when townhome floor plans, pricing, and related project details are released.",
      `The site may also store first-touch marketing parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content), the page path on which consent was given, and a timestamp of consent. Consent, timestamp, and page path together are the proof-of-consent record under Canada's Anti-Spam Legislation. Every registration from this domain is stored with site_source set to “${SITE_SOURCE}” so it can be distinguished from registrations on related independent Bridgelands microsites.`,
    ],
  },
  {
    h2: "PIPEDA",
    paragraphs: [
      "This site is operated with the intent of complying with the Personal Information Protection and Electronic Documents Act (PIPEDA). Personal information is collected for identified purposes, limited to the registration fields described above, stored with a contractual processor, and retained only as long as needed for those purposes or as required by law. You may request access to, correction of, or deletion of your personal information using the contact route below.",
    ],
  },
  {
    h2: "Where data is stored",
    paragraphs: [
      "Registration records are stored with Supabase, a third-party processor that hosts a Postgres database. Personal information is not sold. Only the public anonymous key is used by this application to insert registration rows under a row-level security policy; a service-role credential is not exposed in browser code.",
    ],
  },
  {
    h2: "Retention and deletion",
    paragraphs: [
      `Registration records are retained for as long as they are needed to administer the Bridgelands townhome VIP notification list, and for a reasonable period afterward to demonstrate CASL consent if a question arises, unless a shorter period is required by law. To request deletion of your personal information, email ${CONTACT_EMAIL} from the address you registered with, with the subject line “Privacy request”. Privacy Requests is a generic alias, not a personal inbox.`,
    ],
  },
  {
    h2: "Cookies and analytics",
    paragraphs: [
      "This site may use Google Analytics 4, Google Tag Manager, and the Meta (Facebook) Pixel to measure page views, form interactions, and completed registrations. These tools set cookies or similar identifiers and process device and usage data according to each vendor's own policy. Conversion events include a form_submit event in GA4 and a Lead event in the Meta Pixel after a successful registration.",
      "Analytics identifiers are configured as environment variables and remain inactive until those values are supplied. Scripts load after the page becomes interactive so they do not delay the hero or the registration form.",
    ],
  },
  {
    h2: "CASL and unsubscribe",
    paragraphs: [
      "Electronic messages about Bridgelands and similar pre-construction opportunities are sent only where the visitor has checked the consent box on the registration form. That checkbox is never pre-checked. Consent, the time of consent, and the page on which it was given are stored as a proof record. Every electronic message will include a working unsubscribe mechanism. You may also withdraw consent by emailing the address below.",
    ],
  },
  {
    h2: "Accessibility",
    paragraphs: [
      "This site is intended to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, consistent with Ontario's Accessibility for Ontarians with Disabilities Act (AODA). If you encounter a barrier, email the Privacy Requests alias below and describe the page and the issue.",
    ],
  },
  {
    h2: "Contact for privacy requests",
    paragraphs: [
      `Privacy, access, correction, and deletion requests: ${CONTACT_EMAIL}. This is a generic Privacy Requests alias, not a personal inbox.`,
    ],
  },
];

export const TERMS_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Independent information resource",
    paragraphs: [
      "This website is an independent information and registration resource focused on the potential townhome collection at Bridgelands, a Coming Soon master-planned community near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, being developed by Arista Homes, Deco Homes, and Opus Homes. It is not the official website of any of those builders and is not affiliated with, endorsed by, or operated by them. Nothing on this site should be read as a representation by the builders.",
    ],
  },
  {
    h2: "Information is provided as-is",
    paragraphs: [
      `Information on this site is provided as-is for general information only. It is subject to change without notice and is not an offer to sell, a solicitation to buy, or a representation that any home is available. Prices, sizes, specifications, incentives, deposits, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`,
      "A townhome collection at Bridgelands has not been officially confirmed. Sizes, bedroom counts, lot widths, pricing, deposit structure, occupancy, incentives, assignment policy, and which builder may be responsible for attached product are unpublished and must be verified at release. Comparable figures from SouthCal and The Castle Mile are context only, not Bridgelands specifications.",
    ],
  },
  {
    h2: "No legal, tax, or financial advice",
    paragraphs: [
      "Nothing on this site is legal, tax, or financial advice. Descriptions of deposits, occupancy, assignment, schools, and transit are general information compiled from publicly available sources. This site does not guarantee appreciation, allocation, or returns, and it does not guarantee that Bridgelands will include townhomes. Buyers should review any agreement of purchase and sale with their own lawyer and obtain their own advice before making a decision.",
    ],
  },
  {
    h2: "Registration",
    paragraphs: [
      "Submitting the registration form requests to be added to a list to receive information when it is released. Registration is free and creates no obligation to purchase. Registration does not create priority with the builders unless Arista Homes, Deco Homes, or Opus Homes independently confirm such a program.",
    ],
  },
  {
    h2: "Third-party links",
    paragraphs: [
      "This site may link to related independent Bridgelands microsites and to third-party maps or sources. Those destinations have their own terms. Linking does not mean endorsement by the builders.",
    ],
  },
  {
    h2: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
    ],
  },
];
