"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import MotionDiv from "../animation/MotionDiv";

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-[#f9f9f9] py-14 text-steel dark:bg-[#0a0a0a]"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 80px)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 80px)",
      }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <Container className="flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <MotionDiv variants={fadeUp}>
          <p>Building enterprise systems for ambitious teams.</p>
        </MotionDiv>
        <MotionDiv
          variants={fadeUp}
          className="flex flex-wrap gap-6 text-ink/70 dark:text-white/60"
        >
          {[
            ["Services", "/#services"],
            ["About", "/#about"],
            ["TRAVID Core", "/#travid"],
            ["Tech Stack", "/#stack"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <motion.a
              key={href}
              href={href}
              className="link-underline"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
            </motion.a>
          ))}
        </MotionDiv>
        <motion.p variants={fadeUp}>© 2026 Travid Technologies. All rights reserved.</motion.p>
      </Container>
    </motion.footer>
  );
}
