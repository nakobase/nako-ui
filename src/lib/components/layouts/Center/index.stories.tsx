import { Center } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Center> = {
  argTypes: {},
  component: Center,
  tags: ['autodocs'],
  title: 'components/layouts/Center',
};

export default meta;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  args: {
    className: 'nako-h-20 nako-border',
  },
  render: (args) => (
    <Center {...args}>
      <Button>Center</Button>
    </Center>
  ),
};

export const VerticalCenter: Story = {
  args: {
    className: 'nako-h-20 nako-border',
    verticalCenter: true,
  },
  render: (args) => (
    <Center {...args}>
      <Button>Center</Button>
    </Center>
  ),
};
