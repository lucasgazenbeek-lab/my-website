"use client";

import { useState, useSyncExternalStore } from "react";
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

/** Never changes, so the store never notifies — we only want the snapshots. */
const neverSubscribe = () => () => {};

function DocIcon({ className = "" }: { className?: string }) {
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
      className={`shrink-0 ${className}`}
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
 *
 * The contents list says what is in the document before you open it. Without
 * JavaScript every item renders open, so the whole list is readable for
 * anyone whose script never runs; the collapse only kicks in after hydration.
 */
export default function DownloadBlok({ background = "white" }: { background?: "white" | "warm" }) {
  const { lang, t } = useLang();
  const d = t.downloads;

  // false while rendering on the server and during hydration, true after.
  const hydrated = useSyncExternalStore(neverSubscribe, () => true, () => false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const label: Record<Lang, string> = { nl: d.nlLabel, en: d.enLabel };
  // The visitor's own language leads and gets the primary button.
  const order: Lang[] = lang === "en" ? ["en", "nl"] : ["nl", "en"];
  const active = DOCS[lang];

  const isOpen = (i: number) => (hydrated ? openIndex === i : true);

  return (
    <section className={`py-16 lg:py-20 ${background === "warm" ? "bg-[#f9f6f4]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="p-8 lg:p-10 bg-white border border-[#e0d5d0] rounded-2xl">
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
              {d.eyebrow}
            </p>
            <h2
              className="text-2xl lg:text-3xl font-black text-[#1a0810] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              {d.title}
            </h2>
            <p className="text-[#6b4a56] leading-relaxed max-w-2xl">{d.body}</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,17rem)] gap-8 lg:gap-16 mt-8 pt-8 border-t border-[#e0d5d0]">
              {/* What is in the document */}
              <div>
                <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-4">
                  {d.contentsLabel}
                </p>
                <ol className="divide-y divide-[#e0d5d0] border-y border-[#e0d5d0]">
                  {d.contents.map((item, i) => {
                    const open = isOpen(i);
                    const panelId = `download-item-${i}`;
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(open && hydrated ? null : i)}
                          className="group w-full flex items-center gap-4 py-3.5 text-left cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
                        >
                          <span
                            className="text-xs font-black text-[#470020]/40 shrink-0 w-6"
                            style={{ fontVariantNumeric: "tabular-nums" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 font-bold text-[#1a0810] leading-snug group-hover:text-[#470020] transition-colors duration-200">
                            {item.title}
                          </span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                            className={`shrink-0 text-[#470020] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                        <div id={panelId} hidden={!open} className="pb-4 pl-10 pr-6">
                          <p className="text-sm text-[#6b4a56] leading-relaxed max-w-xl">{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Take it with you */}
              <div className="flex flex-col gap-3">
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
                      className={`flex items-center gap-3 px-6 py-4 rounded text-base active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200 ${
                        primary
                          ? "bg-[#470020] text-white font-black hover:bg-[#5c0029]"
                          : "border-2 border-[#470020]/25 text-[#470020] font-bold hover:border-[#470020]/50 hover:bg-[#f9f6f4]"
                      }`}
                    >
                      <DocIcon />
                      <span>{label[code]}</span>
                      <span className={`ml-auto text-xs font-semibold ${primary ? "text-white/75" : "text-[#6b4a56]"}`}>
                        {doc.size}
                      </span>
                    </a>
                  );
                })}
                <p className="text-sm text-[#6b4a56] mt-2">
                  {fillTemplate(d.meta, { pages: active.pages })}
                </p>
                <p className="text-xs text-[#6b4a56]">{d.newTab}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
