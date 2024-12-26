import { Calendar } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  argTypes: {},
  component: Calendar,
  tags: ['autodocs'],
  title: 'components/ui/Calendar',
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
  render: () => (
    <Calendar
      className="rounded-md border"
      mode="single"
      selected={new Date()}
      onSelect={() => {}}
    />
  ),
};
