"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** fade-up (default), fade-left, fade-right, scale */
  variant?: "up" | "left" | "right" | "scale";
  /** 0 | 1 | 2 | 3 — staggered step, ~80ms each */
  delay?: 0 | 1 | 2 | 3;
};

/**
 * Scroll-triggered reveal. Fades/slides content in once when it enters the
 * viewport. The hidden starting state only applies when JS is running (the
 * `.js` class on <html>); without JS the content renders fully visible.
 * Respects prefers-reduced-motion via the CSS override in globals.css.
 */
export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";
  const delayClass =
    delay === 1
      ? "reveal-delay-1"
      : delay === 2
        ? "reveal-delay-2"
        : delay === 3
          ? "reveal-delay-3"
          : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
