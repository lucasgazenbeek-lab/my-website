"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { CountUp } from "@/components/CountUp";
import { siteConfig } from "@/lib/site-config";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

/**
 * One icon per entry in `about.whyPoints`, in order. The homepage renders the
 * same four points from that same key with its own copy of this set — change
 * the points and both lists have to follow.
 */
const WHY_ICONS = [
  // House — we stay an owner of what we build
  <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  // Map pin — procedures differ per country and per grid operator
  <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  // Scales — advice that is not tied to one brand
  <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M8 21h8"/><path d="M5 7h14"/><path d="M5 7l-3 6h6z"/><path d="M19 7l-3 6h6z"/></svg>,
  // Speech bubble — we say so when it does not work
  <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"/></svg>,
];

/**
 * One team card. The three are identical apart from their content and the
 * phone number, which only two of them have — so the layout lives here once
 * instead of being repeated three times and drifting apart.
 */
function TeamCard({
  photo,
  name,
  role,
  bio,
  topicsLabel,
  topics,
  phoneHref,
  phoneDisplay,
  fullHeight = false,
}: {
  photo: string;
  name: string;
  role: string;
  bio: string;
  topicsLabel: string;
  topics: readonly string[];
  phoneHref?: string;
  phoneDisplay?: string;
  fullHeight?: boolean;
}) {
  return (
    <div className={`border-2 border-[#470020] rounded-lg bg-[#470020] overflow-hidden${fullHeight ? " h-full" : ""}`}>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={photo}
          alt={`${name} — ${role}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover grayscale"
        />
      </div>
      <div className="p-10">
        <div className="mb-8">
          <h3 className="text-2xl font-black text-white tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            {name}
          </h3>
          <p className="text-white/60 text-sm font-semibold">{role}</p>
          {phoneHref && phoneDisplay && (
            <a
              href={`tel:${phoneHref}`}
              className="text-white/50 text-sm rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors mt-1 inline-block"
            >
              {phoneDisplay}
            </a>
          )}
        </div>

        <p className="text-sm text-white/70 leading-relaxed mb-8">{bio}</p>

        <div className="border-t border-white/20 pt-6">
          <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-3">
            {topicsLabel}
          </p>
          <p className="text-sm text-white/70">{topics.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

export default function OverOns() {
  const { t } = useLang();
  const a = t.about;
  const st = siteConfig.stats;

  const stats = [
    { value: st.mwhRealized.value, suffix: `${st.mwhRealized.suffix} ${st.mwhRealized.unit}` },
    { value: st.mwhInDevelopment.value, suffix: `${st.mwhInDevelopment.suffix} ${st.mwhInDevelopment.unit}` },
    { value: st.activeProjects.value, suffix: st.activeProjects.suffix },
    { value: st.businessCasesCalculated.value, suffix: st.businessCasesCalculated.suffix },
  ];

  // The closing sentence carries the address inline, so it is split rather
  // than interpolated as text.
  const [careersBefore, careersAfter] = a.careersOutro.split("{email}");

  return (
    <div className="flex flex-col pt-18">
      {/* ─── 1. HERO — Scharlaken ─────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
            {a.aboutLabel}
          </p>
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6 max-w-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {a.heroTitle}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">{a.heroStandfirst}</p>
        </div>
      </section>

      {/* ─── 2. HET TEAM — Warm wit ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-14 text-center"
              style={{ letterSpacing: "-0.03em" }}
            >
              {a.teamLabel}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal delay={0} direction="left">
              <TeamCard
                photo="/fotos/team/emiel-verlee-kaart.jpg"
                name={a.emielName}
                role={a.emielRole}
                bio={a.emielBio}
                topicsLabel={a.callAboutLabel}
                topics={a.emielTopics}
                phoneHref={siteConfig.contacts.emiel.phoneHref}
                phoneDisplay={siteConfig.contacts.emiel.phoneDisplay}
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <TeamCard
                photo="/fotos/team/lucas-gazenbeek-kaart.jpg"
                name={a.lucasName}
                role={a.lucasRole}
                bio={a.lucasBio}
                topicsLabel={a.callAboutLabel}
                topics={a.lucasTopics}
                phoneHref={siteConfig.contacts.lucas.phoneHref}
                phoneDisplay={siteConfig.contacts.lucas.phoneDisplay}
              />
            </ScrollReveal>

            <ScrollReveal delay={240} className="lg:col-span-2 lg:w-1/2 lg:mx-auto">
              <TeamCard
                photo="/fotos/team/shane-konijnenberg-kaart.jpg"
                name={a.shaneName}
                role={a.shaneRole}
                bio={a.shaneBio}
                topicsLabel={a.callAboutLabel}
                topics={a.shaneTopics}
                fullHeight
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. ONS VERHAAL — Wit ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                {a.storyLabel}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-10"
                style={{ letterSpacing: "-0.03em" }}
              >
                {a.storyTitle}
              </h2>
              <div className="flex flex-col gap-6">
                {a.storyParagraphs.map((p, i) => (
                  <p key={i} className="text-[#6b4a56] text-lg leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. HOE WIJ WERKEN — Warm wit ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {a.principlesLabel}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              {a.principlesTitle}
            </h2>
            <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-14">{a.principlesIntro}</p>
          </ScrollReveal>

          {/* Read in one pass — deliberately no disclosure here */}
          <ol className="flex flex-col gap-5 lg:gap-6 max-w-5xl">
            {a.principles.map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <li className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-10 p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300">
                  <span
                    className="font-black text-[#470020] leading-none md:w-16"
                    style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-black text-[#1a0810] mb-3 leading-snug"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#6b4a56] leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 5. DE CIJFERS, MET HUN HERKOMST — Scharlaken ─────── */}
      <section className="relative py-28 lg:py-40 bg-[#470020] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-4">
              {a.statsLabel}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-14"
              style={{ letterSpacing: "-0.03em" }}
            >
              {a.statsTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {a.statItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex flex-col">
                  {/* Sized so the widest value ("200+ MWh") still fits its
                      column on one line — a wrapped unit pushes that column's
                      label out of line with the other three. */}
                  <div
                    className="font-black text-white mb-4"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.9rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    <CountUp end={stats[i].value} suffix={stats[i].suffix} />
                  </div>
                  <p className="text-xs font-black tracking-widest text-white uppercase mb-3">
                    {item.label}
                  </p>
                  <div className="w-8 h-px bg-white/25 mb-3" aria-hidden />
                  <p className="text-sm text-white/60 leading-relaxed">{item.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-white/70 leading-relaxed max-w-3xl mt-16">{a.statsFooter}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. WAAROM GRIDSTATE — Wit ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-6">
                {a.whyUsLabel}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                {a.whyTitle}
              </h2>
              <blockquote
                className="text-xl lg:text-2xl text-[#6b4a56] font-semibold leading-snug max-w-2xl border-l-4 border-[#470020] pl-6"
                style={{ fontStyle: "italic" }}
              >
                &ldquo;{a.whyQuote}&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.whyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative p-6 sm:p-10 lg:p-12 border-2 border-[#e0d5d0] rounded-xl bg-white hover:border-[#470020] hover:shadow-[0_8px_32px_rgba(71,0,32,0.12)] transition-all duration-300 h-full group overflow-hidden cursor-default">
                  {/* Decorative bg number */}
                  <span
                    className="absolute top-4 right-6 font-black text-[#e0d5d0] group-hover:text-[#470020]/10 leading-none select-none pointer-events-none transition-colors duration-300"
                    style={{ fontSize: "80px", letterSpacing: "-0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="relative w-12 h-12 mb-6 rounded-xl border-2 border-[#e0d5d0] bg-white flex items-center justify-center text-[#470020] group-hover:bg-[#470020] group-hover:border-[#470020] group-hover:text-white transition-all duration-300">
                    {WHY_ICONS[i % WHY_ICONS.length]}
                  </div>
                  <h3 className="relative font-black text-[#1a0810] text-xl mb-3 tracking-tight pr-16" style={{ letterSpacing: "-0.02em" }}>{point.title}</h3>
                  <p className="relative text-[#6b4a56] leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. WERKEN BIJ GRIDSTATE — Warm wit ───────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                {a.careersLabel}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#1a0810] tracking-tight mb-8"
                style={{ letterSpacing: "-0.03em" }}
              >
                {a.careersTitle}
              </h2>

              <p className="text-[#6b4a56] text-lg leading-relaxed mb-8">{a.careersIntro}</p>

              <p className="text-[#1a0810] font-bold leading-relaxed mb-5">{a.careersListIntro}</p>
              <ul className="flex flex-col gap-4 mb-8">
                {a.careersList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#6b4a56] leading-relaxed">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1.5" aria-hidden>
                      <path d="M3 8.5l3.5 3.5L13 5" stroke="#470020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#6b4a56] text-lg leading-relaxed">
                {careersBefore}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="font-bold text-[#470020] underline underline-offset-4 rounded hover:text-[#5c0029] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
                >
                  {siteConfig.company.email}
                </a>
                {careersAfter}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 8. CTA ───────────────────────────────────────────── */}
      <BookingCTA
        title="Maak kennis met het team"
        titleEn="Meet the team"
        sub="Directe lijnen — geen salesafdeling, geen intermediairs. Gewoon een open gesprek."
        subEn="Direct lines — no sales department, no intermediaries. Just an open conversation."
        trustLine="U spreekt direct met het team zelf — zonder verkooppraatje."
        trustLineEn="You'll speak directly with the team itself — no sales pitch."
      />
    </div>
  );
}
