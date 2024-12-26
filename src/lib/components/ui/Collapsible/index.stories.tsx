import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible> = {
  argTypes: {},
  component: Collapsible,
  tags: ['autodocs'],
  title: 'components/ui/Collapsible',
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
  render: () => (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};
