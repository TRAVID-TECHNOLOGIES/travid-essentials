"use client";

import { useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import MotionDiv from "./MotionDiv";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export default function Stagger({ children, className }: StaggerProps) {
  return (
    <div className={className}>{children}</div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const baseOffset = 24 + index * 6;
  const translateY = useTransform(scrollYProgress, [0, 1], [baseOffset, -8]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.6, 1], [0.96, 1, 1]);

  return (
    <MotionDiv ref={ref} className={className} style={{ y: translateY, opacity: opacityValue, scale: scaleValue }}>
      {children}
    </MotionDiv>
  );
}
