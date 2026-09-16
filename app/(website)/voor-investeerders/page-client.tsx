"use client";

import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import BookingCTA from "@/components/BookingCTA";
import { siteConfig } from "@/lib/site-config";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

export default function VoorInvesteerders() {
  const { t } = useLang();
  const inv = t.investors;

  const st = siteConfig.stats;
  const stats = [
    { value: st.mwhInDevelopment.value, suffix: `${st.mwhInDevelopment.suffix} ${st.mwhInDevelopment.unit}`, label: inv.stat1Label },
    { value: st.activeProjects.value, suffix: st.activeProjects.suffix, label: inv.stat2Label },
    { value: st.businessCasesCalculated.value, suffix: st.businessCasesCalculated.suffix, label: inv.stat3Label },
    { value: st.engineeringDossiers.value, suffix: st.engineeringDossiers.suffix, label: inv.stat4Label },
  ];

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      {/* Photo slot (investeerders-hero.jpg, deel 7) not yet delivered; the gradient stays. */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative flex items-center max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
              {inv.heroEyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}>
              {inv.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{inv.heroStandfirst}</p>
          </div>
        </div>
      </section>

      {/* ─── THREE ENTRY POINTS — Wit ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{inv.entriesEyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-16" style={{ letterSpacing: "-0.03em" }}>
              {inv.entriesTitle}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {inv.entries.map((e, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative h-full p-8 lg:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl hover:border-[#470020]/20 hover:bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] leading-none select-none pointer-events-none"
                    style={{ fontSize: "72px", letterSpacing: "-0.05em", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-xl font-black text-[#1a0810] mb-4 leading-tight pr-16" style={{ letterSpacing: "-0.02em" }}>
                    {e.title}
                  </h3>
                  <p className="relative text-sm text-[#6b4a56] leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALCULATION STANDARD — Warm wit ─────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{inv.normEyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-16" style={{ letterSpacing: "-0.03em" }}>
              {inv.normTitle}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-12">
            {inv.norms.map((n, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="h-full p-6 sm:p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <h3 className="text-2xl font-black text-[#1a0810] mb-4 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                    {n.title}
                  </h3>
                  <p className="text-[#6b4a56] leading-relaxed text-base">{n.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Honesty callout — scarlet card */}
          <ScrollReveal>
            <div className="p-8 lg:p-12 border-2 border-[#470020] rounded-2xl bg-[#470020]">
              <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-4">{inv.honestTitle}</p>
              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-4xl">{inv.honestBody}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── NUMBERS — Scharlaken anker ──────────────────────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-xs font-black tracking-widest text-white/35 uppercase mb-20 text-center">{inv.statsTitle}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center group">
                  <div
                    className="font-black text-white mb-4"
                    style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="w-8 h-px bg-white/25 mx-auto mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-xs text-white/40 leading-relaxed max-w-[140px] mx-auto uppercase tracking-widest">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Laten we uw case naast de onze leggen"
        titleEn="Let's put your case next to ours"
      />
    </div>
  );
}
