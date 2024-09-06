import { ChevronRight } from 'lucide-react';
import { ButtonIcon } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonIcon> = {
  argTypes: {},
  component: ButtonIcon,
  tags: ['autodocs'],
  title: 'components/parts/ButtonIcon',
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {},
  render: (args) => <ButtonIcon {...args} icon={<ChevronRight />} />,
};
