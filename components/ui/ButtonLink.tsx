"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const MotionLink = motion(Link);
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora/60";

  const styles: Record<typeof variant, string> = {
    primary:
      "bg-ink text-cloud shadow-glow hover:-translate-y-0.5 hover:bg-ink/90 dark:bg-cloud dark:text-ink",
    secondary:
      "glass text-ink dark:text-cloud hover:-translate-y-0.5",
    ghost: "text-ink dark:text-cloud hover:text-aurora",
  };

  return (
    <MotionLink
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.03 },
      }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 dark:via-white/20"
        variants={{
          rest: { x: "-120%" },
          hover: { x: "120%" },
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="relative z-10 ml-2 inline-flex items-center"
        variants={{ rest: { x: 0 }, hover: { x: 3 } }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </motion.span>
    </MotionLink>
  );
}
