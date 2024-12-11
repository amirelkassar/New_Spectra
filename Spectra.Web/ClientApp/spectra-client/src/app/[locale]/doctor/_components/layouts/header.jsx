import { LocaleButton } from '@/components/dashboard/ui/locale-button';
import { Notifications } from '@/components/dashboard/ui/notifications';
import { SearchBar } from '@/components/dashboard/ui/search-bar';
import { SidebarToggle } from '@/components/dashboard/ui/sidebar-toggle';
import { Logo } from '@/components/logo';

import ROUTES from '@/routes';

export const Header = () => {
  return (
    <header className='h-9 mdl:h-16 flex items-center gap-3 mdl:gap-5'>
      {/* OPEN & CLOSE SIDEBAR */}
      <SidebarToggle />

      {/* LOGO */}
      <Logo className='h-8 mdl:h-9' href={ROUTES.ADMIN.MAIN} />

      {/* SEARCH INPUT  */}
      <SearchBar />

      {/* LANGUAGE BUTTON */}
      <LocaleButton />

      {/* NOTIFICATION BUTTON */}
      <Notifications />
    </header>
  );
};
