import { Tooltip } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Tooltip> = {
  argTypes: {},
  component: Tooltip,
  tags: ['autodocs'],
  title: 'components/parts/Tooltip',
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip content',
    trigger: <Button variant="outline">Hover</Button>,
  },
  render: (args) => <Tooltip {...args} />,
};
