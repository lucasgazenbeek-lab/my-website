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

  const modelIcons = [
    // Building — full turnkey
    <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>,
    // Wrench — technical support
    <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>,
    // Package — supply only
    <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.89 1.45l8 4A2 2 0 0122 7.24v9.53a2 2 0 01-1.11 1.79l-8 4a2 2 0 01-1.79 0l-8-4A2 2 0 012 16.76V7.24a2 2 0 011.11-1.79l8-4a2 2 0 011.78 0z"/>
      <polyline points="2.32 6.16 12 11 21.68 6.16"/>
      <line x1="12" y1="22.76" x2="12" y2="11"/>
    </svg>,
  ];

  const models = p.models.map((m, i) => ({
    href: `/partnermodellen/${m.slug}`,
    title: m.title,
    tag: m.tag,
    sub: m.standfirst,
    features: m.cardFeatures,
    ideal: m.ideal,
    icon: modelIcons[i],
    featured: i === 0,
  }));

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
              {p.collaborationLabel}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {models.map((m, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <Link href={m.href} className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#470020] rounded-2xl">
                  <div
                    className={`relative flex flex-col h-full p-8 lg:p-10 rounded-2xl border-2 overflow-hidden transition-all duration-300 group-hover:-translate-y-1 ${
                      m.featured
                        ? "border-[#470020]"
                        : "bg-[#f9f6f4] border-transparent group-hover:border-[#470020]/20 group-hover:bg-white group-hover:shadow-xl"
                    }`}
                    style={m.featured ? {
                      background: "linear-gradient(145deg, #3a0018 0%, #470020 55%, #2d0015 100%)",
                      boxShadow: "0 8px 40px rgba(71,0,32,0.35), 0 2px 8px rgba(0,0,0,0.2)",
                    } : undefined}
                  >
                    {m.featured && (
                      <>
                        {/* Glow from below, brightens on hover */}
                        <div className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{
                          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(160,30,80,0.4) 0%, transparent 70%)",
                        }} />
                        {/* Grain */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" aria-hidden>
                          <filter id="model-grain">
                            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                          </filter>
                          <rect width="100%" height="100%" filter="url(#model-grain)" />
                        </svg>
                        {/* Shimmer line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-white/0 group-hover:bg-white/15 transition-colors duration-500" />
                      </>
                    )}

                    {/* Ghost number */}
                    <span
                      aria-hidden
                      className={`absolute top-4 right-6 font-black leading-none select-none pointer-events-none transition-colors duration-300 ${
                        m.featured ? "text-white/10 group-hover:text-white/15" : "text-[#e0d5d0] group-hover:text-[#470020]/10"
                      }`}
                      style={{ fontSize: "88px", letterSpacing: "-0.05em", fontVariantNumeric: "tabular-nums" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon tile */}
                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      m.featured ? "bg-white text-[#470020]" : "bg-[#470020] text-white"
                    }`}>
                      {m.icon}
                    </div>

                    <span className={`relative inline-block w-fit px-2.5 py-1 text-xs font-black tracking-widest uppercase rounded mb-4 ${
                      m.featured ? "bg-white/15 text-white border border-white/25" : "border border-[#470020]/20 text-[#470020] bg-white"
                    }`}>
                      {m.tag}
                    </span>

                    <h2 className={`relative text-2xl font-black tracking-tight leading-tight mb-4 ${m.featured ? "text-white" : "text-[#1a0810]"}`}
                      style={{ letterSpacing: "-0.02em" }}>
                      {m.title}
                    </h2>
                    <p className={`relative text-sm leading-relaxed mb-8 ${m.featured ? "text-white/70" : "text-[#6b4a56]"}`}>{m.sub}</p>

                    <ul className="relative flex flex-col gap-3 mb-8 flex-1">
                      {m.features.map((f, fi) => (
                        <li key={fi} className={`flex items-start gap-3 text-sm ${m.featured ? "text-white/80" : "text-[#6b4a56]"}`}>
                          <CheckIcon dark={m.featured} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className={`relative border-t pt-6 ${m.featured ? "border-white/20" : "border-[#e0d5d0]"}`}>
                      <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${m.featured ? "text-white/40" : "text-[#6b4a56]"}`}>
                        {p.idealFor}
                      </p>
                      <p className={`text-sm mb-6 ${m.featured ? "text-white/70" : "text-[#6b4a56]"}`}>{m.ideal}</p>
                      <span className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3 ${
                        m.featured ? "text-white/90 group-hover:text-white" : "text-[#470020]"
                      }`}>
                        {p.viewModel} <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
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
                {p.onboardingLabel}
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
                {p.foundationLabel}
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
        titleEn="Which model fits you?"
        sub="Plan een gesprek of bel ons direct — we bepalen samen het beste samenwerkingsmodel."
        subEn="Book a call or contact us directly — we'll determine the best collaboration model together."
        trustLine="Geen verplichtingen — we verkennen samen welk model bij uw organisatie past."
        trustLineEn="No obligations — together we'll explore which model fits your organisation."
      />
    </div>
  );
}
