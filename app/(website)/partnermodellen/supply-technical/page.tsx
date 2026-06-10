import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import SupplyTechnicalClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply + Technical Support voor BESS | Gridstate",
  description:
    "BESS-systemen, PCS en EMS geleverd mét technische rugdekking: systeemontwerp, FAT/SAT-begeleiding en commissioning support voor installateurs en EPC-partijen.",
  path: "/partnermodellen/supply-technical",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Supply + Technical Support voor BESS",
          serviceType: "Battery energy storage supply and technical support",
          description:
            "Levering van BESS-systemen, PCS, EMS en MV-infrastructuur inclusief technische ondersteuning: systeemontwerp, FAT/SAT-begeleiding en commissioning support.",
          path: "/partnermodellen/supply-technical",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partnermodellen", path: "/partnermodellen" },
          { name: "Supply + Technical Support", path: "/partnermodellen/supply-technical" },
        ])}
      />
      <SupplyTechnicalClient />
    </>
  );
}
