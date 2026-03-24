"use client";

import { useState } from "react";

interface Step {
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: Step[];
  processTitle: string;
}

// Detailed hover descriptions — written per step
const STEP_DETAILS_NL = [
  "Bij het intake gesprek maken we kennis en kijken we of we iets voor elkaar kunnen betekenen. We bespreken het projecttype, welke dienst of advies er nodig is, en wat uw verwachtingen zijn. Geen verplichtingen — gewoon een open en eerlijk gesprek over de mogelijkheden.",
  "We brengen uw bestaande projecten, schaal en technische behoeften in kaart. Samen bepalen we de juiste rolverdeling en kijken we welk samenwerkingsmodel het beste aansluit bij uw organisatie, capaciteit en het specifieke projecttype.",
  "Op basis van uw projectvereisten werken we de systeemarchitectuur, BESS-configuratie en projectstructuur volledig uit. Technische keuzes worden onderbouwd, risico's in kaart gebracht en alle partijen zijn op één lijn voordat we verder gaan.",
  "We stellen een transparante prijsstructuur en leveringsplanning op die naadloos aansluit bij de EPC-fasering. De samenwerkingsovereenkomst wordt opgesteld — helder over rollen, verantwoordelijkheden, marges en verwachtingen van beide kanten.",
  "Rollen en verantwoordelijkheden zijn officieel vastgelegd. Uw project wordt geregistreerd in ons projectsysteem, non-circumvention is geborgd en de samenwerking start formeel. Samen bouwen we aan uw eerste opdracht.",
];

export default function ProcessSteps({ steps, processTitle }: ProcessStepsProps) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const changeStep = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 140);
  };

  return (
    <div className="mt-20 pt-16 border-t border-[#e0d5d0]">
      {/* Sub-header */}
      <p className="text-xs font-black tracking-widest text-[#470020] uppercase mb-3" style={{ letterSpacing: "0.1em" }}>
        Onboarding
      </p>
      <h3
        className="text-3xl lg:text-4xl font-black text-[#1a0810] mb-14"
        style={{ letterSpacing: "-0.025em" }}
      >
        {processTitle}
      </h3>

      {/* Steps row */}
      <div className="relative">
        {/* Background track line — desktop only */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "28px",
            left: "calc(10% + 28px)",
            right: "calc(10% + 28px)",
            height: "1px",
            background: "#e0d5d0",
          }}
        />
        {/* Filled track — animates with active step */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "28px",
            left: "calc(10% + 28px)",
            height: "1px",
            background: "#470020",
            width: `calc(${(active / (steps.length - 1)) * 100}% - ${(active / (steps.length - 1)) * 56}px)`,
            transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 relative" style={{ zIndex: 2 }}>
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onMouseEnter={() => changeStep(i)}
                onClick={() => changeStep(i)}
                className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#470020]/40 rounded-xl"
              >
                {/* Number box */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    background: isActive ? "#470020" : "#ffffff",
                    border: isActive ? "2px solid #470020" : "2px solid #e0d5d0",
                    boxShadow: isActive
                      ? "0 6px 24px rgba(71,0,32,0.28)"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      color: isActive ? "#ffffff" : "#470020",
                      fontFamily: "inherit",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Arrow — between steps, desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute hidden lg:block text-[#c7b3ac] pointer-events-none select-none"
                    style={{
                      top: "16px",
                      left: `calc(${((i + 1) / steps.length) * 100}% - 6px)`,
                      fontSize: "13px",
                    }}
                  >
                    →
                  </div>
                )}

                {/* Step title */}
                <h4
                  className="font-black text-sm leading-snug mb-1.5 transition-colors duration-200"
                  style={{ color: isActive ? "#470020" : "#1a0810" }}
                >
                  {step.title}
                </h4>
                {/* Short desc */}
                <p className="text-xs text-[#6b4a56] leading-relaxed">
                  {step.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel — fades when step changes */}
      <div
        className="mt-8 rounded-2xl border border-[#e0d5d0] overflow-hidden"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.14s ease",
        }}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Left accent */}
          <div
            className="flex-shrink-0 flex items-center justify-center sm:w-24 py-6 sm:py-0"
            style={{ background: "#470020" }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: "28px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "-0.02em",
                fontFamily: "inherit",
              }}
            >
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Content */}
          <div className="flex-1 p-8">
            <h4
              className="font-black text-[#1a0810] text-xl mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              {steps[active].title}
            </h4>
            <p className="text-[#6b4a56] leading-relaxed text-base">
              {STEP_DETAILS_NL[active]}
            </p>
          </div>
        </div>
      </div>

      {/* Step dots — mobile navigation */}
      <div className="flex items-center justify-center gap-2 mt-6 lg:hidden">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => changeStep(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? "24px" : "8px",
              height: "8px",
              background: active === i ? "#470020" : "#e0d5d0",
            }}
            aria-label={`Stap ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
