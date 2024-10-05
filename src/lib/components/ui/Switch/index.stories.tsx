import { Switch } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/Label';

const meta: Meta<typeof Switch> = {
  argTypes: {},
  component: Switch,
  tags: ['autodocs'],
  title: 'components/ui/Switch',
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="nako-flex nako-items-center nako-space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
