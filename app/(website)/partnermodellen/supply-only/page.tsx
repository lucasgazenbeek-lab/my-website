import { buildMetadata } from "@/lib/seo";
import SupplyOnlyClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply Only: directe fabrikantprijzen BESS | Gridstate",
  description:
    "BESS-containers, PCS en MV-stations tegen directe fabrikantprijzen. Inclusief FAT-inspectie, volledige documentatie en logistiek — voor teams met eigen engineering.",
  path: "/partnermodellen/supply-only",
});

export default function Page() {
  return <SupplyOnlyClient />;
}
