"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import {
  buildSceneInner,
  countTo,
  sceneClass,
  SCENE_BASE_CSS,
  SCENE_CSS,
  VARIANT_LOADERS,
  VARIANTEN,
  VIEWBOX,
  VOLGORDE,
  type VariantBundle,
  type VariantKey,
} from "@/components/bouwsequentie/core";

/**
 * The scrolling build sequence (REDESIGN.md §7): a light situational
 * drawing in a glass frame on the dark page. Scrolling through the phase
 * copy drives the drawing via the generated visibility CSS; the readout
 * counts along. Ported from scripts/bouwsequentie/referentie.html.
 */
export default function BouwSequentie() {
  const { t } = useLang();
  const c = t.bouwseq;

  const [variant, setVariant] = useState<VariantKey>("ms");
  const [bundles, setBundles] = useState<Partial<Record<VariantKey, VariantBundle>>>({});
  const [phase, setPhase] = useState(1);

  const wrapRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const readout = {
    s1: useRef<HTMLSpanElement>(null),
    u1: useRef<HTMLElement>(null),
    s2: useRef<HTMLSpanElement>(null),
    u2: useRef<HTMLElement>(null),
    s3: useRef<HTMLSpanElement>(null),
    u3: useRef<HTMLElement>(null),
    s4: useRef<HTMLElement>(null),
    s4wrap: useRef<HTMLDivElement>(null),
  };
  const rafRef = useRef<Record<string, number>>({});
  const reduceRef = useRef(false);

  const bundle = bundles[variant];
  const meta = VARIANTEN[variant];

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Load the active variant's bundle on demand (never all three at once).
  useEffect(() => {
    if (bundles[variant]) return;
    let alive = true;
    VARIANT_LOADERS[variant]().then((b) => {
      if (alive) setBundles((prev) => ({ ...prev, [variant]: b }));
    });
    return () => {
      alive = false;
    };
  }, [variant, bundles]);

  const sceneInner = useMemo(() => buildSceneInner(bundles), [bundles]);

  // Drive the readout counters whenever the phase or variant changes.
  useEffect(() => {
    const d = bundle?.data[String(phase)];
    if (!d) return;
    const r = rafRef.current;
    const reduce = reduceRef.current;
    if (readout.s1.current) r.s1 = countTo(readout.s1.current, Number(d[0]), reduce, r.s1);
    if (readout.u1.current) readout.u1.current.textContent = String(d[1]);
    if (readout.s2.current) r.s2 = countTo(readout.s2.current, Number(d[2]), reduce, r.s2);
    if (readout.u2.current) readout.u2.current.textContent = String(d[3]);
    if (readout.s3.current) r.s3 = countTo(readout.s3.current, Number(d[4]), reduce, r.s3);
    if (readout.u3.current) readout.u3.current.textContent = String(d[5]);
    if (readout.s4.current) readout.s4.current.textContent = String(d[6]);
    readout.s4wrap.current?.classList.toggle("is-live", Boolean(d[7]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, bundle]);

  // Phase driver: IntersectionObserver over the phase sections, with the
  // reference's rootMargin so the section in the middle band wins.
  useEffect(() => {
    if (!bundle || !phasesRef.current) return;
    const secs = Array.from(phasesRef.current.querySelectorAll<HTMLElement>(".phase"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setPhase(Number((e.target as HTMLElement).dataset.phase));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [bundle, variant]);

  const pick = useCallback(
    (k: VariantKey) => {
      if (k === variant) return;
      setVariant(k);
      setPhase(1);
      const top = (wrapRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 60;
      window.scrollTo({ top: Math.max(0, top), behavior: reduceRef.current ? "auto" : "smooth" });
    },
    [variant]
  );

  const goTo = useCallback((n: number) => {
    const target = phasesRef.current?.querySelector(`.phase[data-phase="${n}"]`);
    target?.scrollIntoView({ block: "center", behavior: reduceRef.current ? "auto" : "smooth" });
  }, []);

  // Tooltips on the .hit areas, delegated on the frame.
  const onTipOver = useCallback((e: React.MouseEvent) => {
    const hit = (e.target as Element).closest<SVGElement>(".hit");
    const tip = tipRef.current;
    if (!tip) return;
    if (!hit) {
      tip.classList.remove("on");
      return;
    }
    const b = tip.querySelector("b");
    const s = tip.querySelector("span");
    if (b) b.textContent = hit.dataset.t ?? "";
    if (s) s.textContent = hit.dataset.b ?? "";
    tip.classList.add("on");
  }, []);

  const onTipMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const tip = tipRef.current;
    if (!tip?.classList.contains("on")) return;
    const r = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - r.left + 16;
    let y = e.clientY - r.top + 14;
    if (x + 262 > r.width) x = e.clientX - r.left - 262;
    if (y + 130 > r.height) y = r.height - 136;
    tip.style.left = `${Math.max(6, x)}px`;
    tip.style.top = `${Math.max(6, y)}px`;
  }, []);

  const phaseNumbers = bundle ? Object.keys(bundle.fasen).map(Number).sort((a, b) => a - b) : [];

  // Phase titles for the rail (extracted from the phase copy's h2).
  const phaseTitles = useMemo(() => {
    const out: Record<number, string> = {};
    if (!bundle) return out;
    for (const [n, html] of Object.entries(bundle.fasen)) {
      const m = html.match(/<h2>([\s\S]*?)<\/h2>/);
      if (m) out[Number(n)] = m[1].replace(/<[^>]+>/g, "").trim();
    }
    return out;
  }, [bundle]);

  return (
    <div ref={wrapRef} className="bseq" data-variant={variant}>
      <style dangerouslySetInnerHTML={{ __html: SCENE_CSS + SCENE_BASE_CSS + COMPONENT_CSS }} />

      {/* Variant picker + generated spec strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vpick" role="group" aria-label={c.pickerLabel}>
          {VOLGORDE.map((k) => (
            <button key={k} type="button" aria-pressed={k === variant} onClick={() => pick(k)}>
              <b>{VARIANTEN[k].naam}</b>
              <span>{VARIANTEN[k].sub}</span>
            </button>
          ))}
        </div>
        <dl className="spec-strip" dangerouslySetInnerHTML={{ __html: meta.specs }} />
        <p className="disclaimer">{c.disclaimer}</p>
      </div>

      {/* Numbered phase rail with a gold progress line and the title of
          the active phase */}
      <nav className="rail" aria-label={c.navLabel}>
        <div className="rail-inner">
          {phaseNumbers.map((n) => (
            <button
              key={n}
              type="button"
              aria-current={n === phase}
              title={phaseTitles[n]}
              aria-label={`${c.faseLabel} ${n}: ${phaseTitles[n] ?? ""}`}
              onClick={() => goTo(n)}
            >
              <span className="num">{String(n).padStart(2, "0")}</span>
            </button>
          ))}
          <span className="rail-title" aria-hidden>
            {phaseTitles[phase]}
          </span>
        </div>
        <div
          aria-hidden
          className="rail-progress"
          style={{ transform: `scaleX(${phase / meta.laatsteFase})` }}
        />
      </nav>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="stage">
          <div className="viz">
            <div className="frame" onMouseOver={onTipOver} onMouseMove={onTipMove}>
              <div className="frame-head">
                <span>{meta.kader}</span>
                <span className="tag">
                  {c.faseLabel} {phase} / {meta.laatsteFase}
                </span>
              </div>
              <div className="canvas">
                <svg
                  id="scene"
                  className={sceneClass(phase)}
                  viewBox={VIEWBOX}
                  role="img"
                  aria-labelledby="stt"
                  dangerouslySetInnerHTML={{ __html: sceneInner }}
                />
                {/* Click through the phases without scrolling */}
                <div className="frame-nav">
                  <button
                    type="button"
                    aria-label={c.prev}
                    disabled={phase <= 1}
                    onClick={() => goTo(Math.max(1, phase - 1))}
                  >
                    <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12 7H2M6.5 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label={c.next}
                    disabled={phase >= meta.laatsteFase}
                    onClick={() => goTo(Math.min(meta.laatsteFase, phase + 1))}
                  >
                    <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="tip" ref={tipRef}>
                <b />
                <span />
              </div>
              <dl className="readout">
                <div className="stat">
                  <dt>{c.readoutPower}</dt>
                  <dd>
                    <span ref={readout.s1}>0</span>
                    <small ref={readout.u1}>MW</small>
                  </dd>
                </div>
                <div className="stat">
                  <dt>{c.readoutStorage}</dt>
                  <dd>
                    <span ref={readout.s2}>0</span>
                    <small ref={readout.u2}>MWh</small>
                  </dd>
                </div>
                <div className="stat">
                  <dt>{c.readoutUnits}</dt>
                  <dd>
                    <span ref={readout.s3}>0</span>
                    <small ref={readout.u3} />
                  </dd>
                </div>
                <div className="stat" ref={readout.s4wrap}>
                  <dt>{c.readoutStatus}</dt>
                  <dd>
                    <small ref={readout.s4} />
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="phases" ref={phasesRef}>
            {bundle ? (
              phaseNumbers.map((n) => (
                <section
                  key={`${variant}-${n}`}
                  className={`phase${n === phase ? " is-active" : ""}`}
                  data-phase={n}
                  dangerouslySetInnerHTML={{ __html: bundle.fasen[String(n)] }}
                />
              ))
            ) : (
              <p className="loading">{c.loading}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout and typography for the sequence, adapted from the reference to
// the dark register: the drawing stays light ("a situational drawing
// belongs on paper") inside a glass frame; all copy sits on the dark
// ground. Uses the brand tokens from globals.css.
const COMPONENT_CSS = `
.bseq{--paper:#FDFBFA;--sunken:#EFE6E2;--pline:#DCCEC9;--pink:#2E0016;--pink-soft:#6B4A56;--pink-faint:#9A7F89}
.bseq .vpick{display:flex;flex-wrap:wrap;width:fit-content;max-width:100%;border:1px solid rgba(255,255,255,.12);border-radius:14px;overflow:hidden;background:rgba(255,255,255,.04);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 2px 8px rgba(20,0,10,.4)}
.bseq .vpick button{appearance:none;background:none;border:0;border-right:1px solid rgba(255,255,255,.12);cursor:pointer;padding:12px 20px 13px;text-align:left;color:#C7B3AC;transition:background-color .2s,color .2s,transform .15s}
.bseq .vpick button:last-child{border-right:0}
.bseq .vpick button:hover{background:rgba(255,255,255,.06);color:#F7F3F1}
.bseq .vpick button:focus-visible{outline:2px solid #D9A441;outline-offset:-3px}
.bseq .vpick button:active{transform:scale(.985)}
.bseq .vpick button[aria-pressed="true"]{background:#D9A441;color:#2E0016}
.bseq .vpick b{display:block;font-family:var(--font-display);font-weight:600;font-size:19px;line-height:1.05;text-transform:uppercase;letter-spacing:.015em}
.bseq .vpick span{display:block;font-size:11.5px;margin-top:2px;opacity:.85}
.bseq .spec-strip{display:flex;flex-wrap:wrap;margin:26px 0 0;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}
.bseq .spec{flex:1 1 150px;padding:13px 18px 15px;border-right:1px solid rgba(255,255,255,.12)}
.bseq .spec:last-child{border-right:0}
.bseq .spec dt{font-family:var(--font-label);font-size:9.5px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:#9A7F89;margin:0 0 4px}
.bseq .spec dd{margin:0;font-family:var(--font-display);font-weight:600;font-size:26px;line-height:1;color:#F7F3F1;font-variant-numeric:tabular-nums}
.bseq .spec dd small{font-size:12.5px;font-weight:500;color:#C7B3AC;font-family:var(--font-body)}
.bseq .disclaimer{margin:22px 0 0;border-left:2px solid #D9A441;padding:5px 0 5px 13px;font-size:13.5px;color:#C7B3AC;max-width:66ch}
.bseq .rail{position:sticky;top:72px;z-index:30;margin-top:34px;background:rgba(30,4,17,.88);backdrop-filter:blur(10px);border-block:1px solid rgba(255,255,255,.1)}
.bseq .rail-progress{position:absolute;left:0;bottom:-1px;height:2px;width:100%;background:#D9A441;transform-origin:left;transition:transform .4s cubic-bezier(0.16,1,0.3,1)}
.bseq .rail-inner{max-width:1280px;margin:0 auto;padding:0 20px;display:flex;overflow-x:auto;scrollbar-width:thin}
.bseq .rail button{flex:0 0 auto;appearance:none;background:none;border:0;cursor:pointer;font-family:var(--font-label);font-size:11px;font-weight:600;letter-spacing:.09em;color:#9A7F89;padding:13px 12px 11px;border-bottom:2px solid transparent;transition:color .2s,border-color .2s}
.bseq .rail button:hover{color:#F7F3F1}
.bseq .rail button[aria-current="true"]{color:#F7F3F1;border-bottom-color:#D9A441}
.bseq .rail button:focus-visible{outline:2px solid #D9A441;outline-offset:-3px}
.bseq .rail .num{font-variant-numeric:tabular-nums}
.bseq .rail-title{display:none;margin-left:auto;align-self:center;padding:0 6px 0 16px;font-family:var(--font-label);font-size:10px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:#C7B3AC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@media (min-width:940px){.bseq .rail-title{display:block;max-width:34ch}}
.bseq .canvas{position:relative}
.bseq .frame-nav{position:absolute;right:10px;bottom:10px;display:flex;gap:6px}
.bseq .frame-nav button{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;cursor:pointer;background:rgba(46,0,22,.8);color:#F7F3F1;border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(6px);transition:background-color .2s,transform .15s}
.bseq .frame-nav button:hover{background:#470020}
.bseq .frame-nav button:focus-visible{outline:2px solid #D9A441;outline-offset:2px}
.bseq .frame-nav button:active{transform:scale(.94)}
.bseq .frame-nav button:disabled{opacity:.35;pointer-events:none}
.bseq .stage{display:grid;grid-template-columns:1fr}
@media (min-width:940px){.bseq .stage{grid-template-columns:1.2fr .8fr;gap:60px;align-items:start}}
.bseq .viz{position:sticky;top:118px;z-index:20;padding-block:14px 6px}
@media (min-width:940px){.bseq .viz{padding-block:34px}}
.bseq .frame{position:relative;border:1px solid rgba(255,255,255,.14);border-radius:14px;overflow:hidden;background:var(--paper);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 2px 8px rgba(20,0,10,.4),0 14px 36px rgba(20,0,10,.32)}
.bseq .frame-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:9px 13px;border-bottom:1px solid var(--pline);background:var(--sunken);font-family:var(--font-label);font-size:9.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--pink-faint)}
.bseq .frame-head .tag{color:#8A5A0E;font-variant-numeric:tabular-nums}
.bseq .readout{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--pline);margin:0}
@media (min-width:600px){.bseq .readout{grid-template-columns:repeat(4,1fr)}}
.bseq .stat{padding:10px 13px 12px;border-right:1px solid var(--pline);border-top:1px solid var(--pline)}
.bseq .stat:nth-child(2n){border-right:0}
@media (min-width:600px){.bseq .stat{border-top:0}.bseq .stat:nth-child(2n){border-right:1px solid var(--pline)}.bseq .stat:last-child{border-right:0}}
.bseq .stat dt{font-family:var(--font-label);font-size:9px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:var(--pink-faint);margin:0 0 3px}
.bseq .stat dd{margin:0;display:flex;align-items:baseline;gap:5px;font-family:var(--font-display);font-weight:600;font-size:21px;line-height:1.05;color:var(--pink);font-variant-numeric:tabular-nums}
.bseq .stat dd small{font-size:11.5px;font-weight:500;color:var(--pink-soft);font-family:var(--font-body)}
.bseq .stat.is-live dd{color:#8A5A0E}
.bseq .tip{position:absolute;z-index:8;max-width:250px;background:var(--paper);border:1px solid var(--pline);box-shadow:0 1px 2px rgba(46,0,22,.06),0 10px 28px rgba(46,0,22,.2);padding:9px 12px 11px;pointer-events:none;opacity:0;transition:opacity .16s ease}
.bseq .tip.on{opacity:1}
.bseq .tip b{display:block;font-family:var(--font-display);font-weight:600;font-size:17px;line-height:1.1;color:#470020}
.bseq .tip span{display:block;margin-top:5px;font-size:11.5px;line-height:1.45;color:var(--pink-soft)}
@media (max-width:760px){.bseq .tip{display:none}}
.bseq .phases{padding-block:6px 0}
@media (min-width:940px){.bseq .phases{padding-block:34px 0}}
.bseq .phase{padding-block:32px;border-top:1px solid rgba(255,255,255,.1);opacity:.45;transition:opacity .35s ease}
.bseq .phase:first-child{border-top:0}
.bseq .phase.is-active{opacity:1}
@media (min-width:940px){.bseq .phase{min-height:56vh;display:flex;flex-direction:column;justify-content:center}}
.bseq .phase-meta{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.bseq .phase-num{font-family:var(--font-display);font-weight:700;font-size:30px;line-height:1;color:#D9A441;font-variant-numeric:tabular-nums}
.bseq .phase-dur{font-family:var(--font-label);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9A7F89}
.bseq .phase h2{font-family:var(--font-display);font-weight:600;font-size:clamp(27px,3.3vw,37px);line-height:1.05;margin:8px 0 0;color:#F7F3F1;text-transform:uppercase;letter-spacing:.015em;text-wrap:balance}
.bseq .phase p{margin:13px 0 0;max-width:56ch;color:#C7B3AC;font-family:var(--font-body);font-size:15px;line-height:1.62}
.bseq .role{margin:18px 0 0;padding-top:14px;border-top:1px dashed rgba(255,255,255,.22);display:grid;grid-template-columns:auto 1fr;gap:5px 16px;max-width:56ch}
.bseq .role dt{font-family:var(--font-label);font-size:9px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#D9A441;padding-top:4px}
.bseq .role dd{margin:0;font-size:14px;color:#F7F3F1;font-family:var(--font-body);line-height:1.55}
.bseq .loading{padding-block:60px;color:#C7B3AC;font-family:var(--font-body)}
`;
