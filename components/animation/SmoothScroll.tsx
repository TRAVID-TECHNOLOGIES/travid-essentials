"use client";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";
import MotionDiv from "./MotionDiv";

type SmoothScrollProps = {
  children: ReactNode;
  className?: string;
  // Animation intensities (0-1)
  yOffset?: [number, number];
  opacityRange?: [number, number];
  scaleRange?: [number, number];
  rotateRange?: [number, number];
  blurRange?: [number, number];
  offset?: [string, string];
  duration?: "fast" | "normal" | "slow";
};

export default function SmoothScroll({
  children,
  className = "",
  yOffset = [60, -30],
  opacityRange = [0.3, 1],
  scaleRange = [0.94, 1],
  rotateRange = [0, 0],
  blurRange = [8, 0],
  offset = ["start 85%", "end 20%"],
  duration = "normal",
}: SmoothScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : yOffset
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [opacityRange[0], 1, opacityRange[1]]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [scaleRange[0], 1, scaleRange[1]]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : rotateRange
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : blurRange
  );

  return (
    <MotionDiv
      ref={ref}
      className={className}
      style={{
        y: translateY,
        opacity,
        scale,
        rotate,
        filter: blur,
      }}
    >
      {children}
    </MotionDiv>
  );
}
