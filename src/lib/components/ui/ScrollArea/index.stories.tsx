import { ScrollArea } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollArea> = {
  argTypes: {},
  component: ScrollArea,
  tags: ['autodocs'],
  title: 'components/ui/ScrollArea',
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {},
  render: () => (
    <ScrollArea className="nako-h-[200px] nako-w-[350px] nako-rounded-md nako-border nako-p-4">
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop.
    </ScrollArea>
  ),
};
