import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menubar> = {
  argTypes: {},
  component: Menubar,
  tags: ['autodocs'],
  title: 'components/ui/Menubar',
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {},
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
