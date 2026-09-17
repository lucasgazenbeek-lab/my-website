import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { translations } from "@/lib/translations";
import TechnicalSupportClient from "./page-client";

export const metadata = buildMetadata({
  title: "Technical Support — engineering en hoofdaannemersondersteuning | Gridstate",
  description:
    "U voert uit, wij nemen de laag daarboven over: ontwerp, de stukken die uw opdrachtgever moet goedkeuren en het interfacebeheer. Wij leveren geen apparatuur.",
  path: "/partnermodellen/technical-support",
});

// The FAQ is emitted as structured data from the same source the page renders,
// in the site's primary language, so the two can never drift apart.
const faqs = [...translations.nl.technicalSupport.faq];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Technical Support batterijopslag",
          serviceType: "Battery energy storage engineering and main contractor support",
          description:
            "Engineering, de documentatie die de opdrachtgever moet goedkeuren en het interfacebeheer met de andere partijen op het terrein, voor aannemers die de uitvoering zelf doen. Zonder levering van apparatuur.",
          path: "/partnermodellen/technical-support",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partnermodellen", path: "/partnermodellen" },
          { name: "Technical Support", path: "/partnermodellen/technical-support" },
        ])}
      />
      <TechnicalSupportClient />
    </>
  );
}
