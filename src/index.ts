/**
 * rad-ui-fx
 * A UI effects library for modern web applications
 */

// Export animation functions
export * from './fx/Fade/Fade';
export * from './fx/Slide/Slide';

// Export utility functions
export * from './utils/motion-adapter';

// Export story components
export * from './fx/StoryWrapper/StoryWrapper';

// Basic hello function (can be removed in future)
export const hello = (): string => {
  return 'Hello from rad-ui-fx!';
};

// Export additional functions, classes, or components here 