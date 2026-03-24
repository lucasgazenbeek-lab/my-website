"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import PartnerTicker from "@/components/PartnerTicker";
import { CountUp } from "@/components/CountUp";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollZoom from "@/components/ScrollZoom";
import FloatingChips from "@/components/FloatingChips";
import ProcessSteps from "@/components/ProcessSteps";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

export default function Home() {
  const { t } = useLang();
  const h = t.home;
  const pm = t.partnermodels;
  const ab = t.about;

  const stats = [
    { value: 20, suffix: " MW+", label: h.stat1Label },
    { value: 30, suffix: " MW+", label: h.stat2Label },
    { value: 5,  suffix: "+",    label: h.stat3Label },
    { value: 100,suffix: "%",    label: h.stat4Label },
  ];

  const partnerModels = [
    {
      title: h.partner1Title,
      sub: h.partner1Sub,
      href: "/partnermodellen/full-epc",
      tag: pm.model1Tag,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
        </svg>
      ),
    },
    {
      title: h.partner2Title,
      sub: h.partner2Sub,
      href: "/partnermodellen/supply-technical",
      tag: pm.model2Tag,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      title: h.partner3Title,
      sub: h.partner3Sub,
      href: "/partnermodellen/supply-only",
      tag: pm.model3Tag,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.89 1.45l8 4A2 2 0 0122 7.24v9.53a2 2 0 01-1.11 1.79l-8 4a2 2 0 01-1.79 0l-8-4A2 2 0 012 16.76V7.24a2 2 0 011.11-1.79l8-4a2 2 0 011.78 0z"/>
          <polyline points="2.32 6.16 12 11 21.68 6.16"/>
          <line x1="12" y1="22.76" x2="12" y2="11"/>
        </svg>
      ),
    },
  ];

  const services = [
    {
      label: "C&I",
      title: h.service1Title,
      sub: h.service1Sub,
      href: "/wat-wij-doen",
      image: "https://placehold.co/600x750/2a0012/3a0018",
    },
    {
      label: "Utility-Scale",
      title: h.service2Title,
      sub: h.service2Sub,
      href: "/wat-wij-doen",
      image: "https://placehold.co/600x750/1a0810/221010",
    },
    {
      label: "Technical",
      title: h.service3Title,
      sub: h.service3Sub,
      href: "/wat-wij-doen",
      image: "https://placehold.co/600x750/30001a/420020",
    },
  ];

  const whyIcons = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>,
  ];

  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroContentRef.current) return;
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      heroContentRef.current.style.opacity = String(Math.max(1 - progress * 1.6, 0));
      heroContentRef.current.style.transform = `translateY(-${progress * 56}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col">

      <ScrollProgress />

      {/* ─── 1. HERO ───────────────────────────────────────────── */}
      <section id="section-hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#1a0810]">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        <FloatingChips />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 90% 80% at 30% 50%, rgba(71,0,32,0.35) 0%, rgba(20,0,10,0.65) 100%)",
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
          background: "linear-gradient(to bottom, transparent, rgba(10,0,6,0.7))",
        }} />

        <div ref={heroContentRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
            <div className="hero-enter-1 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 text-xs font-bold tracking-widest text-white/60 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              Benelux EPC Specialist
            </div>
            <h1
              className="hero-enter-2 text-center lg:text-left text-white leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)", letterSpacing: "-0.03em", fontWeight: 700 }}
            >
              {h.heroTitle}
            </h1>
            <p className="hero-enter-3 text-center lg:text-left text-lg sm:text-xl text-white/55 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-12">
              {h.heroSub}
            </p>
            <div className="hero-enter-4 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link href="/plan-een-afspraak" className="px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] transition-colors duration-200">
                {h.heroCta1}
              </Link>
              <Link href="/wat-wij-doen" className="px-8 py-4 border-2 border-white/35 text-white font-bold text-base rounded hover:border-white/70 hover:bg-white/8 transition-colors duration-200">
                {h.heroCta2}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/35">
          <span className="text-xs font-bold tracking-widest uppercase">{h.scrollDown}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </section>

      {/* ─── 2. HOW WE COLLABORATE — moved to 2nd ─────────────── */}
      <ScrollZoom>
      <section id="section-partners" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-3 text-center">Samenwerking</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] text-center mb-4" style={{ letterSpacing: "-0.03em" }}>
              {h.partnersTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg text-center max-w-xl mx-auto mb-16 leading-relaxed">
              {h.partnersSub}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partnerModels.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href={p.href} className="group block h-full">
                  <div className="h-full flex flex-col p-8 lg:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl hover:border-[#470020]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#470020] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {p.icon}
                    </div>
                    {/* Tag */}
                    <span className="text-xs font-black tracking-widest text-[#470020]/60 uppercase mb-3 block" style={{ letterSpacing: "0.1em" }}>
                      {p.tag}
                    </span>
                    {/* Title */}
                    <h3 className="text-xl font-black text-[#1a0810] mb-4 tracking-tight leading-tight" style={{ letterSpacing: "-0.02em" }}>
                      {p.title}
                    </h3>
                    {/* Sub */}
                    <p className="text-sm text-[#6b4a56] leading-relaxed flex-1 mb-8">{p.sub}</p>
                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#470020] group-hover:gap-3 transition-all duration-200">
                      {pm.viewModel}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Process steps — combined in same section */}
          <ProcessSteps
            steps={pm.steps}
            processTitle={pm.processTitle}
          />
        </div>
      </section>
      </ScrollZoom>

      {/* ─── 3. PARTNER TICKER — moved up ─────────────────────── */}
      <section className="py-16 bg-[#f9f6f4] border-y border-[#e0d5d0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#1a0810]/30 uppercase text-center">{h.tickerTitle}</p>
          </ScrollReveal>
        </div>
        <PartnerTicker />
      </section>

      {/* ─── 4. SERVICES — image cards ─────────────────────────── */}
      <ScrollZoom>
      <section id="section-services" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">Services</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810]" style={{ letterSpacing: "-0.03em" }}>
                {h.servicesTitle}
              </h2>
              <div className="lg:max-w-sm">
                <p className="text-[#6b4a56] text-lg leading-relaxed mb-4">{h.servicesSub}</p>
                <Link href="/wat-wij-doen" className="inline-flex items-center gap-2 text-[#470020] font-bold hover:underline text-sm">
                  Bekijk alles wat wij doen
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href={s.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
                    {/* Image — placeholder until real AI photo */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0" style={{
                      background: "linear-gradient(to top, rgba(26,8,16,0.97) 0%, rgba(26,8,16,0.55) 40%, rgba(26,8,16,0.08) 100%)",
                    }} />
                    {/* Hover tint */}
                    <div className="absolute inset-0 bg-[#470020]/0 group-hover:bg-[#470020]/15 transition-colors duration-500" />
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <p className="text-xs font-black tracking-widest text-[#C7B3AC] uppercase mb-3" style={{ letterSpacing: "0.1em" }}>
                        {s.label}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                        {s.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
                        {s.sub}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-white/70 group-hover:text-white group-hover:gap-3 transition-all duration-200">
                        {h.learnMore}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </ScrollZoom>

      {/* ─── 5. STATS ──────────────────────────────────────────── */}
      <ScrollZoom>
      <section id="section-stats" className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/35 uppercase mb-20 text-center">{h.statsTitle}</p>
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
      </ScrollZoom>

      {/* ─── 6. WHY GRIDSTATE — big cards, fixed data ─────────── */}
      <ScrollZoom>
      <section id="section-why" className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4 text-center">{ab.whyTitle}</p>
            <p className="text-2xl lg:text-3xl font-black text-[#1a0810] text-center max-w-3xl mx-auto mb-16 leading-snug" style={{ letterSpacing: "-0.02em" }}>
              {ab.whyQuote}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {ab.whyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#f9f6f4] border border-[#e0d5d0] flex items-center justify-center mb-8">
                    {whyIcons[i]}
                  </div>
                  <h3 className="text-2xl font-black text-[#1a0810] mb-4 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                    {point.title}
                  </h3>
                  <p className="text-[#6b4a56] leading-relaxed text-base">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </ScrollZoom>

      {/* ─── 7. CLOSING CTA ────────────────────────────────────── */}
      <ScrollZoom>
      <section className="relative py-32 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-0">
          <HeroParticles />
        </div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              {h.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg mb-10">{h.ctaSub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-een-afspraak"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {h.ctaButton}
              </Link>
              <a
                href="tel:+31612345678"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Bel ons nu
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </ScrollZoom>

    </div>
  );
}
