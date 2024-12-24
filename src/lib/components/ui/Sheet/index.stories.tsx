import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sheet> = {
  argTypes: {},
  component: Sheet,
  tags: ['autodocs'],
  title: 'components/ui/Sheet',
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {},
  render: () => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
