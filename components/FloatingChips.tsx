"use client";

import { useEffect, useRef } from "react";

const CHIPS = [
  {
    value: "20 MW+",
    label: "BESS Ondersteund",
    depth: 32,
    bobDur: 7,
    bobDel: 0,
    style: { right: "13%", top: "18%" },
  },
  {
    value: "30 MW+",
    label: "In Ontwikkeling",
    depth: 48,
    bobDur: 9,
    bobDel: 1.4,
    style: { right: "4%", top: "40%" },
  },
  {
    value: "Turnkey EPC",
    label: "Van concept tot oplevering",
    depth: 22,
    bobDur: 8,
    bobDel: 0.7,
    style: { right: "16%", top: "62%" },
  },
  {
    value: "5+",
    label: "Fabrikantrelaties",
    depth: 40,
    bobDur: 7.5,
    bobDel: 2,
    style: { right: "5%", top: "76%" },
  },
];

export default function FloatingChips() {
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId: number;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;
      CHIPS.forEach((chip, i) => {
        const el = parallaxRefs.current[i];
        if (!el) return;
        el.style.transform = `translate(${cx * chip.depth}px, ${cy * chip.depth * 0.55}px)`;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {CHIPS.map((chip, i) => (
        <div
          key={i}
          className="absolute"
          style={chip.style}
        >
          {/* Parallax wrapper — updated by JS */}
          <div
            ref={(el) => { parallaxRefs.current[i] = el; }}
            style={{ willChange: "transform" }}
          >
            {/* Bob animation wrapper */}
            <div
              style={{
                animation: `chipBob ${chip.bobDur}s ${chip.bobDel}s ease-in-out infinite`,
              }}
            >
              {/* Chip card */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(28px) saturate(180%)",
                  WebkitBackdropFilter: "blur(28px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderTop: "1px solid rgba(255,255,255,0.35)",
                  borderLeft: "1px solid rgba(255,255,255,0.30)",
                  borderRadius: "18px",
                  padding: "20px 28px",
                  boxShadow:
                    "0 16px 48px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(255,255,255,0.06)",
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: 900,
                    fontSize: chip.value.length > 5 ? "20px" : "32px",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    fontFamily: "inherit",
                    textShadow: "0 2px 12px rgba(255,255,255,0.15)",
                  }}
                >
                  {chip.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginTop: "6px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "inherit",
                  }}
                >
                  {chip.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
