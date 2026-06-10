import { buildMetadata } from "@/lib/seo";
import OverOnsClient from "./page-client";

export const metadata = buildMetadata({
  title: "Over Gridstate — specialisten in batterijopslag",
  description:
    "Maak kennis met het team achter Gridstate: specialisten in batterijopslag en hybride PV+BESS met 70+ MWh gerealiseerd en 12+ jaar gecombineerde ervaring in de Benelux.",
  path: "/over-ons",
});

export default function Page() {
  return <OverOnsClient />;
}
