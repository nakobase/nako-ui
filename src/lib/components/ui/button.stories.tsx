import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  argTypes: {},
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args) => <Button {...args}>Button</Button>,
};
