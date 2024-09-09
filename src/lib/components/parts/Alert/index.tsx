import { FC } from 'react';
import { Info, CheckCircle } from 'lucide-react';
import {
  Alert as _Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/Alert';
import { cn } from '@/utils';

type Props = {
  variant?: 'info' | 'warning' | 'danger' | 'success';
  title?: string;
  description: string;
};

export const Alert: FC<Props> = ({ variant = 'info', title, description }) => {
  const className = cn('nako-border-none', {
    'nako-bg-danger nako-text-danger-foreground [&>svg]:nako-text-danger-foreground':
      variant === 'danger',
    'nako-bg-info nako-text-info-foreground [&>svg]:nako-text-info-foreground':
      variant === 'info',
    'nako-bg-success nako-text-success-foreground [&>svg]:nako-text-success-foreground':
      variant === 'success',
    'nako-bg-warning nako-text-warning-foreground [&>svg]:nako-text-warning-foreground':
      variant === 'warning',
  });

  return (
    <_Alert className={className}>
      {variant !== 'success' && <Info className="nako-h-4 nako-w-4" />}
      {variant === 'success' && <CheckCircle className="nako-h-4 nako-w-4" />}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
    </_Alert>
  );
};
