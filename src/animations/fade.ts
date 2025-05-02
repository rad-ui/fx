/**
 * Fade animation variants for motion libraries
 */
import { Variants, createTransition } from '../utils/motion-adapter';

/**
 * Options for customizing the fade animation
 */
export interface FadeOptions {
  /**
   * Duration of the animation in seconds
   * @default 0.5
   */
  duration?: number;
  
  /**
   * Initial opacity value
   * @default 0
   */
  initialOpacity?: number;
  
  /**
   * Final opacity value
   * @default 1
   */
  finalOpacity?: number;
  
  /**
   * Easing function to use
   * @default "easeInOut"
   */
  easing?: string;
}

/**
 * Creates fade animation variants for motion libraries
 * 
 * @param options - Options to customize the fade animation
 * @returns Variants object for fade animations
 * 
 * @example
 * ```tsx
 * import { motion } from 'framer-motion'; // or from 'motion'
 * import { createFadeAnimation } from 'rad-ui-fx';
 * 
 * const fadeVariants = createFadeAnimation({ duration: 0.8 });
 * 
 * function MyComponent() {
 *   return (
 *     <motion.div
 *       initial="hidden"
 *       animate="visible"
 *       variants={fadeVariants}
 *     >
 *       Fade me in!
 *     </motion.div>
 *   );
 * }
 * ```
 */
export const createFadeAnimation = (options: FadeOptions = {}): Variants => {
  const {
    duration = 0.5,
    initialOpacity = 0,
    finalOpacity = 1,
    easing = 'easeInOut',
  } = options;

  const transition = createTransition({ duration, ease: easing });

  return {
    hidden: {
      opacity: initialOpacity,
      transition,
    },
    visible: {
      opacity: finalOpacity,
      transition,
    },
  };
}; 