'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'nako-peer nako-inline-flex nako-h-6 nako-w-11 nako-shrink-0 nako-cursor-pointer nako-items-center nako-rounded-full nako-border-2 nako-border-transparent nako-transition-colors focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 focus-visible:nako-ring-offset-background disabled:nako-cursor-not-allowed disabled:nako-opacity-50 data-[state=checked]:nako-bg-primary data-[state=unchecked]:nako-bg-input',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'nako-pointer-events-none nako-block nako-h-5 nako-w-5 nako-rounded-full nako-bg-background nako-shadow-lg nako-ring-0 nako-transition-transform data-[state=checked]:nako-translate-x-5 data-[state=unchecked]:nako-translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
