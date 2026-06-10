import { buildMetadata } from "@/lib/seo";
import ProjectenClient from "./page-client";

export const metadata = buildMetadata({
  title: "BESS-projecten in de Benelux — referenties | Gridstate",
  description:
    "Gerealiseerde en lopende batterijopslagprojecten in de Benelux: C&I en utility-scale BESS voor peakshaving, netcongestie en hybride PV+BESS. Bekijk de referenties.",
  path: "/projecten",
});

export default function Page() {
  return <ProjectenClient />;
}
