"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import {
  SCOPE_BLOCKS,
  SCOPE_TOTAL,
  countByRole,
  fillTemplate,
  type ScopeFilter,
  type ScopeRole,
} from "@/lib/technical-support-scope";

const ROLE_ORDER: ScopeRole[] = ["u", "gridstate", "samen", "onderaannemer"];

/**
 * Badge colours are fixed per role. The badge always carries the word as
 * well, so the role never depends on colour alone.
 */
const BADGE_CLASS: Record<ScopeRole, string> = {
  u: "bg-[#e0d5d0] text-[#1a0810] border border-transparent",
  gridstate: "bg-[#470020] text-white border border-transparent",
  samen: "bg-[#470020]/10 text-[#470020] border border-[#470020]/30",
  onderaannemer: "bg-white text-[#6b4a56] border border-[#e0d5d0]",
};

function ChevronIcon() {
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
      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/**
 * The scope matrix for the Technical Support model: eight collapsible blocks
 * of work packages, each with the role that carries it.
 *
 * Filtering dims the rows that do not match instead of removing them — the
 * visitor has to keep seeing the full scope. Blocks are native <details>
 * elements, so the default state renders server-side and the whole matrix
 * stays readable and operable without JavaScript.
 */
export default function ScopeMatrix() {
  const { t } = useLang();
  const ts = t.technicalSupport;

  const roles = ts.scopeRoles as Record<ScopeRole, string>;
  const counters = ts.scopeCounter as Record<ScopeRole, string>;
  const blockTitles = ts.scopeBlocks as Record<string, string>;
  const itemCopy = ts.scopeItems as Record<string, { label: string; note: string }>;

  const [filter, setFilter] = useState<ScopeFilter>("alles");

  // With no filter the counter answers the question the visitor arrived with:
  // how much stays with me.
  const counterRole: ScopeRole = filter === "alles" ? "u" : filter;
  const counterText = fillTemplate(counters[counterRole], {
    count: countByRole(counterRole),
    total: SCOPE_TOTAL,
  });

  return (
    <div>
      {/* ── Filters + live counter ─────────────────────────────── */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label={ts.scopeFilterLabel} className="flex flex-wrap gap-2">
            <FilterButton
              active={filter === "alles"}
              onClick={() => setFilter("alles")}
              label={ts.scopeFilterAll}
            />
            {ROLE_ORDER.map((role) => (
              <FilterButton
                key={role}
                active={filter === role}
                onClick={() => setFilter(role)}
                label={roles[role]}
              />
            ))}
          </div>
          {filter !== "alles" && (
            <button
              type="button"
              onClick={() => setFilter("alles")}
              className="px-3 py-2 text-xs font-bold text-[#6b4a56] underline underline-offset-4 rounded hover:text-[#470020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
            >
              {ts.scopeReset}
            </button>
          )}
        </div>

        <p
          aria-live="polite"
          className="text-sm font-bold text-[#1a0810] lg:text-right"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {counterText}
        </p>
      </div>

      {/* ── Blocks ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3">
        {SCOPE_BLOCKS.map((block, bi) => (
          <details
            key={block.id}
            open={block.defaultOpen}
            className="group rounded-2xl border border-[#e0d5d0] bg-white overflow-hidden"
          >
            <summary className="flex items-center gap-4 px-5 sm:px-8 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#470020] hover:bg-[#f9f6f4] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#470020] transition-colors duration-200">
              <span
                className="text-xs font-black tracking-widest text-[#470020]/50 shrink-0"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(bi).padStart(2, "0")}
              </span>
              <h3
                className="text-base sm:text-lg font-black text-[#1a0810] leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                {blockTitles[block.id]}
              </h3>
              <span className="ml-auto flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline text-xs font-semibold text-[#6b4a56]">
                  {block.items.length} {ts.scopeCountLabel}
                </span>
                <ChevronIcon />
              </span>
            </summary>

            <ul className="border-t border-[#e0d5d0] divide-y divide-[#e0d5d0]">
              {block.items.map((item) => {
                const dimmed = filter !== "alles" && item.role !== filter;
                return (
                  <li
                    key={item.id}
                    className={`px-5 sm:px-8 py-4 transition-opacity duration-200 ${
                      dimmed ? "opacity-35" : "opacity-100"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                      <div className="sm:flex-1">
                        <p className="font-bold text-[#1a0810] leading-snug">
                          {itemCopy[item.id].label}
                        </p>
                        <p className="text-sm text-[#6b4a56] leading-relaxed mt-1">
                          {itemCopy[item.id].note}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 self-start inline-block min-w-[5.5rem] text-center px-2.5 py-1 rounded text-xs font-black tracking-widest uppercase ${
                          BADGE_CLASS[item.role]
                        }`}
                      >
                        {roles[item.role]}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`px-4 py-2 rounded text-xs font-black tracking-widest uppercase border-2 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200 ${
        active
          ? "bg-[#470020] border-[#470020] text-white"
          : "bg-white border-[#e0d5d0] text-[#6b4a56] hover:border-[#470020]/40 hover:text-[#470020]"
      }`}
    >
      {label}
    </button>
  );
}
