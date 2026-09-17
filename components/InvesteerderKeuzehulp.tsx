"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { fillTemplate } from "@/lib/technical-support-scope";
import { ENTRY_VALUES, ROUTE_ENTRY_INDEX, scoreRoute, type RouteId } from "@/lib/investeerders-profielen";

/**
 * Five questions that point at one of the three entry points on this page.
 *
 * Same interaction pattern as `ScopeIntake` on the technical-support page:
 * one question at a time, a progress bar, a back button, no personal details
 * before the result, nothing in localStorage and nothing sent anywhere. The
 * two are kept separate rather than merged because ScopeIntake sits on a dark
 * card and this one on a light section, so every colour differs; sharing them
 * would mean threading a variant through each class for no real gain.
 */
export default function InvesteerderKeuzehulp() {
  const { t } = useLang();
  const inv = t.investors;

  const questions = inv.quizQuestions;
  const total = questions.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const finished = answers.length === total && step >= total;

  const answer = (index: number) => {
    const next = [...answers];
    next[step] = index;
    setAnswers(next);
    setStep(step + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  if (!finished) {
    const question = questions[step];
    return (
      <div className="p-6 sm:p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl">
        <div aria-live="polite">
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p
                className="text-xs font-black tracking-widest text-[#470020] uppercase"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {fillTemplate(inv.quizProgress, { current: step + 1, total })}
              </p>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#6b4a56] rounded hover:text-[#470020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {inv.quizBack}
                </button>
              )}
            </div>
            <div className="h-1 w-full bg-[#e0d5d0] rounded overflow-hidden">
              <div
                className="h-full bg-[#470020] motion-safe:transition-transform motion-safe:duration-300 origin-left"
                style={{ transform: `scaleX(${(step + 1) / total})`, width: "100%" }}
              />
            </div>
          </div>

          <h3
            className="text-2xl lg:text-3xl font-black text-[#1a0810] mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            {question.question}
          </h3>

          <div className="flex flex-col gap-3">
            {question.answers.map((label, i) => (
              <button
                key={i}
                type="button"
                onClick={() => answer(i)}
                className={`group flex items-center justify-between gap-4 text-left px-5 py-4 rounded-xl border-2 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200 ${
                  answers[step] === i
                    ? "border-[#470020] bg-[#470020]/5 text-[#1a0810]"
                    : "border-[#e0d5d0] bg-[#f9f6f4] text-[#1a0810] hover:border-[#470020]/40 hover:bg-white"
                }`}
              >
                <span className="font-semibold leading-snug">{label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-[#470020] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Result ───────────────────────────────────────────────────
  const result = scoreRoute(answers);
  const route: RouteId = result.route;
  const entry = inv.entries[ROUTE_ENTRY_INDEX[route]];
  const caveats = inv.quizCaveats as Record<RouteId, string>;

  return (
    <div className="p-6 sm:p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl" aria-live="polite">
      <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
        {inv.quizResultLabel}
      </p>
      <h3
        className="text-3xl lg:text-4xl font-black text-[#1a0810] mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        {entry.title}
      </h3>
      <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-6">
        {fillTemplate(entry.desc, ENTRY_VALUES)}
      </p>

      {result.defaulted && (
        <p className="text-[#6b4a56] leading-relaxed max-w-3xl mb-6">{inv.quizDefaultedNote}</p>
      )}

      <div className="p-6 rounded-xl bg-[#f9f6f4] border border-[#e0d5d0] mb-8">
        <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-2">
          {inv.entryStepLabel}
        </p>
        <p className="text-[#1a0810] leading-relaxed">{entry.step}</p>
      </div>

      {/* An honest counterpoint — a picker that only ever flatters is not
          believable. */}
      <div className="p-6 rounded-xl bg-[#f9f6f4] border border-[#e0d5d0] mb-10">
        <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-2">
          {inv.quizCaveatLabel}
        </p>
        <p className="text-[#1a0810] leading-relaxed">{caveats[route]}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/plan-een-afspraak"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#470020] text-white font-black text-base rounded hover:bg-[#5c0029] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
        >
          {inv.quizDiscuss}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button
          type="button"
          onClick={restart}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#e0d5d0] text-[#1a0810] font-bold text-base rounded hover:border-[#470020]/40 hover:bg-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
        >
          {inv.quizRestart}
        </button>
      </div>
    </div>
  );
}
