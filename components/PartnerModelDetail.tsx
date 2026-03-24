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
  modelKey: "model1" | "model2" | "model3";
}

export default function PartnerModelDetail({ modelKey }: Props) {
  const { t } = useLang();
  const p = t.partnermodels;

  const modelData = {
    model1: { title: p.model1Title, tag: p.model1Tag, sub: p.model1Sub, features: p.model1Features, ideal: p.model1Ideal },
    model2: { title: p.model2Title, tag: p.model2Tag, sub: p.model2Sub, features: p.model2Features, ideal: p.model2Ideal },
    model3: { title: p.model3Title, tag: p.model3Tag, sub: p.model3Sub, features: p.model3Features, ideal: p.model3Ideal },
  };

  const model = modelData[modelKey];
  const isFeatured = modelKey === "model1";

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
              className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {model.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{model.sub}</p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES — Lichtgrijs / Wit ─────────────────────── */}
      <section className={`py-24 lg:py-32 ${isFeatured ? "bg-white" : "bg-[#f9f6f4]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">
                Wat Gridstate biedt
              </p>
              <ul className="flex flex-col gap-5">
                {model.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 bg-[#470020]/10 border border-[#470020]/20 rounded-lg flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <p className="text-[#6b4a56] leading-relaxed pt-1">{f}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className={`p-8 rounded-lg border-2 ${isFeatured ? "border-[#470020] bg-[#470020]" : "border-[#e0d5d0] bg-white"}`}>
                <p className={`text-xs font-black tracking-widest uppercase mb-4 ${isFeatured ? "text-white/50" : "text-[#6b4a56]"}`}>
                  {p.idealFor}
                </p>
                <p className={`text-xl font-bold mb-6 ${isFeatured ? "text-white" : "text-[#1a0810]"}`}>{model.ideal}</p>
                <div className={`h-px mb-6 ${isFeatured ? "bg-white/20" : "bg-[#e0d5d0]"}`} />
                <p className={`text-xs font-black tracking-widest uppercase mb-4 ${isFeatured ? "text-white/50" : "text-[#6b4a56]"}`}>
                  Onboarding traject
                </p>
                <div className="flex flex-col gap-3">
                  {p.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-xs font-black ${
                        isFeatured ? "bg-white/20 text-white" : "bg-[#470020]/10 text-[#470020]"
                      }`}>
                        {i + 1}
                      </span>
                      <span className={isFeatured ? "text-white/70" : "text-[#6b4a56]"}>{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#470020] text-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative">
          <ScrollReveal>
            <h2
              className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Interesse in dit model?
            </h2>
            <p className="text-white/60 mb-8">
              Laten we kennismaken en kijken hoe we kunnen samenwerken.
            </p>
            <Link
              href="/plan-een-afspraak"
              className="inline-block px-10 py-5 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-all duration-200"
            >
              {p.ctaButton}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
