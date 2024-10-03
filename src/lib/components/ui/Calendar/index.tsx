'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn('nako-p-3', className)}
      classNames={{
        caption:
          'nako-flex nako-justify-center nako-pt-1 nako-relative nako-items-center',
        caption_label: 'nako-text-sm nako-font-medium',
        cell: 'nako-h-9 nako-w-9 nako-text-center nako-text-sm nako-p-0 nako-relative [&:has([aria-selected].day-range-end)]:nako-rounded-r-md [&:has([aria-selected].day-outside)]:nako-bg-accent/50 [&:has([aria-selected])]:nako-bg-accent first:[&:has([aria-selected])]:nako-rounded-l-md last:[&:has([aria-selected])]:nako-rounded-r-md focus-within:nako-relative focus-within:nako-z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'nako-h-9 nako-w-9 nako-p-0 nako-font-normal aria-selected:nako-opacity-100',
        ),
        day_disabled: 'nako-text-muted-foreground nako-opacity-50',
        day_hidden: 'nako-invisible',
        day_outside:
          'nako-day-outside nako-text-muted-foreground nako-opacity-50 aria-selected:nako-bg-accent/50 aria-selected:nako-text-muted-foreground aria-selected:nako-opacity-30',
        day_range_end: 'nako-day-range-end',
        day_range_middle:
          'aria-selected:nako-bg-accent aria-selected:nako-text-accent-foreground',
        day_selected:
          'nako-bg-primary nako-text-primary-foreground hover:nako-bg-primary hover:nako-text-primary-foreground focus:nako-bg-primary focus:nako-text-primary-foreground',
        day_today: 'nako-bg-accent nako-text-accent-foreground',
        head_cell:
          'nako-text-muted-foreground nako-rounded-md nako-w-9 nako-font-normal nako-text-[0.8rem]',
        head_row: 'nako-flex',
        month: 'nako-space-y-4',
        months:
          'nako-flex nako-flex-col sm:nako-flex-row nako-space-y-4 sm:nako-space-x-4 sm:nako-space-y-0',
        nav: 'nako-space-x-1 nako-flex nako-items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'nako-h-7 nako-w-7 nako-bg-transparent nako-p-0 nako-opacity-50 hover:nako-opacity-100',
        ),
        nav_button_next: 'nako-absolute nako-right-1',
        nav_button_previous: 'nako-absolute nako-left-1',
        row: 'nako-flex nako-w-full nako-mt-2',
        table: 'nako-w-full nako-border-collapse nako-space-y-1',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="nako-h-4 nako-w-4" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="nako-h-4 nako-w-4" />
        ),
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
