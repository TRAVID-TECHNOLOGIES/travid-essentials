"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { transition } from "./motion";
import MotionDiv from "./MotionDiv";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: "fade" | "scale";
  className?: string;
  y?: [number, number];
  opacity?: [number, number];
  scale?: [number, number];
};

export default function Reveal({
  children,
  delay = 0,
  variant = "fade",
  className,
  y = [40, -10],
  opacity = [0.15, 1],
  scale = [0.96, 1],
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], y);
  const opacityValue = useTransform(scrollYProgress, [0, 1], opacity);
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale);

  return (
    <MotionDiv
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { y: translateY, opacity: opacityValue, scale: variant === "scale" ? scaleValue : 1 }
      }
      transition={{ ...transition, delay, duration: variant === "scale" ? 0.9 : 0.7 }}
    >
      {children}
    </MotionDiv>
  );
}
