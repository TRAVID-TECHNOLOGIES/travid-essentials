"use client";

import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import type { ComponentProps } from "react";

const MotionDiv = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ style, onAnimationStart, onAnimationComplete, ...props }, ref) => {
  const [willChange, setWillChange] = useState<"transform" | "auto">("transform");

  return (
    <motion.div
      ref={ref}
      {...props}
      style={{ ...style, willChange }}
      onAnimationStart={(definition) => {
        setWillChange("transform");
        onAnimationStart?.(definition);
      }}
      onAnimationComplete={(definition) => {
        setWillChange("auto");
        onAnimationComplete?.(definition);
      }}
    />
  );
  }
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
