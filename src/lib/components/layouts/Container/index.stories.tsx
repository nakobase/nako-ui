import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Container> = {
  title: 'Layouts/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Container>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => <Container {...args}>Container</Container>,
  args: {
    style: { backgroundColor: 'gray' },
  },
};
