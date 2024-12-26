import { Progress } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  argTypes: {},
  component: Progress,
  tags: ['autodocs'],
  title: 'components/ui/Progress',
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 20,
  },
  render: (args) => <Progress className="nako-w-[60%]" value={args.value} />,
};
