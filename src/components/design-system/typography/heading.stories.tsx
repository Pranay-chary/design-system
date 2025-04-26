
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6]
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'semibold', 'bold']
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right']
    },
    truncate: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Default Heading'
  }
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  )
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={2} weight="light">Light Weight</Heading>
      <Heading level={2} weight="regular">Regular Weight</Heading>
      <Heading level={2} weight="medium">Medium Weight</Heading>
      <Heading level={2} weight="semibold">Semibold Weight</Heading>
      <Heading level={2} weight="bold">Bold Weight</Heading>
    </div>
  )
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={2} align="left">Left Aligned</Heading>
      <Heading level={2} align="center">Center Aligned</Heading>
      <Heading level={2} align="right">Right Aligned</Heading>
    </div>
  )
};

export const Truncated: Story = {
  args: {
    level: 2,
    truncate: true,
    children: 'This is a very long heading that will be truncated when it reaches the end of its container width to demonstrate the truncate functionality in action with an ellipsis at the end'
  }
};
