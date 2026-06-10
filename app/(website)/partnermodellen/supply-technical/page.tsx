import { buildMetadata } from "@/lib/seo";
import SupplyTechnicalClient from "./page-client";

export const metadata = buildMetadata({
  title: "Supply + Technical Support voor BESS | Gridstate",
  description:
    "BESS-systemen, PCS en EMS geleverd mét technische rugdekking: systeemontwerp, FAT/SAT-begeleiding en commissioning support voor installateurs en EPC-partijen.",
  path: "/partnermodellen/supply-technical",
});

export default function Page() {
  return <SupplyTechnicalClient />;
}
