"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";
const HeroParticles = dynamic(() => import("@/components/HeroParticles"), { ssr: false });

function ContactCard({
  name,
  role,
  phone,
  email,
  featured = false,
}: {
  name: string;
  role: string;
  phone: string;
  email: string;
  featured?: boolean;
}) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div className={`p-6 border rounded-lg transition-colors ${
      featured
        ? "border-[#470020] bg-[#470020]"
        : "border-[#e0d5d0] bg-white hover:border-[#470020]/30"
    }`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
          featured ? "bg-white/20 border border-white/30" : "bg-[#470020]/10 border border-[#470020]/20"
        }`}>
          <span className={`text-sm font-black ${featured ? "text-white" : "text-[#470020]"}`}>{initials}</span>
        </div>
        <div>
          <p className={`font-bold ${featured ? "text-white" : "text-[#1a0810]"}`}>{name}</p>
          <p className={`text-xs ${featured ? "text-white/60" : "text-[#470020]"}`}>{role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <a href={`tel:${phone.replace(/\s/g, "")}`} className={`text-sm transition-colors flex items-center gap-2 ${
          featured ? "text-white/60 hover:text-white" : "text-[#6b4a56] hover:text-[#470020]"
        }`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2.5c0 5.523 4.477 10 10 10v-3l-3-1-1.5 1.5A7 7 0 014 6L5.5 4.5 4.5 1.5 2 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {phone}
        </a>
        <a href={`mailto:${email}`} className={`text-sm transition-colors flex items-center gap-2 ${
          featured ? "text-white/60 hover:text-white" : "text-[#6b4a56] hover:text-[#470020]"
        }`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M1 3l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {email}
        </a>
      </div>
    </div>
  );
}

export default function PlanEenAfspraak() {
  const { t } = useLang();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col pt-18">
      {/* ─── HERO — Dark Scarlet ──────────────────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#470020]">
        <div className="absolute inset-0"><HeroParticles /></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(30,0,14,0.6) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,0,10,0.5), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-black tracking-widest text-white/50 uppercase mb-6">
            Contact
          </p>
          <h1
            className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {c.heroTitle}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">{c.heroSub}</p>
        </div>
      </section>

      {/* ─── CONTACT PERSONS — Wit ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-[#e0d5d0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ContactCard
                name={c.emielName}
                role={c.emielRole}
                phone="+31 6 25 40 43 50"
                email="emiel@gridstate.nl"
                featured
              />
              <ContactCard
                name={c.lucasName}
                role={c.lucasRole}
                phone="+31 6 52 35 03 18"
                email="lucas@gridstate.nl"
              />
              <div className="p-6 border border-[#e0d5d0] rounded-lg bg-[#f9f6f4] flex flex-col justify-center">
                <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-3">Algemeen</p>
                <a href="mailto:info@gridstate.nl" className="text-lg font-bold text-[#1a0810] hover:text-[#470020] transition-colors">
                  info@gridstate.nl
                </a>
                <p className="text-xs text-[#6b4a56] mt-2">Gridstate B.V. — Benelux</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CALENDLY + FORM — Lichtgrijs ────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Calendly embed */}
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                Direct inplannen
              </p>
              <h2
                className="text-3xl font-black text-[#1a0810] tracking-tight mb-3"
                style={{ letterSpacing: "-0.03em" }}
              >
                {c.calendarTitle}
              </h2>
              <p className="text-[#6b4a56] mb-8">{c.calendarSub}</p>

              <div className="rounded-lg border border-[#e0d5d0] overflow-hidden bg-white" style={{ minHeight: 500 }}>
                <iframe
                  src="https://calendly.com/gridstate"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: "none", minWidth: "100%" }}
                  title="Calendly scheduler"
                />
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-[#6b4a56] mb-4">Plan een afspraak via Calendly</p>
                    <a
                      href="https://calendly.com/gridstate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#470020] text-white font-bold rounded hover:bg-[#5c0029] transition-colors"
                    >
                      Open Calendly
                    </a>
                  </div>
                </noscript>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://calendly.com/gridstate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6b4a56] hover:text-[#470020] transition-colors underline underline-offset-4"
                >
                  Of open Calendly direct →
                </a>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                {c.orDirect}
              </p>
              <h2
                className="text-3xl font-black text-[#1a0810] tracking-tight mb-8"
                style={{ letterSpacing: "-0.03em" }}
              >
                Stuur ons een bericht
              </h2>

              {submitted ? (
                <div className="p-10 border border-[#470020] rounded-lg bg-[#470020] text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Bericht ontvangen</h3>
                  <p className="text-white/60">We nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                        {c.formName} <span className="text-[#470020]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm placeholder-[#6b4a56]/40 focus:border-[#470020] focus:outline-none transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                        {c.formCompany} <span className="text-[#470020]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm placeholder-[#6b4a56]/40 focus:border-[#470020] focus:outline-none transition-colors"
                        placeholder="Uw bedrijf"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                        {c.formEmail} <span className="text-[#470020]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm placeholder-[#6b4a56]/40 focus:border-[#470020] focus:outline-none transition-colors"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                        {c.formPhone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm placeholder-[#6b4a56]/40 focus:border-[#470020] focus:outline-none transition-colors"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                      {c.formRoleLabel}
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm focus:border-[#470020] focus:outline-none transition-colors appearance-none cursor-pointer"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b4a56' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    >
                      <option value="">— Selecteer —</option>
                      {c.formRoles.map((role, i) => (
                        <option key={i} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#6b4a56] tracking-widest uppercase">
                      {c.formMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-4 py-3 bg-white border border-[#e0d5d0] rounded-lg text-[#1a0810] text-sm placeholder-[#6b4a56]/40 focus:border-[#470020] focus:outline-none transition-colors resize-none"
                      placeholder="Beschrijf uw project, vraag of situatie..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 px-8 py-4 bg-[#470020] text-white font-bold rounded-lg hover:bg-[#5c0029] active:bg-[#2d0015] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {c.formSubmit}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
