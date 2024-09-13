import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@/utils';

type AsType =
  | 'div'
  | 'section'
  | 'article'
  | 'nav'
  | 'aside'
  | 'header'
  | 'footer'
  | 'main'
  | 'figure';

type Props<T extends AsType> = {
  as?: T;
  verticalCenter?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Center: FC<Props<AsType>> = ({
  as: As = 'div',
  verticalCenter = false,
  children,
  className,
  ...props
}) => {
  const classNames = cn(
    'nako-mx-auto nako-flex nako-justify-center',
    verticalCenter && 'nako-items-center',
    className,
  );

  return (
    <As className={classNames} {...props}>
      {children}
    </As>
  );
};
