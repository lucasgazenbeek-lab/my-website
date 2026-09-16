import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import WatWijDoenClient from "./page-client";

export const metadata = buildMetadata({
  title: "Full EPC, technische ondersteuning en haalbaarheidsstudies | Gridstate",
  description:
    "Wij bouwen batterijopslag turnkey onder één contract, leveren de technische laag voor partijen die zelf bouwen, en toetsen of een locatie aansluitbaar, vergunbaar en rendabel is.",
  path: "/wat-wij-doen",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Full EPC batterijopslag",
          serviceType: "Turnkey battery energy storage EPC",
          description:
            "Turnkey batterijopslag onder één contract: engineering, vergunning, inkoop, civiel, plaatsing, elektrotechniek, inbedrijfstelling en overdracht.",
          path: "/wat-wij-doen",
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Technische ondersteuning batterijopslag",
          serviceType: "Battery energy storage engineering and project management",
          description:
            "Engineering, projectmanagement en volledige scope-uitwerking voor partijen die zelf bouwen — zonder levering van apparatuur.",
          path: "/wat-wij-doen",
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Haalbaarheidsstudies batterijopslag",
          serviceType: "Battery energy storage feasibility study",
          description:
            "Netpositie, vergunningsroute en businesscase van een batterijlocatie, uitgewerkt tot een informatiememorandum voor bank of investeerder.",
          path: "/wat-wij-doen",
        })}
      />
      <WatWijDoenClient />
    </>
  );
}
