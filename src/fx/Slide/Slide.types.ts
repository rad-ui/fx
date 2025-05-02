import React from 'react';
import { Variants } from '../../utils/motion-adapter';

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

  /**
   * Delay before the animation starts in seconds
   * @default 0
   */
  delay?: number;
}

/**
 * Props for the Slide component
 */
export interface SlideProps {
  /**
   * The content to be displayed inside the component
   */
  children: React.ReactNode;

  /**
   * Direction from which to slide in
   * @default 'up'
   */
  direction?: SlideDirection;

  /**
   * Distance of the slide animation in pixels
   * @default 50
   */
  distance?: number;

  /**
   * Duration of the slide animation in seconds
   * @default 0.5
   */
  duration?: number;

  /**
   * Delay before the animation starts in seconds
   * @default 0
   */
  delay?: number;

  /**
   * CSS class names to apply to the component
   */
  className?: string;

  /**
   * Easing function to use
   * @default "easeInOut"
   */
  easing?: string;

  /**
   * Additional style properties to apply
   */
  style?: React.CSSProperties;
} 