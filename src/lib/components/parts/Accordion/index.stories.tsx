import { Accordion } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  argTypes: {},
  component: Accordion,
  tags: ['autodocs'],
  title: 'components/parts/Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        content: 'First item content',
        title: 'First item',
        value: '1',
      },
      {
        content: 'Second item content',
        title: 'Second item',
        value: '2',
      },
    ],
  },
  render: (args) => <Accordion {...args} />,
};

export const Multiple: Story = {
  args: {
    behavior: 'multiple',
    items: [
      {
        content: 'First item content',
        title: 'First item',
        value: '1',
      },
      {
        content: 'Second item content',
        title: 'Second item',
        value: '2',
      },
    ],
  },
  render: (args) => <Accordion {...args} />,
};
