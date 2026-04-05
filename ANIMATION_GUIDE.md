# Smooth Scroll Animation System - Implementation Guide

## Overview

Your Travid Technologies site now has a premium animation system inspired by waabi.ai with smooth, polished scroll effects. These components work across the entire site on scroll up/down.

## New Animation Components

### 1. **ParallaxImage** - For Images with Parallax Effect

Creates smooth parallax effects on images as you scroll.

```tsx
import ParallaxImage from "@/components/animation/ParallaxImage";

<ParallaxImage
  parallaxIntensity={0.5}  // 0-1 (higher = more intense)
  offset={["start 80%", "end 20%"]}
  opacity={[0.5, 1]}
  scale={[0.95, 1]}
  className="h-96 w-full rounded-2xl"
  src="/your-image.jpg"
  alt="Description"
/>
```

**Properties:**
- `parallaxIntensity` (0-1): Controls strength of parallax movement
- `offset`: Scroll trigger points (viewport-based)
- `opacity`: [startOpacity, endOpacity]
- `scale`: [startScale, endScale]
- `src` & `alt`: Image properties

### 2. **SmoothScroll** - Smooth Fade + Scale + Blur Reveals

Create premium smooth animations as content enters viewport.

```tsx
import SmoothScroll from "@/components/animation/SmoothScroll";

<SmoothScroll
  yOffset={[60, -30]}        // Y movement
  opacityRange={[0.3, 1]}    // Fade in
  scaleRange={[0.94, 1]}     // Scale up
  blurRange={[8, 0]}         // Blur to sharp
  offset={["start 85%", "end 20%"]}
  className="max-w-3xl"
>
  <h2 className="text-4xl font-bold">Your Content</h2>
</SmoothScroll>
```

**Properties:**
- `yOffset`: [startY, endY] - vertical movement in pixels
- `opacityRange`: [start, end] - fade effect
- `scaleRange`: [start, end] - scale effect
- `rotateRange`: [start, end] - rotation
- `blurRange`: [start, end] - blur effect
- `offset`: scroll trigger points
- `duration`: "fast" | "normal" | "slow"

### 3. **StaggerReveal** - Staggered Item Animations

Reveal items one by one as page scrolls past them.

```tsx
import StaggerReveal from "@/components/animation/StaggerReveal";

{items.map((item, index) => (
  <StaggerReveal
    key={index}
    index={index}
    staggerDelay={100}      // pixels between each item
    variant="slideUp"       // "fade" | "slideUp" | "scaleIn"
    className="p-6 rounded-xl border"
  >
    {item}
  </StaggerReveal>
))}
```

**Properties:**
- `index`: Position in sequence (0, 1, 2...)
- `staggerDelay`: Scroll distance between animations
- `variant`: Animation style
- `offset`: scroll trigger points

## Implementation Examples

### Example 1: Hero Section with Parallax Image

```tsx
import ParallaxImage from "@/components/animation/ParallaxImage";

<MotionDiv variants={mediaVariants} className="relative">
  <ParallaxImage
    parallaxIntensity={0.4}
    offset={["start 60%", "end 20%"]}
    className="relative overflow-hidden rounded-3xl"
  >
    <div className="glass gradient-border rounded-3xl p-8">
      <Image src="/images/hero.jpg" alt="Hero" />
    </div>
  </ParallaxImage>
</MotionDiv>
```

### Example 2: Feature List with Stagger

```tsx
import StaggerReveal from "@/components/animation/StaggerReveal";

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <StaggerReveal
      key={index}
      index={index}
      staggerDelay={120}
      variant="scaleIn"
      className="rounded-xl p-6 bg-white border"
    >
      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </StaggerReveal>
  ))}
</div>
```

### Example 3: Text Block with Smooth Reveal

```tsx
import SmoothScroll from "@/components/animation/SmoothScroll";

<SmoothScroll
  yOffset={[60, -20]}
  opacityRange={[0.4, 1]}
  scaleRange={[0.95, 1]}
  className="max-w-2xl mx-auto"
>
  <h2 className="text-5xl font-bold mb-8">Why Choose Us</h2>
  <p className="text-lg text-gray-600">
    Your content appears smoothly with perfect blend of scale, fade, and blur effects.
  </p>
</SmoothScroll>
```

## Enhanced Motion Variants

New premium animation variants available in `lib/motionVariants.ts`:

```tsx
import {
  slideUp,           // Slide up with blur
  slideDown,         // Slide down with blur
  slideRight,        // Slide right with blur
  scaleUp,           // Scale up smooth
  imageReveal,       // Image-specific reveal
  staggerContainerSmooth,    // Smooth stagger container
  staggerContainerMedium,    // Medium stagger container
  textReveal,        // Text reveal
  fadeSlow,          // Slow fade
  fadeVeryFast,      // Fast fade
} from "@/lib/motionVariants";
```

## Integration Checklist

- [x] ParallaxImage component created
- [x] SmoothScroll component created
- [x] StaggerReveal component created
- [x] Enhanced motion variants added
- [x] Hero section updated with ParallaxImage
- [ ] Hero section CTA buttons to use StaggerReveal
- [ ] Services section cards with StaggerReveal
- [ ] About section with SmoothScroll reveals
- [ ] TechStack section with stagger
- [ ] Testimonials with parallax
- [ ] Contact section footer transforms

## Best Practices

1. **Use `parallaxIntensity={0.3-0.5}`** for subtle effects
2. **Set `offset={["start 80%", "end 20%"]}`** for proper scroll trigger
3. **Combine blur + scale** for professional look: `blurRange={[8, 0]}, scaleRange={[0.94, 1]}`
4. **Use stagger** for lists: `staggerDelay={80-120}`
5. **Respect motion preferences**: All components check `useReducedMotion()`
6. **Keep animations under 1 second** for smooth feel
7. **Test on mobile** - animations work but be mindful of performance

## Performance Tips

- Animations are GPU-accelerated (transform, opacity only in Framer Motion)
- Blur effects are applied minimally to maintain performance
- All components respect user's `prefers-reduced-motion` setting
- Use `offset` props to control when animations trigger

## Browser Support

Works on all modern browsers (Chrome, Safari, Firefox, Edge). Gracefully degrades on older browsers.

## Next Steps

Apply these components to other sections:
1. Services section cards
2. About section content
3. TechStack showcase
4. Testimonials
5. Contact section

See `components/animation/AnimationGuide.tsx` for live examples.
