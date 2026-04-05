"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { whyUs } from "./data";

export default function WhyUs() {
  return (
    <motion.section
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="space-y-12">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="Why Travid"
            title="Delivery built for trust and velocity"
            description="You get a senior, architecture-first team with transparent communication and measurable outcomes."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </MotionDiv>
        <div className="grid gap-6 lg:grid-cols-2">
          {whyUs.map((item) => (
            <MotionDiv
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border h-full rounded-3xl p-6 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <h3 className="font-heading text-xl font-semibold text-ink dark:text-cloud">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
