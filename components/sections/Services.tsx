"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { services } from "./data";

export default function Services() {
  return (
    <motion.section
      id="services"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="space-y-12">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="Services"
            title="Engineering that removes bottlenecks"
            description="From product engineering to AI automation, we assemble the right senior team to ship scalable, secure, and conversion-ready systems."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </MotionDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <MotionDiv
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group glass gradient-border h-full rounded-3xl p-6 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <h3 className="font-heading text-xl font-semibold text-ink dark:text-cloud">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-aurora">
                Learn more
              </span>
            </MotionDiv>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
