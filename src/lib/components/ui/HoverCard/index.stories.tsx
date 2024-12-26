import { HoverCard, HoverCardContent, HoverCardTrigger } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HoverCard> = {
  argTypes: {},
  component: HoverCard,
  tags: ['autodocs'],
  title: 'components/ui/HoverCard',
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  ),
};
