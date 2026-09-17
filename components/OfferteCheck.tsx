"use client";

import { useState, useSyncExternalStore } from "react";
import { useLang } from "@/components/LanguageProvider";
import { CHECK_GROUPS, CHECK_NUMBERS } from "@/lib/supply-only-check";

/** Never changes, so the store never notifies — we only want the snapshots. */
const neverSubscribe = () => () => {};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-[#470020] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/**
 * The fourteen questions we put to a supplier's offer, in three groups.
 *
 * Every question opens two or three lines on where it goes wrong and what to
 * ask instead. Several can stand open at once. Without JavaScript all of them
 * render open — the collapse only kicks in after hydration, so the list is
 * usable for a reader or crawler that never runs the script.
 */
export default function OfferteCheck() {
  const { t } = useLang();
  const so = t.supplyOnly;

  const groupTitles = so.checkGroups as Record<string, string>;
  const itemCopy = so.checkItems as Record<string, { q: string; a: string }>;

  // false while rendering on the server and during hydration, true after.
  const hydrated = useSyncExternalStore(neverSubscribe, () => true, () => false);
  const [openIds, setOpenIds] = useState<string[]>([]);

  const isOpen = (id: string) => (hydrated ? openIds.includes(id) : true);

  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div>
      {/* Generous space between the groups — fourteen open rows in a row is a
          long column, and the group headings are what break it up. */}
      <div className="flex flex-col gap-12 lg:gap-16">
        {CHECK_GROUPS.map((group) => (
          <div key={group.id}>
            <h3
              className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4 pb-4 border-b border-[#e0d5d0]"
            >
              {groupTitles[group.id]}
            </h3>

            <ul className="flex flex-col divide-y divide-[#e0d5d0]">
              {group.items.map((id) => {
                const open = isOpen(id);
                const panelId = `check-${id}`;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(id)}
                      className="w-full flex items-start gap-4 sm:gap-5 py-5 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] rounded transition-colors duration-200"
                    >
                      <span
                        className="text-sm font-black text-[#470020]/40 shrink-0 pt-0.5 w-6"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {String(CHECK_NUMBERS[id]).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-bold text-[#1a0810] leading-snug group-hover:text-[#470020] transition-colors duration-200">
                        {itemCopy[id].q}
                      </span>
                      <ChevronIcon open={open} />
                    </button>
                    <div id={panelId} hidden={!open} className="pb-5 pl-10 sm:pl-11 pr-10">
                      <p className="text-sm text-[#6b4a56] leading-relaxed max-w-3xl">
                        {itemCopy[id].a}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[#6b4a56] leading-relaxed max-w-3xl mt-12">{so.checkFooter}</p>
    </div>
  );
}
