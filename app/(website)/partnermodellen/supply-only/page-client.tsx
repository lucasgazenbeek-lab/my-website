"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import OfferteCheck from "@/components/OfferteCheck";
import { siteConfig } from "@/lib/site-config";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

/** Routes referenced from the copy, by position in the translated arrays. */
const FIT_NO_HREFS = [
  "/partnermodellen/technical-support",
  "/partnermodellen/full-epc",
];

/** Icons for the five parts of the delivery, in the order of so.delivery. */
const DELIVERY_ICONS = [
  // Container — the battery system
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M7 6v12M12 6v12M17 6v12" />
  </svg>,
  // Waveform — the inverters
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2 12h3l3-7 4 14 3-7h5" />
  </svg>,
  // Clipboard with check — project support
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>,
  // Nodes — control integration
  <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="5" cy="6" r="2.5" />
    <circle cx="19" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M6.8 7.8l3.6 8M17.2 7.8l-3.6 8M7.5 6h9" />
  </svg>,
  // Power switch — commissioning and handover
  <svg key={4} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v9" />
    <path d="M18.4 6.6a9 9 0 11-12.8 0" />
  </svg>,
];

function ArrowLink({
  href,
  label,
  onDark = false,
}: {
  href: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-bold rounded transition-colors duration-200 ${
        onDark
          ? "text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          : "text-[#470020] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020]"
      }`}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="motion-safe:group-hover:translate-x-1 transition-transform duration-200">
        <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default function SupplyOnlyClient() {
  const { t } = useLang();
  const so = t.supplyOnly;

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
              {so.tag}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{so.heroStandfirst}</p>
          </div>
        </div>
      </section>

      {/* ─── 2. WAAR DIT OVER GAAT — Wit ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                  {so.problemEyebrow}
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-8"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {so.problemTitle}
                </h2>
                <div className="flex flex-col gap-6 max-w-3xl">
                  {so.problemParagraphs.map((p, i) => (
                    <p key={i} className="text-[#6b4a56] text-lg leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-5">
                {so.problemBlocks.map((block, i) => (
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

      {/* ─── 3. WAT ER MEEKOMT — Warm wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {so.deliveryEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.deliveryTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-12">{so.deliveryIntro}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {so.delivery.map((part, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                className={i === so.delivery.length - 1 ? "md:col-span-2" : ""}
              >
                <div className="h-full p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <div className="flex items-start gap-5 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-[#470020] text-white flex items-center justify-center shrink-0" aria-hidden>
                      {DELIVERY_ICONS[i]}
                    </span>
                    <div>
                      <span
                        className="block text-xs font-black tracking-widest text-[#470020]/50 mb-1"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="text-xl font-black text-[#1a0810] leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {part.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#6b4a56] leading-relaxed mb-6">{part.lead}</p>
                  <ul className="flex flex-col gap-3">
                    {part.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3 text-sm text-[#1a0810]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden>
                          <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What is deliberately outside the scope */}
          <ScrollReveal>
            <div className="mt-6 p-8 lg:p-10 rounded-2xl border border-[#e0d5d0]">
              <h3
                className="text-xl font-black text-[#1a0810] mb-4 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                {so.deliveryNotTitle}
              </h3>
              <p className="text-[#6b4a56] leading-relaxed max-w-4xl mb-5">{so.deliveryNotBody}</p>
              <ArrowLink href="/partnermodellen/technical-support" label={so.deliveryNotLink} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. OFFERTECHECK — Wit ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {so.checkEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.checkTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-14">{so.checkIntro}</p>
          </ScrollReveal>
          <div className="max-w-4xl">
            <OfferteCheck />
          </div>
        </div>
      </section>

      {/* ─── 5. HOE WIJ INKOPEN — Scharlaken anker ────────────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
              {so.buyEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.buyTitle}
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl mb-14">
              {so.buyParagraphs.map((p, i) => (
                <p key={i} className="text-white/75 text-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {so.buyPoints.map((point, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                className={i === so.buyPoints.length - 1 ? "md:col-span-2" : ""}
              >
                <li className="h-full p-6 lg:p-8 rounded-2xl border border-white/15 bg-white/5">
                  <div className="flex items-start gap-5">
                    <span
                      className="font-black text-white/40 leading-none shrink-0"
                      style={{ fontSize: "clamp(1.8rem, 2.4vw, 2.4rem)", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-white leading-snug mb-2">{point.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 6. WAT BIJ U BLIJFT — Wit ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {so.yourSideEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.yourSideTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {so.yourSide.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="h-full p-6 sm:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl hover:border-[#470020]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h3
                    className="text-xl font-black text-[#1a0810] mb-3 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#6b4a56] leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. WANNEER DIT PAST — Warm wit ───────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {so.fitEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.fitTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <ScrollReveal direction="left">
              <div className="h-full p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl">
                <h3
                  className="text-xl font-black text-[#1a0810] mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {so.fitYesTitle}
                </h3>
                <ul className="flex flex-col gap-4">
                  {so.fitYes.map((line, i) => (
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
                  {so.fitNoTitle}
                </h3>
                <ul className="flex flex-col gap-5">
                  {so.fitNo.map((item, i) => (
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

      {/* ─── 8. VEELGESTELDE VRAGEN — Wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {so.faqEyebrow}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              {so.faqTitle}
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl flex flex-col gap-3">
            {so.faq.map((item, i) => (
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
              {so.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{so.ctaSub}</p>

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
                {so.ctaPlan}
              </Link>
              <a
                href={`tel:${siteConfig.contacts.lucas.phoneHref}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {so.ctaCall}
              </a>
            </div>

            {/* Internal routes onward, so this page is not a dead end */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { href: "/partnermodellen", label: so.ctaLinks.partnermodellen },
                { href: "/partnermodellen/technical-support", label: so.ctaLinks.technicalSupport },
                { href: "/partnermodellen/full-epc", label: so.ctaLinks.fullEpc },
              ].map((link) => (
                <ArrowLink key={link.href} href={link.href} label={link.label} onDark />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
