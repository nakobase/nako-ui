import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavigationMenu> = {
  argTypes: {},
  component: NavigationMenu,
  tags: ['autodocs'],
  title: 'components/ui/NavigationMenu',
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {},
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
