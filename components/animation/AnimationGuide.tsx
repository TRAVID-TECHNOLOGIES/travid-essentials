"use client";

/**
 * WAABI-STYLE SMOOTH SCROLL ANIMATIONS GUIDE
 * 
 * This guide demonstrates how to implement smooth, premium scroll animations
 * similar to waabi.ai using the new animation components.
 */

import React from "react";
import ParallaxImage from "./ParallaxImage";
import SmoothScroll from "./SmoothScroll";
import StaggerReveal from "./StaggerReveal";
import MotionDiv from "./MotionDiv";

/**
 * EXAMPLE 1: Image Gallery with Parallax Effect
 * Perfect for hero images or image grids
 */
export function ParallaxGalleryExample() {
  return (
    <div className="relative space-y-8">
      <ParallaxImage
        src="/your-image.jpg"
        alt="Hero section"
        parallaxIntensity={0.7}
        className="h-96 w-full rounded-2xl overflow-hidden"
      />
    </div>
  );
}

/**
 * EXAMPLE 2: Smooth Scroll Content Reveal
 * For text and content blocks that fade and slide in
 */
export function SmoothContentExample() {
  return (
    <div className="space-y-12">
      <SmoothScroll
        className="max-w-3xl"
        yOffset={[80, -20]}
        opacityRange={[0.3, 1]}
        scaleRange={[0.92, 1]}
      >
        <h2 className="text-4xl font-bold">Your Heading</h2>
        <p className="mt-4 text-lg text-gray-600">
          This content smoothly fades in and scales as you scroll.
        </p>
      </SmoothScroll>
    </div>
  );
}

/**
 * EXAMPLE 3: Staggered List Items
 * For lists that animate in one after another as page scrolls
 */
export function StaggeredListExample() {
  const items = [
    "First item reveals",
    "Second item appears next",
    "Third item follows smoothly",
    "Fourth item completes the sequence",
  ];

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <StaggerReveal
          key={index}
          index={index}
          staggerDelay={100}
          variant="slideUp"
          className="p-6 rounded-xl border border-gray-200 bg-white"
        >
          <p className="text-lg">{item}</p>
        </StaggerReveal>
      ))}
    </div>
  );
}

/**
 * EXAMPLE 4: Complex Section with Multiple Layers
 * Combines parallax, smooth scroll, and stagger for premium feel
 */
export function ComplexSectionExample() {
  return (
    <section className="relative py-24">
      {/* Background parallax element */}
      <ParallaxImage
        parallaxIntensity={0.3}
        offset={["start 100%", "end 0%"]}
        className="absolute inset-0 -z-10 h-96 opacity-20"
      >
        <div className="h-full w-full bg-gradient-to-b from-blue-500 to-transparent" />
      </ParallaxImage>

      {/* Content with smooth scroll */}
      <SmoothScroll
        className="mx-auto max-w-4xl"
        yOffset={[60, -40]}
        opacityRange={[0.4, 1]}
        scaleRange={[0.95, 1]}
      >
        <h2 className="text-5xl font-bold mb-8">Premium Section</h2>

        {/* Staggered features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <StaggerReveal
              key={index}
              index={index}
              variant="scaleIn"
              className="rounded-xl p-6 bg-white border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3">Feature {index + 1}</h3>
              <p className="text-gray-600">
                Smoothly animated feature card with staggered entrance.
              </p>
            </StaggerReveal>
          ))}
        </div>
      </SmoothScroll>
    </section>
  );
}

/**
 * COMPONENT PROPS REFERENCE
 * 
 * ParallaxImage:
 * - parallaxIntensity: 0-1 (controls strength of parallax effect)
 * - offset: viewport detection trigger points
 * - opacity: [start, end] opacity values
 * - scale: [start, end] scale values
 * 
 * SmoothScroll:
 * - yOffset: [start, end] Y translation
 * - opacityRange: [start, end] opacity
 * - scaleRange: [start, end] scale
 * - rotateRange: [start, end] rotation
 * - blurRange: [start, end] blur amount
 * - duration: "fast" | "normal" | "slow"
 * 
 * StaggerReveal:
 * - index: order in sequence
 * - staggerDelay: spacing between items (pixels)
 * - variant: "fade" | "slideUp" | "scaleIn"
 * - offset: viewport detection points
 * 
 * WAABI.AI-STYLE SETTINGS:
 * 
 * For parallax images:
 * <ParallaxImage parallaxIntensity={0.5} />
 * 
 * For content reveals:
 * <SmoothScroll yOffset={[60, -30]} opacityRange={[0.3, 1]} />
 * 
 * For staggered items:
 * <StaggerReveal index={0} staggerDelay={100} variant="slideUp" />
 * 
 * For maximum smoothness:
 * - Use reduced motion settings (useReducedMotion hook)
 * - Keep blur effects subtle (2-8px range)
 * - Use consistent easing curves
 * - Avoid too many simultaneous animations
 */

export default function AnimationGuide() {
  return (
    <div className="space-y-32 py-24 px-4">
      <section>
        <h1 className="text-5xl font-bold mb-8">Animation Examples</h1>
        <p className="text-xl text-gray-600 mb-16">
          Scroll through these examples to see smooth, waabi.ai-style animations in action.
        </p>
      </section>

      <ParallaxGalleryExample />
      <SmoothContentExample />
      <StaggeredListExample />
      <ComplexSectionExample />

      <section className="rounded-2xl bg-blue-50 p-12">
        <h2 className="text-2xl font-bold mb-4">Key Animation Principles</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✓ Smooth easing curves for polished feel</li>
          <li>✓ Parallax effects that respect scroll speed</li>
          <li>✓ Staggered reveals for visual rhythm</li>
          <li>✓ Respects prefers-reduced-motion</li>
          <li>✓ Blur effects enhance depth perception</li>
          <li>✓ Consistent timing across all animations</li>
        </ul>
      </section>
    </div>
  );
}
