import { buildMetadata } from "@/lib/seo";
import OverOnsClient from "./page-client";

export const metadata = buildMetadata({
  title: "Over Gridstate — het team en onze werkwijze | Gridstate",
  description:
    "Drie mensen die batterijopslag bouwden voordat Gridstate bestond, en de vijf werkafspraken die bepalen hoe wij ontwerpen, rekenen en documenteren.",
  path: "/over-ons",
});

export default function Page() {
  return <OverOnsClient />;
}
