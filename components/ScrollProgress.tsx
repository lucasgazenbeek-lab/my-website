"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "section-hero", label: "Top" },
  { id: "section-partners", label: "Partners" },
  { id: "section-services", label: "Services" },
  { id: "section-stats", label: "Cijfers" },
  { id: "section-why", label: "Waarom" },
];

const LINE_HEIGHT = 260;

export default function ScrollProgress() {
  const [fillPct, setFillPct] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setFillPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = SECTIONS.map((s, i) => {
      const el = document.getElementById(s.id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { threshold: 0.25, rootMargin: "0px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="fixed left-7 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center">
      <div className="relative flex flex-col items-center" style={{ height: LINE_HEIGHT }}>
        {/* Track */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px rounded-full"
          style={{ height: LINE_HEIGHT, background: "rgba(71,0,32,0.15)" }}
        />
        {/* Fill */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px rounded-full"
          style={{
            height: `${fillPct}%`,
            background: "#470020",
            transition: "height 80ms linear",
          }}
        />
        {/* Dots */}
        {SECTIONS.map((s, i) => {
          const top = (i / (SECTIONS.length - 1)) * LINE_HEIGHT;
          const isActive = i === activeIdx;
          return (
            <button
              key={s.id}
              onClick={() =>
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ top }}
              aria-label={`Ga naar ${s.label}`}
            >
              {/* Dot */}
              <div
                style={{
                  width: isActive ? 10 : 7,
                  height: isActive ? 10 : 7,
                  borderRadius: "50%",
                  background: isActive ? "#470020" : "#fff",
                  border: isActive ? "2px solid #470020" : "2px solid rgba(71,0,32,0.3)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? "0 0 0 3px rgba(71,0,32,0.12)" : "none",
                }}
              />
              {/* Label on hover */}
              <span
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-black tracking-widest uppercase whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#470020", letterSpacing: "0.08em" }}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
