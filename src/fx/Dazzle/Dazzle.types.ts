import React from 'react';

/**
 * Four colours the letters cycle through, in order
 */
export type DazzleColors = [string, string, string, string];

/**
 * Props for the Dazzle component
 */
export interface DazzleProps {
  /**
   * The word or short phrase to dazzle. A string is split into letters that animate one by one;
   * anything else gets the colour wave as a whole.
   */
  children: React.ReactNode;

  /**
   * Colours the wave runs through
   * @default ['#6ea8ff', '#a78bfa', '#f472b6', '#fbbf24']
   */
  colors?: DazzleColors;

  /**
   * Seconds between beats: each beat ripples a hop across the letters
   * @default 2
   */
  beat?: number;

  /**
   * Twinkling sparkles around the text, or how many (up to 9)
   * @default true
   */
  sparkles?: boolean | number;

  /**
   * Draw a gradient swoosh under the text
   * @default true
   */
  swoosh?: boolean;

  /**
   * Seconds before the letters start dropping in
   * @default 0
   */
  delay?: number;

  /**
   * CSS class names to apply to the component
   */
  className?: string;

  /**
   * Additional style properties to apply
   */
  style?: React.CSSProperties;
}
