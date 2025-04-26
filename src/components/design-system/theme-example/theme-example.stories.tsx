import type { Meta, StoryObj } from '@storybook/react';
import { ThemeExample } from './theme-example';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof ThemeExample> = {
  title: 'Design System/Theme/ThemeExample',
  component: ThemeExample,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component that showcases the current theme configuration with light and dark mode support.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-6 w-full max-w-3xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeExample>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-muted',
  },
}; 