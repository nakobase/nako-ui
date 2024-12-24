import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'components/ui/Select',
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};
