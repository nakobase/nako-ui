import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'nako-inline-flex nako-items-center nako-justify-center nako-whitespace-nowrap nako-rounded-md nako-text-sm nako-font-medium nako-ring-offset-background nako-transition-colors focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-pointer-events-none disabled:nako-opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'nako-h-10 nako-px-4 nako-py-2',
        icon: 'nako-h-10 nako-w-10',
        lg: 'nako-h-11 nako-rounded-md nako-px-8',
        sm: 'nako-h-9 nako-rounded-md nako-px-3',
      },
      variant: {
        default:
          'nako-bg-primary nako-text-primary-foreground hover:nako-bg-primary/90',
        destructive:
          'nako-bg-destructive nako-text-destructive-foreground hover:nako-bg-destructive/90',
        ghost: 'hover:nako-bg-accent hover:nako-text-accent-foreground',
        link: 'nako-text-primary nako-underline-offset-4 hover:nako-underline',
        outline:
          'nako-border nako-border-input nako-bg-background hover:nako-bg-accent hover:nako-text-accent-foreground',
        secondary:
          'nako-bg-secondary nako-text-secondary-foreground hover:nako-bg-secondary/80',
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ className, size, variant }))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
