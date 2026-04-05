"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLink from "../ui/ButtonLink";
import Container from "../ui/Container";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, scaleIn, staggerContainer } from "../../lib/motionVariants";

export default function Hero() {
  const headline = "Mission-critical software, delivered with precision.";
  const words = headline.split(" ");
  const headlineContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const mediaVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#f9f9f9] pb-32 pt-40 text-ink dark:bg-[#0a0a0a] dark:text-cloud"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <MotionDiv
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15), transparent)",
        }}
      />
      <div className="noise-fine" aria-hidden />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <motion.span
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 self-start rounded-full border border-ink/15 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/80 dark:border-white/15 dark:bg-white/10 dark:text-cloud"
            >
              Engineering clarity for high-growth teams
            </motion.span>
            <motion.h1
              className="font-heading text-display font-semibold text-ink dark:text-cloud"
              variants={headlineContainer}
            >
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="mr-2 inline-block"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="max-w-xl text-base text-ink/80 md:text-lg dark:text-white/70"
              variants={fadeUp}
              transition={{ delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Travid Technologies builds enterprise platforms that automate complex
              operations, elevate customer experiences, and keep your systems fast
              under pressure.
            </motion.p>
            <MotionDiv
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
              transition={{ delayChildren: 0.6, staggerChildren: 0.08 }}
            >
              <MotionDiv variants={scaleIn}>
                <ButtonLink href="#contact" variant="primary">
                  Start a Project
                </ButtonLink>
              </MotionDiv>
              <MotionDiv variants={scaleIn}>
                <ButtonLink href="#services" variant="secondary">
                  Explore Services
                </ButtonLink>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              className="flex flex-col gap-2 text-sm text-ink/70 dark:text-white/60"
              variants={fadeUp}
              transition={{ delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>Average delivery kickoff: 2 weeks</span>
              <span>Senior engineers only. Strategy to scale in one team.</span>
            </MotionDiv>
          </div>
          <MotionDiv variants={mediaVariants} className="relative">
            <div className="glass gradient-border relative overflow-hidden rounded-3xl p-8 shadow-soft">
              <Image
                src="/illustrations/hero-grid.svg"
                alt="Platform analytics and infrastructure"
                width={520}
                height={520}
                className="h-auto w-full animate-float"
                priority
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-ink/5 p-4 dark:bg-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-white/60">
                    Uptime
                  </p>
                  <p className="text-2xl font-semibold text-ink dark:text-cloud">99.98%</p>
                </div>
                <div className="rounded-2xl bg-ink/5 p-4 dark:bg-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-white/60">
                    Latency
                  </p>
                  <p className="text-2xl font-semibold text-ink dark:text-cloud">-42%</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
