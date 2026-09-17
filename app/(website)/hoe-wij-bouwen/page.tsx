import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import HoeWijBouwenClient from "./page-client";

export const metadata = buildMetadata({
  title: "Hoe wij bouwen — de bouwsequentie van een batterijopslagproject | Gridstate",
  description:
    "Twaalf fasen van eerste inmeting tot netcodetest, in drie configuraties: middenspanning, hoogspanning en co-located bij een zonnepark.",
  path: "/hoe-wij-bouwen",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hoe wij bouwen", path: "/hoe-wij-bouwen" },
        ])}
      />
      <HoeWijBouwenClient />
    </>
  );
}
