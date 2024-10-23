import { Input } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'components/ui/Input',
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
  render: (args) => <Input {...args} />,
};
