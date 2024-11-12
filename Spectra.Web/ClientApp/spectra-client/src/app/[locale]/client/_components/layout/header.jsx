import { Logo } from '@/components/logo';
import {
  LocaleButton,
  Notifications,
  SearchBar,
  SidebarToggle,
} from '@/client/_components/ui';
import ROUTES from '@/routes';

// COMPONENT
export const Header = () => {
  return (
    <header className='h-9 mdl:h-16 flex items-center gap-3 mdl:gap-5'>
      {/* OPEN & CLOSE SIDEBAR */}
      <SidebarToggle />

      {/* LOGO */}
      <Logo
        className='h-8 mdl:h-9'
        href={ROUTES.CLIENT.MAIN.HOME}
      />

      {/* SEARCH INPUT  */}
      <SearchBar />

      {/* LANGUAGE BUTTON */}
      <LocaleButton />

      {/* NOTIFICATION BUTTON */}
      <Notifications />
    </header>
  );
};
