import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'clsx';

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
  maxW?: 'sm' | 'md';
} & ComponentPropsWithoutRef<T>;

export const Container: FC<Props<AsType>> = ({
  as: As = 'div',
  maxW,
  children,
  className,
  ...props
}) => {
  const cns = cx(
    'nako-m-auto nako-w-full',
    {
      'nako-max-w-md': maxW === 'md',
      'nako-max-w-sm': maxW === 'sm',
    },
    className,
  );

  return (
    <As className={cns} {...props}>
      {children}
    </As>
  );
};
