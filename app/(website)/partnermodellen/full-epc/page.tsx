import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import FullEpcClient from "./page-client";
import { faqs } from "./faq-data";

export const metadata = buildMetadata({
  title: "Full EPC batterijopslag — van engineering tot oplevering | Gridstate",
  description:
    "Full EPC voor BESS: engineering conform PGS 37-1, inkoop, realisatie en inbedrijfstelling onder één contract. Inclusief businesscase met FCR/aFRR en peakshaving.",
  path: "/partnermodellen/full-epc",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Full EPC batterijopslag",
          serviceType: "Turnkey EPC battery energy storage",
          description:
            "Volledige EPC-verantwoordelijkheid voor batterijopslagprojecten: engineering, procurement, realisatie en inbedrijfstelling onder één contract.",
          path: "/partnermodellen/full-epc",
        })}
      />
      <JsonLd data={faqSchema([...faqs.nl])} />
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
