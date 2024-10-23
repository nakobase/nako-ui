import { Skeleton } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  argTypes: {},
  component: Skeleton,
  tags: ['autodocs'],
  title: 'components/ui/Skeleton',
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="nako-flex nako-items-center nako-space-x-2">
      <Skeleton className="nako-h-12 nako-w-12 nako-rounded-full" />
      <div className="nako-space-y-2">
        <Skeleton className="nako-h-4 nako-w-[250px]" />
        <Skeleton className="nako-h-4 nako-w-[200px]" />
      </div>
    </div>
  ),
};
