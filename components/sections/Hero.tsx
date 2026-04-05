"use client";

import { motion } from "framer-motion";
import ButtonLink from "../ui/ButtonLink";
import Container from "../ui/Container";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import ParallaxImage from "../animation/ParallaxImage";
import SmoothScroll from "../animation/SmoothScroll";
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
            <ParallaxImage
              parallaxIntensity={0.4}
              offset={["start 60%", "end 20%"]}
              className="relative overflow-hidden rounded-3xl shadow-soft"
            >
              <div className="glass gradient-border relative overflow-hidden rounded-3xl p-6">
                <div className="grid gap-5">
                  <div className="rounded-[2rem] bg-slate-950/90 p-5 text-white shadow-soft">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          Platform overview
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Travid Cloud Ops
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        Live
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          Throughput
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">528 req/s</p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          SLA
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">99.98%</p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          Alerts
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">2 active</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/90 p-5 text-white shadow-soft">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_25%)]" />
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
                        <span>System performance</span>
                        <span>Last 12 hours</span>
                      </div>
                      <div className="h-44 rounded-[1.75rem] bg-slate-900/90 p-4">
                        <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-slate-950/95">
                          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)]" />
                          <div className="absolute inset-0 grid grid-rows-4 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_1.5rem]" />
                          <div className="absolute inset-x-6 bottom-6 top-6">
                            <svg viewBox="0 0 300 140" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 96C34 90 68 68 102 72C136 76 170 56 204 52C238 48 272 38 300 32" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
                              <path d="M0 108C34 104 68 86 102 92C136 98 170 76 204 72C238 70 272 64 300 58" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
                              <circle cx="248" cy="50" r="5" fill="#22c55e" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-slate-900/80 p-4">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                            Deployment
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">Canary release complete</p>
                        </div>
                        <div className="rounded-2xl bg-slate-900/80 p-4">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                            Incident
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">CPU spike resolved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxImage>
          </MotionDiv>
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
