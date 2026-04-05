"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  useMotion = false,
  variants,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  useMotion?: boolean;
  variants?: {
    eyebrow?: Variants;
    title?: Variants;
    description?: Variants;
  };
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {useMotion ? (
        <motion.span
          variants={variants?.eyebrow}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-aurora"
        >
          {eyebrow}
        </motion.span>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-aurora">
          {eyebrow}
        </span>
      )}
      {useMotion ? (
        <motion.h2
          variants={variants?.title}
          className="font-heading text-title font-semibold text-ink dark:text-cloud"
        >
          {title}
        </motion.h2>
      ) : (
        <h2 className="font-heading text-title font-semibold text-ink dark:text-cloud">
          {title}
        </h2>
      )}
      {description ? (
        useMotion ? (
          <motion.p
            variants={variants?.description}
            className="max-w-2xl text-base text-ink/70 md:text-lg dark:text-steel"
          >
            {description}
          </motion.p>
        ) : (
          <p className="max-w-2xl text-base text-ink/70 md:text-lg dark:text-steel">
            {description}
          </p>
        )
      ) : null}
    </div>
  );
}
