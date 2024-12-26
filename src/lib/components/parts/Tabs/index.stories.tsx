import { Tabs } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  argTypes: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'components/parts/Tabs',
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    contents: [<p>Account</p>, <p>Password</p>],
    triggers: ['Account', 'Password'],
  },
  render: (args) => <Tabs {...args} />,
};
