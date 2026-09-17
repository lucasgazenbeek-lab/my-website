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
 * lists the parts that would then sit with us.
 *
 * Those parts come from `lib/technical-support-scope.ts`, the same dataset
 * the division of roles renders, so the two can never drift apart.
 *
 * Deliberately stateless beyond React: nothing is written to localStorage and
 * nothing is sent anywhere. The visitor only leaves the page when they click
 * through to the appointment form themselves.
 *
 * Visually this is the dark card variant from the design system: the section
 * around it is white, so the card has to carry the contrast itself. The
 * answer buttons stay light, so what you can click reads as clickable.
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

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "linear-gradient(145deg, #3a0018 0%, #470020 55%, #2d0015 100%)",
        boxShadow: "0 8px 40px rgba(71,0,32,0.35), 0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glow from below */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(160,30,80,0.4) 0%, transparent 70%)" }}
      />
      {/* Grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" aria-hidden>
        <filter id="intake-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#intake-grain)" />
      </svg>
      {/* Light line along the top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />

      <div className="relative p-6 sm:p-10 lg:p-12">
        {!finished ? (
          <div aria-live="polite">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 mb-3">
                <p
                  className="text-xs font-black tracking-widest text-white/55 uppercase"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {fillTemplate(ts.intakeProgress, { current: step + 1, total })}
                </p>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/60 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {ts.intakeBack}
                  </button>
                )}
              </div>
              <div className="h-1 w-full bg-white/15 rounded overflow-hidden">
                <div
                  className="h-full bg-white motion-safe:transition-transform motion-safe:duration-300 origin-left"
                  style={{ transform: `scaleX(${(step + 1) / total})`, width: "100%" }}
                />
              </div>
            </div>

            <h3
              className="text-2xl lg:text-3xl font-black text-white mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              {questions[step].question}
            </h3>

            <div className="flex flex-col gap-3">
              {questions[step].answers.map((label, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => answer(i)}
                  className={`group flex items-center justify-between gap-4 text-left px-5 py-4 rounded-xl border-2 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 transition-[background-color,border-color,transform] duration-200 ${
                    answers[step] === i
                      ? "bg-white border-white text-[#1a0810]"
                      : "bg-white/95 border-transparent text-[#1a0810] hover:bg-white hover:border-white"
                  }`}
                >
                  <span className="font-semibold leading-snug">{label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="shrink-0 text-[#470020] opacity-40 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:group-hover:translate-x-1 transition-[opacity,transform] duration-200"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <Result ts={ts} answers={answers} restart={restart} />
        )}
      </div>
    </div>
  );
}

function Result({
  ts,
  answers,
  restart,
}: {
  ts: ReturnType<typeof useLang>["t"]["technicalSupport"];
  answers: number[];
  restart: () => void;
}) {
  const result = scoreIntake(answers);
  const outcome: OutcomeId = result.outcome;
  const form = ts.forms.find((f) => f.id === outcome) ?? ts.forms[0];
  const caveats = ts.intakeCaveats as Record<OutcomeId, string>;
  const itemCopy = ts.rolItems as Record<string, { label: string; note: string }>;
  const packages = itemsForOutcome(outcome);

  return (
    <div aria-live="polite">
      <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
        {ts.intakeResultLabel}
      </p>
      <h3
        className="text-3xl lg:text-4xl font-black text-white mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        {form.title}
      </h3>
      <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-6">{form.body}</p>

      {result.defaulted && (
        <p className="text-white/70 leading-relaxed max-w-3xl mb-6">{ts.intakeDefaultedNote}</p>
      )}

      {/* Honest counterpoint — a picker that always lands on the biggest
          package is not believable. */}
      <div className="p-6 rounded-xl bg-white/10 border border-white/20 mb-10">
        <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-2">
          {ts.intakeCaveatLabel}
        </p>
        <p className="text-white/85 leading-relaxed">{caveats[outcome]}</p>
      </div>

      <p className="text-xs font-black tracking-widest text-white/55 uppercase mb-4">
        {ts.intakePackagesLabel}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-3">
        {packages.map((item) => (
          <li key={item.id} className="flex items-start gap-3 text-sm text-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden>
              <path d="M2.5 7l3 3L11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {itemCopy[item.id].label}
          </li>
        ))}
      </ul>
      <p className="text-xs text-white/55 leading-relaxed mb-10">{ts.intakePackagesNote}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/plan-een-afspraak?onderwerp=technical-support"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
        >
          {ts.intakeDiscuss}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button
          type="button"
          onClick={restart}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
        >
          {ts.intakeRestart}
        </button>
      </div>
    </div>
  );
}
