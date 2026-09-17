export type Lang = "nl" | "en";

export const translations = {
  nl: {
    nav: {
      home: "Home",
      services: "Wat wij doen",
      howWeBuild: "Hoe wij bouwen",
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
        "Wij ontwikkelen zelf en wij bouwen voor anderen. Dat betekent dat u met ons kunt meedoen in een project, of ons juist kunt inzetten om te toetsen wat een ander u voorlegt. In beide gevallen krijgt u dezelfde onderbouwing — wij maken geen verschil tussen een stuk voor onszelf en een stuk voor u.",

      audienceEyebrow: "Ons publiek",
      audienceTitle: "Vier soorten partijen, vier soorten vragen",
      audienceIntro:
        "Batterijopslag trekt heel verschillende investeerders, en zij stellen niet dezelfde vraag. Hieronder staat waar wij ons op richten en wat elk van die partijen doorgaans van ons nodig heeft.",
      audienceDoLabel: "Wat wij meestal doen",
      audience: [
        {
          title: "Fondsen die spreiding zoeken",
          body: "U heeft een portefeuille in duurzame opwek en wilt daar opslag naast zetten, omdat het rendementsprofiel en de risico's anders van aard zijn dan die van zon en wind. De vraag is dan zelden of batterijopslag werkt, maar of ú het kunt beoordelen, uitvoeren en beheren zonder er een afdeling voor op te tuigen.",
          doBody: "De technische en modelmatige onderbouwing leveren waarop uw investeringscommissie kan besluiten, en het project daarna bouwen.",
        },
        {
          title: "Joint ventures met infrastructuurfondsen",
          body: "U brengt kapitaal en een beleggingshorizon, wij brengen projecten, uitvoering en de operationele kant. De gesprekken die dan gevoerd moeten worden gaan over rolverdeling, zeggenschap, de momenten waarop besloten wordt en hoe ieders belang aan dezelfde kant blijft liggen.",
          doBody: "Met open vizier de rolverdeling en de governance uitwerken voordat er over cijfers wordt gepraat.",
        },
        {
          title: "IPP's en bestaande exploitanten",
          body: "U exploiteert al zonneparken of windparken en kijkt naar opslag op bestaande of nieuwe posities. U heeft eigen technische mensen, maar batterijopslag gedraagt zich anders dan opwek: de opbrengst komt uit meerdere markten tegelijk en de aansluiting wordt de beperkende factor.",
          doBody: "Doorrekenen wat opslag op uw bestaande posities oplevert, en die posities vervolgens bouwen of uw eigen team ondersteunen.",
        },
        {
          title: "Private investeerders en family offices",
          body: "U investeert met eigen vermogen, vaak in één project tegelijk, en u wilt begrijpen waar u instapt zonder een laag adviseurs ertussen. Wat u nodig heeft is een stuk dat zichzelf uitlegt en iemand die de vragen erachter beantwoordt.",
          doBody: "De case opbouwen zoals hieronder beschreven, en hem met u doorlopen tot u hem zelf kunt navertellen.",
        },
      ],
      audienceFooter:
        "Herkent u zich in geen van de vier? Dan is het gesprek waarschijnlijk alsnog de moeite waard, maar zeg er even bij waar u vandaan komt.",

      entriesEyebrow: "Drie ingangen",
      entriesTitle: "Meedoen, meekijken of laten narekenen",
      entryStepLabel: "De eerste stap",
      entries: [
        {
          title: "Participatie in onze projecten",
          desc: "Wij hebben ruim {mwh} in eigen ontwikkeling. Voor een deel daarvan zoeken wij partijen die mee willen investeren, met of zonder operationele betrokkenheid. U krijgt vooraf inzage in het volledige model, het vergunningsdossier en de netpositie — niet pas in de due diligence.",
          step: "Een gesprek en, na wederzijdse interesse, inzage in het volledige dossier onder geheimhouding.",
        },
        {
          title: "Ondersteuning bij uw eigen acquisities",
          desc: "Koopt u een project, een park of een portefeuille, dan toetsen wij wat er werkelijk staat: netpositie, vergunningsstatus, ontwerpkeuzes, restlevensduur en de verplichtingen die meekomen. En als er een batterij bij kan, rekenen wij uit wat dat doet met de dekkingsgraad van het geheel.",
          step: "U stuurt wat u heeft; wij zeggen binnen een week wat wij zouden natrekken en wat dat kost.",
        },
        {
          title: "Validatie van een businesscase",
          desc: "Wij rekenen het model na tot op de component. Bij een opbrengstrapport van een optimizer controleren wij of de totaalregel klopt met de som van de onderdelen, en dat is niet altijd zo. Bij een bandbreedte op regelvermogen nemen wij de ondergrens als basis en niet het midden — het midden is geen neutrale keuze maar een aanname van meeropbrengst.",
          step: "Het model en het onderliggende opbrengstrapport; wij komen terug met de bevindingen en de vragen die u terug moet stellen.",
        },
      ],

      failEyebrow: "Uit de praktijk",
      failTitle: "Vijf plekken waar een businesscase het begeeft",
      failIntro:
        "Een model dat mooi uitkomt, is niet hetzelfde als een case die houdt. Dit zijn de vijf punten waar wij in de praktijk de meeste cases zien schuiven, in de volgorde waarin ze zich meestal aandienen.",
      fails: [
        {
          title: "De aansluiting beperkt de exploitatie meer dan het model laat zien",
          body: "Het gecontracteerde vermogen geldt op het overdrachtspunt bij de netbeheerder, niet op de klemmen van de omvormer. Transformatorverliezen en hulpvoeding tellen bij het laden op bij uw afname, waardoor de bruikbare capaciteit lager ligt dan de opgestelde. Modellen die op opgesteld vermogen rekenen, zijn daarmee structureel te optimistisch.",
        },
        {
          title: "De totaalregel van een opbrengstrapport klopt niet met de onderdelen",
          body: "Optimizers en handelspartijen leveren rapporten met een totaal per jaar. Optellen wat eronder ligt, geeft niet altijd hetzelfde getal. Wij bouwen een case daarom op uit de componenten en niet uit de totalen, en als het verschil niet te verklaren is, blijft het als open punt in het stuk staan.",
        },
        {
          title: "Het midden van een bandbreedte wordt als basis genomen",
          body: "Bij regelvermogen wordt vaak een ondergrens en een bovengrens gegeven. Het midden daarvan kiezen voelt neutraal, maar het is een aanname van meeropbrengst. Wij rekenen de basiscase op de ondergrens en laten zien wat het meerdere zou doen, zodat de case ook houdt als dat meerdere er niet is.",
        },
        {
          title: "De schuldquote past alleen bij een omzet die er nog niet is",
          body: "Een hoge gearing is verdedigbaar bij een gefloorde of getolde omzet en niet bij een volledig marktafhankelijke. Cases die de ene structuur veronderstellen en de andere financiering aanhouden, breken bij de eerste tegenvallende periode — niet in het rendement, maar in de convenant.",
        },
        {
          title: "De restwaarde draagt het rendement",
          body: "Bij een korte horizon zonder restwaarde oogt het rendement laag terwijl de dekkingsgraad prima is. Bij een royale restwaarde gebeurt het omgekeerde en ziet een matige case er acceptabel uit. Wij tonen altijd beide grootheden en zeggen erbij wat de restwaarde-aanname met het resultaat doet.",
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
          title: "Rendement én dekkingsgraad",
          desc: "Die twee kunnen tegengestelde verhalen vertellen bij hetzelfde model. Een korte horizon zonder restwaarde geeft een lage IRR terwijl de dekkingsgraad er prima uitziet. Wij tonen ze allebei en leggen het verschil uit.",
        },
        {
          title: "De ruimte tot break-even",
          desc: "Het bruikbaarste getal is niet de IRR maar hoeveel de opbrengst mag tegenvallen voordat de convenant breekt. Dat staat bij ons in de samenvatting.",
        },
        {
          title: "Vaste drempels, ongeacht wie het vraagt",
          desc: "Elk model wordt getoetst aan een vaste rendementsdrempel en een minimale dekkingsgraad. Komt een case daar niet doorheen, dan leggen wij hem niet voor — ook niet met een toelichting erbij waarom het deze keer anders ligt. Welke drempels dat zijn, hoort in een gesprek en niet op een webpagina, maar ze verschuiven niet per tegenpartij.",
        },
        {
          title: "Projecties van een verkoper worden nagerekend, niet overgenomen",
          desc: "Wat de verkopende partij aan opbrengstverwachting meelevert, is input en geen uitgangspunt. Wij rekenen het na op de twee plekken waar het in de praktijk misgaat: de omzet uit frequentiediensten en de exploitatiekosten.",
        },
      ],

      memoEyebrow: "Het document",
      memoTitle: "Wat u in handen krijgt",
      memoIntro:
        "Een businesscase van ons is geen presentatie met vier sheets. Het is een memorandum dat zichzelf uitlegt, met de aannames en de bronnen als eigen hoofdstuk in plaats van als voetnoot. Hieronder de opbouw. Klik op een hoofdstuk voor de vraag die het beantwoordt.",
      memoFeaturesLabel: "Vaste kenmerken",
      memoFeatures: [
        "Aannames en bronnen als eigen hoofdstuk",
        "Basiscase én neerwaarts scenario",
        "Open punten blijven zichtbaar",
      ],
      memoChapters: [
        { title: "Opdracht, aanpak en verantwoording", question: "Wat is er precies onderzocht, met welke gegevens, en wat is er niet onderzocht?" },
        { title: "Technische uitgangssituatie", question: "Wat staat er nu, wat zijn de maten en hoe is het aangesloten?" },
        { title: "Aansluitcapaciteit en de gevolgen voor de exploitatie", question: "Wat kan er werkelijk over de aansluiting, en wat betekent dat voor de opbrengst?" },
        { title: "De doorgerekende configuraties", question: "Welke varianten zijn er bekeken in vermogen, opslagduur en opstelling?" },
        { title: "Onderbouwing van de configuratiekeuze", question: "Waarom deze variant, en wat geeft u op door de andere niet te kiezen?" },
        { title: "Aard en bandbreedte van de opbrengsten", question: "Uit welke markten komt de omzet, hoe zeker is elk deel en wat is de spreiding?" },
        { title: "Exploitatieresultaat in de basiscase", question: "Wat levert het op onder de aannames die wij verdedigbaar vinden?" },
        { title: "Neerwaarts scenario", question: "Wat gebeurt er als het onzekerste deel van de omzet wegvalt?" },
        { title: "Vergelijking van de scenario's", question: "Waar zit het verschil precies, en welk deel van het resultaat hangt eraan?" },
        { title: "Financiering en dekkingsgraad", question: "Wat kan deze case aan schuld dragen, en hoeveel ruimte houdt de convenant?" },
        { title: "Gevoeligheidsanalyse", question: "Bij welke verandering in welke aanname kantelt het beeld?" },
        { title: "Risico's en beheersmaatregelen", question: "Wat kan er misgaan, hoe waarschijnlijk is dat en wat doen wij eraan?" },
        { title: "Conclusie en vervolgstappen", question: "Wat is het oordeel, en wat moet er als eerste gebeuren?" },
        { title: "Bijlagen: aannames, bronnen en onderliggende simulatie", question: "Waar komt elk getal vandaan?" },
      ],
      memoNot:
        "Wat er niet in staat, is een kansinschatting in procenten. Wij geven geen percentage op de haalbaarheid van een vergunning of een netaansluiting, omdat dat een precisie suggereert die er niet is. Wat er wél staat, is welke voorwaarden vervuld moeten zijn en wat er gebeurt als dat niet lukt.",

      dualEyebrow: "De vraag die u gaat stellen",
      dualTitle: "Zijn jullie mijn mede-aandeelhouder of mijn aannemer?",
      dualParagraphs: [
        "In onze eigen ontwikkelingen allebei. Wij nemen een belang in de projecten die wij bouwen en blijven daar aandeelhouder. Dat is een bewuste keuze en het heeft een voordeel dat u niet krijgt bij een aannemer die na oplevering vertrekt: elke ontwerpkeuze die op korte termijn geld bespaart en op lange termijn geld kost, komt bij ons zelf terug. Wij bouwen wat wij zelf twintig jaar willen bezitten.",
        "Het heeft ook een spanning, en daar doen wij niet geheimzinnig over. Als wij zowel aandeelhouder als bouwer zijn, bepalen wij mede de voorwaarden waaronder wij onszelf de opdracht geven. Daarom leggen wij die voorwaarden vooraf vast, voordat er over deelname wordt gesproken: de scope, de rolverdeling en de manier waarop de prijs tot stand komt liggen er eerder dan uw handtekening. Wat u daarvan vindt, hoort onderdeel te zijn van uw besluit om mee te doen.",
        "Investeert u in een project dat u zelf heeft gevonden en vraagt u ons alleen om het na te rekenen of te bouwen, dan speelt dit niet. Dan zijn wij leverancier en verder niets, en dat is een prima rol.",
      ],

      honestTitle: "Waar wij eerlijk over zijn",
      honestBody:
        "Wij nemen geen projecties van een verkoper over zonder ze zelf na te rekenen, ook niet als dat de deal vertraagt. Wij geven geen kansinschatting in procenten, want die suggereert precisie die er niet is. En als de case niet werkt, zeggen wij dat — ook wanneer wij daarmee onszelf uit een opdracht praten.",

      quizEyebrow: "In twee minuten",
      quizTitle: "Welke ingang past bij u?",
      quizIntro:
        "Vijf vragen. Aan het eind ziet u welke van de drie ingangen het meest voor de hand ligt en wat de eerste stap dan is. Er wordt niets verstuurd totdat u daar zelf op klikt, en er wordt niets opgeslagen.",
      quizProgress: "Vraag {current} van {total}",
      quizBack: "Vorige vraag",
      quizRestart: "Begin opnieuw",
      quizDiscuss: "Bespreek dit met ons",
      quizResultLabel: "Wat het meest voor de hand ligt",
      quizCaveatLabel: "Eerlijk erbij",
      quizDefaultedNote:
        "Uw antwoorden geven een gemengd beeld. Dan is dit de kleinste eerste stap: begin met één case, dan wordt de rest daarna vanzelf duidelijk.",
      quizCaveats: {
        participatie:
          "Zoekt u volledige zeggenschap over de operatie, dan is meedoen in een project van ons waarschijnlijk niet wat u wilt. Dan is het kopen van een eigen positie logischer, en kunnen wij daar de bouwer in zijn.",
        acquisitie:
          "Heeft u zelf een team dat dit soort toetsing routineus doet, dan koopt u bij ons vooral een tweede oordeel. Dat kan waardevol zijn, maar het is een kleinere opdracht dan u misschien verwacht.",
        validatie:
          "Ligt er nog geen model, dan valt er ook weinig na te rekenen. Dan is een gesprek over de uitgangspunten zinniger dan een validatie, en dat kost u minder.",
      },
      quizQuestions: [
        {
          question: "Wat heeft u nu in handen?",
          answers: [
            "Een project of portefeuille die ik overweeg te kopen",
            "Een model of rapport waar ik niet zeker over ben",
            "Nog niets concreets; ik oriënteer me op deze markt",
            "Eigen posities waar ik opslag naast wil zetten",
          ],
        },
        {
          question: "Wat voor partij bent u?",
          answers: [
            "Een fonds dat spreiding zoekt in de portefeuille",
            "Een infrastructuurfonds dat een samenwerking overweegt",
            "Een exploitant met eigen opwek",
            "Een private investeerder of family office",
          ],
        },
        {
          question: "Wat weegt zwaarder?",
          answers: [
            "Een voorspelbaar resultaat, met minder zeggenschap",
            "Zeggenschap en zicht op de operatie",
            "Eerst begrijpen of deze markt iets voor mij is",
          ],
        },
        {
          question: "Heeft u eigen technische capaciteit?",
          answers: [
            "Nee",
            "Ja, voor opwek maar niet voor opslag",
            "Ja, maar niet met ruimte voor dit traject",
            "Ja, ik zoek alleen een tweede oordeel",
          ],
        },
        {
          question: "Waar zit uw grootste twijfel?",
          answers: [
            "Of de aannames achter de opbrengst kloppen",
            "Of de aansluiting doet wat er wordt beweerd",
            "Of de financieringsstructuur houdt",
            "Of de partij aan de andere kant het kan waarmaken",
          ],
        },
      ],

      ctaTitle: "Zullen we beginnen met één case?",
      ctaSub:
        "Stuur ons een model, een opbrengstrapport of een project dat u overweegt. Wij komen binnen een week terug met wat wij zouden natrekken en wat wij ervan vinden. Dat kost u niets en het verplicht u tot niets.",
      ctaPlan: "Plan een afspraak",
      ctaCall: "Bel direct",
      ctaLinks: {
        projecten: "Onze projecten",
        hoeWijBouwen: "Hoe wij bouwen",
        watWijDoen: "Wat wij doen",
      },
      disclaimer:
        "Deze pagina is algemene informatie over onze werkwijze en dienstverlening en geen aanbod, advies of aanbeveling tot het doen van een investering.",
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
          extra: "Een planning met een benoemde kritieke lijn, een dossier dat de toets van uw financier en uw verzekeraar doorstaat, en gedurende het hele traject één projectleider die u kent.",
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
            "U ontwerpt, installeert en sluit aan. Wij leveren het systeem geplaatst op uw fundatie, en ondersteunen op de punten waar kennis van het batterijsysteem het verschil maakt.",
          cardFeatures: ["Geplaatst op uw fundatie, niet afgeleverd bij het hek", "Ontwerpreview, PGS 37-1 en besturingskoppeling inbegrepen", "Integratietest en overdracht van het complete dossier"],
          ideal: "Bouwers en installateurs met een eigen technische organisatie",
          weDo: [
            { lead: "", text: "Selectie en inkoop van de apparatuur, fabriekstest per unit, transport en inslag op de locatie, en de volledige documentatie inclusief certificaten en garantiebepalingen." },
          ],
          weDoLink: false,
          youDo: "Het systeemontwerp, het civiele werk, de aansluiting en de netconformiteit.",
          whenFits: [
            "U bouwt vaker en heeft een eigen technische organisatie.",
            "U wilt niet vastzitten aan één fabrikant en zoekt een partij die leveranciersneutraal selecteert.",
            "U wilt zekerheid over wat er precies geleverd wordt, inclusief het propagatiebewijs en de garantievoorwaarden.",
          ],
          extraTitle: "Waarom dit meer is dan inkopen",
          extra: "Een leverancier zet een container bij het hek. Tussen dat moment en een werkend systeem zitten de raakvlakken met uw installatie, het veiligheidsdossier, de besturingskoppeling en een integratietest die verder gaat dan wat de fabrikanten elk voor hun eigen apparaat doen. Dat nemen wij erbij.",
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
      ruleOurs: "Moet uw opdrachtgever het stuk goedkeuren, dan maken wij het.",
      ruleYours:
        "Gaat het over hoe het werk op de bouwplaats georganiseerd en uitgevoerd wordt, dan is het van u.",
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

      rolEyebrow: "Rolverdeling",
      rolTitle: "Wie doet wat",
      rolIntro:
        "Twaalf onderdelen, in drie groepen. Zo verdelen wij het standaard bij een aannemer die de uitvoering doet en de laag daarboven bij ons belegt. Het is een startpunt, geen sjabloon: bij elk project schuiven er regels op, en dat gesprek voeren wij liever aan het begin dan halverwege.",
      rolFooter:
        "Wat hier bij u staat, kunnen wij niet overnemen. Wat bij ons staat, kunt u altijd zelf houden — dan wordt het een kleinere opdracht.",
      rolRoles: {
        u: "U",
        gridstate: "Wij",
        samen: "Samen",
      },
      rolGroups: {
        ontwerp: "Ontwerp en berekeningen",
        contract: "Contract en documentatie",
        uitvoering: "Uitvoering en coördinatie",
      },
      rolItems: {
        systeemontwerp: {
          label: "Systeem- en terreinontwerp",
          note: "Layout, kabeltraces, eendraadschema en de positionering van units en transformatorstations.",
        },
        berekeningen: {
          label: "Elektrotechnische berekeningen",
          note: "Kabelbelasting, kortsluiting, selectiviteit en hulpvoedingsbalans, met de toets aan de geldende normen.",
        },
        civiel: {
          label: "Civiel ontwerp",
          note: "Funderingen, wegen, drainage, bluswater en sleufprofielen. Wilt u dat uitbesteden, dan schrijven wij de uitvraag.",
        },
        onderzoek: {
          label: "Specialistisch onderzoek",
          note: "Aarding, bliksembeveiliging, grondonderzoek en thermische metingen. Wij schrijven de uitvraag en beoordelen het resultaat; een gespecialiseerd bureau voert uit.",
        },
        bod: {
          label: "De stukken bij het bod",
          note: "Het technische voorstel, de engineeringstukken, het bouwprogramma met kritieke lijn en de onderbouwing van de afwijkingen op de contractvoorwaarden.",
        },
        prijs: {
          label: "Prijs en calculatie",
          note: "Wij bouwen de prijsstaat op en controleren hem op volledigheid tegen de scope. Uw kostprijzen en uw marge blijven van u.",
        },
        documentregister: {
          label: "Documentregister en rapportage",
          note: "Het register van alles wat geleverd moet worden, het beheer van revisies en goedkeuringsstatus, en de periodieke voortgangsrapportage.",
        },
        contractering: {
          label: "Contractering en zekerheden",
          note: "U bent contractspartij, u sluit de onderaannemerscontracten en stelt de garanties.",
        },
        fysiek: {
          label: "Alle fysieke uitvoering",
          note: "Civiel en elektrotechnisch, met uw eigen mensen en materieel.",
        },
        projectleiding: {
          label: "Projectleiding op locatie",
          note: "De uitvoeringsleiding en de wettelijke rollen op de bouwplaats blijven bij u. Wij nemen die niet over.",
        },
        interfaces: {
          label: "Interfaces met de andere partijen",
          note: "Bewaking van de raakvlakken met de leverancier, de andere contractors en de netbeheerder, vastgelegd in één register.",
        },
        tests: {
          label: "Tests, energisatie en as-built",
          note: "Wij maken de testplannen en het as-built dossier; u levert de uitvoeringsgegevens en doet het werk op locatie.",
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
            { title: "Vragen en verwerking", desc: "Wij stellen de technische en contractuele vragen op en verwerken de antwoorden in alle stukken." },
            { title: "Engineering bij het bod", desc: "Terreinlayout, eendraadschema en kabelberekeningen, in de mate van detail die bij een bod hoort." },
            { title: "Hoeveelheden en prijsopbouw", desc: "De elektrotechnische hoeveelhedenstaat en de opbouw van de prijsstaat, gecontroleerd op volledigheid tegen de scope." },
            { title: "Programma en afwijkingen", desc: "Het bouwprogramma met kritieke lijn, en per afwijking op de contractvoorwaarden de technische reden met een alternatief voorstel." },
            { title: "Samenstellen en onderhandelen", desc: "De complete inzending in uw huisstijl, en deelname aan de gesprekken tot en met ondertekening." },
          ],
        },
        {
          tab: "Fase 2 · Detailengineering",
          title: "Detailengineering",
          intro:
            "Start bij gunning en loopt tot en met de goedkeuring van de ontwerpstukken en de design freeze. Bij een project-gefinancierde opdrachtgever heeft de financier de goedgekeurde ontwerpstukken nodig, dus dit spoor ligt op het kritieke pad naar financial close. Loopt het uit, dan loopt het geld uit.",
          items: [
            { title: "Definitief ontwerp", desc: "Systeem- en terreinlayout met kabeltraces, afgestemd op uw civiele ontwerp en de positionering van de leverancier." },
            { title: "Berekeningen ter goedkeuring", desc: "Kabelbelasting, kortsluiting en klemkracht conform de geldende normen, in de vorm die uw opdrachtgever accepteert." },
            { title: "Hulpvoeding en terreininstallaties", desc: "Ontwerp van de redundante hulpvoeding, de terreinverlichting en de interface met toegangscontrole en SCADA." },
            { title: "Uitvragen aan onderaannemers", desc: "Per pakket één werkdocument met scope, normen, hoeveelheden, interfaces en acceptatiecriteria, plus de technische beoordeling van de aanbiedingen." },
            { title: "Goedkeuringsrondes", desc: "Begeleiding van de reviews en verwerking van het commentaar, tot aan de design freeze." },
          ],
        },
        {
          tab: "Fase 3 · Uitvoeringsbegeleiding",
          title: "Uitvoeringsbegeleiding",
          intro:
            "Start bij de voorbereiding van de uitvoering en loopt tot en met de acceptatie van het as-built dossier. U voert uit en leidt het werk op locatie. Wij houden het documentaire en contractuele spoor richting uw opdrachtgever bij en bewaken de raakvlakken met de andere partijen op het terrein.",
          items: [
            { title: "Projectmanagement- en veiligheidsplan", desc: "Werkstructuur, processen, hold- en witness points, plus het V&G-plan, het noodplan en het elektrisch veiligheidsplan in de voertaal van het contract." },
            { title: "Documentbeheer", desc: "Het lopende beheer van alle documenten richting de opdrachtgever, inclusief revisies en goedkeuringsstatus." },
            { title: "Voortgangsrapportage", desc: "Mijlpalen, scopewijzigingen, kritieke lijn, financiële status, de belangrijkste risico's en veiligheid." },
            { title: "Interfacebewaking", desc: "Oplossing van raakvlakken tussen de leverancier, de andere contractors, de netbeheerder en de onderaannemers, en de technische beoordeling van ontwerpwijzigingen tijdens de bouw." },
            { title: "Tests, energisatie en overdracht", desc: "Testplannen, bijwoning van SAT en netcodetests, en het complete as-built dossier in pdf en dwg." },
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
        "Vijf vragen. Aan het eind ziet u welke van de drie vormen hieronder het meest voor de hand ligt, en welke onderdelen uit de rolverdeling hierboven dan bij ons zouden liggen. Er wordt niets verstuurd totdat u daar zelf op klikt.",
      intakeProgress: "Vraag {current} van {total}",
      intakeBack: "Vorige vraag",
      intakeRestart: "Begin opnieuw",
      intakeDiscuss: "Bespreek dit met ons",
      intakeResultLabel: "Wat het meest voor de hand ligt",
      intakePackagesLabel: "Onderdelen die dan bij ons liggen",
      intakePackagesNote:
        "Afgeleid uit dezelfde rolverdeling als hierboven. Bij elk project schuiven er regels op.",
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
    fullEpc: {
      tag: "Partnermodel 01",
      heroTitle: "Full EPC",
      heroStandfirst:
        "Wij nemen het hele project over: ontwerp, vergunning, inkoop, civiel, elektrotechniek, inbedrijfstelling en overdracht. U levert de locatie en de netaansluiting, en u beslist. Wat wij opleveren is ontworpen om verzekerd en gefinancierd te kunnen worden — niet alleen om te werken.",

      problemEyebrow: "Waar dit over gaat",
      problemTitle: "Werkend is niet hetzelfde als aanvaardbaar",
      problemParagraphs: [
        "Een batterijopslagsysteem dat op de bouwplaats naar behoren functioneert, is nog geen batterijopslagsysteem dat een verzekeraar wil dekken of een financier wil financieren. Dat verschil zit niet in de uitvoering. Het zit in wat er is vastgelegd voordat er iets besteld werd.",
        "De meeste discussies die een project vertragen, gaan over aantoonbaarheid. Is de brandpropagatietest uitgevoerd op de installatie zoals die er staat, of alleen op een cel of een module? Dekt het rapport de configuratie die u daadwerkelijk heeft laten bouwen, of is het opgeteld uit losse componenttests? Sluiten de veiligheidsafstanden aan op het advies van de veiligheidsregio? Zijn de netcodeverplichtingen aantoonbaar gehaald? Dat zijn vragen die een independent engineer stelt in de technische due diligence, en een verzekeraar bij de acceptatie. Op dat moment is bijsturen duur.",
        "Wij ontwerpen vanaf de eerste tekening naar die vragen toe. Niet omdat het netjes staat, maar omdat het de enige volgorde is die werkt: wie eerst bouwt en daarna documenteert, bouwt de discussie in.",
      ],
      problemBlocks: [
        {
          title: "Op systeemniveau",
          body: "Een propagatietest op cel- of moduleniveau is voor een verzekeraar van beperkte waarde.",
        },
        {
          title: "Op de geïnstalleerde configuratie",
          body: "Losse componenttests bij elkaar optellen dekt de installatie niet.",
        },
        {
          title: "Vóór de inkoop",
          body: "Wat de norm eist, bepaalt wat u kunt kopen — niet andersom.",
        },
      ],

      scopeEyebrow: "De scope",
      scopeTitle: "Wat er allemaal in zit",
      scopeIntro:
        "“Turnkey” is een woord waar iedereen iets anders onder verstaat. Hieronder staat per fase wat er in zit en bij wie het risico ligt. Bij Full EPC ligt vrijwel alles bij ons; wat bij u blijft, staat er ook bij.",
      scopeTabLabel: "Fase",
      scopeExampleLabel: "Bijvoorbeeld",
      scopePhases: {
        ontwerp: { tab: "Ontwerp", title: "Ontwerp, vergunning en netpositie" },
        inkoop: { tab: "Inkoop", title: "Inkoop en specificatie" },
        bouw: { tab: "Bouw", title: "Bouw, besturing en inbedrijfstelling" },
      },
      scopeExamples: {
        ontwerp:
          "De veiligheidsregio kan grotere afstanden tussen clusters vragen dan de norm als minimum stelt. Dat verandert de layout, en de layout bepaalt of het vermogen dat u voor ogen heeft nog op het perceel past. Daarom vragen wij dat advies op voordat het ontwerp vastligt.",
        inkoop:
          "Twee systemen met hetzelfde vermogen op papier kunnen een heel ander brandveiligheidsdossier hebben: het ene met een propagatietest op de complete eenheid, het andere alleen op moduleniveau. Dat verschil staat niet in de aanbieding, maar uw verzekeraar vraagt er wel naar.",
        bouw:
          "Het gecontracteerde vermogen geldt op het overdrachtspunt. Telt de hulpvoeding tijdens laden mee en zit dat niet in de begrenzing, dan overschrijdt u uw eigen contract. Dat is een instelling, geen verbouwing — mits het vooraf is meegenomen.",
      },
      scopeRoles: { wij: "Wij", samen: "Samen", u: "U" },
      scopeItems: {
        batterijsysteem: {
          label: "Batterijsysteem",
          note: "Selectie op basis van uw gebruiksprofiel en de eisen die uw verzekeraar en financier stellen, niet op basis van wat wij op voorraad hebben. Inclusief de beoordeling van de brandpropagatiedocumentatie op systeemniveau en de garantievoorwaarden op cyclusaantal en restcapaciteit.",
        },
        omvormers: {
          label: "Omvormers",
          note: "Dimensionering op de gewenste ontlaadduur en het netvlak, vierkwadrantgedrag, en de afstemming tussen omvormer, batterijmanagement en besturing.",
        },
        middenspanning: {
          label: "Middenspanning en transformator",
          note: "Schakelinstallatie, transformator, beveiliging en selectiviteit, en de afstemming met de netbeheerder over het klantstation.",
        },
        netaansluiting: {
          label: "Netaansluiting",
          note: "De aansluiting blijft op uw naam en in uw contract. Wij voeren het traject: transportverzoek, programma van eisen van de netbeheerder, het eendraadschema van het klantstation en de planning richting energisatie.",
        },
        hulpvoeding: {
          label: "Hulpvoeding",
          note: "Een vaak onderschat blok. De hulpvoeding moet beschikbaar zijn tijdens inbedrijfstelling en bij netuitval, en telt bij laden op bij uw afname — dus bij het gecontracteerde vermogen.",
        },
        civiel: {
          label: "Civiel en terreininrichting",
          note: "Grondwerk, funderingen, verhardingen, drainage, sleufprofielen, hekwerk en toegang, en de terreininrichting die uit het veiligheidsconcept volgt.",
        },
        kabelwerk: {
          label: "Kabelwerk",
          note: "Kabelontwerp en -berekening, tracés, kruisingen, aarding, en de aanleg. Doorgaans de grootste materiaalpost in het project.",
        },
        besturing: {
          label: "Besturing, EMS en SCADA",
          note: "De koppeling tussen batterijmanagement, omvormer en energiemanagement, de begrenzing op het overdrachtspunt, monitoring, en de interface naar de partij die het systeem verhandelt.",
        },
        brandveiligheid: {
          label: "Brandveiligheid en beveiliging",
          note: "Het veiligheidsconcept conform PGS 37-1, de afstemming met de veiligheidsregio, bluswatervoorziening, detectie en camerabewaking.",
        },
        vergunning: {
          label: "Vergunning en bevoegd gezag",
          note: "Het vergunningsdossier, de milieumelding, het akoestisch onderzoek en de afstemming met gemeente en omgevingsdienst.",
        },
        engineering: {
          label: "Engineering en berekeningen",
          note: "Layout, eendraadschema, kabel- en kortsluitberekening, selectiviteit, hulpvoedingsbalans en de toets aan de geldende normen. Het ontwerp wordt extern gestempeld door een onafhankelijke engineeringpartij.",
        },
        inbedrijfstelling: {
          label: "Inbedrijfstelling en overdracht",
          note: "Testplannen, inbedrijfstelling, de netconformiteitstest conform RfG, het as-built dossier en de overdracht.",
        },
      },
      scopeFooter:
        "Wat u aanlevert staat in de volgende sectie. Het is een korte lijst, en dat is het punt van dit model.",

      insuranceEyebrow: "Waarom wij hier streng in zijn",
      insuranceTitle: "Wat u oplevert moet financierbaar en verzekerbaar zijn",
      insuranceParagraphs: [
        "PGS 37-1 vraagt dat aantoonbaar is dat brand zich niet van de ene eenheid naar de andere voortplant, onderbouwd met NEN-EN-IEC 62933-5-2 of UL 9540A. Een rapport op alleen cel- of moduleniveau voldoet daar niet aan: het moet gaan over de complete eenheid zoals die geïnstalleerd staat. Ontbreekt die onderbouwing, dan gelden er aanvullende maatregelen — zwaardere bluswatervoorziening, grotere afstanden — en vervallen vrijstellingen op brandwerendheid. Voor geclusterde of gestapelde opstellingen komen daar nog eisen bij, waaronder IEC 62619 en NFPA 68.",
        "Verzekeraars hanteren PGS 37-1 als minimum en noemen partiële certificaten expliciet van beperkte waarde. Zonder onderbouwing op systeemniveau volgen aanvullende eisen, een hoger eigen risico, of weigering. En omdat verzekerbaarheid een voorwaarde is in vrijwel elke financieringsovereenkomst, loopt het van daaruit door naar uw financiering. De lat schuift bovendien omhoog: de nieuwste editie van UL 9540A en NFPA 855 nemen de grootschalige brandtest over meerdere eenheden op als hoogste testniveau, en de markt beweegt die kant op.",
      ],
      insuranceListTitle: "Vijf dingen die wij vastleggen voordat er iets besteld wordt",
      insuranceList: [
        {
          title: "Op welk niveau de brandpropagatietest is uitgevoerd",
          body: "En of het rapport de configuratie dekt die er daadwerkelijk komt te staan.",
        },
        {
          title: "Wat de veiligheidsregio van deze locatie vindt",
          body: "Afstanden, bluswater en bereikbaarheid bepalen de layout, en de layout bepaalt wat er past.",
        },
        {
          title: "Welke eisen uw verzekeraar stelt",
          body: "Die kunnen strenger zijn dan de norm, en dat weet u liever vóór de inkoop dan erna.",
        },
        {
          title: "Wat uw financier laat toetsen",
          body: "De independent engineer beoordeelt dezelfde documentatie, dus die maken wij in de vorm waarin hij hem verwacht.",
        },
        {
          title: "Wat de netbeheerder in het contract heeft staan",
          body: "Het gecontracteerde vermogen geldt op het overdrachtspunt, dus hulpvoeding en verliezen tellen mee en horen in de begrenzing.",
        },
      ],
      insuranceFooter:
        "Geen van deze vijf is spannend. Ze zijn alleen duur als u ze overslaat.",

      buildEyebrow: "Van weiland tot netcodetest",
      buildTitle: "Zo bouwen wij",
      buildIntro:
        "Twaalf fasen, van de eerste inmeting tot het moment dat het systeem op het net staat. Hieronder vier fasen; de volledige sequentie, met alle fasen en drie configuraties, staat op een eigen pagina.",
      buildSteps: [
        { fase: 1, label: "Locatie" },
        { fase: 6, label: "Netaansluiting" },
        { fase: 8, label: "Containers" },
        { fase: 12, label: "In bedrijf" },
      ],
      buildCta: "Bekijk de volledige bouwsequentie",

      yourSideEyebrow: "Uw kant",
      yourSideTitle: "Wat er van u wordt gevraagd",
      yourSideStatement: "Vier dingen. Dat is de hele lijst.",
      yourSide: [
        {
          title: "De locatie",
          body: "Een perceel met een grondpositie die de looptijd van het project dekt, of het zicht daarop.",
        },
        {
          title: "De netaansluiting",
          body: "De aansluiting blijft op uw naam. Wij voeren het traject, maar het contract met de netbeheerder is van u.",
        },
        {
          title: "Beslissingen",
          body: "Op vier tot zes momenten hebben wij een besluit van u nodig. Wij leggen elk besluit voor met de opties, de gevolgen en ons advies erbij.",
        },
        {
          title: "Eén aanspreekpunt",
          body: "Iemand bij u die kan beslissen of weet wie dat kan. Meer niet.",
        },
      ],
      yourSideFooter:
        "Verder heeft u van ons geen technische organisatie nodig, en hoeft u er ook geen op te bouwen.",

      fitEyebrow: "Eerlijk over de keuze",
      fitTitle: "Wanneer Full EPC past",
      fitYesTitle: "Dit past bij u als:",
      fitYes: [
        "U geen eigen technische organisatie heeft en die ook niet wilt opbouwen.",
        "U één partij aansprakelijk wilt houden in plaats van een keten van leveranciers waar iedereen naar de ander wijst.",
        "Uw financier om een sluitend dossier uit één hand vraagt.",
        "U de locatie en de netaansluiting heeft, en de rest wilt uitbesteden.",
      ],
      fitNoTitle: "Kijk liever naar een ander model als:",
      fitNo: [
        {
          text: "U een eigen engineeringsafdeling heeft met capaciteit — dan betaalt u bij ons voor werk dat u zelf kunt doen. Kijk naar",
          linkLabel: "Technical Support",
        },
        {
          text: "U de uitvoering zelf doet en alleen de laag erboven mist. Ook",
          linkLabel: "Technical Support",
        },
        {
          text: "U alles zelf kunt behalve scherp inkopen. Kijk naar",
          linkLabel: "Supply Only",
        },
      ],

      faqEyebrow: "Veelgestelde vragen",
      faqTitle: "Wat u waarschijnlijk wilt weten",
      faq: [
        {
          q: "Zijn jullie gebonden aan één leverancier?",
          a: "Nee. Wij hebben gedocumenteerde relaties met meerdere fabrikanten en kiezen per project op basis van uw gebruiksprofiel, de eisen van uw verzekeraar en financier, en de levertijd. Welke dat in uw geval worden, bespreken wij met u voordat er iets vastligt.",
        },
        {
          q: "Wie doet het ontwerp?",
          a: "Wij, met eigen mensen. Het ontwerp wordt extern gestempeld door een onafhankelijke engineeringpartij, zodat er een partij naar kijkt die er geen belang bij heeft.",
        },
        {
          q: "Wat als de netaansluiting vertraagt?",
          a: "Dat gebeurt, en het is meestal de langste lijn in het project. Wij plannen daaromheen: alles wat niet van de aansluiting afhangt, gaat door. In de planning staat de aansluiting expliciet op de kritieke lijn, zodat u ziet wat een verschuiving met de rest doet.",
        },
        {
          q: "Hoe lang duurt een project?",
          a: "Dat hangt vooral af van het netvlak en de vergunning, en veel minder van de bouw zelf. Een indicatie geven zonder uw locatie en netpositie te kennen is een slag in de lucht; dat doen wij liever in het eerste gesprek, met de aannames erbij.",
        },
        {
          q: "Blijven jullie na oplevering betrokken?",
          a: "Ja, in de vorm die u wilt: van een onderhoudscontract tot beschikbaarheid op afroep. In onze eigen ontwikkelingen blijven wij zelf eigenaar, dus wij weten wat er in jaar vijf misgaat.",
        },
        {
          q: "Kunnen jullie ook alleen een deel doen?",
          a: "Ja, daarvoor zijn de andere twee partnermodellen er.",
        },
      ],
      faqModelLinks: ["Technical Support", "Supply Only"],

      ctaTitle: "Heeft u een locatie?",
      ctaSub:
        "Stuur ons de locatie, het netvlak en wat u al aan documentatie heeft. Wij zeggen binnen een week of er iets te bouwen valt en wat daarvoor nodig is.",
      ctaPlan: "Plan een afspraak",
      ctaCall: "Bel direct",
      ctaLinks: {
        hoeWijBouwen: "Hoe wij bouwen",
        partnermodellen: "Alle partnermodellen",
        watWijDoen: "Wat wij doen",
      },
    },
    supplyOnly: {
      tag: "Partnermodel 03",
      heroTitle: "Supply Only",
      heroStandfirst:
        "U ontwerpt, installeert en sluit aan. Wij leveren het batterijsysteem en de omvormers, geplaatst op uw fundatie, en ondersteunen op de punten waar kennis van het batterijsysteem het verschil maakt. Eén prijs, geen losse uren, geen nacalculatie.",

      problemEyebrow: "Waar dit over gaat",
      problemTitle: "Tussen geleverd en werkend zit meer dan een vrachtbrief",
      problemParagraphs: [
        "Een batterijcontainer inkopen lijkt eenvoudig. U kiest een leverancier, u tekent, en een paar maanden later staat er een container bij het hek. Voor een partij die zelf kan ontwerpen en installeren is dat op papier precies genoeg.",
        "In de praktijk zit er tussen die container en een werkend systeem een reeks dingen die in geen enkel contract staan. Sluit de hulpvoeding aan op wat u heeft gepland, en wat doet die bij netuitval? Klopt het aantal doorvoeren met uw kabelontwerp? Wat vindt de veiligheidsregio van deze opstelling op deze afstand? Wie legt de koppeling tussen het batterijmanagement, de omvormers en het energiemanagement, en wie zorgt dat de partij die het systeem verhandelt er straks bij kan? En als er drie fabrikanten komen inbedrijfstellen die elk alleen hun eigen doos aanzetten, wie test dan het geheel?",
        "Dat zijn geen grote posten. Het zijn de posten die een project twee maanden ophouden omdat niemand ze bezit. Wij nemen ze erbij, binnen dezelfde prijs.",
      ],
      problemBlocks: [
        { title: "Geplaatst, niet afgeleverd", body: "Transport, hijswerk en plaatsing op uw fundatie zitten erin." },
        { title: "Getest vóór verscheping", body: "De fabrieksacceptatietest is een mijlpaal, geen formaliteit." },
        { title: "Eén prijs", body: "Geen losse uren, geen nacalculatie, geen optionele posten die later blijken te moeten." },
      ],

      deliveryEyebrow: "De levering",
      deliveryTitle: "Wat er meekomt",
      deliveryIntro:
        "Vijf onderdelen, in één prijs. De eerste twee zijn het materieel. De laatste drie zijn het verschil tussen ons en een importeur.",
      delivery: [
        {
          title: "Het batterijsysteem, geplaatst",
          lead: "Selectie op uw gebruiksprofiel en op wat uw verzekeraar en financier van de documentatie verlangen — niet op wat wij toevallig kunnen leveren.",
          items: [
            "Selectie en inkoop, leveranciersneutraal",
            "Fabrieksacceptatietest vóór verscheping",
            "Transport, hijswerk en plaatsing op uw fundatie",
            "Beoordeling van de brandpropagatiedocumentatie en de garantievoorwaarden",
          ],
        },
        {
          title: "De omvormers",
          lead: "Gedimensioneerd op de ontlaadduur die u wilt halen en op het spanningsniveau waarop u aansluit.",
          items: [
            "Selectie, inkoop en levering op locatie",
            "Afstemming tussen omvormer, batterijmanagement en besturing",
            "Opstelling en aansluiting doet u",
          ],
        },
        {
          title: "Projectondersteuning",
          lead: "De laag waar wij het verschil maken en waar een leverancier u naar de handleiding verwijst.",
          items: [
            "Ontwerpreview op de raakvlakken met uw installatie",
            "Toets aan PGS 37-1 en afstemming met de veiligheidsregio",
            "Leverbegeleiding, van order tot aankomst",
            "Supervisie bij de plaatsing",
          ],
        },
        {
          title: "Besturingskoppeling",
          lead: "Het batterijsysteem praat met de omvormers, de omvormers met het energiemanagement, en het geheel met de partij die het verhandelt. Die keten richten wij in.",
          items: [
            "Koppeling tussen batterijmanagement, omvormers en energiemanagement",
            "Monitoring en toegang op afstand",
            "Interface naar uw handelspartij",
            "Begrenzing op het overdrachtspunt, zodat u binnen uw gecontracteerde vermogen blijft",
          ],
        },
        {
          title: "Inbedrijfstelling en overdracht",
          lead: "De fabrikanten stellen elk hun eigen apparaat in bedrijf. Iemand moet het geheel testen. Dat doen wij.",
          items: [
            "Voorbereiding en begeleiding van de inbedrijfstellingen door de fabrikanten",
            "Integratietest van het complete systeem",
            "Overdracht van dossier, certificaten en garanties",
          ],
        },
      ],
      deliveryNotTitle: "Wat er niet bij zit",
      deliveryNotBody:
        "Transformator, middenspanning en netaansluiting, het civiele werk, het vergunningstraject, het aansluiten zelf en de netconformiteitstest. Dat is uw werk, en het systeemontwerp blijft daarmee ook uw verantwoordelijkheid — wij leveren de gegevens die u daarvoor nodig heeft. Wilt u die laag er wél bij, dan is dat een ander model.",
      deliveryNotLink: "Bekijk Technical Support",

      checkEyebrow: "Voor u tekent",
      checkTitle: "Veertien vragen bij een leveranciersofferte",
      checkIntro:
        "Dit is de lijst die wij zelf aflopen voordat wij een bod van een fabrikant serieus nemen. Hij staat hier omdat hij ook zonder ons bruikbaar is: neemt u de inkoop zelf ter hand, loop hem dan af. De meeste verrassingen in een batterijproject zitten niet in de techniek maar in de kleine lettertjes van de offerte, en ze worden pas zichtbaar als het te laat is om nog iets te kiezen.",
      checkGroups: {
        krijgt: "Wat u krijgt",
        voorwaarden: "Wanneer en onder welke voorwaarden",
        ontwerp: "Wat het met uw ontwerp doet",
      },
      checkItems: {
        commissioning: {
          q: "Zit de inbedrijfstelling in de basisprijs?",
          a: "Commissioning staat regelmatig bij de optionele posten in plaats van in de prijs waarop u vergelijkt. Vraag wat er precies onder valt, hoeveel dagen erbij zitten en wat er gebeurt als het langer duurt.",
        },
        garantie: {
          q: "Wat dekt de garantie precies?",
          a: "Een garantie op een batterijsysteem heeft minstens drie assen: looptijd, aantal cycli en resterende capaciteit. Een bod dat er één noemt, zegt niets. Vraag alle drie, plus de meetmethode.",
        },
        gebruiksvoorwaarden: {
          q: "Onder welke gebruiksvoorwaarden geldt die garantie?",
          a: "Dieper ontladen, vaker cyclen of een hogere omgevingstemperatuur dan aangenomen kan de garantie beperken of laten vervallen. Leg uw eigen gebruiksprofiel naast de voorwaarden voordat u tekent, niet erna.",
        },
        eenheidsprijzen: {
          q: "Zijn de eenheidsprijzen zichtbaar?",
          a: "Eén totaalbedrag laat zich niet doorrekenen. Met de prijs per blok en per station kunt u zelf combinaties uitwerken die de leverancier niet heeft aangeboden. Vraag om de opbouw, niet om korting.",
        },
        uitsluitingen: {
          q: "Wat zit er níet in?",
          a: "Vraag expliciet om de uitsluitingenlijst. Wat een leverancier niet noemt, komt later als meerwerk terug, en dan is er geen alternatief meer.",
        },
        levertijd: {
          q: "Is de levertijd intern consistent?",
          a: "Het komt regelmatig voor dat de samenvatting en de voorwaarden in hetzelfde document maanden uit elkaar liggen. Tel de weken zelf na en vraag welke geldt.",
        },
        startmoment: {
          q: "Vanaf welk moment loopt de levertijd?",
          a: "Vanaf ondertekening, vanaf orderacceptatie, vanaf de aanbetaling of vanaf technische vrijgave? Dat scheelt in de praktijk weken tot maanden, en alleen de laatste hangt van uzelf af.",
        },
        prijsvastheid: {
          q: "Is de prijs vast, of onder voorbehoud?",
          a: "Celprijs en valuta zijn de twee gebruikelijke voorbehouden. Vraag tot wanneer de prijs geldt, wat er precies onder het voorbehoud valt, en wat de bandbreedte is.",
        },
        leveringsconditie: {
          q: "Waar geldt de leveringsconditie?",
          a: "Een DDP-prijs is adresgebonden. Staat er een ander afleveradres in het bod dan waar het systeem terechtkomt, dan klopt de vrachtcomponent niet. Controleer het adres letterlijk.",
        },
        transportrisico: {
          q: "Wie draagt het transportrisico, en tot waar precies?",
          a: "Tot de poort, tot naast de fundatie, of tot de container staat? Die drie liggen in de praktijk ver uit elkaar, en het hijswerk zit er zelden bij.",
        },
        eigendom: {
          q: "Wanneer gaat het eigendom over?",
          a: "Meestal bij volledige betaling, terwijl het risico eerder overgaat. Weet welk moment welk is, en wat er gebeurt als er in de keten iets misgaat.",
        },
        brandtestniveau: {
          q: "Op welk niveau is de brandtest uitgevoerd?",
          a: "Cel, module of de complete eenheid zoals hij geïnstalleerd staat? PGS 37-1 verlangt onderbouwing op systeemniveau. Een rapport op celniveau is voor uw verzekeraar van beperkte waarde.",
        },
        configuratiedekking: {
          q: "Dekt het testrapport de configuratie die u koopt?",
          a: "Bij een systeem met componenten van meerdere leveranciers moet de test de geïnstalleerde combinatie dekken. Losse componenttests bij elkaar optellen mag niet.",
        },
        hulpvoeding: {
          q: "Wat verbruikt de hulpvoeding, en wat gebeurt er bij netuitval?",
          a: "Het hulpverbruik telt bij laden op bij uw afname en dus bij uw gecontracteerde vermogen op het overdrachtspunt. En valt de voeding weg bij netuitval, dan heeft dat gevolgen voor koeling, besturing en black start. Dit getal ontbreekt vaker wel dan niet op een datasheet.",
        },
      },
      checkFooter:
        "Neemt u de inkoop zelf ter hand, dan is deze lijst van u. Loopt u er onderweg op vast, dan kijken wij mee.",

      buyEyebrow: "Onze werkwijze",
      buyTitle: "Wij vergelijken geen offertes, wij halen ze uit elkaar",
      buyParagraphs: [
        "Drie offertes naast elkaar leggen en de laagste kiezen, is geen inkoop. De configuraties verschillen, de uitsluitingen verschillen, en de prijs per kWh waarmee ze zichzelf presenteren is bijna nooit op hetzelfde gerekend. Wat wij doen is het bod terugbrengen tot de eenheidsprijzen erachter: wat kost een blok, wat kost een station, wat kost het meerdere.",
        "Zodra die er liggen, kun je rekenen. Combinaties die de leverancier niet heeft aangeboden blijken dan regelmatig gunstiger dan de varianten die hij wél voorlegde — meer opslag voor minder geld, of hetzelfde voor minder eenheden, wat weer scheelt in funderingen, kabelwerk en terreinoppervlak. Die vraag stellen wij terug aan de leverancier, onderbouwd met zijn eigen cijfers. Dat is een ander gesprek dan om korting vragen.",
      ],
      buyPoints: [
        { title: "Wij vragen om de opbouw, niet om een totaalprijs", body: "Zonder eenheidsprijzen valt er niets door te rekenen." },
        { title: "Wij toetsen tegen uw gebruiksprofiel, niet tegen een andere offerte", body: "De goedkoopste configuratie is zelden de configuratie die past bij hoe u het systeem gaat inzetten." },
        { title: "Wij rekenen de niet-aangeboden varianten door", body: "En leggen die terug bij de leverancier met zijn eigen cijfers eronder." },
        { title: "Wij zijn erbij bij de fabrieksacceptatietest", body: "Of u bent erbij. Wat daarna op transport gaat, is bewezen materieel." },
        { title: "Wij dragen het dossier over, niet alleen het systeem", body: "Certificaten, testrapporten, garantievoorwaarden en de gegevens die u nodig heeft voor uw eigen ontwerp en uw netconformiteitstest." },
      ],

      yourSideEyebrow: "Uw kant",
      yourSideTitle: "Wat bij u blijft",
      yourSide: [
        { title: "Het systeemontwerp", body: "U ontwerpt de installatie waar ons systeem in landt, en die verantwoordelijkheid blijft bij u. Wij leveren de gegevens die u daarvoor nodig heeft." },
        { title: "De fundatie en het civiele werk", body: "Wij plaatsen op wat u heeft voorbereid. Maten, belastingen en doorvoeren krijgt u van ons ruim voor de levering." },
        { title: "Transformator, middenspanning en aansluiting", body: "Uw scope, uw contract met de netbeheerder." },
        { title: "Aansluiten en netconformiteit", body: "Het aansluitwerk en de netconformiteitstest doet u. Wij leveren de documentatie die u daarbij nodig heeft." },
      ],

      fitEyebrow: "Eerlijk over de keuze",
      fitTitle: "Wanneer Supply Only past",
      fitYesTitle: "Dit past bij u als:",
      fitYes: [
        "U een eigen technische organisatie heeft die kan ontwerpen en installeren.",
        "U het systeemontwerp en de aansluiting zelf wilt houden.",
        "U wilt inkopen bij een partij die de techniek kent, maar geen aannemer over de vloer wilt.",
        "U een vaste prijs wilt zonder losse uren en zonder nacalculatie op de ondersteuning.",
      ],
      fitNoTitle: "Kijk liever naar een ander model als:",
      fitNo: [
        { text: "U de uitvoering aankan maar het ontwerp en de contractuele laag mist. Kijk naar", linkLabel: "Technical Support" },
        { text: "U helemaal geen technische organisatie heeft en het hele project wilt uitbesteden. Kijk naar", linkLabel: "Full EPC" },
      ],

      faqEyebrow: "Veelgestelde vragen",
      faqTitle: "Wat inkopers ons vooraf vragen",
      faq: [
        { q: "Zitten jullie vast aan één fabrikant?", a: "Nee. Wij hebben gedocumenteerde relaties met meerdere fabrikanten en geen exclusiviteit bij één van hen. Wij houden ook geen voorraad aan die weg moet. De selectie volgt uw gebruiksprofiel en de eisen van uw verzekeraar en financier." },
        { q: "Kan ik zelf de fabrikant kiezen?", a: "Ja. Heeft u al een voorkeur, dan kopen wij daar in en doen wij de rest van het werk. Wij zeggen er wel bij wat wij van die keuze vinden, ook als u dat niet vraagt." },
        { q: "Wat als de levering vertraagt?", a: "Levertijden op batterijsystemen lopen in maanden en schuiven regelmatig. Wij volgen de order van bevestiging tot aankomst en melden een verschuiving zodra wij hem zien, niet als hij al gevolgen heeft voor uw planning." },
        { q: "Kunnen jullie ook alleen een offerte beoordelen?", a: "Ja. Dat is een afgebakende opdracht: u stuurt het bod, wij lopen het na op de punten uit de lijst hierboven en komen met de vragen die u terug moet stellen. Daar hoeft geen levering achteraan te komen." },
        { q: "Wat gebeurt er als er iets stuk gaat?", a: "De fabrieksgaranties dragen wij aan u over, met de voorwaarden erbij. Voor de afhandeling kunt u ons inschakelen; wij kennen de route en de taal, en dat scheelt in de praktijk maanden." },
        { q: "Leveren jullie ook los onderdelen?", a: "Dat hangt van het onderdeel af. Een complete installatie uit losse componenten samenstellen is zelden verstandig, onder meer omdat het testrapport dan de geïnstalleerde combinatie moet dekken. Leg het voor, dan zeggen wij of het kan." },
      ],

      ctaTitle: "Ligt er een offerte klaar?",
      ctaSub:
        "Stuur hem door. Wij lopen hem na op de veertien punten hierboven en komen binnen een week terug met de vragen die u terug moet stellen. Dat kost u niets en het verplicht u tot niets.",
      ctaPlan: "Plan een afspraak",
      ctaCall: "Bel direct",
      ctaLinks: {
        partnermodellen: "Alle partnermodellen",
        technicalSupport: "Technical Support",
        fullEpc: "Full EPC",
      },
    },
    hoeWijBouwen: {
      heroEyebrow: "Werkwijze",
      heroTitle: "Hoe wij bouwen",
      heroStandfirst:
        "Twaalf fasen, van de eerste inmeting tot het moment dat het systeem op het net staat. Scroll door de fasen en de tekening loopt mee. Kies bovenaan een configuratie: aansluiting op middenspanning, op hoogspanning, of naast een bestaand zonnepark.",
      ctaTitle: "Benieuwd wat dit voor uw locatie betekent?",
      ctaSub:
        "De sequentie hierboven is een referentie. Wat er op uw perceel past, hangt af van het netvlak, de ruimte en de vergunning.",
      ctaButton: "Plan een afspraak",
      ctaLinks: {
        fullEpc: "Full EPC",
        watWijDoen: "Wat wij doen",
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
      aboutLabel: "Over ons",
      heroTitle: "Gebouwd door mensen die dit vak kennen",
      heroStandfirst:
        "Gridstate is een jong bedrijf met drie mensen die batterijopslag al bouwden voordat het bestond. Hieronder wie dat zijn, hoe wij werken, en waarom wij een aantal dingen anders doen dan gebruikelijk is in deze markt.",

      teamLabel: "Het team",
      callAboutLabel: "Bel hem over",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Oprichter",
      emielBio:
        "Emiel voert de technische regie over de projecten: van systeemontwerp en leverancierskeuze tot wat er op de bouwplaats gebeurt. Hij schrijft de technische voorstellen zelf, en hij is degene die tegen een ontwerp zegt dat het nog niet klaar is.",
      emielTopics: ["systeemontwerp", "uitvoering", "leverancierskeuze"],
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercieel Directeur & Mede-eigenaar",
      lucasBio:
        "Lucas bouwt de businesscases en voert de gesprekken met opdrachtgevers, investeerders en financiers. Hij rekent elk model zelf na voordat het de deur uit gaat, en hij is het aanspreekpunt als u wilt weten wat een samenwerking in uw geval zou betekenen.",
      lucasTopics: ["businesscases", "samenwerkingsvormen", "investeringen"],
      shaneName: "Shane Konijnenberg",
      shaneRole: "Operationeel Directeur",
      shaneBio:
        "Shane is elektrochemisch ingenieur en verantwoordelijk voor de lijn van ontwerp naar oplevering: engineering, projectmanagement, uitvoering en aftersales. Waar een systeem zich anders gedraagt dan het datasheet belooft, is hij degene die uitzoekt waarom.",
      shaneTopics: ["engineering", "projectmanagement", "aftersales"],

      storyLabel: "Ons verhaal",
      storyTitle: "Waarom wij dit zijn begonnen",
      storyParagraphs: [
        "Wij hebben alle drie binnen bestaande organisaties aan energieprojecten gewerkt, en daar hetzelfde patroon gezien. Naarmate een bedrijf groeit, wordt volume belangrijker dan de vraag of iets klopt. Het ontwerp wordt een formaliteit op weg naar de order. De documentatie komt achteraf. En de partij die het moet bouwen, krijgt een dossier waar hij niets mee kan.",
        "Dat gaat niet mis bij het eerste project. Het gaat mis bij het project waar de netbeheerder iets anders wil dan aangenomen, of waar de verzekeraar vraagt op welk niveau de brandtest is gedaan. Dan blijkt dat de beslissing die dat had moeten voorkomen, een jaar eerder onderweg is genomen door iemand die haast had.",
        "Gridstate is opgezet om dat om te draaien: eerst uitzoeken, dan ontwerpen, dan bouwen. Dat kost aan het begin meer tijd en het is aan het begin een minder vlot verhaal. Het levert wel een project op dat de toets van een financier en een verzekeraar doorstaat, en een klant die halverwege niet voor verrassingen komt te staan.",
      ],

      principlesLabel: "Onze werkafspraken",
      principlesTitle: "Vijf afspraken met onszelf",
      principlesIntro:
        "Dit zijn geen kernwaarden op een poster. Het zijn afspraken die bepalen wat wij wel en niet in een document zetten, en ze zijn er omdat de verleiding om ze te overtreden in elk project terugkomt.",
      principles: [
        {
          title: "Wij noemen geen merken in klantstukken",
          desc: "In onze technische documenten staan geen leveranciersnamen of typeaanduidingen. Een ontwerp dat om een specifiek merk heen is geschreven, laat u geen keuze meer, en het maakt het onmogelijk om later te vergelijken. Wij schrijven op eigenschappen en normen, en de merkkeuze komt daarna.",
        },
        {
          title: "Ons ontwerp gaat langs een externe stempel",
          desc: "Het ontwerp wordt getoetst en gestempeld door een onafhankelijke engineeringpartij. Dat is geen wettelijke verplichting en het kost tijd. Het zorgt er wel voor dat er iemand naar kijkt die er geen belang bij heeft, en dat is precies waarom wij het doen.",
        },
        {
          title: "Open punten blijven zichtbaar",
          desc: "Als er in een berekening iets niet sluit en wij weten nog niet waarom, dan blijft dat als open punt in het stuk staan. Het is verleidelijk om zo'n regel weg te poetsen voordat het naar een klant gaat. Wie dat doet, levert een document af dat er beter uitziet dan het is, en dat komt altijd terug.",
        },
        {
          title: "Wat een ander aanlevert, rekenen wij na",
          desc: "Een opbrengstverwachting, een simulatierapport of een businesscase van een verkopende partij is voor ons invoer, geen uitgangspunt. Wij bouwen de berekening opnieuw op uit de onderdelen, ook als dat de zaak vertraagt en ook als wij op hetzelfde uitkomen.",
        },
        {
          title: "Elk getal heeft een bron",
          desc: "Elk cijfer dat in een document van ons staat, is terug te voeren op een berekening, een datasheet of een norm. Aannames en bronnen staan als eigen hoofdstuk in het stuk, niet in een voetnoot. Wat geen bron heeft, staat er niet — ook geen kansinschatting in procenten, want die suggereert een precisie die er niet is.",
        },
      ],

      statsLabel: "In cijfers",
      statsTitle: "Waar deze getallen vandaan komen",
      statItems: [
        {
          label: "Gerealiseerd",
          source: "Door dit team gebouwd bij eerdere werkgevers, vóór Gridstate bestond.",
        },
        {
          label: "In eigen ontwikkeling",
          source: "Projecten waarvan wij zelf de ontwikkeling voeren, in verschillende stadia.",
        },
        {
          label: "Actieve projecten",
          source: "Trajecten waar op dit moment aan gewerkt wordt, voor klanten en voor onszelf.",
        },
        {
          label: "Doorgerekende businesscases",
          source: "Volledige modellen, opgebouwd uit de componenten en nagerekend in een tweede omgeving.",
        },
      ],
      statsFooter:
        "Wij zetten er geen getal bij dat wij niet kunnen navertellen. Daarom staat hier geen omzetcijfer en geen aantal gerealiseerde projecten per persoon.",

      whyUsLabel: "Waarom wij",
      whyTitle: "Waarom Gridstate",
      whyQuote: "Wij zijn niet de snelste partij aan tafel, en dat is een keuze.",
      whyPoints: [
        {
          title: "Wij bouwen ook voor onszelf",
          desc: "In onze eigen ontwikkelingen nemen wij een belang en blijven wij eigenaar. Elke ontwerpkeuze die op korte termijn geld bespaart en op lange termijn geld kost, komt bij ons zelf terug.",
        },
        {
          title: "Wij kennen de Benelux-procedures",
          desc: "Netaansluiting, vergunning, veiligheidsregio en netcode: dat zijn per land en per netbeheerder andere trajecten, en de doorlooptijd ervan bepaalt uw planning meer dan de bouw.",
        },
        {
          title: "Wij verkopen geen merk",
          desc: "Wij hebben relaties met meerdere fabrikanten en bij geen van hen een exclusiviteit. Ons advies over celchemie, fabrikant of configuratie is daardoor niet gekleurd.",
        },
        {
          title: "Wij zeggen het als het niet werkt",
          desc: "Als een case niet rondkomt, zeggen wij dat — ook wanneer wij onszelf daarmee uit een opdracht praten. Dat is op de lange termijn goedkoper voor iedereen.",
        },
      ],

      careersLabel: "Werken bij ons",
      careersTitle: "Wij groeien, voorzichtig",
      careersIntro:
        "Wij nemen mensen aan als er werk is dat blijft liggen, niet om te kunnen zeggen dat wij gegroeid zijn. Dat betekent dat er zelden een vacature online staat en dat de meeste mensen hier via een gesprek binnenkomen dat over iets anders begon.",
      careersListIntro: "Waar wij naar zoeken, als het zover is:",
      careersList: [
        "Iemand die een berekening liever twee keer maakt dan één keer met een aanname.",
        "Iemand die een open punt benoemt in plaats van het glad te strijken.",
        "Iemand die een klant durft te vertellen dat iets niet kan.",
      ],
      // {email} is filled from siteConfig.company.email and rendered as a link.
      careersOutro:
        "Herkent u zich daarin en wilt u weten of er iets zou passen: stuur een bericht aan {email}. Wij lezen alles en antwoorden ook als er niets is.",
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
      howWeBuild: "How we build",
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
        "We develop ourselves and we build for others. That means you can join us in a project, or bring us in to test what someone else is putting in front of you. Either way you get the same substantiation — we make no distinction between a document written for ourselves and one written for you.",

      audienceEyebrow: "Who we work for",
      audienceTitle: "Four kinds of party, four kinds of question",
      audienceIntro:
        "Battery storage attracts very different investors, and they do not ask the same question. Below is who we focus on and what each of them usually needs from us.",
      audienceDoLabel: "What we usually do",
      audience: [
        {
          title: "Funds looking to diversify",
          body: "You hold a portfolio in renewable generation and want to put storage alongside it, because the return profile and the risks are different in kind from solar and wind. The question is then rarely whether battery storage works, but whether you can assess, deliver and manage it without building a department for it.",
          doBody: "Deliver the technical and modelling substantiation your investment committee can decide on, and build the project afterwards.",
        },
        {
          title: "Joint ventures with infrastructure funds",
          body: "You bring capital and an investment horizon; we bring projects, delivery and the operational side. The conversations that then have to happen are about roles, control, the moments at which decisions are made, and how both parties' interests stay on the same side.",
          doBody: "Work out the division of roles and the governance openly, before anyone talks numbers.",
        },
        {
          title: "IPPs and existing operators",
          body: "You already operate solar or wind parks and are looking at storage on existing or new positions. You have technical people of your own, but battery storage behaves differently from generation: the revenue comes from several markets at once and the grid connection becomes the limiting factor.",
          doBody: "Calculate what storage on your existing positions yields, and then build those positions or support your own team.",
        },
        {
          title: "Private investors and family offices",
          body: "You invest your own capital, often in one project at a time, and you want to understand what you are stepping into without a layer of advisers in between. What you need is a document that explains itself and someone who answers the questions behind it.",
          doBody: "Build the case as described below, and walk through it with you until you can retell it yourself.",
        },
      ],
      audienceFooter:
        "Do none of the four describe you? Then the conversation is probably still worth having, but do say where you are coming from.",

      entriesEyebrow: "Three entry points",
      entriesTitle: "Join in, look along, or have it recalculated",
      entryStepLabel: "The first step",
      entries: [
        {
          title: "Participation in our projects",
          desc: "We have over {mwh} in own development. For part of that, we are looking for parties who want to co-invest, with or without operational involvement. You get access to the full model, the permit dossier and the grid position up front — not only during due diligence.",
          step: "A conversation and, once there is mutual interest, access to the full dossier under a confidentiality agreement.",
        },
        {
          title: "Support on your own acquisitions",
          desc: "If you are buying a project, a park or a portfolio, we verify what is actually there: grid position, permit status, design choices, remaining lifetime and the obligations that come with it. And if a battery can be added, we calculate what that does to the coverage ratio of the whole.",
          step: "You send what you have; within a week we say what we would verify and what that costs.",
        },
        {
          title: "Validation of a business case",
          desc: "We recalculate the model down to the component. With an optimizer's revenue report we check whether the total line matches the sum of the parts — and it doesn't always. With a bandwidth on balancing power we take the lower bound as the base, not the middle: the middle is not a neutral choice but an assumption of extra revenue.",
          step: "The model and the underlying revenue report; we come back with the findings and the questions you should put to them.",
        },
      ],

      failEyebrow: "From practice",
      failTitle: "Five places where a business case gives way",
      failIntro:
        "A model that comes out well is not the same as a case that holds. These are the five points where we see most cases shift in practice, in the order they usually present themselves.",
      fails: [
        {
          title: "The connection limits operation more than the model shows",
          body: "The contracted capacity applies at the transfer point with the grid operator, not at the inverter terminals. Transformer losses and auxiliary power add to your offtake while charging, so usable capacity is lower than installed capacity. Models that calculate on installed capacity are therefore structurally too optimistic.",
        },
        {
          title: "The total line of a revenue report does not match its parts",
          body: "Optimizers and trading parties deliver reports with an annual total. Adding up what sits underneath does not always give the same figure. We therefore build a case from the components rather than the totals, and if the difference cannot be explained, it stays in the document as an open point.",
        },
        {
          title: "The middle of a bandwidth is taken as the base",
          body: "For balancing power a lower and an upper bound are often given. Choosing the middle feels neutral, but it is an assumption of extra revenue. We calculate the base case on the lower bound and show what the excess would do, so the case holds even if that excess does not materialise.",
        },
        {
          title: "The debt ratio only fits revenue that does not exist yet",
          body: "High gearing is defensible with floored or tolled revenue and not with fully market-dependent revenue. Cases that assume one structure and carry the financing of the other break at the first disappointing period — not in the return, but in the covenant.",
        },
        {
          title: "The residual value carries the return",
          body: "With a short horizon and no residual value the return looks low while the coverage ratio is fine. With a generous residual value the opposite happens and a mediocre case looks acceptable. We always show both figures and state what the residual value assumption does to the result.",
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
          title: "Return and coverage ratio together",
          desc: "The two can tell opposite stories about the same model. A short horizon without residual value gives a low IRR while the coverage ratio looks fine. We show both and explain the difference.",
        },
        {
          title: "The room to break-even",
          desc: "The most useful number is not the IRR but how much revenue can disappoint before the covenant breaks. With us, that is in the summary.",
        },
        {
          title: "Fixed thresholds, whoever is asking",
          desc: "Every model is tested against a fixed return threshold and a minimum coverage ratio. If a case does not clear them, we do not put it forward — not even with a note explaining why it is different this time. What those thresholds are belongs in a conversation rather than on a web page, but they do not shift per counterparty.",
        },
        {
          title: "A seller's projections are recalculated, not adopted",
          desc: "Whatever revenue expectation the selling party supplies is input, not a starting point. We recalculate it at the two places where it goes wrong in practice: the revenue from frequency services and the operating costs.",
        },
      ],

      memoEyebrow: "The document",
      memoTitle: "What you get in hand",
      memoIntro:
        "A business case from us is not a presentation with four slides. It is a memorandum that explains itself, with the assumptions and the sources as their own chapter rather than a footnote. Below is how it is built up. Click a chapter for the question it answers.",
      memoFeaturesLabel: "Fixed characteristics",
      memoFeatures: [
        "Assumptions and sources as their own chapter",
        "Base case and downside scenario",
        "Open points stay visible",
      ],
      memoChapters: [
        { title: "Assignment, approach and accountability", question: "What exactly was examined, with which data, and what was not examined?" },
        { title: "Technical starting position", question: "What is there now, what are the dimensions and how is it connected?" },
        { title: "Connection capacity and its effect on operation", question: "What can actually pass over the connection, and what does that mean for revenue?" },
        { title: "The configurations calculated", question: "Which variants were examined in capacity, storage duration and layout?" },
        { title: "Substantiation of the configuration choice", question: "Why this variant, and what do you give up by not choosing the others?" },
        { title: "Nature and bandwidth of the revenues", question: "Which markets does the revenue come from, how certain is each part and what is the spread?" },
        { title: "Operating result in the base case", question: "What does it yield under the assumptions we consider defensible?" },
        { title: "Downside scenario", question: "What happens if the least certain part of the revenue falls away?" },
        { title: "Comparison of the scenarios", question: "Where exactly is the difference, and which part of the result depends on it?" },
        { title: "Financing and coverage ratio", question: "How much debt can this case carry, and how much room does the covenant keep?" },
        { title: "Sensitivity analysis", question: "At what change in which assumption does the picture tip?" },
        { title: "Risks and mitigation", question: "What can go wrong, how likely is it and what do we do about it?" },
        { title: "Conclusion and next steps", question: "What is the verdict, and what has to happen first?" },
        { title: "Annexes: assumptions, sources and the underlying simulation", question: "Where does every number come from?" },
      ],
      memoNot:
        "What is not in it is a probability estimate in percentages. We give no percentage on the feasibility of a permit or a grid connection, because that suggests a precision that does not exist. What is in it is which conditions have to be met and what happens if they are not.",

      dualEyebrow: "The question you are about to ask",
      dualTitle: "Are you my co-shareholder or my contractor?",
      dualParagraphs: [
        "In our own developments, both. We take a stake in the projects we build and stay a shareholder in them. That is a deliberate choice and it has an advantage you do not get from a contractor who leaves after handover: every design choice that saves money in the short term and costs money in the long term comes back to us. We build what we want to own ourselves for twenty years.",
        "It also creates a tension, and we are not coy about it. If we are both shareholder and builder, we partly set the terms on which we award ourselves the work. That is why we fix those terms in advance, before participation is discussed: the scope, the division of roles and the way the price is arrived at are settled before your signature. What you make of that belongs in your decision to join.",
        "If you invest in a project you found yourself and only ask us to recalculate or build it, none of this applies. Then we are a supplier and nothing more, and that is a perfectly good role.",
      ],

      honestTitle: "What we are honest about",
      honestBody:
        "We do not adopt a seller's projections without recalculating them ourselves, even if that delays the deal. We give no probability estimates in percentages, because they suggest a precision that isn't there. And if the case doesn't work, we say so — even when that talks us out of an assignment.",

      quizEyebrow: "In two minutes",
      quizTitle: "Which entry point fits you?",
      quizIntro:
        "Five questions. At the end you will see which of the three entry points is the obvious one and what the first step then is. Nothing is sent until you click to send it, and nothing is stored.",
      quizProgress: "Question {current} of {total}",
      quizBack: "Previous question",
      quizRestart: "Start over",
      quizDiscuss: "Discuss this with us",
      quizResultLabel: "The obvious starting point",
      quizCaveatLabel: "Honestly though",
      quizDefaultedNote:
        "Your answers give a mixed picture. In that case this is the smallest first step: start with one case, and the rest becomes clear from there.",
      quizCaveats: {
        participatie:
          "If you want full control over the operation, joining a project of ours is probably not what you are after. Buying a position of your own makes more sense then, and we can be the builder in it.",
        acquisitie:
          "If you have a team that does this kind of verification routinely, what you are buying from us is mainly a second opinion. That can be valuable, but it is a smaller assignment than you might expect.",
        validatie:
          "If there is no model yet, there is little to recalculate. A conversation about the starting points is then more useful than a validation, and it costs you less.",
      },
      quizQuestions: [
        {
          question: "What do you have in hand right now?",
          answers: [
            "A project or portfolio I am considering buying",
            "A model or report I am not sure about",
            "Nothing concrete yet; I am exploring this market",
            "Positions of my own where I want to add storage",
          ],
        },
        {
          question: "What kind of party are you?",
          answers: [
            "A fund looking to diversify the portfolio",
            "An infrastructure fund considering a partnership",
            "An operator with generation of its own",
            "A private investor or family office",
          ],
        },
        {
          question: "Which weighs more heavily?",
          answers: [
            "A predictable result, with less control",
            "Control and visibility of the operation",
            "First understanding whether this market is for me",
          ],
        },
        {
          question: "Do you have technical capacity of your own?",
          answers: [
            "No",
            "Yes, for generation but not for storage",
            "Yes, but without room for this project",
            "Yes, I am only looking for a second opinion",
          ],
        },
        {
          question: "Where is your biggest doubt?",
          answers: [
            "Whether the assumptions behind the revenue hold",
            "Whether the connection does what is claimed",
            "Whether the financing structure holds",
            "Whether the party on the other side can deliver",
          ],
        },
      ],

      ctaTitle: "Shall we start with one case?",
      ctaSub:
        "Send us a model, a revenue report or a project you are considering. Within a week we will come back with what we would verify and what we make of it. That costs you nothing and commits you to nothing.",
      ctaPlan: "Book a meeting",
      ctaCall: "Call us directly",
      ctaLinks: {
        projecten: "Our projects",
        hoeWijBouwen: "How we build",
        watWijDoen: "What we do",
      },
      disclaimer:
        "This page is general information about how we work and what we offer, and is not an offer, advice or a recommendation to make an investment.",
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
          extra: "A schedule with a named critical path, a dossier that stands up to review by your financier and your insurer, and one project lead you know throughout the entire project.",
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
            "You design, install and connect. We supply the system placed on your foundation, and support you on the points where knowing the battery system makes the difference.",
          cardFeatures: ["Placed on your foundation, not dropped off at the gate", "Design review, PGS 37-1 and control integration included", "Integration test and handover of the complete dossier"],
          ideal: "Builders and installers with their own technical organisation",
          weDo: [
            { lead: "", text: "Selection and procurement of the equipment, factory testing per unit, transport and intake on site, and the complete documentation including certificates and warranty terms." },
          ],
          weDoLink: false,
          youDo: "The system design, the civil works, the connection and grid compliance.",
          whenFits: [
            "You build regularly and have your own technical organisation.",
            "You don't want to be tied to one manufacturer and are looking for a party that selects supplier-neutrally.",
            "You want certainty about exactly what is delivered, including the propagation evidence and the warranty terms.",
          ],
          extraTitle: "Why this is more than buying",
          extra: "A supplier puts a container at the gate. Between that moment and a working system sit the interfaces with your installation, the safety dossier, the control integration and an integration test that goes further than what each manufacturer does for their own device. That is what we take on.",
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
      ruleOurs: "If your client has to approve the document, we produce it.",
      ruleYours:
        "If it is about how the work on site is organised and carried out, it is yours.",
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

      rolEyebrow: "Division of roles",
      rolTitle: "Who does what",
      rolIntro:
        "Twelve parts, in three groups. This is how we divide the work as standard with a contractor who carries out the execution and places the layer above it with us. It is a starting point, not a template: on every project some lines move, and we would rather have that conversation at the start than halfway through.",
      rolFooter:
        "What sits with you here, we cannot take over. What sits with us, you can always keep yourself — it simply becomes a smaller assignment.",
      rolRoles: {
        u: "You",
        gridstate: "We",
        samen: "Together",
      },
      rolGroups: {
        ontwerp: "Design and calculations",
        contract: "Contract and documentation",
        uitvoering: "Execution and coordination",
      },
      rolItems: {
        systeemontwerp: {
          label: "System and site design",
          note: "Layout, cable routes, single-line diagram and the positioning of units and transformer stations.",
        },
        berekeningen: {
          label: "Electrical calculations",
          note: "Cable loading, short-circuit, selectivity and auxiliary power balance, verified against the applicable standards.",
        },
        civiel: {
          label: "Civil design",
          note: "Foundations, roads, drainage, firefighting water and trench profiles. If you would rather outsource it, we write the specification.",
        },
        onderzoek: {
          label: "Specialist studies",
          note: "Earthing, lightning protection, ground investigation and thermal measurements. We write the specification and assess the result; a specialist firm carries it out.",
        },
        bod: {
          label: "The documents with the bid",
          note: "The technical proposal, the engineering documents, the construction programme with the critical path, and the substantiation of deviations from the contract terms.",
        },
        prijs: {
          label: "Price and costing",
          note: "We build up the price schedule and check it for completeness against the scope. Your cost prices and your margin stay yours.",
        },
        documentregister: {
          label: "Document register and reporting",
          note: "The register of everything to be delivered, control of revisions and approval status, and the periodic progress report.",
        },
        contractering: {
          label: "Contracting and securities",
          note: "You are the contracting party, you sign the subcontractor contracts and provide the guarantees.",
        },
        fysiek: {
          label: "All physical execution",
          note: "Civil and electrical, with your own people and equipment.",
        },
        projectleiding: {
          label: "Site management",
          note: "Execution management and the statutory roles on site stay with you. We do not take them over.",
        },
        interfaces: {
          label: "Interfaces with the other parties",
          note: "Tracking the interfaces with the supplier, the other contractors and the grid operator, recorded in a single register.",
        },
        tests: {
          label: "Testing, energisation and as-built",
          note: "We produce the test plans and the as-built dossier; you supply the execution data and do the work on site.",
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
            { title: "Questions and processing", desc: "We draft the technical and contractual questions and work the answers through all documents." },
            { title: "Engineering with the bid", desc: "Site layout, single-line diagram and cable calculations, at the level of detail a bid calls for." },
            { title: "Quantities and price build-up", desc: "The electrical bill of quantities and the build-up of the price schedule, checked for completeness against the scope." },
            { title: "Programme and deviations", desc: "The construction programme with the critical path, and for each deviation from the contract terms the technical reason with an alternative proposal." },
            { title: "Assembly and negotiation", desc: "The complete submission in your house style, and attendance at the meetings through to signature." },
          ],
        },
        {
          tab: "Phase 2 · Detailed engineering",
          title: "Detailed engineering",
          intro:
            "Starts at award and runs up to and including approval of the design documents and the design freeze. With a project-financed client the financier needs the approved design documents, so this track sits on the critical path to financial close. If it slips, the money slips.",
          items: [
            { title: "Final design", desc: "System and site layout with cable routes, aligned with your civil design and the supplier's positioning." },
            { title: "Calculations for approval", desc: "Cable loading, short-circuit and electrodynamic force to the applicable standards, in the form your client accepts." },
            { title: "Auxiliary power and site installations", desc: "Design of the redundant auxiliary supply, the site lighting and the interface with access control and SCADA." },
            { title: "Specifications for subcontractors", desc: "One working document per package covering scope, standards, quantities, interfaces and acceptance criteria, plus the technical assessment of the offers." },
            { title: "Approval rounds", desc: "Steering the reviews and processing the comments, up to the design freeze." },
          ],
        },
        {
          tab: "Phase 3 · Construction support",
          title: "Construction support",
          intro:
            "Starts with the preparation of the works and runs up to and including acceptance of the as-built dossier. You build and you run the work on site. We keep the documentary and contractual track towards your client up to date and manage the interfaces with the other parties on site.",
          items: [
            { title: "Project management and safety plan", desc: "Work breakdown, processes, hold and witness points, plus the health and safety plan, the emergency plan and the electrical safety plan in the contract language." },
            { title: "Document control", desc: "Ongoing control of every document towards the client, including revisions and approval status." },
            { title: "Progress reporting", desc: "Milestones, scope changes, critical path, financial status, the main risks and safety." },
            { title: "Interface control", desc: "Resolving interfaces between the supplier, the other contractors, the grid operator and the subcontractors, and the technical assessment of design changes during construction." },
            { title: "Testing, energisation and handover", desc: "Test plans, attendance at SAT and grid-code tests, and the complete as-built dossier in pdf and dwg." },
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
        "Five questions. At the end you will see which of the three shapes below is the obvious one, and which parts of the division of roles above would then sit with us. Nothing is sent until you click to send it.",
      intakeProgress: "Question {current} of {total}",
      intakeBack: "Previous question",
      intakeRestart: "Start over",
      intakeDiscuss: "Discuss this with us",
      intakeResultLabel: "The obvious starting point",
      intakePackagesLabel: "Parts that would then sit with us",
      intakePackagesNote:
        "Derived from the same division of roles as above. On every project some lines move.",
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
    fullEpc: {
      tag: "Partner model 01",
      heroTitle: "Full EPC",
      heroStandfirst:
        "We take over the entire project: design, permitting, procurement, civil works, electrical works, commissioning and handover. You provide the site and the grid connection, and you decide. What we deliver is designed to be insurable and financeable — not merely to work.",

      problemEyebrow: "What this is about",
      problemTitle: "Working is not the same as acceptable",
      problemParagraphs: [
        "A battery storage system that performs properly on site is not yet a battery storage system an insurer wants to cover or a financier wants to fund. That difference does not sit in the execution. It sits in what was established before anything was ordered.",
        "Most of the discussions that delay a project are about evidence. Was the fire propagation test carried out on the installation as it stands, or only on a cell or a module? Does the report cover the configuration you actually had built, or is it added up from separate component tests? Do the separation distances match the safety region's advice? Have the grid-code obligations been demonstrably met? Those are the questions an independent engineer asks during technical due diligence, and an insurer asks at acceptance. By that point, correcting course is expensive.",
        "We design towards those questions from the first drawing. Not because it looks tidy, but because it is the only order that works: build first and document afterwards, and you build the argument in.",
      ],
      problemBlocks: [
        {
          title: "At system level",
          body: "A propagation test at cell or module level is of limited value to an insurer.",
        },
        {
          title: "On the installed configuration",
          body: "Adding up separate component tests does not cover the installation.",
        },
        {
          title: "Before procurement",
          body: "What the standard requires determines what you can buy — not the other way around.",
        },
      ],

      scopeEyebrow: "The scope",
      scopeTitle: "Everything that is in it",
      scopeIntro:
        "“Turnkey” is a word everyone reads differently. Below, per phase, is what is in it and where the risk lies. Under Full EPC almost everything sits with us; what stays with you is stated as well.",
      scopeTabLabel: "Phase",
      scopeExampleLabel: "For example",
      scopePhases: {
        ontwerp: { tab: "Design", title: "Design, permitting and grid position" },
        inkoop: { tab: "Procurement", title: "Procurement and specification" },
        bouw: { tab: "Construction", title: "Construction, control and commissioning" },
      },
      scopeExamples: {
        ontwerp:
          "The safety region can ask for larger distances between clusters than the standard sets as a minimum. That changes the layout, and the layout determines whether the capacity you have in mind still fits on the plot. So we obtain that advice before the design is fixed.",
        inkoop:
          "Two systems with the same capacity on paper can carry very different fire safety dossiers: one with a propagation test on the complete unit, the other only at module level. That difference is not in the quotation, but your insurer will ask about it.",
        bouw:
          "The contracted capacity applies at the transfer point. If auxiliary power counts while charging and that is not in the limiter, you exceed your own contract. That is a setting, not a rebuild — provided it was accounted for up front.",
      },
      scopeRoles: { wij: "We", samen: "Together", u: "You" },
      scopeItems: {
        batterijsysteem: {
          label: "Battery system",
          note: "Selected on your usage profile and the requirements your insurer and financier set, not on what we happen to hold in stock. Including the assessment of the fire propagation documentation at system level and the warranty terms on cycle count and remaining capacity.",
        },
        omvormers: {
          label: "Inverters",
          note: "Sizing for the intended discharge duration and the grid level, four-quadrant behaviour, and the alignment between inverter, battery management and control.",
        },
        middenspanning: {
          label: "Medium voltage and transformer",
          note: "Switchgear, transformer, protection and selectivity, and the coordination with the grid operator on the customer substation.",
        },
        netaansluiting: {
          label: "Grid connection",
          note: "The connection stays in your name and in your contract. We run the process: transport request, the grid operator's requirements specification, the single-line diagram of the customer substation and the schedule towards energisation.",
        },
        hulpvoeding: {
          label: "Auxiliary power",
          note: "A frequently underestimated block. Auxiliary power has to be available during commissioning and on grid outage, and while charging it adds to your offtake — so to the contracted capacity.",
        },
        civiel: {
          label: "Civil works and site layout",
          note: "Earthworks, foundations, paving, drainage, trench profiles, fencing and access, and the site layout that follows from the safety concept.",
        },
        kabelwerk: {
          label: "Cabling",
          note: "Cable design and calculation, routes, crossings, earthing, and the installation itself. Usually the largest material item in the project.",
        },
        besturing: {
          label: "Control, EMS and SCADA",
          note: "The link between battery management, inverter and energy management, the limiter at the transfer point, monitoring, and the interface to the party trading the system.",
        },
        brandveiligheid: {
          label: "Fire safety and security",
          note: "The safety concept to PGS 37-1, the coordination with the safety region, firefighting water supply, detection and CCTV.",
        },
        vergunning: {
          label: "Permitting and competent authority",
          note: "The permit dossier, the environmental notification, the acoustic study and the coordination with the municipality and the environmental agency.",
        },
        engineering: {
          label: "Engineering and calculations",
          note: "Layout, single-line diagram, cable and short-circuit calculation, selectivity, auxiliary power balance and verification against the applicable standards. The design is externally stamped by an independent engineering firm.",
        },
        inbedrijfstelling: {
          label: "Commissioning and handover",
          note: "Test plans, commissioning, the grid compliance test to RfG, the as-built dossier and the handover.",
        },
      },
      scopeFooter:
        "What you provide is in the next section. It is a short list, and that is the point of this model.",

      insuranceEyebrow: "Why we are strict about this",
      insuranceTitle: "What you deliver has to be financeable and insurable",
      insuranceParagraphs: [
        "PGS 37-1 requires demonstrable evidence that fire does not propagate from one unit to the next, substantiated with NEN-EN-IEC 62933-5-2 or UL 9540A. A report at cell or module level alone does not meet that: it has to cover the complete unit as installed. Without that substantiation, additional measures apply — heavier firefighting water supply, larger separation distances — and exemptions on fire resistance lapse. For clustered or stacked arrangements, further requirements come on top, including IEC 62619 and NFPA 68.",
        "Insurers treat PGS 37-1 as the minimum and explicitly call partial certificates of limited value. Without substantiation at system level, what follows is additional requirements, a higher deductible, or refusal. And because insurability is a condition in virtually every financing agreement, it carries straight through to your funding. The bar is rising too: the latest edition of UL 9540A and NFPA 855 include the large-scale fire test across multiple units as the highest test level, and the market is moving that way.",
      ],
      insuranceListTitle: "Five things we establish before anything is ordered",
      insuranceList: [
        {
          title: "At what level the fire propagation test was carried out",
          body: "And whether the report covers the configuration that will actually be installed.",
        },
        {
          title: "What the safety region says about this site",
          body: "Separation distances, firefighting water and access determine the layout, and the layout determines what fits.",
        },
        {
          title: "Which requirements your insurer sets",
          body: "They can be stricter than the standard, and you would rather know that before procurement than after.",
        },
        {
          title: "What your financier will have reviewed",
          body: "The independent engineer assesses the same documentation, so we produce it in the form they expect it.",
        },
        {
          title: "What the grid operator has in the contract",
          body: "The contracted capacity applies at the transfer point, so auxiliary power and losses count towards it and belong in the limiter.",
        },
      ],
      insuranceFooter:
        "None of these five is exciting. They are only expensive if you skip them.",

      buildEyebrow: "From field to grid-code test",
      buildTitle: "How we build",
      buildIntro:
        "Twelve phases, from the first survey to the moment the system is on the grid. Four of them below; the full sequence, with every phase and three configurations, has a page of its own.",
      buildSteps: [
        { fase: 1, label: "Location" },
        { fase: 6, label: "Grid connection" },
        { fase: 8, label: "Containers" },
        { fase: 12, label: "Operational" },
      ],
      buildCta: "View the full build sequence",

      yourSideEyebrow: "Your side",
      yourSideTitle: "What is asked of you",
      yourSideStatement: "Four things. That is the whole list.",
      yourSide: [
        {
          title: "The site",
          body: "A plot with a land position that covers the lifetime of the project, or a clear route to one.",
        },
        {
          title: "The grid connection",
          body: "The connection stays in your name. We run the process, but the contract with the grid operator is yours.",
        },
        {
          title: "Decisions",
          body: "At four to six moments we need a decision from you. We put each one to you with the options, the consequences and our recommendation.",
        },
        {
          title: "One point of contact",
          body: "Someone on your side who can decide, or knows who can. That is all.",
        },
      ],
      yourSideFooter:
        "Beyond that you need no technical organisation from us, and you do not have to build one.",

      fitEyebrow: "Honest about the choice",
      fitTitle: "When Full EPC fits",
      fitYesTitle: "This fits you if:",
      fitYes: [
        "You have no technical organisation of your own and do not want to build one.",
        "You want one party liable instead of a chain of suppliers where everyone points at the other.",
        "Your financier asks for a coherent dossier from a single hand.",
        "You have the site and the grid connection, and want to outsource the rest.",
      ],
      fitNoTitle: "Look at another model if:",
      fitNo: [
        {
          text: "You have an engineering department with capacity — then you would be paying us for work you can do yourself. Look at",
          linkLabel: "Technical Support",
        },
        {
          text: "You carry out the work yourself and only lack the layer above it. Also",
          linkLabel: "Technical Support",
        },
        {
          text: "You can do everything yourself except procure sharply. Look at",
          linkLabel: "Supply Only",
        },
      ],

      faqEyebrow: "Frequently asked questions",
      faqTitle: "What you probably want to know",
      faq: [
        {
          q: "Are you tied to one supplier?",
          a: "No. We have documented relations with several manufacturers and choose per project on your usage profile, the requirements of your insurer and financier, and the lead time. Which ones that becomes in your case, we discuss with you before anything is fixed.",
        },
        {
          q: "Who does the design?",
          a: "We do, with our own people. The design is externally stamped by an independent engineering firm, so a party with no stake in it looks at it too.",
        },
        {
          q: "What if the grid connection is delayed?",
          a: "It happens, and it is usually the longest line in the project. We plan around it: everything that does not depend on the connection carries on. In the schedule the connection sits explicitly on the critical path, so you can see what a shift does to the rest.",
        },
        {
          q: "How long does a project take?",
          a: "That depends mostly on the grid level and the permit, and far less on the construction itself. Giving an indication without knowing your site and grid position is guesswork; we would rather do that in the first conversation, with the assumptions stated.",
        },
        {
          q: "Do you stay involved after handover?",
          a: "Yes, in whatever form you want: from a maintenance contract to availability on call. In our own developments we stay the owner, so we know what goes wrong in year five.",
        },
        {
          q: "Can you also do just a part?",
          a: "Yes, that is what the other two partner models are for.",
        },
      ],
      faqModelLinks: ["Technical Support", "Supply Only"],

      ctaTitle: "Do you have a site?",
      ctaSub:
        "Send us the location, the grid level and whatever documentation you already have. Within a week we will tell you whether there is something to build and what it would take.",
      ctaPlan: "Book a meeting",
      ctaCall: "Call us directly",
      ctaLinks: {
        hoeWijBouwen: "How we build",
        partnermodellen: "All partner models",
        watWijDoen: "What we do",
      },
    },
    supplyOnly: {
      tag: "Partner model 03",
      heroTitle: "Supply Only",
      heroStandfirst:
        "You design, install and connect. We supply the battery system and the inverters, placed on your foundation, and support you on the points where knowing the battery system makes the difference. One price, no loose hours, no reconciliation afterwards.",

      problemEyebrow: "What this is about",
      problemTitle: "Between delivered and working sits more than a waybill",
      problemParagraphs: [
        "Buying a battery container looks simple. You pick a supplier, you sign, and a few months later a container is standing at the gate. For a party that can design and install on its own, that is exactly enough on paper.",
        "In practice, between that container and a working system sits a series of things that appear in no contract at all. Does the auxiliary supply connect to what you planned, and what does it do on grid outage? Does the number of penetrations match your cable design? What does the safety region make of this arrangement at this distance? Who links the battery management, the inverters and the energy management, and who makes sure the party trading the system can reach it later? And when three manufacturers turn up to commission, each switching on only their own box, who tests the whole?",
        "These are not large items. They are the items that hold a project up for two months because nobody owns them. We take them on, within the same price.",
      ],
      problemBlocks: [
        { title: "Placed, not dropped off", body: "Transport, lifting and placement on your foundation are included." },
        { title: "Tested before shipping", body: "The factory acceptance test is a milestone, not a formality." },
        { title: "One price", body: "No loose hours, no reconciliation afterwards, no optional items that turn out to be necessary later." },
      ],

      deliveryEyebrow: "The delivery",
      deliveryTitle: "What comes with it",
      deliveryIntro:
        "Five parts, in one price. The first two are the equipment. The last three are the difference between us and an importer.",
      delivery: [
        {
          title: "The battery system, placed",
          lead: "Selected on your usage profile and on what your insurer and financier expect from the documentation — not on what we happen to be able to supply.",
          items: [
            "Selection and procurement, supplier-neutral",
            "Factory acceptance test before shipping",
            "Transport, lifting and placement on your foundation",
            "Assessment of the fire propagation documentation and the warranty terms",
          ],
        },
        {
          title: "The inverters",
          lead: "Sized for the discharge duration you want to reach and for the voltage level at which you connect.",
          items: [
            "Selection, procurement and delivery on site",
            "Alignment between inverter, battery management and control",
            "Positioning and connection are yours",
          ],
        },
        {
          title: "Project support",
          lead: "The layer where we make the difference and where a supplier points you at the manual.",
          items: [
            "Design review on the interfaces with your installation",
            "Verification against PGS 37-1 and coordination with the safety region",
            "Order tracking, from purchase order to arrival",
            "Supervision during placement",
          ],
        },
        {
          title: "Control integration",
          lead: "The battery system talks to the inverters, the inverters to the energy management, and the whole to the party trading it. We set that chain up.",
          items: [
            "Link between battery management, inverters and energy management",
            "Monitoring and remote access",
            "Interface to your trading party",
            "Limiter at the transfer point, so you stay within your contracted capacity",
          ],
        },
        {
          title: "Commissioning and handover",
          lead: "The manufacturers each commission their own device. Someone has to test the whole. We do.",
          items: [
            "Preparation and supervision of the manufacturers' commissioning",
            "Integration test of the complete system",
            "Handover of the dossier, certificates and warranties",
          ],
        },
      ],
      deliveryNotTitle: "What is not included",
      deliveryNotBody:
        "Transformer, medium voltage and grid connection, the civil works, the permitting, the connection work itself and the grid compliance test. That is your work, and the system design therefore stays your responsibility — we supply the data you need for it. If you do want that layer included, that is a different model.",
      deliveryNotLink: "See Technical Support",

      checkEyebrow: "Before you sign",
      checkTitle: "Fourteen questions to put to a supplier's offer",
      checkIntro:
        "This is the list we run through ourselves before taking a manufacturer's bid seriously. It is here because it is useful without us too: if you handle procurement yourself, work through it. Most surprises in a battery project are not in the technology but in the small print of the offer, and they only surface when it is too late to choose anything else.",
      checkGroups: {
        krijgt: "What you get",
        voorwaarden: "When, and on what terms",
        ontwerp: "What it does to your design",
      },
      checkItems: {
        commissioning: {
          q: "Is commissioning in the base price?",
          a: "Commissioning regularly sits under the optional items rather than in the price you are comparing on. Ask what exactly it covers, how many days are included and what happens if it takes longer.",
        },
        garantie: {
          q: "What exactly does the warranty cover?",
          a: "A warranty on a battery system has at least three axes: term, number of cycles and remaining capacity. A bid that names one of them says nothing. Ask for all three, plus the measurement method.",
        },
        gebruiksvoorwaarden: {
          q: "Under which operating conditions does that warranty hold?",
          a: "Discharging deeper, cycling more often or a higher ambient temperature than assumed can limit the warranty or void it. Put your own usage profile next to the terms before you sign, not after.",
        },
        eenheidsprijzen: {
          q: "Are the unit prices visible?",
          a: "A single total cannot be worked through. With the price per block and per station you can develop combinations the supplier did not offer. Ask for the build-up, not for a discount.",
        },
        uitsluitingen: {
          q: "What is not in it?",
          a: "Ask explicitly for the exclusions list. What a supplier does not name comes back later as extra work, and by then there is no alternative left.",
        },
        levertijd: {
          q: "Is the lead time internally consistent?",
          a: "It happens regularly that the summary and the terms in the same document are months apart. Count the weeks yourself and ask which one applies.",
        },
        startmoment: {
          q: "From which moment does the lead time run?",
          a: "From signature, from order acceptance, from the down payment or from technical release? In practice that is weeks to months of difference, and only the last one is up to you.",
        },
        prijsvastheid: {
          q: "Is the price firm, or conditional?",
          a: "Cell price and currency are the two usual conditions. Ask until when the price holds, what exactly falls under the condition, and what the bandwidth is.",
        },
        leveringsconditie: {
          q: "Where does the delivery term apply?",
          a: "A DDP price is tied to an address. If the bid names a delivery address other than where the system ends up, the freight component does not add up. Check the address literally.",
        },
        transportrisico: {
          q: "Who carries the transport risk, and up to where exactly?",
          a: "To the gate, to beside the foundation, or until the container is standing? In practice those three are far apart, and the lifting is rarely included.",
        },
        eigendom: {
          q: "When does title transfer?",
          a: "Usually on full payment, while risk transfers earlier. Know which moment is which, and what happens if something goes wrong in the chain.",
        },
        brandtestniveau: {
          q: "At what level was the fire test carried out?",
          a: "Cell, module or the complete unit as installed? PGS 37-1 requires substantiation at system level. A report at cell level is of limited value to your insurer.",
        },
        configuratiedekking: {
          q: "Does the test report cover the configuration you are buying?",
          a: "With a system built from components by several suppliers, the test has to cover the installed combination. Adding up separate component tests is not allowed.",
        },
        hulpvoeding: {
          q: "What does the auxiliary supply consume, and what happens on grid outage?",
          a: "Auxiliary consumption adds to your offtake while charging, and therefore to your contracted capacity at the transfer point. And if the supply drops out on a grid outage, that has consequences for cooling, control and black start. This figure is missing from a datasheet more often than not.",
        },
      },
      checkFooter:
        "If you handle procurement yourself, this list is yours. If you get stuck on it along the way, we will look with you.",

      buyEyebrow: "How we work",
      buyTitle: "We do not compare offers, we take them apart",
      buyParagraphs: [
        "Laying three offers side by side and picking the lowest is not procurement. The configurations differ, the exclusions differ, and the price per kWh they present themselves with is almost never calculated on the same basis. What we do is reduce the bid to the unit prices behind it: what does a block cost, what does a station cost, what does the next one cost.",
        "Once those are on the table, you can calculate. Combinations the supplier did not offer regularly turn out better than the variants they did put forward — more storage for less, or the same for fewer units, which in turn saves on foundations, cabling and site area. We put that question back to the supplier, substantiated with their own figures. That is a different conversation from asking for a discount.",
      ],
      buyPoints: [
        { title: "We ask for the build-up, not for a total", body: "Without unit prices there is nothing to work through." },
        { title: "We test against your usage profile, not against another offer", body: "The cheapest configuration is rarely the configuration that suits how you will actually run the system." },
        { title: "We calculate the variants that were not offered", body: "And put them back to the supplier with their own figures underneath." },
        { title: "We attend the factory acceptance test", body: "Or you do. What goes on transport afterwards is proven equipment." },
        { title: "We hand over the dossier, not just the system", body: "Certificates, test reports, warranty terms and the data you need for your own design and your grid compliance test." },
      ],

      yourSideEyebrow: "Your side",
      yourSideTitle: "What stays with you",
      yourSide: [
        { title: "The system design", body: "You design the installation our system lands in, and that responsibility stays with you. We supply the data you need for it." },
        { title: "The foundation and civil works", body: "We place on what you have prepared. Dimensions, loads and penetrations reach you well before delivery." },
        { title: "Transformer, medium voltage and connection", body: "Your scope, your contract with the grid operator." },
        { title: "Connection and grid compliance", body: "The connection work and the grid compliance test are yours. We supply the documentation you need for them." },
      ],

      fitEyebrow: "Honest about the choice",
      fitTitle: "When Supply Only fits",
      fitYesTitle: "This fits you if:",
      fitYes: [
        "You have a technical organisation of your own that can design and install.",
        "You want to keep the system design and the connection yourself.",
        "You want to buy from a party that knows the technology, without a contractor on your site.",
        "You want a fixed price with no loose hours and no reconciliation on the support.",
      ],
      fitNoTitle: "Look at another model if:",
      fitNo: [
        { text: "You can handle the execution but lack the design and the contractual layer. Look at", linkLabel: "Technical Support" },
        { text: "You have no technical organisation at all and want to outsource the whole project. Look at", linkLabel: "Full EPC" },
      ],

      faqEyebrow: "Frequently asked questions",
      faqTitle: "What buyers ask us up front",
      faq: [
        { q: "Are you tied to one manufacturer?", a: "No. We have documented relations with several manufacturers and exclusivity with none of them. We also hold no stock that has to move. The selection follows your usage profile and the requirements of your insurer and financier." },
        { q: "Can I choose the manufacturer myself?", a: "Yes. If you already have a preference, we buy there and do the rest of the work. We will tell you what we think of that choice, even if you do not ask." },
        { q: "What if delivery is delayed?", a: "Lead times on battery systems run to months and shift regularly. We track the order from confirmation to arrival and report a shift as soon as we see it, not once it already affects your schedule." },
        { q: "Can you also just assess an offer?", a: "Yes. That is a bounded assignment: you send the bid, we run it against the points in the list above and come back with the questions you should put to them. No delivery has to follow." },
        { q: "What happens if something breaks?", a: "We transfer the factory warranties to you, with the terms alongside. For handling a claim you can bring us in; we know the route and the language, and in practice that saves months." },
        { q: "Do you also supply individual components?", a: "That depends on the component. Assembling a complete installation from separate components is rarely wise, among other things because the test report then has to cover the installed combination. Put it to us and we will say whether it can be done." },
      ],

      ctaTitle: "Do you have an offer on the table?",
      ctaSub:
        "Send it over. We run it against the fourteen points above and come back within a week with the questions you should put to them. That costs you nothing and commits you to nothing.",
      ctaPlan: "Book a meeting",
      ctaCall: "Call us directly",
      ctaLinks: {
        partnermodellen: "All partner models",
        technicalSupport: "Technical Support",
        fullEpc: "Full EPC",
      },
    },
    hoeWijBouwen: {
      heroEyebrow: "Method",
      heroTitle: "How we build",
      heroStandfirst:
        "Twelve phases, from the first survey to the moment the system is on the grid. Scroll through the phases and the drawing follows along. Choose a configuration at the top: connected at medium voltage, at high voltage, or alongside an existing solar park.",
      ctaTitle: "Curious what this means for your site?",
      ctaSub:
        "The sequence above is a reference. What fits on your plot depends on the grid level, the space available and the permit.",
      ctaButton: "Book a meeting",
      ctaLinks: {
        fullEpc: "Full EPC",
        watWijDoen: "What we do",
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
      aboutLabel: "About us",
      heroTitle: "Built by people who know this trade",
      heroStandfirst:
        "Gridstate is a young company with three people who were building battery storage before it existed. Below: who they are, how we work, and why we do a number of things differently from what is usual in this market.",

      teamLabel: "The team",
      callAboutLabel: "Call him about",
      emielName: "Emiel Verlee",
      emielRole: "CEO & Founder",
      emielBio:
        "Emiel holds the technical direction across the projects: from system design and supplier selection to what happens on site. He writes the technical proposals himself, and he is the one who tells a design it is not finished yet.",
      emielTopics: ["system design", "execution", "supplier selection"],
      lucasName: "Lucas Gazenbeek",
      lucasRole: "Commercial Director & Co-Owner",
      lucasBio:
        "Lucas builds the business cases and holds the conversations with clients, investors and financiers. He recalculates every model himself before it leaves the building, and he is the point of contact if you want to know what a collaboration would mean in your case.",
      lucasTopics: ["business cases", "forms of collaboration", "investments"],
      shaneName: "Shane Konijnenberg",
      shaneRole: "Operations Director",
      shaneBio:
        "Shane is an electrochemical engineer, responsible for the line from design to handover: engineering, project management, execution and aftersales. Where a system behaves differently from what the datasheet promises, he is the one who finds out why.",
      shaneTopics: ["engineering", "project management", "aftersales"],

      storyLabel: "Our story",
      storyTitle: "Why we started this",
      storyParagraphs: [
        "All three of us worked on energy projects inside existing organisations, and saw the same pattern there. As a company grows, volume becomes more important than whether something is right. The design turns into a formality on the way to the order. The documentation follows afterwards. And the party that has to build it receives a dossier it cannot work with.",
        "That does not go wrong on the first project. It goes wrong on the project where the grid operator wants something other than was assumed, or where the insurer asks at what level the fire test was carried out. That is when it turns out the decision that should have prevented it was taken a year earlier, in passing, by someone in a hurry.",
        "Gridstate was set up to reverse that: first find out, then design, then build. At the start that costs more time, and at the start it is a less smooth story. What it does deliver is a project that withstands the scrutiny of a financier and an insurer, and a client who is not caught out halfway through.",
      ],

      principlesLabel: "Our working rules",
      principlesTitle: "Five agreements with ourselves",
      principlesIntro:
        "These are not core values on a poster. They are agreements that determine what we do and do not put in a document, and they exist because the temptation to break them comes back in every project.",
      principles: [
        {
          title: "We name no brands in client documents",
          desc: "Our technical documents contain no supplier names or type designations. A design written around one specific brand leaves you no choice, and it makes comparing impossible later on. We write on properties and standards, and the choice of brand comes after that.",
        },
        {
          title: "Our design goes past an external stamp",
          desc: "The design is reviewed and stamped by an independent engineering firm. That is not a legal obligation and it costs time. What it does ensure is that someone looks at it who has no stake in the outcome, and that is exactly why we do it.",
        },
        {
          title: "Open items stay visible",
          desc: "If something in a calculation does not add up and we do not yet know why, it stays in the document as an open item. It is tempting to polish away a line like that before it goes to a client. Anyone who does delivers a document that looks better than it is, and that always comes back.",
        },
        {
          title: "What someone else supplies, we recalculate",
          desc: "A revenue forecast, a simulation report or a business case from a selling party is input to us, not a starting point. We rebuild the calculation from its components, even when that slows things down and even when we arrive at the same result.",
        },
        {
          title: "Every number has a source",
          desc: "Every figure in a document of ours traces back to a calculation, a datasheet or a standard. Assumptions and sources are a chapter of their own in the document, not a footnote. What has no source is not in there — including any probability expressed as a percentage, because that suggests a precision that does not exist.",
        },
      ],

      statsLabel: "In figures",
      statsTitle: "Where these numbers come from",
      statItems: [
        {
          label: "Realised",
          source: "Built by this team at previous employers, before Gridstate existed.",
        },
        {
          label: "In own development",
          source: "Projects whose development we run ourselves, at various stages.",
        },
        {
          label: "Active projects",
          source: "Processes being worked on right now, for clients and for ourselves.",
        },
        {
          label: "Business cases calculated",
          source: "Full models, built up from the components and recalculated in a second environment.",
        },
      ],
      statsFooter:
        "We add no number we cannot account for. That is why there is no revenue figure here, and no count of realised projects per person.",

      whyUsLabel: "Why us",
      whyTitle: "Why Gridstate",
      whyQuote: "We are not the fastest party at the table, and that is a choice.",
      whyPoints: [
        {
          title: "We build for ourselves too",
          desc: "In our own developments we take a stake and remain an owner. Every design choice that saves money in the short term and costs money in the long term comes back to us.",
        },
        {
          title: "We know the Benelux procedures",
          desc: "Grid connection, permits, the safety region and the grid code: these are different processes per country and per grid operator, and their lead times determine your planning more than the construction does.",
        },
        {
          title: "We do not sell a brand",
          desc: "We hold relationships with several manufacturers and an exclusivity with none of them. Our advice on cell chemistry, manufacturer or configuration is therefore not coloured.",
        },
        {
          title: "We say so when it does not work",
          desc: "If a case does not add up, we say so — even when that talks us out of an assignment. In the long run that is cheaper for everyone.",
        },
      ],

      careersLabel: "Working with us",
      careersTitle: "We grow, carefully",
      careersIntro:
        "We hire people when there is work being left undone, not so we can say we have grown. That means a vacancy is rarely online and that most people here came in through a conversation that started about something else.",
      careersListIntro: "What we look for, when the time comes:",
      careersList: [
        "Someone who would rather do a calculation twice than once with an assumption.",
        "Someone who names an open item instead of smoothing it over.",
        "Someone who dares tell a client that something cannot be done.",
      ],
      // {email} is filled from siteConfig.company.email and rendered as a link.
      careersOutro:
        "If you recognise yourself in that and want to know whether something might fit, send a message to {email}. We read everything and reply even when there is nothing.",
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
