'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'nako- nako-fixed nako-inset-0 nako-z-50 nako-bg-black/80 data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'nako-fixed nako-left-[50%] nako-top-[50%] nako-z-50 nako-grid nako-w-full nako-max-w-lg nako-translate-x-[-50%] nako-translate-y-[-50%] nako-gap-4 nako-border nako-bg-background nako-p-6 nako-shadow-lg nako-duration-200 data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[state=closed]:nako-slide-out-to-left-1/2 data-[state=closed]:nako-slide-out-to-top-[48%] data-[state=open]:nako-slide-in-from-left-1/2 data-[state=open]:nako-slide-in-from-top-[48%] sm:nako-rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="nako-absolute nako-right-4 nako-top-4 nako-rounded-sm nako-opacity-70 nako-ring-offset-background nako-transition-opacity hover:nako-opacity-100 focus:nako-outline-none focus:nako-ring-2 focus:nako-ring-ring focus:nako-ring-offset-2 disabled:nako-pointer-events-none data-[state=open]:nako-bg-accent data-[state=open]:nako-text-muted-foreground">
        <X className="nako-h-4 nako-w-4" />
        <span className="nako-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'nako-flex nako-flex-col nako-space-y-1.5 nako-text-center sm:nako-text-left',
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
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
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'nako-text-lg nako-font-semibold nako-leading-none nako-tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('nako-text-sm nako-text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
