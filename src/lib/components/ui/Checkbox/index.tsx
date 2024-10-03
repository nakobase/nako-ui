'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'nako-peer nako-h-4 nako-w-4 nako-shrink-0 nako-rounded-md nako-border nako-border-primary nako-ring-offset-background focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-cursor-not-allowed disabled:nako-opacity-50 data-[state=checked]:nako-bg-primary data-[state=checked]:nako-text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'nako-flex nako-items-center nako-justify-center nako-text-current',
      )}
    >
      <Check className="nako-h-4 nako-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
