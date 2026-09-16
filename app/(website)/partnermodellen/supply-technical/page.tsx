import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import SupplyTechnicalClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply & Technical — apparatuur plus de technische laag | Gridstate",
  description:
    "Wij leveren de apparatuur én het ontwerp, de netcode-onderbouwing en de kwaliteitsborging erboven. De uitvoering doet u zelf of met uw eigen aannemer.",
  path: "/partnermodellen/supply-technical",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Supply & Technical batterijopslag",
          serviceType: "Battery energy storage supply with technical support",
          description:
            "Levering van batterijcontainers, conversiestations, transformator en middenspanningsinstallatie, plus ontwerp, netcode-onderbouwing en begeleiding tijdens inbedrijfstelling.",
          path: "/partnermodellen/supply-technical",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partnermodellen", path: "/partnermodellen" },
          { name: "Supply & Technical", path: "/partnermodellen/supply-technical" },
        ])}
      />
      <SupplyTechnicalClient />
    </>
  );
}
