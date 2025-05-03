import React, { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Slide, { createSlideAnimation, SlideProps } from './';
import { motion } from 'framer-motion';

interface HeadingProps {
    children: ReactNode;
    style?: React.CSSProperties;
}

// Mock Heading component for Storybook
const Heading: React.FC<HeadingProps> = ({ children, style }) => (
    <h2 style={style}>{children}</h2>
);

const meta = {
    title: 'FX/Slide',
    component: Slide,
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
        easing: {
            control: 'select',
            options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'circInOut']
        },
    },
} satisfies Meta<SlideProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const Card = () => {
    return (
        <div style={{ padding: '4px 20px', backgroundColor: "#f0f0f0", borderRadius: '8px' }}>
            <Heading style={{ color: "#333" }}>Meira and Anoushkha</Heading>
        </div>
    )
}

// Basic Slide component stories
export const FromBottom: Story = {
    args: {
        children: <Card />,
        direction: 'up',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromTop: Story = {
    args: {
        children: <Card />,
        direction: 'down',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromLeft: Story = {
    args: {
        children: <Card />,
        direction: 'left',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const FromRight: Story = {
    args: {
        children: <Card />,
        direction: 'right',
        distance: 50,
        duration: 0.5,
        delay: 0,
    },
};

export const LongDistance: Story = {
    args: {
        children: <Card />,
        direction: 'left',
        distance: 200,
        duration: 0.8,
        delay: 0,
    },
};

export const SlowMotion: Story = {
    args: {
        children: <Card />,
        direction: 'up',
        distance: 50,
        duration: 2,
        delay: 0,
    },
};

// Story demonstrating the createSlideAnimation utility
export const SlideUtility: StoryObj = {
    render: () => {
        const [key, setKey] = React.useState(0);
        const slideVariants = createSlideAnimation({
            direction: 'left',
            distance: 100,
            duration: 0.8
        });

        const handleReplay = () => {
            setKey(prev => prev + 1);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <motion.div
                    key={key}
                    initial="hidden"
                    animate="visible"
                    variants={slideVariants}
                    style={{
                        padding: '30px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    Using createSlideAnimation utility
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
    }
}; 