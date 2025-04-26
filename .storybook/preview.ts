import type { Preview, ReactRenderer } from "@storybook/react";
import { StoryFn } from "@storybook/react";
import "../src/index.css"; // Import global styles
import "../src/theme/theme.css"; // Import theme styles
import { withThemeByClassName } from '@storybook/addon-themes';
import React from 'react';
import { ThemeProvider } from '../src/theme/ThemeProvider';

// Add ThemeProvider wrapper to all stories
const withThemeProvider = (Story: StoryFn) => React.createElement(ThemeProvider, {}, React.createElement(Story, {}));

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1A1F2C' },
      ],
    },
  },
  decorators: [
    withThemeProvider,
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
