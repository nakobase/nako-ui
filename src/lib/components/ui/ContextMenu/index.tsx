'use client';

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/utils';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-px-2 nako-py-1.5 nako-text-sm nako-outline-none focus:nako-bg-accent focus:nako-text-accent-foreground data-[state=open]:nako-bg-accent data-[state=open]:nako-text-accent-foreground',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="nako-ml-auto nako-h-4 nako-w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'nako-z-50 nako-min-w-[8rem] nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-p-1 nako-text-popover-foreground nako-shadow-md data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'nako-z-50 nako-min-w-[8rem] nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-p-1 nako-text-popover-foreground nako-shadow-md nako-animate-in nako-fade-in-80 data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-px-2 nako-py-1.5 nako-text-sm nako-outline-none focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-outline-none focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="nako-absolute nako-left-2 nako-flex nako-h-3.5 nako-w-3.5 nako-items-center nako-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="nako-h-4 nako-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-outline-none focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="nako-absolute nako-left-2 nako-flex nako-h-3.5 nako-w-3.5 nako-items-center nako-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="nako-h-2 nako-w-2 nako-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      'nako-px-2 nako-py-1.5 nako-text-sm nako-font-semibold nako-text-foreground',
      inset && 'nako-pl-8',
      className,
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('nako--mx-1 nako-my-1 nako-h-px nako-bg-border', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'nako-ml-auto nako-text-xs nako-tracking-widest nako-text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
