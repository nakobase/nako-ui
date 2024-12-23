import { FC, ReactNode } from 'react';
import {
  Tooltip as _Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type TooltipProps = {
  content: ReactNode;
  trigger: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ trigger, content }) => {
  return (
    <TooltipProvider>
      <_Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </_Tooltip>
    </TooltipProvider>
  );
};
