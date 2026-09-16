"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold text-[#470020] hover:underline">
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
        <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function BlokPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/5] max-h-[560px] w-full rounded-2xl overflow-hidden border border-[#e0d5d0]" style={{ boxShadow: "0 8px 40px rgba(71,0,32,0.10), 0 2px 8px rgba(71,0,32,0.06)" }}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function WatWijDoen() {
  const { t } = useLang();
  const s = t.services;

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative flex items-center max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
              {s.heroEyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}>
              {s.heroTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{s.heroStandfirst}</p>
          </div>
        </div>
      </section>

      {/* ─── BLOK A — Full EPC — Wit ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{s.blokAEyebrow}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {s.blokATitle}
              </h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed mb-8">{s.blokAIntro}</p>
              <ArrowLink href="/partnermodellen/full-epc" label={s.blokACta} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <BlokPhoto src="/fotos/diensten/dienst-full-epc.jpg" alt={s.blokAPhotoAlt} />
            </ScrollReveal>
          </div>

          {/* Scope table */}
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-5">{s.blokAScopeTitle}</p>
            <div className="overflow-x-auto rounded-lg border border-[#e0d5d0] bg-white mb-16 lg:mb-20">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e0d5d0] bg-[#f9f6f4]">
                    {s.blokATableHeaders.map((h, i) => (
                      <th key={i} className={`py-4 px-6 text-left text-xs font-black tracking-widest uppercase ${i === 0 ? "text-[#6b4a56]" : "text-[#1a0810]"}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.blokAScope.map((row, ri) => (
                    <tr key={ri} className="border-b border-[#e0d5d0] last:border-0 hover:bg-[#f9f6f4] transition-colors">
                      <td className="py-4 px-6 text-sm text-[#470020] font-semibold whitespace-nowrap align-top">{row.name}</td>
                      <td className="py-4 px-6 text-sm text-[#1a0810] leading-relaxed">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Why turnkey */}
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-5">{s.blokAWhyTitle}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {s.blokAWhy.map((w, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-full p-8 lg:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl hover:border-[#470020]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-black text-[#1a0810] mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                    {w.title}
                  </h3>
                  <p className="text-sm text-[#6b4a56] leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOK B — Technische ondersteuning — Warm wit ────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
            <ScrollReveal direction="left" className="lg:order-2">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{s.blokBEyebrow}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {s.blokBTitle}
              </h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed mb-8">{s.blokBIntro}</p>
              <ArrowLink href="/partnermodellen/technical-support" label={s.blokBCta} />
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:order-1">
              <BlokPhoto src="/fotos/diensten/dienst-technische-ondersteuning.jpg" alt={s.blokBPhotoAlt} />
            </ScrollReveal>
          </div>

          {/* Three levels — numbered white cards */}
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-5">{s.blokBLevelsTitle}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {s.blokBLevels.map((l, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative h-full p-6 sm:p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300 overflow-hidden">
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] leading-none select-none pointer-events-none"
                    style={{ fontSize: "72px", letterSpacing: "-0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-xl font-black text-[#1a0810] mb-4 leading-tight pr-16" style={{ letterSpacing: "-0.02em" }}>
                    {l.title}
                  </h3>
                  <p className="relative text-sm text-[#6b4a56] leading-relaxed">{l.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Callout — scarlet card */}
          <ScrollReveal>
            <div className="p-8 lg:p-12 border-2 border-[#470020] rounded-2xl bg-[#470020]">
              <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-4">{s.blokBCalloutTitle}</p>
              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-4xl">{s.blokBCallout}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BLOK C — Haalbaarheid — Wit ─────────────────────── */}
      <section id="haalbaarheid" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
            <ScrollReveal direction="left">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">{s.blokCEyebrow}</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                {s.blokCTitle}
              </h2>
              <p className="text-[#6b4a56] text-lg leading-relaxed">{s.blokCIntro}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <BlokPhoto src="/fotos/diensten/dienst-haalbaarheid.jpg" alt={s.blokCPhotoAlt} />
            </ScrollReveal>
          </div>

          {/* What we investigate — numbered rows */}
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-2">{s.blokCItemsTitle}</p>
          </ScrollReveal>
          <div className="divide-y divide-[#e0d5d0] mb-14">
            {s.blokCItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-6 lg:gap-10 py-8 group cursor-default">
                  <span
                    className="shrink-0 font-black text-[#e0d5d0] group-hover:text-[#470020] leading-none transition-colors duration-300"
                    style={{ fontSize: "clamp(40px,5vw,64px)", letterSpacing: "-0.04em", minWidth: "56px", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black text-[#1a0810] mb-2 tracking-tight group-hover:text-[#470020] transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#6b4a56] leading-relaxed max-w-3xl">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              href="/plan-een-afspraak"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#470020] text-white font-black text-base rounded hover:bg-[#5c0029] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] active:scale-[0.98] transition-colors duration-200"
            >
              {s.blokCCta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CLOSING CTA — Scarlet + particles ───────────────── */}
      <section className="relative py-32 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              {s.ctaTitle}
            </h2>
            <p className="text-white/70 text-lg mb-10">{s.ctaSub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-een-afspraak"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {s.ctaPlan}
              </Link>
              <a
                href={`tel:${siteConfig.contacts.lucas.phoneHref}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {s.ctaCall}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
