import { Alert } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  argTypes: {},
  component: Alert,
  tags: ['autodocs'],
  title: 'components/parts/Alert',
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    description: 'This is a message.',
    title: 'Heads up!',
    variant: 'info',
  },
  render: (args) => <Alert {...args} />,
};
