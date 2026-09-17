"use client";

import { useState, useSyncExternalStore } from "react";
import { useLang } from "@/components/LanguageProvider";

/** Never changes, so the store never notifies — we only want the snapshots. */
const neverSubscribe = () => () => {};

/**
 * The table of contents of an information memorandum: fourteen chapters, each
 * opening the one question it answers.
 *
 * Set as a contents list rather than an accordion stack — thin rules, tabular
 * chapter numbers, one chapter open at a time. Without JavaScript every
 * chapter renders open, so the full list is readable for anyone whose script
 * never runs; the collapse only kicks in after hydration.
 */
export default function MemorandumInhoud() {
  const { t } = useLang();
  const inv = t.investors;

  // false while rendering on the server and during hydration, true after.
  const hydrated = useSyncExternalStore(neverSubscribe, () => true, () => false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isOpen = (i: number) => (hydrated ? openIndex === i : true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,18rem)] gap-10 lg:gap-16 items-start">
      <ol className="divide-y divide-[#e0d5d0] border-y border-[#e0d5d0]">
        {inv.memoChapters.map((chapter, i) => {
          const open = isOpen(i);
          const panelId = `memo-${i}`;
          return (
            <li key={i}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open && hydrated ? null : i)}
                className="group w-full flex items-center gap-5 py-4 text-left cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
              >
                <span
                  className="text-sm font-black text-[#470020]/40 shrink-0 w-7"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-bold text-[#1a0810] leading-snug group-hover:text-[#470020] transition-colors duration-200">
                  {chapter.title}
                </span>
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
                  className={`shrink-0 text-[#470020] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div id={panelId} hidden={!open} className="pb-4 pl-12 pr-8">
                <p className="text-sm text-[#6b4a56] leading-relaxed max-w-2xl">
                  {chapter.question}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <aside className="p-6 lg:p-8 rounded-2xl bg-[#f9f6f4] border border-[#e0d5d0] lg:sticky lg:top-28">
        <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-5">
          {inv.memoFeaturesLabel}
        </p>
        <ul className="flex flex-col gap-4">
          {inv.memoFeatures.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#1a0810] leading-relaxed">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden>
                <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
