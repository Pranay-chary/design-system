import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Design System/Theme/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle button component that allows users to switch between light and dark themes.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-6 flex items-center justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the toggle button',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the toggle button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Switch color theme',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  },
}; 