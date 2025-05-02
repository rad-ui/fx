import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryWrapper } from './StoryWrapper';
import { Fade } from '../Fade/Fade';
import { Slide } from '../Slide/Slide';

const meta = {
    title: 'FX/StoryWrapper',
    component: StoryWrapper,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A wrapper component for all stories that provides consistent styling and context.',
            },
        },
    },
    // This will disable the automatic wrapper from the decorator
    decorators: [
        (Story) => <div style={{ padding: '20px' }}><Story /></div>
    ],
} satisfies Meta<typeof StoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic demonstration of the wrapper
export const Default: Story = {
    args: {
        children: (
            <div>
                <h3>Sample Content</h3>
                <p>This is an example of content wrapped by the StoryWrapper component.</p>
            </div>
        ),
    },
};

// Show how it looks with animation components
export const WithAnimations: Story = {
    args: {
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Fade duration={0.5}>
                    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                        This content fades in
                    </div>
                </Fade>

                <Slide direction="left" distance={50} duration={0.5}>
                    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                        This content slides in from the left
                    </div>
                </Slide>
            </div>
        ),
    },
}; 