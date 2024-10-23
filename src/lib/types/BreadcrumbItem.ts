export interface BreadcrumbItem {
  asChild?: boolean;
  customLink?: React.ReactElement;
  dropdownItems?: Array<{ href?: string; label: string }>;
  href?: string;
  isCurrentPage?: boolean;
  label?: string;
}
