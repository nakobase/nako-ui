'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'nako- nako-fixed nako-inset-0 nako-z-50 nako-bg-black/80 data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'nako-fixed nako-z-50 nako-gap-4 nako-bg-background nako-p-6 nako-shadow-lg nako-transition nako-ease-in-out data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-duration-300 data-[state=open]:nako-duration-500',
  {
    defaultVariants: {
      side: 'right',
    },
    variants: {
      side: {
        bottom:
          'nako-inset-x-0 nako-bottom-0 nako-border-t data-[state=closed]:nako-slide-out-to-bottom data-[state=open]:nako-slide-in-from-bottom',
        left: 'nako-inset-y-0 nako-left-0 nako-h-full nako-w-3/4 nako-border-r data-[state=closed]:nako-slide-out-to-left data-[state=open]:nako-slide-in-from-left sm:nako-max-w-sm',
        right:
          'nako-inset-y-0 nako-right-0 nako-h-full nako-w-3/4 nako- nako-border-l data-[state=closed]:nako-slide-out-to-right data-[state=open]:nako-slide-in-from-right sm:nako-max-w-sm',
        top: 'nako-inset-x-0 nako-top-0 nako-border-b data-[state=closed]:nako-slide-out-to-top data-[state=open]:nako-slide-in-from-top',
      },
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="nako-absolute nako-right-4 nako-top-4 nako-rounded-sm nako-opacity-70 nako-ring-offset-background nako-transition-opacity hover:nako-opacity-100 focus:nako-outline-none focus:nako-ring-2 focus:nako-ring-ring focus:nako-ring-offset-2 disabled:nako-pointer-events-none data-[state=open]:nako-bg-secondary">
        <X className="nako-h-4 nako-w-4" />
        <span className="nako-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'nako-flex nako-flex-col nako-space-y-2 nako-text-center sm:nako-text-left',
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'nako-flex nako-flex-col-reverse sm:nako-flex-row sm:nako-justify-end sm:nako-space-x-2',
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      'nako-text-lg nako-font-semibold nako-text-foreground',
      className,
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('nako-text-sm nako-text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
