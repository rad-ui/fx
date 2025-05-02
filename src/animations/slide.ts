/**
 * Slide animation variants using either motion or framer-motion
 */
import { Variants, createTransition } from '../utils/motion-adapter';

/**
 * Direction for the slide animation
 */
export type SlideDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Options for customizing the slide animation
 */
export interface SlideOptions {
  /**
   * Direction of the slide
   * @default 'up'
   */
  direction?: SlideDirection;
  
  /**
   * Distance to slide in pixels
   * @default 50
   */
  distance?: number;
  
  /**
   * Duration of the animation in seconds
   * @default 0.5
   */
  duration?: number;
  
  /**
   * Easing function to use
   * @default "easeInOut"
   */
  easing?: string;
}

/**
 * Creates slide animation variants
 * 
 * @param options - Options to customize the slide animation
 * @returns Variants object for slide animations
 * 
 * @example
 * ```tsx
 * import { motion } from 'framer-motion'; // or from 'motion'
 * import { createSlideAnimation } from 'rad-ui-fx';
 * 
 * const slideVariants = createSlideAnimation({ direction: 'left', distance: 100 });
 * 
 * function MyComponent() {
 *   return (
 *     <motion.div
 *       initial="hidden"
 *       animate="visible"
 *       variants={slideVariants}
 *     >
 *       Slide me in!
 *     </motion.div>
 *   );
 * }
 * ```
 */
export const createSlideAnimation = (options: SlideOptions = {}): Variants => {
  const {
    direction = 'up',
    distance = 50,
    duration = 0.5,
    easing = 'easeInOut',
  } = options;

  const getDirectionalProperties = (): {x?: number, y?: number} => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const directionProps = getDirectionalProperties();
  const transition = createTransition({ duration, ease: easing });

  return {
    hidden: {
      opacity: 0,
      ...directionProps,
      transition,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };
}; 