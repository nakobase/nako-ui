import React from 'react';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/BreadcrumbItem';
import {
  Breadcrumb as _Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

interface BreadcrumbProps {
  items: BreadcrumbItemType[];
  separator?: React.ReactNode;
}

export const Breadcrumb = ({ items, separator }: BreadcrumbProps) => {
  return (
    <_Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="nako-flex nako-items-center nako-gap-1">
                      <BreadcrumbEllipsis className="nako-h-4 nako-w-4" />
                      <span className="nako-sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <DropdownMenuItem key={idx}>
                          {dropdownItem.href ? (
                            <BreadcrumbLink href={dropdownItem.href}>
                              {dropdownItem.label}
                            </BreadcrumbLink>
                          ) : (
                            dropdownItem.label
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : item.isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : item.asChild && item.customLink ? (
                  <BreadcrumbLink asChild>{item.customLink}</BreadcrumbLink>
                ) : item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  item.label
                )}
              </BreadcrumbItem>
              {!isLastItem && (
                <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </_Breadcrumb>
  );
};
