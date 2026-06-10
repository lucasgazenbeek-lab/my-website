import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import WatWijDoenClient from "./page-client";

export const metadata = buildMetadata({
  title: "Turnkey EPC voor batterijopslag: C&I en utility-scale | Gridstate",
  description:
    "Eén partij voor het hele BESS-traject: C&I en utility-scale batterijopslag tegen netcongestie en voor peakshaving — van haalbaarheidsstudie tot grid connection.",
  path: "/wat-wij-doen",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "C&I batterijopslag",
          serviceType: "Commercial and industrial battery energy storage EPC",
          description:
            "Turnkey batterijopslag voor industrie, logistiek, tuinbouw en datacenters: peakshaving, netcongestie en energiekostenreductie — van ontwerp tot oplevering.",
          path: "/wat-wij-doen",
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Utility-scale BESS",
          serviceType: "Utility-scale battery energy storage EPC",
          description:
            "Grootschalige batterijopslag en hybride zonnepark+BESS-projecten voor netbeheerders, energieleveranciers en projectontwikkelaars, schaalbaar tot 100+ MW.",
          path: "/wat-wij-doen",
        })}
      />
      <WatWijDoenClient />
    </>
  );
}
