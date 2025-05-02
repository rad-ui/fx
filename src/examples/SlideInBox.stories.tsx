import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SlideInBox } from './SlideInBox';

const meta = {
    title: 'Animations/SlideInBox',
    component: SlideInBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['up', 'down', 'left', 'right']
        },
        distance: { control: { type: 'range', min: 10, max: 300, step: 10 } },
        duration: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
        delay: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    },
} satisfies Meta<typeof SlideInBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FromBottom: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slide In From Bottom</div>,
        direction: 'up',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromTop: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slide In From Top</div>,
        direction: 'down',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromLeft: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slide In From Left</div>,
        direction: 'left',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromRight: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slide In From Right</div>,
        direction: 'right',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const LongDistance: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Long Distance Slide</div>,
        direction: 'left',
        distance: 200,
        duration: 0.8,
        delay: 0,
    },
};

export const SlowMotion: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slow Motion Slide</div>,
        direction: 'up',
        distance: 50,
        duration: 2,
        delay: 0,
    },
}; 