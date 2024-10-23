import { Textarea } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  argTypes: {},
  component: Textarea,
  tags: ['autodocs'],
  title: 'components/ui/Textarea',
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => <Textarea {...args} />,
};
