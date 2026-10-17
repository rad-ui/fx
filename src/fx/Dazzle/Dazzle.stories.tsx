import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dazzle, { DazzleProps } from './';

const meta = {
  title: 'FX/Dazzle',
  component: Dazzle,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  decorators: [
    Story => (
      <div
        style={{
          background: '#0a0a0b',
          color: '#f4f4f5',
          padding: '80px 120px',
          borderRadius: 16,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: '-0.045em',
          lineHeight: 1,
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    beat: { control: { type: 'range', min: 0.5, max: 4, step: 0.1 } },
    delay: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    sparkles: { control: { type: 'range', min: 0, max: 9, step: 1 } },
  },
} satisfies Meta<DazzleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'dazzle.' },
};

export const FastBeat: Story = {
  args: { children: 'hype!', beat: 1 },
};

export const CustomColors: Story = {
  args: { children: 'fresh', colors: ['#34d399', '#22d3ee', '#a3e635', '#fde047'] },
};

export const Minimal: Story = {
  args: { children: 'quiet', sparkles: false, swoosh: false },
};

export const InAHeadline: StoryObj = {
  render: () => (
    <h1 style={{ margin: 0, textAlign: 'center', fontSize: 56, whiteSpace: 'nowrap' }}>
      Make your marketing
      <br />
      <Dazzle>dazzle.</Dazzle>
    </h1>
  ),
};
