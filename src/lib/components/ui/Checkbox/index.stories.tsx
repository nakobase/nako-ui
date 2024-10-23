import { Checkbox } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'components/ui/Checkbox',
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="nako-items-top nako-flex nako-space-x-2">
      <Checkbox {...args} id="terms1" />
      <div className="nako-grid nako-gap-1.5 nako-leading-none">
        <label
          className="nako-peer-disabled:cursor-not-allowed nako-peer-disabled:opacity-70 nako-text-sm nako-font-medium nako-leading-none"
          htmlFor="terms1"
        >
          Accept terms and conditions
        </label>
        <p className="nako-text-sm nako-text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};
