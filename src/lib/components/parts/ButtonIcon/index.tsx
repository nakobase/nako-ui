import { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';

type Props = {
  icon: ReactNode;
} & ButtonProps;

export const ButtonIcon: FC<Props> = ({ icon, ...props }) => {
  return (
    <Button size="icon" {...props}>
      {icon}
    </Button>
  );
};
