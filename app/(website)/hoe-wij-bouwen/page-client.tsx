"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import BouwSequentie from "@/components/BouwSequentie";
import TekeningFiguur from "@/components/TekeningFiguur";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

export default function HoeWijBouwenClient() {
  const { t } = useLang();
  const hb = t.hoeWijBouwen;

  return (
    <div className="flex flex-col pt-18">
      {/* ─── 1. HERO — Scharlaken, compact ────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-6">
            {hb.heroEyebrow}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {hb.heroTitle}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">{hb.heroStandfirst}</p>
        </div>
      </section>

      {/* ─── 2. DE SEQUENTIE — Diep donker ────────────────────── */}
      {/* BouwSequentie brings its own container, variant picker, phase rail
          and the reference-build disclaimer, so it sits here unwrapped.
          Two things this section must not do. It may not be light: the
          drawing is the only light surface by design and every label around
          it is near-white. And it may not clip its overflow — the drawing
          and the phase rail are `position: sticky`, and an `overflow-hidden`
          ancestor turns into their scroll container, which stops them
          pinning and scrolls the drawing out of view while you read. */}
      <section className="relative py-24 lg:py-32 bg-[#1a0810]">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <BouwSequentie />
      </section>

      {/* ─── DE SITUATIETEKENING — Warm wit ───────────────────── */}
      {/* Antwoord op de disclaimer onder de sequentie: die zegt dat het een
          referentieopbouw is, dit laat een echt terreinontwerp zien. */}
      <section className="py-16 lg:py-20 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TekeningFiguur
            srcWide="/fotos/tekeningen/situatietekening-breed.jpg"
            srcPortrait="/fotos/tekeningen/situatietekening-portret.jpg"
            alt={t.drawings.situatieAlt}
            caption={t.drawings.situatieCaptionBouw}
          />
        </div>
      </section>

      {/* ─── 3. CTA — Scharlaken, compact ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {hb.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{hb.ctaSub}</p>

            <Link
              href="/plan-een-afspraak"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {hb.ctaButton}
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { href: "/partnermodellen/full-epc", label: hb.ctaLinks.fullEpc },
                { href: "/wat-wij-doen", label: hb.ctaLinks.watWijDoen },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white/70 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="motion-safe:group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
