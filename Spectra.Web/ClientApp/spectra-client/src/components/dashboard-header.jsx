import { cn } from '@/lib/utils';
import {
  LocaleButton,
  Notifications,
  SearchBar,
  SidebarToggle,
} from '@/app/[locale]/(dashboard)/client/_components/ui';

const DashboardHeader = ({ children, ...props }) => {
  return (
    <header
      {...props}
      className={cn(
        'h-9 lg:h-16 flex items-center gap-3 lg:gap-5',
        props?.className
      )}
    >
      {children}
    </header>
  );
};

export default DashboardHeader;

DashboardHeader.SidebarToggle = SidebarToggle;
DashboardHeader.LocaleButton = LocaleButton;
DashboardHeader.Notifications = Notifications;
DashboardHeader.SearchBar = SearchBar;
