import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ColorMode, lightTheme, darkTheme } from './theme-config';

type ThemeContextType = {
  colorMode: ColorMode;
  theme: typeof lightTheme | typeof darkTheme;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
};

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  theme: lightTheme,
  setColorMode: () => {},
  toggleColorMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  defaultColorMode?: ColorMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorMode = 'light',
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    // Get color mode from localStorage if available
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('color-mode') as ColorMode;
      return savedMode || defaultColorMode;
    }
    return defaultColorMode;
  });

  const theme = colorMode === 'light' ? lightTheme : darkTheme;

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Update localStorage when color mode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('color-mode', colorMode);
      
      // Update data-theme attribute on document for CSS selectors
      document.documentElement.setAttribute('data-theme', colorMode);
      
      // Add or remove dark class for Tailwind
      if (colorMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [colorMode]);

  // Check for user's system preference on initial load
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (!window.localStorage.getItem('color-mode')) {
      setColorMode(mediaQuery.matches ? 'dark' : 'light');
    }
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!window.localStorage.getItem('color-mode')) {
        setColorMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    colorMode,
    theme,
    setColorMode,
    toggleColorMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 