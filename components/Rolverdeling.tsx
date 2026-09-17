"use client";

import { useState, useSyncExternalStore } from "react";
import { useLang } from "@/components/LanguageProvider";
import { SCOPE_GROUPS, type ScopeRole } from "@/lib/technical-support-scope";

/** Never changes, so the store never notifies — we only want the snapshots. */
const neverSubscribe = () => () => {};

/**
 * Badge colours are fixed per role. The badge always carries the word as
 * well, so the role never depends on colour alone.
 */
const BADGE_CLASS: Record<ScopeRole, string> = {
  u: "bg-[#e0d5d0] text-[#1a0810] border border-transparent",
  gridstate: "bg-[#470020] text-white border border-transparent",
  samen: "bg-[#470020]/10 text-[#470020] border border-[#470020]/25",
};

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
 * How we divide the work: twelve parts in three groups, each with the role
 * that carries it.
 *
 * Every part opens one sentence of explanation, and several can stand open at
 * once. Without JavaScript all explanations render open — the collapse only
 * kicks in after hydration, so nothing is hidden from a reader or a crawler
 * that never runs the script.
 */
export default function Rolverdeling() {
  const { t } = useLang();
  const ts = t.technicalSupport;

  const roles = ts.rolRoles as Record<ScopeRole, string>;
  const groupTitles = ts.rolGroups as Record<string, string>;
  const itemCopy = ts.rolItems as Record<string, { label: string; note: string }>;

  // false while rendering on the server and during hydration, true after —
  // so every explanation ships open and only collapses once JS has taken over.
  const hydrated = useSyncExternalStore(neverSubscribe, () => true, () => false);
  const [openIds, setOpenIds] = useState<string[]>([]);

  const isOpen = (id: string) => (hydrated ? openIds.includes(id) : true);

  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div>
      <div className="flex flex-col gap-10 lg:gap-12">
        {SCOPE_GROUPS.map((group, gi) => (
          <div key={group.id}>
            <div className="flex items-baseline gap-4 mb-4">
              <span
                className="text-xs font-black tracking-widest text-[#470020]/50 shrink-0"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(gi + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-lg lg:text-xl font-black text-[#1a0810] leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                {groupTitles[group.id]}
              </h3>
            </div>

            <ul className="rounded-2xl border border-[#e0d5d0] bg-white divide-y divide-[#e0d5d0] overflow-hidden">
              {group.items.map((item) => {
                const open = isOpen(item.id);
                const panelId = `rol-${item.id}`;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-center gap-4 px-5 sm:px-8 py-4 text-left cursor-pointer hover:bg-[#f9f6f4] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#470020] transition-colors duration-200"
                    >
                      <span className="flex-1 font-bold text-[#1a0810] leading-snug">
                        {itemCopy[item.id].label}
                      </span>
                      <span
                        className={`shrink-0 min-w-[4.5rem] text-center px-2.5 py-1 rounded text-xs font-black tracking-widest uppercase ${
                          BADGE_CLASS[item.role]
                        }`}
                      >
                        {roles[item.role]}
                      </span>
                      <ChevronIcon open={open} />
                    </button>
                    <div id={panelId} hidden={!open} className="px-5 sm:px-8 pb-5">
                      <p className="text-sm text-[#6b4a56] leading-relaxed max-w-3xl">
                        {itemCopy[item.id].note}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[#6b4a56] leading-relaxed max-w-3xl mt-10">{ts.rolFooter}</p>
    </div>
  );
}
