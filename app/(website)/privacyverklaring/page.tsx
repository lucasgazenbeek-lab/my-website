/*
 * DISCLAIMER: deze privacyverklaring is een zorgvuldig opgesteld concept,
 * maar is GEEN juridisch advies. Laat de tekst reviewen door een jurist of
 * privacy-specialist voordat hij als definitief wordt beschouwd.
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacyverklaring | Gridstate",
  description:
    "Lees hoe Gridstate B.V. omgaat met uw persoonsgegevens: welke gegevens wij verwerken via het contactformulier en Calendly, waarom, hoe lang en wat uw rechten zijn.",
  path: "/privacyverklaring",
});

const LAST_UPDATED = "10 juni 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-black text-[#1a0810] mb-4 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div className="text-[#6b4a56] leading-relaxed flex flex-col gap-3 text-[15px]">{children}</div>
    </section>
  );
}

export default function Privacyverklaring() {
  const { company, contacts } = siteConfig;
  return (
    <div className="flex flex-col pt-18">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#470020]">
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">Legal</p>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[0.95] mb-4" style={{ letterSpacing: "-0.03em" }}>
            Privacyverklaring
          </h1>
          <p className="text-white/60 text-sm">Laatst bijgewerkt: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Section title="1. Wie is verantwoordelijk voor uw gegevens?">
            <p>
              {company.legalName}, gevestigd aan de {company.address.full}, ingeschreven bij de Kamer van
              Koophandel onder nummer {company.kvk}, is de verwerkingsverantwoordelijke voor de verwerking van
              persoonsgegevens zoals beschreven in deze privacyverklaring.
            </p>
            <p>
              Vragen over deze verklaring of over uw gegevens? Mail ons via{" "}
              <a href={`mailto:${company.email}`} className="text-[#470020] font-semibold hover:underline">{company.email}</a>.
            </p>
          </Section>

          <Section title="2. Welke gegevens verwerken wij?">
            <p>Wij verwerken uitsluitend gegevens die u zelf aan ons verstrekt:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong className="text-[#1a0810]">Contactformulier:</strong> naam, bedrijfsnaam, e-mailadres, telefoonnummer (optioneel), uw rol (bijv. opdrachtgever of projectontwikkelaar) en de inhoud van uw bericht.</li>
              <li><strong className="text-[#1a0810]">Afspraakplanning via Calendly:</strong> naam, e-mailadres en de gegevens die u bij het boeken invult.</li>
              <li><strong className="text-[#1a0810]">E-mail en telefonisch contact:</strong> de contactgegevens en inhoud die u zelf deelt.</li>
            </ul>
            <p>Wij verzamelen geen bijzondere categorieën persoonsgegevens en doen niet aan geautomatiseerde besluitvorming of profilering.</p>
          </Section>

          <Section title="3. Waarvoor gebruiken wij uw gegevens?">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Het beantwoorden van uw vraag of verzoek en het opvolgen van uw aanvraag;</li>
              <li>Het inplannen en voorbereiden van afspraken;</li>
              <li>Het opstellen van offertes en het uitvoeren van (voorbereidende) werkzaamheden voor een overeenkomst;</li>
              <li>Onze administratie en bedrijfsvoering.</li>
            </ul>
          </Section>

          <Section title="4. Op welke grondslag verwerken wij uw gegevens?">
            <p>
              Wij verwerken uw gegevens op basis van de uitvoering van een overeenkomst of het nemen van
              precontractuele maatregelen op uw verzoek (art. 6 lid 1 sub b AVG), en op basis van ons
              gerechtvaardigd belang om zakelijke verzoeken te kunnen beantwoorden en relaties te onderhouden
              (art. 6 lid 1 sub f AVG).
            </p>
          </Section>

          <Section title="5. Hoe lang bewaren wij uw gegevens?">
            <p>
              Gegevens uit het contactformulier bewaren wij maximaal 12 maanden na het laatste contact, tenzij er
              een zakelijke relatie ontstaat. Gegevens die onderdeel zijn van onze administratie bewaren wij
              conform de wettelijke (fiscale) bewaartermijn van 7 jaar.
            </p>
          </Section>

          <Section title="6. Met wie delen wij uw gegevens?">
            <p>Wij verkopen uw gegevens nooit. Wij delen gegevens uitsluitend met dienstverleners die nodig zijn voor onze website en dienstverlening:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong className="text-[#1a0810]">Vercel</strong> — hosting van deze website;</li>
              <li><strong className="text-[#1a0810]">Resend</strong> — verzending van e-mailnotificaties uit het contactformulier;</li>
              <li><strong className="text-[#1a0810]">Calendly</strong> — het inplannen van afspraken (op de afspraakpagina is een Calendly-planner ingeladen; hierop is ook de privacyverklaring van Calendly van toepassing).</li>
            </ul>
            <p>
              Met deze partijen zijn verwerkersovereenkomsten gesloten of zij hanteren passende waarborgen
              (zoals EU-standaardcontractbepalingen) wanneer gegevens buiten de EER worden verwerkt.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Deze website plaatst zelf geen tracking- of marketingcookies. De ingebedde Calendly-planner op de
              afspraakpagina kan functionele cookies van Calendly plaatsen die nodig zijn voor het boeken van een
              afspraak.
            </p>
          </Section>

          <Section title="8. Uw rechten">
            <p>U heeft op grond van de AVG het recht op:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Inzage in de persoonsgegevens die wij van u verwerken;</li>
              <li>Rectificatie van onjuiste of onvolledige gegevens;</li>
              <li>Verwijdering van uw gegevens (&ldquo;recht op vergetelheid&rdquo;);</li>
              <li>Beperking van de verwerking en bezwaar tegen de verwerking;</li>
              <li>Overdraagbaarheid van uw gegevens (dataportabiliteit).</li>
            </ul>
            <p>
              Een verzoek kunt u sturen naar{" "}
              <a href={`mailto:${company.email}`} className="text-[#470020] font-semibold hover:underline">{company.email}</a>.
              Wij reageren binnen vier weken. Daarnaast heeft u het recht een klacht in te dienen bij de{" "}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#470020] font-semibold hover:underline">Autoriteit Persoonsgegevens</a>.
            </p>
          </Section>

          <Section title="9. Beveiliging">
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen
              verlies of onrechtmatige verwerking, waaronder versleutelde verbindingen (TLS) en beperkte toegang
              tot gegevens binnen onze organisatie.
            </p>
          </Section>

          <Section title="10. Wijzigingen">
            <p>
              Wij kunnen deze privacyverklaring aanpassen. De meest actuele versie staat altijd op deze pagina;
              bovenaan ziet u wanneer de verklaring voor het laatst is bijgewerkt.
            </p>
          </Section>

          <div className="mt-4 p-6 border border-[#e0d5d0] rounded-lg bg-[#f9f6f4] text-sm text-[#6b4a56] leading-relaxed">
            <p className="font-bold text-[#1a0810] mb-1">{company.legalName}</p>
            <p>{company.address.full}</p>
            <p>KvK: {company.kvk}</p>
            <p>
              <a href={`mailto:${company.email}`} className="text-[#470020] font-semibold hover:underline">{company.email}</a>
              {" · "}
              <a href={`tel:${contacts.lucas.phoneHref}`} className="text-[#470020] font-semibold hover:underline">{contacts.lucas.phoneDisplay}</a>
            </p>
          </div>

          <p className="mt-10 text-sm text-[#6b4a56]">
            <Link href="/" className="text-[#470020] font-semibold hover:underline">← Terug naar de homepage</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
