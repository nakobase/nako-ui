import * as React from 'react';

import { cn } from '@/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'nako-flex nako-min-h-[80px] nako-w-full nako-rounded-md nako-border nako-border-input nako-bg-background nako-px-3 nako-py-2 nako-text-sm nako-ring-offset-background placeholder:nako-text-muted-foreground focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-cursor-not-allowed disabled:nako-opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
