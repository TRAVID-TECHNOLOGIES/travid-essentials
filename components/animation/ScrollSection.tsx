"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
};

export default function ScrollSection({
  children,
  className,
  as = "section",
  id,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.96, 1, 1]);

  const MotionTag = motion[as];

  return (
    <MotionTag ref={ref} id={id} style={{ y, opacity, scale }} className={className}>
      {children}
    </MotionTag>
  );
}
