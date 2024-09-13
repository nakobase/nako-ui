import { Badge } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  argTypes: {},
  component: Badge,
  tags: ['autodocs'],
  title: 'components/ui/Badge',
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  name: 'variant - default',
  render: (args) => <Badge {...args}>Button</Badge>,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  name: 'variant - destructive',
  render: (args) => <Badge {...args}>Button</Badge>,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  name: 'variant - outline',
  render: (args) => <Badge {...args}>Button</Badge>,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  name: 'variant - secondary',
  render: (args) => <Badge {...args}>Button</Badge>,
};
