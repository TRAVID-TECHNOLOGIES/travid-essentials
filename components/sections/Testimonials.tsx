"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import SmoothScroll from "../animation/SmoothScroll";
import StaggerReveal from "../animation/StaggerReveal";
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
        <SmoothScroll
          yOffset={[60, -20]}
          opacityRange={[0.3, 1]}
          scaleRange={[0.92, 1]}
        >
          <SectionHeading
            eyebrow="Clients"
            title="Proof in measurable outcomes"
            description="Teams choose Travid when reliability, speed, and accountability matter most."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </SmoothScroll>
        <SmoothScroll
          yOffset={[40, -10]}
          opacityRange={[0.4, 1]}
          offset={["start 80%", "end 20%"]}
        >
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-ink/60 dark:text-steel">
            {clientLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </SmoothScroll>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <StaggerReveal
              key={item.name}
              index={index}
              staggerDelay={0.12}
              variant="slideUp"
              className="glass gradient-border flex h-full flex-col gap-6 rounded-3xl p-6 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <MotionDiv
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col gap-6"
              >
                <p className="text-sm leading-relaxed text-ink dark:text-cloud">
                  "{item.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-cloud">
                    {item.name}
                  </p>
                  <p className="text-xs text-steel">{item.title}</p>
                </div>
              </MotionDiv>
            </StaggerReveal>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
