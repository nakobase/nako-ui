import { FC, ReactNode } from 'react';
import {
  AlertDialog as _AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog';

type Props = {
  actionText: string;
  cancelText?: string;
  description: string;
  title: string;
  triggerContent: ReactNode;
};

export const AlertDialog: FC<Props> = ({
  triggerContent,

  title,
  description,
  cancelText,
  actionText,
}) => {
  return (
    <_AlertDialog>
      <AlertDialogTrigger asChild>{triggerContent}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancelText && <AlertDialogCancel>{cancelText}</AlertDialogCancel>}
          <AlertDialogAction>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </_AlertDialog>
  );
};
