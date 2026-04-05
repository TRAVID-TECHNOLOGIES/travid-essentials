export const easing = [0.22, 1, 0.36, 1] as const;

export const transition = {
  duration: 0.7,
  ease: easing,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition },
};

export const container = (stagger = 0.12) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.05,
    },
  },
});
