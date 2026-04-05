"use client";

import { useScroll, useSpring } from "framer-motion";
import MotionDiv from "./MotionDiv";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <MotionDiv
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed left-0 top-0 z-50 h-[2px] w-full bg-indigo-500"
      aria-hidden
    />
  );
}
