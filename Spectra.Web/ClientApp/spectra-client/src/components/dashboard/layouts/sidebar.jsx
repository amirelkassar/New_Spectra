'use client';

import { Link } from '@/navigation';
import {
  useClickOutside,
  useMediaQuery,
} from '@mantine/hooks';

import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/hooks/use-sidebar-store';

import ROUTES from '@/routes';
import ArrowNav from '@/assets/icons/arrow-nav';
import Logo from '@/assets/icons/logo';
import LogoutIcon from '@/assets/icons/logOut';
import { useLogout } from '@/hooks/queries/auth';

export const Sidebar = ({ links = [] }) => {
  const { isOpen, close } = useSidebarStore();

  const match = useMediaQuery('(max-width: 960px)');

  const ref = useClickOutside(() => {
    if (isOpen && match) close();
  });

  return (
    <aside
      ref={ref}
      data-open={isOpen}
      className={cn(
        'transition-all w-44 lg:w-14 !bg-white h-screen lg:h-full rounded-e-xl lg:rounded-none shadow-md lg:shadow-none fixed lg:sticky top-0 -start-44 z-50',
        isOpen && 'start-0 lg:w-52'
      )}
    >
      <div className='flex lg:hidden items-center p-7 gap-4'>
        <Link href={ROUTES.CLIENT.MAIN.HOME}>
          <Logo className={'w-[82px] h-[33px]'} />
        </Link>

        <button
          className='size-9 ltr:rotate-180 shrink-0 bg-blueLight rounded-full flex items-center justify-center'
          onClick={close}
        >
          <ArrowNav />
        </button>
      </div>

      <nav className='space-y-12 mt-5'>
        <ul className='space-y-3 p-2 lg:ps-0'>
          {links.map((link) => (
            <NavLinks key={link.route} link={link} />
          ))}
        </ul>

        <Logout />
      </nav>
    </aside>
  );
};

const NavLinks = ({ link }) => {
  const { isOpen, close } = useSidebarStore();

  const match = useMediaQuery('(max-width: 960px)');

  const onClick = () => {
    if (isOpen && match) close();
  };

  return (
    <li className='relative lg:h-11'>
      <Link
        onClick={onClick}
        className='flex gap-3 text-sm lg:text-lg p-2 font-bold relative w-fit rounded-lg group'
        href={link.route}
      >
        {/* LINK ICON */}
        <span
          className={cn(
            'size-5 group-hover:fill-greenMain group-hover:text-greenMain flex items-center justify-center lg:mt-1',
            link.isActive && 'fill-greenMain text-greenMain'
          )}
        >
          {link.icon}
        </span>

        {/* LINK LABEL */}
        <span
          className={cn(
            'text-nowrap',
            !isOpen && 'lg:hidden'
          )}
        >
          {link.name}
        </span>
      </Link>

      {/* ACTIVE LINE */}
      {link.isActive && (
        <div className='absolute h-full w-3 bg-greenMain rounded-e-md top-0 -start-3 lg:-start-5 z-[999]' />
      )}
    </li>
  );
};

const Logout = () => {
  const { isOpen } = useSidebarStore();

  const { logout } = useLogout();

  return (
    <button
      onClick={logout}
      className='text-sm lg:text-lg font-bold p-2 lg:ps-0 flex gap-3 items-center'
    >
      <span className='size-5'>
        <LogoutIcon />
      </span>

      <span
        className={cn(
          'text-nowrap',
          !isOpen && 'lg:hidden'
        )}
      >
        تسجيل الخروج
      </span>
    </button>
  );
};
