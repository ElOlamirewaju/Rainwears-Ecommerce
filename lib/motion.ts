import { Variants } from 'framer-motion'

// Helper to check reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export const pageTransitionConfig = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1],
}

// Fade up animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  },
}

// Stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  },
}

// Modal transitions
export const modalTransition: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.98,
    y: 20,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 20,
    transition: {
      duration: 0.2,
    }
  },
}

// Hover animations
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  }
}

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  }
}

// Micro interactions
export const tapScale = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  }
}

