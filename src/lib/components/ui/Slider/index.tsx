'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'nako-relative nako-flex nako-w-full nako-touch-none nako-select-none nako-items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="nako-relative nako-h-2 nako-w-full nako-grow nako-overflow-hidden nako-rounded-full nako-bg-secondary">
      <SliderPrimitive.Range className="nako-absolute nako-h-full nako-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="nako-block nako-h-5 nako-w-5 nako-rounded-full nako-border-2 nako-border-primary nako-bg-background nako-ring-offset-background nako-transition-colors focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-pointer-events-none disabled:nako-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
