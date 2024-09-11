import { FC } from 'react';
import {
  Avatar as _Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/Avatar';

type Props = {
  alt: string;
  fallback: string;
  src: string;
};

export const Avatar: FC<Props> = ({ src, alt, fallback }) => {
  return (
    <_Avatar>
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </_Avatar>
  );
};
