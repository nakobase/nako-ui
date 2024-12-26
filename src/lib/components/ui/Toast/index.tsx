'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'nako-fixed nako-top-0 nako-z-[100] nako-flex nako-max-h-screen nako-w-full nako-flex-col-reverse nako-p-4 sm:nako-bottom-0 sm:nako-right-0 sm:nako-top-auto sm:nako-flex-col md:nako-max-w-[420px]',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'nako-group nako-pointer-events-auto nako-relative nako-flex nako-w-full nako-items-center nako-justify-between nako-space-x-4 nako-overflow-hidden nako-rounded-md nako-border nako-p-6 nako-pr-8 nako-shadow-lg nako-transition-all data-[swipe=cancel]:nako-translate-x-0 data-[swipe=end]:nako-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:nako-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:nako-transition-none data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[swipe=end]:nako-animate-out data-[state=closed]:nako-fade-out-80 data-[state=closed]:nako-slide-out-to-right-full data-[state=open]:nako-slide-in-from-top-full data-[state=open]:sm:nako-slide-in-from-bottom-full',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'nako-border nako-bg-background nako-text-foreground',
        destructive:
          'nako-destructive nako-group nako-border-destructive nako-bg-destructive nako-text-destructive-foreground',
      },
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'nako-inline-flex nako-h-8 nako-shrink-0 nako-items-center nako-justify-center nako-rounded-md nako-border nako-bg-transparent nako-px-3 nako-text-sm nako-font-medium nako-ring-offset-background nako-transition-colors hover:nako-bg-secondary focus:nako-outline-none focus:nako-ring-2 focus:nako-ring-ring focus:nako-ring-offset-2 disabled:nako-pointer-events-none disabled:nako-opacity-50 group-[.destructive]:nako-border-muted/40 group-[.destructive]:hover:nako-border-destructive/30 group-[.destructive]:hover:nako-bg-destructive group-[.destructive]:hover:nako-text-destructive-foreground group-[.destructive]:focus:nako-ring-destructive',
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'nako-absolute nako-right-2 nako-top-2 nako-rounded-md nako-p-1 nako-text-foreground/50 nako-opacity-0 nako-transition-opacity hover:nako-text-foreground focus:nako-opacity-100 focus:nako-outline-none focus:nako-ring-2 group-hover:nako-opacity-100 group-[.destructive]:nako-text-red-300 group-[.destructive]:hover:nako-text-red-50 group-[.destructive]:focus:nako-ring-red-400 group-[.destructive]:focus:nako-ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="nako-h-4 nako-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('nako-text-sm nako-font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('nako-text-sm nako-opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
