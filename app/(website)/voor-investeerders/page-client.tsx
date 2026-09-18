"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import MemorandumInhoud from "@/components/MemorandumInhoud";
import InvesteerderKeuzehulp from "@/components/InvesteerderKeuzehulp";
import { fillTemplate } from "@/lib/technical-support-scope";
import { siteConfig } from "@/lib/site-config";
import { ENTRY_VALUES } from "@/lib/investeerders-profielen";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

/** Icons for the four audiences, in the order of inv.audience. */
const AUDIENCE_ICONS = [
  // Four tiles — a portfolio spread over more than one thing
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
  </svg>,
  // Two overlapping rings — a joint venture
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  </svg>,
  // Sun over a line — existing generation
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="9" r="3.5" />
    <path d="M12 2v1.5M12 14.5V16M5.6 9H4M20 9h-1.6M7.5 4.5l-1-1M17.5 4.5l1-1" />
    <path d="M3 20h18" />
  </svg>,
  // Person — a private investor
  <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
];

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-bold text-white/70 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="motion-safe:group-hover:translate-x-1 transition-transform duration-200">
        <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default function VoorInvesteerders() {
  const { t } = useLang();
  const inv = t.investors;

  return (
    <div className="flex flex-col pt-18">
      {/* ─── 1. HERO — Scharlaken ─────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-6">
            {inv.heroEyebrow}
          </p>
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6 max-w-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {inv.heroTitle}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">{inv.heroStandfirst}</p>
        </div>
      </section>

      {/* ─── 2. VOOR WIE WIJ WERKEN — Wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.audienceEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.audienceTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-14">{inv.audienceIntro}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {inv.audience.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="h-full flex flex-col p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#470020] text-white flex items-center justify-center mb-6" aria-hidden>
                    {AUDIENCE_ICONS[i]}
                  </div>
                  <h3
                    className="text-xl font-black text-[#1a0810] mb-4 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#6b4a56] leading-relaxed flex-1">{item.body}</p>
                  <div className="mt-6 pt-6 border-t border-[#e0d5d0]">
                    <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-2">
                      {inv.audienceDoLabel}
                    </p>
                    <p className="text-sm text-[#1a0810] leading-relaxed">{item.doBody}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-[#6b4a56] leading-relaxed max-w-3xl mt-10">{inv.audienceFooter}</p>
        </div>
      </section>

      {/* ─── 3. DRIE INGANGEN — Warm wit ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.entriesEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-14"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.entriesTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {inv.entries.map((entry, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-full flex flex-col p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <span
                    className="block font-black text-[#e0d5d0] leading-none mb-6 select-none"
                    style={{ fontSize: "56px", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-xl font-black text-[#1a0810] mb-4 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {entry.title}
                  </h3>
                  <p className="text-sm text-[#6b4a56] leading-relaxed flex-1">
                    {fillTemplate(entry.desc, ENTRY_VALUES)}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#e0d5d0]">
                    <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-2">
                      {inv.entryStepLabel}
                    </p>
                    <p className="text-sm text-[#1a0810] leading-relaxed">{entry.step}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WAAR CASES STUKLOPEN — Wit ────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.failEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.failTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-4">{inv.failIntro}</p>
          </ScrollReveal>

          {/* Read in one pass — deliberately no disclosure here */}
          <ol className="divide-y divide-[#e0d5d0] max-w-4xl">
            {inv.fails.map((fail, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <li className="flex items-start gap-6 lg:gap-10 py-8">
                  <span
                    className="shrink-0 font-black text-[#470020] leading-none"
                    style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", letterSpacing: "-0.04em", minWidth: "3rem", fontVariantNumeric: "tabular-nums" }}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3
                      className="text-xl font-black text-[#1a0810] mb-3 leading-snug"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {fail.title}
                    </h3>
                    <p className="text-[#6b4a56] leading-relaxed max-w-3xl">{fail.body}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 5. ZO REKENEN WIJ — Scharlaken anker ─────────────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
              {inv.normEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-14"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.normTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {inv.norms.map((norm, i) => (
              <ScrollReveal key={i} delay={i * 60} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="h-full p-6 lg:p-8 rounded-2xl border border-white/15 bg-white/5">
                  <h3 className="text-lg font-black text-white mb-3 leading-snug" style={{ letterSpacing: "-0.02em" }}>
                    {norm.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{norm.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WAT U IN HANDEN KRIJGT — Wit ──────────────────── */}
      {/* No `overflow-hidden` here: the contents aside is `lg:sticky`, and a
          clipping ancestor becomes its scroll container and stops it pinning. */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.memoEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.memoTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-14">{inv.memoIntro}</p>
          </ScrollReveal>

          <MemorandumInhoud />

          <ScrollReveal>
            <div className="mt-12 p-8 lg:p-10 rounded-2xl border border-[#e0d5d0] max-w-4xl">
              <p className="text-[#6b4a56] leading-relaxed">{inv.memoNot}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. ONZE DUBBELROL — Warm wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.dualEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-10 max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.dualTitle}
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl">
              {inv.dualParagraphs.map((p, i) => (
                <p key={i} className="text-[#6b4a56] text-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 8. WAAR WIJ EERLIJK OVER ZIJN — Wit ──────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="w-16 h-1 bg-[#470020] mb-10" aria-hidden />
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-8"
                style={{ letterSpacing: "-0.03em" }}
              >
                {inv.honestTitle}
              </h2>
              <p className="text-[#1a0810] text-xl lg:text-2xl leading-relaxed">{inv.honestBody}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 9. KEUZEHULP — Warm wit ──────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {inv.quizEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.quizTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{inv.quizIntro}</p>
          </ScrollReveal>
          <div className="max-w-4xl">
            <InvesteerderKeuzehulp />
          </div>
        </div>
      </section>

      {/* ─── 10. CTA — Scharlaken ─────────────────────────────── */}
      <section className="relative py-32 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {inv.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{inv.ctaSub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                {inv.ctaPlan}
              </Link>
              <a
                href={`tel:${siteConfig.contacts.lucas.phoneHref}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {inv.ctaCall}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { href: "/projecten", label: inv.ctaLinks.projecten },
                { href: "/hoe-wij-bouwen", label: inv.ctaLinks.hoeWijBouwen },
                { href: "/wat-wij-doen", label: inv.ctaLinks.watWijDoen },
              ].map((link) => (
                <ArrowLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Not an offer — this page describes a service, not a return */}
            <p className="text-white/55 text-xs leading-relaxed mt-12 max-w-2xl mx-auto">
              {inv.disclaimer}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
