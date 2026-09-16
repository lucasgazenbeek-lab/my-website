# -*- coding: utf-8 -*-
import math, json

def mk(TX,TY,S):
    K=0.866*S
    def P(x,y,z=0.0): return ((x-y)*K+TX,(x+y)*0.5*S-z*S+TY)
    return P

M=dict(grass="#969A80",grass_s="#8E9279",plotg="#A0A488",gravel="#D9D1C6",road="#A79C93",
  slab="#C7BDB3",slab_s="#A99D94",ct_e="#D2C8C2",ct_s="#ADA099",ct_rim="#FFFFFF",
  ct_door="#5E1229",ct_band="#470020",blind="#C2B7B0",
  hv_top="#CEC4BD",hv_e="#AFA39C",hv_s="#93857E",st_e="#BCB1AB",st_s="#9A8C85",
  ik_top="#D8CEC7",ik_e="#B8ACA5",ik_s="#998A80",ik_roof="#470020",
  steel="#8A8079",steel_l="#A69C94",steel_d="#6E655F",
  trafo_top="#B9AFA8",trafo_e="#9C918A",trafo_s="#807570",
  shadow="rgba(46,28,14,.46)",fence="#7E736C",
  pv_top="#3E4A63",pv_e="#2F3950",pv_s="#262E42",pv_leg="#8A8079")

CT=(6.06,2.44,2.90); ST=(12.19,2.44,2.90); Z0=.35; GAPX=1.4
CW=CT[0]*2+GAPX; CD=CT[1]*2

class Scene:
    def __init__(self,TX,TY,S=4.6):
        self.S=S; self.P=mk(TX,TY,S); self.SH=[]
    def pts(self,*p): return " ".join("%.1f,%.1f"%q for q in p)
    def poly(self,p,f,e=""): return '<polygon points="%s" fill="%s"%s/>'%(self.pts(*p),f,e)
    def line(self,a,b,st,w=1.0,e=""):
        return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="%s"%s/>'%(self.P(*a)+self.P(*b)+(st,w,e))
    def shadow(self,x,y,w,d,off=1.1):
        P=self.P
        self.SH.append(self.poly([P(x+off,y+off,0),P(x+w+off,y+off,0),P(x+w+off,y+d+off,0),P(x+off,y+d+off,0)],M["shadow"]))
    def flat(self,x,y,w,d,f,e=""):
        P=self.P; return self.poly([P(x,y),P(x+w,y),P(x+w,y+d),P(x,y+d)],f,e)
    def box(self,x,y,w,d,h,top,east,south,z0=0.0,band=None,end=None,south_face=True,rim=False,seams=0):
        P=self.P; o=[]; t=h+z0
        o.append(self.poly([P(x,y,t),P(x+w,y,t),P(x+w,y+d,t),P(x,y+d,t)],top))
        for k in range(1,seams+1):
            sx=x+w*k/(seams+1); o.append(self.line((sx,y,t),(sx,y+d,t),"#C9BFB8",.55,' opacity=".8"'))
        o.append(self.poly([P(x+w,y,z0),P(x+w,y+d,z0),P(x+w,y+d,t),P(x+w,y,t)],east))
        if south_face: o.append(self.poly([P(x,y+d,z0),P(x+w,y+d,z0),P(x+w,y+d,t),P(x,y+d,t)],south))
        o.append(self.line((x+w,y,z0),(x+w,y+d,z0),"rgba(46,28,14,.35)",1.1))
        if south_face: o.append(self.line((x,y+d,z0),(x+w,y+d,z0),"rgba(46,28,14,.35)",1.1))
        if band is not None:
            b0,b1=z0+h*.66,z0+h*.80
            o.append(self.poly([P(x+w,y,b0),P(x+w,y+d,b0),P(x+w,y+d,b1),P(x+w,y,b1)],band))
            if south_face: o.append(self.poly([P(x,y+d,b0),P(x+w,y+d,b0),P(x+w,y+d,b1),P(x,y+d,b1)],band))
        if end=="door":
            o.append(self.poly([P(x+w,y+.22,z0+.12),P(x+w,y+d-.22,z0+.12),P(x+w,y+d-.22,z0+h-.18),P(x+w,y+.22,z0+h-.18)],M["ct_door"]))
            o.append(self.line((x+w,y+d/2,z0+.12),(x+w,y+d/2,z0+h-.18),"#2E0016",.5,' opacity=".55"'))
        elif end=="blind":
            o.append(self.poly([P(x+w,y+.4,z0+1.0),P(x+w,y+d-.4,z0+1.0),P(x+w,y+d-.4,z0+h-.5),P(x+w,y+.4,z0+h-.5)],M["blind"]))
            for k in (.3,.55,.8):
                zz=z0+1.0+(h-1.5)*k; o.append(self.line((x+w,y+.4,zz),(x+w,y+d-.4,zz),"#9A8D86",.5,' opacity=".75"'))
        if rim:
            o.append(self.line((x,y,t),(x+w,y,t),M["ct_rim"],.7,' opacity=".55"'))
            o.append(self.line((x,y,t),(x,y+d,t),M["ct_rim"],.7,' opacity=".4"'))
        return "".join(o)
    def cluster(self,x,y,flip=False):
        dx=CT[0]+GAPX
        a,b=("door","blind") if flip else ("blind","door")
        units=sorted([(0,0,a),(0,CT[1],b),(dx,0,b),(dx,CT[1],a)],key=lambda u:u[0]+u[1])
        self.shadow(x,y,CW,CD); o=[]
        for ox,oy,e in units:
            cx,cy=x+ox,y+oy
            o.append(self.box(cx,cy,CT[0],CT[1],CT[2],"url(#gTop)",M["ct_e"],M["ct_s"],z0=Z0,
                     band=M["ct_band"],end=e,south_face=(oy>0),rim=True,seams=3))
            o.append(self.box(cx+CT[0]*.30,cy+.55,CT[0]*.34,CT[1]*.5,.5,M["hv_top"],M["hv_e"],M["hv_s"],z0=Z0+CT[2]))
        return "".join(o)
    def slab(self,x,y,w,d,h=.35):
        P=self.P
        return (self.poly([P(x,y,h),P(x+w,y,h),P(x+w,y+d,h),P(x,y+d,h)],M["slab"])+
                self.poly([P(x+w,y,0),P(x+w,y+d,0),P(x+w,y+d,h),P(x+w,y,h)],M["slab_s"])+
                self.poly([P(x,y+d,0),P(x+w,y+d,0),P(x+w,y+d,h),P(x,y+d,h)],M["slab_s"]))
    def fence_of(self,x,y,w,d,h=2.4,step=7,col=None):
        col=col or M["fence"]; o=[]; c=[(x,y),(x+w,y),(x+w,y+d),(x,y+d)]
        for i in range(4):
            a,b=c[i],c[(i+1)%4]
            o.append(self.line((a[0],a[1],h),(b[0],b[1],h),col,1.0,' opacity=".8"'))
            o.append(self.line((a[0],a[1],h*.5),(b[0],b[1],h*.5),col,.6,' opacity=".45"'))
            n=max(1,int(math.hypot(b[0]-a[0],b[1]-a[1])/step))
            for k in range(n+1):
                t=k/n; px=a[0]+(b[0]-a[0])*t; py=a[1]+(b[1]-a[1])*t
                o.append(self.line((px,py,0),(px,py,h),col,.9,' opacity=".75"'))
        return "".join(o)
    def mast(self,x,y,h=9.0):
        P=self.P
        return (self.line((x,y,0),(x,y,h),"#8A8079",1.3)+self.line((x,y,h),(x-1.4,y,h),"#8A8079",1.0)+
                self.poly([P(x-2.0,y-.35,h),P(x-.9,y-.35,h),P(x-.9,y+.35,h),P(x-2.0,y+.35,h)],"#C9BFB6"))
    def portal(self,x,y0,y1,h,lw=.5):
        o=[]
        for yy in (y0,y1):
            o.append(self.line((x,yy,0),(x,yy,h),M["steel"],1.6))
            o.append(self.line((x-lw,yy,0),(x-lw,yy,h),M["steel_d"],.8,' opacity=".7"'))
            for k in range(5):
                z0,z1=h*k/5,h*(k+1)/5
                o.append(self.line((x-lw,yy,z0),(x,yy,z1),M["steel_l"],.5,' opacity=".6"'))
                o.append(self.line((x,yy,z0),(x-lw,yy,z1),M["steel_l"],.5,' opacity=".6"'))
        o.append(self.line((x,y0,h),(x,y1,h),M["steel"],1.4))
        o.append(self.line((x,y0,h-1.4),(x,y1,h-1.4),M["steel_d"],.8,' opacity=".65"'))
        n=max(1,int((y1-y0)/4))
        for k in range(n):
            a=y0+(y1-y0)*k/n; b=y0+(y1-y0)*(k+1)/n
            o.append(self.line((x,a,h),(x,b,h-1.4),M["steel_l"],.5,' opacity=".55"'))
            o.append(self.line((x,a,h-1.4),(x,b,h),M["steel_l"],.5,' opacity=".55"'))
        return "".join(o)
    def trafo(self,x,y,w,d,h):
        self.shadow(x,y,w,d)
        o=[self.box(x,y,w,d,h,M["trafo_top"],M["trafo_e"],M["trafo_s"])]
        for i in range(6): o.append(self.box(x+w*(.1+i*.14),y+d,w*.06,1.1,h*.72,"#A79C95","#8D8279","#786E68"))
        o.append(self.box(x+w*.3,y+d*.25,w*.18,d*.4,1.2,"#C2B8B1","#A59A93","#8B807A",z0=h))
        for k in (.25,.5,.75): o.append(self.line((x+w*k,y+d*.5,h+1.2),(x+w*k,y+d*.5,h+3.2),"#C9BFB6",1.2))
        return "".join(o)
    def yard(self,hx,hy,hw,hd,ntr=2,nport=3,ph=15.0,ctrl=True):
        o=[self.flat(hx,hy,hw,hd,"#CFC8BB"),self.flat(hx,hy,hw,hd,"url(#grit)")]
        o.append(self.fence_of(hx,hy,hw,hd,2.6,8,"#79706A"))
        for i in range(ntr): o.append(self.trafo(hx+5,hy+9+i*19,8,6,5.0))
        if ctrl:
            self.shadow(hx+4,hy+hd-9,11,6)
            o.append(self.box(hx+4,hy+hd-9,11,6,4.0,M["ik_top"],M["ik_e"],M["ik_s"],band="#4A4540"))
        px0=hx+hw*.45
        for i in range(nport): o.append(self.portal(px0+i*9,hy+7,hy+hd-7,ph))
        for dz in (11,hd*.5,hd-13):
            for z in (ph-1.4,ph):
                o.append(self.line((px0,hy+dz,z),(px0+(nport-1)*9,hy+dz,z),"#9A9089",1.0,' opacity=".9"'))
            o.append(self.line((px0+(nport-1)*9,hy+dz,ph),(hx+hw+14,hy+dz-4,ph+1.5),"#9A9089",1.0,' opacity=".8"'))
        for dz in (11,hd*.5):
            o.append(self.line((px0,hy+dz,ph-1.4),(hx+9,hy+dz+2,8.2),"#9A9089",.9,' opacity=".75"'))
        return "".join(o)
    def pvrow(self,x,y,w,d):
        """zonnepaneelrij, licht hellend"""
        P=self.P
        o=[self.poly([P(x,y,1.6),P(x+w,y,1.6),P(x+w,y+d,.5),P(x,y+d,.5)],M["pv_top"])]
        o.append(self.poly([P(x+w,y,1.6),P(x+w,y+d,.5),P(x+w,y+d,.2),P(x+w,y,1.2)],M["pv_e"]))
        o.append(self.poly([P(x,y+d,.5),P(x+w,y+d,.5),P(x+w,y+d,.2),P(x,y+d,.2)],M["pv_s"]))
        for k in range(1,4): o.append(self.line((x+w*k/4,y,1.6),(x+w*k/4,y+d,.5),"#55618033",.5))
        return "".join(o)

# ======================= varianten =======================
def build(cfg):
    sc=Scene(*cfg["T"]); P=sc.P; L={}
    gx,gy,gw,gd=cfg["GND"]; plot=cfg["PLOT"]; fen=cfg["FENCE"]
    L['ground']=(sc.flat(gx,gy,gw,gd,M["grass"])+
      sc.poly([P(gx+gw,gy,0),P(gx+gw,gy+gd,0),P(gx+gw,gy+gd,-1.6),P(gx+gw,gy,-1.6)],M["grass_s"])+
      sc.poly([P(gx,gy+gd,0),P(gx+gw,gy+gd,0),P(gx+gw,gy+gd,-1.6),P(gx,gy+gd,-1.6)],M["grass_s"])+
      sc.flat(*plot,M["plotg"])+sc.flat(*plot,"none",' stroke="#7D8468" stroke-width="1" stroke-dasharray="5 4"'))

    rows=cfg["ROWS"]
    groups=cfg.get("GROUPS") or [(cfg["COLS"], cfg.get("SKX"))]
    cols=groups[0][0]
    _fl=cfg.get("FLIP") or []
    clusters=[(cx,y) for y in rows for cs,_ in groups for cx in cs]
    _flipx=set(); _flipsk=set()
    for gi,(cs,_sk) in enumerate(groups):
        if gi in _fl:
            _flipx.update(cs)
            if _sk is not None: _flipsk.add(_sk)
    skids=[(sk,y+1.2) for y in rows for _,sk in groups if sk is not None]

    # bestaand net of park
    ext=[]
    if cfg.get("HV"): ext.append(sc.yard(*cfg["HV"],ntr=cfg.get("HVTR",2),nport=cfg.get("HVPORT",3)))
    if cfg.get("PV"):
        px,py,pw,pd,npv=cfg["PV"]
        for i in range(npv): ext.append(sc.pvrow(px,py+i*(pd/npv),pw,pd/npv*.62))
        ext.append('<text class="t t-lbl" x="%.1f" y="%.1f">Bestaand zonnepark</text>'%P(px,py-3,0))
    L['ext']="".join(ext)

    L['plan']="".join(sc.poly([P(cx,cy,.05),P(cx+CW,cy,.05),P(cx+CW,cy+CD,.05),P(cx,cy+CD,.05)],"none",
        ' stroke="#7E7268" stroke-width="1" stroke-dasharray="3 2.5"') for cx,cy in clusters)+\
      "".join(sc.poly([P(sx,sy,.05),P(sx+ST[0],sy,.05),P(sx+ST[0],sy+ST[1],.05),P(sx,sy+ST[1],.05)],"none",
        ' stroke="#7E7268" stroke-width="1" stroke-dasharray="3 2.5"') for sx,sy in skids)

    civ=[sc.flat(*fen,M["gravel"]),sc.flat(*fen,"url(#grit)")]
    for r in cfg.get("ROADS",[]): civ.append(sc.flat(*r,M["road"]))
    civ+= [sc.slab(cx-.6,cy-.6,CW+1.2,CD+1.2) for cx,cy in clusters]
    civ+= [sc.slab(sx-.6,sy-.6,ST[0]+1.2,ST[1]+1.2) for sx,sy in skids]
    civ.append(sc.fence_of(*fen))
    civ+= [sc.mast(*m) for m in cfg.get("MASTS",[])]
    if cfg.get("RESERVE"):
        rx,ry,rw,rd,rlbl=cfg["RESERVE"]
        civ.append(sc.poly([P(rx,ry,.06),P(rx+rw,ry,.06),P(rx+rw,ry+rd,.06),P(rx,ry+rd,.06)],"#C9A46A",' opacity=".14"'))
        civ.append(sc.poly([P(rx,ry,.06),P(rx+rw,ry,.06),P(rx+rw,ry+rd,.06),P(rx,ry+rd,.06)],"none",
          ' stroke="#8A5A0E" stroke-width="1.1" stroke-dasharray="5 4" opacity=".5"'))
        civ.append('<text class="t t-lbl" x="%.1f" y="%.1f" text-anchor="middle">%s</text>'%(P(rx+rw/2,ry+rd/2,0)+(rlbl,)))
    L['civil']="".join(civ)

    L['cont']="".join('<g class="ct">%s</g>'%sc.cluster(cx,cy,cx in _flipx)
        for cx,cy in sorted(clusters,key=lambda c:c[0]+c[1]))

    st=[]
    for sx,sy in sorted(skids,key=lambda c:c[0]+c[1]):
        sc.shadow(sx,sy,ST[0],ST[1])
        st.append(sc.box(sx,sy,ST[0],ST[1],ST[2],"url(#gTop)",M["st_e"],M["st_s"],z0=Z0,band="#470020",
                  end=("blind" if sx in _flipsk else "door"),rim=True,seams=5))
    ik=cfg.get("IK")
    if ik:
        sc.shadow(*ik[:4]); ikx,iky,ikw,ikd,ikh=ik
        st.append(sc.box(ikx,iky,ikw,ikd,ikh,M["ik_top"],M["ik_e"],M["ik_s"]))
        for k in range(max(1,int(ikd/4.5))):
            dz=iky+1.6+k*4.3
            if dz+2.2<iky+ikd:
                st.append(sc.poly([P(ikx+ikw,dz,.15),P(ikx+ikw,dz+2.2,.15),P(ikx+ikw,dz+2.2,ikh*.75),P(ikx+ikw,dz,ikh*.75)],"#9C8E85"))
        st.append(sc.poly([P(ikx-.4,iky-.4,ikh),P(ikx+ikw+.4,iky-.4,ikh),P(ikx+ikw+.4,iky+ikd+.4,ikh),P(ikx-.4,iky+ikd+.4,ikh)],M["ik_roof"]))
        st.append(sc.poly([P(ikx+ikw+.4,iky-.4,ikh-.3),P(ikx+ikw+.4,iky+ikd+.4,ikh-.3),P(ikx+ikw+.4,iky+ikd+.4,ikh),P(ikx+ikw+.4,iky-.4,ikh)],"#350017"))
    L['stat']="".join(st)

    cab=[]
    def l3(a,b,c): cab.append('<path class="%s" d="M%.1f %.1f L%.1f %.1f"/>'%((c,)+P(*a)+P(*b)))
    def _drop(gi,sk): return (sk+1.0) if gi in _fl else (sk+ST[0]-1)
    for y in rows:
        for gi,(cs,sk) in enumerate(groups):
            items=[(cx,cx+CW) for cx in cs]
            if sk is not None: items.append((sk,sk+ST[0]))
            items.sort()
            for i in range(len(items)-1):
                l3((items[i][1],y+CD*.5,.6),(items[i+1][0],y+CD*.5,.6),"dc")
            if sk is not None and cfg.get("BUSY") is not None:
                dx=_drop(gi,sk); l3((dx,y+2.4,.6),(dx,cfg["BUSY"],.6),"mv")
        if cfg.get("BUS") is not None and groups[0][1] is not None:
            l3((groups[0][1]+ST[0],y+2.4,.6),(cfg["BUS"],y+2.4,.6),"mv")
    if cfg.get("BUSY") is not None:
        xs=[_drop(gi,sk) for gi,(_c,sk) in enumerate(groups) if sk is not None]
        if cfg.get("BUSEND"): xs.append(cfg["BUSEND"][0])
        l3((min(xs),cfg["BUSY"],.6),(max(xs),cfg["BUSY"],.6),"mv")
        if cfg.get("BUSEND"): l3((cfg["BUSEND"][0],cfg["BUSY"],.6),(cfg["BUSEND"][1],cfg["BUSEND"][2],.6),"mv")
    if cfg.get("BUS") is not None:
        l3((cfg["BUS"],rows[0]+2.4,.6),(cfg["BUS"],rows[-1]+2.4,.6),"mv")
        if ik: l3((cfg["BUS"],(rows[0]+rows[-1])/2+2.4,.6),(ik[0],(rows[0]+rows[-1])/2+2.4,.6),"mv")
    L['cable']="".join(cab)
    if cfg.get("HVCAB"):
        wp=cfg["HVCAB"]; d="M"+" L".join("%.1f %.1f"%P(x,y,.6) for x,y in wp)
        lx,ly,lt=cfg.get("HVCABLBL",(wp[0][0],wp[0][1]-3,"150 kV grondkabel"))
        L['air']=('<path class="hvc" d="%s"/>'%d)+\
          ('<text class="t t-key" x="%.1f" y="%.1f" text-anchor="end">%s</text>'%(P(lx,ly,0)+(lt,)))
    else:
        L['air']=('<path class="mv" d="M%.1f %.1f L%.1f %.1f"/>'%(P(*cfg["AIR"][0])+P(*cfg["AIR"][1]))) if cfg.get("AIR") else ""

    def lab(x,y,z,t,c="t-blk",anc=None):
        px,py=P(x,y,z)
        a=' text-anchor="%s"'%anc if anc else ""
        return '<text class="t %s" x="%.1f" y="%.1f"%s>%s</text>'%(c,px,py,a,t)
    _bl=[]; _n=0
    _glx=cfg.get("GLBLX") or [(gc[0]-5.5,None) for gc,_ in groups]
    for gi,(gc,_sk) in enumerate(groups):
        lx,anc=_glx[gi]
        for y in rows:
            _n+=1
            _bl.append(lab(lx,y+2.0,0,"Blok %d"%_n,"t-blk",anc)+lab(lx,y+2.0,-2.6,cfg["BLOKLBL"],"t-sub",anc))
    L['labels']="".join(_bl)
    L['labels2']=(lab(ik[0]-1,ik[1]-2.5,0,cfg.get("IKLBL","Inkoopstation")) if ik else "")+\
                 (lab(cfg["HV"][0]-4,cfg["HV"][1]-3,0,cfg.get("HVLBL","Bestaand hoogspanningsstation"),"t-key") if cfg.get("HV") else "")


    # uitzetten van het perceel en de maatvoering
    def dimline(a,b,txt,side=1,tick=1.6):
        o=[sc.line(a+(0,),b+(0,),"#6E625B",.9)]
        dx,dy=b[0]-a[0],b[1]-a[1]; Ln=math.hypot(dx,dy) or 1
        nx,ny=-dy/Ln*tick,dx/Ln*tick
        for p in (a,b): o.append(sc.line((p[0]-nx/2,p[1]-ny/2,0),(p[0]+nx/2,p[1]+ny/2,0),"#6E625B",.9))
        mx,my=(a[0]+b[0])/2+nx*side*1.6,(a[1]+b[1])/2+ny*side*1.6
        px,py=P(mx,my,0); o.append('<text class="t t-dim" x="%.1f" y="%.1f">%s</text>'%(px,py,txt))
        return "".join(o)
    def stake(x,y):
        return (sc.line((x,y,0),(x,y,1.5),"#8A7F76",1.0)+
                sc.poly([P(x-.45,y-.45,1.5),P(x+.45,y-.45,1.5),P(x+.45,y+.45,1.5),P(x-.45,y+.45,1.5)],"#B4433F"))
    pw,pd=plot[2],plot[3]
    L['plotmark']=("".join(stake(x,y) for x,y in [(0,0),(pw,0),(pw,pd),(0,pd)])+
      sc.poly([P(0,0),P(pw,0),P(pw,pd),P(0,pd)],"none",' stroke="#5E5349" stroke-width="1.4"')+
      dimline((0,pd+3),(pw,pd+3),"%d m"%pw,1)+dimline((pw+3,0),(pw+3,pd),"%d m"%pd,-1))
    L['dims']=dimline(*cfg["DIM"]) if cfg.get("DIM") else ""

    H=[]
    def hit(x,y,w,d,z,cls,t,b):
        return '<polygon class="hit %s" points="%s" data-t="%s" data-b="%s"/>'%(cls,sc.pts(P(x,y,z),P(x+w,y,z),P(x+w,y+d,z),P(x,y+d,z)),t,b)
    for cx,cy in clusters:
        H.append(hit(cx-.6,cy-.6,CW+1.2,CD+1.2,Z0+CT[2],"h-cont","Batterijcluster, 4 units",
          "Vier containers van 20 voet tegen elkaar en gespiegeld, elk 5 MWh in twaalf clusters. LFP 314 Ah, vloeistofgekoeld. Samen 20 MWh op een fundatie."))
    for sx,sy in skids:
        H.append(hit(sx-.6,sy-.6,ST[0]+1.2,ST[1]+1.2,Z0+ST[2],"h-stat","Conversiestation, 10 MVA",
          "40 voet met acht omvormers van 1250 kVA, de transformator en de middenspanningsinstallatie in een behuizing. Schakelinstallatie SF6-vrij."))
    if ik: H.append(hit(ik[0],ik[1],ik[2],ik[3],ik[4],"h-ik",cfg.get("IKLBL","Inkoopstation"),cfg.get("IKTIP","Hier komen de blokken samen op de middenspanningsring.")))
    if cfg.get("HV"): H.append(hit(*cfg["HV"],0,"h-hv",cfg.get("HVLBL","Bestaand hoogspanningsstation"),cfg.get("HVTIP","Het station van de netbeheerder.")))
    L['hits']="".join(H)
    L['shadows']="".join(sc.SH)
    L['extra']=cfg.get("EXTRA_FN",lambda s:"")(sc)
    return L

# ======================= configuraties =======================
MS = dict(T=(340,34,4.6), GND=(-10,-10,162,102), PLOT=(0,0,78,62), FENCE=(8,4,62,50),
  ROWS=[10,20,30,40], COLS=[16,31], SKX=46.2, BUS=59, IK=(61,22,4,10,3.1),
  ROADS=[(8,4,6,50),(8,54,6,8),(16,47,18,5)], MASTS=[(11,7),(11,51),(67,7),(67,51)],
  HV=(90,2,46,50), AIR=((65,27,3.4),(93,30,8.4)), BLOKLBL="10 MW / 40 MWh",
  DIM=((78,30),(90,30),"12 m tot het station",1),
  HVTIP="Het station van de netbeheerder. Twaalf meter tot de perceelgrens, en dat is precies waarom deze locatie is gekozen.")

HS = dict(T=(337,30,3.3), GND=(-8,-8,186,116), PLOT=(0,0,122,104), FENCE=(8,4,106,92),
  ROWS=[12,24,36,48,60], GROUPS=[([16,31],46.2),([77.9,92.9],64.0)], COLS=[16,31], SKX=46.2,
  FLIP=[1], GLBLX=[(9.0,"end"),(110.0,None)], RESERVE=(16,70,42,16,"Reservering tweede fase"),
  BUSY=67, BUSEND=(96,67,70), IK=None,
  ROADS=[(8,4,6,92),(8,96,6,8),(16,86,68,5)], MASTS=[(11,7),(11,93),(111,7),(111,93)],
  HV=(140,16,40,46), HVTR=2, HVPORT=3, AIR=None,
  HVCAB=[(114,86),(131,86),(131,40),(143,40)], HVCABLBL=(130,64,"150 kV grondkabel"),
  BLOKLBL="10 MW / 40 MWh", HVLBL="Station landelijke netbeheerder",
  DIM=((122,48),(140,48),"18 m tot het station",1),
  HVTIP="Aansluiting op 150 kV. Boven de honderd megawatt loopt de aanvraag via de landelijke netbeheerder, en dat is een traject van jaren.")

CO = dict(T=(340,40,4.0), GND=(-10,-10,150,96), PLOT=(0,0,104,72), FENCE=(62,30,36,26),
  ROWS=[38], COLS=[66], SKX=82.0, BUS=None, IK=None,
  ROADS=[(62,56,36,5)], MASTS=[(65,33),(95,53)],
  PV=(6,8,40,56,9), HV=None, BLOKLBL="5 MW / 20 MWh",
  DIM=((57,41),(62,41),"Bestaande aansluiting",-1),
  AIR=None)

def hs_extra(sc):
    """eigen hoogspanningsstation in de zuidoosthoek van het terrein"""
    P=sc.P; X,Y=84,70
    o=[sc.flat(X,Y,30,24,"#CFC8BB"), sc.flat(X,Y,30,24,"url(#grit)")]
    o.append(sc.fence_of(X,Y,30,24,2.6,8,"#79706A"))
    o.append(sc.trafo(X+3,Y+4,9,7,6.0)); o.append(sc.trafo(X+3,Y+15,9,7,6.0))
    sc.shadow(X+17,Y+4,8,6)
    o.append(sc.box(X+17,Y+4,8,6,4.2,M["ik_top"],M["ik_e"],M["ik_s"],band="#4A4540"))
    o.append(sc.portal(X+25,Y+3,Y+21,13.5))
    o.append(sc.line((X+25,Y+5,12.1),(X+25,Y+19,12.1),"#9A9089",1.0,' opacity=".9"'))
    o.append(sc.line((X+25,Y+5,13.5),(X+25,Y+19,13.5),"#9A9089",1.0,' opacity=".9"'))
    o.append('<text class="t t-key" x="%.1f" y="%.1f" text-anchor="end">Eigen hoogspanningsstation</text>'%P(X-8,Y-2,0))
    return "".join(o)

def co_extra(sc):
    """bestaand inkoopstation van het zonnepark"""
    P=sc.P; sc.shadow(50,38,7,6)
    o=[sc.box(50,38,7,6,4.0,M["ik_top"],M["ik_e"],M["ik_s"])]
    o.append(sc.poly([P(49.6,37.6,4.0),P(57.4,37.6,4.0),P(57.4,44.4,4.0),P(49.6,44.4,4.0)],M["ik_roof"]))
    o.append('<text class="t t-key" x="%.1f" y="%.1f">Bestaand inkoopstation</text>'%P(44,35,0))
    o.append('<path class="mv" d="M%.1f %.1f L%.1f %.1f"/>'%(P(82,40.4,.6)+P(57,41,.6)))
    o.append('<path class="mv" d="M%.1f %.1f L%.1f %.1f"/>'%(P(50,41,.6)+P(14,41,.6)))
    o.append('<text class="t t-lbl" x="%.1f" y="%.1f">Bestaande aansluiting</text>'%P(14,38,0))
    return "".join(o)

HS["EXTRA_FN"]=hs_extra; CO["EXTRA_FN"]=co_extra
out={}
for name,cfg in (("ms",MS),("hs",HS),("co",CO)):
    out[name]=build(cfg)
    print(name, {k:len(v) for k,v in out[name].items() if v})
json.dump(out, open('/tmp/iso/scenes.json','w'))
