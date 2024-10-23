import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'nako-relative nako-z-10 nako-flex nako-max-w-max nako-flex-1 nako-items-center nako-justify-center',
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'nako-group nako-flex nako-flex-1 nako-list-none nako-items-center nako-justify-center nako-space-x-1',
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'nako-group nako-inline-flex nako-h-10 nako-w-max nako-items-center nako-justify-center nako-rounded-md nako-bg-background nako-px-4 nako-py-2 nako-text-sm nako-font-medium nako-transition-colors hover:nako-bg-accent hover:nako-text-accent-foreground focus:nako-bg-accent focus:nako-text-accent-foreground focus:nako-outline-none disabled:nako-pointer-events-none disabled:nako-opacity-50 data-[active]:nako-bg-accent/50 data-[state=open]:nako-bg-accent/50',
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'nako-group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      aria-hidden="true"
      className="nako-relative nako-top-[1px] nako-ml-1 nako-h-3 nako-w-3 nako-transition nako-duration-200 group-data-[state=open]:nako-rotate-180"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'nako- nako-left-0 nako-top-0 nako-w-full data-[motion^=from-]:nako-animate-in data-[motion^=to-]:nako-animate-out data-[motion^=from-]:nako-fade-in data-[motion^=to-]:nako-fade-out data-[motion=from-end]:nako-slide-in-from-right-52 data-[motion=from-start]:nako-slide-in-from-left-52 data-[motion=to-end]:nako-slide-out-to-right-52 data-[motion=to-start]:nako-slide-out-to-left-52 md:nako-absolute md:nako-w-auto',
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      'nako-absolute nako-left-0 nako-top-full nako-flex nako-justify-center',
    )}
  >
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        'nako-origin-top-center nako-relative nako-mt-1.5 nako-h-[var(--radix-navigation-menu-viewport-height)] nako-w-full nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-text-popover-foreground nako-shadow-lg data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-90 md:nako-w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'nako-top-full nako-z-[1] nako-flex nako-h-1.5 nako-items-end nako-justify-center nako-overflow-hidden data-[state=visible]:nako-animate-in data-[state=hidden]:nako-animate-out data-[state=hidden]:nako-fade-out data-[state=visible]:nako-fade-in',
      className,
    )}
    {...props}
  >
    <div className="nako-relative nako-top-[60%] nako-h-2 nako-w-2 nako-rotate-45 nako-rounded-tl-sm nako-bg-border nako-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
