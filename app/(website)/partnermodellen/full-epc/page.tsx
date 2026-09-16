import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import FullEpcClient from "./page-client";

export const metadata = buildMetadata({
  title: "Full EPC — één contract, één verantwoordelijke partij | Gridstate",
  description:
    "Wij nemen het hele batterijproject over, van vergunningsdossier tot netcodetest. Eén contract, één prijs en één partij die verantwoordelijk is voor het resultaat.",
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
            "Volledige EPC-verantwoordelijkheid voor batterijopslagprojecten: engineering, vergunning, inkoop, civiel, plaatsing, elektrotechniek, inbedrijfstelling en overdracht onder één contract.",
          path: "/partnermodellen/full-epc",
        })}
      />
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
