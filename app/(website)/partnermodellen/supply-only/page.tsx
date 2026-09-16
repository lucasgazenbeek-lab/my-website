import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import SupplyOnlyClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply Only — leveranciersneutrale inkoop van BESS-apparatuur | Gridstate",
  description:
    "Alleen de levering: leveranciersneutrale selectie en inkoop, fabriekstest per unit, transport en inslag, en volledige documentatie inclusief certificaten en garantiebepalingen.",
  path: "/partnermodellen/supply-only",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Supply Only batterijopslag",
          serviceType: "Battery energy storage equipment supply",
          description:
            "Selectie en inkoop van batterijapparatuur, fabriekstest per unit, transport en inslag op locatie, en volledige documentatie inclusief certificaten en garantiebepalingen.",
          path: "/partnermodellen/supply-only",
        })}
      />
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
