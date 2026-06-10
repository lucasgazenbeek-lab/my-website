"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Ideal-for icons
function HardHatIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 10h10v1.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 11.5V10z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3v1M5 4.5C5.5 3.5 6.5 3 8 3s2.5.5 3 1.5V10H5V4.5z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 10h12" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function GridPowerIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="8" r="3" stroke="#470020" strokeWidth="1.5"/><path d="M4.22 4.22l1.42 1.42M10.36 10.36l1.42 1.42M10.36 5.64l1.42-1.42M4.22 11.78l1.42-1.42" stroke="#470020" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}
function SunIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="#470020" strokeWidth="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.42 1.42M11.36 11.36l1.42 1.42M3.22 12.78l1.42-1.42M11.36 4.64l1.42-1.42" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function GlobeIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#470020" strokeWidth="1.5"/><path d="M8 1.5c-2 2-3 4-3 6.5s1 4.5 3 6.5M8 1.5c2 2 3 4 3 6.5s-1 4.5-3 6.5M1.5 8h13" stroke="#470020" strokeWidth="1.3" strokeLinecap="round"/></svg>;
}
function FactoryIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="10" width="14" height="5" rx="0.5" stroke="#470020" strokeWidth="1.5"/><path d="M1 10V7l4 2V7l4 2V7l4 2V10" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10V8M8 10V8M11 10V8" stroke="#470020" strokeWidth="1.2"/></svg>;
}
function ChartIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13l3-4 2.5 2.5 3.5-5 2 2" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 15h10" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

const whyIcons = [
  // Directe fabrieksrelaties
  <svg key="factory" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="12" width="16" height="6" rx="0.5" stroke="#470020" strokeWidth="1.6"/><path d="M2 12V8l5 2.5V8l5 2.5V8l5 2.5V12" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 12V9.5M10 12V9.5M13.5 12V9.5" stroke="#470020" strokeWidth="1.3"/></svg>,
  // FAT kwaliteitscontrole
  <svg key="inspect" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="5" y="3" width="10" height="14" rx="1.5" stroke="#470020" strokeWidth="1.6"/><path d="M8 3V2a2 2 0 014 0v1" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/><path d="M7.5 10.5l2 2 3-3.5" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 7h4" stroke="#470020" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  // Supply chain & logistiek
  <svg key="truck" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 13V7h9v6H2z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 9h3l3 3v1h-6V9z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="5.5" cy="14.5" r="1.5" stroke="#470020" strokeWidth="1.4"/><circle cx="14.5" cy="14.5" r="1.5" stroke="#470020" strokeWidth="1.4"/></svg>,
  // Volledige documentatie
  <svg key="doc" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 2h8l3 3v13H3V2h3z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v4h4" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 9h6M7 12h6M7 15h4" stroke="#470020" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  // Schaalbaarheid
  <svg key="scale" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="13" width="5" height="5" rx="0.5" stroke="#470020" strokeWidth="1.6"/><rect x="7.5" y="8" width="5" height="10" rx="0.5" stroke="#470020" strokeWidth="1.6"/><rect x="13" y="3" width="5" height="15" rx="0.5" stroke="#470020" strokeWidth="1.6"/></svg>,
  // Internationale levering
  <svg key="globe" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#470020" strokeWidth="1.6"/><path d="M10 2c-2.5 2.5-4 5-4 8s1.5 5.5 4 8M10 2c2.5 2.5 4 5 4 8s-1.5 5.5-4 8" stroke="#470020" strokeWidth="1.4" strokeLinecap="round"/><path d="M2 10h16" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/><path d="M3 6.5h14M3 13.5h14" stroke="#470020" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 1.5"/></svg>,
];

const content = {
  nl: {
    back: "Partnermodellen",
    tag: "Supply Only",
    heroTitle: ["Hardware voor", "teams die weten", "wat ze doen."],
    heroSub: "Gridstate levert BESS-systemen, PCS, EMS en MV-componenten aan professionele partijen met eigen engineering- en installatieteams. Geen onnodige tussenlagen — directe supply vanuit fabrikant.",
    heroCta1: "Vraag een RFQ aan",
    heroCta2: "Bekijk het aanbod",
    trustStats: [
      { stat: siteConfig.stats.mwhRealized.display, label: "Opslagcapaciteit geleverd" },
      { stat: "Directe", label: "fabrieksrelaties EU & Azië" },
      { stat: "FAT", label: "Elk systeem geïnspecteerd" },
      { stat: "Benelux", label: "én internationale levering" },
    ],
    posLabel: "Supply Only",
    posTitle: ["Strategische supply.", "Geen compromissen."],
    posP1: "Het Supply Only model is voor professionele partijen die de engineering en installatie zelf in de hand hebben — maar supply chain management, kwaliteitscontrole en directe fabrieksinkoop willen uitbesteden aan een gespecialiseerde partner.",
    posP2: "Gridstate is geen hardware reseller en geen distributeur. Wij zijn een supply partner die utility-scale projecten begrijpt: de complexiteit van FAT-trajecten, de eisen van internationale logistiek, de kritische belang van technische documentatie en de kwaliteitseisen die horen bij professionele batterijprojecten.",
    posItems: [
      "Directe inkoop bij fabrikanten in EU en Azië",
      "FAT-inspectie en kwaliteitsborging per levering",
      "Volledige technische documentatie bij elk systeem",
      "Logistieke coördinatie en transport naar locatie",
      "Compliance- en certificeringsdocumentatie",
      "Schaalbare levering voor enkelvoudige en serie-projecten",
    ],
    idealLabel: "Voor wie",
    idealItems: [
      { label: "EPC-bedrijven met eigen engineeringteam", Icon: HardHatIcon },
      { label: "Utility developers en netbeheerders", Icon: GridPowerIcon },
      { label: "Solar integrators die BESS toevoegen", Icon: SunIcon },
      { label: "Internationale partners en integrators", Icon: GlobeIcon },
      { label: "Industriële partijen met eigen technisch team", Icon: FactoryIcon },
      { label: "Investeerders en projectontwikkelaars", Icon: ChartIcon },
    ],
    supplyLabel: "Wat wij leveren",
    supplyTitle: "Van cel tot MV-station",
    supplySub: "Gridstate levert de volledige hardware stack voor batterijopslagprojecten. Per component geselecteerd op kwaliteit, veiligheid en projectgeschiktheid.",
    supplyCards: [
      { title: "BESS container units", desc: "LFP-gebaseerde batterijsystemen in gestandaardiseerde containerformaten. Geleverd als volledige unit inclusief BMS, brandbeveiliging en interne bekabeling. Schaalbaar van enkele honderd kWh tot meerdere MWh per unit.", specs: ["LFP celchemie", "20ft / 40ft", "500 kWh – 5+ MWh", "PGS 37-1 ready"] },
      { title: "PCS / Power Conversion Systems", desc: "Bidirectionele omvormers voor AC-gekoppelde systemen. Beschikbaar in meerdere vermogensklassen, compatibel met gängbare netspanningen en frequenties. Inclusief RfG-compliance documentatie.", specs: ["AC coupling", "100 kW – 4 MW", "RfG compliant", "Grid-forming optie"] },
      { title: "EMS — Energy Management Systems", desc: "Standalone en geïntegreerde EMS-platforms voor realtime batterijsturing. Compatibel met PV-inverters, PCS-systemen, SCADA-omgevingen en aggregatorplatformen via standaard API-interfaces.", specs: ["SCADA-ready", "API-interfaces", "Multi-asset", "Cloud + on-premise"] },
      { title: "MV-stations & transformatoren", desc: "Prefab middenspanningsinstallaties en transformatoren voor directe aansluiting op het distributienet. Geleverd met meetinrichting, beschermingsrelais en aardingssystemen.", specs: ["10 / 20 kV", "Prefab units", "RfG setpoints", "Beschermingsrelais"] },
      { title: "Balance of Plant", desc: "Alle overige hardware die nodig is voor een complete batterijinstallatie: DC-beveiligingscomponenten, kabelgoten, HVAC, brandblussers, noodstroomvoorzieningen en monitoringhardware.", specs: ["DC protection", "HVAC systemen", "Brandbeveiliging", "Monitoringhardware"] },
      { title: "Losse componenten & spare parts", desc: "Batterijmodules, cellen, BMS-hardware, PCS-onderdelen en reservecomponenten voor uitbreiding, vervanging of spare parts management bij operationele projecten.", specs: ["Batterijmodules", "BMS componenten", "Spare parts", "Uitbreidingslevering"] },
    ],
    fatLabel: "Kwaliteitscontrole & FAT",
    fatTitle: ["Elk systeem", "geïnspecteerd."],
    fatP1: "Gridstate voert factory acceptance tests uit bij de fabrikant vóór elke verzending. Geen systeem verlaat de fabriek zonder gevalideerde testresultaten. Celkwaliteit, BMS-functionaliteit, beschermingssystemen en documentatievolledigheid worden gecontroleerd en gerapporteerd.",
    fatP2: "U ontvangt per levering een FAT-rapport, testprotocollen, certificeringen en de volledige technische documentatieset. Zodat uw eigen engineering team direct aan de slag kan — zonder twijfels over kwaliteit of documentatiegaten.",
    fatItems: [
      { title: "FAT-inspectie bij fabrikant", desc: "Gridstate-engineers inspecteren elk systeem op locatie bij de fabrikant. Celkwaliteit, BMS, bescherming en documentatie worden gevalideerd vóór verzending." },
      { title: "FAT-rapport & testprotocol", desc: "U ontvangt een volledig FAT-rapport met testresultaten, afwijkingsregistratie en vrijgaveconfirmatie per geleverde unit." },
      { title: "Certificeringen & normdocumentatie", desc: "Relevante certificeringen (IEC 62619, IEC 62933, UN38.3, CE) en normdocumentatie worden standaard meegeleverd bij elke levering." },
      { title: "PGS 37-1 voorbereidingsdocumentatie", desc: "Ondersteuning bij de voorbereiding van brandveiligheidsrelevante documentatie ten behoeve van vergunningsprocedures en afstemming met de veiligheidsregio." },
    ],
    logLabel: "Supply chain & logistiek",
    logTitle: ["Van fabrikant", "tot uw locatie."],
    logP1: "Gridstate coördineert het volledige supply chain traject: van productieplanning en kwaliteitscontrole bij de fabrikant tot transport, douane, lokale levering en installatieplaatsing op locatie.",
    logP2: "Voor projecten met meerdere leveringen of gefaseerde uitrol coördineert Gridstate de supply chain als één aanspreekpunt. U behoudt overzicht zonder de complexiteit van directe fabrieksrelaties en internationale logistiek.",
    logItems: [
      { stat: "EU & Azië", label: "Fabrieksrelaties" },
      { stat: "10–18 wkn", label: "Gemiddelde levertijd" },
      { stat: "Benelux +", label: "Internationale levering" },
      { stat: "1", label: "Aanspreekpunt voor uw supply" },
    ],
    logFeatures: [
      "Productieplanning en fabriekscoördinatie",
      "Transport en douane-afhandeling",
      "Lokale levering en opstelling op locatie",
      "Leveringszekerheid door vroege procurement",
      "Statusupdates gedurende het hele traject",
      "Gefaseerde levering voor multi-project trajecten",
    ],
    docLabel: "Documentatie & compliance",
    docTitle: "Alles wat uw team nodig heeft",
    docSub: "Elke levering van Gridstate gaat vergezeld van een compleet documentatiepakket. Uw engineeringteam start met volledige informatie — geen losse eindjes, geen documentatiegaten.",
    docItems: [
      { title: "Technische specificaties", desc: "Volledige datasheet-set per component inclusief elektrische specificaties, mechanische afmetingen, omgevingsvereisten en interfacebeschrijvingen." },
      { title: "Single-line referentie", desc: "Referentie single-line diagram en aansluitschema's als basis voor uw eigen engineeringdocumentatie. Aanpasbaar aan uw projectspecificaties." },
      { title: "Installatiehandleiding", desc: "Fabrikanthandleidingen voor mechanische montage, elektrische aansluiting en pre-commissioning checks — per geleverd systeem of component." },
      { title: "BMS- en EMS-configuratiedocumentatie", desc: "BMS-parameteroverzichten, EMS-interfacedocumentatie en communicatieprotocolbeschrijvingen (Modbus, CANbus, MQTT) per systeem." },
      { title: "Certificeringen & testdocumentatie", desc: "FAT-rapport, testprotocollen, type-certificeringen (IEC, CE, UN38.3) en normdocumentatie per levering." },
      { title: "Compliance voorbereiding", desc: "Ondersteuning bij het samenstellen van documentatie voor vergunningsprocedures, netbeheerderaansluiting en PGS 37-1-gerelateerde dossiervorming." },
    ],
    whyLabel: "Waarom via Gridstate sourcen",
    whyTitle: "Geen reseller. Een supply partner.",
    whySub: "Gridstate neemt supply chain complexiteit weg bij professionele BESS-projecten. Directe fabrieksrelaties, strikte kwaliteitscontrole en volledige documentatie — standaard bij elke levering.",
    whyItems: [
      { title: "Directe fabrieksrelaties", desc: "Gridstate koopt rechtstreeks in bij geselecteerde fabrikanten in Europa en Azië. Geen distributiemarges, geen tussenpersonen. Directe communicatielijnen voor productie, kwaliteit en leveringsplanning." },
      { title: "FAT bij elke levering", desc: "Elk systeem wordt geïnspecteerd vóór verzending. U ontvangt gevalideerde testresultaten en een volledig FAT-rapport. Kwaliteitsborging die verder gaat dan alleen een leveringsbon." },
      { title: "Supply chain als dienst", desc: "Van productiecoördinatie en FAT tot transport en lokale levering — Gridstate regelt het traject als één aanspreekpunt. U behoudt focus op uw engineeringen installatietraject." },
      { title: "Volledige documentatie standaard", desc: "Datasheet-sets, certificeringen, FAT-rapporten, installatiehandleidingen en compliance-documentatie worden bij elke levering meegeleverd. Geen aanvullende verzoeken nodig." },
      { title: "Schaalbaar voor elk volume", desc: "Van één containerunit tot een meerfasig leveringsprogramma voor grote utility-scale projecten. Gridstate schaalt mee met uw projectportfolio zonder kwaliteitsconcessies." },
      { title: "Internationale levering", desc: "Gridstate levert in de Benelux en coördineert internationale supply trajecten voor projecten buiten Nederland. Transport, douane en lokale logistiek worden centraal gecoördineerd." },
    ],
    faqLabel: "Veelgestelde vragen",
    faqTitle: "Supply Only — wat u moet weten",
    faqs: [
      { q: "Wat houdt het Supply Only model precies in?", a: "Supply Only betekent dat Gridstate uitsluitend hardware en componenten levert — inclusief FAT-inspectie, volledige documentatie en logistieke coördinatie. Engineering, installatie en inbedrijfstelling vallen buiten dit model en worden uitgevoerd door uw eigen team. Voor partijen die technische ondersteuning wensen is het Supply & Technical model beschikbaar." },
      { q: "Welke systemen en componenten levert Gridstate?", a: "Gridstate levert BESS containerunits (LFP), PCS/omvormers, EMS-platforms, MV-stations, transformatoren, balance-of-plant componenten en losse spare parts. Alle leveringen zijn voorzien van FAT-documentatie en volledige technische documentatieset." },
      { q: "Voert Gridstate ook een FAT-inspectie uit bij Supply Only?", a: "Ja. FAT-inspectie is standaard onderdeel van elk Supply Only traject. Gridstate voert de factory acceptance test uit bij de fabrikant, stelt een FAT-rapport op en bevestigt vrijgave vóór verzending. U ontvangt het complete testdossier bij levering." },
      { q: "Wat zit er in het documentatiepakket bij elke levering?", a: "Standaard bij elke levering: technische specificaties en datasheet-sets, FAT-rapport en testprotocollen, type-certificeringen (IEC, CE, UN38.3), installatiehandleidingen, BMS/EMS-configuratiedocumentatie en referentie single-line diagram. Aanvullende compliance-documentatie is op aanvraag beschikbaar." },
      { q: "Hoe lang duurt levering gemiddeld?", a: "Gemiddelde levertijd bedraagt 10–18 weken na bevestiging van de order, afhankelijk van systeemconfiguratie en fabrieksbezetting. Gridstate start vroeg met procurement om leveringszekerheid te garanderen en houdt u via één aanspreekpunt op de hoogte van de productiestatus." },
      { q: "Levert Gridstate ook buiten Nederland?", a: "Ja. Gridstate coördineert internationale supply trajecten inclusief transport, douane-afhandeling en lokale levering in Europa. Neem contact op voor de mogelijkheden bij uw specifieke projectlocatie." },
      { q: "Kan Gridstate ook gefaseerd leveren voor meerfasige projecten?", a: "Ja. Voor grotere projecten of uitgerolde portfolios coördineert Gridstate gefaseerde leveringsprogramma's. Productie- en leveringsplanning wordt afgestemd op uw projectfasering. Eén aanspreekpunt voor het volledige supply traject." },
      { q: "Wat als ik later toch technische ondersteuning nodig heb?", a: "Gridstate biedt naast Supply Only ook het Supply & Technical model aan, waarbij engineering ondersteuning, FAT-begeleiding, commissioning support en technische documentatie standaard zijn inbegrepen. Bij twijfel over het juiste model bespreken we samen wat past bij uw team en project." },
    ],
    interimCta: { sub: "Klaar voor uw project?", title: "Vraag een RFQ aan", body: "Deel uw projectspecificaties en ontvang een offerte op maat — direct vanuit de fabrikant, zonder tussenlagen.", btn: "RFQ aanvragen" },
    finalSub: "Start uw supply traject",
    finalTitle: ["Professionele supply", "voor serieuze projecten"],
    finalBody: "Gridstate levert BESS-systemen en componenten aan professionele partijen. Direct vanuit de fabrikant, met FAT-garantie en volledige documentatie.",
    finalCta1: "RFQ aanvragen",
    finalCta2: siteConfig.company.email,
  },
  en: {
    back: "Partner models",
    tag: "Supply Only",
    heroTitle: ["Hardware for", "teams that know", "what they're doing."],
    heroSub: "Gridstate supplies BESS systems, PCS, EMS and MV components to professional parties with their own engineering and installation teams. No unnecessary layers — direct supply from manufacturer.",
    heroCta1: "Request an RFQ",
    heroCta2: "View the offer",
    trustStats: [
      { stat: siteConfig.stats.mwhRealized.display, label: "Storage capacity supplied" },
      { stat: "Direct", label: "factory relationships EU & Asia" },
      { stat: "FAT", label: "Every system inspected" },
      { stat: "Benelux", label: "and international delivery" },
    ],
    posLabel: "Supply Only",
    posTitle: ["Strategic supply.", "No compromises."],
    posP1: "The Supply Only model is for professional parties that handle engineering and installation themselves — but want to outsource supply chain management, quality control and direct factory procurement to a specialised partner.",
    posP2: "Gridstate is not a hardware reseller and not a distributor. We are a supply partner that understands utility-scale projects: the complexity of FAT processes, the demands of international logistics, the critical importance of technical documentation and the quality standards that belong to professional battery projects.",
    posItems: [
      "Direct procurement from manufacturers in EU and Asia",
      "FAT inspection and quality assurance per delivery",
      "Complete technical documentation with every system",
      "Logistics coordination and transport to site",
      "Compliance and certification documentation",
      "Scalable delivery for single and series projects",
    ],
    idealLabel: "Who this is for",
    idealItems: [
      { label: "EPC companies with their own engineering team", Icon: HardHatIcon },
      { label: "Utility developers and grid operators", Icon: GridPowerIcon },
      { label: "Solar integrators adding BESS", Icon: SunIcon },
      { label: "International partners and integrators", Icon: GlobeIcon },
      { label: "Industrial parties with their own technical team", Icon: FactoryIcon },
      { label: "Investors and project developers", Icon: ChartIcon },
    ],
    supplyLabel: "What we supply",
    supplyTitle: "From cell to MV station",
    supplySub: "Gridstate supplies the complete hardware stack for battery storage projects. Each component selected on quality, safety and project suitability.",
    supplyCards: [
      { title: "BESS container units", desc: "LFP-based battery systems in standardised container formats. Delivered as complete units including BMS, fire safety and internal cabling. Scalable from a few hundred kWh to multiple MWh per unit.", specs: ["LFP cell chemistry", "20ft / 40ft", "500 kWh – 5+ MWh", "PGS 37-1 ready"] },
      { title: "PCS / Power Conversion Systems", desc: "Bidirectional inverters for AC-coupled systems. Available in multiple power classes, compatible with common grid voltages and frequencies. Including RfG compliance documentation.", specs: ["AC coupling", "100 kW – 4 MW", "RfG compliant", "Grid-forming option"] },
      { title: "EMS — Energy Management Systems", desc: "Standalone and integrated EMS platforms for real-time battery control. Compatible with PV inverters, PCS systems, SCADA environments and aggregator platforms via standard API interfaces.", specs: ["SCADA-ready", "API interfaces", "Multi-asset", "Cloud + on-premise"] },
      { title: "MV stations & transformers", desc: "Prefab medium-voltage installations and transformers for direct connection to the distribution network. Delivered with metering, protection relays and earthing systems.", specs: ["10 / 20 kV", "Prefab units", "RfG setpoints", "Protection relays"] },
      { title: "Balance of Plant", desc: "All other hardware required for a complete battery installation: DC protection components, cable trays, HVAC, fire suppression, emergency power supplies and monitoring hardware.", specs: ["DC protection", "HVAC systems", "Fire suppression", "Monitoring hardware"] },
      { title: "Loose components & spare parts", desc: "Battery modules, cells, BMS hardware, PCS parts and spare components for expansion, replacement or spare parts management at operational projects.", specs: ["Battery modules", "BMS components", "Spare parts", "Expansion delivery"] },
    ],
    fatLabel: "Quality control & FAT",
    fatTitle: ["Every system", "inspected."],
    fatP1: "Gridstate conducts factory acceptance tests at the manufacturer before every shipment. No system leaves the factory without validated test results. Cell quality, BMS functionality, protection systems and documentation completeness are checked and reported.",
    fatP2: "You receive a FAT report, test protocols, certifications and the complete technical documentation set with each delivery. So your engineering team can get to work immediately — without doubts about quality or documentation gaps.",
    fatItems: [
      { title: "FAT inspection at manufacturer", desc: "Gridstate engineers inspect every system on-site at the manufacturer. Cell quality, BMS, protection and documentation are validated before shipment." },
      { title: "FAT report & test protocol", desc: "You receive a complete FAT report with test results, deviation registration and release confirmation per delivered unit." },
      { title: "Certifications & standards documentation", desc: "Relevant certifications (IEC 62619, IEC 62933, UN38.3, CE) and standards documentation are included as standard with every delivery." },
      { title: "PGS 37-1 preparation documentation", desc: "Support with preparing fire safety-relevant documentation for permitting procedures and coordination with the safety region." },
    ],
    logLabel: "Supply chain & logistics",
    logTitle: ["From manufacturer", "to your site."],
    logP1: "Gridstate coordinates the complete supply chain process: from production planning and quality control at the manufacturer to transport, customs, local delivery and positioning on site.",
    logP2: "For projects with multiple deliveries or phased roll-out, Gridstate coordinates the supply chain as a single point of contact. You maintain overview without the complexity of direct factory relationships and international logistics.",
    logItems: [
      { stat: "EU & Asia", label: "Factory relationships" },
      { stat: "10–18 wks", label: "Average lead time" },
      { stat: "Benelux +", label: "International delivery" },
      { stat: "1", label: "Point of contact for your supply" },
    ],
    logFeatures: [
      "Production planning and factory coordination",
      "Transport and customs clearance",
      "Local delivery and on-site positioning",
      "Delivery certainty through early procurement",
      "Status updates throughout the entire process",
      "Phased delivery for multi-project programmes",
    ],
    docLabel: "Documentation & compliance",
    docTitle: "Everything your team needs",
    docSub: "Every Gridstate delivery comes with a complete documentation package. Your engineering team starts with full information — no loose ends, no documentation gaps.",
    docItems: [
      { title: "Technical specifications", desc: "Complete datasheet set per component including electrical specifications, mechanical dimensions, environmental requirements and interface descriptions." },
      { title: "Single-line reference", desc: "Reference single-line diagram and connection schematics as a basis for your own engineering documentation. Adaptable to your project specifications." },
      { title: "Installation manual", desc: "Manufacturer manuals for mechanical assembly, electrical connection and pre-commissioning checks — per delivered system or component." },
      { title: "BMS & EMS configuration documentation", desc: "BMS parameter overviews, EMS interface documentation and communication protocol descriptions (Modbus, CANbus, MQTT) per system." },
      { title: "Certifications & test documentation", desc: "FAT report, test protocols, type certifications (IEC, CE, UN38.3) and standards documentation per delivery." },
      { title: "Compliance preparation", desc: "Support with compiling documentation for permitting procedures, grid operator connection and PGS 37-1-related dossier preparation." },
    ],
    whyLabel: "Why source via Gridstate",
    whyTitle: "Not a reseller. A supply partner.",
    whySub: "Gridstate removes supply chain complexity from professional BESS projects. Direct factory relationships, strict quality control and complete documentation — standard with every delivery.",
    whyItems: [
      { title: "Direct factory relationships", desc: "Gridstate purchases directly from selected manufacturers in Europe and Asia. No distribution margins, no intermediaries. Direct communication channels for production, quality and delivery planning." },
      { title: "FAT with every delivery", desc: "Every system is inspected before shipment. You receive validated test results and a complete FAT report. Quality assurance that goes beyond a delivery note." },
      { title: "Supply chain as a service", desc: "From production coordination and FAT to transport and local delivery — Gridstate handles the process as a single point of contact. You stay focused on your engineering and installation." },
      { title: "Complete documentation as standard", desc: "Datasheet sets, certifications, FAT reports, installation manuals and compliance documentation are included with every delivery. No additional requests needed." },
      { title: "Scalable for any volume", desc: "From one container unit to a multi-phase delivery programme for large utility-scale projects. Gridstate scales with your project portfolio without quality compromises." },
      { title: "International delivery", desc: "Gridstate delivers in the Benelux and coordinates international supply programmes for projects outside the Netherlands. Transport, customs and local logistics are centrally coordinated." },
    ],
    faqLabel: "Frequently asked questions",
    faqTitle: "Supply Only — what you need to know",
    faqs: [
      { q: "What does the Supply Only model exactly include?", a: "Supply Only means Gridstate supplies hardware and components only — including FAT inspection, complete documentation and logistics coordination. Engineering, installation and commissioning fall outside this model and are carried out by your own team. For parties that want technical support, the Supply & Technical model is available." },
      { q: "Which systems and components does Gridstate supply?", a: "Gridstate supplies BESS container units (LFP), PCS/inverters, EMS platforms, MV stations, transformers, balance-of-plant components and loose spare parts. All deliveries include FAT documentation and a complete technical documentation set." },
      { q: "Does Gridstate also carry out a FAT inspection for Supply Only?", a: "Yes. FAT inspection is a standard part of every Supply Only process. Gridstate conducts the factory acceptance test at the manufacturer, prepares a FAT report and confirms release before shipment. You receive the complete test dossier with delivery." },
      { q: "What is included in the documentation package?", a: "Standard with every delivery: technical specifications and datasheet sets, FAT report and test protocols, type certifications (IEC, CE, UN38.3), installation manuals, BMS/EMS configuration documentation and reference single-line diagram. Additional compliance documentation is available on request." },
      { q: "What is the average delivery time?", a: "Average lead time is 10–18 weeks after order confirmation, depending on system configuration and factory capacity. Gridstate starts procurement early to ensure delivery certainty and keeps you informed of production status via a single point of contact." },
      { q: "Does Gridstate also deliver outside the Netherlands?", a: "Yes. Gridstate coordinates international supply processes including transport, customs clearance and local delivery in Europe. Contact us for the options at your specific project location." },
      { q: "Can Gridstate deliver in phases for multi-phase projects?", a: "Yes. For larger projects or rolled-out portfolios, Gridstate coordinates phased delivery programmes. Production and delivery planning is aligned with your project phasing. Single point of contact for the complete supply process." },
      { q: "What if I need technical support later?", a: "Gridstate also offers the Supply & Technical model, where engineering support, FAT guidance, commissioning support and technical documentation are included as standard. If you are unsure which model suits your team and project, we are happy to discuss the options." },
    ],
    interimCta: { sub: "Ready for your project?", title: "Request an RFQ", body: "Share your project specifications and receive a tailored quote — direct from the manufacturer, without intermediary layers.", btn: "Request RFQ" },
    finalSub: "Start your supply process",
    finalTitle: ["Professional supply", "for serious projects"],
    finalBody: "Gridstate supplies BESS systems and components to professional parties. Direct from the manufacturer, with FAT guarantee and complete documentation.",
    finalCta1: "Request an RFQ",
    finalCta2: siteConfig.company.email,
  },
};

export default function SupplyOnlyPage() {
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
            <a href="#aanbod" className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold rounded hover:bg-white/10 active:scale-[0.98] transition-opacity duration-200">
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

      {/* ─── POSITIONERING ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-5">{c.posLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.posTitle[0]}<br />{c.posTitle[1]}
              </h2>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{c.posP1}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-10">{c.posP2}</p>
              <div className="flex flex-col gap-3">
                {c.posItems.map((item, i) => (
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

      {/* ─── WAT WIJ LEVEREN ──────────────────────────────────── */}
      <section id="aanbod" className="py-24 lg:py-32 bg-[#f9f6f4]">
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
                    {card.specs.map((s, j) => (
                      <span key={j} className="px-2.5 py-1 bg-[#470020]/8 border border-[#470020]/15 text-[#470020] text-xs font-medium rounded-full">{s}</span>
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

      {/* ─── FAT & KWALITEITSCONTROLE ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-5">{c.fatLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.fatTitle[0]}<br />{c.fatTitle[1]}
              </h2>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{c.fatP1}</p>
              <p className="text-[#6b4a56] leading-relaxed">{c.fatP2}</p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                {c.fatItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-[#f9f6f4] rounded-xl border border-[#e8e0dc]">
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

      {/* ─── SUPPLY CHAIN & LOGISTIEK ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#1a0810]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-5">{c.logLabel}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.logTitle[0]}<br />{c.logTitle[1]}
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">{c.logP1}</p>
              <p className="text-white/60 leading-relaxed mb-10">{c.logP2}</p>
              <div className="grid grid-cols-2 gap-4">
                {c.logItems.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-5">
                    <p className="text-white font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>{item.stat}</p>
                    <p className="text-white/40 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-8">
                  {lang === "nl" ? "Coördinatie inbegrepen" : "Coordination included"}
                </p>
                <div className="flex flex-col gap-4">
                  {c.logFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 bg-white/10 rounded flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTATIE & COMPLIANCE ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.docLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.docTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.docSub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.docItems.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-xl p-8 border border-[#e8e0dc] h-full flex flex-col">
                  <h3 className="font-black text-[#1a0810] text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p className="text-[#6b4a56] text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAAROM VIA GRIDSTATE ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.whyLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.whyTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.whySub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.whyItems.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="p-8 border border-[#e8e0dc] bg-[#f9f6f4] rounded-xl">
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
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
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
              <a href={`mailto:${siteConfig.company.email}`} className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white font-semibold rounded hover:bg-white/10 active:scale-[0.98] transition-opacity duration-200">
                {c.finalCta2}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
