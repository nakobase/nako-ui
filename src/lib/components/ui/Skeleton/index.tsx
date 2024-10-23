import { cn } from '@/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'nako-animate-pulse nako-rounded-md nako-bg-muted',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
