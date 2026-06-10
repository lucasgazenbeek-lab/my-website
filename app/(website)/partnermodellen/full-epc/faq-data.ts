/**
 * Single source of truth for the Full EPC FAQ. Rendered visibly in
 * page-client.tsx and emitted as FAQPage JSON-LD in page.tsx, so the
 * two can never drift apart.
 */
export const faqs = {
  nl: [
    { q: "Wat houdt Full EPC precies in?", a: "Full EPC (Engineering, Procurement & Construction) betekent dat Gridstate de volledige verantwoordelijkheid neemt voor het ontwerp, de inkoop en de realisatie van uw batterijopslagproject — van eerste haalbaarheidsanalyse tot werkend systeem. U heeft één aanspreekpunt, één contract en geen coördinatielast." },
    { q: "Welke batterijchemie gebruiken jullie?", a: "Wij werken primair met LFP (lithium ijzerfosfaat) technologie vanwege de superieure veiligheid, lange levensduur (>8.000 cycli) en stabiele prestaties over de volledige levensduur. Voor specifieke projecten beoordelen wij altijd de meest geschikte oplossing." },
    { q: "Hoe gaat Gridstate om met PGS 37-1 vereisten?", a: "PGS 37-1 vormt de basis van ons brandveiligheidsontwerp. Rookdetectie, thermische runaway mitigatie, blussystemen, ventilatieontwerp en afstemming met de veiligheidsregio en brandweer zijn standaard onderdeel van ons engineeringproces." },
    { q: "Werken jullie met alle netbeheerders samen?", a: "Ja. Wij zijn bekend met de aansluitprocedures en technische eisen van Liander, Stedin, Enexis en de regionale netbeheerders. Wij coördineren de volledige netaansluitingsprocedure inclusief RfG-compliance en afstemming met de TSO." },
    { q: "Wat kost een BESS-project gemiddeld?", a: "De projectkosten zijn sterk afhankelijk van schaal, locatie, netaansluiting en configuratie. Voor een indicatieve businesscase plannen wij graag een kennismakingsgesprek. Wij zijn transparant over kosten en helpen u een realistische investeringsanalyse opstellen." },
    { q: "Bieden jullie ook onderhoudscontracten aan?", a: "Ja. Na oplevering bieden wij meerjarige O&M-contracten met SLA-garanties voor beschikbaarheid, remote monitoring en preventief onderhoud. Wij coördineren ook fabrieksgaranties en zorgen voor tijdige verlenging en technische updates." },
    { q: "Hoe werkt koppeling met een aggregator?", a: "Wij begeleiden u bij de selectie van een geschikte aggregator (o.a. voor FCR, aFRR, mFRR en onbalanshandel) en verzorgen de technische integratie van uw EMS met het aggregatorplatform. Na oplevering optimaliseren wij de dispatch-strategie op basis van marktdata." },
    { q: "Hoe lang duurt een gemiddeld EPC-traject?", a: "Afhankelijk van schaal en locatie duurt een gemiddeld project 6–14 maanden van definitieve opdracht tot oplevering. De netaansluitingsprocedure is doorgaans het kritische pad. Wij starten de netprocedure zo vroeg mogelijk parallel aan de engineering." },
  ],
  en: [
    { q: "What does Full EPC exactly mean?", a: "Full EPC (Engineering, Procurement & Construction) means Gridstate takes full responsibility for the design, procurement and realisation of your battery storage project — from initial feasibility analysis to working system. You have one point of contact, one contract and no coordination burden." },
    { q: "What battery chemistry do you use?", a: "We primarily work with LFP (lithium iron phosphate) technology due to its superior safety, long service life (>8,000 cycles) and stable performance over the full lifetime. For specific projects we always evaluate the most suitable solution." },
    { q: "How does Gridstate handle PGS 37-1 requirements?", a: "PGS 37-1 forms the basis of our fire safety design. Smoke detection, thermal runaway mitigation, suppression systems, ventilation design and coordination with the safety region and fire department are standard parts of our engineering process." },
    { q: "Do you work with all grid operators?", a: "Yes. We are familiar with the connection procedures and technical requirements of Liander, Stedin, Enexis and the regional grid operators. We coordinate the full grid connection procedure including RfG compliance and TSO alignment." },
    { q: "What does a BESS project typically cost?", a: "Project costs depend heavily on scale, location, grid connection and configuration. For an indicative business case we are happy to schedule an introductory meeting. We are transparent about costs and help you build a realistic investment analysis." },
    { q: "Do you offer maintenance contracts?", a: "Yes. After delivery we offer multi-year O&M contracts with SLA guarantees for availability, remote monitoring and preventive maintenance. We also coordinate manufacturer warranties and ensure timely renewals and technical updates." },
    { q: "How does aggregator connection work?", a: "We guide you in selecting a suitable aggregator (e.g. for FCR, aFRR, mFRR and imbalance trading) and handle the technical integration of your EMS with the aggregator platform. After delivery we continuously optimise the dispatch strategy based on market data." },
    { q: "How long does a typical EPC project take?", a: "Depending on scale and location, an average project takes 6–14 months from confirmed order to delivery. The grid connection procedure is typically the critical path. We initiate the grid procedure as early as possible in parallel with engineering." },
  ],
} as const;
