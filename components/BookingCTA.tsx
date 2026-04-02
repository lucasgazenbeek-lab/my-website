"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

interface BookingCTAProps {
  title?: string;
  titleEn?: string;
  sub?: string;
  subEn?: string;
  phone?: string;
  phoneDisplay?: string;
}

export default function BookingCTA({
  title = "Klaar om aan de slag te gaan?",
  titleEn,
  sub = "Plan direct een gesprek of bel ons — zonder verplichtingen.",
  subEn,
  phone = "+31652350318",
  phoneDisplay = "+31 (0)6 52 35 03 18",
}: BookingCTAProps) {
  const { t, lang } = useLang();
  const g = t.general;
  const displayTitle = lang === "en" && titleEn ? titleEn : title;
  const displaySub = lang === "en" && subEn ? subEn : sub;
  return (
    <section className="relative py-24 lg:py-32 bg-[#1a0810] overflow-hidden">
      {/* Grain overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" aria-hidden>
        <filter id="cta-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cta-grain)" />
      </svg>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(71,0,32,0.55) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-4">
            {g.directContact}
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {displayTitle}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{displaySub}</p>
        </div>

        {/* Two-track CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Primary — Plan meeting */}
          <Link
            href="/plan-een-afspraak"
            className="group relative flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white text-[#1a0810] hover:bg-[#f2edea] active:scale-[0.98] transition-all duration-200 overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-[#470020] flex items-center justify-center text-white mb-1 group-hover:scale-105 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-black text-lg tracking-tight" style={{ letterSpacing: "-0.02em" }}>{g.bookMeeting}</div>
              <div className="text-sm text-[#6b4a56] mt-1">{g.chooseTime}</div>
            </div>
            {/* Arrow */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#470020] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>

          {/* Secondary — Call now */}
          <a
            href={`tel:${phone}`}
            className="group relative flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-white/15 hover:border-white/30 hover:bg-white/5 active:scale-[0.98] transition-all duration-200"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl border-2 border-white/20 flex items-center justify-center text-white mb-1 group-hover:border-white/40 group-hover:scale-105 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-black text-lg text-white tracking-tight" style={{ letterSpacing: "-0.02em" }}>{g.callNow}</div>
              <div className="text-sm text-white/50 mt-1 font-mono tracking-wide">{phoneDisplay}</div>
            </div>
            {/* Arrow */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Trust line */}
        <p className="text-center text-white/25 text-sm mt-10">
          {g.noObligation}
        </p>
      </div>
    </section>
  );
}
