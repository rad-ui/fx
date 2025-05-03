import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Fade, { createFadeAnimation, FadeProps } from './';
import { motion } from 'framer-motion';

const meta = {
  title: 'FX/Fade',
  component: Fade,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    duration: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
    delay: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    initialOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    finalOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    easing: {
      control: 'select',
      options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'circInOut'],
    },
  },
} satisfies Meta<FadeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Fade component story
export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        Fade Animation
      </div>
    ),
    duration: 0.5,
    delay: 0,
  },
};

export const SlowFade: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        Slow Fade Animation
      </div>
    ),
    duration: 2,
    delay: 0,
  },
};

export const DelayedFade: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        Delayed Fade Animation
      </div>
    ),
    duration: 0.5,
    delay: 2,
  },
};

// Story demonstrating the createFadeAnimation utility
export const FadeUtility: StoryObj = {
  render: () => {
    // Define this as a separate named component to fix the React Hook rules
    const FadeUtilityDemo = () => {
      const [key, setKey] = React.useState(0);
      const fadeVariants = createFadeAnimation({ duration: 0.8 });

      const handleReplay = () => {
        setKey(prev => prev + 1);
      };

      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
        >
          <motion.div
            key={key}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            style={{
              padding: '30px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            Using createFadeAnimation utility
          </motion.div>

          <button
            onClick={handleReplay}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Replay Animation
          </button>
        </div>
      );
    };

    return <FadeUtilityDemo />;
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <h2>Custom Content</h2>
        <p>This is a paragraph with custom content to demonstrate the fade effect.</p>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            background: '#007bff',
            color: 'white',
            border: 'none',
          }}
        >
          Call to Action
        </button>
      </div>
    ),
    duration: 0.8,
    delay: 0.2,
  },
};
