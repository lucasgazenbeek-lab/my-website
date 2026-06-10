import { buildMetadata } from "@/lib/seo";
import PartnermodellenClient from "./page-client";

export const metadata = buildMetadata({
  title: "Samenwerkingsmodellen voor BESS-projecten | Gridstate",
  description:
    "Drie samenwerkingsmodellen voor batterijopslagprojecten: Full EPC, Supply + Technical Support en Supply Only. Kies het model dat past bij uw rol en uw project.",
  path: "/partnermodellen",
});

export default function Page() {
  return <PartnermodellenClient />;
}
