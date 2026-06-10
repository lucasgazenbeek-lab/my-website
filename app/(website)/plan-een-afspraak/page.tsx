import { buildMetadata } from "@/lib/seo";
import PlanEenAfspraakClient from "./page-client";

export const metadata = buildMetadata({
  title: "Plan een afspraak — bespreek uw BESS-project | Gridstate",
  description:
    "Plan direct een afspraak met Gridstate: bespreek uw batterijopslagproject, netcongestievraagstuk of samenwerkingsmodel. Vrijblijvend, met directe lijnen naar het team.",
  path: "/plan-een-afspraak",
});

export default function Page() {
  return <PlanEenAfspraakClient />;
}
