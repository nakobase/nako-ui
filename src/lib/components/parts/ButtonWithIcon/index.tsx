import { FC, ReactNode, isValidElement, cloneElement } from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { cn } from '@/utils';

type Props = {
  icon: ReactNode;
  left?: boolean;
} & ButtonProps;

export const ButtonWithIcon: FC<Props> = ({
  icon,
  left = true,
  children,
  ...props
}) => {
  const styledIcon = isValidElement(icon)
    ? cloneElement(icon, {
        ...icon.props,
        className: cn(
          `nako-w-4 nako-h-4`,
          { 'nako-ml-2': !left, 'nako-mr-2': left },
          icon.props.className,
        ),
      })
    : icon;

  return (
    <Button {...props}>
      {left && styledIcon}
      {children}
      {!left && styledIcon}
    </Button>
  );
};
