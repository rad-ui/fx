import React from 'react';
import { motion } from 'framer-motion'; // Could also use 'motion' package
import { createTransition } from '../../utils/motion-adapter';
import { SlideOptions, SlideProps } from './Slide.types';

/**
 * Creates slide animation variants
 *
 * @param options - Options to customize the slide animation
 * @returns Variants object for slide animations
 */
export const createSlideAnimation = (options: SlideOptions = {}) => {
  const { direction = 'up', distance = 50, duration = 0.5, easing = 'easeInOut' } = options;

  const getDirectionalProperties = (): { x?: number; y?: number } => {
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

/**
 * A component that applies slide animation to its children
 */
export const Slide: React.FC<SlideProps> = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.5,
  delay = 0,
  easing = 'easeInOut',
  ...props
}) => {
  const slideVariants = createSlideAnimation({
    direction,
    distance,
    duration,
    easing,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={{ delay }}
      {...props}
    >
      <div>{children}</div>
    </motion.div>
  );
};
