import { Textarea } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  argTypes: {},
  component: Textarea,
  tags: ['autodocs'],
  title: 'components/parts/Textarea',
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: 'message',
    label: 'Message',
    message: 'Your message will be copied to the support team.',
    placeholder: 'Type your message here.',
  },
  render: (args) => <Textarea {...args} />,
};

export const WithoutMessage: Story = {
  args: {
    id: 'message',
    label: 'Message',
    placeholder: 'Type your message here.',
  },
  render: (args) => <Textarea {...args} />,
};
