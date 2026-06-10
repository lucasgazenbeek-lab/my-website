import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import SupplyOnlyClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply Only: directe fabrikantprijzen BESS | Gridstate",
  description:
    "BESS-containers, PCS en MV-stations tegen directe fabrikantprijzen. Inclusief FAT-inspectie, volledige documentatie en logistiek — voor teams met eigen engineering.",
  path: "/partnermodellen/supply-only",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Supply Only voor BESS",
          serviceType: "Battery energy storage system supply",
          description:
            "Levering van BESS-containerunits, PCS, EMS en MV-componenten tegen directe fabrikantprijzen, inclusief FAT-inspectie en volledige technische documentatie.",
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
