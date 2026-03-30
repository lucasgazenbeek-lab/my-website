"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1.5 border border-[#e0d5d0] text-xs font-semibold text-[#6b4a56] rounded-sm bg-[#f9f6f4]">
      {children}
    </span>
  );
}

function TagDark({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1.5 border border-white/20 text-xs font-semibold text-white/70 rounded-sm">
      {children}
    </span>
  );
}

const WHY_ICONS = [
  // Star / excellence
  <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // Zap / speed/energy
  <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  // Users / team
  <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Lock / trust
  <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
];

export default function OverOns() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
            Over ons
          </p>
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {a.heroTitle}
          </h1>
        </div>
      </section>

      {/* ─── TEAM — Lichtgrijs ── BOVENAAN ───────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-14 text-center">
              Het team
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emiel — featured */}
            <ScrollReveal delay={0} direction="left" className="flex flex-col">
              <div className="flex-1 p-10 border-2 border-[#470020] rounded-lg bg-[#470020]">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-white">EV</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                      {a.emielName}
                    </h2>
                    <p className="text-white/60 text-sm font-semibold">{a.emielRole}</p>
                    <a href="tel:+31625404350" className="text-white/50 text-sm hover:text-white transition-colors mt-1 block">
                      +31 6 25 40 43 50
                    </a>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {a.emielBio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-3">
                    {a.coreCompetencies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {a.emielSkills.map((s, i) => <TagDark key={i}>{s}</TagDark>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Lucas */}
            <ScrollReveal delay={120} className="flex flex-col">
              <div className="flex-1 p-10 border border-[#e0d5d0] rounded-lg bg-white">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-lg bg-[#470020]/10 border border-[#470020]/20 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-[#470020]">LG</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#1a0810] tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                      {a.lucasName}
                    </h2>
                    <p className="text-[#470020] text-sm font-semibold">{a.lucasRole}</p>
                    <a href="tel:+31652350318" className="text-[#6b4a56] text-sm hover:text-[#470020] transition-colors mt-1 block">
                      +31 6 52 35 03 18
                    </a>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {a.lucasBio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#6b4a56]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#470020] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#e0d5d0] pt-6">
                  <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-3">
                    {a.coreCompetencies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {a.lucasSkills.map((s, i) => <Tag key={i}>{s}</Tag>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Shane — centered below */}
            <ScrollReveal delay={240} className="lg:col-span-2 lg:w-1/2 lg:mx-auto">
              <div className="p-10 border border-[#e0d5d0] rounded-lg bg-white h-full">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-lg bg-[#470020]/10 border border-[#470020]/20 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-[#470020]">SK</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#1a0810] tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                      {a.shaneName}
                    </h2>
                    <p className="text-[#470020] text-sm font-semibold">{a.shaneRole}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {a.shaneBio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#6b4a56]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#470020] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#e0d5d0] pt-6">
                  <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-3">
                    {a.coreCompetencies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {a.shaneSkills.map((s, i) => <Tag key={i}>{s}</Tag>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── THE STORY — Wit ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">
                Ons verhaal
              </p>
              <h2
                className="text-3xl lg:text-4xl font-black text-[#1a0810] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                {a.storyTitle}
              </h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed">{a.storyText}</p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-8 border-2 border-[#470020] rounded-lg bg-[#470020]">
                <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
                  Trackrecord
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["70+ MWh", "Gerealiseerd & verkocht"],
                    ["€7M+", "Omzet vorig bedrijf"],
                    ["12+ jr", "Gecombineerde ervaring"],
                    ["Benelux", "Focusmarkt"],
                  ].map(([val, label], i) => (
                    <div key={i} className="p-4 border border-white/20 rounded-lg bg-white/10">
                      <div className="text-2xl font-black text-white mb-1" style={{ letterSpacing: "-0.03em" }}>{val}</div>
                      <div className="text-xs text-white/60">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHY GRIDSTATE — Lichtgrijs ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">
                Waarom wij
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                {a.whyTitle}
              </h2>
              <blockquote
                className="text-xl lg:text-2xl text-[#6b4a56] font-semibold leading-snug max-w-2xl border-l-4 border-[#470020] pl-6"
                style={{ fontStyle: "italic" }}
              >
                &ldquo;{a.whyQuote}&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.whyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative p-6 sm:p-10 lg:p-12 border-2 border-[#e0d5d0] rounded-xl bg-white hover:border-[#470020] hover:shadow-[0_8px_32px_rgba(71,0,32,0.12)] transition-all duration-300 h-full group overflow-hidden cursor-default">
                  {/* Decorative bg number */}
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] group-hover:text-[#470020]/10 leading-none select-none pointer-events-none transition-colors duration-300"
                    style={{ fontSize: "80px", letterSpacing: "-0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="relative w-12 h-12 mb-6 rounded-xl border-2 border-[#e0d5d0] bg-white flex items-center justify-center text-[#470020] group-hover:bg-[#470020] group-hover:border-[#470020] group-hover:text-white transition-all duration-300">
                    {WHY_ICONS[i % WHY_ICONS.length]}
                  </div>
                  <h3 className="font-black text-[#1a0810] text-xl mb-3 tracking-tight" style={{ letterSpacing: "-0.02em" }}>{point.title}</h3>
                  <p className="text-[#6b4a56] leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Maak kennis met het team"
        sub="Directe lijnen — geen salesafdeling, geen intermediairs. Gewoon een open gesprek."
      />
    </div>
  );
}
