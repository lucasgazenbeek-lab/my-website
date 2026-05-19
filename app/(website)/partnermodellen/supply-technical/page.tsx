"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/components/LanguageProvider";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WrenchIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 2a3.5 3.5 0 00-3.4 4.3L2.5 10.9a1.5 1.5 0 002.1 2.1l4.6-4.6A3.5 3.5 0 1010.5 2z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10.5" cy="5.5" r="1" fill="#470020"/></svg>;
}
function SunIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="#470020" strokeWidth="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.42 1.42M11.36 11.36l1.42 1.42M3.22 12.78l1.42-1.42M11.36 4.64l1.42-1.42" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function GlobeIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#470020" strokeWidth="1.5"/><path d="M8 1.5c-2 2-3 4-3 6.5s1 4.5 3 6.5M8 1.5c2 2 3 4 3 6.5s-1 4.5-3 6.5M1.5 8h13" stroke="#470020" strokeWidth="1.3" strokeLinecap="round"/></svg>;
}
function TeamIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="2.5" stroke="#470020" strokeWidth="1.5"/><path d="M1 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="5" r="2" stroke="#470020" strokeWidth="1.3"/><path d="M15 13c0-2.21-1.34-4-3-4" stroke="#470020" strokeWidth="1.3" strokeLinecap="round"/></svg>;
}
function BoltIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 2L4 9h5l-2 5 7-8H9l2-4z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function FactoryIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="10" width="14" height="5" rx="0.5" stroke="#470020" strokeWidth="1.5"/><path d="M1 10V7l4 2V7l4 2V7l4 2V10" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10V8M8 10V8M11 10V8" stroke="#470020" strokeWidth="1.2"/></svg>;
}

const whyIcons = [
  // Premium hardware — box/package
  <svg key="box" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l8 4v8l-8 4-8-4V6l8-4z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 2v14M2 6l8 4 8-4" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Engineering support — blueprint/ruler
  <svg key="ruler" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L17 3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/><path d="M3 17l-1 1 1-1zm0 0l2-2M7 13l2-2M11 9l2-2M15 5l2-2" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/><rect x="2" y="10" width="8" height="8" rx="1" transform="rotate(-45 2 10)" stroke="#470020" strokeWidth="1.6"/></svg>,
  // FAT/SAT — clipboard check
  <svg key="clipboard" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="5" y="4" width="10" height="13" rx="1.5" stroke="#470020" strokeWidth="1.6"/><path d="M8 4V3a2 2 0 014 0v1" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/><path d="M7.5 10l2 2 3-3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Schaalbaar — growth/arrow-up
  <svg key="growth" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 15l4-5 3 3 4-6 3 3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 7h3v3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17h14" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // Marktkennis — lightbulb
  <svg key="bulb" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3a5 5 0 014 8.12V14H6v-2.88A5 5 0 0110 3z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14h6M8 17h4" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // Lange termijn — handshake
  <svg key="shake" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 13l4 4 9-9-4-4-9 9z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4l2-2 4 4-2 2" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 14l-4 4" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
];

const content = {
  nl: {
    back: "Partnermodellen",
    tag: "Supply & Technical",
    heroTitle: ["Jouw installatie.", "Onze systemen en", "technische rugdekking."],
    heroSub: "Gridstate levert batterijsystemen, PCS, EMS en MV-infrastructuur — inclusief volledige technische ondersteuning. Jij realiseert. Wij staan naast je, van engineering tot inbedrijfstelling.",
    heroCta1: "Word partner",
    heroCta2: "Bekijk het model",
    trustStats: [
      { stat: "20 MW+", label: "BESS-vermogen geleverd en ondersteund" },
      { stat: "100%", label: "Eigen engineering & technische documentatie" },
      { stat: "6+", label: "Actieve partnerprojecten in Benelux" },
      { stat: "FAT/SAT", label: "Begeleiding standaard inbegrepen" },
    ],
    whatLabel: "Het Supply & Technical model",
    whatTitle: ["Meer dan hardware.", "Technische samenwerking."],
    whatP1: "Het Supply & Technical model is bedoeld voor installateurs, EPC'ers, solar- en energiebedrijven die zelf de capaciteit hebben om batterijprojecten te realiseren — maar die toegang willen tot de juiste systemen én de technische expertise die nodig is voor complexe BESS-projecten.",
    whatP2: "Gridstate is geen dozenschuiver. We leveren niet alleen hardware: we staan naast je als technische partner gedurende het hele project. Van systeemontwerp en technische documentatie tot FAT-begeleiding, commissioning support en remote support na oplevering.",
    whatItems: [
      "Turnkey levering van BESS-systemen, PCS en EMS-oplossingen",
      "Volledige technische engineering inclusief single-line ontwerp",
      "BOM-opstelling, datasheets en installatie-instructies",
      "Factory Acceptance Test (FAT) begeleiding bij fabrikant",
      "On-site en remote commissioning support",
      "SAT-protocol opstelling en uitvoering",
      "Doorlopend technische support en remote monitoring",
    ],
    idealLabel: "Ideaal voor",
    idealItems: [
      { label: "Installateurs en elektrotechnische bedrijven", Icon: WrenchIcon },
      { label: "Solar- en EPC-partijen die BESS willen aanbieden", Icon: SunIcon },
      { label: "Internationale partners en resellers", Icon: GlobeIcon },
      { label: "Bedrijven met eigen technische installatieteams", Icon: TeamIcon },
      { label: "Aggregatoren en energiebedrijven", Icon: BoltIcon },
      { label: "Industriële partijen met eigen projectcapaciteit", Icon: FactoryIcon },
    ],
    splitLabel: "Taakverdeling",
    splitTitle: ["Wat Gridstate doet.", "Wat jij realiseert."],
    splitSub: "Transparante taakverdeling — Gridstate vult aan waar jij wilt. Meer of minder ondersteuning is altijd bespreekbaar.",
    gridstateItems: [
      "Technisch systeemontwerp en engineering",
      "Systeemkeuze en componentenselectie",
      "BOM-opstelling en technische documentatie",
      "Levering BESS, PCS, EMS, transformator en MV-station",
      "FAT-inspectie bij fabrikant",
      "Commissioning support (remote of on-site)",
      "SAT-protocol en inbedrijfstellingsprocedure",
      "EMS-configuratie en aggregatorkoppeling",
      "Technische support gedurende de projectlooptijd",
      "Remote monitoring na oplevering (optioneel)",
      "Training voor jouw technisch team",
      "Markt- en regelgevingsinzichten",
    ],
    partnerItems: [
      "Civiele werken en fundatierealisatie",
      "Containerplaatsing en mechanische montage",
      "Elektrotechnische installatie en bekabeling",
      "MV-schakelinstallatie en transformatorplaatsing",
      "Coördinatie met netbeheerder op locatie",
      "Veiligheidscoördinatie en QHSE op locatie",
      "Projectmanagement en opdrachtgevercommunicatie",
      "Inschakelen lokale vergunningverleners",
    ],
    approachLabel: "Van partnership tot operationeel systeem",
    approachTitle: ["Onze samenwerking,", "stap voor stap"],
    approachSub: "Van eerste partnergesprek tot werkend BESS-systeem — wij begeleiden je in elke fase technisch en strategisch.",
    steps: [
      { num: "01", title: "Partnership intake & projectscan", desc: "We starten met een grondige kennismaking: jouw technisch niveau, projectportfolio, klantenbasis en ambities. Op basis hiervan bepalen we samen de ideale invulling van de samenwerking en beoordelen we de haalbaarheid van eerste concrete projecten.", tags: ["Kennismaking", "Projectscan", "Samenwerkingsvorm", "Portfolio"] },
      { num: "02", title: "Technisch ontwerp & systeemkeuze", desc: "Gridstate verzorgt het technisch ontwerp: celchemieselectie, containerarchitectuur, PCS-dimensionering, EMS-strategie, MV-station, transformator en bekabelingsschema's. Alles conform NEN 1010, IEC 62933, IEC 62619 en PGS 37-1. Je ontvangt een volledig technisch pakket inclusief single-line diagram en BOM.", tags: ["Systeemontwerp", "BOM", "Single-line", "PGS 37-1"] },
      { num: "03", title: "Procurement & fabrieksbegeleiding", desc: "Gridstate koopt direct in bij Europese en Aziatische fabrikanten. We coördineren de productie, voeren FAT-inspecties uit en bewaken kwaliteit en leveringsbetrouwbaarheid. Jij ontvangt gecertificeerde systemen met volledige technische documentatie.", tags: ["Directe fabrikant", "FAT inspectie", "Kwaliteitsborging", "Certificering"] },
      { num: "04", title: "Levering & installatievoorbereiding", desc: "Gridstate coördineert transport, logistiek en installatiehandleiding. We begeleiden jouw team bij de voorbereidende werkzaamheden: fundering, containerkraan, MV-aansluitprocedure bij de netbeheerder, brandpreventieplan en veiligheidsprotocollen.", tags: ["Logistiek", "Installatiegids", "Netbeheerder", "QHSE"] },
      { num: "05", title: "Commissioning & inbedrijfstelling", desc: "Gridstate ondersteunt de commissioning actief — remote of on-site. We stellen het SAT-protocol op, begeleiden de BMS-verificatie, EMS-koppeling, aggregatorintegratie en netcodevalidatie. Jouw team voert uit; wij zorgen dat het klopt.", tags: ["SAT protocol", "BMS verificatie", "EMS koppeling", "Grid compliance"] },
      { num: "06", title: "Aftercare, training & doorlopende support", desc: "Na oplevering bieden we technische support, remote monitoring, performance reporting en training voor jouw engineers. We houden je op de hoogte van marktontwikkelingen, nieuwe regelgeving en optimalisatiemogelijkheden — zodat jij je klanten scherp kunt bedienen.", tags: ["Remote support", "Training", "Monitoring", "Marktinzichten"] },
    ],
    interimCta: { sub: "Klaar om te starten?", title: "Plan een partnergesprek met Gridstate", body: "We bespreken jouw projectportfolio, technisch niveau en de meest passende invulling van de samenwerking — vrijblijvend.", btn: "Plan een partnergesprek" },
    supplyLabel: "Wat wij leveren",
    supplyTitle: "Systemen gebouwd voor de praktijk",
    supplySub: "Gridstate levert geen standaardproducten. Elk systeem is geselecteerd, gevalideerd en voorzien van een compleet technisch pakket voor installatie en inbedrijfstelling.",
    supplyCards: [
      { title: "BESS containerized systems", desc: "LFP-gebaseerde batterijsystemen in 20ft en 40ft containerformaten. Standaard liquid cooling, modulaire opbouw, geïntegreerde BMS en brandbeveiliging conform PGS 37-1. Leverbaar van 500 kWh tot 5+ MWh per unit.", items: ["LFP celchemie", "Liquid cooling", ">8.000 cycli", "PGS 37-1 compliant"] },
      { title: "PCS / Power Conversion Systems", desc: "Bidirectionele omvormers voor AC-gekoppelde systemen. Compatibel met alle gangbare netspanningen en frequenties, inclusief RfG-compliance voor SynC en FSM. Meerder vermogensklassen van 100 kW tot 4 MW per unit.", items: ["AC coupling", "RfG compliant", "100 kW – 4 MW", "Eilandbedrijf optie"] },
      { title: "EMS — Energy Management Software", desc: "Gridstate's EMS-platform verzorgt realtime dispatch op basis van spotprijzen, onbalans, FCR-signalen en lokale prognoses. API-koppelingen met PV-inverters, WKK, laadpalen, SCADA en aggregatorplatformen inbegrepen.", items: ["Realtime dispatch", "API-integraties", "Aggregatorkoppeling", "Cloud-based"] },
      { title: "MV-stations & transformatoren", desc: "Prefab MV-schakelinstallaties en transformatoren voor middenspanningsaansluiting. Inclusief meettransformatoren, beschermingsrelais, aardingssystemen en RfG-setpointconfiguratie conform netbeheerderseisen.", items: ["10/20 kV MV", "RfG setpoints", "Beschermingsrelais", "Netbeheerder ready"] },
      { title: "Balance of Plant & BOP componenten", desc: "Van kabels, kabelgoten en DC-zekeringen tot koelsystemen, brandblussers, HVAC, noodstroomvoorzieningen en monitoring-hardware. Gridstate levert het volledige balance-of-plant pakket voor een integrale installatie.", items: ["DC zekeringen", "HVAC koeling", "Brandblusser", "Monitoring hardware"] },
      { title: "Remote monitoring & SCADA", desc: "Hardwarematige en cloud-based monitoring voor beschikbaarheid, celgezondheid, cyclustelling en energiebalans. Optionele SCADA-integratie voor bestaande operationele platforms van installateurs en asset managers.", items: ["24/7 datalogging", "SCADA-integratie", "Celgezondheid", "Performance KPIs"] },
    ],
    engLabel: "Engineering & technische support",
    engTitle: ["Van BOM tot", "werkend systeem"],
    engP1: "Bij elk Supply & Technical project levert Gridstate een volledig engineering pakket: single-line diagram, elektrisch schema, BOM, installatiehandleiding, BMS-instellingen en commissioning procedure. Jouw team start met een compleet technisch fundament.",
    engP2: "Complexe vraagstukken? Onze engineers staan standaard beschikbaar voor technisch overleg — van detailvragen over MV-aansluiting tot SCADA-integratie of aggregatorkoppeling. Wij zijn je technisch klankbord gedurende het hele project.",
    engItems: [
      { title: "Single-line diagram", desc: "Compleet elektrisch schema inclusief PCS, BESS, transformator, MV-station, beschermingsrelais en meetinrichting." },
      { title: "Bill of Materials (BOM)", desc: "Volledige componentenlijst inclusief specificaties, artikelnummers en leveranciersgegevens. Klaar voor inkoop en installatie." },
      { title: "Installatiehandleiding", desc: "Stapsgewijze handleiding voor mechanische montage, elektrische aansluiting en pre-commissioning checks per systeem." },
      { title: "FAT-rapport & testprotocol", desc: "Gridstate voert FAT-inspecties uit bij de fabrikant en levert een volledig FAT-rapport met testresultaten en afwijkingsregistratie." },
      { title: "SAT-protocol", desc: "Volledige site acceptance test procedure: van celbalancering en BMS-verificatie tot EMS-koppeling en grid compliance test." },
      { title: "Training & kennisoverdracht", desc: "Praktijkgerichte training voor jouw engineers: systeemwerking, veiligheid, commissioning procedure en troubleshooting." },
    ],
    emsLabel: "EMS & Energiemarkten",
    emsTitle: ["Maximaal rendement", "voor jouw klanten"],
    emsP1: "Een batterijsysteem is pas winstgevend als het slim gestuurd wordt. Gridstate helpt jou en jouw klanten de juiste EMS-strategie te kiezen en de marktintegratie te realiseren die past bij het project.",
    emsP2: "Als partner van Gridstate kun jij jouw klanten adviseren over energiemarktparticipatie. Wij leveren de kennis, het platform en de aggregatorkoppelingen. Jij presenteert het als onderdeel van een compleet batterijoplossing.",
    emsMarkets: [
      { label: "FCR", desc: "Frequency Containment Reserve" },
      { label: "aFRR", desc: "Automatic Frequency Restoration" },
      { label: "mFRR", desc: "Manual Frequency Restoration" },
      { label: "Onbalanshandel", desc: "Intraday & day-ahead" },
      { label: "Peak shaving", desc: "Nettariefoptimalisatie" },
      { label: "GOPACS", desc: "Congestiemanagement" },
    ],
    revenueLabel: "Revenue stack voorbeeld",
    revenueSub: "Indicatieve opbrengstverdeling — 2 MWh utility-scale systeem, jaar 1",
    revenueDisclaimer: "Indicatief. Werkelijke opbrengsten afhankelijk van marktcondities, locatie en configuratie.",
    whyLabel: "Waarom Gridstate als leverancier",
    whyTitle: "Geen hardwareleverancier. Een technische partner.",
    whySub: "Gridstate is opgericht door engineers die weten hoe BESS-projecten in de praktijk werken. We leveren niet alleen systemen — we zorgen dat ze goed worden gerealiseerd.",
    whyItems: [
      { title: "Toegang tot de juiste systemen", desc: "Gridstate selecteert op kwaliteit, veiligheid en lifecycle-prestaties — niet op marge. Jij krijgt toegang tot fabrikanten en systemen die normaal buiten bereik liggen voor kleinere partijen." },
      { title: "Engineering support inbegrepen", desc: "Elke levering gaat vergezeld van volledig technisch pakket: ontwerp, schema's, BOM, installatiehandleiding en commissioning procedure. Geen extra kosten, geen verborgen diensten." },
      { title: "FAT/SAT begeleiding standaard", desc: "Wij inspecteren elk systeem bij de fabrikant vóór verzending en begeleiden de site acceptance test bij jou op locatie. Dat is onze manier om kwaliteit te garanderen — niet alleen te beloven." },
      { title: "Schaalbaar partnermodel", desc: "Begin met één project. Schaal op naar een structurele samenwerking. Gridstate groeit mee met jouw BESS-portfolio — van eerste pilot tot serie-uitrol." },
      { title: "Marktkennis & energiestrategie", desc: "Wij houden je op de hoogte van ontwikkelingen in FCR, aFRR, onbalansmarkten, netcongestie en regelgeving. Zo kun jij jouw klanten altijd adviseren op basis van actuele marktinzichten." },
      { title: "Lange termijn partnerschap", desc: "Wij werken liever langdurig samen dan eenmalig te leveren. Dat betekent eerlijk advies, transparante prijzen, concrete support en een relatie die groeit naarmate jouw BESS-portfolio groeit." },
    ],
    faqLabel: "Veelgestelde vragen",
    faqTitle: "Alles wat je wil weten",
    faqs: [
      { q: "Wat is het verschil tussen Supply & Technical en Full EPC?", a: "Bij Full EPC neemt Gridstate de volledige verantwoordelijkheid: engineering, inkoop én uitvoering. Bij Supply & Technical levert Gridstate de systemen en technische ondersteuning, maar voert jij als partner zelf de installatie uit. Dit model is ideaal voor partijen met eigen installatieteams die hun BESS-aanbod willen uitbreiden zonder volledig af te hankelijk te zijn van een EPC-partij." },
      { q: "Wat houdt de technische ondersteuning precies in?", a: "Technische ondersteuning omvat: volledig systeemontwerp, BOM, installatiehandleiding, FAT-begeleiding bij de fabrikant, SAT-protocol, commissioning support (remote of on-site), EMS-configuratie en technische helpdesk gedurende het project. Na oplevering bieden we optioneel remote monitoring en doorlopende technische support." },
      { q: "Welke systemen levert Gridstate?", a: "Gridstate levert BESS-containerunits (LFP, liquid cooling), PCS/omvormers, EMS-software, MV-stations, transformatoren en balance-of-plant componenten. Alle systemen worden geselecteerd op kwaliteit, veiligheid en lifecycle-performance en worden geleverd met volledige technische documentatie." },
      { q: "Hoe werkt de FAT-inspectie?", a: "Gridstate voert de factory acceptance test uit bij de fabrikant vóór verzending. We controleren celkwaliteit, BMS-functionaliteit, PCS-prestaties, veiligheidssystemen en documentatie. Je ontvangt een volledig FAT-rapport met testresultaten en eventuele bevindingen. Jij kunt er zeker van zijn dat het systeem voldoet nog vóór het uw locatie bereikt." },
      { q: "Kunnen jullie ook helpen bij de netaansluitingsprocedure?", a: "Ja. Wij begeleiden je bij de technische documentatie voor de netbeheerder (RfG-compliance, beveiligingsinstellingen, meetinrichting) en kunnen adviseren over de aansluitingsprocedure bij Liander, Stedin, Enexis en regionale netbeheerders. De formele aanvraag en coördinatie op locatie doet de partner zelf." },
      { q: "Bieden jullie training aan voor onze engineers?", a: "Ja. We bieden praktijkgerichte training: systeemwerking en -architectuur, veiligheidsprotocollen, commissioning procedure, EMS-bediening en troubleshooting. Training kan on-site, op ons kantoor of digitaal worden gegeven. Maatwerk op basis van jouw team en projectvolume is mogelijk." },
      { q: "Is er een minimumaantal projecten of minimumafname?", a: "Nee. We starten partnerships zonder volumeverplichting. Wel kijken we bij de intake naar jouw ambitie en projectportfolio, zodat we de samenwerking goed kunnen vormgeven. Structurele partners profiteren van betere inkoopprijzen, prioritaire levering en uitgebreidere ondersteuning." },
      { q: "Hoe lang duurt levering van een BESS-systeem?", a: "Levertijd is afhankelijk van systeemconfiguratie en fabrieksbezetting, maar bedraagt doorgaans 10–18 weken na bevestiging van de order. Wij starten tijdig met procurement om leveringszekerheid te garanderen en houden je gedurende het hele traject op de hoogte van productiestatus." },
    ],
    finalSub: "Word partner",
    finalTitle: ["Bouw jouw BESS-portfolio", "met Gridstate als basis"],
    finalBody: "Gridstate ondersteunt installateurs, EPC'ers en solar-partijen bij het realiseren van batterijprojecten — met de juiste systemen en de technische rugdekking die je nodig hebt.",
    finalCta1: "Plan een partnergesprek",
    finalCta2: "info@gridstate.nl",
  },
  en: {
    back: "Partner models",
    tag: "Supply & Technical",
    heroTitle: ["Your installation.", "Our systems and", "technical backing."],
    heroSub: "Gridstate supplies battery systems, PCS, EMS and MV infrastructure — with full technical support included. You build it. We stand beside you, from engineering to commissioning.",
    heroCta1: "Become a partner",
    heroCta2: "See the model",
    trustStats: [
      { stat: "20 MW+", label: "BESS capacity supplied and supported" },
      { stat: "100%", label: "In-house engineering & technical documentation" },
      { stat: "6+", label: "Active partner projects in the Benelux" },
      { stat: "FAT/SAT", label: "Guidance included as standard" },
    ],
    whatLabel: "The Supply & Technical model",
    whatTitle: ["More than hardware.", "Technical collaboration."],
    whatP1: "The Supply & Technical model is designed for installers, EPC contractors, solar and energy companies that have the capacity to execute battery projects themselves — but want access to the right systems and the technical expertise required for complex BESS projects.",
    whatP2: "Gridstate is not a box mover. We don't just deliver hardware: we stand beside you as a technical partner throughout the entire project. From system design and technical documentation to FAT guidance, commissioning support and remote support after delivery.",
    whatItems: [
      "Turnkey delivery of BESS systems, PCS and EMS solutions",
      "Full technical engineering including single-line design",
      "BOM compilation, datasheets and installation instructions",
      "Factory Acceptance Test (FAT) guidance at the manufacturer",
      "On-site and remote commissioning support",
      "SAT protocol preparation and execution",
      "Ongoing technical support and remote monitoring",
    ],
    idealLabel: "Ideal for",
    idealItems: [
      { label: "Installers and electrotechnical companies", Icon: WrenchIcon },
      { label: "Solar and EPC companies looking to offer BESS", Icon: SunIcon },
      { label: "International partners and resellers", Icon: GlobeIcon },
      { label: "Companies with their own technical installation teams", Icon: TeamIcon },
      { label: "Aggregators and energy companies", Icon: BoltIcon },
      { label: "Industrial companies with own project capacity", Icon: FactoryIcon },
    ],
    splitLabel: "Division of responsibilities",
    splitTitle: ["What Gridstate does.", "What you deliver."],
    splitSub: "Transparent task division — Gridstate supplements where you want. More or less support is always negotiable.",
    gridstateItems: [
      "Technical system design and engineering",
      "System selection and component specification",
      "BOM compilation and technical documentation",
      "Delivery of BESS, PCS, EMS, transformer and MV station",
      "FAT inspection at the manufacturer",
      "Commissioning support (remote or on-site)",
      "SAT protocol and commissioning procedure",
      "EMS configuration and aggregator connection",
      "Technical support throughout the project lifecycle",
      "Remote monitoring after delivery (optional)",
      "Training for your technical team",
      "Market and regulatory insights",
    ],
    partnerItems: [
      "Civil works and foundation construction",
      "Container placement and mechanical assembly",
      "Electrotechnical installation and cabling",
      "MV switchgear installation and transformer placement",
      "On-site coordination with the grid operator",
      "Safety coordination and QHSE on-site",
      "Project management and client communication",
      "Engagement of local permitting authorities",
    ],
    approachLabel: "From partnership to operational system",
    approachTitle: ["Our collaboration,", "step by step"],
    approachSub: "From initial partner conversation to working BESS system — we guide you technically and strategically in every phase.",
    steps: [
      { num: "01", title: "Partnership intake & project scan", desc: "We start with a thorough introduction: your technical level, project portfolio, client base and ambitions. On this basis we jointly determine the ideal form of collaboration and assess the feasibility of initial concrete projects.", tags: ["Introduction", "Project scan", "Collaboration form", "Portfolio"] },
      { num: "02", title: "Technical design & system selection", desc: "Gridstate handles the technical design: cell chemistry selection, container architecture, PCS dimensioning, EMS strategy, MV station, transformer and cabling diagrams. All in accordance with NEN 1010, IEC 62933, IEC 62619 and PGS 37-1. You receive a complete technical package including single-line diagram and BOM.", tags: ["System design", "BOM", "Single-line", "PGS 37-1"] },
      { num: "03", title: "Procurement & factory supervision", desc: "Gridstate purchases directly from European and Asian manufacturers. We coordinate production, conduct FAT inspections and monitor quality and delivery reliability. You receive certified systems with complete technical documentation.", tags: ["Direct factory", "FAT inspection", "Quality assurance", "Certification"] },
      { num: "04", title: "Delivery & installation preparation", desc: "Gridstate coordinates transport, logistics and installation guidance. We prepare your team for preliminary works: foundation, container crane, MV connection procedure with the grid operator, fire prevention plan and safety protocols.", tags: ["Logistics", "Installation guide", "Grid operator", "QHSE"] },
      { num: "05", title: "Commissioning & start-up", desc: "Gridstate actively supports commissioning — remotely or on-site. We prepare the SAT protocol, guide BMS verification, EMS connection, aggregator integration and grid code validation. Your team executes; we ensure it's right.", tags: ["SAT protocol", "BMS verification", "EMS connection", "Grid compliance"] },
      { num: "06", title: "Aftercare, training & ongoing support", desc: "After delivery we offer technical support, remote monitoring, performance reporting and training for your engineers. We keep you informed about market developments, new regulations and optimisation opportunities — so you can serve your clients sharply.", tags: ["Remote support", "Training", "Monitoring", "Market insights"] },
    ],
    interimCta: { sub: "Ready to start?", title: "Schedule a partner conversation with Gridstate", body: "We discuss your project portfolio, technical level and the most suitable form of collaboration — no obligations.", btn: "Schedule a partner conversation" },
    supplyLabel: "What we supply",
    supplyTitle: "Systems built for the field",
    supplySub: "Gridstate doesn't supply standard products. Every system is selected, validated and delivered with a complete technical package for installation and commissioning.",
    supplyCards: [
      { title: "BESS containerised systems", desc: "LFP-based battery systems in 20ft and 40ft container formats. Standard liquid cooling, modular architecture, integrated BMS and fire safety in accordance with PGS 37-1. Available from 500 kWh to 5+ MWh per unit.", items: ["LFP cell chemistry", "Liquid cooling", ">8,000 cycles", "PGS 37-1 compliant"] },
      { title: "PCS / Power Conversion Systems", desc: "Bidirectional inverters for AC-coupled systems. Compatible with all common grid voltages and frequencies, including RfG compliance for SynC and FSM. Multiple power classes from 100 kW to 4 MW per unit.", items: ["AC coupling", "RfG compliant", "100 kW – 4 MW", "Island mode option"] },
      { title: "EMS — Energy Management Software", desc: "Gridstate's EMS platform handles real-time dispatch based on spot prices, imbalance, FCR signals and local forecasts. API connections with PV inverters, CHP, charging points, SCADA and aggregator platforms included.", items: ["Real-time dispatch", "API integrations", "Aggregator connection", "Cloud-based"] },
      { title: "MV stations & transformers", desc: "Prefab MV switchgear and transformers for medium-voltage connection. Including measurement transformers, protection relays, earthing systems and RfG setpoint configuration per grid operator requirements.", items: ["10/20 kV MV", "RfG setpoints", "Protection relays", "Grid operator ready"] },
      { title: "Balance of Plant & BOP components", desc: "From cables, cable trays and DC fuses to cooling systems, fire suppression, HVAC, emergency power supplies and monitoring hardware. Gridstate supplies the complete balance-of-plant package for an integral installation.", items: ["DC fuses", "HVAC cooling", "Fire suppression", "Monitoring hardware"] },
      { title: "Remote monitoring & SCADA", desc: "Hardware and cloud-based monitoring for availability, cell health, cycle count and energy balance. Optional SCADA integration for existing operational platforms of installers and asset managers.", items: ["24/7 data logging", "SCADA integration", "Cell health", "Performance KPIs"] },
    ],
    engLabel: "Engineering & technical support",
    engTitle: ["From BOM to", "working system"],
    engP1: "With every Supply & Technical project, Gridstate delivers a complete engineering package: single-line diagram, electrical schematics, BOM, installation manual, BMS settings and commissioning procedure. Your team starts with a complete technical foundation.",
    engP2: "Complex challenges? Our engineers are available for technical consultation as standard — from detailed MV connection questions to SCADA integration or aggregator coupling. We are your technical sounding board throughout the entire project.",
    engItems: [
      { title: "Single-line diagram", desc: "Complete electrical schematic including PCS, BESS, transformer, MV station, protection relays and metering equipment." },
      { title: "Bill of Materials (BOM)", desc: "Complete component list including specifications, part numbers and supplier details. Ready for procurement and installation." },
      { title: "Installation manual", desc: "Step-by-step guide for mechanical assembly, electrical connection and pre-commissioning checks per system." },
      { title: "FAT report & test protocol", desc: "Gridstate conducts FAT inspections at the manufacturer and delivers a complete FAT report with test results and deviation registration." },
      { title: "SAT protocol", desc: "Full site acceptance test procedure: from cell balancing and BMS verification to EMS connection and grid compliance test." },
      { title: "Training & knowledge transfer", desc: "Practice-oriented training for your engineers: system operation, safety, commissioning procedure and troubleshooting." },
    ],
    emsLabel: "EMS & Energy Markets",
    emsTitle: ["Maximum return", "for your clients"],
    emsP1: "A battery system is only profitable when it is managed intelligently. Gridstate helps you and your clients choose the right EMS strategy and realise the market integration that suits the project.",
    emsP2: "As a Gridstate partner, you can advise your clients on energy market participation. We provide the knowledge, the platform and the aggregator connections. You present it as part of a complete battery solution.",
    emsMarkets: [
      { label: "FCR", desc: "Frequency Containment Reserve" },
      { label: "aFRR", desc: "Automatic Frequency Restoration" },
      { label: "mFRR", desc: "Manual Frequency Restoration" },
      { label: "Imbalance trading", desc: "Intraday & day-ahead" },
      { label: "Peak shaving", desc: "Grid tariff optimisation" },
      { label: "GOPACS", desc: "Congestion management" },
    ],
    revenueLabel: "Revenue stack example",
    revenueSub: "Indicative revenue breakdown — 2 MWh utility-scale system, year 1",
    revenueDisclaimer: "Indicative. Actual revenues depend on market conditions, location and configuration.",
    whyLabel: "Why Gridstate as your supplier",
    whyTitle: "Not a hardware supplier. A technical partner.",
    whySub: "Gridstate was founded by engineers who understand how BESS projects work in practice. We don't just supply systems — we make sure they get built right.",
    whyItems: [
      { title: "Access to the right systems", desc: "Gridstate selects on quality, safety and lifecycle performance — not on margin. You gain access to manufacturers and systems that would normally be out of reach for smaller parties." },
      { title: "Engineering support included", desc: "Every delivery comes with a complete technical package: design, schematics, BOM, installation manual and commissioning procedure. No extra costs, no hidden services." },
      { title: "FAT/SAT guidance as standard", desc: "We inspect every system at the manufacturer before shipment and guide the site acceptance test at your location. That's our way of guaranteeing quality — not just promising it." },
      { title: "Scalable partner model", desc: "Start with one project. Scale to a structural partnership. Gridstate grows alongside your BESS portfolio — from first pilot to roll-out at scale." },
      { title: "Market knowledge & energy strategy", desc: "We keep you informed about developments in FCR, aFRR, imbalance markets, grid congestion and regulations. So you can always advise your clients based on current market insights." },
      { title: "Long-term partnership", desc: "We prefer long-term collaboration over one-off supply. That means honest advice, transparent pricing, direct support and a relationship that grows as your BESS portfolio grows." },
    ],
    faqLabel: "Frequently asked questions",
    faqTitle: "Everything you need to know",
    faqs: [
      { q: "What is the difference between Supply & Technical and Full EPC?", a: "With Full EPC, Gridstate takes full responsibility: engineering, procurement and construction. With Supply & Technical, Gridstate supplies the systems and technical support, but you as partner carry out the installation yourself. This model is ideal for parties with their own installation teams who want to expand their BESS offering without being fully dependent on an EPC party." },
      { q: "What does the technical support exactly include?", a: "Technical support includes: complete system design, BOM, installation manual, FAT guidance at the manufacturer, SAT protocol, commissioning support (remote or on-site), EMS configuration and technical helpdesk throughout the project. After delivery we optionally offer remote monitoring and ongoing technical support." },
      { q: "Which systems does Gridstate supply?", a: "Gridstate supplies BESS container units (LFP, liquid cooling), PCS/inverters, EMS software, MV stations, transformers and balance-of-plant components. All systems are selected on quality, safety and lifecycle performance and delivered with complete technical documentation." },
      { q: "How does the FAT inspection work?", a: "Gridstate conducts the factory acceptance test at the manufacturer before shipment. We check cell quality, BMS functionality, PCS performance, safety systems and documentation. You receive a complete FAT report with test results and any findings. You can be certain the system meets requirements before it reaches your site." },
      { q: "Can you also help with the grid connection procedure?", a: "Yes. We guide you on the technical documentation for the grid operator (RfG compliance, protection settings, metering) and can advise on the connection procedure with Liander, Stedin, Enexis and regional grid operators. The formal application and on-site coordination is done by the partner." },
      { q: "Do you offer training for our engineers?", a: "Yes. We offer practice-oriented training: system operation and architecture, safety protocols, commissioning procedure, EMS operation and troubleshooting. Training can be given on-site, at our office or digitally. Customisation based on your team and project volume is possible." },
      { q: "Is there a minimum number of projects or minimum purchase volume?", a: "No. We start partnerships without volume commitments. We do look at your ambition and project portfolio during the intake, so we can shape the collaboration properly. Structural partners benefit from better purchase prices, priority delivery and more extensive support." },
      { q: "How long does delivery of a BESS system take?", a: "Lead time depends on system configuration and factory capacity, but typically runs 10–18 weeks after order confirmation. We start procurement early to ensure delivery certainty and keep you informed about production status throughout." },
    ],
    finalSub: "Become a partner",
    finalTitle: ["Build your BESS portfolio", "with Gridstate as your foundation"],
    finalBody: "Gridstate supports installers, EPC contractors and solar companies in realising battery projects — with the right systems and the technical backing you need.",
    finalCta1: "Schedule a partner conversation",
    finalCta2: "info@gridstate.nl",
  },
};

const revenueItems = [
  { label: { nl: "FCR participatie", en: "FCR participation" }, pct: 45 },
  { label: { nl: "Onbalanshandel", en: "Imbalance trading" }, pct: 30 },
  { label: { nl: "Peak shaving", en: "Peak shaving" }, pct: 15 },
  { label: { nl: "aFRR / mFRR", en: "aFRR / mFRR" }, pct: 10 },
];

export default function SupplyTechnicalPage() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div className="flex flex-col pt-18">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 lg:py-52 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.65) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.6), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/partnermodellen" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-10">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {c.back}
          </Link>
          <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase mb-6 bg-white text-[#470020] rounded">
            {c.tag}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.93] mb-8" style={{ letterSpacing: "-0.03em" }}>
            {c.heroTitle[0]}<br />
            <span className="text-white/55">{c.heroTitle[1]}</span><br />
            {c.heroTitle[2]}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-12">{c.heroSub}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/plan-een-afspraak" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-opacity duration-200">
              {c.heroCta1}<ArrowRight />
            </Link>
            <a href="#aanpak" className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold rounded hover:bg-white/10 active:scale-[0.98] transition-opacity duration-200">
              {c.heroCta2}
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────── */}
      <section className="bg-[#1a0810] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {c.trustStats.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>{item.stat}</p>
              <p className="text-white/40 text-xs mt-1.5 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WAT IS SUPPLY & TECHNICAL ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-5">{c.whatLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.whatTitle[0]}<br />{c.whatTitle[1]}
              </h2>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{c.whatP1}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-10">{c.whatP2}</p>
              <div className="flex flex-col gap-3">
                {c.whatItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 shrink-0 bg-[#470020]/10 border border-[#470020]/20 rounded flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <p className="text-[#6b4a56] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-[#f9f6f4] rounded-2xl p-10 border border-[#e8e0dc]">
                <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">{c.idealLabel}</p>
                <div className="flex flex-col">
                  {c.idealItems.map(({ label, Icon }, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-[#e8e0dc] last:border-0">
                      <div className="w-8 h-8 shrink-0 bg-[#470020]/10 border border-[#470020]/15 rounded-lg flex items-center justify-center">
                        <Icon />
                      </div>
                      <p className="text-[#1a0810] text-sm font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TAAKVERDELING ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.splitLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              {c.splitTitle[0]}<br />{c.splitTitle[1]}
            </h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-14">{c.splitSub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-[#470020] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l5 2.5v5L8 12 3 9.5v-5L8 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 2v10M3 4.5l5 2.5 5-2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-white font-black text-sm tracking-wide">Gridstate</p>
                </div>
                <div className="flex flex-col gap-3">
                  {c.gridstateItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 bg-white/15 rounded flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-8 border border-[#e8e0dc] h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 bg-[#470020]/10 rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a4 4 0 100 8 4 4 0 000-8z" stroke="#470020" strokeWidth="1.5"/><path d="M4 14c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <p className="text-[#1a0810] font-black text-sm tracking-wide">{lang === "nl" ? "Partner" : "Partner"}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {c.partnerItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 bg-[#470020]/10 border border-[#470020]/20 rounded flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p className="text-[#6b4a56] text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PROCES IN STAPPEN ────────────────────────────────── */}
      <section id="aanpak" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.approachLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              {c.approachTitle[0]}<br />{c.approachTitle[1]}
            </h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.approachSub}</p>
          </ScrollReveal>
          <div className="flex flex-col gap-5">
            {c.steps.map((step, i) => (
              <ScrollReveal key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_260px] gap-6 lg:gap-10 items-start bg-[#f9f6f4] rounded-xl p-8 border border-[#e8e0dc]">
                  <p className="text-6xl font-black text-[#470020]/12 leading-none">{step.num}</p>
                  <div>
                    <h3 className="text-xl font-black text-[#1a0810] mb-3" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                    <p className="text-[#6b4a56] leading-relaxed text-sm">{step.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:pt-1">
                    {step.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-[#470020]/8 text-[#470020] text-xs font-semibold rounded-full border border-[#470020]/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERIM CTA ──────────────────────────────────────── */}
      <section className="relative py-20 bg-[#470020] text-center overflow-hidden">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <ScrollReveal>
          <div className="relative max-w-2xl mx-auto px-6">
            <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-3">{c.interimCta.sub}</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>{c.interimCta.title}</h2>
            <p className="text-white/60 mb-8">{c.interimCta.body}</p>
            <Link href="/plan-een-afspraak" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-opacity duration-200">
              {c.interimCta.btn}<ArrowRight />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── WAT WIJ LEVEREN ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.supplyLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.supplyTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.supplySub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.supplyCards.map((card, i) => (
              <ScrollReveal key={i}>
                <div className="h-full bg-white rounded-xl p-8 border border-[#e8e0dc] flex flex-col">
                  <h3 className="font-black text-[#1a0810] text-lg mb-3" style={{ letterSpacing: "-0.02em" }}>{card.title}</h3>
                  <p className="text-[#6b4a56] text-sm leading-relaxed mb-5 flex-1">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item, j) => (
                      <span key={j} className="px-2.5 py-1 bg-[#470020]/8 border border-[#470020]/15 text-[#470020] text-xs font-medium rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING & TECHNISCHE SUPPORT ─────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-5">{c.engLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.engTitle[0]}<br />{c.engTitle[1]}
              </h2>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{c.engP1}</p>
              <p className="text-[#6b4a56] leading-relaxed">{c.engP2}</p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                {c.engItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#f9f6f4] rounded-xl border border-[#e8e0dc]">
                    <div className="w-7 h-7 shrink-0 bg-[#470020]/10 border border-[#470020]/20 rounded-lg flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="font-black text-[#1a0810] text-sm mb-1" style={{ letterSpacing: "-0.01em" }}>{item.title}</p>
                      <p className="text-[#6b4a56] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── EMS & ENERGIEMARKTEN ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#1a0810]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-5">{c.emsLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.emsTitle[0]}<br />{c.emsTitle[1]}
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">{c.emsP1}</p>
              <p className="text-white/60 leading-relaxed mb-10">{c.emsP2}</p>
              <div className="grid grid-cols-2 gap-3">
                {c.emsMarkets.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white font-black text-sm mb-1">{item.label}</p>
                    <p className="text-white/40 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-2">{c.revenueLabel}</p>
                <p className="text-white/40 text-xs mb-8">{c.revenueSub}</p>
                <div className="flex flex-col gap-5">
                  {revenueItems.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">{item.label[lang]}</span>
                        <span className="text-white font-bold">{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#470020]" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/25 text-xs mt-8 leading-relaxed">{c.revenueDisclaimer}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WAAROM GRIDSTATE ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.whyLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.whyTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.whySub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.whyItems.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="p-8 border border-[#e8e0dc] bg-white rounded-xl">
                  <div className="w-10 h-10 bg-[#470020]/10 border border-[#470020]/20 rounded-xl flex items-center justify-center mb-5">
                    {whyIcons[i]}
                  </div>
                  <h3 className="font-black text-[#1a0810] text-lg mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p className="text-[#6b4a56] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.faqLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-12" style={{ letterSpacing: "-0.03em" }}>{c.faqTitle}</h2>
          </ScrollReveal>
          {c.faqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <div className="border-b border-[#e8e0dc] py-7">
                <p className="font-black text-[#1a0810] mb-3" style={{ letterSpacing: "-0.01em" }}>{faq.q}</p>
                <p className="text-[#6b4a56] leading-relaxed text-sm">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-48 bg-[#470020] overflow-hidden">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.65) 100%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-5">{c.finalSub}</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              {c.finalTitle[0]}<br />{c.finalTitle[1]}
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">{c.finalBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-een-afspraak" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-opacity duration-200">
                {c.finalCta1}<ArrowRight />
              </Link>
              <a href="mailto:info@gridstate.nl" className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white font-semibold rounded hover:bg-white/10 active:scale-[0.98] transition-opacity duration-200">
                {c.finalCta2}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
