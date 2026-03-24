"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  const pages = [
    { href: "/", label: t.nav.home },
    { href: "/wat-wij-doen", label: t.nav.services },
    { href: "/partnermodellen", label: t.nav.partners },
    { href: "/projecten", label: t.nav.projects },
    { href: "/over-ons", label: t.nav.about },
    { href: "/plan-een-afspraak", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#470020] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Image src="/logo-alt.png" alt="Gridstate" width={140} height={40} className="h-10 w-auto object-contain mb-4" />
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">{t.footer.tagline}</p>
          <div className="mt-6">
            <a href="mailto:info@gridstate.nl" className="text-white/60 text-sm hover:text-white transition-colors">
              info@gridstate.nl
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-5">{t.footer.links}</p>
          <ul className="flex flex-col gap-3">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-white/60 hover:text-white transition-colors">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-5">{t.footer.contact}</p>
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <p className="text-white font-semibold">Emiel Verlee</p>
              <p className="text-white/40 text-xs">CEO & Oprichter</p>
              <a href="tel:+31625404350" className="text-white/60 hover:text-white transition-colors block mt-1">+31 6 25 40 43 50</a>
            </div>
            <div>
              <p className="text-white font-semibold">Lucas Gazenbeek</p>
              <p className="text-white/40 text-xs">DGA & Commercieel Directeur</p>
              <a href="tel:+31652350318" className="text-white/60 hover:text-white transition-colors block mt-1">+31 6 52 35 03 18</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.kvk}</span>
        </div>
      </div>
    </footer>
  );
}
