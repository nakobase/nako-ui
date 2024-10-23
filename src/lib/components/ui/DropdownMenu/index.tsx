'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-px-2 nako-py-1.5 nako-text-sm nako-outline-none focus:nako-bg-accent data-[state=open]:nako-bg-accent',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="nako-ml-auto nako-h-4 nako-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'nako-z-50 nako-min-w-[8rem] nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-p-1 nako-text-popover-foreground nako-shadow-lg data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={cn(
        'nako-z-50 nako-min-w-[8rem] nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-p-1 nako-text-popover-foreground nako-shadow-md data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-px-2 nako-py-1.5 nako-text-sm nako-outline-none nako-transition-colors focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-outline-none nako-transition-colors focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="nako-absolute nako-left-2 nako-flex nako-h-3.5 nako-w-3.5 nako-items-center nako-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="nako-h-4 nako-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-outline-none nako-transition-colors focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="nako-absolute nako-left-2 nako-flex nako-h-3.5 nako-w-3.5 nako-items-center nako-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="nako-h-2 nako-w-2 nako-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'nako-px-2 nako-py-1.5 nako-text-sm nako-font-semibold',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('nako--mx-1 nako-my-1 nako-h-px nako-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'nako-ml-auto nako-text-xs nako-tracking-widest nako-opacity-60',
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
