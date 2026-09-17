"use client";

import { useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { EPC_PHASES, type EpcRole } from "@/lib/full-epc-scope";

/**
 * Badge colours are fixed per role. The badge always carries the word as
 * well, so the role never depends on colour alone. Only roles that differ
 * from the section default get a badge at all — with eleven of the twelve
 * blocks sitting with us, a badge on every line is noise, not information.
 */
const BADGE_CLASS: Record<EpcRole, string> = {
  wij: "bg-[#470020] text-white border border-transparent",
  samen: "bg-[#470020]/10 text-[#470020] border border-[#470020]/25",
  u: "bg-[#e0d5d0] text-[#1a0810] border border-transparent",
};

/**
 * What a turnkey assignment contains, per phase.
 *
 * Phases are ARIA tabs with arrow-key navigation; inside a phase the blocks
 * are a plain list, open, with one worked example underneath. All three
 * panels stay in the DOM and are toggled with `hidden`, so the full content
 * ships in the HTML and the default state renders server-side.
 */
export default function ScopeBlokken() {
  const { t } = useLang();
  const fe = t.fullEpc;

  const roles = fe.scopeRoles as Record<EpcRole, string>;
  const phaseCopy = fe.scopePhases as Record<string, { tab: string; title: string }>;
  const examples = fe.scopeExamples as Record<string, string>;
  const itemCopy = fe.scopeItems as Record<string, { label: string; note: string }>;

  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const count = EPC_PHASES.length;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + count) % count;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = count - 1;
    if (next === -1) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      {/* ── Phase tabs, with a rail that shows where you are ──── */}
      <div className="hidden sm:block relative mb-5" aria-hidden>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#e0d5d0]" />
        <div className="relative grid grid-cols-3">
          {EPC_PHASES.map((_, i) => (
            <div key={i} className="flex justify-center">
              <span
                className={`w-3 h-3 rounded-full motion-safe:transition-colors duration-200 ${
                  i <= active ? "bg-[#470020]" : "bg-[#e0d5d0]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        role="tablist"
        aria-label={fe.scopeTabLabel}
        onKeyDown={onKeyDown}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10"
      >
        {EPC_PHASES.map((phase, i) => {
          const selected = i === active;
          return (
            <button
              key={phase.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`epc-tab-${phase.id}`}
              aria-selected={selected}
              aria-controls={`epc-panel-${phase.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`px-4 py-4 rounded text-sm font-black tracking-tight text-center border-2 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200 ${
                selected
                  ? "bg-[#470020] border-[#470020] text-white"
                  : "bg-white border-[#e0d5d0] text-[#6b4a56] hover:border-[#470020]/40 hover:text-[#470020]"
              }`}
            >
              <span
                className="block text-xs font-black tracking-widest opacity-50 mb-1"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {phaseCopy[phase.id].tab}
            </button>
          );
        })}
      </div>

      {/* ── Panels ─────────────────────────────────────────────── */}
      {EPC_PHASES.map((phase, i) => (
        <div
          key={phase.id}
          role="tabpanel"
          id={`epc-panel-${phase.id}`}
          aria-labelledby={`epc-tab-${phase.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="motion-safe:transition-opacity motion-safe:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#470020] rounded"
        >
          <h3
            className="text-2xl lg:text-3xl font-black text-[#1a0810] mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            {phaseCopy[phase.id].title}
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
            {phase.blocks.map((block) => (
              <li key={block.id} className="flex gap-4">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#470020] shrink-0" aria-hidden />
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h4 className="font-black text-[#1a0810] leading-snug" style={{ letterSpacing: "-0.02em" }}>
                      {itemCopy[block.id].label}
                    </h4>
                    {/* Only the exception to the section default is marked */}
                    {block.role !== "wij" && (
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-xs font-black tracking-widest uppercase ${
                          BADGE_CLASS[block.role]
                        }`}
                      >
                        {roles[block.role]}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#6b4a56] leading-relaxed">{itemCopy[block.id].note}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* One worked example per phase */}
          <div className="p-6 lg:p-8 rounded-2xl bg-white border border-[#e0d5d0]">
            <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-3">
              {fe.scopeExampleLabel}
            </p>
            <p className="text-[#1a0810] leading-relaxed max-w-3xl">{examples[phase.id]}</p>
          </div>
        </div>
      ))}

      <p className="text-[#6b4a56] leading-relaxed max-w-3xl mt-10">{fe.scopeFooter}</p>
    </div>
  );
}
