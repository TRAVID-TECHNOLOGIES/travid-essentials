"use client";

import { useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import MotionDiv from "./MotionDiv";

type ScrollLayerProps = {
  children: ReactNode;
  className?: string;
  y?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  offset?: [string, string];
};

export default function ScrollLayer({
  children,
  className,
  y = [30, -30],
  scale = [1, 1],
  opacity = [0.9, 1],
  offset = ["start end", "end start"],
}: ScrollLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as any });
  const translateY = useTransform(scrollYProgress, [0, 1], y);
  const opacityValue = useTransform(scrollYProgress, [0, 1], opacity);
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale);

  return (
    <MotionDiv
      ref={ref}
      style={{ y: translateY, opacity: opacityValue, scale: scaleValue }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
