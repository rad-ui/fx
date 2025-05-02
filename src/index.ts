/**
 * rad-ui-fx
 * A UI effects library for modern web applications
 */

// Export animation functions
export * from './animations/fade';
export * from './animations/slide';

// Export utility functions
export * from './utils/motion-adapter';

// Export example components
export * from './examples/FadeInBox';
export * from './examples/SlideInBox';

// Basic hello function (can be removed in future)
export const hello = (): string => {
  return 'Hello from rad-ui-fx!';
};

// Export additional functions, classes, or components here 