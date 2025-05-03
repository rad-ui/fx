import React, { useState, ReactNode } from 'react';
// These imports are mocked for Storybook - replace with actual imports in your project

// Mock interfaces for Theme and Button props
interface ThemeProps {
  children: ReactNode;
  appearance: 'light' | 'dark';
  accentColor: string;
  style?: React.CSSProperties;
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'soft' | 'solid';
  onClick: () => void;
}

// These components are mocked for Storybook - replace with actual imports in your project
const Theme: React.FC<ThemeProps> = ({ children, style }) => <div style={style}>{children}</div>;

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 16px',
      backgroundColor: variant === 'soft' ? '#f0f0f0' : '#007bff',
      color: variant === 'soft' ? '#333' : 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

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
    <Theme
      appearance={theme}
      accentColor="gray"
      style={{
        width: '88vw',
        height: '100vh',
        padding: '20px',
        backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
      }}
    >
      <Button variant="soft" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </Button>

      <div style={{ marginTop: '20px', color: theme === 'light' ? '#212529' : '#f8f9fa' }}>
        {children}
      </div>
    </Theme>
  );
};
