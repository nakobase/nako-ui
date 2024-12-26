import { RadioGroup, RadioGroupItem } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/Label';

const meta: Meta<typeof RadioGroup> = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'components/ui/RadioGroup',
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {},
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="nako-flex nako-items-center nako-space-x-2">
        <RadioGroupItem id="r1" value="default" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="nako-flex nako-items-center nako-space-x-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="nako-flex nako-items-center nako-space-x-2">
        <RadioGroupItem id="r3" value="compact" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};
