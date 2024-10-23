'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'nako-flex nako-h-10 nako-w-full nako-items-center nako-justify-between nako-rounded-md nako-border nako-border-input nako-bg-background nako-px-3 nako-py-2 nako-text-sm nako-ring-offset-background placeholder:nako-text-muted-foreground focus:nako-outline-none focus:nako-ring-2 focus:nako-ring-ring focus:nako-ring-offset-2 disabled:nako-cursor-not-allowed disabled:nako-opacity-50 [&>span]:nako-line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="nako-h-4 nako-w-4 nako-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'nako-flex nako-cursor-default nako-items-center nako-justify-center nako-py-1',
      className,
    )}
    {...props}
  >
    <ChevronUp className="nako-h-4 nako-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'nako-flex nako-cursor-default nako-items-center nako-justify-center nako-py-1',
      className,
    )}
    {...props}
  >
    <ChevronDown className="nako-h-4 nako-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'nako-relative nako-z-50 nako-max-h-96 nako-min-w-[8rem] nako-overflow-hidden nako-rounded-md nako-border nako-bg-popover nako-text-popover-foreground nako-shadow-md data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:nako-translate-y-1 data-[side=left]:nako--translate-x-1 data-[side=right]:nako-translate-x-1 data-[side=top]:nako--translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'nako-p-1',
          position === 'popper' &&
            'nako-h-[var(--radix-select-trigger-height)] nako-w-full nako-min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-font-semibold',
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-w-full nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-py-1.5 nako-pl-8 nako-pr-2 nako-text-sm nako-outline-none focus:nako-bg-accent focus:nako-text-accent-foreground data-[disabled]:nako-pointer-events-none data-[disabled]:nako-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="nako-absolute nako-left-2 nako-flex nako-h-3.5 nako-w-3.5 nako-items-center nako-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="nako-h-4 nako-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('nako--mx-1 nako-my-1 nako-h-px nako-bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
