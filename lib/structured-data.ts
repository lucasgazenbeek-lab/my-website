import { siteConfig } from "./site-config";

const ORG_ID = `${siteConfig.siteUrl}/#organization`;

const AREA_SERVED = [
  { "@type": "Country", name: "Netherlands" },
  { "@type": "Country", name: "Belgium" },
  { "@type": "Country", name: "Luxembourg" },
];

/**
 * Sitewide Organization + LocalBusiness schema, rendered once in the root
 * layout. Other schemas reference it via its @id.
 */
export function organizationSchema() {
  const { company, contacts, social } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: company.legalName,
    alternateName: company.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    image: `${siteConfig.siteUrl}/logo.png`,
    description:
      "Turnkey EPC-aannemer gespecialiseerd in grootschalige batterijopslagsystemen (BESS) en hybride zonnepark+BESS-projecten in de Benelux.",
    email: company.email,
    telephone: contacts.emiel.phoneDisplay,
    identifier: {
      "@type": "PropertyValue",
      name: "KvK",
      value: company.kvk,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed: AREA_SERVED,
    knowsAbout: [
      "BESS",
      "batterijopslag",
      "energieopslag",
      "utility-scale zonneparken",
      "EPC",
      "peakshaving",
      "netcongestie",
    ],
    ...(social.linkedin ? { sameAs: [social.linkedin] } : {}),
  };
}

export function serviceSchema({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
