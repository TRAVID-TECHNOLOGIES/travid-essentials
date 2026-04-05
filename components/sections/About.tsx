"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { stats } from "./data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="About"
            title="A senior team built for complex systems"
            description="We are a software development company focused on high-stakes platforms. Our teams combine product strategy, automation, and cloud architecture to help you scale with confidence."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
          <MotionDiv className="mt-8 space-y-4 text-base text-ink/75 dark:text-steel" variants={fadeUp}>
            <p>
              We specialize in distributed systems, modern web platforms, and
              enterprise modernization. Every delivery includes clear
              documentation, observability, and a long-term roadmap to keep your
              business resilient.
            </p>
            <p>
              Our approach blends discovery, architecture, and rapid delivery so
              stakeholders stay aligned and releases stay predictable.
            </p>
          </MotionDiv>
        </MotionDiv>
        <div className="grid gap-6">
          {stats.map((stat) => (
            <MotionDiv
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border rounded-3xl p-6 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-aurora">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-ink dark:text-cloud">
                {stat.value}
              </p>
            </MotionDiv>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
