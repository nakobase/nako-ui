import { Container } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  argTypes: {},
  component: Container,
  tags: ['autodocs'],
  title: 'Components/Layouts/Container',
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    as: 'div',
  },
  render: (args) => <Container {...args}>Container</Container>,
};
