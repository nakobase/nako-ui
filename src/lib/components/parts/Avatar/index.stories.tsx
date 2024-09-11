import { Avatar } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'components/parts/Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: '@shadcn',
    fallback: 'CN',
    src: 'https://github.com/shadcn.png',
  },
  render: (args) => <Avatar {...args} />,
};

export const Fallback: Story = {
  args: {
    alt: 'nako-ui',
    fallback: 'NK',
    src: 'invalid.png',
  },
  render: (args) => <Avatar {...args} />,
};
