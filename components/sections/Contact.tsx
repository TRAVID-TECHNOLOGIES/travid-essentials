"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="Contact"
            title="Start with a clear plan"
            description="Share your goals and we will respond within one business day with a clear plan, timeline, and team proposal."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
          <MotionDiv className="mt-8 space-y-4 text-sm text-steel" variants={fadeUp}>
            <p>
              Prefer email? Reach us at
              <span className="ml-1 font-semibold text-ink dark:text-cloud">
                hello@travid.tech
              </span>
            </p>
            <p>Global delivery with senior teams across time zones.</p>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv variants={fadeUp}>
          <form className="glass gradient-border space-y-6 rounded-3xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
              />
            </div>
            <motion.button
              type="submit"
              className="group relative w-full overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cloud shadow-glow transition-colors duration-300 ease-apple hover:bg-ink/90 dark:bg-cloud dark:text-ink"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 dark:via-white/20"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10">Request a Proposal</span>
            </motion.button>
            <p className="text-xs text-steel">
              By submitting, you agree to receive a response from Travid
              Technologies.
            </p>
          </form>
        </MotionDiv>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
