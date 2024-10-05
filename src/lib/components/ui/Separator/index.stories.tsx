import { Separator } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Separator> = {
  argTypes: {},
  component: Separator,
  tags: ['autodocs'],
  title: 'components/ui/Separator',
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    className: 'nako-my-4',
  },
  render: (args) => <Separator {...args} />,
};
