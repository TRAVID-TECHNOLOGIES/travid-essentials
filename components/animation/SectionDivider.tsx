"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import MotionDiv from "./MotionDiv";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -60% 0px" });

  return (
    <MotionDiv
      ref={ref}
      className="pointer-events-none h-32 w-full bg-gradient-to-b from-transparent to-[#f9f9f9] dark:to-[#0a0a0a]"
      animate={{ opacity: inView ? 1 : 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  );
}
