import React from 'react';
import { motion } from 'framer-motion'; // Could also use 'motion' package
import { createTransition } from '../../utils/motion-adapter';
import { FadeOptions, FadeProps } from './Fade.types';

/**
 * Creates fade animation variants for motion libraries
 *
 * @param options - Options to customize the fade animation
 * @returns Variants object for fade animations
 */
export const createFadeAnimation = (options: FadeOptions = {}) => {
  const { duration = 0.5, initialOpacity = 0, finalOpacity = 1, easing = 'easeInOut', delay = 0 } = options;

  const transition = createTransition({ duration, ease: easing, delay });

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

/**
 * A component that applies fade animation to its children
 */
export const Fade: React.FC<FadeProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  className = '',
  initialOpacity = 0,
  finalOpacity = 1,
  easing = 'easeInOut',
  style = {},
}) => {
  const fadeVariants = createFadeAnimation({
    duration,
    initialOpacity,
    finalOpacity,
    easing,
    delay,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      transition={{ delay }}
      className={`rad-fade ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};
