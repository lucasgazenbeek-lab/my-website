/**
 * Shared core for the build-sequence drawing (/hoe-wij-bouwen and the
 * homepage teaser). The SVG layer composition below is a literal port of
 * scene_svg() and DEFS in scripts/bouwsequentie/page.py — the visibility
 * CSS in lib/bouwsequentie/index.json is generated against exactly this
 * structure, so do not reorder or rename groups.
 */
import bouwIndex from "@/lib/bouwsequentie/index.json";

export type VariantKey = "ms" | "hs" | "co";

export interface VariantBundle {
  /** SVG fragments per layer name. */
  lagen: Record<string, string>;
  /** Phase copy as HTML, keyed by phase number ("1".."12"). */
  fasen: Record<string, string>;
  /** Readout values per phase: [v1, unit1, v2, unit2, v3, unit3, status, live]. */
  data: Record<string, Array<string | number>>;
}

export interface VariantMeta {
  naam: string;
  sub: string;
  kader: string;
  laatsteFase: number;
  /** Spec-strip HTML (generated). */
  specs: string;
}

export const VIEWBOX: string = bouwIndex.viewBox;
export const SCENE_CSS: string = bouwIndex.css;
export const VOLGORDE = bouwIndex.volgorde as VariantKey[];
export const VARIANTEN = bouwIndex.varianten as unknown as Record<VariantKey, VariantMeta>;

/** Load a variant bundle on demand — never import all three eagerly. */
export const VARIANT_LOADERS: Record<VariantKey, () => Promise<VariantBundle>> = {
  ms: () => import("@/lib/bouwsequentie/ms.json").then((m) => m.default as unknown as VariantBundle),
  hs: () => import("@/lib/bouwsequentie/hs.json").then((m) => m.default as unknown as VariantBundle),
  co: () => import("@/lib/bouwsequentie/co.json").then((m) => m.default as unknown as VariantBundle),
};

/** Literal copy of DEFS in scripts/bouwsequentie/page.py. */
export const DEFS = `<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EFE9E4"/><stop offset="1" stop-color="#DCD2CB"/></linearGradient>
  <radialGradient id="vig" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#2E0016" stop-opacity=".10"/></radialGradient>
  <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.0"/></filter>
  <linearGradient id="gTop" x1="0" y1="0" x2=".65" y2="1"><stop offset="0" stop-color="#F5F2EF"/><stop offset="1" stop-color="#DFD8D2"/></linearGradient>
  <pattern id="grit" width="7" height="7" patternUnits="userSpaceOnUse">
    <circle cx="1.5" cy="1.8" r=".55" fill="#8F8478" opacity=".22"/><circle cx="4.9" cy="4.2" r=".45" fill="#8F8478" opacity=".18"/>
    <circle cx="2.8" cy="5.6" r=".35" fill="#6E655C" opacity=".14"/><circle cx="6.1" cy="1.2" r=".4" fill="#6E655C" opacity=".12"/>
  </pattern>
</defs>`;

/** Literal port of scene_svg() in page.py: one <g class="sc sc-K"> per variant. */
export function sceneGroup(k: VariantKey, L: Record<string, string>): string {
  const g = (key: string, cls: string, extra = "") =>
    L[key] ? `<g class="lay l-${cls}"${extra}>${L[key]}</g>` : "";
  return (
    `<g class="sc sc-${k}" data-v="${k}">` +
    `<g class="l-ground">${L.ground}</g>` +
    g("ext", "ext") +
    g("civil", "civil") +
    g("extra", "extra") +
    `<g class="lay l-cont" filter="url(#soft)">${L.shadows}</g>` +
    g("cable", "cable") +
    g("cont", "cont") +
    g("stat", "stat") +
    g("plan", "plan") +
    g("plotmark", "plotmark") +
    g("dims", "dims") +
    g("air", "air") +
    `<g class="lay l-cont">${L.labels ?? ""}${L.labels2 ?? ""}</g>` +
    `<g class="hits">${L.hits ?? ""}</g></g>`
  );
}

/** Inner HTML of the <svg id="scene"> element for the loaded variants. */
export function buildSceneInner(bundles: Partial<Record<VariantKey, VariantBundle>>): string {
  const [, , w, h] = VIEWBOX.split(" ");
  return (
    `<title id="stt">Isometrische weergave van een batterijpark dat stap voor stap wordt gebouwd</title>` +
    DEFS +
    `<rect x="0" y="0" width="${w}" height="${h}" fill="url(#sky)"/>` +
    VOLGORDE.filter((k) => bundles[k]).map((k) => sceneGroup(k, bundles[k]!.lagen)).join("") +
    `<rect x="0" y="0" width="${w}" height="${h}" fill="url(#vig)" pointer-events="none"/>`
  );
}

/** Scene class list for phase N, exactly as the reference driver sets it. */
export function sceneClass(phase: number): string {
  const cls = ["scene", `at-${phase}`];
  for (let i = 1; i <= phase; i++) cls.push(`up-to-${i}`);
  return cls.join(" ");
}

/**
 * Count a readout number toward `to` with the reference easing (650 ms,
 * cubic ease-out, comma as decimal separator). Returns the rAF handle.
 */
export function countTo(node: HTMLElement, to: number, reduce: boolean, prev?: number): number {
  const from = parseFloat(node.textContent?.replace(",", ".") ?? "") || 0;
  if (prev !== undefined) cancelAnimationFrame(prev);
  if (from === to) {
    node.textContent = String(to).replace(".", ",");
    return 0;
  }
  const t0 = performance.now();
  const dur = reduce ? 0 : 650;
  const dec = to % 1 !== 0 || from % 1 !== 0;
  let handle = 0;
  const step = (now: number) => {
    const t = dur ? Math.min(1, (now - t0) / dur) : 1;
    const e = 1 - Math.pow(1 - t, 3);
    const v = from + (to - from) * e;
    node.textContent = (dec ? v.toFixed(1) : String(Math.round(v))).replace(".", ",");
    if (t < 1) handle = requestAnimationFrame(step);
  };
  step(t0);
  return handle;
}

/** Base scene CSS from the reference that is not part of the generated
 * visibility CSS: layer transitions, dim level, in-drawing typography,
 * wire styling with the powered-up flow animation, and hit areas.
 * (Copied from referentie.html lines 198–223; fonts point at the
 * next/font variables.) */
export const SCENE_BASE_CSS = `
.lay{opacity:0;transition:opacity .55s ease}
#scene{--dim:.55}
svg.scene{display:block;width:100%;height:auto;background:#FDFBFA}
.ct{transition:opacity .5s ease}
.l-cont .ct.b1{transition-delay:.12s}
.l-cont .ct.b2{transition-delay:.24s}
.l-cont .ct.b3{transition-delay:.36s}
.dc{fill:none;stroke:#9C8F88;stroke-width:1.1;stroke-linecap:round;transition:stroke .5s}
.hvc{fill:none;stroke:#6D1632;stroke-width:2.1;stroke-linecap:round;stroke-dasharray:9 4.5;opacity:.85}
.mv{fill:none;stroke:#8B7F78;stroke-width:1.6;stroke-linecap:round;transition:stroke .5s}
.at-12 .dc{stroke:#C8912F}
.at-12 .mv{stroke:#D9A441;stroke-width:2;stroke-dasharray:5 8;animation:bseqflow 1.6s linear infinite}
[data-variant="co"] .at-9 .dc{stroke:#C8912F}
[data-variant="co"] .at-9 .mv{stroke:#D9A441;stroke-width:2;stroke-dasharray:5 8;animation:bseqflow 1.6s linear infinite}
@keyframes bseqflow{to{stroke-dashoffset:-26}}
.t{font-family:var(--font-label),'Montserrat',sans-serif;font-weight:600;letter-spacing:.07em;text-transform:uppercase}
.t-blk{font-size:9px;fill:#5C4A44}
.t-sub{font-size:7.8px;fill:#8A7A73}
.t-key{font-size:9px;fill:#8A5A0E}
.t-lbl{font-size:8px;fill:#8A7A73}
.t-dim{font-size:8px;fill:#6E625B}
.hit{fill:transparent;stroke:none;pointer-events:all;cursor:help}
.hit:hover{stroke:#D9A441;stroke-width:1.6;fill:#D9A441;fill-opacity:.13}
@media (prefers-reduced-motion: reduce){.lay,.ct,.dc,.mv{transition:none}.at-12 .mv,[data-variant="co"] .at-9 .mv{animation:none}}
`;
