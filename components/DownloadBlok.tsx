"use client";

import { useLang } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { fillTemplate } from "@/lib/technical-support-scope";
import type { Lang } from "@/lib/translations";

/**
 * Bron van deze PDF's: documentfabriek/output/capability-statement/.
 * Bij een nieuwe versie: daar bouwen, dan kopieren naar public/downloads/
 * onder dezelfde bestandsnaam, en de bestandsgrootte in DOCS bijwerken.
 * De inhoud volgt /partnermodellen, /over-ons en /partnermodellen/full-epc;
 * wijzigt de positionering op de site, dan moet het document mee.
 */
export const DOCS = {
  nl: { href: "/downloads/Gridstate-Capability-Statement-NL.pdf", size: "201 kB", pages: 10 },
  en: { href: "/downloads/Gridstate-Capability-Statement-EN.pdf", size: "200 kB", pages: 10 },
} as const;

function DocIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 11v6" />
      <path d="M9.5 14.5L12 17l2.5-2.5" />
    </svg>
  );
}

/**
 * The capability statement, in both languages, without a form in front of it.
 * The document is meant to be forwarded internally to someone who does not
 * know us yet, and a gate is exactly what breaks that.
 */
export default function DownloadBlok({ background = "white" }: { background?: "white" | "warm" }) {
  const { lang, t } = useLang();
  const d = t.downloads;

  const label: Record<Lang, string> = { nl: d.nlLabel, en: d.enLabel };
  // The visitor's own language leads and gets the primary button.
  const order: Lang[] = lang === "en" ? ["en", "nl"] : ["nl", "en"];
  const active = DOCS[lang];

  return (
    <section className={`py-16 lg:py-20 ${background === "warm" ? "bg-[#f9f6f4]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl">
            <div>
              <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
                {d.eyebrow}
              </p>
              <h2
                className="text-2xl lg:text-3xl font-black text-[#1a0810] mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {d.title}
              </h2>
              <p className="text-[#6b4a56] leading-relaxed max-w-2xl mb-5">{d.body}</p>
              <p className="text-sm text-[#6b4a56]">
                {fillTemplate(d.meta, { pages: active.pages, size: active.size })}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[15rem]">
              {order.map((code, i) => {
                const doc = DOCS[code];
                const primary = i === 0;
                return (
                  <a
                    key={code}
                    href={doc.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={fillTemplate(d.ariaTemplate, { language: label[code], pages: doc.pages })}
                    className={`flex items-center gap-3 px-6 py-4 rounded font-bold text-base active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200 ${
                      primary
                        ? "bg-[#470020] text-white font-black hover:bg-[#5c0029]"
                        : "border-2 border-[#470020]/25 text-[#470020] hover:border-[#470020]/50 hover:bg-[#f9f6f4]"
                    }`}
                  >
                    <DocIcon />
                    <span>{label[code]}</span>
                    <span className={`ml-auto text-xs font-semibold ${primary ? "text-white/60" : "text-[#6b4a56]"}`}>
                      {doc.size}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
