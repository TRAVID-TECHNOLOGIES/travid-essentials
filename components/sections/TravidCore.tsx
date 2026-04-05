"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionDivider from "../animation/SectionDivider";
import MotionDiv from "../animation/MotionDiv";
import SmoothScroll from "../animation/SmoothScroll";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

const items = [
  {
    letter: "T",
    title: "Technology",
    description: "Modern web, mobile, and system engineering that scales fast.",
    accent: "from-aurora/20 via-transparent to-transparent",
  },
  {
    letter: "R",
    title: "Research",
    description: "Deep discovery, market analysis, and roadmap clarity before build.",
    accent: "from-cyan/20 via-transparent to-transparent",
  },
  {
    letter: "A",
    title: "Automation",
    description: "Agentic workflows and AI systems that remove manual drag.",
    accent: "from-mint/20 via-transparent to-transparent",
  },
  {
    letter: "V",
    title: "Visualization",
    description: "Premium UI/UX, brand systems, and data visualization that convert.",
    accent: "from-ember/20 via-transparent to-transparent",
  },
  {
    letter: "I",
    title: "Integration",
    description: "Clean API connections, secure data syncs, and platform harmony.",
    accent: "from-aurora/15 via-transparent to-transparent",
  },
  {
    letter: "D",
    title: "Design",
    description: "Product-first design thinking with elegant, usable interfaces.",
    accent: "from-cyan/15 via-transparent to-transparent",
  },
];

type StepProps = (typeof items)[number] & { index: number };

function TravidStep({ letter, title, description, accent, index }: StepProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const letterY = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [70, -10]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0.65]);
  const blockScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1]);
  const stepOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0.6]);
  const blurValue = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [6, 0, 0, 4]);
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const headingY = useTransform(scrollYProgress, [0, 1], [18, -6]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [22, -4]);

  return (
    <MotionDiv
      ref={ref}
      style={{ opacity: stepOpacity, scale: blockScale }}
      className="grid min-h-[60vh] items-center gap-10 lg:grid-cols-[0.35fr_0.65fr]"
    >
      <MotionDiv style={{ y: letterY }} className="relative">
        <div className="text-[clamp(4.5rem,16vw,9rem)] font-heading font-semibold text-ink/90 dark:text-cloud/90">
          {letter}
        </div>
        <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-aurora/20 blur-[60px]" />
      </MotionDiv>
      <MotionDiv
        style={{ y: textY, opacity: textOpacity, filter: blurFilter }}
        className="relative"
      >
        <MotionDiv
          style={{ y: bgY }}
          className={`absolute -inset-6 rounded-[32px] bg-gradient-to-br ${accent} opacity-70 blur-[40px]`}
          aria-hidden
        />
        <div className="relative space-y-4">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-steel">
            <span>Step {index + 1}</span>
            <span className="h-px w-12 bg-steel/40" />
          </div>
          <motion.h3
            style={{ y: headingY }}
            className="font-heading text-3xl font-semibold text-ink dark:text-cloud md:text-4xl"
          >
            {title}
          </motion.h3>
          <motion.p
            style={{ y: bodyY }}
            className="max-w-xl text-base text-steel md:text-lg"
          >
            {description}
          </motion.p>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}

export default function TravidCore() {
  return (
    <motion.section
      id="travid"
      className="section-flow py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="space-y-16">
        <SmoothScroll
          yOffset={[60, -20]}
          opacityRange={[0.3, 1]}
          scaleRange={[0.92, 1]}
        >
          <SectionHeading
            eyebrow="TRAVID Core"
            title="A cinematic reveal of how we build"
            description="Each letter is a stage in our journey—from research to automation to integration—crafted to deliver systems that feel effortless to use and powerful to scale."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
        </SmoothScroll>
        <div className="space-y-20">
          {items.map((item, index) => (
            <TravidStep key={item.title} {...item} index={index} />
          ))}
        </div>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
