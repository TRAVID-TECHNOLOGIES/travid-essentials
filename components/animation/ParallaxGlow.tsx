"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import MotionDiv from "./MotionDiv";

export default function ParallaxGlow() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], prefersReducedMotion ? [0, 0] : [0, -120]);
  const opacity = useTransform(scrollY, [0, 500], [0.6, 0.15]);

  return (
    <MotionDiv
      style={{ y, opacity }}
      className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-aurora/40 blur-[120px]"
      aria-hidden
    />
  );
}
