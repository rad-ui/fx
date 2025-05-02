import React from 'react';
import { Variants } from '../../utils/motion-adapter';

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

  /**
   * Delay before the animation starts in seconds
   * @default 0
   */
  delay?: number;
}

/**
 * Props for the Fade component
 */
export interface FadeProps {
  /**
   * The content to be displayed inside the component
   */
  children: React.ReactNode;

  /**
   * Duration of the fade animation in seconds
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

  /**
   * Additional style properties to apply
   */
  style?: React.CSSProperties;
} 