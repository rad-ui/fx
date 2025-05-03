import React from 'react';
import { StoryObj } from '@storybook/react';
import StoryWrapper from './';
import Fade from '../Fade';
import Slide from '../Slide';

export default {
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
};

// Basic demonstration of the wrapper
export const Default: StoryObj = {
    render: () => (
        <StoryWrapper>
            <div>
                <h3>Sample Content</h3>
                <p>This is an example of content wrapped by the StoryWrapper component.</p>
            </div>
        </StoryWrapper>
    ),
};

// Show how it looks with animation components
export const WithAnimations: StoryObj = {
    render: () => (
        <StoryWrapper>
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
        </StoryWrapper>
    ),
}; 