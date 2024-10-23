import { AspectRatio } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AspectRatio> = {
  argTypes: {},
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'components/ui/AspectRatio',
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <AspectRatio className="nako-bg-muted" ratio={args.ratio}>
      <img
        alt="Photo by Drew Beamer"
        className="nako-h-full nako-w-full nako-rounded-md nako-object-cover"
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      />
    </AspectRatio>
  ),
};
