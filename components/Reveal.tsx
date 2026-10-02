"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reveal({
  children,
  y = 28,
  delay = 0,
}: {
  children: React.ReactNode;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y },
      { autoAlpha: 1, y: 0, duration: 0.9, delay, ease: "power2.out" },
    );
    return () => {
      gsap.killTweensOf(el);
    };
  }, [y, delay]);

  return (
    <div ref={ref} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
