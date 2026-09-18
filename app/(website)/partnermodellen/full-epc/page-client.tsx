"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import ScopeBlokken from "@/components/ScopeBlokken";
import BouwSequentieTeaser from "@/components/BouwSequentieTeaser";
import TekeningFiguur from "@/components/TekeningFiguur";
import { siteConfig } from "@/lib/site-config";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

/** Routes referenced from the copy, by position in the translated arrays. */
const FIT_NO_HREFS = [
  "/partnermodellen/technical-support",
  "/partnermodellen/technical-support",
  "/partnermodellen/supply-only",
];
const FAQ_MODEL_HREFS = [
  "/partnermodellen/technical-support",
  "/partnermodellen/supply-only",
];

/** Icons for the four things we ask of the client, in the order of fe.yourSide. */
const YOUR_SIDE_ICONS = [
  // Map pin — the site
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Plug — the grid connection
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 2v6M15 2v6" />
    <path d="M6 8h12v3a6 6 0 01-6 6 6 6 0 01-6-6V8z" />
    <path d="M12 17v5" />
  </svg>,
  // Clipboard with check — decisions
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>,
  // Person — one point of contact
  <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
];

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-bold text-[#470020] rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="motion-safe:group-hover:translate-x-1 transition-transform duration-200">
        <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default function FullEpcClient() {
  const { t } = useLang();
  const fe = t.fullEpc;

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
              {fe.tag}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{fe.heroStandfirst}</p>
          </div>
        </div>
      </section>

      {/* ─── DE SITUATIETEKENING — Warm wit ───────────────────── */}
      <section className="py-16 lg:py-20 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TekeningFiguur
            srcWide="/fotos/tekeningen/situatietekening-breed.jpg"
            srcPortrait="/fotos/tekeningen/situatietekening-portret.jpg"
            alt={t.drawings.situatieAlt}
            caption={t.drawings.situatieCaption}
          />
        </div>
      </section>

      {/* ─── 2. WAAR DIT OVER GAAT — Wit ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                  {fe.problemEyebrow}
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-8"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {fe.problemTitle}
                </h2>
                <div className="flex flex-col gap-6 max-w-3xl">
                  {fe.problemParagraphs.map((p, i) => (
                    <p key={i} className="text-[#6b4a56] text-lg leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Typifications, not achievements — deliberately no CountUp here */}
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-5">
                {fe.problemBlocks.map((block, i) => (
                  <div key={i} className="p-6 bg-[#f9f6f4] border border-[#e0d5d0] rounded-2xl">
                    <h3
                      className="font-black text-[#470020] mb-2 leading-snug"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {block.title}
                    </h3>
                    <p className="text-sm text-[#6b4a56] leading-relaxed">{block.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. DE SCOPE — Warm wit ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {fe.scopeEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.scopeTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{fe.scopeIntro}</p>
          </ScrollReveal>
          <ScopeBlokken />
        </div>
      </section>

      {/* ─── 4. VERZEKERBAAR — Scharlaken anker ───────────────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
              {fe.insuranceEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.insuranceTitle}
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl mb-14">
              {fe.insuranceParagraphs.map((p, i) => (
                <p key={i} className="text-white/75 text-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3
              className="text-xl lg:text-2xl font-black text-white mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              {fe.insuranceListTitle}
            </h3>
          </ScrollReveal>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {fe.insuranceList.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <li className="h-full p-6 lg:p-8 rounded-2xl border border-white/15 bg-white/5">
                  <div className="flex items-start gap-5">
                    <span
                      className="font-black text-white/40 leading-none shrink-0"
                      style={{ fontSize: "clamp(1.8rem, 2.4vw, 2.4rem)", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white leading-snug mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>

          <p className="text-white/70 leading-relaxed max-w-3xl mt-12 pt-8 border-t border-white/15">
            {fe.insuranceFooter}
          </p>
        </div>
      </section>

      {/* ─── 5. ZO BOUWEN WIJ — Wit ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {fe.buildEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.buildTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{fe.buildIntro}</p>
          </ScrollReveal>

          {/* The teaser's step buttons are styled for a dark ground, so it sits
              in a dark panel rather than directly on the white section. */}
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-12"
              style={{
                background: "linear-gradient(145deg, #3a0018 0%, #470020 55%, #2d0015 100%)",
                boxShadow: "0 8px 40px rgba(71,0,32,0.35), 0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(160,30,80,0.4) 0%, transparent 70%)" }}
              />
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" aria-hidden>
                <filter id="epc-teaser-grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#epc-teaser-grain)" />
              </svg>
              <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
              <div className="relative">
                <BouwSequentieTeaser steps={fe.buildSteps} />
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-8">
            <ArrowLink href="/hoe-wij-bouwen" label={fe.buildCta} />
          </div>
        </div>
      </section>

      {/* ─── 6. WAT U DOET — Warm wit ─────────────────────────── */}
      {/* The point of this section is that the list is short, so it is set as
          one list next to the argument rather than four separate cards. */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,28rem)_1fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                {fe.yourSideEyebrow}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                {fe.yourSideTitle}
              </h2>
              <p
                className="text-xl lg:text-2xl font-black text-[#470020] leading-snug mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                {fe.yourSideStatement}
              </p>
              <p className="text-[#6b4a56] leading-relaxed">{fe.yourSideFooter}</p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <ul
                className="rounded-2xl border border-[#e0d5d0] bg-white divide-y divide-[#e0d5d0] overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(71,0,32,0.07), 0 2px 8px rgba(71,0,32,0.04)" }}
              >
                {fe.yourSide.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 sm:gap-6 p-6 sm:p-8">
                    <span
                      className="w-12 h-12 rounded-xl bg-[#470020] text-white flex items-center justify-center shrink-0"
                      aria-hidden
                    >
                      {YOUR_SIDE_ICONS[i]}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-black text-[#1a0810] mb-2 leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#6b4a56] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 7. WANNEER DIT PAST — Wit ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {fe.fitEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.fitTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <ScrollReveal direction="left">
              <div className="h-full p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl">
                <h3
                  className="text-xl font-black text-[#1a0810] mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fe.fitYesTitle}
                </h3>
                <ul className="flex flex-col gap-4">
                  {fe.fitYes.map((line, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#1a0810] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#470020] shrink-0" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full p-8 lg:p-10 bg-white border border-[#e0d5d0]/60 rounded-2xl">
                <h3
                  className="text-xl font-black text-[#6b4a56] mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fe.fitNoTitle}
                </h3>
                <ul className="flex flex-col gap-5">
                  {fe.fitNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#6b4a56] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c7b3ac] shrink-0" aria-hidden />
                      <span>
                        {item.text}{" "}
                        <Link
                          href={FIT_NO_HREFS[i]}
                          className="font-bold text-[#470020] rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
                        >
                          {item.linkLabel}
                        </Link>
                        .
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 8. VEELGESTELDE VRAGEN — Warm wit ────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {fe.faqEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {fe.faqTitle}
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl flex flex-col gap-3">
            {fe.faq.map((item, i) => {
              const isLast = i === fe.faq.length - 1;
              return (
                <details
                  key={i}
                  className="group rounded-2xl border border-[#e0d5d0] bg-white overflow-hidden"
                >
                  <summary className="flex items-center gap-4 px-6 sm:px-8 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#f9f6f4] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#470020] transition-colors duration-200">
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
                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-[#6b4a56] leading-relaxed">{item.a}</p>
                    {isLast && (
                      <div className="flex flex-wrap gap-x-8 gap-y-3 mt-4">
                        {fe.faqModelLinks.map((label, li) => (
                          <ArrowLink key={li} href={FAQ_MODEL_HREFS[li]} label={label} />
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA — Scharlaken ──────────────────────────────── */}
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
              {fe.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{fe.ctaSub}</p>

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
                {fe.ctaPlan}
              </Link>
              <a
                href={`tel:${siteConfig.contacts.lucas.phoneHref}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {fe.ctaCall}
              </a>
            </div>

            {/* Internal routes onward, so this page is not a dead end */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { href: "/hoe-wij-bouwen", label: fe.ctaLinks.hoeWijBouwen },
                { href: "/partnermodellen", label: fe.ctaLinks.partnermodellen },
                { href: "/wat-wij-doen", label: fe.ctaLinks.watWijDoen },
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
