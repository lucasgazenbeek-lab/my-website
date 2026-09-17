import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { translations } from "@/lib/translations";
import SupplyOnlyClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply Only batterijopslag — levering met ondersteuning | Gridstate",
  description:
    "Wij leveren batterijsysteem en omvormers geplaatst op uw fundatie, met ontwerpreview, PGS 37-1-toets, besturingskoppeling en integratietest. U ontwerpt, installeert en sluit aan.",
  path: "/partnermodellen/supply-only",
});

// The FAQ is emitted as structured data from the same source the page renders,
// in the site's primary language, so the two can never drift apart.
const faqs = [...translations.nl.supplyOnly.faq];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Supply Only batterijopslag",
          serviceType: "Battery energy storage supply with project support",
          description:
            "Levering van batterijsysteem en omvormers, geplaatst op de fundatie van de opdrachtgever, met ontwerpreview op de raakvlakken, toets aan PGS 37-1, besturingskoppeling en een integratietest van het complete systeem.",
          path: "/partnermodellen/supply-only",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partnermodellen", path: "/partnermodellen" },
          { name: "Supply Only", path: "/partnermodellen/supply-only" },
        ])}
      />
      <SupplyOnlyClient />
    </>
  );
}
