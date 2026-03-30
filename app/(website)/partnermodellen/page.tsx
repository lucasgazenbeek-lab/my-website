"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";
import BookingCTA from "@/components/BookingCTA";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

const PRINCIPLE_ICONS = [
  // Clipboard list — project registration
  <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
  // Shield — non-circumvention
  <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // Lock — IP protection
  <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  // Git merge / network — structured model
  <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>,
];

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <path d="M2.5 7l3 3L11.5 3.5" stroke={dark ? "#ffffff" : "#470020"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Partnermodellen() {
  const { t } = useLang();
  const p = t.partnermodels;

  const models = [
    {
      href: "/partnermodellen/full-epc",
      title: p.model1Title,
      tag: p.model1Tag,
      sub: p.model1Sub,
      features: p.model1Features,
      ideal: p.model1Ideal,
      featured: true,
    },
    {
      href: "/partnermodellen/supply-technical",
      title: p.model2Title,
      tag: p.model2Tag,
      sub: p.model2Sub,
      features: p.model2Features,
      ideal: p.model2Ideal,
      featured: false,
    },
    {
      href: "/partnermodellen/supply-only",
      title: p.model3Title,
      tag: p.model3Tag,
      sub: p.model3Sub,
      features: p.model3Features,
      ideal: p.model3Ideal,
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
              Samenwerking
            </p>
            <h1
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {p.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">{p.heroSub}</p>
          </div>
        </div>
      </section>

      {/* ─── MODEL CARDS — Wit ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className={`relative flex flex-col h-full p-6 sm:p-8 rounded-lg border-2 transition-all duration-300 ${
                  m.featured
                    ? "border-[#470020] bg-[#470020]"
                    : "border-[#e0d5d0] bg-white hover:border-[#470020]/40 hover:shadow-md"
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className={`inline-block px-2.5 py-1 text-xs font-black tracking-widest uppercase rounded ${
                      m.featured ? "bg-white text-[#470020]" : "border border-[#e0d5d0] text-[#6b4a56]"
                    }`}>
                      {m.tag}
                    </span>
                  </div>

                  <h2 className={`text-2xl font-black tracking-tight leading-tight mb-4 ${m.featured ? "text-white" : "text-[#1a0810]"}`}
                    style={{ letterSpacing: "-0.02em" }}>
                    {m.title}
                  </h2>
                  <p className={`text-sm leading-relaxed mb-8 ${m.featured ? "text-white/70" : "text-[#6b4a56]"}`}>{m.sub}</p>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {m.features.map((f, fi) => (
                      <li key={fi} className={`flex items-start gap-3 text-sm ${m.featured ? "text-white/80" : "text-[#6b4a56]"}`}>
                        <CheckIcon dark={m.featured} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`border-t pt-6 ${m.featured ? "border-white/20" : "border-[#e0d5d0]"}`}>
                    <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${m.featured ? "text-white/40" : "text-[#6b4a56]"}`}>
                      {p.idealFor}
                    </p>
                    <p className={`text-sm mb-6 ${m.featured ? "text-white/70" : "text-[#6b4a56]"}`}>{m.ideal}</p>
                    <Link
                      href={m.href}
                      className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                        m.featured
                          ? "text-white/90 hover:text-white"
                          : "text-[#470020] hover:underline"
                      }`}
                    >
                      {p.viewModel} <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS — Lichtgrijs ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Onboarding
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                {p.processTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-16 right-16 h-px bg-gradient-to-r from-[#470020]/20 via-[#470020]/50 to-[#470020]/20" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
              {p.steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="relative flex flex-col gap-4">
                    <div className="w-16 h-16 shrink-0 border-2 border-[#470020] rounded-lg flex items-center justify-center bg-[#470020] relative z-10">
                      <span className="text-xl font-black text-white">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a0810] text-sm mb-2">{step.title}</h3>
                      <p className="text-xs text-[#6b4a56] leading-relaxed">{step.desc}</p>
                    </div>
                    {i < p.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-7 -right-2 text-[#470020]/50 z-20">
                        <ArrowIcon />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES — Wit ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Fundament
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                {p.principlesTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {p.principles.map((pr, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative p-8 lg:p-10 border-2 border-[#e0d5d0] rounded-xl bg-white hover:border-[#470020] hover:shadow-[0_8px_32px_rgba(71,0,32,0.12)] transition-all duration-300 h-full group overflow-hidden cursor-default">
                  {/* Decorative bg number */}
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] group-hover:text-[#470020]/10 leading-none select-none pointer-events-none transition-colors duration-300"
                    style={{ fontSize: "80px", letterSpacing: "-0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="relative w-12 h-12 mb-6 rounded-xl border-2 border-[#e0d5d0] bg-white flex items-center justify-center text-[#470020] group-hover:bg-[#470020] group-hover:border-[#470020] group-hover:text-white transition-all duration-300">
                    {PRINCIPLE_ICONS[i]}
                  </div>
                  <h3 className="font-black text-[#1a0810] text-lg mb-3 leading-snug tracking-tight">{pr.title}</h3>
                  <p className="text-[#6b4a56] leading-relaxed">{pr.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Welk model past bij u?"
        sub="Plan een gesprek of bel ons direct — we bepalen samen het beste samenwerkingsmodel."
      />
    </div>
  );
}
