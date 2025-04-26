
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Design System/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl']
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'semibold', 'bold']
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'label', 'caption', 'helper']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text',
    size: 'base'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="base">Base Text</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
    </div>
  )
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light Weight</Text>
      <Text weight="regular">Regular Weight</Text>
      <Text weight="medium">Medium Weight</Text>
      <Text weight="semibold">Semibold Weight</Text>
      <Text weight="bold">Bold Weight</Text>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-2">
      <Text as="p">Paragraph Text</Text>
      <Text as="span">Span Text</Text>
      <Text as="label">Label Text</Text>
      <Text as="caption">Caption Text</Text>
      <Text as="helper" muted>Helper Text</Text>
    </div>
  )
};
