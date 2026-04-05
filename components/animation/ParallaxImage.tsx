"use client";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";
import MotionDiv from "./MotionDiv";

type ParallaxImageProps = {
  children?: ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  parallaxIntensity?: number; // 0-1, where 1 is max parallax
  offset?: [string, string];
  opacity?: [number, number];
  scale?: [number, number];
};

export default function ParallaxImage({
  children,
  className = "",
  src,
  alt = "Parallax image",
  parallaxIntensity = 0.5,
  offset = ["start 80%", "end 20%"],
  opacity = [0.5, 1],
  scale = [0.95, 1],
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
  });

  // Parallax Y movement (more intense based on parallaxIntensity)
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-40 * parallaxIntensity, 40 * parallaxIntensity]
  );

  // Smooth opacity transition
  const opacityValue = useTransform(scrollYProgress, [0, 0.3, 1], [opacity[0], 1, opacity[1]]);

  // Smooth scale transition
  const scaleValue = useTransform(scrollYProgress, [0, 0.4, 1], [scale[0], 1, scale[1]]);

  return (
    <MotionDiv
      ref={ref}
      className={className}
      style={{
        y: parallaxY,
        opacity: opacityValue,
        scale: scaleValue,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        children
      )}
    </MotionDiv>
  );
}
