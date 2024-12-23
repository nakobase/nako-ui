import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleGroup> = {
  argTypes: {},
  component: ToggleGroup,
  tags: ['autodocs'],
  title: 'components/ui/ToggleGroup',
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <Bold className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <Italic className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <Underline className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Single: Story = {
  args: {
    type: 'single',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <Bold className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <Italic className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <Underline className="nako-h-4 nako-w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
