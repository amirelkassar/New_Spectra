import { Logo } from '@/dashboard/_components/ui/logo';
import { SearchBar } from '@/dashboard/_components/ui/search-bar';
import { LocaleButton } from '@/dashboard/_components/ui/locale-button';
import { Notifications } from '@/dashboard/_components/ui/notifications';
import { SidebarToggle } from '@/dashboard/_components/ui/sidebar-toggle';

export const Header = () => {
  return (
    <header className='h-9 mdl:h-16 flex items-center gap-3 mdl:gap-5'>
      {/* OPEN & CLOSE SIDEBAR */}
      <SidebarToggle />

      {/* LOGO */}
      <Logo />

      {/* SEARCH INPUT  */}
      <SearchBar />

      {/* LANGUAGE BUTTON */}
      <LocaleButton />

      {/* NOTIFICATION BUTTON */}
      <Notifications />
    </header>
  );
};
