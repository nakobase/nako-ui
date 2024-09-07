import { FC, ReactNode } from 'react';
import {
  Accordion as _Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

type Props = {
  behavior?: 'single' | 'multiple';
  items: AccordionProps[];
};

type AccordionProps = {
  content: ReactNode;
  title: string;
  value: string;
};

export const Accordion: FC<Props> = ({ behavior = 'single', items }) => {
  return (
    <_Accordion collapsible type={behavior}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </_Accordion>
  );
};
