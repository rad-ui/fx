import React from 'react';
import { motion } from 'framer-motion'; // Could also use 'motion' package
import { createSlideAnimation, SlideDirection } from '../animations/slide';

interface SlideInBoxProps {
    /**
     * The content to be displayed inside the box
     */
    children: React.ReactNode;

    /**
     * Direction from which the box will slide in
     * @default 'up'
     */
    direction?: SlideDirection;

    /**
     * Distance of the slide animation in pixels
     * @default 50
     */
    distance?: number;

    /**
     * Duration of the slide animation in seconds
     * @default 0.5
     */
    duration?: number;

    /**
     * Delay before the animation starts in seconds
     * @default 0
     */
    delay?: number;

    /**
     * CSS class names to apply to the box
     */
    className?: string;
}

/**
 * A simple box component that slides in when it appears
 */
export const SlideInBox: React.FC<SlideInBoxProps> = ({
    children,
    direction = 'up',
    distance = 50,
    duration = 0.5,
    delay = 0,
    className = '',
}) => {
    const slideVariants = createSlideAnimation({
        direction,
        distance,
        duration
    });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            transition={{ delay }}
            className={`rad-slide-box ${className}`}
            style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            {children}
        </motion.div>
    );
}; 