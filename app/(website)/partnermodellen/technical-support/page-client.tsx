"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Rolverdeling from "@/components/Rolverdeling";
import FaseTijdlijn from "@/components/FaseTijdlijn";
import ScopeIntake from "@/components/ScopeIntake";
import { siteConfig } from "@/lib/site-config";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

/** Icons for the three engagement shapes, in the order of ts.forms. */
const FORM_ICONS = [
  // Layers — the complete track above execution
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>,
  // Eye in shield — sitting on the client's side of the table
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>,
  // Crosshair — one bounded component
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="3" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="3" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="21" y2="12" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>,
];

function CrossIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b4a56"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
      aria-hidden
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export default function TechnicalSupportClient() {
  const { t } = useLang();
  const ts = t.technicalSupport;

  return (
    <div className="flex flex-col pt-18">
      {/* ─── 1. HERO — Scharlaken ─────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/partnermodellen"
            className="inline-flex items-center gap-2 text-white/60 text-sm rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.general.back}
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase mb-6 bg-white text-[#470020] rounded">
              {ts.tag}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{ts.heroStandfirst}</p>
          </div>

          {/* The rule of thumb — the element the other detail pages don't have.
              Two branches, so they are set as two statements rather than one
              block of bold running text. */}
          <div className="mt-12 max-w-3xl p-8 lg:p-10 border-2 border-white/25 rounded-2xl">
            <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-6">
              {ts.ruleLabel}
            </p>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {[ts.ruleOurs, ts.ruleYours].map((line, i) => (
                <p key={i} className="text-white text-lg font-bold leading-snug py-5">
                  {line}
                </p>
              ))}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mt-6">{ts.ruleNote}</p>
          </div>
        </div>
      </section>

      {/* ─── 2. HET PROBLEEM — Wit ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                  {ts.problemEyebrow}
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-8"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {ts.problemTitle}
                </h2>
                <div className="flex flex-col gap-6 max-w-3xl">
                  {ts.problemParagraphs.map((p, i) => (
                    <p key={i} className="text-[#6b4a56] text-lg leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Typifications, not achievements — deliberately no CountUp here */}
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-5">
                {ts.problemStats.map((stat, i) => (
                  <div key={i} className="p-6 bg-[#f9f6f4] border border-[#e0d5d0] rounded-2xl">
                    <div
                      className="font-black text-[#470020] mb-2"
                      style={{ fontSize: "clamp(2.4rem, 4vw, 3.2rem)", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-sm text-[#6b4a56] leading-relaxed">{stat.label}</p>
                  </div>
                ))}
                <p className="text-xs text-[#6b4a56]/80 leading-relaxed">{ts.problemStatsNote}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. ROLVERDELING — Warm wit ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.rolEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.rolTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{ts.rolIntro}</p>
          </ScrollReveal>
          <Rolverdeling />
        </div>
      </section>

      {/* ─── 4. INTAKE — Wit ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.intakeEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.intakeTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{ts.intakeIntro}</p>
          </ScrollReveal>
          <div className="max-w-4xl">
            <ScopeIntake />
          </div>
        </div>
      </section>

      {/* ─── 5. DRIE VORMEN — Warm wit ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.formsEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.formsTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {ts.forms.map((form, i) => (
              <ScrollReveal key={form.id} delay={i * 100}>
                <div className="h-full flex flex-col p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#470020] text-white flex items-center justify-center mb-6">
                    {FORM_ICONS[i]}
                  </div>
                  <h3
                    className="text-2xl font-black text-[#1a0810] mb-4 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {form.title}
                  </h3>
                  <p className="text-[#6b4a56] leading-relaxed mb-6">{form.body}</p>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {form.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-[#6b4a56]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden>
                          <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[#e0d5d0] pt-5">
                    <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-2">
                      {ts.formsFitLabel}
                    </p>
                    <p className="text-sm text-[#1a0810] leading-relaxed">{form.fit}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. DRIE FASEN — Scharlaken anker ─────────────────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
              {ts.phasesEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.phasesTitle}
            </h2>
          </ScrollReveal>
          <FaseTijdlijn />
        </div>
      </section>

      {/* ─── 7. VIJF SPELREGELS — Wit ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.rulesEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.rulesTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{ts.rulesIntro}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {ts.rules.map((rule, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                direction={i % 2 === 0 ? "left" : "right"}
                className={i === ts.rules.length - 1 ? "md:col-span-2" : ""}
              >
                <div className="h-full p-8 lg:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl hover:border-[#470020]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <span
                      className="font-black text-[#470020] leading-none shrink-0"
                      style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-black text-[#1a0810] mb-3 leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {rule.title}
                      </h3>
                      <p className="text-[#6b4a56] leading-relaxed">{rule.body}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. WAT WIJ NIET DOEN — Warm wit ──────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.notEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.notTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{ts.notIntro}</p>
          </ScrollReveal>

          <dl className="divide-y divide-[#e0d5d0] border-y border-[#e0d5d0]">
            {ts.notItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="py-6 md:grid md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10 md:items-baseline">
                  <dt className="flex items-start gap-4">
                    <CrossIcon />
                    <span className="font-black text-[#1a0810] leading-snug" style={{ letterSpacing: "-0.02em" }}>
                      {item.title}
                    </span>
                  </dt>
                  <dd className="text-[#6b4a56] leading-relaxed mt-2 md:mt-0 pl-10 md:pl-0">
                    {item.body}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── 9. VEELGESTELDE VRAGEN — Wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {ts.faqEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ts.faqTitle}
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl flex flex-col gap-3">
            {ts.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[#e0d5d0] bg-[#f9f6f4] overflow-hidden"
              >
                <summary className="flex items-center gap-4 px-6 sm:px-8 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#470020] transition-colors duration-200">
                  <h3
                    className="font-black text-[#1a0810] leading-snug"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.q}
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#470020"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto shrink-0 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-6 sm:px-8 pb-6 text-[#6b4a56] leading-relaxed">{item.a}</p>
              </details>
            ))}
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
              {ts.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{ts.ctaSub}</p>

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
                {ts.ctaPlan}
              </Link>
              <a
                href={`tel:${siteConfig.contacts.lucas.phoneHref}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {ts.ctaCall}
              </a>
            </div>

            {/* Internal routes onward, so this page is not a dead end */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { href: "/partnermodellen", label: ts.ctaLinks.partnermodellen },
                { href: "/wat-wij-doen", label: ts.ctaLinks.watWijDoen },
                { href: "/partnermodellen/full-epc", label: ts.ctaLinks.fullEpc },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white/70 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="group-hover:translate-x-1 transition-transform duration-200">
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
