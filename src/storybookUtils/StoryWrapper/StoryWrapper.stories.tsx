import React from 'react';
import { StoryObj } from '@storybook/react';
import StoryWrapper from './';


export default {
  title: 'FX/StoryWrapper',
  component: StoryWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A wrapper component for all stories that provides consistent styling and context.',
      },
    },
  },
  // This will disable the automatic wrapper from the decorator
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

