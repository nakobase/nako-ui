import { Carousel } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  argTypes: {},
  component: Carousel,
  tags: ['autodocs'],
  title: 'components/parts/Carousel',
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const ImageItem = () => (
  <div className="nako-p-1">
    <img
      alt="placeholder"
      height={150}
      src="https://placehold.jp/150x150.png"
      width={150}
    />
  </div>
);

export const Default: Story = {
  args: {
    items: [
      <ImageItem key="1" />,
      <ImageItem key="2" />,
      <ImageItem key="3" />,
    ],
  },
  render: (args) => (
    <div className="nako-mx-auto nako-max-w-xs">
      <Carousel {...args} />
    </div>
  ),
};
