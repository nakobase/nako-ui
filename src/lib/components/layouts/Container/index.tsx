import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'clsx';
import styles from './style.module.scss';

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
  const cns = cx(styles.base, maxW && styles[`max-w-${maxW}`], className);

  return (
    <As className={cns} {...props}>
      {children}
    </As>
  );
};
