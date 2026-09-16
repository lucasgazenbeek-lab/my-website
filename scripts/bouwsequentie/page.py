# -*- coding: utf-8 -*-
import json
S=json.load(open('/tmp/iso/scenes.json'))
MS=json.load(open('/tmp/iso/phases.json'))
EX=json.load(open('/tmp/iso/copy.json'))
PH={"ms":MS,"hs":EX["hs"],"co":EX["co"]}

VAR={
 "ms":dict(naam="Standalone MS",sub="40 MW / 160 MWh, aansluiting 20 kV",
   chap=[("Ontwikkelen",[1,2,3]),("Vergunnen en ontwerpen",[4,5,6]),("Bouwen",[7,8,9,10]),("In bedrijf",[11,12])],
   nav={1:"Locatie",2:"Grond",3:"Aansluiting",4:"Vergunning",5:"Engineering",6:"Inkoop",7:"Civiel",8:"Containers",9:"Conversie",10:"Bekabeling",11:"Testen",12:"Exploitatie"},
   specs=[("Vermogen","40","MW"),("Opslag","160","MWh"),("Units","36","32 + 4"),("Clusters","8","van 4"),("Terrein","0,5","hectare"),("Doorlooptijd","2–3","jaar")],
   kader="Situatietekening, standalone op middenspanning",
   vis={1:["ext","dims"],2:["ext","dims","plotmark"],3:["ext","dims","plotmark"],4:["ext","plotmark"],
        5:["ext","plan"],6:["ext","plan"],7:["ext","civil"],8:["ext","civil","cont"],
        9:["ext","civil","cont","stat"],10:["ext","civil","cont","stat","cable","air"],
        11:["ext","civil","cont","stat","cable","air"],12:["ext","civil","cont","stat","cable","air"]},
   act={1:["ext"],2:["plotmark"],3:["ext","dims"],5:["plan"],6:["plan"],7:["civil"],8:["cont"],9:["stat"],10:["cable","air"],11:["cable","air"]},
   data={1:[0,"MW",0,"MWh",0,"van 36","Locatieonderzoek",0],2:[0,"MW",0,"MWh",0,"van 36","Grondpositie vast",0],
     3:[40,"MW aangevraagd",0,"MWh",0,"van 36","Transportrecht in behandeling",0],
     4:[40,"MW aangevraagd",160,"MWh ontwerp",0,"van 36","Vergunning in procedure",0],
     5:[40,"MW ontwerp",160,"MWh ontwerp",0,"van 36","Ontwerp gereed",0],
     6:[40,"MW besteld",160,"MWh besteld",0,"van 36","In productie",0],
     7:[40,"MW",160,"MWh",0,"van 36","Terrein gereed",0],8:[40,"MW",160,"MWh",32,"van 36","Containers geplaatst",0],
     9:[40,"MW",160,"MWh",36,"van 36","Stations geplaatst",0],10:[40,"MW",160,"MWh",36,"van 36","Aangesloten",0],
     11:[40,"MW",160,"MWh",36,"van 36","Netcodetest",0],12:[40,"MW",160,"MWh",36,"van 36","Live op de markt",1]}),
 "hs":dict(naam="Standalone HS",sub="100 MW / 400 MWh, eigen station op 150 kV",
   chap=[("Ontwikkelen",[1,2,3]),("Vergunnen en ontwerpen",[4,5,6]),("Bouwen",[7,8,9,10]),("In bedrijf",[11,12])],
   nav={1:"Locatie",2:"Grond",3:"Aansluiting",4:"Vergunning",5:"Engineering",6:"Inkoop",7:"Civiel",8:"Containers",9:"Conversie",10:"HS-station",11:"Testen",12:"Exploitatie"},
   specs=[("Vermogen","100","MW"),("Opslag","400","MWh"),("Units","90","80 + 10"),("Clusters","20","van 4"),("Terrein","1,8","hectare"),("Doorlooptijd","3–5","jaar")],
   kader="Situatietekening, standalone op hoogspanning",
   vis={1:["ext","dims"],2:["ext","dims","plotmark"],3:["ext","dims","plotmark"],4:["ext","plotmark"],
        5:["ext","plan"],6:["ext","plan"],7:["ext","civil"],8:["ext","civil","cont"],
        9:["ext","civil","cont","stat"],10:["ext","civil","cont","stat","extra","cable","air"],
        11:["ext","civil","cont","stat","extra","cable","air"],12:["ext","civil","cont","stat","extra","cable","air"]},
   act={1:["ext"],2:["plotmark"],3:["ext","dims"],5:["plan"],6:["plan"],7:["civil"],8:["cont"],9:["stat"],10:["extra","air"],11:["cable","air","extra"]},
   data={1:[0,"MW",0,"MWh",0,"van 90","Locatieonderzoek",0],2:[0,"MW",0,"MWh",0,"van 90","Grondpositie vast",0],
     3:[100,"MW aangevraagd",0,"MWh",0,"van 90","Aanvraag bij netbeheerder",0],
     4:[100,"MW aangevraagd",400,"MWh ontwerp",0,"van 90","Vergunning in procedure",0],
     5:[100,"MW ontwerp",400,"MWh ontwerp",0,"van 90","Ontwerp gereed",0],
     6:[100,"MW besteld",400,"MWh besteld",0,"van 90","In productie",0],
     7:[100,"MW",400,"MWh",0,"van 90","Terrein gereed",0],8:[100,"MW",400,"MWh",80,"van 90","Containers geplaatst",0],
     9:[100,"MW",400,"MWh",90,"van 90","Stations geplaatst",0],10:[100,"MW",400,"MWh",90,"van 90","HS-station gereed",0],
     11:[100,"MW",400,"MWh",90,"van 90","Netcodetest",0],12:[100,"MW",400,"MWh",90,"van 90","Live op de markt",1]}),
 "co":dict(naam="Co-located",sub="5 MW / 20 MWh bij een bestaand zonnepark",
   chap=[("Ontwikkelen",[1,2]),("Vergunnen en ontwerpen",[3,4]),("Bouwen",[5,6,7]),("In bedrijf",[8,9])],
   nav={1:"Bestaand park",2:"Netpositie",3:"Vergunning",4:"Inkoop",5:"Civiel",6:"Plaatsing",7:"Koppeling",8:"Testen",9:"Exploitatie"},
   specs=[("Vermogen","5","MW"),("Opslag","20","MWh"),("Units","5","4 + 1"),("Clusters","1","van 4"),("Extra grond","0,1","hectare"),("Doorlooptijd","circa 1","jaar")],
   kader="Situatietekening, co-located bij een zonnepark",
   vis={1:["ext","extra","dims"],2:["ext","extra","dims"],3:["ext","extra","plan"],4:["ext","extra","plan"],
        5:["ext","extra","civil"],6:["ext","extra","civil","cont"],
        7:["ext","extra","civil","cont","stat","cable"],8:["ext","extra","civil","cont","stat","cable"],
        9:["ext","extra","civil","cont","stat","cable"]},
   act={1:["ext"],2:["extra","dims"],3:["plan"],4:["plan"],5:["civil"],6:["cont"],7:["stat","cable"],8:["extra","cable"]},
   data={1:[8.4,"MWp zon",0,"MWh",0,"van 5","Afregeling bij piek",0],
     2:[5,"MW ontwerp",20,"MWh ontwerp",0,"van 5","Transportrecht bevestigd",0],
     3:[5,"MW ontwerp",20,"MWh ontwerp",0,"van 5","Vergunning in procedure",0],
     4:[5,"MW besteld",20,"MWh besteld",0,"van 5","In productie",0],
     5:[5,"MW",20,"MWh",0,"van 5","Terrein gereed",0],6:[5,"MW",20,"MWh",4,"van 5","Containers geplaatst",0],
     7:[5,"MW",20,"MWh",5,"van 5","Aangesloten",0],8:[5,"MW",20,"MWh",5,"van 5","Netcodetest",0],
     9:[5,"MW",20,"MWh",5,"van 5","Live op de markt",1]}),
}
ORDER=["ms","hs","co"]
LAYERS=["ext","extra","dims","plotmark","plan","civil","cable","cont","stat","air"]

def scene_svg(k):
    L=S[k]
    g=lambda key,cls,extra="": ('<g class="lay l-%s"%s>%s</g>'%(cls,extra,L[key]) if L.get(key) else "")
    return ('<g class="sc sc-%s" data-v="%s">'%(k,k)+
      '<g class="l-ground">'+L['ground']+'</g>'+
      g('ext','ext')+g('civil','civil')+g('extra','extra')+
      '<g class="lay l-cont" filter="url(#soft)">'+L['shadows']+'</g>'+
      g('cable','cable')+g('cont','cont')+g('stat','stat')+
      g('plan','plan')+g('plotmark','plotmark')+g('dims','dims')+g('air','air')+
      '<g class="lay l-cont">'+L.get('labels','')+L.get('labels2','')+'</g>'+
      '<g class="hits">'+L.get('hits','')+'</g></g>')

DEFS='''<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EFE9E4"/><stop offset="1" stop-color="#DCD2CB"/></linearGradient>
  <radialGradient id="vig" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#2E0016" stop-opacity=".10"/></radialGradient>
  <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.0"/></filter>
  <linearGradient id="gTop" x1="0" y1="0" x2=".65" y2="1"><stop offset="0" stop-color="#F5F2EF"/><stop offset="1" stop-color="#DFD8D2"/></linearGradient>
  <pattern id="grit" width="7" height="7" patternUnits="userSpaceOnUse">
    <circle cx="1.5" cy="1.8" r=".55" fill="#8F8478" opacity=".22"/><circle cx="4.9" cy="4.2" r=".45" fill="#8F8478" opacity=".18"/>
    <circle cx="2.8" cy="5.6" r=".35" fill="#6E655C" opacity=".14"/><circle cx="6.1" cy="1.2" r=".4" fill="#6E655C" opacity=".12"/>
  </pattern>
</defs>'''

svg=('<svg id="scene" class="scene" viewBox="0 0 900 560" role="img" aria-labelledby="stt">'
  '<title id="stt">Isometrische weergave van een batterijpark dat stap voor stap wordt gebouwd</title>'
  +DEFS+'<rect x="0" y="0" width="900" height="560" fill="url(#sky)"/>'
  +"".join(scene_svg(k) for k in ORDER)
  +'<rect x="0" y="0" width="900" height="560" fill="url(#vig)" pointer-events="none"/></svg>')

# CSS voor zichtbaarheid en oplichten
css=[".sc{display:none}"]
for k in ORDER:
    css.append('[data-variant="%s"] .sc-%s{display:inline}'%(k,k))
    V=VAR[k]
    for p,ls in V["vis"].items():
        css.append(",".join('[data-variant="%s"] .scene.at-%d .l-%s'%(k,p,l) for l in ls)+"{opacity:var(--dim,1)}")
    for p,ls in V["act"].items():
        css.append(",".join('[data-variant="%s"] #scene.at-%d .l-%s'%(k,p,l) for l in ls)+"{opacity:1}")
    last=max(V["vis"]); css.append('[data-variant="%s"] #scene.at-%d{--dim:1}'%(k,last))
CSS_VIS="\n".join(css)

def rail(k):
    V=VAR[k]
    return "".join('<div class="chap"><span class="chap-t">%s</span><div class="chap-b">%s</div></div>'%(
      t,"".join('<button type="button" data-go="%d"><span class="num">%02d</span>%s</button>'%(n,n,V["nav"][n]) for n in ns))
      for t,ns in V["chap"])
def phases(k):
    V=VAR[k]; out=[]
    for i,(t,ns) in enumerate(V["chap"]):
        out.append('<div class="chapter"><span class="chap-n">Hoofdstuk %d van 4</span><h2 class="chap-h">%s</h2></div>'%(i+1,t))
        for n in ns:
            out.append('<section class="phase%s" data-phase="%d">%s</section>'%(" is-active" if n==1 else "",n,PH[k][str(n)]))
    return "\n".join(out)
def specs(k):
    return "".join('<div class="spec"><dt>%s</dt><dd>%s <small>%s</small></dd></div>'%s_ for s_ in VAR[k]["specs"])

json.dump(dict(svg=svg,css=CSS_VIS,
  rails={k:rail(k) for k in ORDER}, phases={k:phases(k) for k in ORDER},
  specs={k:specs(k) for k in ORDER},
  meta={k:dict(naam=VAR[k]["naam"],sub=VAR[k]["sub"],kader=VAR[k]["kader"],
               data=VAR[k]["data"],last=max(VAR[k]["vis"])) for k in ORDER}),
  open('/tmp/iso/parts.json','w'))
print("svg",len(svg),"css",len(CSS_VIS))
