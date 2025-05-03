import React from 'react';
import StoryWrapper from '../src/storybookUtils/StoryWrapper';
import "@radui/ui/themes/default.css";
import "./main.css";

// Decorator function to wrap all stories with the StoryWrapper component
const withStoryWrapper = (Story) => (
  <StoryWrapper>
    <Story />
  </StoryWrapper>
);

const preview = {
  decorators: [withStoryWrapper],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8f9fa',
        },
        {
          name: 'dark',
          value: '#343a40',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    docs: {
      toc: false,
      source: {
        excludeDecorators: true,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'FX', ['Combined Animations', 'Fade', 'Slide', '*']],
      },
    },
  },
};

export default preview; 