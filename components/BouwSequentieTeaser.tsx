"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import {
  buildSceneInner,
  sceneClass,
  SCENE_BASE_CSS,
  SCENE_CSS,
  VARIANT_LOADERS,
  VARIANTEN,
  VIEWBOX,
  type VariantBundle,
} from "@/components/bouwsequentie/core";

/**
 * Homepage teaser of the build sequence: four phases of the standalone
 * MS variant in the same glass-framed light drawing, stepping
 * automatically (paused after interaction, disabled under
 * prefers-reduced-motion). The full page is /hoe-wij-bouwen.
 */
export default function BouwSequentieTeaser() {
  const { t } = useLang();
  const steps = t.home.seqSteps as Array<{ fase: number; label: string }>;

  const [bundle, setBundle] = useState<VariantBundle | null>(null);
  const [step, setStep] = useState(0);
  const touchedRef = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Load ms.json only when the teaser scrolls into view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || bundle) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        VARIANT_LOADERS.ms().then(setBundle);
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [bundle]);

  // Gentle auto-advance until the visitor takes over.
  useEffect(() => {
    if (!bundle) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!touchedRef.current) setStep((s) => (s + 1) % steps.length);
    }, 3500);
    return () => clearInterval(id);
  }, [bundle, steps.length]);

  const sceneInner = useMemo(() => (bundle ? buildSceneInner({ ms: bundle }) : ""), [bundle]);
  const phase = steps[step]?.fase ?? 1;

  return (
    <div ref={wrapRef} className="bseq-teaser" data-variant="ms">
      <style dangerouslySetInnerHTML={{ __html: SCENE_CSS + SCENE_BASE_CSS + TEASER_CSS }} />
      <div className="frame">
        <div className="frame-head">
          <span>{VARIANTEN.ms.kader}</span>
          <span className="tag">{VARIANTEN.ms.sub}</span>
        </div>
        {bundle ? (
          <svg
            id="scene"
            className={sceneClass(phase)}
            viewBox={VIEWBOX}
            role="img"
            aria-labelledby="stt"
            dangerouslySetInnerHTML={{ __html: sceneInner }}
          />
        ) : (
          <div className="placeholder" aria-hidden />
        )}
      </div>
      <div className="steps" role="group">
        {steps.map((s, i) => (
          <button
            key={s.fase}
            type="button"
            aria-pressed={i === step}
            onClick={() => {
              touchedRef.current = true;
              setStep(i);
            }}
          >
            <span className="num">{String(s.fase).padStart(2, "0")}</span>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const TEASER_CSS = `
.bseq-teaser .frame{position:relative;border:1px solid rgba(255,255,255,.14);border-radius:14px;overflow:hidden;background:#FDFBFA;box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 2px 8px rgba(20,0,10,.4),0 14px 36px rgba(20,0,10,.32)}
.bseq-teaser .frame-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:9px 13px;border-bottom:1px solid #DCCEC9;background:#EFE6E2;font-family:var(--font-label);font-size:9.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#9A7F89}
.bseq-teaser .frame-head .tag{color:#8A5A0E}
.bseq-teaser .placeholder{aspect-ratio:900/560;background:linear-gradient(180deg,#EFE9E4,#DCD2CB)}
.bseq-teaser .steps{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.bseq-teaser .steps button{appearance:none;cursor:pointer;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 14px 10px;font-family:var(--font-label);font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#C7B3AC;transition:background-color .2s,color .2s,border-color .2s,transform .15s}
.bseq-teaser .steps button:hover{color:#F7F3F1;border-color:rgba(255,255,255,.3)}
.bseq-teaser .steps button:focus-visible{outline:2px solid #D9A441;outline-offset:2px}
.bseq-teaser .steps button:active{transform:scale(.97)}
.bseq-teaser .steps button[aria-pressed="true"]{background:#D9A441;border-color:#D9A441;color:#2E0016}
.bseq-teaser .steps .num{margin-right:6px;font-variant-numeric:tabular-nums;opacity:.75}
`;
