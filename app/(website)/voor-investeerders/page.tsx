import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import VoorInvesteerdersClient from "./page-client";

export const metadata = buildMetadata({
  title: "Voor investeerders en IPP's — meedoen of laten narekenen",
  description:
    "Participatie in batterijprojecten die Gridstate zelf ontwikkelt, ondersteuning bij uw eigen acquisities, en onafhankelijke validatie van een businesscase. Met de rekennorm en de opbouw van het memorandum die daarbij horen.",
  path: "/voor-investeerders",
});

/**
 * Four questions investors actually open with. Kept free of amounts, returns
 * and thresholds — the page itself makes no promise about a return and the
 * structured data may not do so either.
 */
const FAQS = [
  {
    q: "Kan ik meedoen in een project dat Gridstate zelf ontwikkelt?",
    a: "Ja. Voor een deel van onze eigen ontwikkelportefeuille zoeken wij partijen die mee willen investeren, met of zonder operationele betrokkenheid. U krijgt vooraf inzage in het model, het vergunningsdossier en de netpositie, onder geheimhouding en niet pas tijdens de due diligence.",
  },
  {
    q: "Rekenen jullie ook een businesscase na die iemand anders heeft gemaakt?",
    a: "Ja, dat is een van de drie ingangen op deze pagina. Wij rekenen het model na tot op de component, controleren of de totalen sluiten met de onderdelen eronder, en komen terug met de bevindingen en de vragen die u aan de andere partij terug moet stellen.",
  },
  {
    q: "Wat staat er in een businesscase van Gridstate?",
    a: "Een memorandum van veertien hoofdstukken, van de technische uitgangssituatie en de aansluitcapaciteit tot de gevoeligheidsanalyse en de bijlagen. Aannames en bronnen staan als eigen hoofdstuk in het rapport en niet in een voetnoot, en naast de basiscase staat altijd een neerwaarts scenario.",
  },
  {
    q: "Jullie ontwikkelen zelf én bouwen voor anderen — hoe gaan jullie om met die dubbelrol?",
    a: "In onze eigen ontwikkelingen zijn wij allebei: wij nemen een belang in de projecten die wij bouwen. Daarom leggen wij de scope, de rolverdeling en de manier waarop de prijs tot stand komt vooraf vast, voordat er over deelname wordt gesproken. Vraagt u ons alleen om een project na te rekenen of te bouwen, dan zijn wij leverancier en verder niets.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Participatie, acquisitieondersteuning en validatie van businesscases",
          serviceType: "Investeringsondersteuning batterijopslag",
          description:
            "Meedoen in batterijprojecten die Gridstate zelf ontwikkelt, ondersteuning bij de acquisitie van projecten en portefeuilles, en onafhankelijke validatie van een businesscase voor batterijopslag.",
          path: "/voor-investeerders",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Voor investeerders", path: "/voor-investeerders" },
        ])}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <VoorInvesteerdersClient />
    </>
  );
}
