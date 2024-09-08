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
    'nako-bg-error nako-text-error-foreground [&>svg]:nako-text-danger-foreground':
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
      {variant !== 'success' && <Info className="h-4 w-4" />}
      {variant === 'success' && <CheckCircle className="h-4 w-4" />}
      {title && <AlertTitle>Heads up!</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
    </_Alert>
  );
};
