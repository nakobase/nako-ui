'use client';

import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';

import { Dialog, DialogContent } from '@/components/ui/Dialog';
import { cn } from '@/utils';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'nako-flex nako-h-full nako-w-full nako-flex-col nako-overflow-hidden nako-rounded-md nako-bg-popover nako-text-popover-foreground',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="nako-overflow-hidden nako-p-0 nako-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:nako-px-2 [&_[cmdk-group-heading]]:nako-font-medium [&_[cmdk-group-heading]]:nako-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:nako-pt-0 [&_[cmdk-group]]:nako-px-2 [&_[cmdk-input-wrapper]_svg]:nako-h-5 [&_[cmdk-input-wrapper]_svg]:nako-w-5 [&_[cmdk-input]]:nako-h-12 [&_[cmdk-item]]:nako-px-2 [&_[cmdk-item]]:nako-py-3 [&_[cmdk-item]_svg]:nako-h-5 [&_[cmdk-item]_svg]:nako-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="nako-flex nako-items-center nako-border-b nako-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="nako-mr-2 nako-h-4 nako-w-4 nako-shrink-0 nako-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'nako-flex nako-h-11 nako-w-full nako-rounded-md nako-bg-transparent nako-py-3 nako-text-sm nako-outline-none placeholder:nako-text-muted-foreground disabled:nako-cursor-not-allowed disabled:nako-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'nako-max-h-[300px] nako-overflow-y-auto nako-overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="nako-py-6 nako-text-center nako-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'nako-overflow-hidden nako-p-1 nako-text-foreground [&_[cmdk-group-heading]]:nako-px-2 [&_[cmdk-group-heading]]:nako-py-1.5 [&_[cmdk-group-heading]]:nako-text-xs [&_[cmdk-group-heading]]:nako-font-medium [&_[cmdk-group-heading]]:nako-text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('nako--mx-1 nako-h-px nako-bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-cursor-default nako-select-none nako-items-center nako-rounded-sm nako-px-2 nako-py-1.5 nako-text-sm nako-outline-none data-[disabled=true]:nako-pointer-events-none data-[selected=true]:nako-bg-accent data-[selected=true]:nako-text-accent-foreground data-[disabled=true]:nako-opacity-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
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
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
