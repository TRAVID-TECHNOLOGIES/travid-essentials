"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { techStack } from "./data";

export default function TechStack() {
  return (
    <motion.section
      id="stack"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="space-y-12">
        <MotionDiv variants={fadeUp}>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Modern platforms, engineered for longevity"
            description="We architect on proven tools that scale from early product-market fit to global enterprise."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </MotionDiv>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <MotionDiv
              key={tech.name}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border flex items-center gap-4 rounded-3xl px-5 py-4 shadow-soft hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <MotionDiv
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Image
                  src={tech.file}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </MotionDiv>
              <span className="text-sm font-semibold text-ink dark:text-cloud">
                {tech.name}
              </span>
            </MotionDiv>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
