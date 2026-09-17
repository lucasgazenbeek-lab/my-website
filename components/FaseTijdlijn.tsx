"use client";

import { useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

/**
 * The three phases of a Technical Support engagement, as a tab set on the
 * scarlet anchor section.
 *
 * All three panels stay in the DOM and are toggled with `hidden`, so the full
 * content ships in the HTML and the default state (phase 1) renders
 * server-side. Tabs follow the ARIA tabs pattern with a roving tabindex and
 * arrow-key navigation. Nothing slides: the panel swap is a plain show/hide,
 * with the fade limited to motion-safe.
 */
export default function FaseTijdlijn() {
  const { t } = useLang();
  const ts = t.technicalSupport;
  const phases = ts.phases;

  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const count = phases.length;
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
      {/* ── Progress rail: one dot per phase, aligned with the tabs ── */}
      <div className="hidden sm:block relative mb-6" aria-hidden>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/20" />
        <div className="relative grid grid-cols-3">
          {phases.map((_, i) => (
            <div key={i} className="flex justify-center">
              <span
                className={`w-3 h-3 rounded-full motion-safe:transition-colors duration-200 ${
                  i <= active ? "bg-white" : "bg-white/25"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label={ts.phasesTitle}
        onKeyDown={onKeyDown}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10"
      >
        {phases.map((phase, i) => {
          const selected = i === active;
          return (
            <button
              key={i}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`fase-tab-${i}`}
              aria-selected={selected}
              aria-controls={`fase-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`px-5 py-4 rounded text-sm font-black tracking-tight text-center border-2 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 ${
                selected
                  ? "bg-white border-white text-[#470020]"
                  : "border-white/25 text-white/70 hover:border-white/50 hover:bg-white/8 hover:text-white"
              }`}
            >
              {phase.tab}
            </button>
          );
        })}
      </div>

      {/* ── Panels ─────────────────────────────────────────────── */}
      {phases.map((phase, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`fase-panel-${i}`}
          aria-labelledby={`fase-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="motion-safe:transition-opacity motion-safe:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded"
        >
          <h3
            className="text-2xl lg:text-3xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {phase.title}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-10">
            {phase.intro}
          </p>

          <ul className="divide-y divide-white/15 border-t border-white/15">
            {phase.items.map((item, ii) => (
              <li
                key={ii}
                className="py-5 md:grid md:grid-cols-[minmax(0,20rem)_1fr] md:gap-10"
              >
                <p className="font-bold text-white leading-snug">{item.title}</p>
                <p className="text-white/70 text-sm leading-relaxed mt-1.5 md:mt-0">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="text-white/70 leading-relaxed max-w-4xl mt-12 pt-8 border-t border-white/15">
        {ts.phasesFooter}
      </p>
    </div>
  );
}
