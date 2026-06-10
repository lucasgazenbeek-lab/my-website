"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "./faq-data";
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

function BoltIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 2L4 9h5l-2 5 7-8H9l2-4z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function FactoryIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="10" width="14" height="5" rx="0.5" stroke="#470020" strokeWidth="1.5"/><path d="M1 10V7l4 2V7l4 2V7l4 2V10" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10V8M8 10V8M11 10V8" stroke="#470020" strokeWidth="1.2"/></svg>;
}
function InvestorIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#470020" strokeWidth="1.5"/><path d="M8 5v1.5M8 9.5V11M6.5 7a1.5 1.5 0 013 0c0 1-1.5 1.5-1.5 2.5" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function LeafIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 3C13 3 13 9 8 11c-3 1.2-5.5.5-5.5.5S3 7 6 5c2-1.3 7-2 7-2z" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12l3-3" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CarIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 10h12M3 10l1.5-4h7L13 10" stroke="#470020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="5" cy="11.5" r="1" stroke="#470020" strokeWidth="1.2"/><circle cx="11" cy="11.5" r="1" stroke="#470020" strokeWidth="1.2"/><path d="M1 10v2h1M15 10v2h-1" stroke="#470020" strokeWidth="1.2" strokeLinecap="round"/><path d="M6 6.5h4" stroke="#470020" strokeWidth="1.2"/></svg>;
}
function GridIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="#470020" strokeWidth="1.5" strokeLinecap="round"/><rect x="2" y="2" width="12" height="12" rx="1" stroke="#470020" strokeWidth="1.5"/></svg>;
}

const whyIcons = [
  // Eigen engineering — gear/cog
  <svg key="gear" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 13a3 3 0 100-6 3 3 0 000 6z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2M16 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // Directe fabrieksrelaties — handshake/link
  <svg key="link" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 12l-1.5 1.5a3 3 0 01-4.24-4.24l3-3a3 3 0 014.5.36" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8l1.5-1.5a3 3 0 014.24 4.24l-3 3a3 3 0 01-4.5-.36" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 11.5l3-3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // Financieel meedenken — chart
  <svg key="chart" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 15l4-5 3 3 4-6 3 3" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17h14" stroke="#470020" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // Eén aanspreekpunt — target/bullseye
  <svg key="target" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#470020" strokeWidth="1.6"/><circle cx="10" cy="10" r="4" stroke="#470020" strokeWidth="1.6"/><circle cx="10" cy="10" r="1.5" fill="#470020"/></svg>,
  // Benelux specialist — map pin
  <svg key="pin" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="8" r="2" stroke="#470020" strokeWidth="1.6"/></svg>,
  // Veiligheid als fundament — shield
  <svg key="shield" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l7 3v5c0 4-3.5 7-7 8-3.5-1-7-4-7-8V5l7-3z" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#470020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

const content = {
  nl: {
    back: "Partnermodellen",
    tag: "Full EPC",
    heroTitle: ["Turnkey BESS.", "Van schets tot", "stroom op het net."],
    heroSub: "Gridstate neemt de volledige EPC-verantwoordelijkheid voor uw batterijopslagproject. Engineering, procurement, realisatie en inbedrijfstelling — onder één contract, met één aanspreekpunt.",
    heroCta1: "Plan een kennismaking",
    heroCta2: "Bekijk onze aanpak",
    trustStats: [
      { stat: siteConfig.stats.mwhRealized.display, label: "Opslagcapaciteit gerealiseerd" },
      { stat: siteConfig.stats.inHouseEngineering.display, label: "Eigen engineering — geen uitbesteding" },
      { stat: siteConfig.stats.activeProjects.display, label: "Actieve & geplande projecten" },
      { stat: "1 contract", label: "Volledige EPC-verantwoordelijkheid" },
    ],
    whatLabel: "Wat is Full EPC",
    whatTitle: ["Eén partij.", "Volledige verantwoordelijkheid."],
    whatP1: "Een Full EPC-contract betekent dat Gridstate end-to-end eigenaar is van uw project. Wij ontwerpen, inkopen, bouwen en stellen in bedrijf — en dragen pas bij oplevering over. U draagt geen technisch projectrisico.",
    whatP2: "Geen coördinatie tussen losse partijen. Geen technische miscommunicatie. Geen verborgen risico's bij interfaces. Gridstate is de enige partij die verantwoording aflegt over het volledige resultaat.",
    whatItems: [
      "Technische haalbaarheid en businesscase opstelling",
      "Volledige engineering inclusief MV-station en EMS",
      "Inkoop via directe fabrieksrelaties met FAT-inspectie",
      "Civiele werken en elektrotechnische installatie",
      "Commissioning, SAT en netcodevalidatie",
      "Koppeling met aggregator en energiemarkt",
      "Optionele O&M en remote monitoring na oplevering",
    ],
    idealLabel: "Ideaal voor",
    idealItems: [
      { label: "Zonneparkeigenaren met congestie of curtailment", Icon: BoltIcon },
      { label: "Industrie & logistiek met hoge pieklasten", Icon: FactoryIcon },
      { label: "Investeerders en projectontwikkelaars", Icon: InvestorIcon },
      { label: "Agrarische bedrijven met WKK en zonnepanelen", Icon: LeafIcon },
      { label: "Laadpleinen met hoog gelijktijdig verbruik", Icon: CarIcon },
      { label: "Bedrijven met netcongestieproblemen", Icon: GridIcon },
    ],
    approachLabel: "Onze aanpak",
    approachTitle: ["Van eerste gesprek", "tot operationeel systeem"],
    approachSub: "Ons bewezen EPC-proces garandeert technische kwaliteit, projectbeheersing en financieel resultaat in elke fase.",
    steps: [
      { num: "01", title: "Haalbaarheidsstudie & businesscase", desc: "Wij starten met een grondige analyse van uw locatie, netaansluiting, energieprofiel en inzetmogelijkheden. Op basis hiervan leveren wij een gedetailleerde businesscase inclusief IRR, terugverdientijd en revenue-stack analyse over FCR, aFRR, mFRR, onbalanshandel en peak shaving.", tags: ["Netanalyse", "Business case", "Revenue modelling", "Haalbaarheid"] },
      { num: "02", title: "Engineering & systeemontwerp", desc: "Onze engineers ontwerpen het complete BESS-systeem: van celchemie-selectie (LFP) en containerarchitectuur tot MV-station, transformator, bekabeling en beschermingsrelais. Alles conform NEN 1010, NEN-EN-IEC 62933, IEC 62619 en PGS 37-1.", tags: ["LFP selectie", "MV engineering", "Single-line design", "PGS 37-1"] },
      { num: "03", title: "Procurement & fabriekscoördinatie", desc: "Via onze directe fabrieksrelaties in Europa en Azië coördineren wij inkoop van batterijmodules, PCS/inverters, EMS-controllers en balance-of-plant componenten. Wij voeren factory acceptance tests (FAT) uit en bewaken kwaliteit en leveringsbetrouwbaarheid.", tags: ["Directe fabrikant", "FAT inspectie", "Logistiek", "Kwaliteitsborging"] },
      { num: "04", title: "Civiele werken & installatie", desc: "Van fundering en containerplaatsing tot bekabelingstrajecten en MV-schakelinstallaties — wij coördineren alle civieltechnische en elektrotechnische werkzaamheden conform de geldende veiligheids- en kwaliteitsnormen.", tags: ["Containerplaatsing", "MV installatie", "Bekabeling", "QHSE"] },
      { num: "05", title: "Commissioning & inbedrijfstelling", desc: "Onze commissioning-engineers voeren een volledig site acceptance test (SAT) protocol uit: van celbalancering en BMS-verificatie tot EMS-koppeling, aggregatorkoppeling en grid compliance testing conform netcodeverplichtingen.", tags: ["SAT protocol", "BMS verificatie", "EMS koppeling", "Grid compliance"] },
      { num: "06", title: "Exploitatie, monitoring & optimalisatie", desc: "Na oplevering blijft Gridstate betrokken via remote monitoring, performance reporting en dispatch-optimalisatie. Wij koppelen uw systeem aan de meest geschikte aggregator en optimaliseren de revenue-stack continu op basis van marktdata.", tags: ["Remote monitoring", "Aggregatorkoppeling", "Revenue optimalisatie", "SLA"] },
    ],
    interimCta: { sub: "Klaar om te starten?", title: "Vraag een gratis haalbaarheidsanalyse aan", body: "Binnen 5 werkdagen ontvangt u een eerste indicatie van technische haalbaarheid en financieel potentieel voor uw project.", btn: "Gratis haalbaarheidsanalyse" },
    techLabel: "Technische expertise",
    techTitle: "Engineering die het verschil maakt",
    techSub: "Onze engineers beheersen het volledige technische spectrum van een BESS-project — van celchemie tot MV-integratie.",
    techCards: [
      { title: "LFP batterijsystemen", desc: "Wij werken standaard met LFP (lithium ijzerfosfaat) technologie: veilig, thermisch stabiel, >8.000 laadcycli en een bewezen levensduur van 15–20 jaar. Liquid cooling of air cooling afhankelijk van projectvereisten.", items: ["LFP celchemie", "Liquid cooling", ">8.000 cycli", "BMS-validatie"] },
      { title: "MV-station & transformator", desc: "Volledige MV-engineering inclusief schakelinstallatie, transformator, meetinrichting en beschermingsrelais. Afstemming met de netbeheerder en RfG-compliance is standaard onderdeel van ons proces.", items: ["MV schakelinstallatie", "Transformatorontwerp", "RfG compliance", "Beschermingsrelais"] },
      { title: "EMS & systeemintegratie", desc: "Ons EMS koppelt uw BESS aan PV-inverters, WKK, laadpunten en slimme meters. Realtime optimalisatie op basis van spotprijzen, imbalans, prognoses en netbeheercommando's.", items: ["Realtime dispatch", "PV/WKK-integratie", "API-koppelingen", "SCADA/BMS"] },
      { title: "Veiligheid & brandbeveiliging", desc: "Elk project is ontworpen conform PGS 37-1, de meest actuele brandveiligheidsrichtlijn voor stationaire opslag. Inclusief rookdetectie, thermische runaway mitigatie, blusinstallatie en afstemming met de veiligheidsregio.", items: ["PGS 37-1", "Branddetectie", "Thermische bescherming", "Veiligheidsregio"] },
      { title: "Normen & certificeringen", desc: "Al onze projecten worden gebouwd conform de relevante internationale en nationale normen. Wij kennen de eisen van netbeheerders, veiligheidsregio's en verzekeraars en anticiperen hier proactief op.", items: ["NEN 1010", "IEC 62933", "IEC 62619", "NC RfG"] },
      { title: "Remote monitoring & SLA", desc: "Gridstate biedt optionele O&M-contracten met 24/7 remote monitoring, performance dashboards, maandelijkse rapportage en garantiebeheer. SLA's op beschikbaarheid en responstijd zijn maatwerk.", items: ["24/7 monitoring", "Performance dashboard", "SLA beschikbaarheid", "Garantiebeheer"] },
    ],
    emsLabel: "EMS & Energiemarkten",
    emsTitle: ["Maximaal rendement", "uit elke kWh"],
    emsP1: "Een batterijsysteem is pas winstgevend als het slim gestuurd wordt. Gridstate helpt u de juiste EMS-strategie te kiezen en de marktintegratie te realiseren die past bij uw project.",
    emsP2: "Afhankelijk van uw aansluitingscapaciteit, locatie en marktpositie kan uw BESS participeren in meerdere marktsegmenten tegelijk — van primaire reservediensten tot intraday-optimalisatie.",
    emsMarkets: [
      { label: "FCR", desc: "Frequency Containment Reserve" },
      { label: "aFRR", desc: "Automatic Frequency Restoration" },
      { label: "mFRR", desc: "Manual Frequency Restoration" },
      { label: "Onbalanshandel", desc: "Intraday & day-ahead" },
      { label: "Peak shaving", desc: "Nettariefoptimalisatie" },
      { label: "GOPACS", desc: "Congestiemanagement" },
    ],
    revenueLabel: "Revenue stack voorbeeld",
    revenueSub: "Indicatieve opbrengstverdeling — 10 MWh utility-scale systeem, jaar 1",
    revenueDisclaimer: "Indicatief. Werkelijke opbrengsten afhankelijk van marktcondities, locatie en configuratie.",
    projectsLabel: "Projecttypes",
    projectsTitle: "Voor elk project de juiste aanpak",
    projectsSub: "Gridstate heeft ervaring met uiteenlopende projecttypen — van co-located zonnepark-BESS tot industriële peak shaving.",
    projects: [
      { title: "Zonnepark + BESS", desc: "Co-located batterijopslag gecombineerd met zonneparken. Wij verzorgen de hybride integratie inclusief shared transformer, gezamenlijk EMS en gecombineerde netaansluiting.", specs: ["1 MW – 50 MW+", "AC en DC coupling", "Shared MV station"] },
      { title: "Utility-scale standalone", desc: "Grootschalige batterijparken voor netdiensten, FCR/aFRR/mFRR-participatie en energiehandel. Schaalbaar van enkele MW tot 100+ MW.", specs: ["FCR / aFRR / mFRR", "Onbalanshandel", "Netcongestie"] },
      { title: "C&I peak shaving", desc: "Batterijsystemen voor groot- en middelgrootverbruikers. Reduceer netkosten via peak shaving, load shifting en congestiemanagement.", specs: ["100 kW – 5 MW", "Peak shaving", "Load shifting"] },
      { title: "Laadplein-integratie", desc: "BESS als energiebuffer voor laadpleinen met hoog gelijktijdig verbruik. Voorkom netverzwaring, verlaag congestierisico en verlaag energiekosten.", specs: ["Smart charging", "Dynamisch beheer", "Grid buffering"] },
      { title: "Agrarisch & glastuinbouw", desc: "Voor agrarische bedrijven met WKK, zonnepanelen en hoge piekvermogens. Combineer opslag met uw bestaande energieinfrastructuur.", specs: ["WKK-integratie", "Zelflevering", "SDE++ optimalisatie"] },
      { title: "Industrieel & logistiek", desc: "Maatwerk BESS voor industrieterreinen met netcongestie, hoge pieklasten of beperkte transportcapaciteit. Inclusief GOPACS-participatie.", specs: ["Netcongestie", "GOPACS", "Pieklastreductie"] },
    ],
    whyLabel: "Waarom Gridstate",
    whyTitle: "Geen standaard installateur",
    whySub: "Gridstate is opgericht door engineers en commercieel specialisten die weten hoe kwaliteit, eigenaarschap en technische diepgang verschil maken in de praktijk.",
    whyItems: [
      { title: "Eigen engineering — altijd", desc: "Wij besteden onze engineering nooit uit. Elk ontwerp, elke berekening, elke netaansluitingsprocedure wordt intern gedaan. Dat garandeert kwaliteit, snelheid en volledige technische controle." },
      { title: "Directe fabrieksrelaties", desc: "Geen distributiemarges, geen tussenpersonen. Wij kopen direct in bij fabrikanten van batterijmodules, PCS en EMS-systemen. Dat vertaalt zich in betere prijzen, snellere levering en directe escalatiemogelijkheden." },
      { title: "Financieel meedenken", desc: "Wij helpen u een realistische businesscase opstellen inclusief subsidie-optimalisatie (SDE++), financieringsstructurering en revenue-stack modellering. Wij zijn niet alleen bouwer — wij zijn strategisch partner." },
      { title: "Eén aanspreekpunt, volledige controle", desc: "Geen coördinatiegedoe tussen engineering, leverancier en installateur. U heeft één partij die verantwoording aflegt over het volledige resultaat — van eerste tekening tot opgeleverd systeem." },
      { title: "Benelux specialist", desc: "Diepgaande kennis van Nederlandse netcodes, vergunningsprocedures, netbeheerderseisen en subsidieregimes. Wij kennen het speelveld en navigeren er snel en effectief doorheen." },
      { title: "Veiligheid als fundament", desc: "PGS 37-1, NEN 1010, IEC 62933 — geen afvinklijst maar de basis van elk ontwerp. Wij ontwerpen proactief op verzekerbaarheid, brandveiligheid en langetermijnbetrouwbaarheid." },
    ],
    faqLabel: "Veelgestelde vragen",
    faqTitle: "Alles wat u wil weten",
    faqs: faqs.nl,
    finalSub: "Start vandaag",
    finalTitle: ["Uw batterijproject begint", "met één gesprek"],
    finalBody: "Gridstate analyseert uw situatie, brengt de mogelijkheden in kaart en levert u een eerlijk beeld van haalbaarheid en rendement — zonder verplichtingen.",
    finalCta1: "Plan een kennismaking",
    finalCta2: siteConfig.company.email,
  },
  en: {
    back: "Partner models",
    tag: "Full EPC",
    heroTitle: ["Turnkey BESS.", "From design to", "power on the grid."],
    heroSub: "Gridstate takes full EPC responsibility for your battery storage project. Engineering, procurement, construction and commissioning — under one contract, with one point of contact.",
    heroCta1: "Schedule a meeting",
    heroCta2: "See our approach",
    trustStats: [
      { stat: siteConfig.stats.mwhRealized.display, label: "Storage capacity realised" },
      { stat: siteConfig.stats.inHouseEngineering.display, label: "In-house engineering — no outsourcing" },
      { stat: siteConfig.stats.activeProjects.display, label: "Active & planned projects" },
      { stat: "1 contract", label: "Full EPC responsibility" },
    ],
    whatLabel: "What is Full EPC",
    whatTitle: ["One party.", "Full responsibility."],
    whatP1: "A Full EPC contract means Gridstate owns your project end-to-end. We design, procure, build and commission — and hand over only at delivery. You carry no technical project risk.",
    whatP2: "No coordination between separate parties. No technical miscommunication. No hidden interface risks. Gridstate is the single party accountable for the complete result.",
    whatItems: [
      "Technical feasibility and business case development",
      "Full engineering including MV station and EMS",
      "Procurement via direct factory relationships with FAT inspection",
      "Civil works and electrotechnical installation",
      "Commissioning, SAT and grid code validation",
      "Connection to aggregator and energy market",
      "Optional O&M and remote monitoring after delivery",
    ],
    idealLabel: "Ideal for",
    idealItems: [
      { label: "Solar park owners with congestion or curtailment", Icon: BoltIcon },
      { label: "Industry & logistics with high peak loads", Icon: FactoryIcon },
      { label: "Investors and project developers", Icon: InvestorIcon },
      { label: "Agricultural companies with CHP and solar panels", Icon: LeafIcon },
      { label: "Charging hubs with high simultaneous demand", Icon: CarIcon },
      { label: "Companies facing grid congestion issues", Icon: GridIcon },
    ],
    approachLabel: "Our approach",
    approachTitle: ["From first conversation", "to operational system"],
    approachSub: "Our proven EPC process guarantees technical quality, project control and financial results at every stage.",
    steps: [
      { num: "01", title: "Feasibility study & business case", desc: "We start with a thorough analysis of your site, grid connection, energy profile and deployment options. We deliver a detailed business case including IRR, payback period and revenue stack analysis across FCR, aFRR, mFRR, imbalance trading and peak shaving.", tags: ["Grid analysis", "Business case", "Revenue modelling", "Feasibility"] },
      { num: "02", title: "Engineering & system design", desc: "Our engineers design the complete BESS system: from cell chemistry selection (LFP) and container architecture to MV station, transformer, cabling and protection relays. All in accordance with NEN 1010, NEN-EN-IEC 62933, IEC 62619 and PGS 37-1.", tags: ["LFP selection", "MV engineering", "Single-line design", "PGS 37-1"] },
      { num: "03", title: "Procurement & factory coordination", desc: "Through our direct factory relationships in Europe and Asia, we coordinate procurement of battery modules, PCS/inverters, EMS controllers and balance-of-plant components. We conduct factory acceptance tests (FAT) and monitor quality and delivery reliability.", tags: ["Direct factory", "FAT inspection", "Logistics", "Quality assurance"] },
      { num: "04", title: "Civil works & installation", desc: "From foundations and container placement to cabling routes and MV switchgear installations — we coordinate all civil and electrotechnical works in accordance with applicable safety and quality standards.", tags: ["Container placement", "MV installation", "Cabling", "QHSE"] },
      { num: "05", title: "Commissioning & start-up", desc: "Our commissioning engineers execute a complete site acceptance test (SAT) protocol: from cell balancing and BMS verification to EMS connection, aggregator coupling and grid compliance testing in accordance with grid code requirements.", tags: ["SAT protocol", "BMS verification", "EMS connection", "Grid compliance"] },
      { num: "06", title: "Operations, monitoring & optimisation", desc: "After delivery, Gridstate remains involved through remote monitoring, performance reporting and dispatch optimisation. We connect your system to the most suitable aggregator and continuously optimise the revenue stack based on market data.", tags: ["Remote monitoring", "Aggregator connection", "Revenue optimisation", "SLA"] },
    ],
    interimCta: { sub: "Ready to start?", title: "Request a free feasibility analysis", body: "Within 5 working days you will receive an initial assessment of technical feasibility and financial potential for your project.", btn: "Free feasibility analysis" },
    techLabel: "Technical expertise",
    techTitle: "Engineering that makes the difference",
    techSub: "Our engineers master the full technical spectrum of a BESS project — from cell chemistry to MV integration.",
    techCards: [
      { title: "LFP battery systems", desc: "We work with LFP (lithium iron phosphate) technology as standard: safe, thermally stable, >8,000 charge cycles and a proven service life of 15–20 years. Liquid cooling or air cooling depending on project requirements.", items: ["LFP cell chemistry", "Liquid cooling", ">8,000 cycles", "BMS validation"] },
      { title: "MV station & transformer", desc: "Full MV engineering including switchgear, transformer, metering and protection relays. Grid operator alignment and RfG compliance are standard parts of our process.", items: ["MV switchgear", "Transformer design", "RfG compliance", "Protection relays"] },
      { title: "EMS & system integration", desc: "Our EMS connects your BESS to PV inverters, CHP, charging points and smart meters. Real-time optimisation based on spot prices, imbalance, forecasts and grid operator commands.", items: ["Real-time dispatch", "PV/CHP integration", "API connections", "SCADA/BMS"] },
      { title: "Safety & fire protection", desc: "Every project is designed in accordance with PGS 37-1, the most current fire safety guideline for stationary storage. Including smoke detection, thermal runaway mitigation, suppression systems and coordination with the safety region.", items: ["PGS 37-1", "Fire detection", "Thermal protection", "Safety region"] },
      { title: "Standards & certifications", desc: "All our projects are built in accordance with relevant international and national standards. We know the requirements of grid operators, safety authorities and insurers — and address them proactively.", items: ["NEN 1010", "IEC 62933", "IEC 62619", "NC RfG"] },
      { title: "Remote monitoring & SLA", desc: "Gridstate offers optional O&M contracts with 24/7 remote monitoring, performance dashboards, monthly reporting and warranty management. SLAs on availability and response time are tailored to your needs.", items: ["24/7 monitoring", "Performance dashboard", "Availability SLA", "Warranty management"] },
    ],
    emsLabel: "EMS & Energy Markets",
    emsTitle: ["Maximum return", "from every kWh"],
    emsP1: "A battery system is only profitable when it is managed intelligently. Gridstate helps you choose the right EMS strategy and realise the market integration that suits your project.",
    emsP2: "Depending on your connection capacity, location and market position, your BESS can participate in multiple market segments simultaneously — from primary reserve services to intraday optimisation.",
    emsMarkets: [
      { label: "FCR", desc: "Frequency Containment Reserve" },
      { label: "aFRR", desc: "Automatic Frequency Restoration" },
      { label: "mFRR", desc: "Manual Frequency Restoration" },
      { label: "Imbalance trading", desc: "Intraday & day-ahead" },
      { label: "Peak shaving", desc: "Grid tariff optimisation" },
      { label: "GOPACS", desc: "Congestion management" },
    ],
    revenueLabel: "Revenue stack example",
    revenueSub: "Indicative revenue breakdown — 10 MWh utility-scale system, year 1",
    revenueDisclaimer: "Indicative. Actual revenues depend on market conditions, location and configuration.",
    projectsLabel: "Project types",
    projectsTitle: "The right approach for every project",
    projectsSub: "Gridstate has experience with a wide range of project types — from co-located solar-BESS to industrial peak shaving.",
    projects: [
      { title: "Solar park + BESS", desc: "Co-located battery storage combined with solar parks. We handle the hybrid integration including shared transformer, joint EMS and combined grid connection.", specs: ["1 MW – 50 MW+", "AC and DC coupling", "Shared MV station"] },
      { title: "Utility-scale standalone", desc: "Large-scale battery parks for grid services, FCR/aFRR/mFRR participation and energy trading. Scalable from several MW to 100+ MW.", specs: ["FCR / aFRR / mFRR", "Imbalance trading", "Grid congestion"] },
      { title: "C&I peak shaving", desc: "Battery systems for large and medium consumers. Reduce grid costs through peak shaving, load shifting and congestion management.", specs: ["100 kW – 5 MW", "Peak shaving", "Load shifting"] },
      { title: "Charging hub integration", desc: "BESS as an energy buffer for charging hubs with high simultaneous demand. Avoid grid reinforcement, reduce congestion risk and lower energy costs.", specs: ["Smart charging", "Dynamic management", "Grid buffering"] },
      { title: "Agricultural & horticulture", desc: "For agricultural companies with CHP, solar panels and high peak demands. Combine storage with your existing energy infrastructure.", specs: ["CHP integration", "Self-supply", "SDE++ optimisation"] },
      { title: "Industrial & logistics", desc: "Custom BESS for industrial sites with grid congestion, high peak loads or limited transport capacity. Including GOPACS participation.", specs: ["Grid congestion", "GOPACS", "Peak load reduction"] },
    ],
    whyLabel: "Why Gridstate",
    whyTitle: "Not a standard installer",
    whySub: "Gridstate was founded by engineers and commercial specialists who understand how quality, ownership and technical depth make a difference in practice.",
    whyItems: [
      { title: "In-house engineering — always", desc: "We never outsource our engineering. Every design, every calculation, every grid connection procedure is done in-house. This guarantees quality, speed and complete technical control." },
      { title: "Direct factory relationships", desc: "No distribution margins, no intermediaries. We purchase directly from manufacturers of battery modules, PCS and EMS systems. This translates to better prices, faster delivery and direct escalation channels." },
      { title: "Financial co-thinking", desc: "We help you build a realistic business case including subsidy optimisation (SDE++), financing structuring and revenue stack modelling. We are not just a builder — we are a strategic partner." },
      { title: "One point of contact, full control", desc: "No coordination hassle between engineering, supplier and installer. You have one party accountable for the complete result — from first drawing to delivered system." },
      { title: "Benelux specialist", desc: "In-depth knowledge of Dutch grid codes, permitting procedures, grid operator requirements and subsidy regimes. We know the landscape and navigate it quickly and effectively." },
      { title: "Safety as a foundation", desc: "PGS 37-1, NEN 1010, IEC 62933 — not a checklist but the foundation of every design. We design proactively for insurability, fire safety and long-term reliability." },
    ],
    faqLabel: "Frequently asked questions",
    faqTitle: "Everything you need to know",
    faqs: faqs.en,
    finalSub: "Start today",
    finalTitle: ["Your battery project begins", "with one conversation"],
    finalBody: "Gridstate analyses your situation, maps the opportunities and gives you an honest picture of feasibility and return — without obligations.",
    finalCta1: "Schedule a meeting",
    finalCta2: siteConfig.company.email,
  },
};

const revenueItems = [
  { label: { nl: "FCR participatie", en: "FCR participation" }, pct: 45 },
  { label: { nl: "Onbalanshandel", en: "Imbalance trading" }, pct: 30 },
  { label: { nl: "Peak shaving", en: "Peak shaving" }, pct: 15 },
  { label: { nl: "aFRR / mFRR", en: "aFRR / mFRR" }, pct: 10 },
];

export default function FullEpcPage() {
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

      {/* ─── WAT IS FULL EPC ──────────────────────────────────── */}
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

      {/* ─── PROCES IN STAPPEN ────────────────────────────────── */}
      <section id="aanpak" className="py-24 lg:py-32 bg-[#f9f6f4]">
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
                <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_260px] gap-6 lg:gap-10 items-start bg-white rounded-xl p-8 border border-[#e8e0dc]">
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

      {/* ─── TECHNISCHE DIEPGANG ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.techLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.techTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.techSub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.techCards.map((card, i) => (
              <ScrollReveal key={i}>
                <div className="h-full bg-[#f9f6f4] rounded-xl p-8 border border-[#e8e0dc] flex flex-col">
                  <h3 className="font-black text-[#1a0810] text-lg mb-3" style={{ letterSpacing: "-0.02em" }}>{card.title}</h3>
                  <p className="text-[#6b4a56] text-sm leading-relaxed mb-5 flex-1">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item, j) => (
                      <span key={j} className="px-2.5 py-1 bg-white border border-[#e8e0dc] text-[#6b4a56] text-xs rounded">{item}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
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

      {/* ─── PROJECTTYPES ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{c.projectsLabel}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>{c.projectsTitle}</h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-16">{c.projectsSub}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.projects.map((pt, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-xl p-8 border border-[#e8e0dc] h-full flex flex-col">
                  <h3 className="font-black text-[#1a0810] text-lg mb-3" style={{ letterSpacing: "-0.02em" }}>{pt.title}</h3>
                  <p className="text-[#6b4a56] text-sm leading-relaxed mb-5 flex-1">{pt.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pt.specs.map((s, j) => (
                      <span key={j} className="px-2.5 py-1 bg-[#470020]/8 border border-[#470020]/15 text-[#470020] text-xs font-medium rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAAROM GRIDSTATE ─────────────────────────────────── */}
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
                <div className="p-8 border border-[#e8e0dc] rounded-xl">
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
