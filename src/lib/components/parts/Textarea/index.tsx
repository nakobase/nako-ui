import { FC } from 'react';
import { Label } from '@/components/ui/Label';
import { Textarea as _Textarea } from '@/components/ui/Textarea';

type Props = {
  id?: string;
  label?: string;
  message?: string;
  placeholder?: string;
};

export const Textarea: FC<Props> = ({ label, placeholder, id, message }) => {
  return (
    <div className="nako-grid nako-w-full nako-gap-1.5">
      {label && <Label htmlFor={id}>{label}</Label>}
      <_Textarea id={id} placeholder={placeholder} />
      {message && (
        <p className="nako-text-sm nako-text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      )}
    </div>
  );
};
