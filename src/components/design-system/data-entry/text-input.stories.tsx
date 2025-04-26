
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './text-input';
import { Mail, Lock, Search } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    hasError: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email',
    placeholder: 'Enter your email',
    type: 'email'
  }
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hasError: true,
    error: 'Password must be at least 8 characters',
    placeholder: 'Enter your password'
  }
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <TextInput
        label="Email"
        placeholder="Enter your email"
        leadingIcon={<Mail className="w-4 h-4" />}
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        leadingIcon={<Lock className="w-4 h-4" />}
      />
      <TextInput
        label="Search"
        placeholder="Search..."
        trailingIcon={<Search className="w-4 h-4" />}
      />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TextInput
        size="sm"
        label="Small Input"
        placeholder="Small size"
      />
      <TextInput
        size="md"
        label="Medium Input"
        placeholder="Medium size"
      />
      <TextInput
        size="lg"
        label="Large Input"
        placeholder="Large size"
      />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <TextInput
        label="Disabled Input"
        placeholder="This input is disabled"
        disabled
      />
      <TextInput
        label="Full Width Input"
        placeholder="This input takes full width"
        fullWidth
      />
    </div>
  )
};

