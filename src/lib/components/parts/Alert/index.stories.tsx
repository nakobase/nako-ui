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
    variant: 'normal',
  },
  render: (args) => <Alert {...args} />,
};

export const Info: Story = {
  args: {
    description: 'This is a message.',
    title: 'Heads up!',
    variant: 'info',
  },
  render: (args) => <Alert {...args} />,
};

export const Danger: Story = {
  args: {
    description: 'This is a message.',
    title: 'Heads up!',
    variant: 'danger',
  },
  render: (args) => <Alert {...args} />,
};

export const Success: Story = {
  args: {
    description: 'This is a message.',
    title: 'Heads up!',
    variant: 'success',
  },
  render: (args) => <Alert {...args} />,
};

export const Warning: Story = {
  args: {
    description: 'This is a message.',
    title: 'Heads up!',
    variant: 'warning',
  },
  render: (args) => <Alert {...args} />,
};
