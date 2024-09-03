import { ChevronRight } from 'lucide-react';
import { Button } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  argTypes: {},
  component: Button,
  tags: ['autodocs'],
  title: 'components/ui/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  name: 'variant - default',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  name: 'variant - destructive',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  name: 'variant - ghost',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
  name: 'variant - link',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  name: 'variant - outline',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  name: 'variant - secondary',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Icon: Story = {
  args: {
    size: 'icon',
  },
  name: 'size - icon',
  render: (args) => (
    <Button {...args}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  name: 'size - lg',
  render: (args) => <Button {...args}>Button</Button>,
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  name: 'size - sm',
  render: (args) => <Button {...args}>Button</Button>,
};
