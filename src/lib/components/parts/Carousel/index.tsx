import React from 'react';
import {
  Carousel as _Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';

interface BreadcrumbProps {
  items: React.ReactNode[];
}

export const Carousel = ({ items }: BreadcrumbProps) => {
  return (
    <_Carousel className="nako-w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </_Carousel>
  );
};
