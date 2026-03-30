"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Navigation() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/wat-wij-doen", label: t.nav.services },
    { href: "/partnermodellen", label: t.nav.partners },
    { href: "/projecten", label: t.nav.projects },
    { href: "/over-ons", label: t.nav.about },
  ];

  // On hero (dark scarlet) sections: text is white. After scroll: white bg, dark text.
  const onDark = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e0d5d0]"
            : "bg-gradient-to-b from-[#1a0810]/70 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src={onDark ? "/logo-nav-white.png" : "/logo-nav.png"}
              alt="Gridstate"
              width={220}
              height={101}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-200 tracking-wide ${
                  onDark
                    ? "text-white/80 hover:text-white"
                    : "text-[#1a0810]/70 hover:text-[#470020]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center gap-1 text-xs font-bold tracking-widest">
              <button
                onClick={() => setLang("nl")}
                className={`px-2 py-1 transition-colors ${
                  lang === "nl"
                    ? onDark ? "text-white" : "text-[#470020]"
                    : onDark ? "text-white/30 hover:text-white/60" : "text-[#1a0810]/30 hover:text-[#470020]/60"
                }`}
              >
                NL
              </button>
              <span className={onDark ? "text-white/20" : "text-[#1a0810]/20"}>|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 transition-colors ${
                  lang === "en"
                    ? onDark ? "text-white" : "text-[#470020]"
                    : onDark ? "text-white/30 hover:text-white/60" : "text-[#1a0810]/30 hover:text-[#470020]/60"
                }`}
              >
                EN
              </button>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className={`text-xs font-semibold tracking-wide transition-colors duration-200 ${
                onDark ? "text-white/50 hover:text-white/80" : "text-[#1a0810]/40 hover:text-[#470020]"
              }`}
            >
              Login
            </Link>

            {/* CTA */}
            <Link
              href="/plan-een-afspraak"
              className="px-5 py-2.5 bg-[#470020] text-white text-sm font-bold rounded hover:bg-[#5c0029] active:bg-[#2d0015] transition-colors duration-200"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[#1a0810]"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[#1a0810]"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[#1a0810]"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-8 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-black tracking-tight text-[#1a0810] hover:text-[#470020] transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/plan-een-afspraak"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block px-6 py-4 bg-[#470020] text-white text-xl font-bold rounded w-fit hover:bg-[#5c0029] transition-colors"
          >
            {t.nav.contact}
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-[#1a0810]/40 hover:text-[#470020] transition-colors"
          >
            Login
          </Link>
        </div>
        <div className="px-8 pb-8 flex items-center gap-3">
          <button onClick={() => setLang("nl")} className={`text-sm font-bold tracking-widest transition-colors ${lang === "nl" ? "text-[#470020]" : "text-[#1a0810]/30"}`}>NL</button>
          <span className="text-[#1a0810]/20">|</span>
          <button onClick={() => setLang("en")} className={`text-sm font-bold tracking-widest transition-colors ${lang === "en" ? "text-[#470020]" : "text-[#1a0810]/30"}`}>EN</button>
        </div>
      </div>
    </>
  );
}
