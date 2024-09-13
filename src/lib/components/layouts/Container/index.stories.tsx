import { Container } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  argTypes: {},
  component: Container,
  tags: ['autodocs'],
  title: 'components/layouts/Container',
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    as: 'div',
    className: 'nako-bg-secondary nako-p-4',
  },
  render: (args) => <Container {...args}>Container</Container>,
};
