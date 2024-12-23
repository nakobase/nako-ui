import { Toast, ToastAction } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';
import { Toaster } from '@/components/ui/Toaster';
import { toast } from '@/hooks/use-toast.ts';

const meta: Meta<typeof Toast> = {
  argTypes: {},
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  tags: ['autodocs'],
  title: 'components/ui/Toast',
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
          description: 'Friday, February 10, 2023 at 5:57 PM',
          title: 'Scheduled: Catch up ',
        });
      }}
    >
      Add to calendar
    </Button>
  ),
};

export const Simple: Story = {
  args: {},
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: 'Friday, February 10, 2023 at 5:57 PM',
        });
      }}
    >
      Add to calendar
    </Button>
  ),
};

export const WithAction: Story = {
  args: {},
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
          description: 'Friday, February 10, 2023 at 5:57 PM',
          title: 'Scheduled: Catch up ',
        });
      }}
    >
      Add to calendar
    </Button>
  ),
};

export const Destructive: Story = {
  args: {},
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  ),
};
