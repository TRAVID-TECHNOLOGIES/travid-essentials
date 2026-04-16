"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
          <Container className="flex items-center justify-between py-4 sm:py-5">
            <MotionDiv
              className="flex min-w-0 items-center gap-2 sm:gap-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              <MotionDiv variants={itemVariants}>
                <Link href="/" className="block shrink-0">
                  <Image
                    src="/assets/travid-logo.jpeg"
                    alt="Travid logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-xl object-cover sm:h-10 sm:w-10"
                    priority
                  />
                </Link>
              </MotionDiv>
              <MotionDiv variants={itemVariants} className="min-w-0">
                <p className="truncate text-[11px] font-semibold leading-tight text-ink dark:text-cloud sm:text-sm">
                  <span className="sm:hidden">Travid...</span>
                  <span className="hidden sm:inline">Travid Technologies</span>
                </p>
                <p className="hidden text-xs text-steel md:block">Enterprise Software Studio</p>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              className="hidden items-center gap-8 text-sm text-steel md:flex"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            >
              {[
                ["Services", "/#services"],
                ["About", "/#about"],
                ["TRAVID Core", "/#travid"],
                ["Tech Stack", "/#stack"],
                ["Clients", "/#testimonials"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <motion.a key={href} className="link-underline" href={href} variants={itemVariants}>
                  {label}
                </motion.a>
              ))}
            </MotionDiv>
            <MotionDiv
              className="flex items-center gap-2 sm:gap-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}
            >
              <MotionDiv variants={itemVariants}>
                <ThemeToggle />
              </MotionDiv>
              <MotionDiv variants={itemVariants}>
                <ButtonLink
                  href="/#contact"
                  variant="primary"
                  className="px-3 py-2 text-[11px] sm:px-6 sm:py-3 sm:text-sm"
                >
                  Book Call
                </ButtonLink>
              </MotionDiv>
            </MotionDiv>
          </Container>
        </motion.nav>
      </motion.header>
    </>
  );
}
