"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const { t } = useLang();
  const { company, contacts } = siteConfig;

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
          <Image src="/logo-alt.png" alt="Gridstate" width={140} height={40} sizes="140px" className="h-10 w-auto object-contain mb-4" />
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">{t.footer.tagline}</p>
          <div className="mt-6 flex flex-col gap-2">
            <a href={`mailto:${company.email}`} className="text-white/60 text-sm hover:text-white transition-colors">
              {company.email}
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              {company.address.full}
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
            <li>
              <a
                href="/algemene-voorwaarden.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {t.footer.terms}
              </a>
            </li>
            <li>
              <Link href="/privacyverklaring" className="text-sm text-white/60 hover:text-white transition-colors">
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-black tracking-widest text-white/40 uppercase mb-5">{t.footer.contact}</p>
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <p className="text-white font-semibold">{contacts.emiel.name}</p>
              <p className="text-white/40 text-xs">CEO & Oprichter</p>
              <a href={`tel:${contacts.emiel.phoneHref}`} className="text-white/60 hover:text-white transition-colors block mt-1">{contacts.emiel.phoneDisplay}</a>
            </div>
            <div>
              <p className="text-white font-semibold">{contacts.lucas.name}</p>
              <p className="text-white/40 text-xs">Commercieel Directeur & Mede-eigenaar</p>
              <a href={`tel:${contacts.lucas.phoneHref}`} className="text-white/60 hover:text-white transition-colors block mt-1">{contacts.lucas.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>{`© ${new Date().getFullYear()} ${company.legalName} ${t.footer.rights}`}</span>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span>{company.address.full}</span>
            <span>{`${t.footer.kvkLabel}: ${company.kvk}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
