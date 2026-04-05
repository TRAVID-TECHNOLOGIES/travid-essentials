"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { clientLogos, testimonials } from "./data";

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="space-y-12">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="Clients"
            title="Proof in measurable outcomes"
            description="Teams choose Travid when reliability, speed, and accountability matter most."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </MotionDiv>
        <MotionDiv variants={fadeUp}>
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-ink/60 dark:text-steel">
            {clientLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </MotionDiv>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <MotionDiv
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border flex h-full flex-col gap-6 rounded-3xl p-6 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <p className="text-sm leading-relaxed text-ink dark:text-cloud">
                “{item.quote}”
              </p>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-cloud">
                  {item.name}
                </p>
                <p className="text-xs text-steel">{item.title}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
