import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const badgeVariants = cva(
  'nako-inline-flex nako-items-center nako-rounded-full nako-border nako-px-2.5 nako-py-0.5 nako-text-xs nako-font-semibold nako-transition-colors focus:nako-outline-none focus:nako-ring-2 focus:nako-ring-ring focus:nako-ring-offset-2',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default:
          'nako-border-transparent nako-bg-primary nako-text-primary-foreground hover:nako-bg-primary/80',
        destructive:
          'nako-border-transparent nako-bg-destructive nako-text-destructive-foreground hover:nako-bg-destructive/80',
        outline: 'nako-text-foreground',
        secondary:
          'nako-border-transparent nako-bg-secondary nako-text-secondary-foreground hover:nako-bg-secondary/80',
      },
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
