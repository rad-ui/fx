import type { Preview } from '@storybook/react'

const preview: Preview = {
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
      toc: true,
      source: {
        excludeDecorators: true,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Animations', ['Core Utilities', '*']],
      },
    },
  },
};

export default preview;