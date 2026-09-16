import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import TechnicalSupportClient from "./page-client";

export const metadata = buildMetadata({
  title: "Technical Support & Consultancy voor batterijopslag | Gridstate",
  description:
    "Alleen de kennis, zonder levering: engineering, projectmanagement, volledige scope-uitwerking en owner's engineering. Onafhankelijk advies van een partij die niets verkoopt.",
  path: "/partnermodellen/technical-support",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Technical Support & Consultancy batterijopslag",
          serviceType: "Battery energy storage engineering consultancy",
          description:
            "Engineering, projectmanagement, volledige scope-uitwerking en owner's engineering voor batterijopslagprojecten — zonder levering van apparatuur.",
          path: "/partnermodellen/technical-support",
        })}
      />
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
