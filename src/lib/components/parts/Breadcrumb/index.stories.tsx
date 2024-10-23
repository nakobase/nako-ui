import { Breadcrumb } from './';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/BreadcrumbItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  argTypes: {},
  component: Breadcrumb,
  tags: ['autodocs'],
  title: 'components/parts/Breadcrumb',
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const breadcrumbItems: BreadcrumbItemType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    dropdownItems: [
      { href: '/docs', label: 'Documentation' },
      { href: '/themes', label: 'Themes' },
      { href: 'https://github.com', label: 'GitHub' },
    ],
  },
  {
    href: '/docs/components',
    label: 'Components',
  },
  {
    isCurrentPage: true,
    label: 'Breadcrumb',
  },
];

export const Default: Story = {
  args: {
    items: breadcrumbItems,
  },
  render: (args) => <Breadcrumb {...args} />,
};
