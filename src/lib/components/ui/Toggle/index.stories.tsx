import { Bold } from 'lucide-react';
import { Toggle } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toggle> = {
  argTypes: {},
  component: Toggle,
  tags: ['autodocs'],
  title: 'components/ui/Toggle',
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    size: 'default',
    variant: 'default',
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="nako-h-4 nako-w-4" />
    </Toggle>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="nako-h-4 nako-w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="nako-h-4 nako-w-4" />
      Bold
    </Toggle>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="nako-h-4 nako-w-4" />
    </Toggle>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="nako-h-4 nako-w-4" />
    </Toggle>
  ),
};
