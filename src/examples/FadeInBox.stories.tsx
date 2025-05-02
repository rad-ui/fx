import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FadeInBox } from './FadeInBox';

const meta = {
    title: 'Animations/FadeInBox',
    component: FadeInBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        duration: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
        delay: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    },
} satisfies Meta<typeof FadeInBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Fade In Animation</div>,
        duration: 0.5,
        delay: 0,
    },
};

export const SlowFade: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Slow Fade Animation</div>,
        duration: 2,
        delay: 0,
    },
};

export const DelayedFade: Story = {
    args: {
        children: <div style={{ padding: '20px', textAlign: 'center' }}>Delayed Fade Animation</div>,
        duration: 0.5,
        delay: 1,
    },
};

export const CustomContent: Story = {
    args: {
        children: (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Custom Content</h2>
                <p>This is a paragraph with custom content to demonstrate the fade effect.</p>
                <button style={{ padding: '8px 16px', borderRadius: '4px', background: '#007bff', color: 'white', border: 'none' }}>
                    Call to Action
                </button>
            </div>
        ),
        duration: 0.8,
        delay: 0.2,
    },
}; 