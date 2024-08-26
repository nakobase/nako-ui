import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';

type Props = {
  as?: 'div' | 'nav' | 'section' | 'article' | 'aside' | 'header' | 'footer';
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Container: FC<Props> = ({
  as: As = 'div',
  children,
  className,
  ...props
}) => {
  return (
    <As className={styles.wrapper} {...props}>
      {children}
    </As>
  );
};
