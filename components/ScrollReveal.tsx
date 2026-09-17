"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const translateMap = {
    up: "translateY(24px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
  };

  // The starting offset travels as a custom property, never as an inline
  // `transform`: an inline transform outranks `.reveal.visible`, which left
  // every left/right reveal stranded 20px off its column for good.
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-offset": translateMap[direction] } as CSSProperties}
    >
      {children}
    </div>
  );
}
