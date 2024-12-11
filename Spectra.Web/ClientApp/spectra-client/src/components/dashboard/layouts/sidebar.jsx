'use client';

import { Link } from '@/i18n/routing';
import {
  useClickOutside,
  useDisclosure,
  useMediaQuery,
} from '@mantine/hooks';

import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/hooks/use-sidebar-store';

import ROUTES from '@/routes';
import ArrowNav from '@/assets/icons/arrow-nav';
import Logo from '@/assets/icons/logo';
import LogoutIcon from '@/assets/icons/logOut';
import { useLogout } from '@/hooks/queries/auth';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import { Collapse } from '@mantine/core';

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

  const [opened, { toggle }] = useDisclosure(false);

  const onClick = () => {
    if (isOpen && match && !link.nestedLinks?.length) close();
    if (!!link.nestedLinks?.length && isOpen) toggle();
  };

  return (
    <li className='relative lg:min-h-11'>
      <Link
        onClick={onClick}
        className='flex items-center gap-3 text-sm lg:text-lg p-2 font-bold relative w-fit rounded-lg group'
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
        <span className={cn('text-nowrap', !isOpen && 'lg:hidden')}>
          {link.name}
        </span>

        {!!link?.nestedLinks?.length && isOpen && (
          <ArrowDownIcon
            className={cn('transition', opened && 'rotate-180')}
          />
        )}
      </Link>

      {!!link.nestedLinks?.length && isOpen && (
        <Collapse in={opened}>
          <ul className='my-4 ps-8 space-y-3'>
            {link?.nestedLinks.map((nestedLink) => (
              <NestedLink
                onNestedLinkClick={() => {
                  if (isOpen && match) close();
                }}
                key={nestedLink.name}
                link={nestedLink}
              />
            ))}
          </ul>
        </Collapse>
      )}

      {/* ACTIVE LINE */}
      {link.isActive && (
        <div className='absolute h-11 w-3 bg-greenMain rounded-e-md top-0 -start-3 lg:-start-5 z-[999]' />
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

      <span className={cn('text-nowrap', !isOpen && 'lg:hidden')}>
        تسجيل الخروج
      </span>
    </button>
  );
};

const NestedLink = ({ link, onNestedLinkClick = () => {} }) => (
  <li
    onClick={(e) => {
      e.stopPropagation();
      onNestedLinkClick();
    }}
  >
    <Link
      href={link?.route}
      className={cn(
        'text-xs mdl:text-base',
        link?.isActive && 'font-bold'
      )}
    >
      {link?.name}
    </Link>
  </li>
);
