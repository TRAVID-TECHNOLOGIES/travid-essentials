"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import ThemeToggle from "../ui/ThemeToggle";
import Container from "../ui/Container";
import ScrollProgress from "../animation/ScrollProgress";
import MotionDiv from "../animation/MotionDiv";

export default function Header() {
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const navVariants = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return {
      top: {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(255,255,255,0)",
        backdropFilter: "blur(0px)",
      },
      scrolled: {
        backgroundColor: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)",
        borderColor: "rgba(229,231,235,0.2)",
        backdropFilter: "blur(12px)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
    };
  }, [resolvedTheme]);

  const containerVariants = {
    hidden: { opacity: 0, y: -16, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        className="fixed left-0 right-0 top-0 z-40 border-b border-transparent"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.nav
          className="border-b border-transparent transition-colors"
          animate={scrolled ? "scrolled" : "top"}
          variants={navVariants}
        >
          <Container className="flex items-center justify-between py-5">
            <MotionDiv
              className="flex items-center gap-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              <MotionDiv variants={itemVariants}>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-cloud dark:bg-cloud dark:text-ink">
                  <span className="text-lg font-bold">T</span>
                </div>
              </MotionDiv>
              <MotionDiv variants={itemVariants}>
                <p className="text-sm font-semibold text-ink dark:text-cloud">
                  Travid Technologies
                </p>
                <p className="text-xs text-steel">Enterprise Software Studio</p>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              className="hidden items-center gap-8 text-sm text-steel md:flex"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            >
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["TRAVID Core", "#travid"],
                ["Tech Stack", "#stack"],
                ["Clients", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <motion.a key={href} className="link-underline" href={href} variants={itemVariants}>
                  {label}
                </motion.a>
              ))}
            </MotionDiv>
            <MotionDiv
              className="flex items-center gap-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}
            >
              <MotionDiv variants={itemVariants}>
                <ThemeToggle />
              </MotionDiv>
              <MotionDiv variants={itemVariants}>
                <ButtonLink href="#contact" variant="primary">
                  Book a Call
                </ButtonLink>
              </MotionDiv>
            </MotionDiv>
          </Container>
        </motion.nav>
      </motion.header>
    </>
  );
}
