'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const toggleVariants = cva(
  'nako-inline-flex nako-items-center nako-justify-center nako-rounded-md nako-text-sm nako-font-medium nako-ring-offset-background nako-transition-colors hover:nako-bg-muted hover:nako-text-muted-foreground focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-pointer-events-none disabled:nako-opacity-50 data-[state=on]:nako-bg-accent data-[state=on]:nako-text-accent-foreground [&_svg]:nako-pointer-events-none [&_svg]:nako-size-4 [&_svg]:nako-shrink-0 nako-gap-2',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'nako-h-10 nako-px-3 nako-min-w-10',
        lg: 'nako-h-11 nako-px-5 nako-min-w-11',
        sm: 'nako-h-9 nako-px-2.5 nako-min-w-9',
      },
      variant: {
        default: 'nako-bg-transparent',
        outline:
          'nako-border nako-border-input nako-bg-transparent hover:nako-bg-accent hover:nako-text-accent-foreground',
      },
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ className, size, variant }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
