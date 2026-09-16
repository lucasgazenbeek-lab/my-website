"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Props {
  /** Index into t.partnermodels.models (0 = full-epc … 3 = technical-support). */
  modelIndex: 0 | 1 | 2 | 3;
}

/**
 * Shared layout for the four partner-model detail pages (uitbreiding.md
 * DEEL 3): hero, what we do / what you do, when this fits, closing CTA.
 * The hero photo slot falls back to the existing gradient while the
 * partner-model photos are not yet delivered (deel 7).
 */
export default function PartnerModelDetail({ modelIndex }: Props) {
  const { t } = useLang();
  const p = t.partnermodels;
  const model = p.models[modelIndex];

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/partnermodellen" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.general.back}
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase mb-6 bg-white text-[#470020] rounded">
              {model.tag}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {model.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{model.standfirst}</p>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO / WHAT YOU DO — Wit ──────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">
                {p.whatWeDoLabel}
              </p>
              <div className="flex flex-col gap-6">
                {model.weDo.map((item, i) => (
                  <div key={i}>
                    {item.lead && (
                      <h3 className="text-lg font-black text-[#1a0810] mb-1 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                        {item.lead}
                      </h3>
                    )}
                    <p className="text-[#6b4a56] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              {model.weDoLink && (
                <Link href="/wat-wij-doen" className="group inline-flex items-center gap-2 text-sm font-bold text-[#470020] hover:underline mt-6">
                  {p.fullListLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-8 lg:p-10 rounded-2xl border-2 border-[#470020] bg-[#470020]">
                <p className="text-xs font-black tracking-widest uppercase mb-4 text-white/50">
                  {p.whatYouDoLabel}
                </p>
                <p className="text-xl font-bold text-white leading-relaxed mb-6">{model.youDo}</p>
                <div className="h-px bg-white/20 mb-6" />
                <p className="text-xs font-black tracking-widest uppercase mb-2 text-white/50">
                  {p.idealFor}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{model.ideal}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHEN THIS FITS — Lichtgrijs ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12" style={{ letterSpacing: "-0.03em" }}>
              {p.whenFitsLabel}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {model.whenFits.map((w, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-full p-6 sm:p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-[#470020]/10 border border-[#470020]/20 rounded-lg flex items-center justify-center mb-5">
                    <CheckIcon />
                  </div>
                  <p className="text-[#6b4a56] leading-relaxed">{w}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {model.extra && (
            <ScrollReveal>
              <div className="mt-10 p-8 lg:p-12 border-2 border-[#470020] rounded-2xl bg-[#470020]">
                <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-4">{model.extraTitle}</p>
                <p className="text-white/85 text-lg leading-relaxed max-w-4xl">{model.extra}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ─── CTA — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#470020] text-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              {p.detailCtaTitle}
            </h2>
            <p className="text-white/60 mb-8">{p.detailCtaSub}</p>
            <Link
              href="/plan-een-afspraak"
              className="inline-block px-10 py-5 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-colors duration-200"
            >
              {p.ctaButton}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
