'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { PanelLeft } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Separator } from '@/components/ui/Separator';
import { Sheet, SheetContent } from '@/components/ui/Sheet';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/utils';

const SIDEBAR_COOKIE_NAME = 'sidebar:state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContext = {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: 'expanded' | 'collapsed';
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        isMobile,
        open,
        openMobile,
        setOpen,
        setOpenMobile,
        state,
        toggleSidebar,
      }),
      [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      ],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            ref={ref}
            className={cn(
              'nako-group/sidebar-wrapper has-[[data-variant=inset]]:nako-bg-sidebar nako-flex nako-min-h-svh nako-w-full',
              className,
            )}
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH,
                '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = 'SidebarProvider';

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    collapsible?: 'offcanvas' | 'icon' | 'none';
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
  }
>(
  (
    {
      side = 'left',
      variant = 'sidebar',
      collapsible = 'offcanvas',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === 'none') {
      return (
        <div
          ref={ref}
          className={cn(
            'nako-bg-sidebar nako-text-sidebar-foreground nako-flex nako-h-full nako-w-[--sidebar-width] nako-flex-col',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            className="nako-bg-sidebar nako-text-sidebar-foreground nako-w-[--sidebar-width] nako-p-0 [&>button]:nako-hidden"
            data-mobile="true"
            data-sidebar="sidebar"
            side={side}
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
          >
            <div className="nako-flex nako-h-full nako-w-full nako-flex-col">
              {children}
            </div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="nako-text-sidebar-foreground nako-group nako-peer nako-hidden md:nako-block"
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-side={side}
        data-state={state}
        data-variant={variant}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            'nako-relative nako-h-svh nako-w-[--sidebar-width] nako-bg-transparent nako-transition-[width] nako-duration-200 nako-ease-linear',
            'group-data-[collapsible=offcanvas]:nako-w-0',
            'group-data-[side=right]:nako-rotate-180',
            variant === 'floating' || variant === 'inset'
              ? 'group-data-[collapsible=icon]:nako-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
              : 'group-data-[collapsible=icon]:nako-w-[--sidebar-width-icon]',
          )}
        />
        <div
          className={cn(
            'nako-fixed nako-inset-y-0 nako-z-10 nako-hidden nako-h-svh nako-w-[--sidebar-width] nako-transition-[left,right,width] nako-duration-200 nako-ease-linear md:nako-flex',
            side === 'left'
              ? 'nako-left-0 group-data-[collapsible=offcanvas]:nako-left-[calc(var(--sidebar-width)*-1)]'
              : 'nako-right-0 group-data-[collapsible=offcanvas]:nako-right-[calc(var(--sidebar-width)*-1)]',
            // Adjust the padding for floating and inset variants.
            variant === 'floating' || variant === 'inset'
              ? 'nako-p-2 group-data-[collapsible=icon]:nako-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
              : 'group-data-[collapsible=icon]:nako-w-[--sidebar-width-icon] group-data-[side=left]:nako-border-r group-data-[side=right]:nako-border-l',
            className,
          )}
          {...props}
        >
          <div
            className="nako-bg-sidebar group-data-[variant=floating]:nako-border-sidebar-border nako-flex nako-h-full nako-w-full nako-flex-col group-data-[variant=floating]:nako-rounded-lg group-data-[variant=floating]:nako-border group-data-[variant=floating]:nako-shadow"
            data-sidebar="sidebar"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = 'Sidebar';

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      className={cn('nako-h-7 nako-w-7', className)}
      data-sidebar="trigger"
      size="icon"
      variant="ghost"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="nako-sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      aria-label="Toggle Sidebar"
      className={cn(
        'hover:after:nako-bg-sidebar-border nako-absolute nako-inset-y-0 nako-z-20 nako-hidden nako-w-4 nako--translate-x-1/2 nako-transition-all nako-ease-linear after:nako-absolute after:nako-inset-y-0 after:nako-left-1/2 after:nako-w-[2px] group-data-[side=left]:nako--right-4 group-data-[side=right]:nako-left-0 sm:nako-flex',
        '[[data-side=left]_&]:nako-cursor-w-resize [[data-side=right]_&]:nako-cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:nako-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:nako-cursor-w-resize',
        'group-data-[collapsible=offcanvas]:hover:nako-bg-sidebar group-data-[collapsible=offcanvas]:nako-translate-x-0 group-data-[collapsible=offcanvas]:after:nako-left-full',
        '[[data-side=left][data-collapsible=offcanvas]_&]:nako--right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:nako--left-2',
        className,
      )}
      data-sidebar="rail"
      tabIndex={-1}
      title="Toggle Sidebar"
      onClick={toggleSidebar}
      {...props}
    />
  );
});
SidebarRail.displayName = 'SidebarRail';

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'main'>
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        'nako-relative nako-flex nako-min-h-svh nako-flex-1 nako-flex-col nako-bg-background',
        'peer-data-[variant=inset]:nako-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:nako-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:nako-ml-2 md:peer-data-[variant=inset]:nako-ml-0 md:peer-data-[variant=inset]:nako-rounded-xl md:peer-data-[variant=inset]:nako-shadow',
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = 'SidebarInset';

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={cn(
        'focus-visible:nako-ring-sidebar-ring nako-h-8 nako-w-full nako-bg-background nako-shadow-none focus-visible:nako-ring-2',
        className,
      )}
      data-sidebar="input"
      {...props}
    />
  );
});
SidebarInput.displayName = 'SidebarInput';

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('nako-flex nako-flex-col nako-gap-2 nako-p-2', className)}
      data-sidebar="header"
      {...props}
    />
  );
});
SidebarHeader.displayName = 'SidebarHeader';

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('nako-flex nako-flex-col nako-gap-2 nako-p-2', className)}
      data-sidebar="footer"
      {...props}
    />
  );
});
SidebarFooter.displayName = 'SidebarFooter';

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      className={cn('nako-bg-sidebar-border nako-mx-2 nako-w-auto', className)}
      data-sidebar="separator"
      {...props}
    />
  );
});
SidebarSeparator.displayName = 'SidebarSeparator';

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'nako-flex nako-min-h-0 nako-flex-1 nako-flex-col nako-gap-2 nako-overflow-auto group-data-[collapsible=icon]:nako-overflow-hidden',
        className,
      )}
      data-sidebar="content"
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'nako-relative nako-flex nako-w-full nako-min-w-0 nako-flex-col nako-p-2',
        className,
      )}
      data-sidebar="group"
      {...props}
    />
  );
});
SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      className={cn(
        'nako-text-sidebar-foreground/70 nako-ring-sidebar-ring nako-flex nako-h-8 nako-shrink-0 nako-items-center nako-rounded-md nako-px-2 nako-text-xs nako-font-medium nako-outline-none nako-transition-[margin,opa] nako-duration-200 nako-ease-linear focus-visible:nako-ring-2 [&>svg]:nako-size-4 [&>svg]:nako-shrink-0',
        'group-data-[collapsible=icon]:nako--mt-8 group-data-[collapsible=icon]:nako-opacity-0',
        className,
      )}
      data-sidebar="group-label"
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      className={cn(
        'nako-text-sidebar-foreground nako-ring-sidebar-ring hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground nako-absolute nako-right-3 nako-top-3.5 nako-flex nako-aspect-square nako-w-5 nako-items-center nako-justify-center nako-rounded-md nako-p-0 nako-outline-none nako-transition-transform focus-visible:nako-ring-2 [&>svg]:nako-size-4 [&>svg]:nako-shrink-0',
        // Increases the hit area of the button on mobile.
        'after:nako-absolute after:nako--inset-2 after:md:nako-hidden',
        'group-data-[collapsible=icon]:nako-hidden',
        className,
      )}
      data-sidebar="group-action"
      {...props}
    />
  );
});
SidebarGroupAction.displayName = 'SidebarGroupAction';

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('nako-w-full nako-text-sm', className)}
    data-sidebar="group-content"
    {...props}
  />
));
SidebarGroupContent.displayName = 'SidebarGroupContent';

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'nako-flex nako-w-full nako-min-w-0 nako-flex-col nako-gap-1',
      className,
    )}
    data-sidebar="menu"
    {...props}
  />
));
SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('nako-group/menu-item nako-relative', className)}
    data-sidebar="menu-item"
    {...props}
  />
));
SidebarMenuItem.displayName = 'SidebarMenuItem';

const sidebarMenuButtonVariants = cva(
  'nako-peer/menu-button nako-flex nako-w-full nako-items-center nako-gap-2 nako-overflow-hidden nako-rounded-md nako-p-2 nako-text-left nako-text-sm nako-outline-none nako-ring-sidebar-ring nako-transition-[width,height,padding] hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground focus-visible:nako-ring-2 active:nako-bg-sidebar-accent active:nako-text-sidebar-accent-foreground disabled:nako-pointer-events-none disabled:nako-opacity-50 nako-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:nako-pointer-events-none aria-disabled:nako-opacity-50 data-[active=true]:nako-bg-sidebar-accent data-[active=true]:nako-font-medium data-[active=true]:nako-text-sidebar-accent-foreground data-[state=open]:hover:nako-bg-sidebar-accent data-[state=open]:hover:nako-text-sidebar-accent-foreground group-data-[collapsible=icon]:nako-!size-8 group-data-[collapsible=icon]:nako-!p-2 [&>span:last-child]:nako-truncate [&>svg]:nako-size-4 [&>svg]:nako-shrink-0',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'nako-h-8 nako-text-sm',
        lg: 'nako-h-12 nako-text-sm group-data-[collapsible=icon]:nako-!p-0',
        sm: 'nako-h-7 nako-text-xs',
      },
      variant: {
        default:
          'hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground',
        outline:
          'nako-bg-background nako-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground hover:nako-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = 'default',
      size = 'default',
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        className={cn(sidebarMenuButtonVariants({ size, variant }), className)}
        data-active={isActive}
        data-sidebar="menu-button"
        data-size={size}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === 'string') {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          side="right"
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = 'SidebarMenuButton';

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      className={cn(
        'nako-text-sidebar-foreground nako-ring-sidebar-ring hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground nako-peer-hover/menu-button:text-sidebar-accent-foreground nako-absolute nako-right-1 nako-top-1.5 nako-flex nako-aspect-square nako-w-5 nako-items-center nako-justify-center nako-rounded-md nako-p-0 nako-outline-none nako-transition-transform focus-visible:nako-ring-2 [&>svg]:nako-size-4 [&>svg]:nako-shrink-0',
        // Increases the hit area of the button on mobile.
        'after:nako-absolute after:nako--inset-2 after:md:nako-hidden',
        'nako-peer-data-[size=sm]/menu-button:top-1',
        'nako-peer-data-[size=default]/menu-button:top-1.5',
        'nako-peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:nako-hidden',
        showOnHover &&
          'nako-group-focus-within/menu-item:opacity-100 nako-group-hover/menu-item:opacity-100 nako-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:nako-opacity-100 md:nako-opacity-0',
        className,
      )}
      data-sidebar="menu-action"
      {...props}
    />
  );
});
SidebarMenuAction.displayName = 'SidebarMenuAction';

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'nako-text-sidebar-foreground nako-pointer-events-none nako-absolute nako-right-1 nako-flex nako-h-5 nako-min-w-5 nako-select-none nako-items-center nako-justify-center nako-rounded-md nako-px-1 nako-text-xs nako-font-medium nako-tabular-nums',
      'nako-peer-hover/menu-button:text-sidebar-accent-foreground nako-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'nako-peer-data-[size=sm]/menu-button:top-1',
      'nako-peer-data-[size=default]/menu-button:top-1.5',
      'nako-peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:nako-hidden',
      className,
    )}
    data-sidebar="menu-badge"
    {...props}
  />
));
SidebarMenuBadge.displayName = 'SidebarMenuBadge';

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'nako-flex nako-h-8 nako-items-center nako-gap-2 nako-rounded-md nako-px-2',
        className,
      )}
      data-sidebar="menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="nako-size-4 nako-rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="nako-h-4 nako-max-w-[--skeleton-width] nako-flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton';

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'nako-border-sidebar-border nako-mx-3.5 nako-flex nako-min-w-0 nako-translate-x-px nako-flex-col nako-gap-1 nako-border-l nako-px-2.5 nako-py-0.5',
      'group-data-[collapsible=icon]:nako-hidden',
      className,
    )}
    data-sidebar="menu-sub"
    {...props}
  />
));
SidebarMenuSub.displayName = 'SidebarMenuSub';

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ ...props }, ref) => <li ref={ref} {...props} />);
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'> & {
    asChild?: boolean;
    isActive?: boolean;
    size?: 'sm' | 'md';
  }
>(({ asChild = false, size = 'md', isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn(
        'nako-text-sidebar-foreground nako-ring-sidebar-ring hover:nako-bg-sidebar-accent hover:nako-text-sidebar-accent-foreground active:nako-bg-sidebar-accent active:nako-text-sidebar-accent-foreground [&>svg]:nako-text-sidebar-accent-foreground nako-flex nako-h-7 nako-min-w-0 nako--translate-x-px nako-items-center nako-gap-2 nako-overflow-hidden nako-rounded-md nako-px-2 nako-outline-none focus-visible:nako-ring-2 disabled:nako-pointer-events-none disabled:nako-opacity-50 aria-disabled:nako-pointer-events-none aria-disabled:nako-opacity-50 [&>span:last-child]:nako-truncate [&>svg]:nako-size-4 [&>svg]:nako-shrink-0',
        'data-[active=true]:nako-bg-sidebar-accent data-[active=true]:nako-text-sidebar-accent-foreground',
        size === 'sm' && 'nako-text-xs',
        size === 'md' && 'nako-text-sm',
        'group-data-[collapsible=icon]:nako-hidden',
        className,
      )}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
