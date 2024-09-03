import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const alertVariants = cva(
  'nako-relative nako-w-full nako-rounded-lg nako-border nako-p-4 [&>svg~*]:nako-pl-7 [&>svg+div]:nako-translate-y-[-3px] [&>svg]:nako-absolute [&>svg]:nako-left-4 [&>svg]:nako-top-4 [&>svg]:nako-text-foreground',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'nako-bg-background nako-text-foreground',
        destructive:
          'nako-border-destructive/50 nako-text-destructive dark:nako-border-destructive [&>svg]:nako-text-destructive',
      },
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertVariants({ variant }), className)}
    role="alert"
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'nako-mb-1 nako-font-medium nako-leading-none nako-tracking-tight',
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('nako-text-sm [&_p]:nako-leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
