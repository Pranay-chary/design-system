import React from 'react';
import { useTheme } from '../../../theme/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps {
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Aria label for accessibility
   */
  ariaLabel?: string;
}

/**
 * ThemeToggle component for switching between light and dark modes
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  ariaLabel = 'Toggle theme',
}) => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleColorMode}
      className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        hover:bg-accent hover:text-accent-foreground
        ${colorMode === 'dark' ? 'bg-muted text-primary' : 'bg-muted text-primary'}
        ${className}`}
      aria-label={ariaLabel}
    >
      {colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      <span className="sr-only">
        {colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
}; 