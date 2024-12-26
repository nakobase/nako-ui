import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContextMenu> = {
  argTypes: {},
  component: ContextMenu,
  tags: ['autodocs'],
  title: 'components/ui/ContextMenu',
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {},
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
