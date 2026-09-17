"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import {
  fillTemplate,
  itemsForOutcome,
  scoreIntake,
  type OutcomeId,
} from "@/lib/technical-support-scope";

/**
 * Five-question intake that points at one of the three engagement shapes and
 * lists the work packages that would then sit with us.
 *
 * The work packages come from `lib/technical-support-scope.ts`, the same
 * dataset the scope matrix renders, so the two can never drift apart.
 *
 * Deliberately stateless beyond React: nothing is written to localStorage and
 * nothing is sent anywhere. The visitor only leaves the page when they click
 * through to the appointment form themselves.
 */
export default function ScopeIntake() {
  const { t } = useLang();
  const ts = t.technicalSupport;

  const questions = ts.intakeQuestions;
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
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p
                className="text-xs font-black tracking-widest text-[#470020] uppercase"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {fillTemplate(ts.intakeProgress, { current: step + 1, total })}
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
                  {ts.intakeBack}
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
  const result = scoreIntake(answers);
  const outcome: OutcomeId = result.outcome;
  const form = ts.forms.find((f) => f.id === outcome) ?? ts.forms[0];
  const caveats = ts.intakeCaveats as Record<OutcomeId, string>;
  const itemCopy = ts.scopeItems as Record<string, { label: string; note: string }>;
  const packages = itemsForOutcome(outcome);

  return (
    <div className="p-6 sm:p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl" aria-live="polite">
      <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
        {ts.intakeResultLabel}
      </p>
      <h3
        className="text-3xl lg:text-4xl font-black text-[#1a0810] mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        {form.title}
      </h3>
      <p className="text-[#6b4a56] text-lg leading-relaxed max-w-3xl mb-6">{form.body}</p>

      {result.defaulted && (
        <p className="text-[#6b4a56] leading-relaxed max-w-3xl mb-6">{ts.intakeDefaultedNote}</p>
      )}

      {/* Honest counterpoint — a picker that always lands on the biggest
          package is not believable. */}
      <div className="p-6 rounded-xl bg-[#f9f6f4] border border-[#e0d5d0] mb-10">
        <p className="text-xs font-black tracking-widest text-[#6b4a56] uppercase mb-2">
          {ts.intakeCaveatLabel}
        </p>
        <p className="text-[#1a0810] leading-relaxed">{caveats[outcome]}</p>
      </div>

      <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-4">
        {ts.intakePackagesLabel}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-3">
        {packages.map((item) => (
          <li key={item.id} className="flex items-start gap-3 text-sm text-[#1a0810]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden>
              <path d="M2.5 7l3 3L11.5 3.5" stroke="#470020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {itemCopy[item.id].label}
          </li>
        ))}
      </ul>
      <p className="text-xs text-[#6b4a56] leading-relaxed mb-10">{ts.intakePackagesNote}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/plan-een-afspraak?onderwerp=technical-support"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#470020] text-white font-black text-base rounded hover:bg-[#5c0029] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
        >
          {ts.intakeDiscuss}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button
          type="button"
          onClick={restart}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#e0d5d0] text-[#1a0810] font-bold text-base rounded hover:border-[#470020]/40 hover:bg-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#470020] transition-colors duration-200"
        >
          {ts.intakeRestart}
        </button>
      </div>
    </div>
  );
}
