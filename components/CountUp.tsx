"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function CountUp({ end, suffix = "", prefix = "", duration = 2000 }: CountUpProps) {
  // The final value is rendered during SSR so search engines and AI
  // crawlers index the real number. The count-up animation only takes
  // over client-side, after hydration, once the element is in view.
  const [value, setValue] = useState(end);
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        obs.disconnect();

        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
          else setValue(end);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}
