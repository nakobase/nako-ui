import { AlertDialog } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof AlertDialog> = {
  argTypes: {},
  component: AlertDialog,
  tags: ['autodocs'],
  title: 'components/parts/AlertDialog',
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    actionText: 'Delete',
    cancelText: 'Cancel',
    description:
      'This action cannot be undone. This will permanently delete the file.',
    title: 'Are you absolutely sure?',
    triggerContent: <Button variant="outline">Show Dialog</Button>,
  },
  render: (args) => <AlertDialog {...args} />,
};
