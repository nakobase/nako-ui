import * as React from 'react';

import { cn } from '@/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'nako-flex nako-h-10 nako-w-full nako-rounded-md nako-border nako-border-input nako-bg-background nako-px-3 nako-py-2 nako-text-sm nako-ring-offset-background file:nako-border-0 file:nako-bg-transparent file:nako-text-sm file:nako-font-medium file:nako-text-foreground placeholder:nako-text-muted-foreground focus-visible:nako-outline-none focus-visible:nako-ring-2 focus-visible:nako-ring-ring focus-visible:nako-ring-offset-2 disabled:nako-cursor-not-allowed disabled:nako-opacity-50',
          className,
        )}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
