export type Lang = "nl" | "en";

export const translations = {
  nl: {
    nav: {
      home: "Home",
      services: "Wat wij doen",
      partners: "Partnermodellen",
      investors: "Voor investeerders",
      projects: "Projecten",
      about: "Over ons",
      contact: "Plan een afspraak",
    },
    home: {
      heroTitle: "Batterijopslag op schaal — van engineering tot oplevering",
      heroSub:
        "Turnkey EPC voor grootschalige batterijopslag in de Benelux — van eerste schets tot werkend systeem.",
      heroCta1: "Plan een afspraak",
      heroCta2: "Wat wij doen",
      scrollDown: "Scroll",
      statsTitle: "Cijfers die spreken",
      stat1Label: "Gerealiseerd door ons team vóór Gridstate",
      stat2Label: "In eigen ontwikkeling",
      stat3Label: "Directe fabrikantrelaties",
      stat4Label: "Projecten in portefeuille",
      audienceEyebrow: "Voor wie wij werken",
      audienceTitle: "Selecteer uw uitgangspunt",
      audienceIntro:
        "Een ontwikkelaar, een investeerder en een partij die oriënteert komen met verschillende vragen binnen. Kies waar u staat, dan weet u binnen één pagina of wij iets voor u kunnen betekenen.",
      audienceAllLink: "Alles wat wij doen",
      audiences: [
        {
          label: "Ontwikkelaars",
          title: "Voor ontwikkelaars",
          sub: "U heeft de locatie, het net en de vergunning. Wij leveren de bouwkolom — volledig turnkey, of alleen de levering, of alleen de technische kennis erboven.",
          linkLabel: "Drie samenwerkingsvormen",
          alt: "Ingenieur werkt aan de layout van een batterijproject in CAD op het kantoor van Gridstate",
        },
        {
          label: "Investeerders en IPP's",
          title: "Voor investeerders en IPP's",
          sub: "Participatie in projecten die wij zelf ontwikkelen, ondersteuning bij uw eigen acquisities, en het narekenen van een businesscase voordat u tekent.",
          linkLabel: "Wat wij voor u doen",
          alt: "Projecttekeningen en businesscasedocumenten van Gridstate op de vergadertafel",
        },
        {
          label: "Oriënterend",
          title: "Haalbaarheid onderzoeken",
          sub: "Grondeigenaar, gemeente, industrieel verbruiker of parkeigenaar. Wij zoeken uit of uw locatie aansluitbaar en vergunbaar is, en wat een batterij daar zou opleveren.",
          linkLabel: "Haalbaarheidsanalyse",
          alt: "Locatielayout van een batterijopslagproject op een luchtfoto op een werkstation van Gridstate",
        },
      ],
      partnersTitle: "Hoe wij samenwerken",
      partnersSub: "Kies het model dat past bij uw project en uw rol.",
      tickerTitle: "Partners & relaties",
      whyTitle: "Waarom Gridstate",
      chipRealizedLabel: "Door ons team vóór Gridstate",
      chipInDevLabel: "In eigen ontwikkeling",
      chipTurnkeyValue: "Turnkey EPC",
      chipTurnkeyLabel: "Van concept tot oplevering",
      chipRelationsLabel: "Fabrikantrelaties",
      ctaTitle: "Uw volgende energieproject begint hier.",
      ctaSub: "Gridstate neemt het volledige EPC-traject van u over. Van eerste schets tot werkend systeem.",
      ctaButton: "Plan een afspraak",
      seqSteps: [
        { fase: 1, label: "Locatie" },
        { fase: 7, label: "Civiel" },
        { fase: 8, label: "Containers" },
        { fase: 12, label: "In bedrijf" },
      ],
      seqCta: "Bekijk de volledige sequentie",
    },
    bouwseq: {
      pickerLabel: "Kies een variant",
      navLabel: "Fasen",
      faseLabel: "Fase",
      prev: "Vorige fase",
      next: "Volgende fase",
      loading: "Tekening wordt geladen…",
      disclaimer:
        "Referentieopbouw op basis van onze standaardconfiguraties, geen bestaand project. Doorlooptijden zijn indicatief en lopen per netvlak sterk uiteen.",
      readoutPower: "Vermogen",
      readoutStorage: "Opslag",
      readoutUnits: "Units geplaatst",
      readoutStatus: "Status",
    },
    services: {
      heroEyebrow: "Ons werk",
      heroTitle: "Wat wij doen",
      heroStandfirst:
        "Wij bouwen batterijopslag, wij ondersteunen partijen die zelf bouwen, en wij zoeken uit of een locatie het waard is om te ontwikkelen. Drie diensten die elkaar versterken: wat wij in de bouw tegenkomen maakt onze haalbaarheidsstudies scherper, en andersom.",
      blokAEyebrow: "01 · Full EPC",
      blokATitle: "Van vergunning tot netcodetest, onder één contract",
      blokAIntro:
        "Bij een turnkey opdracht zijn wij verantwoordelijk voor het geheel. Eén prijs, één planning en één partij die aanspreekbaar is als iets tussen twee disciplines in valt — en dat is precies waar de meeste vertraging ontstaat.",
      blokAPhotoAlt: "Locatielayout van een batterijopslagproject in CAD op het kantoor van Gridstate",
      blokAScopeTitle: "Wat erin zit",
      blokATableHeaders: ["Onderdeel", "Wat wij doen"],
      blokAScope: [
        { name: "Engineering", desc: "Layout, eendraadschema, kabelberekening, beveiligingsfilosofie, hulpvoedingsconcept en aardingsplan. Extern gestempeld door een onafhankelijke engineeringpartij." },
        { name: "Vergunning", desc: "Akoestisch onderzoek, brandveiligheidsplan, externe veiligheid, ruimtelijke onderbouwing en de afstemming met gemeente, provincie en veiligheidsregio." },
        { name: "Inkoop", desc: "Batterijcontainers, conversiestations, vermogenstransformator, middenspanningsinstallatie en hulpvoeding. Selectie op celchemie, garantievoorwaarden, propagatiebewijs en levertijd." },
        { name: "Civiel", desc: "Fundaties, terreinverharding, toegangsweg berekend op transformatortransport, hekwerk van minimaal 2,1 meter, kabelgoten en bluswatervoorziening." },
        { name: "Plaatsing", desc: "Hijsplan met een kraan vanaf 120 ton, ontvangst en inslag, uitlijning binnen een vlakheidstolerantie van 3 millimeter, en 3 meter vrije ruimte aan de zijkant en 4 meter aan de deurzijde." },
        { name: "Elektrotechniek", desc: "Gelijkstroomkoppeling per blok, middenspanningsring, aansluiting op het overdrachtspunt, aarding en bliksembeveiliging." },
        { name: "Inbedrijfstelling", desc: "SAT per unit, beveiligingsbeproeving over alle spanningsniveaus, netcodetest met de netbeheerder en de configuratie van de regellaag." },
        { name: "Overdracht", desc: "As-built dossier, bedieningsinstructies, opleiding en onderhoud via onze partners." },
      ],
      blokAWhyTitle: "Waarom turnkey",
      blokAWhy: [
        { title: "Eén partij aansprakelijk", desc: "Bij een ontvlochten opdracht wijst iedereen naar de ander zodra de kabelgoot niet past bij de fundatie. Bij turnkey is dat ons probleem." },
        { title: "Eén planning die klopt", desc: "De kritieke lijn ligt zelden bij de batterij. De vermogenstransformator heeft de langste levertijd en de netbeheerder bepaalt de rest. Wij plannen daarop en noemen geen opleverdatum die aan een aanname hangt." },
        { title: "Eén dossier", desc: "Alles wat een financier, verzekeraar of netbeheerder wil zien komt uit dezelfde hand en spreekt elkaar dus niet tegen." },
      ],
      blokACta: "Bekijk het partnermodel",
      blokBEyebrow: "02 · Technische ondersteuning",
      blokBTitle: "De kennislaag, zonder dat wij bouwen",
      blokBIntro:
        "Niet iedereen heeft een bouwer nodig. Soms heeft u de uitvoering al geregeld en mist u alleen de laag erboven: het ontwerp, de netcode-kant en het projectmanagement. Wij leveren die laag los, en dan leveren wij geen apparatuur.",
      blokBPhotoAlt: "Ingenieur werkt aan een eendraadschema in CAD op het kantoor van Gridstate",
      blokBLevelsTitle: "Drie niveaus",
      blokBLevels: [
        { title: "Engineering", desc: "Layout en ruimtebeslag, eendraadschema, kabel- en verliesberekening, kortsluitberekening en selectiviteit, hulpvoedingsbalans, aarding en bliksembeveiliging, en de toets aan PGS 37-1, IEC 62933-5-2, IEC 62619 en NEN 1010. Wij tekenen volgens NLCS." },
        { title: "Projectmanagement", desc: "Planning en kritieke lijn, inkoopbegeleiding, kwaliteitsborging op de leveranciersdocumentatie, bewaking van de scope-split, en de coördinatie met netbeheerder, gemeente en veiligheidsregio. Wij leiden vergaderingen en houden het documentregister bij." },
        { title: "Volledige scope-uitwerking", desc: "Voor een uitvoerende partij die alleen wil bouwen. Denk aan een civiele aannemer die de schop in de grond wil zetten maar niet de engineering, de netcode-onderbouwing en het vergunningstraject erboven wil dragen. Wij leveren het volledige technische dossier, de scope-split tot op werkpakketniveau, en blijven aanspreekbaar tijdens de uitvoering." },
      ],
      blokBCalloutTitle: "Wat dit oplevert",
      blokBCallout:
        "Wij lezen datasheet tegen handleiding tegen garantiebepaling. Die spreken elkaar vaker tegen dan u zou verwachten, en elk verschil dat u vóór ondertekening vindt is contractuele hefboom in plaats van meerwerk achteraf.",
      blokBCta: "Bekijk het partnermodel",
      blokCEyebrow: "03 · Haalbaarheid",
      blokCTitle: "Kan het, en is het wat waard",
      blokCIntro:
        "Voordat er geld naar apparatuur gaat moet duidelijk zijn of de locatie aansluitbaar en vergunbaar is, en wat een batterij daar realistisch opbrengt. Dat onderzoek doen wij los, ook als u daarna met een ander verder gaat.",
      blokCPhotoAlt: "Handen wijzen een locatietekening aan op de vergadertafel bij Gridstate",
      blokCItemsTitle: "Wat wij uitzoeken",
      blokCItems: [
        { title: "Netpositie", desc: "Welk station, welk netvlak, welke contractvorm. Wij controleren dat bij de netbeheerder zelf en niet op de landelijke congestiekaart, want die is te grof om een project op te bouwen. Bij congestie kijken wij naar een capaciteitssturingscontract, de congestieverzachter, kabelpooling of non-firm afname — vaak is er een route die op de kaart niet zichtbaar is." },
        { title: "Vergunningsroute", desc: "De korte route kost drie tot vijf maanden, een buitenplanse omgevingsplanactiviteit negen tot veertien. Wat uw route wordt hangt af van het omgevingsplan, de provinciale verordening en of de gemeenteraad adviesrecht heeft. Geluid is bij een co-located project meestal de bindende eis, niet de veiligheidsafstand." },
        { title: "Businesscase", desc: "Wij bouwen het model op uit de componenten, niet uit de totalen van een opbrengstrapport. Elke aanname krijgt een bron, elke uitkomst wordt onafhankelijk nagerekend, en wij tonen wat er overblijft in het slechtste scenario naast wat er in het beste gebeurt." },
        { title: "Het informatiememorandum", desc: "Het stuk waarmee u naar uw bank of investeerder gaat: techniek, markt, kasstroom over vijftien jaar, scenario's, gevoeligheden, risicoregister en een hoofdstuk met wat er níet in staat. Wij maken dat in onze eigen huisstijl en het is af wanneer elk getal terug te voeren is op het model." },
        { title: "Matchmaking", desc: "Ligt er een financierbare case maar mist u de partij, dan brengen wij u in contact met investeerders en financiers uit ons netwerk. Wij stellen niemand voor aan wie wij de case niet zelf zouden durven presenteren." },
      ],
      blokCCta: "Laat uw locatie toetsen",
      ctaTitle: "Waar loopt u vast",
      ctaSub: "Netaansluiting, vergunning, businesscase of uitvoering — begin waar het knelt.",
      ctaPlan: "Plan een afspraak",
      ctaCall: "Bel direct",
    },
    investors: {
      heroEyebrow: "Voor investeerders en IPP's",
      heroTitle: "Meedoen, of laten narekenen",
      heroStandfirst:
        "Wij ontwikkelen zelf en wij kijken mee bij anderen. Dat betekent dat u met ons kunt meedoen in een project, of ons juist kunt inzetten om te toetsen wat iemand anders u voorlegt.",
      entriesEyebrow: "Drie ingangen",
      entriesTitle: "Meedoen, meekijken of laten narekenen",
      entries: [
        {
          title: "Participatie in onze projecten",
          desc: "Wij hebben ruim 200 MWh in eigen ontwikkeling. Voor een deel daarvan zoeken wij partijen die mee willen investeren, met of zonder operationele betrokkenheid. U krijgt vooraf inzage in het volledige model, het vergunningsdossier en de netpositie — niet pas in de due diligence.",
        },
        {
          title: "Ondersteuning bij uw eigen acquisities",
          desc: "Koopt u een project, een park of een portefeuille, dan toetsen wij wat er werkelijk staat: netpositie, vergunningsstatus, ontwerpkeuzes, restlevensduur en de verplichtingen die meekomen. En als er een batterij bij kan, rekenen wij uit wat dat doet met de dekkingsgraad van het geheel.",
        },
        {
          title: "Validatie van een businesscase",
          desc: "Wij rekenen het model na tot op de component. Bij een opbrengstrapport van een optimizer controleren wij of de totaalregel klopt met de som van de onderdelen, en dat is niet altijd zo. Bij een bandbreedte op regelvermogen nemen wij de ondergrens als basis en niet het midden — het midden is geen neutrale keuze maar een aanname van meeropbrengst.",
        },
      ],
      normEyebrow: "Onze rekennorm",
      normTitle: "Zo rekenen wij",
      norms: [
        {
          title: "Nul formulefouten",
          desc: "Elk model wordt doorgerekend en de uitkomsten worden onafhankelijk in een tweede omgeving nagerekend. Geen foutwaarden, totalen sluitend.",
        },
        {
          title: "Elke aanname met een bron",
          desc: "Aannames en bronnen staan als eigen hoofdstuk in het rapport, niet in een voetnoot.",
        },
        {
          title: "IRR én dekkingsgraad",
          desc: "Die twee kunnen tegengestelde verhalen vertellen bij hetzelfde model. Een korte horizon zonder restwaarde geeft een lage IRR terwijl de dekkingsgraad er prima uitziet. Wij tonen ze allebei en leggen het verschil uit.",
        },
        {
          title: "De ruimte tot break-even",
          desc: "Het bruikbaarste getal is niet de IRR maar hoeveel de opbrengst mag tegenvallen voordat de convenant breekt. Dat staat bij ons in de samenvatting.",
        },
      ],
      honestTitle: "Waar wij eerlijk over zijn",
      honestBody:
        "Wij nemen geen projecties van een verkoper over zonder ze zelf na te rekenen, ook niet als dat de deal vertraagt. Wij geven geen kansinschatting in procenten, want die suggereert precisie die er niet is. En als de case niet werkt, zeggen wij dat — ook wanneer wij daarmee onszelf uit een opdracht praten.",
      statsTitle: "Cijfers",
      stat1Label: "In eigen ontwikkeling",
      stat2Label: "Projecten in portefeuille",
      stat3Label: "Doorgerekende businesscases",
      stat4Label: "Engineeringdossiers",
      ctaTitle: "Laten we uw case naast de onze leggen",
    },
    partnermodels: {
      heroTitle: "Drie manieren om met ons te werken",
      heroSub:
        "Van volledig uitbesteden tot alleen de technische kennis inkopen. Welk model past hangt af van wat u zelf in huis heeft en hoeveel risico u wilt dragen.",
      whatWeDoLabel: "Wat wij doen",
      whatYouDoLabel: "Wat u doet",
      whenFitsLabel: "Wanneer dit past",
      fullListLabel: "De volledige lijst staat op de dienstenpagina",
      detailCtaTitle: "Interesse in dit model?",
      detailCtaSub: "Laten we kennismaken en kijken hoe we kunnen samenwerken.",
      models: [
        {
          slug: "full-epc",
          tag: "Partnermodel 01",
          title: "Full EPC",
          standfirst:
            "Wij nemen het hele project over, van vergunningsdossier tot netcodetest. U heeft één contract, één prijs en één partij die verantwoordelijk is voor het resultaat.",
          cardFeatures: ["Eén contract en één prijs", "Van vergunningsdossier tot netcodetest", "Eén partij verantwoordelijk voor het resultaat"],
          ideal: "Ontwikkelaars zonder eigen technische organisatie",
          weDo: [
            { lead: "", text: "Engineering, vergunning, inkoop, civiel, plaatsing, elektrotechniek, inbedrijfstelling en overdracht." },
          ],
          weDoLink: true,
          youDo: "De locatie en de grondpositie aanleveren, de aansluiting op uw naam houden, en beslissen. Verder niets.",
          whenFits: [
            "U heeft geen eigen technische organisatie en wilt die ook niet opbouwen.",
            "U wilt één aansprakelijke partij in plaats van een keten van leveranciers.",
            "Uw financier vraagt om een sluitend dossier uit één hand.",
          ],
          extraTitle: "Wat u van ons krijgt",
          extra: "Een vaste prijs, een planning met benoemde kritieke lijn, en gedurende het hele traject één projectleider die u kent.",
          photoAlt: "Locatielayout van een batterijopslagproject in CAD op het kantoor van Gridstate",
        },
        {
          slug: "technical-support",
          tag: "Partnermodel 02",
          title: "Technical Support",
          standfirst:
            "Alleen de kennis, zonder levering. Wij leveren geen apparatuur en hebben dus geen belang bij welke keuze u maakt.",
          cardFeatures: ["Engineering en projectmanagement", "Scope-uitwerking tot op werkpakketniveau", "Owner's engineering — wij verkopen niets"],
          ideal: "Aannemers en opdrachtgevers die onafhankelijke kennis zoeken",
          weDo: [
            { lead: "Engineering", text: "Layout, eendraadschema, kabel- en kortsluitberekening, selectiviteit, hulpvoedingsbalans, en de toets aan PGS 37-1, IEC 62933-5-2, IEC 62619 en NEN 1010." },
            { lead: "Projectmanagement", text: "Planning en kritieke lijn, inkoopbegeleiding, kwaliteitsborging, scope-bewaking en de coördinatie met netbeheerder, gemeente en veiligheidsregio." },
            { lead: "Volledige scope-uitwerking", text: "Voor een uitvoerende partij die alleen wil bouwen. Wij leveren het technische dossier en de scope-split tot op werkpakketniveau, en blijven aanspreekbaar tijdens de uitvoering." },
            { lead: "Owner's engineering", text: "Wij zitten aan uw kant van de tafel bij een aanbesteding of bij de beoordeling van het werk van een derde." },
          ],
          weDoLink: false,
          youDo: "De inkoop en de uitvoering, bij wie u wilt.",
          whenFits: [
            "U bent een civiele of elektrotechnische aannemer die de uitvoering aankan maar niet de laag erboven.",
            "U heeft al een leverancier gekozen en wilt een onafhankelijke partij die meekijkt.",
            "U wilt advies van iemand die niets verkoopt.",
          ],
          extraTitle: "Waarom dat laatste telt",
          extra: "Omdat wij bij dit model niets leveren, is ons advies over celchemie, fabrikant of configuratie niet gekleurd door wat wij op voorraad hebben.",
          photoAlt: "",
        },
        {
          slug: "supply-only",
          tag: "Partnermodel 03",
          title: "Supply Only",
          standfirst:
            "Alleen de levering. U heeft de kennis en de uitvoering in huis en wilt scherp en betrouwbaar inkopen.",
          cardFeatures: ["Leveranciersneutrale selectie en inkoop", "Fabriekstest, transport en inslag", "Volledige documentatie, certificaten en garanties"],
          ideal: "Bouwers met een eigen technische organisatie",
          weDo: [
            { lead: "", text: "Selectie en inkoop van de apparatuur, fabriekstest per unit, transport en inslag op de locatie, en de volledige documentatie inclusief certificaten en garantiebepalingen." },
          ],
          weDoLink: false,
          youDo: "Alles daaromheen — ontwerp, vergunning, civiel, montage en inbedrijfstelling.",
          whenFits: [
            "U bouwt vaker en heeft een eigen technische organisatie.",
            "U wilt niet vastzitten aan één fabrikant en zoekt een partij die leveranciersneutraal selecteert.",
            "U wilt zekerheid over wat er precies geleverd wordt, inclusief het propagatiebewijs en de garantievoorwaarden.",
          ],
          extraTitle: "Let op, en dat zeggen wij er vooraf bij",
          extra: "Bij dit model ligt de verantwoordelijkheid voor het systeemontwerp bij u. Wij leveren wat besteld is en toetsen niet of het geheel klopt. Twijfelt u daarover, dan kiest u Full EPC of neemt u onze Technical Support ernaast.",
          photoAlt: "",
        },
      ],
      processTitle: "Van eerste contact tot partnership",
      steps: [
        { title: "Kennismakingsgesprek", desc: "Kennismaking, projecttype, eerste indicatie" },
        { title: "Portfolioanalyse", desc: "Projecten, schaal, technische behoeften, rolverdeling" },
        { title: "Projectstructurering", desc: "Systeemarchitectuur, configuratie, projectstructuur" },
        { title: "Prijsafstemming", desc: "Prijsstructuur, leveringsstructuur, samenwerkingsovereenkomst" },
        { title: "Samenwerkingsovereenkomst", desc: "Rollen, projectregistratie, start samenwerking" },
      ],
      stepDetails: [
        "Bij het kennismakingsgesprek leren we elkaar kennen en kijken we of we iets voor elkaar kunnen betekenen. We bespreken het projecttype, welke dienst of advies er nodig is, en wat uw verwachtingen zijn. Geen verplichtingen — gewoon een open en eerlijk gesprek over de mogelijkheden.",
        "We brengen uw bestaande projecten, schaal en technische behoeften in kaart. Samen bepalen we de juiste rolverdeling en kijken we welk samenwerkingsmodel het beste aansluit bij uw organisatie, capaciteit en het specifieke projecttype.",
        "Op basis van uw projectvereisten werken we de systeemarchitectuur, BESS-configuratie en projectstructuur volledig uit. Technische keuzes worden onderbouwd, risico's in kaart gebracht en alle partijen zijn op één lijn voordat we verder gaan.",
        "We stellen een transparante prijsstructuur en leveringsplanning op die naadloos aansluit bij de EPC-fasering. De samenwerkingsovereenkomst wordt opgesteld — helder over rollen, verantwoordelijkheden, marges en verwachtingen van beide kanten.",
        "Rollen en verantwoordelijkheden zijn officieel vastgelegd. Uw project wordt geregistreerd in ons projectsysteem, non-circumvention is geborgd en de samenwerking start formeel. Samen bouwen we aan uw eerste opdracht.",
      ],
      onboardingLabel: "Onboarding",
      collaborationLabel: "Samenwerkingsvormen",
      foundationLabel: "Fundament",
      principlesTitle: "Onze samenwerkingsprincipes",
      principles: [
        { title: "Project Registratiesysteem", desc: "Transparante projecttoewijzing, bescherming leadgeneratie" },
        { title: "Non-Circumvention", desc: "Geen directe benadering van geregistreerde klanten" },
        { title: "Engineering IP Bescherming", desc: "Bescherming technische ontwerpen, vertrouwelijke projectinfo" },
        { title: "Gestructureerd Samenwerkingsmodel", desc: "Heldere rollen, transparante besluitvorming" },
      ],
      ctaButton: "Plan een afspraak",
      viewModel: "Bekijk model",
      idealFor: "Ideaal voor",
    },
    technicalSupport: {
      tag: "Partnermodel 02",
      heroTitle: "Technical Support",
      heroStandfirst:
        "U voert uit. Wij nemen de laag daarboven over: het ontwerp, de stukken die uw opdrachtgever moet goedkeuren, en de afstemming met de andere partijen op het terrein. Wij leveren geen apparatuur, dus wij hebben geen belang bij welke keuze u maakt.",
      ruleLabel: "De vuistregel",
      ruleBody:
        "Moet uw opdrachtgever het stuk goedkeuren, dan maken wij het. Gaat het over hoe het werk op de bouwplaats georganiseerd en uitgevoerd wordt, dan is het van u.",
      ruleNote:
        "Die grens is in de praktijk vrijwel altijd meteen duidelijk. Dat scheelt overleg, en het maakt aan het begin van een project al zichtbaar waar het risico ligt.",

      problemEyebrow: "Waar dit over gaat",
      problemTitle: "De uitvraag is groter dan het werk",
      problemParagraphs: [
        "Een aannemer die batterijopslag kan bouwen, kan dat meestal echt. De funderingen, de kabelwerken, de montage, de inbedrijfstelling: dat is werk waar een goede uitvoerende partij in thuis is.",
        "Wat daar tegenwoordig omheen zit, is iets anders. Een project-gefinancierde opdrachtgever moet aan zijn financiers kunnen laten zien dat elk onderdeel ontworpen, gecontroleerd, goedgekeurd en gedocumenteerd is. Dat vertaalt zich in een contract in de vorm van een FIDIC Yellow Book Design & Build, een scope demarcation matrix met tientallen regels waarvan een flink deel afstemming met een andere contractor betreft, een deviation schedule met een maximumaantal afwijkingen, een master document register, maandrapportages in voorgeschreven vorm, hold- en witness points, en een goedkeuringsronde per onderaannemer met een reactietermijn van weken.",
        "Dat is geen uitvoering. Het is een parallel spoor dat naast de uitvoering loopt en er niet ondergeschikt aan is. Wie dat spoor niet kan bemensen, schrijft niet in — of schrijft in en loopt er tijdens de bouw tegenaan. Wij bemensen dat spoor.",
      ],
      problemStats: [
        { value: "6", label: "stukken die een opdrachtgever doorgaans bij het bod vraagt" },
        { value: "3", label: "contractors die tegelijk op hetzelfde terrein werken" },
        { value: "80+", label: "documenten in een master document register voor de bouwfase" },
      ],
      problemStatsNote:
        "Indicatief voor een utility-scale BESS-uitvraag onder een project-gefinancierd contract.",

      scopeEyebrow: "Rolverdeling",
      scopeTitle: "Wie doet wat",
      scopeIntro:
        "Hieronder staat de rolverdeling zoals wij die standaard voorstellen bij een uitvraag voor de balance of plant van een batterijopslagsysteem. Filter op wat u zelf al doet, dan ziet u wat er voor ons overblijft — en andersom. De verdeling is een startpunt, geen sjabloon: bij elk project schuiven er regels op, en dat gesprek voeren wij liever aan het begin dan halverwege.",
      scopeFilterLabel: "Filter op rol",
      scopeFilterAll: "Alles",
      scopeReset: "Toon alles",
      scopeBlockLabel: "Blok",
      scopeCountLabel: "werkpakketten",
      scopeRoles: {
        u: "U",
        gridstate: "Gridstate",
        samen: "Samen",
        onderaannemer: "Onderaannemer",
      },
      scopeCounter: {
        u: "{count} van de {total} werkpakketten liggen bij u",
        gridstate: "{count} van de {total} werkpakketten liggen bij ons",
        samen: "{count} van de {total} werkpakketten doen wij samen",
        onderaannemer: "{count} van de {total} werkpakketten gaan naar een onderaannemer",
      },
      scopeBlocks: {
        bid: "Bied- en contractfase",
        engineering: "Engineering en design",
        civiel: "Civiele uitvoering",
        elektro: "Elektrotechnische uitvoering",
        lossen: "Lossen, plaatsen en transport",
        itot: "IT, OT en beveiliging",
        bouwplaats: "Bouwplaats, veiligheid en projectleiding",
        begeleiding: "Uitvoeringsbegeleiding en hoofdaannemersondersteuning",
      },
      scopeItems: {
        "b0-vragenlijst": {
          label: "Vragenlijst aan de opdrachtgever",
          note: "Wij stellen de technische en contractuele vragen op; u dient ze in als contractspartij.",
        },
        "b0-clarification": {
          label: "Deelname clarification meetings",
          note: "Wij bereiden voor en verwerken, u zit er als hoofdaannemer bij.",
        },
        "b0-deviation": {
          label: "Deviation schedule",
          note: "Wij onderbouwen per afwijking de technische reden en het alternatieve voorstel. U kiest welke worden ingediend.",
        },
        "b0-proposal": {
          label: "Technical proposal en interfacebenadering",
          note: "Het technische voorstel en de manier waarop de raakvlakken met de andere contractors worden beheerst.",
        },
        "b0-programma": {
          label: "Projectconstructieprogramma",
          note: "Mijlpalen, hoofdfasen, kritiek pad met float, en versnellingsmaatregelen met hun effect. U toetst op uitvoerbaarheid.",
        },
        "b0-organogram": {
          label: "Organogram bouwfase",
          note: "Rollen en verantwoordelijkheden, inclusief de verdeling van QA/QC, documentbeheer en contractmanagement.",
        },
        "b0-mdr": {
          label: "Master document register",
          note: "De volledige lijst van documenten die tijdens de bouw geleverd moet worden, met nummering en fasering.",
        },
        "b0-engineering": {
          label: "Engineeringstukken bij het bod",
          note: "Eendraadschema, terreinlayout en kabelberekeningen, in de mate van detail die bij een bod hoort.",
        },
        "b0-cyber": {
          label: "Cybersecurity response form",
          note: "Ingevuld conform de cybersecurity-eisen van de opdrachtgever.",
        },
        "b0-prijsstaat": {
          label: "Prijsstaat: structuur en verificatie",
          note: "Wij bouwen de staat op volgens de kostenblokken van de opdrachtgever en controleren op volledigheid tegen de scope matrix. U prijst de uitvoering.",
        },
        "b0-eenheidsprijzen": {
          label: "Eenheidsprijzen en calculatie uitvoering",
          note: "Uw kostprijzen, uw marge.",
        },
        "b0-financieel": {
          label: "Financiële stukken en zekerheden",
          note: "Jaarrekeningen, bankgarantiecapaciteit, concerngaranties.",
        },
        "b1-layout": {
          label: "Systeem- en terreinlayout",
          note: "Positionering van units en transformatorstations, kabeltraces, kruisingen, onderhoudspaden.",
        },
        "b1-eendraad": {
          label: "Eendraadschema",
          note: "Tot en met het koppelpunt met de middenspanningsinstallatie.",
        },
        "b1-kabel": {
          label: "MV- en LV-kabelontwerp",
          note: "Kerndoorsneden en belastbaarheid conform DIN EN 60287, kortsluitberekening en klemkrachtberekening.",
        },
        "b1-hulpvoeding": {
          label: "Hulpvoedingsconcept en -ontwerp",
          note: "Redundante opzet, middenspanningsaansluiting, laagspanningsverdeling en koppeling, met de technische uitvraag van de transformatoren.",
        },
        "b1-aarding": {
          label: "Aardingsnetontwerp",
          note: "Wij schrijven de technische uitvraag en reviewen het resultaat.",
        },
        "b1-bliksem": {
          label: "Bliksembeschermingsrisicoanalyse",
          note: "Uitvraag en review conform DIN EN IEC 62305, voor het complete terrein.",
        },
        "b1-grondonderzoek": {
          label: "Grondonderzoek en thermische weerstandsmetingen",
          note: "Uitvraag aan het laboratorium, begeleiding van de monstername conform ASTM D5334 en VDI 4640-1, en verwerking in het kabelontwerp.",
        },
        "b1-verlichting": {
          label: "Terreinverlichting",
          note: "Elektrotechnisch ontwerp conform DIN EN 12464-2.",
        },
        "b1-scada": {
          label: "SCADA- en toegangscontrole-interface",
          note: "Specificatie van poortsignalering en sleutelplan richting de hekwerkleverancier en de IT-partij.",
        },
        "b1-fundering": {
          label: "Funderingsontwerp",
          note: "Tenzij u dat liever uitbesteedt; dan schrijven wij de uitvraag.",
        },
        "b1-civiel": {
          label: "Civiel ontwerp",
          note: "Wegen, drainage, bluswatersysteem, sleufprofielen, terreininrichting.",
        },
        "b2-grondwerk": {
          label: "Grondwerk, funderingen en verhardingen",
          note: "Uw werk, uw materieel, uw mensen.",
        },
        "b2-sleuven": {
          label: "Kabelsleuven en mantelbuizen",
          note: "Volgens de sleufprofielen uit het civiele ontwerp.",
        },
        "b2-bluswater": {
          label: "Bluswatervoorziening",
          note: "Wij specificeren, u contracteert.",
        },
        "b2-hekwerk": {
          label: "Hekwerk, poorten en toegangscontrole",
          note: "Wij specificeren inclusief de interface met de brandweersluiting, u contracteert.",
        },
        "b3-kabelleg": {
          label: "Kabelleg- en montagewerk",
          note: "Uitvoering met uw eigen ploegen, volgens het goedgekeurde kabelontwerp.",
        },
        "b3-aansluiten": {
          label: "Aansluiten en aarden",
          note: "Het aansluitwerk op het terrein, inclusief de aardverbindingen.",
        },
        "b3-beproeving": {
          label: "Kabelbeproeving VLF en partiële ontlading",
          note: "Tenzij u dat zelf in huis heeft.",
        },
        "b3-iv": {
          label: "Installatieverantwoordelijke",
          note: "Conform DIN VDE 0105-100 of NEN 3140, afhankelijk van het land.",
        },
        "b4-hijsplan": {
          label: "Hijsplan en hijswerk",
          note: "Wij specificeren de eisen, de contractering ligt bij u.",
        },
        "b4-transport": {
          label: "Transport en aanvoerplanning",
          note: "Levertijden van containers lopen in de orde van maanden en bepalen het kritieke pad.",
        },
        "b5-netwerk": {
          label: "Datanetwerk en glasvezel op terrein",
          note: "Aanleg en aansluiting op het terrein, volgens onze interfacespecificatie.",
        },
        "b5-camera": {
          label: "Camerabewaking en detectie",
          note: "Scope-afbakening met de opdrachtgever is hier vrijwel altijd nodig.",
        },
        "b5-scada-interface": {
          label: "Interfacespecificatie richting SCADA",
          note: "Welke signalen worden uitgewisseld, in welk formaat en via welk protocol.",
        },
        "b6-projectleiding": {
          label: "Projectleiding en coördinatie op locatie",
          note: "De uitvoeringsleiding blijft van u. Wij nemen die niet over.",
        },
        "b6-voorzieningen": {
          label: "Bouwplaatsvoorzieningen",
          note: "Keten, hekken, opslag, nutsvoorzieningen en terreinbeheer tijdens de bouw.",
        },
        "b6-veiligheid": {
          label: "Veiligheidscoördinatie op de bouwplaats",
          note: "De wettelijke coördinatorrol tijdens de uitvoering.",
        },
        "b6-landmeten": {
          label: "Landmeten en as-built inmeting",
          note: "Wij specificeren het formaat, zodat het direct bruikbaar is in het as-built dossier.",
        },
        "b7-pmp": {
          label: "Projectmanagementplan",
          note: "Systeem- en werkstructuur, processen, hold- en witness points. Ter goedkeuring vóór aanvang van het werk.",
        },
        "b7-veiligheidsdossier": {
          label: "Veiligheidsdossier",
          note: "V&G-plan, noodplan en elektrisch veiligheidsplan, in de voertaal van het contract, inclusief schakelplanprocedure en werkvergunningensysteem.",
        },
        "b7-documentbeheer": {
          label: "Documentbeheer en master document register",
          note: "Het lopende beheer van alle documenten richting de opdrachtgever, inclusief revisies en goedkeuringsstatus.",
        },
        "b7-rapportage": {
          label: "Maandelijkse voortgangsrapportage",
          note: "Mijlpalen, scopewijzigingen, kritiek pad, financiële status, de belangrijkste risico's en veiligheid.",
        },
        "b7-interface": {
          label: "Interfacemanagement tijdens uitvoering",
          note: "Bewaking en oplossing van raakvlakken tussen de leverancier, de andere contractors, de netbeheerder en de onderaannemers, vastgelegd in een interfaceregister.",
        },
        "b7-uitvragen": {
          label: "Technische uitvragen onderaannemers",
          note: "Per pakket een werkdocument met scope, normen, hoeveelheden, interfaces en acceptatiecriteria, direct bruikbaar als contractbijlage.",
        },
        "b7-contracteren": {
          label: "Contracteren en aansturen onderaannemers",
          note: "Alle contracten liggen bij u, ook die wij technisch uitvragen.",
        },
        "b7-wijzigingen": {
          label: "Beoordeling ontwerpwijzigingen",
          note: "Technische beoordeling tijdens de bouw en de onderbouwing richting de opdrachtgever.",
        },
        "b7-tests": {
          label: "Ondersteuning tests en energisatie",
          note: "Testplannen, bijwoning van SAT en netcodetests, en verwerking van de rapportage.",
        },
        "b7-asbuilt": {
          label: "As-built dossier en overdracht",
          note: "Compleet dossier in pdf en dwg, en de overdracht aan de opdrachtgever.",
        },
      },

      rulesEyebrow: "Hoe wij dit afspreken",
      rulesTitle: "Vijf spelregels die de rest bepalen",
      rulesIntro:
        "Een rolverdeling op papier houdt geen stand als niet vastligt wie welk risico draagt. Dit zijn de vijf afspraken die wij aan het begin maken. Ze staan in de overeenkomst, niet in een presentatie.",
      rules: [
        {
          title: "Wie specificeert is niet wie contracteert",
          body: "Wij schrijven de technische uitvraag en doen de technische beoordeling. U voert de commerciële onderhandeling en tekent. Alle onderaannemerscontracten liggen bij u, ook die wij selecteren, zodat er één contractuele keten is die back-to-back doorloopt naar uw opdrachtgever. Houd er rekening mee dat veel contracten voorafgaande schriftelijke goedkeuring van elke onderaannemer eisen, met een reactietermijn van weken. Die ronde hoort in de planning.",
        },
        {
          title: "De grens ligt bij de goedkeuring van uw opdrachtgever",
          body: "Moet uw opdrachtgever het stuk goedkeuren, dan maken wij het: tekeningen, berekeningen, rapporten, plannen en het documentregister. Gaat het over hoe het werk op de bouwplaats georganiseerd wordt, dan is het van u. Dat is de scheidslijn voor de werkvoorbereiding, en die is bruikbaar zonder er telkens over te hoeven overleggen.",
        },
        {
          title: "Wie specificeert, draagt het specificatierisico",
          body: "Klopt ons werkdocument niet, dan is dat van ons. Wat de uitvoerende partij er vervolgens van maakt, is van hen. Die knip staat expliciet in de overeenkomst. Zonder die zin wordt het bij het eerste conflict een welles-nietes, en dat is precies het moment waarop u er geen tijd voor heeft.",
        },
        {
          title: "Elke onderaannemer krijgt een werkdocument, geen mondelinge scope",
          body: "Per pakket één document: scope of work, van toepassing zijnde normen, hoeveelheden en tekeningen, interfaces met de andere partijen, deliverables en acceptatiecriteria, planning en raakvlakmomenten, en de veiligheids- en documentvereisten die uit het hoofdcontract doorlopen. Dat document is meteen de bijlage bij het contract dat u sluit.",
        },
        {
          title: "Alles wat het hoofdcontract oplegt, loopt back-to-back door",
          body: "De employer's requirements, de veiligheidseisen, het cybersecurityregime en de documentverplichtingen gelden ook voor de onderaannemers. Dat is geen formaliteit: het raakt de veiligheidsplanverplichting, het werkvergunningensysteem, de certificering van personeel en bepalingen rond eigendomsvoorbehoud die opdrachtgevers expliciet naar onderaannemers doorgezet willen zien.",
        },
      ],

      phasesEyebrow: "Van uitvraag tot overdracht",
      phasesTitle: "Drie fasen",
      phasesFooter:
        "Alles wat het contract en de employer's requirements van de hoofdaannemer vragen aan plannen, registers, rapportages en goedkeuringsrondes, bereiden wij voor en houden wij bij. U tekent en voert uit.",
      phases: [
        {
          tab: "Fase 1 · Biedfase",
          title: "Biedfase",
          intro:
            "Van de uitvraag tot contractondertekening. Het doel is een inzending die compleet, consistent en beoordeelbaar is, en een contract dat u kunt dragen. Deze fase doen wij desgewenst op basis van no cure no pay: wordt het werk niet aan u gegund, dan factureren wij niets.",
          items: [
            { title: "Vragen aan de opdrachtgever", desc: "Het opstellen van de technische en contractuele vragen, en het doorvoeren van de antwoorden in alle biedstukken." },
            { title: "Onderbouwing van de afwijkingen", desc: "Per afwijking de technische reden en een voorstel voor alternatieve tekst. U kiest welke worden ingediend." },
            { title: "Hoeveelhedenstaat elektrotechnisch", desc: "Meters kabel per doorsnede, eindsluitingen, klemmen en aardingskabel, als basis voor uw calculatie en de kabelinkoop." },
            { title: "Structuur en verificatie van de prijsstaat", desc: "Opbouw volgens de kostenblokken van de opdrachtgever, en controle op volledigheid tegen de scope matrix." },
            { title: "Projectconstructieprogramma", desc: "Mijlpalen, hoofdfasen, kritiek pad met float en buffers, en versnellingsmaatregelen met hun effect." },
            { title: "Technical proposal en interfacebenadering", desc: "Het technische voorstel en hoe de raakvlakken met de andere contractors beheerst worden." },
            { title: "Organogram en opzet documentregister", desc: "Rollen en verantwoordelijkheden in de bouwfase, en de lijst van documenten die tijdens de bouw geleverd wordt." },
            { title: "Cybersecurityformulier", desc: "Ingevuld conform de eisen van de opdrachtgever." },
            { title: "Terrein- en systeemlayout", desc: "Units, transformatorstations, kabeltraces en kruisingen, doorgewerkt op de situatietekening van de opdrachtgever." },
            { title: "Hulpvoedingsconcept", desc: "Opzet van de redundante hulpvoeding, met alternatieven." },
            { title: "Indicatief eendraadschema", desc: "Tot en met het koppelpunt met de middenspanningsinstallatie." },
            { title: "Kabelontwerp en -berekeningen", desc: "Kerndoorsneden en belastbaarheid, als basis voor de inkoop van de grootste materiaalpost in het contract." },
            { title: "Samenstellen van de inzending", desc: "De complete set in de structuur die de uitvraag voorschrijft en in uw huisstijl." },
            { title: "Clarification meetings en eindonderhandeling", desc: "Voorbereiding, deelname en verwerking tot en met ondertekening." },
          ],
        },
        {
          tab: "Fase 2 · Detailengineering",
          title: "Detailengineering",
          intro:
            "Start bij gunning en loopt tot en met de goedkeuring van de ontwerpstukken en de design freeze. Bij een project-gefinancierde opdrachtgever heeft de financier de goedgekeurde ontwerpstukken nodig, dus dit spoor ligt op het kritieke pad naar financial close. Loopt het uit, dan loopt het geld uit.",
          items: [
            { title: "Definitieve systeem- en terreinlayout", desc: "Inclusief kabeltraces, afgestemd op uw civiele ontwerp en de positionering van de leverancier." },
            { title: "Definitief MV- en LV-kabelontwerp", desc: "Kabelbelasting conform DIN EN 60287, kortsluitberekening en klemkrachtberekening, ter goedkeuring bij de opdrachtgever." },
            { title: "Thermische weerstandsmetingen", desc: "Uitvraag, begeleiding van de monstername conform ASTM D5334 en VDI 4640-1, en verwerking in het kabelontwerp." },
            { title: "Hulpvoeding", desc: "Definitief ontwerp van de hulpvoedingsstations met middenspanningsaansluiting, laagspanningsverdeling en koppeling." },
            { title: "Aardingsnetontwerp", desc: "Technische uitvraag aan de ontwerpende partij en review van het resultaat." },
            { title: "Bliksembeschermingsrisicoanalyse", desc: "Uitvraag en review conform DIN EN IEC 62305, voor het complete terrein." },
            { title: "Terreinverlichting", desc: "Elektrotechnisch ontwerp conform DIN EN 12464-2." },
            { title: "SCADA- en toegangscontrole-interface", desc: "Specificatie van poortsignalering en sleutelplan." },
            { title: "Technische uitvragen onderaannemers", desc: "Per pakket een werkdocument, plus de technische beoordeling van de aanbiedingen." },
            { title: "Interface-engineering", desc: "Afstemming met de leverancier, de andere contractors en de netbeheerder op alle raakvlakken uit de scope matrix, vastgelegd in een interfaceregister." },
            { title: "Ontwerpreviews", desc: "Begeleiding van de goedkeuringsrondes en verwerking van het commentaar van de opdrachtgever en zijn adviseurs." },
            { title: "Projectmanagement engineeringfase", desc: "Planning, bewaking en voortgang van het ontwerpspoor." },
          ],
        },
        {
          tab: "Fase 3 · Uitvoeringsbegeleiding",
          title: "Uitvoeringsbegeleiding",
          intro:
            "Start bij de voorbereiding van de uitvoering en loopt tot en met de acceptatie van het as-built dossier. U voert uit en leidt het werk op locatie. Wij houden het documentaire en contractuele spoor richting uw opdrachtgever bij en bewaken de raakvlakken met de andere partijen op het terrein.",
          items: [
            { title: "Projectmanagementplan", desc: "Systeem- en werkstructuur, processen, hold- en witness points. Ter goedkeuring vóór aanvang van het werk." },
            { title: "Veiligheidsdossier", desc: "V&G-plan, noodplan en elektrisch veiligheidsplan in de voertaal van het contract, inclusief schakelplanprocedure en werkvergunningensysteem." },
            { title: "Documentbeheer", desc: "Het lopende beheer van alle documenten richting de opdrachtgever, inclusief revisies en goedkeuringsstatus." },
            { title: "Maandelijkse voortgangsrapportage", desc: "Mijlpalen, scopewijzigingen, kritiek pad, financiële status, de belangrijkste risico's en veiligheid." },
            { title: "Interfacemanagement", desc: "Bewaking en oplossing van raakvlakken tussen de leverancier, de andere contractors, de netbeheerder en de onderaannemers." },
            { title: "Beoordeling ontwerpwijzigingen", desc: "Technische beoordeling van wijzigingen tijdens de bouw en de onderbouwing richting de opdrachtgever." },
            { title: "Ondersteuning tests en energisatie", desc: "Testplannen, bijwoning van SAT en netcodetests, en verwerking van de rapportage." },
            { title: "As-built dossier en overdracht", desc: "Compleet dossier in pdf en dwg, en de overdracht aan de opdrachtgever." },
          ],
        },
      ],

      formsEyebrow: "Omvang",
      formsTitle: "Drie vormen, afhankelijk van wat u al heeft",
      formsFitLabel: "Past bij",
      forms: [
        {
          id: "volledig",
          title: "Volledige scope-uitwerking",
          body: "Wij nemen het complete spoor boven de uitvoering over, van de biedfase tot en met het as-built dossier. U bouwt en leidt het werk op locatie; wij leveren het ontwerp, de stukken en het interfacebeheer richting uw opdrachtgever.",
          features: [
            "Alle drie de fasen, één vaste prijs",
            "Wij zijn uw onderaannemer, u blijft contractspartij",
            "Biedfase desgewenst op no cure no pay",
          ],
          fit: "een aannemer die op een uitvraag wil inschrijven die groter is dan zijn eigen voorbereidingsorganisatie.",
        },
        {
          id: "owner",
          title: "Owner's engineering",
          body: "Wij zitten aan uw kant van de tafel. Bij een aanbesteding, bij de beoordeling van het ontwerp van een derde, of bij de technische acceptatie van werk dat al is uitgevoerd.",
          features: [
            "Toetsing van ontwerp, berekeningen en documentatie",
            "Beoordeling van aanbiedingen op technische gelijkwaardigheid",
            "Aanwezigheid bij tests, inspecties en oplevering",
          ],
          fit: "een opdrachtgever of investeerder die wil weten of hij krijgt waarvoor hij tekent.",
        },
        {
          id: "los",
          title: "Losse engineering-inzet",
          body: "Eén onderdeel, afgebakend. Een kabelberekening, een layout, een hulpvoedingsbalans, een normtoets, of een second opinion op een ontwerp dat vastloopt.",
          features: [
            "Afgebakende opdracht met een vaste doorlooptijd",
            "Geen verplichting tot vervolg",
            "Direct bruikbaar als bijlage bij uw eigen stukken",
          ],
          fit: "een partij die één specifiek gat heeft en dat wil dichten zonder een samenwerking op te tuigen.",
        },
      ],

      notEyebrow: "Afbakening",
      notTitle: "Wat wij in dit model niet doen",
      notIntro:
        "Een scope die alleen zegt wat er wél in zit, is geen scope. Dit staat er expliciet buiten, en dat is bewust.",
      notItems: [
        {
          title: "Wij leveren geen apparatuur.",
          body: "In dit model verkopen wij niets. Ons advies over celchemie, fabrikant of configuratie is daardoor niet gekleurd door wat wij op voorraad hebben of waar onze marge zit.",
        },
        {
          title: "Wij voeren niet uit.",
          body: "Geen civiel werk, geen montage, geen eigen ploegen op de bouwplaats.",
        },
        {
          title: "Wij nemen de uitvoeringsleiding niet over.",
          body: "De projectleiding en de coördinatie op locatie blijven bij u, inclusief de wettelijke rollen die daarbij horen.",
        },
        {
          title: "Wij regelen uw fiscale en arbeidsrechtelijke verplichtingen niet.",
          body: "Bij grensoverschrijdend werk is dat een eigenstandig traject; wij wijzen erop, wij doen het niet.",
        },
        {
          title: "Wij stellen uw zekerheden niet.",
          body: "Bankgaranties, concerngaranties en verzekeringen richting uw opdrachtgever blijven bij u.",
        },
      ],

      intakeEyebrow: "In twee minuten",
      intakeTitle: "Wat zou u van ons nodig hebben?",
      intakeIntro:
        "Vijf vragen. Aan het eind ziet u welke vorm het meest voor de hand ligt en welke werkpakketten dan bij ons zouden liggen. Er wordt niets verstuurd totdat u daar zelf op klikt.",
      intakeProgress: "Vraag {current} van {total}",
      intakeBack: "Vorige vraag",
      intakeRestart: "Begin opnieuw",
      intakeDiscuss: "Bespreek dit met ons",
      intakeResultLabel: "Wat het meest voor de hand ligt",
      intakePackagesLabel: "Werkpakketten die dan bij ons liggen",
      intakePackagesNote:
        "Afgeleid uit dezelfde rolverdeling als de matrix hierboven. Bij elk project schuiven er regels op.",
      intakeCaveatLabel: "Eerlijk erbij",
      intakeDefaultedNote:
        "Uw antwoorden geven een gemengd beeld. Dan is dit het logische vertrekpunt, en bakenen wij de omvang in het eerste gesprek af.",
      intakeCaveats: {
        volledig:
          "Heeft u een eigen engineeringsafdeling met capaciteit, dan is de volledige scope-uitwerking waarschijnlijk te zwaar. Dan is een afgebakende opdracht logischer.",
        owner:
          "Voert u het werk zelf uit, dan koopt u met owner's engineering alleen een oordeel in en blijft het maken van de stukken bij u liggen. Dat is zelden wat er knelt.",
        los: "Blijkt tijdens het werk dat het ene gat er drie zijn, dan wordt losse inzet duurder dan een vaste prijs vooraf. Zeg dat liever meteen, dan rekenen wij het allebei door.",
      },
      intakeQuestions: [
        {
          question: "Waar staat het project?",
          answers: [
            "Er ligt een uitvraag die ik nog moet beantwoorden",
            "Het werk is gegund, het ontwerp moet beginnen",
            "De bouw loopt en het documentaire spoor loopt achter",
            "Ik wil het ontwerp van een derde laten toetsen",
          ],
        },
        {
          question: "Wat doet u zelf op de bouwplaats?",
          answers: [
            "Alles, civiel en elektrotechnisch",
            "Alleen civiel, het elektrotechnische deel besteed ik uit",
            "Ik voer niet uit, ik ben opdrachtgever of investeerder",
          ],
        },
        {
          question: "Heeft u een eigen engineeringsafdeling?",
          answers: [
            "Nee",
            "Ja, voor civiel maar niet voor elektrotechniek",
            "Ja, maar niet met capaciteit voor deze uitvraag",
            "Ja, ik zoek alleen een tweede paar ogen",
          ],
        },
        {
          question: "Wat vraagt uw opdrachtgever aan documentatie?",
          answers: [
            "Een volledig documentregister, maandrapportages en goedkeuringsrondes",
            "Een standaard opleverdossier",
            "Dat weet ik nog niet",
            "Niet van toepassing",
          ],
        },
        {
          question: "Wat is uw grootste zorg?",
          answers: [
            "Dat ik de uitvraag niet op tijd compleet krijg",
            "Dat ik in de uitvoering vastloop op raakvlakken met andere partijen",
            "Dat het ontwerp niet klopt en ik daarop word afgerekend",
            "Dat ik niet kan beoordelen of wat er ligt goed is",
          ],
        },
      ],

      faqEyebrow: "Veelgestelde vragen",
      faqTitle: "Wat partijen ons vooraf vragen",
      faq: [
        {
          q: "Werken jullie ook als onderaannemer van een aannemer?",
          a: "Ja, en dat is de meest voorkomende vorm van dit model. U blijft contractspartij richting uw opdrachtgever; wij zijn uw onderaannemer op de scope die u niet zelf doet. Opdrachtgevers geven daar vaak de voorkeur aan boven een samenwerkingsverband, omdat zij één aanspreekpunt houden en de keten back-to-back doorloopt.",
        },
        {
          q: "Wij hebben al een leverancier gekozen. Is dat een probleem?",
          a: "Nee. Wij leveren in dit model niets, dus wij hebben geen belang bij de keuze. Wat wij wel doen is toetsen of het gekozen systeem past bij de eisen uit het contract, en wat de gevolgen zijn voor layout, kabelontwerp en hulpvoeding.",
        },
        {
          q: "Hoe zit het met aansprakelijkheid?",
          a: "Wij dragen het risico op onze eigen specificatie. Wat de uitvoerende partij daar vervolgens van maakt, ligt bij hen. Die knip leggen wij expliciet vast in de overeenkomst, voordat het werk begint.",
        },
        {
          q: "Werken jullie ook buiten Nederland?",
          a: "Ja. Dan gelden wel de lokale normen, de lokale veiligheidsrollen en de lokale fiscale en arbeidsrechtelijke verplichtingen. Die laatste zijn een eigenstandig traject dat wij niet voor u regelen, maar wel vroeg op tafel leggen.",
        },
        {
          q: "Wat kost het?",
          a: "Voor een volledige scope-uitwerking werken wij met één vaste prijs voor het hele traject, uitgesplitst in mijlpalen die aansluiten op de momenten die in het project van uw opdrachtgever toch al vastliggen. De biedfase kan op no cure no pay. Voor een afgebakende opdracht maken wij een vaste prijs per resultaat. Wat het in uw geval is, hangt te veel van de scope af om hier een getal neer te zetten.",
        },
        {
          q: "Blijven jullie beschikbaar na oplevering?",
          a: "Op afroep, tegen uurtarief. Dat is bewust geen onderdeel van de vaste prijs: wat er na oplevering nodig is, weet niemand vooraf, en een opslag daarvoor in de contractprijs is een slag in de lucht.",
        },
      ],

      ctaTitle: "Ligt er een uitvraag op uw bureau?",
      ctaSub:
        "Stuur hem door, of plan een gesprek van een halfuur. Wij zeggen binnen een week of wij er iets in zien en wat wij erin zouden doen. Dat kost u niets en het verplicht u tot niets.",
      ctaPlan: "Plan een afspraak",
      ctaCall: "Bel direct",
      ctaLinks: {
        partnermodellen: "Alle partnermodellen",
        watWijDoen: "Wat wij doen",
        fullEpc: "Full EPC",
      },
    },
    projects: {
      heroTitle: "Onze projecten spreken voor zich",
      heroSub: "Een selectie van gerealiseerde en lopende projecten in C&I en utility-scale batterijopslag.",
      statusRealized: "Gerealiseerd",
      statusDev: "In ontwikkeling",
      capacity: "Capaciteit",
      type: "Type",
      useCase: "Toepassing",
      ctaTitle: "Heeft u een project?",
      ctaSub: "Wij bespreken graag de mogelijkheden voor uw specifieke situatie.",
      ctaButton: "Plan een afspraak",
      portfolioLabel: "Portfolio",
      featuredEyebrow: "Uitgelicht",
      featuredTitle: "Eigen ontwikkelingen",
      featuredLabel: "Eigen ontwikkeling",
      specLabels: {
        power: "Vermogen",
        storage: "Opslag",
        gridLevel: "Netvlak",
        location: "Locatie",
        phase: "Fase",
        delivery: "Verwachte oplevering",
      },
      // Spec values render only when filled; empty strings stay off the page.
      featured: [
        {
          title: "Lichtkiem fase 2",
          body: "Een terrein dat al op het net zit is de goedkoopste plek om uit te breiden. Fase 1 leverde de aansluiting en het vergunningstraject; fase 2 gebruikt die positie voor een substantieel grotere installatie op hetzelfde perceel.",
          // TODO(Lucas): wat maakt dit project bijzonder, en wat mag daarvan publiek?
          // TODO(Lucas): specs aanvullen — vermogen (MW), opslag (MWh), netvlak, locatie, fase, verwachte oplevering.
          specs: { power: "", storage: "", gridLevel: "", location: "", phase: "", delivery: "" },
          photoAlt: "",
        },
        {
          title: "Zutphen",
          // TODO(Lucas): aanleiding, netpositie en status van Zutphen — tekst aanvullen.
          body: "",
          // TODO(Lucas): specs aanvullen — vermogen (MW), opslag (MWh), netvlak, locatie, fase, verwachte oplevering.
          specs: { power: "", storage: "", gridLevel: "", location: "", phase: "", delivery: "" },
          photoAlt: "",
        },
      ],
      statsInOwnPlanning: "In eigen projectplanning",
      statsActiveProjects: "Actieve & geplande projecten",
      statsWorkArea: "Werkgebied",
      projectDisclaimer: "Projecten worden anoniem gepresenteerd ter bescherming van klantvertrouwelijkheid. Sector, type, capaciteit en toepassing zijn geverifieerde indicaties.",
      projects: [
        {
          sector: "Retail & Logistiek",
          capacity: "4 MWh",
          type: "C&I BESS",
          useCase: "Peakshaving & netontlasting",
          status: "realized",
        },
        {
          sector: "Industriële koelinfrastructuur",
          capacity: "2+ MWh",
          type: "C&I BESS",
          useCase: "Energieopslag & kostenreductie",
          status: "realized",
        },
        {
          sector: "Vastgoedportfolio",
          capacity: "8 MWh",
          type: "Utility advies",
          useCase: "Peakshaving businesscase",
          status: "realized",
        },
        {
          sector: "Grondgebonden zonnepark",
          capacity: "30+ MWh",
          type: "Utility-Scale BESS",
          useCase: "Hybride PV+BESS",
          status: "dev",
        },
        {
          sector: "Agrarische sector",
          capacity: "8 MWh",
          type: "Turnkey EPC",
          useCase: "Netcongestie & peakshaving",
          status: "dev",
        },
        {
          sector: "Logistiek & distributie",
          capacity: "20 MWh",
          type: "Turnkey EPC",
          useCase: "Energiebeheer & flexibiliteitsdiensten",
          status: "dev",
        },
      ],
    },
    about: {
      heroTitle: "Gebouwd door mensen die dit vak kennen",
      storyTitle: "Hoe Gridstate is ontstaan",
      storyText:
        "Gridstate is niet ontstaan vanuit de wens om snel te groeien — maar vanuit de overtuiging dat het beter kan. Emiel en Lucas bouwden jarenlang aan projecten binnen bestaande organisaties en zagen hoe kwaliteit, eigenaarschap en technische diepgang stelselmatig werden ingeruild voor volume en snelheid. Ze besloten het anders te doen: regie voeren over de hele keten, met een ontwerp dat extern wordt gestempeld door een onafhankelijke engineeringpartij, en liever iets neerzetten waar ze trots op zijn dan iets dat alleen op papier klopt. Dat is Gridstate.",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Oprichter",
      emielBio: [
        "Meer dan 7 jaar actief in engineering en projectrealisatie binnen de energiesector",
        "Verantwoordelijk voor technische projectstructurering, EPC-regie en systeemintegratie",
        "Bewezen trackrecord in de realisatie van grootschalige batterijopslag- en zonneprojecten in de Benelux",
      ],
      emielSkills: ["Turnkey EPC", "Systeemintegratie", "Supply chain", "Civiele realisatie", "Financieringsstructuren"],
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercieel Directeur & Mede-eigenaar",
      lucasBio: [
        "Meer dan 5 jaar actief in commercie en business development binnen batterijopslag en hernieuwbare energie",
        "Verantwoordelijk voor commerciële strategie, klanttrajecten en partnerontwikkeling",
        "Bewezen trackrecord in de verkoop en structurering van C&I en utility-scale projecten in de Benelux",
      ],
      lucasSkills: ["Commerciële strategie", "Business development", "Projectfinanciering", "Partnerontwikkeling", "Offertetrajecten"],
      shaneName: "Shane Konijnenberg",
      shaneRole: "Operationeel Directeur",
      shaneBio: [
        "Elektrochemisch ingenieur met jarenlange ervaring in de energiesector",
        "Meer dan 200 gerealiseerde projecten in C&I en utility-scale batterijopslag",
        "Operationeel verantwoordelijk voor ontwerp, projectmanagement, uitvoering en aftersales",
      ],
      shaneSkills: ["Engineering & realisatie", "Projectmanagement", "Systeemontwerp", "Consultancy", "Aftersales"],
      trackStatLabels: ["Door ons team vóór Gridstate", "In eigen ontwikkeling", "Gecombineerde ervaring", "Focusmarkt"],
      whyTitle: "Waarom Gridstate",
      whyQuote:
        "Wij zijn geen nieuw bedrijf in een bekende markt. Wij zijn insiders die het nu op de juiste manier doen.",
      whyPoints: [
        { title: "Geen leercurve", desc: "Dit is versnelling — wij hebben het al gedaan." },
        { title: "Directe fabrikantrelaties", desc: "Opgebouwd door jaren in de sector." },
        { title: "Benelux-focus", desc: "Diepgaande kennis van lokale regelgeving en netprocedures." },
        { title: "Engineering-first", desc: "Technische zekerheid staat voorop, altijd." },
      ],
      ctaButton: "Plan een afspraak",
      coreCompetencies: "Kerncompetenties",
      teamLabel: "Het team",
      storyLabel: "Ons verhaal",
      trackrecordLabel: "Trackrecord",
      whyUsLabel: "Waarom wij",
      aboutLabel: "Over ons",
    },
    contact: {
      heroTitle: "Laten we kennismaken",
      heroSub:
        "Of u nu een project heeft, een samenwerking zoekt of gewoon wil weten wat Gridstate voor u kan betekenen — we staan klaar.",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Oprichter",
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercieel Directeur & Mede-eigenaar",
      formName: "Naam",
      formCompany: "Bedrijf",
      formEmail: "E-mailadres",
      formPhone: "Telefoonnummer",
      formRoleLabel: "Ik ben een",
      formRoles: [
        "Opdrachtgever",
        "Projectontwikkelaar",
        "Financieringspartner",
        "O&M Partner",
        "Technische partner",
        "Anders",
      ],
      formMessage: "Beschrijf kort uw project of vraag",
      formSubmit: "Verstuur",
      formSending: "Versturen...",
      formRequired: "Verplicht veld",
      formError: "Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons direct.",
      formPrivacyPrefix: "Door dit formulier te versturen gaat u akkoord met onze",
      formPrivacyLink: "privacyverklaring",
      formSuccessTitle: "Bericht ontvangen",
      formSuccessSub: "We nemen zo snel mogelijk contact met u op.",
      calendarTitle: "Maak direct een afspraak",
      calendarSub: "Kies een moment dat u schikt.",
      orDirect: "Of neem direct contact op",
      // Prefill for the message field, keyed by the ?onderwerp= query value.
      subjectPrefill: {
        "technical-support":
          "Onderwerp: Technical Support — engineering en hoofdaannemersondersteuning.\n\n",
      },
    },
    footer: {
      tagline: "Samen bouwen aan de energietransitie",
      links: "Pagina's",
      contact: "Contact",
      legal: "Legal",
      terms: "Algemene voorwaarden",
      privacy: "Privacyverklaring",
      kvkLabel: "KvK",
      rights: "Alle rechten voorbehouden.",
    },
    general: {
      idealFor: "Ideaal voor",
      readMore: "Lees meer",
      back: "Terug",
      planAppointment: "Plan een afspraak",
      bookMeeting: "Plan een afspraak",
      chooseTime: "Kies een moment dat u past",
      callNow: "Bel ons nu",
      directContact: "Direct contact",
      noObligation: "Geen verplichtingen — gewoon een open gesprek over de mogelijkheden.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "What we do",
      partners: "Partner models",
      investors: "For investors",
      projects: "Projects",
      about: "About us",
      contact: "Book a meeting",
    },
    home: {
      heroTitle: "Energy storage that works. Built by people who know it.",
      heroSub:
        "Turnkey EPC for large-scale battery storage in the Benelux — from first sketch to working system.",
      heroCta1: "Book a meeting",
      heroCta2: "What we do",
      scrollDown: "Scroll",
      statsTitle: "Numbers that speak",
      stat1Label: "Realised by our team before Gridstate",
      stat2Label: "In own development",
      stat3Label: "Direct manufacturer relations",
      stat4Label: "Projects in portfolio",
      audienceEyebrow: "Who we work for",
      audienceTitle: "Select your starting point",
      audienceIntro:
        "A developer, an investor and a party still exploring all arrive with different questions. Choose where you stand, and within one page you'll know whether we can be of value.",
      audienceAllLink: "Everything we do",
      audiences: [
        {
          label: "Developers",
          title: "For developers",
          sub: "You have the site, the grid connection and the permit. We deliver the construction column — fully turnkey, supply only, or just the technical expertise on top.",
          linkLabel: "Three ways to partner",
          alt: "Engineer working on a battery project layout in CAD at the Gridstate office",
        },
        {
          label: "Investors & IPPs",
          title: "For investors and IPPs",
          sub: "Participation in projects we develop ourselves, support on your own acquisitions, and independent recalculation of a business case before you sign.",
          linkLabel: "What we do for you",
          alt: "Gridstate project drawings and business case documents on the conference table",
        },
        {
          label: "Exploring",
          title: "Testing feasibility",
          sub: "Landowner, municipality, industrial consumer or park owner. We find out whether your site can be connected and permitted, and what a battery there would earn.",
          linkLabel: "Feasibility analysis",
          alt: "Site layout of a battery storage project over an aerial photo on a Gridstate workstation",
        },
      ],
      partnersTitle: "How we collaborate",
      partnersSub: "Choose the model that fits your project and role.",
      tickerTitle: "Partners & relations",
      whyTitle: "Why Gridstate",
      chipRealizedLabel: "By our team before Gridstate",
      chipInDevLabel: "In own development",
      chipTurnkeyValue: "Turnkey EPC",
      chipTurnkeyLabel: "From concept to commissioning",
      chipRelationsLabel: "Manufacturer relations",
      ctaTitle: "Your next energy project starts here.",
      ctaSub: "Gridstate takes the full EPC process off your hands. From first sketch to working system.",
      ctaButton: "Book a meeting",
      seqSteps: [
        { fase: 1, label: "Location" },
        { fase: 7, label: "Civil works" },
        { fase: 8, label: "Containers" },
        { fase: 12, label: "Operational" },
      ],
      seqCta: "View the full sequence",
    },
    bouwseq: {
      pickerLabel: "Choose a variant",
      navLabel: "Phases",
      faseLabel: "Phase",
      prev: "Previous phase",
      next: "Next phase",
      loading: "Loading drawing…",
      disclaimer:
        "Reference build based on our standard configurations, not an existing project. Lead times are indicative and vary strongly per grid level.",
      readoutPower: "Power",
      readoutStorage: "Storage",
      readoutUnits: "Units placed",
      readoutStatus: "Status",
    },
    services: {
      heroEyebrow: "Our work",
      heroTitle: "What we do",
      heroStandfirst:
        "We build battery storage, we support parties who build themselves, and we find out whether a site is worth developing. Three services that reinforce each other: what we run into during construction sharpens our feasibility studies, and vice versa.",
      blokAEyebrow: "01 · Full EPC",
      blokATitle: "From permit to grid-code test, under one contract",
      blokAIntro:
        "On a turnkey assignment we are responsible for the whole. One price, one schedule and one party to call when something falls between two disciplines — which is exactly where most delays arise.",
      blokAPhotoAlt: "Site layout of a battery storage project in CAD at the Gridstate office",
      blokAScopeTitle: "What it includes",
      blokATableHeaders: ["Component", "What we do"],
      blokAScope: [
        { name: "Engineering", desc: "Layout, single-line diagram, cable calculation, protection philosophy, auxiliary power concept and earthing plan. Externally stamped by an independent engineering firm." },
        { name: "Permitting", desc: "Acoustic study, fire safety plan, external safety, spatial substantiation and coordination with the municipality, province and safety region." },
        { name: "Procurement", desc: "Battery containers, conversion stations, power transformer, medium-voltage installation and auxiliary power. Selected on cell chemistry, warranty terms, propagation evidence and lead time." },
        { name: "Civil works", desc: "Foundations, site paving, an access road engineered for transformer transport, fencing of at least 2.1 metres, cable trays and firefighting water supply." },
        { name: "Installation", desc: "Lifting plan with a crane from 120 tonnes, receipt and intake, alignment within a 3-millimetre flatness tolerance, and 3 metres of clearance at the side and 4 metres at the door side." },
        { name: "Electrical", desc: "DC coupling per block, medium-voltage ring, connection to the transfer point, earthing and lightning protection." },
        { name: "Commissioning", desc: "SAT per unit, protection testing across all voltage levels, grid-code test with the grid operator and configuration of the control layer." },
        { name: "Handover", desc: "As-built dossier, operating instructions, training and maintenance through our partners." },
      ],
      blokAWhyTitle: "Why turnkey",
      blokAWhy: [
        { title: "One party liable", desc: "In an unbundled assignment everyone points at the other the moment the cable tray doesn't fit the foundation. Turnkey makes that our problem." },
        { title: "One schedule that holds", desc: "The critical path rarely runs through the battery. The power transformer has the longest lead time and the grid operator sets the rest. We plan around that and never quote a completion date that hangs on an assumption." },
        { title: "One dossier", desc: "Everything a financier, insurer or grid operator wants to see comes from the same hand, so nothing contradicts anything else." },
      ],
      blokACta: "View the partner model",
      blokBEyebrow: "02 · Technical support",
      blokBTitle: "The knowledge layer, without us building",
      blokBIntro:
        "Not everyone needs a builder. Sometimes execution is already covered and you only lack the layer above it: the design, the grid-code side and the project management. We deliver that layer on its own — and then we supply no equipment.",
      blokBPhotoAlt: "Engineer working on a single-line diagram in CAD at the Gridstate office",
      blokBLevelsTitle: "Three levels",
      blokBLevels: [
        { title: "Engineering", desc: "Layout and footprint, single-line diagram, cable and loss calculation, short-circuit calculation and selectivity, auxiliary power balance, earthing and lightning protection, and verification against PGS 37-1, IEC 62933-5-2, IEC 62619 and NEN 1010. We draw to NLCS." },
        { title: "Project management", desc: "Schedule and critical path, procurement guidance, quality assurance on supplier documentation, scope-split monitoring, and coordination with the grid operator, municipality and safety region. We chair the meetings and keep the document register." },
        { title: "Full scope development", desc: "For an executing party that only wants to build. Think of a civil contractor who wants to break ground but not carry the engineering, the grid-code substantiation and the permitting above it. We deliver the complete technical dossier, the scope split down to work-package level, and remain available during execution." },
      ],
      blokBCalloutTitle: "What this gets you",
      blokBCallout:
        "We read datasheet against manual against warranty clause. They contradict each other more often than you would expect, and every discrepancy you find before signing is contractual leverage instead of extra work afterwards.",
      blokBCta: "View the partner model",
      blokCEyebrow: "03 · Feasibility",
      blokCTitle: "Can it be done, and is it worth anything",
      blokCIntro:
        "Before money goes to equipment, it must be clear whether the site can be connected and permitted, and what a battery there would realistically earn. We do that research as a standalone service, even if you then continue with someone else.",
      blokCPhotoAlt: "Hands pointing at a site drawing on the conference table at Gridstate",
      blokCItemsTitle: "What we investigate",
      blokCItems: [
        { title: "Grid position", desc: "Which substation, which grid level, which contract form. We verify that with the grid operator itself, not on the national congestion map — it is too coarse to build a project on. Under congestion we look at a capacity-steering contract, the congestion mitigator, cable pooling or non-firm offtake; often there is a route the map doesn't show." },
        { title: "Permitting route", desc: "The short route takes three to five months; an out-of-plan environmental permit nine to fourteen. Which route you get depends on the environmental plan, the provincial ordinance and whether the municipal council holds an advisory right. At a co-located project, noise is usually the binding constraint — not the safety distance." },
        { title: "Business case", desc: "We build the model from its components, not from the totals of a revenue report. Every assumption gets a source, every outcome is independently recalculated, and we show what remains in the worst-case scenario next to what happens in the best." },
        { title: "The information memorandum", desc: "The document you take to your bank or investor: technology, market, fifteen-year cash flow, scenarios, sensitivities, a risk register and a chapter on what is not included. We produce it in our own house style, and it is finished when every number traces back to the model." },
        { title: "Matchmaking", desc: "If there is a financeable case but the party is missing, we introduce you to investors and financiers from our network. We introduce no one to a case we would not dare present ourselves." },
      ],
      blokCCta: "Have your site assessed",
      ctaTitle: "Where are you stuck",
      ctaSub: "Grid connection, permit, business case or execution — start where it hurts.",
      ctaPlan: "Book a meeting",
      ctaCall: "Call us directly",
    },
    investors: {
      heroEyebrow: "For investors and IPPs",
      heroTitle: "Join in, or have it recalculated",
      heroStandfirst:
        "We develop ourselves and we look over other people's shoulders. That means you can join us in a project, or bring us in to test what someone else is putting in front of you.",
      entriesEyebrow: "Three entry points",
      entriesTitle: "Join in, look along, or have it recalculated",
      entries: [
        {
          title: "Participation in our projects",
          desc: "We have over 200 MWh in own development. For part of that, we are looking for parties who want to co-invest, with or without operational involvement. You get access to the full model, the permit dossier and the grid position up front — not only during due diligence.",
        },
        {
          title: "Support on your own acquisitions",
          desc: "If you are buying a project, a park or a portfolio, we verify what is actually there: grid position, permit status, design choices, remaining lifetime and the obligations that come with it. And if a battery can be added, we calculate what that does to the coverage ratio of the whole.",
        },
        {
          title: "Validation of a business case",
          desc: "We recalculate the model down to the component. With an optimizer's revenue report we check whether the total line matches the sum of the parts — and it doesn't always. With a bandwidth on balancing power we take the lower bound as the base, not the middle: the middle is not a neutral choice but an assumption of extra revenue.",
        },
      ],
      normEyebrow: "Our calculation standard",
      normTitle: "How we calculate",
      norms: [
        {
          title: "Zero formula errors",
          desc: "Every model is calculated through and the outcomes are independently recalculated in a second environment. No error values, and totals that add up.",
        },
        {
          title: "Every assumption with a source",
          desc: "Assumptions and sources form their own chapter in the report, not a footnote.",
        },
        {
          title: "IRR and coverage ratio together",
          desc: "The two can tell opposite stories about the same model. A short horizon without residual value gives a low IRR while the coverage ratio looks fine. We show both and explain the difference.",
        },
        {
          title: "The room to break-even",
          desc: "The most useful number is not the IRR but how much revenue can disappoint before the covenant breaks. With us, that is in the summary.",
        },
      ],
      honestTitle: "What we are honest about",
      honestBody:
        "We do not adopt a seller's projections without recalculating them ourselves, even if that delays the deal. We give no probability estimates in percentages, because they suggest a precision that isn't there. And if the case doesn't work, we say so — even when that talks us out of an assignment.",
      statsTitle: "Numbers",
      stat1Label: "In own development",
      stat2Label: "Projects in portfolio",
      stat3Label: "Business cases recalculated",
      stat4Label: "Engineering dossiers",
      ctaTitle: "Let's put your case next to ours",
    },
    partnermodels: {
      heroTitle: "Three ways to work with us",
      heroSub:
        "From fully outsourcing to buying in only the technical expertise. Which model fits depends on what you have in-house and how much risk you want to carry.",
      whatWeDoLabel: "What we do",
      whatYouDoLabel: "What you do",
      whenFitsLabel: "When this fits",
      fullListLabel: "The complete list is on the services page",
      detailCtaTitle: "Interested in this model?",
      detailCtaSub: "Let's meet and explore how we can work together.",
      models: [
        {
          slug: "full-epc",
          tag: "Partner model 01",
          title: "Full EPC",
          standfirst:
            "We take over the entire project, from permit dossier to grid-code test. You have one contract, one price and one party responsible for the result.",
          cardFeatures: ["One contract and one price", "From permit dossier to grid-code test", "One party responsible for the result"],
          ideal: "Developers without their own technical organisation",
          weDo: [
            { lead: "", text: "Engineering, permitting, procurement, civil works, installation, electrical works, commissioning and handover." },
          ],
          weDoLink: true,
          youDo: "Provide the site and the land position, keep the grid connection in your name, and decide. Nothing else.",
          whenFits: [
            "You have no technical organisation of your own and don't want to build one.",
            "You want one liable party instead of a chain of suppliers.",
            "Your financier asks for a coherent dossier from a single hand.",
          ],
          extraTitle: "What you get from us",
          extra: "A fixed price, a schedule with a named critical path, and one project lead you know throughout the entire project.",
          photoAlt: "Site layout of a battery storage project in CAD at the Gridstate office",
        },
        {
          slug: "technical-support",
          tag: "Partner model 02",
          title: "Technical Support",
          standfirst:
            "Only the knowledge, without supply. We deliver no equipment, so we have no stake in which choice you make.",
          cardFeatures: ["Engineering and project management", "Scope development down to work-package level", "Owner's engineering — we sell nothing"],
          ideal: "Contractors and clients seeking independent expertise",
          weDo: [
            { lead: "Engineering", text: "Layout, single-line diagram, cable and short-circuit calculation, selectivity, auxiliary power balance, and verification against PGS 37-1, IEC 62933-5-2, IEC 62619 and NEN 1010." },
            { lead: "Project management", text: "Schedule and critical path, procurement guidance, quality assurance, scope monitoring and coordination with the grid operator, municipality and safety region." },
            { lead: "Full scope development", text: "For an executing party that only wants to build. We deliver the technical dossier and the scope split down to work-package level, and remain available during execution." },
            { lead: "Owner's engineering", text: "We sit on your side of the table during a tender or when assessing the work of a third party." },
          ],
          weDoLink: false,
          youDo: "The procurement and the execution, with whomever you choose.",
          whenFits: [
            "You are a civil or electrical contractor who can handle execution but not the layer above it.",
            "You have already chosen a supplier and want an independent party looking over your shoulder.",
            "You want advice from someone who sells nothing.",
          ],
          extraTitle: "Why that last point matters",
          extra: "Because we supply nothing in this model, our advice on cell chemistry, manufacturer or configuration is not coloured by what we have in stock.",
          photoAlt: "",
        },
        {
          slug: "supply-only",
          tag: "Partner model 03",
          title: "Supply Only",
          standfirst:
            "Supply only. You have the knowledge and the execution in-house and want to procure sharply and reliably.",
          cardFeatures: ["Supplier-neutral selection and procurement", "Factory testing, transport and intake", "Complete documentation, certificates and warranties"],
          ideal: "Builders with their own technical organisation",
          weDo: [
            { lead: "", text: "Selection and procurement of the equipment, factory testing per unit, transport and intake on site, and the complete documentation including certificates and warranty terms." },
          ],
          weDoLink: false,
          youDo: "Everything around it — design, permitting, civil works, installation and commissioning.",
          whenFits: [
            "You build regularly and have your own technical organisation.",
            "You don't want to be tied to one manufacturer and are looking for a party that selects supplier-neutrally.",
            "You want certainty about exactly what is delivered, including the propagation evidence and the warranty terms.",
          ],
          extraTitle: "A caveat we state up front",
          extra: "In this model, responsibility for the system design lies with you. We deliver what is ordered and do not verify whether the whole adds up. If you have doubts about that, choose Full EPC or add our Technical Support alongside.",
          photoAlt: "",
        },
      ],
      processTitle: "From first contact to partnership",
      steps: [
        { title: "Intake Call", desc: "Introduction, project type, initial indication" },
        { title: "Capability Assessment", desc: "Projects, scale, technical needs, role division" },
        { title: "Project Structuring", desc: "System architecture, configuration, project structure" },
        { title: "Pricing Alignment", desc: "Price structure, delivery structure, collaboration agreement" },
        { title: "Partnership Agreement", desc: "Roles, project registration, start of collaboration" },
      ],
      stepDetails: [
        "During the intake call, we get to know each other and explore whether we can add value. We discuss the project type, the service or advice needed, and your expectations. No obligations — just an open and honest conversation about the possibilities.",
        "We map your existing projects, scale, and technical needs. Together, we determine the right division of roles and identify which collaboration model best fits your organisation, capacity, and the specific project type.",
        "Based on your project requirements, we fully develop the system architecture, BESS configuration, and project structure. Technical choices are substantiated, risks identified, and all parties aligned before moving forward.",
        "We establish a transparent pricing structure and delivery schedule aligned with EPC phasing. The collaboration agreement is drawn up — clear on roles, responsibilities, margins, and mutual expectations.",
        "Roles and responsibilities are formally established. Your project is registered in our project system, non-circumvention is secured, and the collaboration officially begins. Together, we build towards your first project.",
      ],
      onboardingLabel: "Onboarding",
      collaborationLabel: "Ways of working",
      foundationLabel: "Foundation",
      principlesTitle: "Our collaboration principles",
      principles: [
        { title: "Project Registration System", desc: "Transparent project assignment, lead generation protection" },
        { title: "Non-Circumvention", desc: "No direct approach to registered clients" },
        { title: "Engineering IP Protection", desc: "Protection of technical designs, confidential project information" },
        { title: "Structured Collaboration Model", desc: "Clear roles, transparent decision-making" },
      ],
      ctaButton: "Book a meeting",
      viewModel: "View model",
      idealFor: "Ideal for",
    },
    technicalSupport: {
      tag: "Partner model 02",
      heroTitle: "Technical Support",
      heroStandfirst:
        "You build. We take over the layer above it: the design, the documents your client has to approve, and the coordination with the other parties on site. We supply no equipment, so we have no stake in the choices you make.",
      ruleLabel: "The rule of thumb",
      ruleBody:
        "If your client has to approve the document, we produce it. If it is about how the work on site is organised and carried out, it is yours.",
      ruleNote:
        "In practice that line is almost always obvious straight away. It saves discussion, and it makes clear at the start of a project where the risk sits.",

      problemEyebrow: "What this is about",
      problemTitle: "The tender is bigger than the work",
      problemParagraphs: [
        "A contractor who can build battery storage usually really can. Foundations, cabling, installation, commissioning: that is work a good executing party knows inside out.",
        "What surrounds it these days is something else. A project-financed client has to be able to show its financiers that every component has been designed, checked, approved and documented. In a contract that becomes a FIDIC Yellow Book Design & Build, a scope demarcation matrix with dozens of lines of which a fair share concern coordination with another contractor, a deviation schedule with a cap on the number of deviations, a master document register, monthly reports in a prescribed format, hold and witness points, and an approval round per subcontractor with a response time measured in weeks.",
        "That is not execution. It is a parallel track that runs alongside the work and is not subordinate to it. A party that cannot staff that track does not bid — or bids and runs into it during construction. We staff that track.",
      ],
      problemStats: [
        { value: "6", label: "documents a client typically asks for with the bid" },
        { value: "3", label: "contractors working on the same site at once" },
        { value: "80+", label: "documents in a master document register for the build phase" },
      ],
      problemStatsNote:
        "Indicative of a utility-scale BESS tender under a project-financed contract.",

      scopeEyebrow: "Division of roles",
      scopeTitle: "Who does what",
      scopeIntro:
        "Below is the division of roles we propose as standard for a tender covering the balance of plant of a battery storage system. Filter on what you already do and you will see what is left for us — and the other way around. The split is a starting point, not a template: on every project some lines move, and we would rather have that conversation at the start than halfway through.",
      scopeFilterLabel: "Filter by role",
      scopeFilterAll: "All",
      scopeReset: "Show everything",
      scopeBlockLabel: "Block",
      scopeCountLabel: "work packages",
      scopeRoles: {
        u: "You",
        gridstate: "Gridstate",
        samen: "Together",
        onderaannemer: "Subcontractor",
      },
      scopeCounter: {
        u: "{count} of the {total} work packages sit with you",
        gridstate: "{count} of the {total} work packages sit with us",
        samen: "{count} of the {total} work packages we do together",
        onderaannemer: "{count} of the {total} work packages go to a subcontractor",
      },
      scopeBlocks: {
        bid: "Bid and contract phase",
        engineering: "Engineering and design",
        civiel: "Civil works",
        elektro: "Electrical works",
        lossen: "Unloading, placement and transport",
        itot: "IT, OT and security",
        bouwplaats: "Site, safety and site management",
        begeleiding: "Construction support and main-contractor support",
      },
      scopeItems: {
        "b0-vragenlijst": {
          label: "Question list to the client",
          note: "We draft the technical and contractual questions; you submit them as the contracting party.",
        },
        "b0-clarification": {
          label: "Attending clarification meetings",
          note: "We prepare and process the outcome, you attend as main contractor.",
        },
        "b0-deviation": {
          label: "Deviation schedule",
          note: "For each deviation we substantiate the technical reason and the alternative proposal. You decide which ones are submitted.",
        },
        "b0-proposal": {
          label: "Technical proposal and interface approach",
          note: "The technical proposal and how the interfaces with the other contractors are controlled.",
        },
        "b0-programma": {
          label: "Project construction programme",
          note: "Milestones, main phases, critical path with float, and acceleration measures with their effect. You test it for feasibility.",
        },
        "b0-organogram": {
          label: "Build-phase organisation chart",
          note: "Roles and responsibilities, including how QA/QC, document control and contract management are divided.",
        },
        "b0-mdr": {
          label: "Master document register",
          note: "The full list of documents to be delivered during construction, with numbering and phasing.",
        },
        "b0-engineering": {
          label: "Engineering documents with the bid",
          note: "Single-line diagram, site layout and cable calculations, at the level of detail a bid calls for.",
        },
        "b0-cyber": {
          label: "Cybersecurity response form",
          note: "Completed in line with the client's cybersecurity requirements.",
        },
        "b0-prijsstaat": {
          label: "Price schedule: structure and verification",
          note: "We build the schedule along the client's cost blocks and check it for completeness against the scope matrix. You price the execution.",
        },
        "b0-eenheidsprijzen": {
          label: "Unit rates and execution costing",
          note: "Your cost prices, your margin.",
        },
        "b0-financieel": {
          label: "Financial documents and securities",
          note: "Annual accounts, bank guarantee capacity, parent company guarantees.",
        },
        "b1-layout": {
          label: "System and site layout",
          note: "Positioning of units and transformer stations, cable routes, crossings, maintenance access.",
        },
        "b1-eendraad": {
          label: "Single-line diagram",
          note: "Up to and including the interface with the medium-voltage installation.",
        },
        "b1-kabel": {
          label: "MV and LV cable design",
          note: "Conductor sizes and current rating to DIN EN 60287, short-circuit calculation and electrodynamic force calculation.",
        },
        "b1-hulpvoeding": {
          label: "Auxiliary power concept and design",
          note: "Redundant set-up, medium-voltage connection, low-voltage distribution and coupling, including the technical specification for the transformers.",
        },
        "b1-aarding": {
          label: "Earthing network design",
          note: "We write the technical specification and review the result.",
        },
        "b1-bliksem": {
          label: "Lightning protection risk analysis",
          note: "Specification and review to DIN EN IEC 62305, for the complete site.",
        },
        "b1-grondonderzoek": {
          label: "Ground investigation and thermal resistivity measurements",
          note: "Specification to the laboratory, supervision of sampling to ASTM D5334 and VDI 4640-1, and processing into the cable design.",
        },
        "b1-verlichting": {
          label: "Site lighting",
          note: "Electrical design to DIN EN 12464-2.",
        },
        "b1-scada": {
          label: "SCADA and access control interface",
          note: "Specification of gate signalling and key plan towards the fencing supplier and the IT party.",
        },
        "b1-fundering": {
          label: "Foundation design",
          note: "Unless you would rather outsource it; then we write the specification.",
        },
        "b1-civiel": {
          label: "Civil design",
          note: "Roads, drainage, firefighting water system, trench profiles, site layout.",
        },
        "b2-grondwerk": {
          label: "Earthworks, foundations and paving",
          note: "Your work, your equipment, your people.",
        },
        "b2-sleuven": {
          label: "Cable trenches and ducts",
          note: "To the trench profiles from the civil design.",
        },
        "b2-bluswater": {
          label: "Firefighting water supply",
          note: "We specify, you contract.",
        },
        "b2-hekwerk": {
          label: "Fencing, gates and access control",
          note: "We specify, including the interface with fire brigade locking, and you contract.",
        },
        "b3-kabelleg": {
          label: "Cable laying and installation",
          note: "Carried out by your own crews, to the approved cable design.",
        },
        "b3-aansluiten": {
          label: "Terminations and earthing",
          note: "The connection work on site, including the earth bonding.",
        },
        "b3-beproeving": {
          label: "Cable testing, VLF and partial discharge",
          note: "Unless you have that capability in-house.",
        },
        "b3-iv": {
          label: "Responsible electrical person",
          note: "To DIN VDE 0105-100 or NEN 3140, depending on the country.",
        },
        "b4-hijsplan": {
          label: "Lifting plan and lifting operations",
          note: "We specify the requirements, contracting sits with you.",
        },
        "b4-transport": {
          label: "Transport and delivery scheduling",
          note: "Container lead times run to months and drive the critical path.",
        },
        "b5-netwerk": {
          label: "Site data network and fibre",
          note: "Installation and connection on site, to our interface specification.",
        },
        "b5-camera": {
          label: "CCTV and detection",
          note: "Scope demarcation with the client is almost always needed here.",
        },
        "b5-scada-interface": {
          label: "Interface specification towards SCADA",
          note: "Which signals are exchanged, in what format and over which protocol.",
        },
        "b6-projectleiding": {
          label: "Site management and coordination",
          note: "Execution management stays yours. We do not take it over.",
        },
        "b6-voorzieningen": {
          label: "Site facilities",
          note: "Cabins, fencing, storage, utilities and site management during construction.",
        },
        "b6-veiligheid": {
          label: "Site safety coordination",
          note: "The statutory coordinator role during execution.",
        },
        "b6-landmeten": {
          label: "Surveying and as-built measurement",
          note: "We specify the format, so it can go straight into the as-built dossier.",
        },
        "b7-pmp": {
          label: "Project management plan",
          note: "System and work breakdown, processes, hold and witness points. For approval before work starts.",
        },
        "b7-veiligheidsdossier": {
          label: "Safety dossier",
          note: "Health and safety plan, emergency plan and electrical safety plan, in the contract language, including switching procedure and permit-to-work system.",
        },
        "b7-documentbeheer": {
          label: "Document control and master document register",
          note: "Ongoing control of every document towards the client, including revisions and approval status.",
        },
        "b7-rapportage": {
          label: "Monthly progress report",
          note: "Milestones, scope changes, critical path, financial status, the main risks and safety.",
        },
        "b7-interface": {
          label: "Interface management during execution",
          note: "Tracking and resolving interfaces between the supplier, the other contractors, the grid operator and the subcontractors, recorded in an interface register.",
        },
        "b7-uitvragen": {
          label: "Technical specifications for subcontractors",
          note: "Per package a working document covering scope, standards, quantities, interfaces and acceptance criteria, usable as a contract annex as it stands.",
        },
        "b7-contracteren": {
          label: "Contracting and directing subcontractors",
          note: "All contracts sit with you, including the ones we specify technically.",
        },
        "b7-wijzigingen": {
          label: "Assessment of design changes",
          note: "Technical assessment during construction and the substantiation towards the client.",
        },
        "b7-tests": {
          label: "Support for testing and energisation",
          note: "Test plans, attendance at SAT and grid-code tests, and processing of the reporting.",
        },
        "b7-asbuilt": {
          label: "As-built dossier and handover",
          note: "Complete dossier in pdf and dwg, and the handover to the client.",
        },
      },

      rulesEyebrow: "How we agree this",
      rulesTitle: "Five ground rules that decide the rest",
      rulesIntro:
        "A division of roles on paper does not hold if it is not settled who carries which risk. These are the five agreements we make at the start. They sit in the contract, not in a presentation.",
      rules: [
        {
          title: "Whoever specifies is not whoever contracts",
          body: "We write the technical specification and do the technical assessment. You run the commercial negotiation and sign. All subcontractor contracts sit with you, including the ones we select, so there is a single contractual chain running back-to-back to your client. Bear in mind that many contracts require prior written approval of every subcontractor, with a response time of weeks. That round belongs in the schedule.",
        },
        {
          title: "The line runs at your client's approval",
          body: "If your client has to approve the document, we produce it: drawings, calculations, reports, plans and the document register. If it is about how the work on site is organised, it is yours. That is the dividing line for work preparation, and it holds up without having to be discussed each time.",
        },
        {
          title: "Whoever specifies carries the specification risk",
          body: "If our working document is wrong, that is ours. What the executing party then makes of it is theirs. That split is stated explicitly in the agreement. Without that sentence the first conflict turns into an argument about who said what, at exactly the moment you have no time for it.",
        },
        {
          title: "Every subcontractor gets a working document, not a verbal scope",
          body: "One document per package: scope of work, applicable standards, quantities and drawings, interfaces with the other parties, deliverables and acceptance criteria, schedule and interface moments, and the safety and document requirements that flow down from the main contract. That document is immediately the annex to the contract you sign.",
        },
        {
          title: "Everything the main contract imposes flows down back-to-back",
          body: "The employer's requirements, the safety requirements, the cybersecurity regime and the document obligations apply to the subcontractors too. That is not a formality: it touches the safety plan obligation, the permit-to-work system, personnel certification, and retention-of-title provisions that clients explicitly want passed down to subcontractors.",
        },
      ],

      phasesEyebrow: "From tender to handover",
      phasesTitle: "Three phases",
      phasesFooter:
        "Everything the contract and the employer's requirements ask of the main contractor in plans, registers, reports and approval rounds, we prepare and maintain. You sign and you build.",
      phases: [
        {
          tab: "Phase 1 · Bid phase",
          title: "Bid phase",
          intro:
            "From the tender to contract signature. The aim is a submission that is complete, consistent and assessable, and a contract you can carry. If you prefer, we do this phase on a no cure no pay basis: if the work is not awarded to you, we invoice nothing.",
          items: [
            { title: "Questions to the client", desc: "Drafting the technical and contractual questions, and working the answers through all bid documents." },
            { title: "Substantiation of deviations", desc: "For each deviation the technical reason and a proposal for alternative wording. You decide which ones are submitted." },
            { title: "Electrical bill of quantities", desc: "Metres of cable per size, terminations, lugs and earthing cable, as the basis for your costing and cable procurement." },
            { title: "Price schedule structure and verification", desc: "Built along the client's cost blocks, and checked for completeness against the scope matrix." },
            { title: "Project construction programme", desc: "Milestones, main phases, critical path with float and buffers, and acceleration measures with their effect." },
            { title: "Technical proposal and interface approach", desc: "The technical proposal and how the interfaces with the other contractors are controlled." },
            { title: "Organisation chart and document register set-up", desc: "Roles and responsibilities in the build phase, and the list of documents to be delivered during construction." },
            { title: "Cybersecurity form", desc: "Completed in line with the client's requirements." },
            { title: "Site and system layout", desc: "Units, transformer stations, cable routes and crossings, worked onto the client's site drawing." },
            { title: "Auxiliary power concept", desc: "Set-up of the redundant auxiliary supply, with alternatives." },
            { title: "Indicative single-line diagram", desc: "Up to and including the interface with the medium-voltage installation." },
            { title: "Cable design and calculations", desc: "Conductor sizes and current rating, as the basis for procuring the largest material item in the contract." },
            { title: "Assembling the submission", desc: "The complete set in the structure the tender prescribes and in your own house style." },
            { title: "Clarification meetings and final negotiation", desc: "Preparation, attendance and processing through to signature." },
          ],
        },
        {
          tab: "Phase 2 · Detailed engineering",
          title: "Detailed engineering",
          intro:
            "Starts at award and runs up to and including approval of the design documents and the design freeze. With a project-financed client the financier needs the approved design documents, so this track sits on the critical path to financial close. If it slips, the money slips.",
          items: [
            { title: "Final system and site layout", desc: "Including cable routes, aligned with your civil design and the supplier's positioning." },
            { title: "Final MV and LV cable design", desc: "Cable loading to DIN EN 60287, short-circuit calculation and electrodynamic force calculation, for approval by the client." },
            { title: "Thermal resistivity measurements", desc: "Specification, supervision of sampling to ASTM D5334 and VDI 4640-1, and processing into the cable design." },
            { title: "Auxiliary power", desc: "Final design of the auxiliary power stations with medium-voltage connection, low-voltage distribution and coupling." },
            { title: "Earthing network design", desc: "Technical specification to the designing party and review of the result." },
            { title: "Lightning protection risk analysis", desc: "Specification and review to DIN EN IEC 62305, for the complete site." },
            { title: "Site lighting", desc: "Electrical design to DIN EN 12464-2." },
            { title: "SCADA and access control interface", desc: "Specification of gate signalling and key plan." },
            { title: "Technical specifications for subcontractors", desc: "A working document per package, plus the technical assessment of the offers." },
            { title: "Interface engineering", desc: "Alignment with the supplier, the other contractors and the grid operator on every interface in the scope matrix, recorded in an interface register." },
            { title: "Design reviews", desc: "Steering the approval rounds and processing comments from the client and its advisers." },
            { title: "Project management, engineering phase", desc: "Planning, monitoring and progress of the design track." },
          ],
        },
        {
          tab: "Phase 3 · Construction support",
          title: "Construction support",
          intro:
            "Starts with the preparation of the works and runs up to and including acceptance of the as-built dossier. You build and you run the work on site. We keep the documentary and contractual track towards your client up to date and manage the interfaces with the other parties on site.",
          items: [
            { title: "Project management plan", desc: "System and work breakdown, processes, hold and witness points. For approval before work starts." },
            { title: "Safety dossier", desc: "Health and safety plan, emergency plan and electrical safety plan in the contract language, including switching procedure and permit-to-work system." },
            { title: "Document control", desc: "Ongoing control of every document towards the client, including revisions and approval status." },
            { title: "Monthly progress report", desc: "Milestones, scope changes, critical path, financial status, the main risks and safety." },
            { title: "Interface management", desc: "Tracking and resolving interfaces between the supplier, the other contractors, the grid operator and the subcontractors." },
            { title: "Assessment of design changes", desc: "Technical assessment of changes during construction and the substantiation towards the client." },
            { title: "Support for testing and energisation", desc: "Test plans, attendance at SAT and grid-code tests, and processing of the reporting." },
            { title: "As-built dossier and handover", desc: "Complete dossier in pdf and dwg, and the handover to the client." },
          ],
        },
      ],

      formsEyebrow: "Scope",
      formsTitle: "Three shapes, depending on what you already have",
      formsFitLabel: "Fits",
      forms: [
        {
          id: "volledig",
          title: "Full scope development",
          body: "We take over the complete track above execution, from the bid phase through to the as-built dossier. You build and run the work on site; we deliver the design, the documents and the interface management towards your client.",
          features: [
            "All three phases, one fixed price",
            "We are your subcontractor, you stay the contracting party",
            "Bid phase on a no cure no pay basis if you prefer",
          ],
          fit: "a contractor who wants to bid on a tender larger than their own preparation organisation.",
        },
        {
          id: "owner",
          title: "Owner's engineering",
          body: "We sit on your side of the table. During a tender, when assessing a third party's design, or at the technical acceptance of work already carried out.",
          features: [
            "Review of design, calculations and documentation",
            "Assessment of offers for technical equivalence",
            "Attendance at tests, inspections and handover",
          ],
          fit: "a client or investor who wants to know whether they are getting what they are signing for.",
        },
        {
          id: "los",
          title: "Standalone engineering input",
          body: "One component, clearly bounded. A cable calculation, a layout, an auxiliary power balance, a check against a standard, or a second opinion on a design that has stalled.",
          features: [
            "Bounded assignment with a fixed lead time",
            "No obligation to continue",
            "Usable as an annex to your own documents as it stands",
          ],
          fit: "a party with one specific gap that wants it closed without setting up a partnership.",
        },
      ],

      notEyebrow: "Boundaries",
      notTitle: "What we do not do in this model",
      notIntro:
        "A scope that only says what is included is not a scope. This sits explicitly outside it, and that is deliberate.",
      notItems: [
        {
          title: "We supply no equipment.",
          body: "In this model we sell nothing. Our advice on cell chemistry, manufacturer or configuration is therefore not coloured by what we hold in stock or where our margin sits.",
        },
        {
          title: "We do not execute.",
          body: "No civil works, no installation, no crews of our own on site.",
        },
        {
          title: "We do not take over site management.",
          body: "Site management and coordination stay with you, including the statutory roles that come with them.",
        },
        {
          title: "We do not arrange your tax and employment obligations.",
          body: "On cross-border work that is a track of its own; we flag it, we do not run it.",
        },
        {
          title: "We do not provide your securities.",
          body: "Bank guarantees, parent company guarantees and insurance towards your client stay with you.",
        },
      ],

      intakeEyebrow: "In two minutes",
      intakeTitle: "What would you need from us?",
      intakeIntro:
        "Five questions. At the end you will see which shape is the obvious one and which work packages would then sit with us. Nothing is sent until you click to send it.",
      intakeProgress: "Question {current} of {total}",
      intakeBack: "Previous question",
      intakeRestart: "Start over",
      intakeDiscuss: "Discuss this with us",
      intakeResultLabel: "The obvious starting point",
      intakePackagesLabel: "Work packages that would then sit with us",
      intakePackagesNote:
        "Derived from the same division of roles as the matrix above. On every project some lines move.",
      intakeCaveatLabel: "Honestly though",
      intakeDefaultedNote:
        "Your answers give a mixed picture. In that case this is the logical starting point, and we bound the scope in the first conversation.",
      intakeCaveats: {
        volledig:
          "If you have an engineering department with capacity, full scope development is probably too heavy. A bounded assignment makes more sense then.",
        owner:
          "If you carry out the work yourself, owner's engineering only buys you a judgement and producing the documents still sits with you. That is rarely where it hurts.",
        los: "If the one gap turns out to be three once work starts, standalone input becomes more expensive than a fixed price agreed up front. Say so early and we will price both.",
      },
      intakeQuestions: [
        {
          question: "Where is the project?",
          answers: [
            "There is a tender on my desk I still have to answer",
            "The work has been awarded, the design has to start",
            "Construction is running and the documentary track is behind",
            "I want a third party's design reviewed",
          ],
        },
        {
          question: "What do you do on site yourself?",
          answers: [
            "Everything, civil and electrical",
            "Civil only, I outsource the electrical part",
            "I do not execute, I am the client or investor",
          ],
        },
        {
          question: "Do you have your own engineering department?",
          answers: [
            "No",
            "Yes, for civil but not for electrical",
            "Yes, but without capacity for this tender",
            "Yes, I am only looking for a second pair of eyes",
          ],
        },
        {
          question: "What does your client ask for in documentation?",
          answers: [
            "A full document register, monthly reports and approval rounds",
            "A standard handover dossier",
            "I do not know yet",
            "Not applicable",
          ],
        },
        {
          question: "What worries you most?",
          answers: [
            "That I will not get the tender complete in time",
            "That I will get stuck on interfaces with other parties during execution",
            "That the design is wrong and I will be held to it",
            "That I cannot judge whether what is on the table is any good",
          ],
        },
      ],

      faqEyebrow: "Frequently asked questions",
      faqTitle: "What parties ask us up front",
      faq: [
        {
          q: "Do you also work as a subcontractor to a contractor?",
          a: "Yes, and that is the most common form of this model. You stay the contracting party towards your client; we are your subcontractor on the scope you do not cover yourself. Clients often prefer that to a consortium, because they keep a single point of contact and the chain runs back-to-back.",
        },
        {
          q: "We have already chosen a supplier. Is that a problem?",
          a: "No. We supply nothing in this model, so we have no stake in the choice. What we do is check whether the chosen system meets the requirements in the contract, and what the consequences are for layout, cable design and auxiliary power.",
        },
        {
          q: "How does liability work?",
          a: "We carry the risk on our own specification. What the executing party then makes of it sits with them. We record that split explicitly in the agreement, before the work starts.",
        },
        {
          q: "Do you work outside the Netherlands?",
          a: "Yes. Local standards, local safety roles and local tax and employment obligations then apply. The latter are a track of their own that we do not run for you, but do put on the table early.",
        },
        {
          q: "What does it cost?",
          a: "For full scope development we work with one fixed price for the whole track, split into milestones that line up with moments already fixed in your client's project. The bid phase can be no cure no pay. For a bounded assignment we set a fixed price per deliverable. Which it is in your case depends too much on scope to put a number here.",
        },
        {
          q: "Do you stay available after handover?",
          a: "On call, at an hourly rate. That is deliberately not part of the fixed price: nobody knows up front what will be needed after handover, and a mark-up for it in the contract price is guesswork.",
        },
      ],

      ctaTitle: "Is there a tender on your desk?",
      ctaSub:
        "Send it over, or book half an hour. Within a week we will tell you whether we see something in it and what we would do in it. That costs you nothing and commits you to nothing.",
      ctaPlan: "Book a meeting",
      ctaCall: "Call us directly",
      ctaLinks: {
        partnermodellen: "All partner models",
        watWijDoen: "What we do",
        fullEpc: "Full EPC",
      },
    },
    projects: {
      heroTitle: "Our projects speak for themselves",
      heroSub: "A selection of realised and ongoing projects in C&I and utility-scale battery storage.",
      statusRealized: "Realised",
      statusDev: "In development",
      capacity: "Capacity",
      type: "Type",
      useCase: "Use case",
      ctaTitle: "Do you have a project?",
      ctaSub: "We'd be happy to discuss the possibilities for your specific situation.",
      ctaButton: "Book a meeting",
      portfolioLabel: "Portfolio",
      featuredEyebrow: "Featured",
      featuredTitle: "Own developments",
      featuredLabel: "Own development",
      specLabels: {
        power: "Power",
        storage: "Storage",
        gridLevel: "Grid level",
        location: "Location",
        phase: "Phase",
        delivery: "Expected delivery",
      },
      // Spec values render only when filled; empty strings stay off the page.
      featured: [
        {
          title: "Lichtkiem phase 2",
          body: "A site that is already grid-connected is the cheapest place to expand. Phase 1 delivered the connection and the permitting; phase 2 uses that position for a substantially larger installation on the same plot.",
          // TODO(Lucas): fill in specs — power (MW), storage (MWh), grid level, location, phase, expected delivery.
          specs: { power: "", storage: "", gridLevel: "", location: "", phase: "", delivery: "" },
          photoAlt: "",
        },
        {
          title: "Zutphen",
          // TODO(Lucas): background, grid position and status of Zutphen — add copy.
          body: "",
          specs: { power: "", storage: "", gridLevel: "", location: "", phase: "", delivery: "" },
          photoAlt: "",
        },
      ],
      statsInOwnPlanning: "In own project planning",
      statsActiveProjects: "Active & planned projects",
      statsWorkArea: "Work area",
      projectDisclaimer: "Projects are presented anonymously to protect client confidentiality. Sector, type, capacity, and application are verified indications.",
      projects: [
        { sector: "Retail & Logistics", capacity: "4 MWh", type: "C&I BESS", useCase: "Peak shaving & grid relief", status: "realized" },
        { sector: "Industrial cooling infrastructure", capacity: "2+ MWh", type: "C&I BESS", useCase: "Energy storage & cost reduction", status: "realized" },
        { sector: "Real estate portfolio", capacity: "8 MWh", type: "Utility advice", useCase: "Peak shaving business case", status: "realized" },
        { sector: "Ground-mounted solar park", capacity: "30+ MWh", type: "Utility-Scale BESS", useCase: "Hybrid PV+BESS", status: "dev" },
        { sector: "Agricultural sector", capacity: "8 MWh", type: "Turnkey EPC", useCase: "Grid congestion & peak shaving", status: "dev" },
        { sector: "Logistics & distribution", capacity: "20 MWh", type: "Turnkey EPC", useCase: "Energy management & flexibility services", status: "dev" },
      ],
    },
    about: {
      heroTitle: "Built by people who know this trade",
      storyTitle: "How Gridstate was born",
      storyText:
        "Gridstate wasn't founded with the ambition to grow fast — but with the conviction that it can be done better. Emiel and Lucas spent years building projects within larger organisations and saw how quality, ownership, and technical depth were systematically traded for volume and speed. They decided to do it differently: direct the entire chain, with every design externally stamped by an independent engineering firm, and build something they're genuinely proud of rather than something that only looks good on paper. That is Gridstate.",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Founder",
      emielBio: [
        "More than 7 years active in engineering and project realisation within the energy sector",
        "Responsible for technical project structuring, EPC direction and system integration",
        "Proven track record in the realisation of large-scale battery storage and solar projects in the Benelux",
      ],
      emielSkills: ["Turnkey EPC", "System integration", "Supply chain", "Civil realisation", "Financing structures"],
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercial Director & Co-Owner",
      lucasBio: [
        "More than 5 years active in commercial strategy and business development within battery storage and renewable energy",
        "Responsible for commercial strategy, client processes and partner development",
        "Proven track record in the sale and structuring of C&I and utility-scale projects in the Benelux",
      ],
      lucasSkills: ["Commercial strategy", "Business development", "Project financing", "Partner development", "Quotation processes"],
      shaneName: "Shane Konijnenberg",
      shaneRole: "Operations Director",
      shaneBio: [
        "Electrochemical engineer with extensive experience in the energy sector",
        "More than 200 realised projects in C&I and utility-scale battery storage",
        "Operationally responsible for design, project management, execution and aftersales",
      ],
      shaneSkills: ["Engineering & realisation", "Project management", "System design", "Consultancy", "Aftersales"],
      trackStatLabels: ["By our team before Gridstate", "In own development", "Combined experience", "Focus market"],
      whyTitle: "Why Gridstate",
      whyQuote: "We are not a new company in a familiar market. We are insiders now doing it the right way.",
      whyPoints: [
        { title: "No learning curve", desc: "This is acceleration — we've already done it." },
        { title: "Direct manufacturer relations", desc: "Built through years in the sector." },
        { title: "Benelux focus", desc: "Deep knowledge of local regulations and grid procedures." },
        { title: "Engineering-first", desc: "Technical certainty always comes first." },
      ],
      ctaButton: "Book a meeting",
      coreCompetencies: "Core competencies",
      teamLabel: "The team",
      storyLabel: "Our story",
      trackrecordLabel: "Track record",
      whyUsLabel: "Why us",
      aboutLabel: "About us",
    },
    contact: {
      heroTitle: "Let's meet",
      heroSub: "Whether you have a project, are looking for collaboration or just want to know what Gridstate can mean for you — we're ready.",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Founder",
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercial Director & Co-Owner",
      formName: "Name",
      formCompany: "Company",
      formEmail: "Email address",
      formPhone: "Phone number",
      formRoleLabel: "I am a",
      formRoles: [
        "Client",
        "Project developer",
        "Financing partner",
        "O&M Partner",
        "Technical partner",
        "Other",
      ],
      formMessage: "Briefly describe your project or question",
      formSubmit: "Send",
      formSending: "Sending...",
      formRequired: "Required field",
      formError: "Something went wrong while sending. Please try again or email us directly.",
      formPrivacyPrefix: "By submitting this form you agree to our",
      formPrivacyLink: "privacy statement",
      formSuccessTitle: "Message received",
      formSuccessSub: "We'll get back to you as soon as possible.",
      calendarTitle: "Schedule directly",
      calendarSub: "Choose a time that suits you.",
      orDirect: "Or contact us directly",
      // Prefill for the message field, keyed by the ?onderwerp= query value.
      subjectPrefill: {
        "technical-support":
          "Subject: Technical Support — engineering and main contractor support.\n\n",
      },
    },
    footer: {
      tagline: "Building the energy transition together",
      links: "Pages",
      contact: "Contact",
      legal: "Legal",
      terms: "General terms & conditions",
      privacy: "Privacy statement",
      kvkLabel: "CoC",
      rights: "All rights reserved.",
    },
    general: {
      idealFor: "Ideal for",
      readMore: "Read more",
      back: "Back",
      planAppointment: "Book a meeting",
      bookMeeting: "Book a meeting",
      chooseTime: "Choose a time that suits you",
      callNow: "Call us now",
      directContact: "Direct contact",
      noObligation: "No obligations — just an open conversation about the possibilities.",
    },
  },
};

export type Translations = typeof translations.nl;
