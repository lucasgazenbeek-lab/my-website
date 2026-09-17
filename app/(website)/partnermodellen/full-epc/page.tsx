import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { translations } from "@/lib/translations";
import FullEpcClient from "./page-client";

export const metadata = buildMetadata({
  title: "Full EPC batterijopslag — turnkey van ontwerp tot netcodetest | Gridstate",
  description:
    "Wij nemen het hele batterijopslagproject over: ontwerp, vergunning, inkoop, civiel, elektrotechniek en inbedrijfstelling. Ontworpen om verzekerd en gefinancierd te kunnen worden.",
  path: "/partnermodellen/full-epc",
});

// The FAQ is emitted as structured data from the same source the page renders,
// in the site's primary language, so the two can never drift apart.
const faqs = [...translations.nl.fullEpc.faq];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Full EPC batterijopslag",
          serviceType: "Turnkey EPC battery energy storage",
          description:
            "Turnkey batterijopslag onder één contract: ontwerp, vergunning, inkoop, civiel, elektrotechniek, inbedrijfstelling en overdracht, ontworpen om verzekerbaar en financierbaar te zijn conform PGS 37-1 en de netcode-eisen.",
          path: "/partnermodellen/full-epc",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partnermodellen", path: "/partnermodellen" },
          { name: "Full EPC", path: "/partnermodellen/full-epc" },
        ])}
      />
      <FullEpcClient />
    </>
  );
}
