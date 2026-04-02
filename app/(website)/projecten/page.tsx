"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

export default function Projecten() {
  const { t } = useLang();
  const p = t.projects;

  const projects = p.projects as Array<{
    sector: string;
    capacity: string;
    type: string;
    useCase: string;
    status: string;
  }>;

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
              {p.portfolioLabel}
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

      {/* ─── STATS STRIP — Wit ───────────────────────────────── */}
      <section className="border-b border-[#e0d5d0] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-3 divide-x divide-[#e0d5d0]">
          {[
            ["50+ MWh", p.statsInOwnPlanning],
            ["6", p.statsActiveProjects],
            ["Benelux", p.statsWorkArea],
          ].map(([val, label], i) => (
            <div key={i} className="px-3 sm:px-8 first:pl-0 last:pr-0 text-center">
              <div className="text-2xl font-black text-[#1a0810]" style={{ letterSpacing: "-0.03em" }}>{val}</div>
              <div className="text-xs text-[#6b4a56] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECT GRID — Lichtgrijs ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`group relative p-8 border rounded-lg h-full flex flex-col gap-4 transition-all duration-300 cursor-default ${
                  proj.status === "realized"
                    ? "border-[#470020] bg-[#470020]"
                    : "border-[#e0d5d0] bg-white hover:border-[#470020]/30 hover:shadow-md"
                }`}>
                  {/* Status badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold tracking-widest uppercase rounded ${
                      proj.status === "realized"
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-[#f9f6f4] text-[#6b4a56] border border-[#e0d5d0]"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${proj.status === "realized" ? "bg-white" : "bg-[#6b4a56]"}`} />
                      {proj.status === "realized" ? p.statusRealized : p.statusDev}
                    </span>
                    <span className={`text-xs font-black ${proj.status === "realized" ? "text-white/30" : "text-[#1a0810]/20"}`}>
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Sector */}
                  <h3 className={`text-xl font-black tracking-tight leading-tight ${proj.status === "realized" ? "text-white" : "text-[#1a0810]"}`}
                    style={{ letterSpacing: "-0.02em" }}>
                    {proj.sector}
                  </h3>

                  {/* Capacity — big */}
                  <div className={`text-3xl font-black ${proj.status === "realized" ? "text-white/90" : "text-[#470020]"}`}
                    style={{ letterSpacing: "-0.03em" }}>
                    {proj.capacity}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className={`flex items-center justify-between text-sm border-t pt-4 ${proj.status === "realized" ? "border-white/20" : "border-[#e0d5d0]"}`}>
                      <span className={`text-xs font-semibold ${proj.status === "realized" ? "text-white/40" : "text-[#6b4a56]"}`}>{p.type}</span>
                      <span className={`font-medium ${proj.status === "realized" ? "text-white/80" : "text-[#1a0810]"}`}>{proj.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-xs font-semibold ${proj.status === "realized" ? "text-white/40" : "text-[#6b4a56]"}`}>{p.useCase}</span>
                      <span className={`font-medium text-right max-w-[60%] ${proj.status === "realized" ? "text-white/80" : "text-[#1a0810]"}`}>{proj.useCase}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER — Wit ────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-[#e0d5d0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#6b4a56]/60 text-center leading-relaxed max-w-2xl mx-auto">
            {p.projectDisclaimer}
          </p>
        </div>
      </section>

      {/* ─── CTA — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                {p.ctaTitle}
              </h2>
              <p className="text-white/60 text-lg mb-10">{p.ctaSub}</p>
              <Link
                href="/plan-een-afspraak"
                className="inline-block px-10 py-5 bg-white text-[#470020] font-black rounded hover:bg-[#f2edea] active:scale-[0.98] transition-all duration-200 text-lg"
              >
                {p.ctaButton}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
