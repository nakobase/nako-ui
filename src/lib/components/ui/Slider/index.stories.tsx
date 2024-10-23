import { Slider } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slider> = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'components/ui/Slider',
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
  },
  render: (args) => <Slider {...args} />,
};
