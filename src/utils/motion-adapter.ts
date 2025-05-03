/**
 * Adapter utilities for working with different motion libraries
 */
import { Variants as FramerVariants } from 'framer-motion';

// Re-export types from framer-motion to provide a consistent API
export type Variants = FramerVariants;

/**
 * Provides a consistent interface for animation variants across different motion libraries
 *
 * @param variants - The animation variants object
 * @returns The same variants object, but typed safely for use with either library
 */
export function adaptVariants<T extends Variants>(variants: T): T {
  return variants;
}

// Export a wrapper for any motion-specific functions we need
// This allows us to switch implementations or provide fallbacks

/**
 * Creates transition properties that work with both libraries
 */
export function createTransition(options: {
  duration?: number;
  ease?: string | number[];
  delay?: number;
}) {
  return {
    duration: options.duration,
    ease: options.ease,
    delay: options.delay,
  };
}
