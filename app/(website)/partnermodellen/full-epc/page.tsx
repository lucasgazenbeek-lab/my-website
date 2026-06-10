import { buildMetadata } from "@/lib/seo";
import FullEpcClient from "./page-client";

export const metadata = buildMetadata({
  title: "Full EPC batterijopslag — van engineering tot oplevering | Gridstate",
  description:
    "Full EPC voor BESS: engineering conform PGS 37-1, inkoop, realisatie en inbedrijfstelling onder één contract. Inclusief businesscase met FCR/aFRR en peakshaving.",
  path: "/partnermodellen/full-epc",
});

export default function Page() {
  return <FullEpcClient />;
}
