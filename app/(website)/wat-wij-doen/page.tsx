"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <path d="M3 8l3.5 3.5L13 4" stroke={dark ? "#ffffff" : "#470020"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WatWijDoen() {
  const { t } = useLang();
  const s = t.services;

  const steps = [
    { n: "01", title: s.step1Title, desc: s.step1Desc },
    { n: "02", title: s.step2Title, desc: s.step2Desc },
    { n: "03", title: s.step3Title, desc: s.step3Desc },
    { n: "04", title: s.step4Title, desc: s.step4Desc },
  ];

  const guarantees = [
    { title: s.g1Title, items: s.g1Items },
    { title: s.g2Title, items: s.g2Items },
    { title: s.g3Title, items: s.g3Items },
    { title: s.g4Title, items: s.g4Items },
  ];

  const guaranteeIcons = [
    // Shield — factory guarantee
    <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    // Globe — Europe supply
    <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    // Calendar — delivery planning
    <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    // Layers — scalable architecture
    <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  ];

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative flex items-center max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
              Onze diensten
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}>
              {s.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{s.heroSub}</p>
          </div>
        </div>
      </section>

      {/* ─── HET VERHAAL — Wit ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">Waarom batterijopslag</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1a0810] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}>
                Het stroomnet zit vol. Wij lossen dat op.
              </h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed mb-6">
                Nederland kampt met netcongestie. Bedrijven kunnen niet meer aansluiten op het net, zonneparken worden afgeremd en industrieterreinen lopen vast. De oplossing is simpel in theorie: sla energie op wanneer er teveel is, gebruik het wanneer het net het nodig heeft.
              </p>
              <p className="text-[#6b4a56] leading-relaxed mb-6">
                In de praktijk is dat complexer. Je hebt een partij nodig die de techniek beheerst, de fabrikanten kent, en het hele traject van ontwerp tot oplevering kan regelen. Dat is precies wat Gridstate doet.
              </p>
              <p className="text-[#6b4a56] leading-relaxed">
                Wij zijn geen doorgeefluik. Wij bouwen. Van de eerste haalbaarheidsanalyse tot de dag dat het systeem live gaat — en daarna.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                {/* Visual: stacked stat cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "A tot Z", label: "Eén verantwoordelijke partij", desc: "Van vergunning tot oplevering" },
                    { val: "5+", label: "Directe fabrikantrelaties", desc: "Geen tussenpersonen" },
                    { val: "20 MW+", label: "Technisch ondersteund", desc: "Bewezen track record" },
                    { val: "100%", label: "Engineering-first", desc: "Kwaliteit boven snelheid" },
                  ].map((item, i) => (
                    <div key={i} className={`p-5 rounded-lg border-2 ${i === 0 ? "border-[#470020] bg-[#470020]" : "border-[#e0d5d0] bg-[#f9f6f4]"}`}>
                      <div className={`text-2xl font-black mb-1 ${i === 0 ? "text-white" : "text-[#470020]"}`}
                        style={{ letterSpacing: "-0.03em" }}>{item.val}</div>
                      <div className={`text-xs font-bold mb-1 ${i === 0 ? "text-white/80" : "text-[#1a0810]"}`}>{item.label}</div>
                      <div className={`text-xs ${i === 0 ? "text-white/50" : "text-[#6b4a56]"}`}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── INTRO — lichtgrijs ──────────────────────────────── */}
      <section className="py-16 bg-[#f9f6f4] border-y border-[#e0d5d0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-[#1a0810] mb-4 tracking-tight">{s.introTitle}</h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed">{s.introText}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── C&I — Wit ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Marktsegment 01
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-3"
                style={{ letterSpacing: "-0.03em" }}>
                {s.ciTitle}
              </h2>
              <p className="text-[#470020] text-sm font-semibold tracking-wide mb-5">{s.ciSub}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{s.ciDesc}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-8">
                Voor bedrijven met een grote, voorspelbare energievraag is batterijopslag direct rendabel. U betaalt geen piekprijzen meer, vermijdt netcongestieboetes en benut zelf opgewekte zonne-energie maximaal. Wij rekenen het voor, ontwerpen het systeem op maat en leveren het kant-en-klaar op.
              </p>
              <div className="flex flex-wrap gap-2">
                {s.ciUseCases.map((u, i) => (
                  <span key={i} className="px-3 py-1.5 border border-[#470020]/20 text-xs font-semibold text-[#470020] rounded-sm bg-[#f9f6f4]">
                    {u}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 border border-[#e0d5d0] rounded-lg bg-white shadow-sm">
                <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-5">Hoe het werkt</p>
                <div className="flex flex-col gap-4">
                  {[
                    { step: "01", title: "Analyse", desc: "We analyseren uw energieprofiel: wanneer verbruikt u wat, en wat kost dat nu?" },
                    { step: "02", title: "Ontwerp", desc: "Op basis van de analyse ontwerpen we een systeem dat maximaal rendement geeft." },
                    { step: "03", title: "Realisatie", desc: "Wij regelen vergunningen, inkoop, installatie en netaansluiting." },
                    { step: "04", title: "Oplevering", desc: "Het systeem gaat live. U ziet direct het verschil op uw energierekening." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="w-8 h-8 shrink-0 rounded-lg bg-[#470020] text-white text-xs font-black flex items-center justify-center">{item.step}</span>
                      <div>
                        <div className="font-bold text-[#1a0810] text-sm mb-0.5">{item.title}</div>
                        <div className="text-xs text-[#6b4a56] leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-[#e0d5d0] my-6" />
                <p className="text-sm text-[#6b4a56] leading-relaxed">
                  Via onze samenwerking met Next Source realiseren we 50 C&I systemen per jaar — schaalbaar en efficiënt.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── UTILITY — Lichtgrijs ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="right" className="lg:order-2">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Marktsegment 02
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-3"
                style={{ letterSpacing: "-0.03em" }}>
                {s.utilityTitle}
              </h2>
              <p className="text-[#470020] text-sm font-semibold tracking-wide mb-5">{s.utilitySub}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-5">{s.utilityDesc}</p>
              <p className="text-[#6b4a56] leading-relaxed mb-8">
                Grote batterijsystemen op gridniveau spelen een cruciale rol in de energietransitie. Ze stabiliseren het net, leveren regeldiensten aan TSO's en DSO's, en maken hybride zonnepark+BESS-projecten financieel haalbaar. Gridstate heeft de technische diepgang om dit soort projecten van A tot Z te structureren en te realiseren.
              </p>
              <div className="flex flex-wrap gap-2">
                {s.utilityUseCases.map((u, i) => (
                  <span key={i} className="px-3 py-1.5 border border-[#470020]/20 text-xs font-semibold text-[#470020] rounded-sm bg-white">
                    {u}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="lg:order-1">
              <div className="p-8 border-2 border-[#470020] rounded-lg bg-[#470020]">
                <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
                  Schaalbaar
                </p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-6xl font-black text-white" style={{ letterSpacing: "-0.04em" }}>
                    100+
                  </span>
                  <span className="text-2xl font-bold text-white/60 mb-2">MW</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Van enkele MW tot 100+ MW — onze architectuur schaalt mee met uw project, zonder concessies op grid compliance.
                </p>
                <div className="flex flex-col gap-3">
                  {["TSO/DSO certified", "IEC/NEN/PGS compliant", "SDE++ compatible", "FCR/aFRR certified"].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckIcon dark />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PLATFORMS — Wit ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Technische architectuur
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-4"
                style={{ letterSpacing: "-0.03em" }}>
                {s.platformsTitle}
              </h2>
              <p className="text-[#6b4a56] text-lg max-w-2xl">{s.platformsSub}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ScrollReveal delay={0} direction="left">
              <div className="p-8 border-2 border-[#470020] rounded-lg bg-[#470020] h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1">{s.platform1Name}</h3>
                    <p className="text-white/60 text-sm font-medium">{s.platform1Tag}</p>
                  </div>
                  <span className="px-2 py-1 bg-white text-[#470020] text-xs font-bold tracking-widest uppercase rounded">
                    EPC
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {s.platform1Features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckIcon dark />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="right">
              <div className="p-8 border border-[#e0d5d0] rounded-lg bg-[#f9f6f4] h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#1a0810] tracking-tight mb-1">{s.platform2Name}</h3>
                    <p className="text-[#6b4a56] text-sm font-medium">{s.platform2Tag}</p>
                  </div>
                  <span className="px-2 py-1 border border-[#e0d5d0] text-[#6b4a56] text-xs font-bold tracking-widest uppercase rounded">
                    C&I
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {s.platform2Features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#6b4a56]">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg border border-[#e0d5d0] bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e0d5d0] bg-[#f9f6f4]">
                    {s.tableHeaders.map((h, i) => (
                      <th key={i} className={`py-4 px-6 text-left text-xs font-black tracking-widest uppercase ${i === 0 ? "text-[#6b4a56]" : "text-[#1a0810]"}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.tableRows.map((row, ri) => (
                    <tr key={ri} className="border-b border-[#e0d5d0] last:border-0 hover:bg-[#f9f6f4] transition-colors">
                      {row.map((cell, ci) => (
                        <td key={ci} className={`py-4 px-6 text-sm ${ci === 0 ? "text-[#6b4a56] font-semibold" : "text-[#1a0810]"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── PROCESS — Dark Scarlet ──────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-4">
                Werkwijze
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
                style={{ letterSpacing: "-0.03em" }}>
                {s.processTitle}
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">{s.processSub}</p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100} direction={i < 2 ? "left" : "right"}>
                  <div className="relative">
                    <div className="w-16 h-16 mb-6 border-2 border-white/30 rounded-lg flex items-center justify-center bg-white/10">
                      <span className="text-white text-xl font-black">{step.n}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUARANTEES — Lichtgrijs ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Zekerheid
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight"
                style={{ letterSpacing: "-0.03em" }}>
                {s.guaranteesTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {guarantees.map((g, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative p-6 sm:p-8 lg:p-10 border-2 border-[#e0d5d0] rounded-xl bg-white hover:border-[#470020] hover:shadow-[0_8px_32px_rgba(71,0,32,0.12)] transition-all duration-300 h-full group overflow-hidden cursor-default">
                  {/* Decorative bg number */}
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] group-hover:text-[#470020]/10 leading-none select-none pointer-events-none transition-colors duration-300"
                    style={{ fontSize: "80px", letterSpacing: "-0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="relative w-12 h-12 mb-6 rounded-xl border-2 border-[#e0d5d0] bg-white flex items-center justify-center text-[#470020] group-hover:bg-[#470020] group-hover:border-[#470020] group-hover:text-white transition-all duration-300">
                    {guaranteeIcons[i]}
                  </div>
                  <h3 className="font-black text-[#1a0810] text-lg mb-4 leading-snug tracking-tight">{g.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {g.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-sm text-[#6b4a56]">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STRENGTHS — Wit ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Onderscheidend vermogen
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight"
                style={{ letterSpacing: "-0.03em" }}>
                {s.strengthTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[#e0d5d0]">
            {s.strengths.map((st, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-6 lg:gap-10 py-8 group cursor-default">
                  {/* Large number */}
                  <span
                    className="shrink-0 font-black text-[#e0d5d0] group-hover:text-[#470020] leading-none transition-colors duration-300"
                    style={{ fontSize: "clamp(40px,5vw,64px)", letterSpacing: "-0.04em", minWidth: "56px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black text-[#1a0810] mb-2 tracking-tight group-hover:text-[#470020] transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>{st.title}</h3>
                    <p className="text-[#6b4a56] leading-relaxed">{st.desc}</p>
                  </div>
                  {/* Arrow */}
                  <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#e0d5d0] flex items-center justify-center text-[#c7b3ac] group-hover:bg-[#470020] group-hover:border-[#470020] group-hover:text-white transition-all duration-300 mt-1.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Laten we uw project bespreken"
        sub="Plan een gesprek of bel ons direct — we nemen uw project door van A tot Z."
      />
    </div>
  );
}
