import { Popover, PopoverTrigger, PopoverContent } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover> = {
  argTypes: {},
  component: Popover,
  tags: ['autodocs'],
  title: 'components/ui/Popover',
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
