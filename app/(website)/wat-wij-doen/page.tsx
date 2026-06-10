import { buildMetadata } from "@/lib/seo";
import WatWijDoenClient from "./page-client";

export const metadata = buildMetadata({
  title: "Turnkey EPC voor batterijopslag: C&I en utility-scale | Gridstate",
  description:
    "Eén partij voor het hele BESS-traject: C&I en utility-scale batterijopslag tegen netcongestie en voor peakshaving — van haalbaarheidsstudie tot grid connection.",
  path: "/wat-wij-doen",
});

export default function Page() {
  return <WatWijDoenClient />;
}
