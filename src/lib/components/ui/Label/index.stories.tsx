import { Label } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/Checkbox';

const meta: Meta<typeof Label> = {
  argTypes: {},
  component: Label,
  tags: ['autodocs'],
  title: 'components/ui/Label',
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="nako-flex nako-items-center nako-space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
