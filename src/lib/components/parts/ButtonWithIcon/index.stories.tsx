import { Mail } from 'lucide-react';
import { ButtonWithIcon } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonWithIcon> = {
  argTypes: {},
  component: ButtonWithIcon,
  tags: ['autodocs'],
  title: 'components/parts/ButtonWithIcon',
};

export default meta;

type Story = StoryObj<typeof ButtonWithIcon>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <ButtonWithIcon {...args} icon={<Mail />}>
      Login with Email
    </ButtonWithIcon>
  ),
};
