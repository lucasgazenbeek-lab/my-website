import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import VoorInvesteerdersClient from "./page-client";

export const metadata = buildMetadata({
  title: "Voor investeerders en IPP's — participatie, ondersteuning en validatie",
  description:
    "Participatie in batterijprojecten die Gridstate zelf ontwikkelt, ondersteuning bij uw eigen acquisities, en onafhankelijke validatie van een businesscase.",
  path: "/voor-investeerders",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Voor investeerders", path: "/voor-investeerders" },
        ])}
      />
      <VoorInvesteerdersClient />
    </>
  );
}
