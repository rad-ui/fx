import React from 'react';
import { motion } from 'framer-motion'; // Could also use 'motion' package
import { createFadeAnimation } from '../animations/fade';

interface FadeInBoxProps {
    /**
     * The content to be displayed inside the box
     */
    children: React.ReactNode;

    /**
     * Duration of the fade animation in seconds
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
 * A simple box component that fades in when it appears
 */
export const FadeInBox: React.FC<FadeInBoxProps> = ({
    children,
    duration = 0.5,
    delay = 0,
    className = '',
}) => {
    const fadeVariants = createFadeAnimation({ duration });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            transition={{ delay }}
            className={`rad-fade-box ${className}`}
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