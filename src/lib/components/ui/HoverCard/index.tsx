'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    className={cn(
      'nako-z-50 nako-w-64 nako-rounded-md nako-border nako-bg-popover nako-p-4 nako-text-popover-foreground nako-shadow-md nako-outline-none data-[state=open]:nako-animate-in data-[state=closed]:nako-animate-out data-[state=closed]:nako-fade-out-0 data-[state=open]:nako-fade-in-0 data-[state=closed]:nako-zoom-out-95 data-[state=open]:nako-zoom-in-95 data-[side=bottom]:nako-slide-in-from-top-2 data-[side=left]:nako-slide-in-from-right-2 data-[side=right]:nako-slide-in-from-left-2 data-[side=top]:nako-slide-in-from-bottom-2',
      className,
    )}
    sideOffset={sideOffset}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
