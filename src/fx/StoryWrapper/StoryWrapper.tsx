import React, { useState } from 'react';
import Theme from "@radui/ui/Theme"
import Button from "@radui/ui/Button"

interface StoryWrapperProps {
    /**
     * The story content to be rendered
     */
    children: React.ReactNode;
}

/**
 * A wrapper component for all Storybook stories
 * This provides consistent styling and context for all stories
 */
export const StoryWrapper: React.FC<StoryWrapperProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
        <Theme appearance={theme} accentColor="gray" style={{ width: '88vw', height: '100vh', padding: '20px', backgroundColor: 'var(--rad-ui-color-gray-100)' }}>
            <Button variant="soft" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </Button>

            <div style={{ marginTop: '20px' }}>
                {children}
            </div>
        </Theme>
    );
}; 