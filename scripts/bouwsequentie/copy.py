# -*- coding: utf-8 -*-
import json
PH_MS = json.load(open('/tmp/iso/phases.json'))   # bestaande 12 fasen

def sec(n,dur,h,p,r):
    return ('<div class="phase-meta"><span class="phase-num">%02d</span><span class="phase-dur">%s</span></div>\n'
            '      <h2>%s</h2>\n      <p>%s</p>\n'
            '      <dl class="role"><dt>Gridstate</dt><dd>%s</dd></dl>')%(n,dur,h,p,r)

HS={}
HS[1]=sec(1,"Voorbereiding","Aansluiten op hoogspanning",
 "Als het middenspanningsnet in de regio vol zit, is de hoogspanningskant de enige overgebleven route. Dat betekent een eigen station op het terrein en een aansluiting op 150 kV, en dat verandert de hele planning. De locatiekeuze draait daarom om een vraag: op welk 150 kV-station is binnen afzienbare tijd ruimte, en hoeveel.",
 "Netscan op stationsniveau, gesprek met de netbeheerder, en een eerste toets of de gewenste omvang past bij wat dat station aankan.")
HS[2]=sec(2,"3–6 maanden","Grond en opstalrecht",
 "Bijna twee hectare, want naast de batterijblokken komt er een eigen omheind hoogspanningsstation op het terrein. Wij houden bij het vastleggen van de positie meteen ruimte vrij voor een tweede fase, want een terrein dat eenmaal op hoogspanning is aangesloten is de goedkoopste plek om later uit te breiden.",
 "Locatiestudie, onderhandeling met de eigenaar, en de fiscale en juridische toets voordat er getekend wordt.")
HS[3]=sec(3,"2–4 jaar","Aansluiting en transportrecht",
 "Dit traject bepaalt de doorlooptijd van het hele project. De aanvraag gaat de wachtrij in, er volgt een aansluitstudie en pas daarna ligt het aansluitpunt vast. Op dit niveau vraag je liever in een keer meer vermogen aan dan je nu nodig hebt, want een tweede aanvraag kost net zoveel jaren als de eerste.",
 "Aanvraag en onderbouwing, afstemming over het aansluitveld en de beveiligingsfilosofie, en de onderhandeling over de contractvorm.")
HS[4]=sec(4,"12–18 maanden","Vergunning",
 "Een installatie van deze omvang met een eigen hoogspanningsstation zit in de zwaarste vergunningsroute, met een reële kans op een milieueffectbeoordeling. Drie onderwerpen bepalen de uitkomst: geluid, externe veiligheid en landschappelijke inpassing. Alle drie zijn ontwerpparameters en geen papierwerk achteraf.",
 "Vergunningsdossier, akoestisch onderzoek, brandveiligheidsplan en de afstemming met provincie en veiligheidsregio.")
HS[5]=sec(5,"12–16 weken, parallel","Engineering en layout",
 "Tien blokken van tien megawatt, elk met twee clusters van vier containers en een conversiestation, plus een eigen station met twee vermogenstransformatoren dat de middenspanningsring naar 150 kV brengt. De twee velden staan gespiegeld, zodat alle conversiestations aan hetzelfde middenpad liggen en de middenspanningskabels kort blijven. De beveiligingsfilosofie en de selectiviteit over twee spanningsniveaus zijn hier het echte werk.",
 "Het volledige ontwerp tot en met het hoogspanningsstation, extern gestempeld en getekend door een onafhankelijke engineeringpartij.")
HS[6]=sec(6,"12–20 weken","Inkoop, productie en fabriekstest",
 "De vermogenstransformatoren hebben de langste levertijd van het hele project en bepalen daarmee de kritieke lijn in de bouwfase. Die worden als eerste besteld, direct na verlening. De batterijzijde volgt daarna, want die is sneller leverbaar en je wilt units niet maanden op het terrein hebben staan.",
 "Inkoop onder open book, fabriekstest per unit en aanwezigheid bij de beproeving van de transformatoren.")
HS[7]=sec(7,"14–20 weken","Civiel en infrastructuur",
 "Fundaties voor negentig units plus de zware fundaties en oliekelders van het hoogspanningsstation. Toegangsweg berekend op transformatortransport, hekwerk in twee ringen, kabelgoten en de bluswatervoorziening voor twee gescheiden risico-objecten.",
 "Aanbesteding en regie op de civiele aannemer, en de afstemming met de veiligheidsregio over beide terreindelen.")
HS[8]=sec(8,"6–8 weken","Tachtig batterijcontainers",
 "Twintig clusters van vier units van 20 voet, elk 5 MWh, samen 400 MWh. Ze gaan cluster voor cluster het terrein op terwijl het hoogspanningsstation nog in aanbouw is, zodat de twee sporen elkaar niet ophouden.",
 "Ontvangst en inslag, plaatsing volgens hijsplan, en de mechanische afmontage per blok.")
HS[9]=sec(9,"4–5 weken","Conversie en middenspanning",
 "Tien stations van 40 voet met elk acht omvormers van 1250 kVA, de transformator en de middenspanningsinstallatie. Daarna de ring die de tien blokken verbindt en naar het eigen station brengt.",
 "Plaatsing van de stations, de gelijkstroomkoppeling per blok en de opbouw van de middenspanningsring.")
HS[10]=sec(10,"8–12 weken","Eigen hoogspanningsstation",
 "Twee vermogenstransformatoren, de 150 kV-installatie, de meet- en beveiligingsinstallatie en een grondkabel naar het station van de netbeheerder — geen luchtlijn, wat de inpassing en de vergunning aanzienlijk vereenvoudigt. Dit is het deel dat een batterijproject van een installatie in een energiecentrale verandert, en waar de eisen van de netbeheerder het zwaarst wegen.",
 "Plaatsing en aansluiting van het station, de beveiligingsinstellingen en de afstemming met de netbeheerder over de koppeling.")
HS[11]=sec(11,"8–12 weken","Inbedrijfstelling en netcodetest",
 "Beproeving per blok, daarna de beveiligingsbeproeving over beide spanningsniveaus en tot slot de netcodetest met de netbeheerder. Op dit niveau is de regellaag op parkniveau geen optie maar een eis: het park moet zich naar buiten gedragen als een enkele eenheid.",
 "Het SAT-protocol, de netcodevalidatie en de configuratie van de regellaag en de aggregatorkoppeling.")
HS[12]=sec(12,"Vanaf COD","Op de markt",
 "Vanaf hier draait het park op FCR, aFRR en onbalans, met de omvang om ook in de dagmarkt een positie in te nemen. Doorlooptijd van eerste netscan tot commerciële oplevering: drie tot vijf jaar, waarvan de aansluiting vrijwel de hele kritieke lijn vormt.",
 "Monitoring, performance reporting en jaarlijkse hervalidatie van de businesscase. Onderhoud via onze partners.")

CO={}
CO[1]=sec(1,"Uitgangssituatie","Een park dat wordt afgeregeld",
 "Het zonnepark levert meer terug dan de aansluiting aankan. Op heldere dagen in het voorjaar zit het tegen de grens en wordt het afgeregeld, precies op de uren dat de opbrengst het hoogst zou zijn. Die verloren productie is de eerste post in de businesscase van een batterij op dezelfde aansluiting.",
 "Wij lezen de meetdata uit, kwantificeren het opbrengstverlies per uur en rekenen door wat een batterij toevoegt aan de kasstroom.")
CO[2]=sec(2,"4–6 weken","Netpositie en transportrecht",
 "De batterij laadt uit het park binnen het bestaande transportrecht, dus er is geen nieuwe aansluiting nodig. Dat is het hele punt van co-locatie en het scheelt jaren wachttijd. Wel moet de MLOEA goed staan, anders raakt het park zijn SDE-beschikking op de opgeslagen energie kwijt.",
 "Netcheck op beide knelpuntlagen, afstemming met de netbeheerder, en de MLOEA zodat de beschikking intact blijft.")
CO[3]=sec(3,"3–5 maanden","Vergunning en engineering",
 "Staat de batterij als ondergeschikte functie bij het park, dan loopt de vergunning via de korte route in plaats van een volledige buitenplanse afwijking. Het ontwerp gaat parallel: layout binnen de veiligheidsafstanden van PGS 37-1, single-line, beveiligingsconcept en de koppeling op het bestaande inkoopstation.",
 "Volledig ontwerp en vergunningsdossier, extern gestempeld door een onafhankelijke engineeringpartij.")
CO[4]=sec(4,"10–18 weken","Inkoop en fabriekstest",
 "Vier containers en een conversiestation. De order gaat pas de deur uit na verlening van de vergunning, met de specificatie en het orderpakket vooraf klaar zodat er in de week van verlening besteld kan worden.",
 "Inkoop onder open book, en inspectie van elk systeem in de fabriek voor verzending.")
CO[5]=sec(5,"3–4 weken","Civiel en infrastructuur",
 "Een compact terreindeel naast het bestaande inkoopstation: fundaties, hekwerk, kabeltracé en de opstelplaats voor de brandweer. Het park blijft gewoon produceren tijdens de bouw, dus de werkzaamheden worden ingepland rond de productie.",
 "Aanbesteding en regie op de civiele aannemer, en de afstemming met de exploitant over werken naast een draaiend park.")
CO[6]=sec(6,"1–2 weken","Plaatsing",
 "Vier units van 20 voet, twee bij twee en gespiegeld, samen 20 MWh. Op deze schaal staat alles binnen een week, mits het terrein klaar ligt en de kraan kan komen waar hij moet zijn.",
 "Ontvangst, plaatsing volgens hijsplan en de mechanische afmontage.")
CO[7]=sec(7,"2 weken","Koppeling op het bestaande station",
 "Het conversiestation van 40 voet en de middenspanningskabel naar het inkoopstation van het park. Dat is een kort tracé, en het bestaat alleen omdat het park er al ligt. Precies daar zit het kostenvoordeel van co-locatie.",
 "Plaatsing van het station, de gelijkstroomkoppeling en de aansluiting op het bestaande inkoopstation.")
CO[8]=sec(8,"2–4 weken","Inbedrijfstelling",
 "Site acceptance test, celbalancering, netcodetest en de koppeling van het regelsysteem aan de aggregator. De sturing moet weten wat het park doet, want laden gebeurt binnen de ruimte die de zon overlaat.",
 "SAT-protocol, netcodevalidatie en de configuratie van de sturing samen met de exploitant van het park.")
CO[9]=sec(9,"Vanaf COD","Op de markt",
 "Vanaf hier vangt de batterij de uren op waarin het park anders was afgeregeld, en draait daarnaast op FCR, aFRR en onbalans. Doorlooptijd van eerste gesprek tot oplevering: ongeveer een jaar, en dat is de helft van wat een standalone park kost aan tijd.",
 "Monitoring, performance reporting en jaarlijkse hervalidatie. Onderhoud via onze partners.")

json.dump({"hs":{str(k):v for k,v in HS.items()},"co":{str(k):v for k,v in CO.items()}},
          open('/tmp/iso/copy.json','w'))
print("HS",len(HS),"CO",len(CO))
