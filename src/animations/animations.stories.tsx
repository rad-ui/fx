import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createFadeAnimation, createSlideAnimation } from '../index';
import type { Meta, StoryObj } from '@storybook/react';

interface AnimationDemoProps {
    type: 'fade' | 'slide';
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    distance?: number;
    repeat?: boolean;
}

const AnimationDemo: React.FC<AnimationDemoProps> = ({
    type,
    direction = 'up',
    duration = 0.5,
    distance = 50,
    repeat = false,
}) => {
    const [key, setKey] = useState(0);

    const fadeVariants = createFadeAnimation({ duration });
    const slideVariants = createSlideAnimation({ direction, distance, duration });

    const handleReplay = () => {
        setKey(prev => prev + 1);
    };

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '20px', minHeight: '100px', display: 'flex', alignItems: 'center' }}>
                {type === 'fade' ? (
                    <motion.div
                        key={key}
                        initial="hidden"
                        animate="visible"
                        variants={fadeVariants}
                        style={{
                            padding: '20px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    >
                        Fade Animation Example
                    </motion.div>
                ) : (
                    <motion.div
                        key={key}
                        initial="hidden"
                        animate="visible"
                        variants={slideVariants}
                        style={{
                            padding: '20px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    >
                        Slide {direction} Animation Example
                    </motion.div>
                )}
            </div>

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

const meta = {
    title: 'Animations/Core Utilities',
    component: AnimationDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['fade', 'slide'],
            description: 'The type of animation to display'
        },
        direction: {
            control: 'select',
            options: ['up', 'down', 'left', 'right'],
            description: 'The direction for slide animation',
            if: { arg: 'type', eq: 'slide' }
        },
        duration: {
            control: { type: 'range', min: 0.1, max: 3, step: 0.1 },
            description: 'Duration of the animation in seconds'
        },
        distance: {
            control: { type: 'range', min: 10, max: 300, step: 10 },
            description: 'Distance for slide animation in pixels',
            if: { arg: 'type', eq: 'slide' }
        },
    },
} satisfies Meta<typeof AnimationDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeAnimation: Story = {
    args: {
        type: 'fade',
        duration: 0.5,
    },
};

export const SlideFromBottom: Story = {
    args: {
        type: 'slide',
        direction: 'up',
        distance: 50,
        duration: 0.5,
    },
};

export const SlideFromLeft: Story = {
    args: {
        type: 'slide',
        direction: 'left',
        distance: 100,
        duration: 0.7,
    },
}; 