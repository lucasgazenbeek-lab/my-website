import { buildMetadata } from "@/lib/seo";
import HomeClient from "./page-client";

export const metadata = buildMetadata({
  title: "Batterijopslag (BESS) Benelux — Turnkey EPC | Gridstate",
  description:
    "Gridstate realiseert grootschalige batterijopslag (BESS) in de Benelux: turnkey EPC van engineering tot oplevering, met directe fabrikantrelaties en eigen engineering.",
  path: "/",
});

export default function Page() {
  return <HomeClient />;
}
