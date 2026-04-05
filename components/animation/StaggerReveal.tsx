"use client";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";
import MotionDiv from "./MotionDiv";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  staggerDelay?: number; // in pixels of scroll distance
  offset?: [string, string];
  variant?: "fade" | "slideUp" | "scaleIn";
};

export default function StaggerReveal({
  children,
  className = "",
  index = 0,
  staggerDelay = 0.08,
  offset = ["start 80%", "end 20%"],
  variant = "slideUp",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  // Add stagger effect by offsetting animation start per item
  const staggerOffset = index * staggerDelay;

  // Adjust scroll progress based on stagger
  const adjustedProgress = useTransform(scrollYProgress, (progress) => {
    const adjusted = Math.max(0, progress - staggerOffset);
    return Math.min(1, adjusted / (1 - staggerOffset || 0.1));
  });

  const translateY = useTransform(
    adjustedProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [40 + index * 4, 0]
  );

  const opacity = useTransform(
    adjustedProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );

  const scale = useTransform(
    adjustedProgress,
    [0, 0.6, 1],
    variant === "scaleIn" ? [0.92, 1, 1] : [1, 1, 1]
  );

  return (
    <MotionDiv
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { y: translateY, opacity, scale }
      }
    >
      {children}
    </MotionDiv>
  );
}
