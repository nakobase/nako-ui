import { ComponentPropsWithoutRef, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type Props<T extends AsType> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants>;

const textVariants = cva('', {
  defaultVariants: {
    variant: 'p',
  },
  variants: {
    variant: {
      blockquote: 'nako-mt-6 nako-border-l-2 nako-pl-6 nako-italic',
      h1: 'nako-scroll-m-20 nako-text-4xl nako-font-extrabold nako-tracking-tight nako-lg:text-5xl',
      h2: 'nako-scroll-m-20 nako-border-b nako-pb-2 nako-text-3xl nako-font-semibold nako-tracking-tight nako-first:mt-0',
      h3: 'nako-scroll-m-20 nako-text-2xl nako-font-semibold nako-tracking-tight',
      h4: 'nako-scroll-m-20 nako-text-xl nako-font-semibold nako-tracking-tight',
      large: 'nako-text-lg nako-font-semibold',
      lead: 'nako-text-xl nako-text-muted-foreground',
      muted: 'nako-text-sm nako-text-muted-foreground',
      p: 'nako-leading-7 [&:not(:first-child)]:nako-mt-6',
      small: 'nako-text-sm nako-font-medium leading-none',
    },
  },
});

export const Text: FC<Props<AsType>> = ({
  as: As = 'p',
  children,
  className,
  variant = 'p',
  ...props
}) => {
  return (
    <As className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </As>
  );
};
