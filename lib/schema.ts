/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * Offer / AggregateOffer is omitted — pricing is unverified as of August 2026.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  BUILDERS_LINE,
  FAQS,
  HERO_IMAGE,
  HOME_ANSWER,
  LAST_UPDATED_ISO,
  PAGE_META,
  SITE_NAME,
  SITE_ORG_NAME,
  SITE_URL,
  STATUS,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon-96x96.png`,
    description:
      "An independent information resource focused on the potential townhome collection at Bridgelands, not affiliated with or endorsed by Arista Homes, Deco Homes, or Opus Homes.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: SITE_NAME,
    description:
      "An independent resource on the potential townhome collection at Bridgelands, a Coming Soon community near Weston Road & Teston Road, Woodbridge, Vaughan, Ontario, by Arista Homes, Deco Homes, and Opus Homes.",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${HERO_IMAGE.src}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Builders", value: BUILDERS_LINE },
      { "@type": "PropertyValue", name: "Status", value: STATUS },
      {
        "@type": "PropertyValue",
        name: "Intersection",
        value: "Weston Road & Teston Road, Woodbridge, Vaughan",
      },
      {
        "@type": "PropertyValue",
        name: "Home types",
        value: "Townhome collection expected (unconfirmed)",
      },
      {
        "@type": "PropertyValue",
        name: "Pricing status",
        value: `To be announced as of ${LAST_UPDATED_ISO}`,
      },
    ],
  };
}

/*
 * Activate AggregateOffer only after official pricing is confirmed:
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "AggregateOffer",
 *   "priceCurrency": "CAD",
 *   "lowPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "highPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "availability": "https://schema.org/PreOrder"
 * }
 */

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    dateModified: LAST_UPDATED_ISO,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function placeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Bridgelands",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
    about: { "@id": `${SITE_URL}/#residence` },
  };
}

export function imageObjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${HERO_IMAGE.src}`,
    caption: "Bridgelands townhome collection rendering, Woodbridge, Vaughan, Ontario",
    description:
      "Illustrative rendering related to the expected Bridgelands townhome collection.",
  };
}

export function homeAnswerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}/`,
    name: PAGE_META.home.title,
    description: HOME_ANSWER,
    dateModified: LAST_UPDATED_ISO,
  };
}
