'use client';

import clsx from 'clsx';
import React, { useMemo, useCallback } from 'react';
import { Link, usePathname } from '@/navigation';

import { useSidebar } from '@/store/client/sidebar/menu-slice';
import ROUTES from '@/routes';
import MainIcon from '@/assets/icons/main';
import SettingsIcon from '@/assets/icons/settings';
import StaffIcon from '@/assets/icons/staff';
import ArrowNav from '@/assets/icons/arrow-nav';
import Logo from '@/assets/icons/logo';
import LogoutIcon from '@/assets/icons/logOut';
import ControlIcon from '@/assets/icons/control';
import ProfileIcon from '@/assets/icons/profile';
import { ClockIcon2 } from '@/assets/icons/clock';
import StepsIcon from '@/assets/icons/steps';
import ReportsIcon from '@/assets/icons/reportsIcon';
import ChatIcon from '@/assets/icons/chat';
import HeartIcon from '@/assets/icons/heart-checked';
import WalletIcon from '@/assets/icons/wallet';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const path = usePathname();
  const links = useMemo(
    () => [
      {
        name: 'الرئيسية',
        route: ROUTES.CLIENT.MAIN,
        isActive: path.includes(ROUTES.CLIENT.MAIN),
        icon: <MainIcon />,
      },
      {
        name: 'قائمة التحكم',
        route: ROUTES.CLIENT.CONTROL_MENU,
        isActive: path.includes(ROUTES.CLIENT.CONTROL_MENU),
        icon: <ControlIcon />,
      },
      {
        name: 'ملفي',
        route: ROUTES.CLIENT.PROFILE,
        isActive: path.includes(ROUTES.CLIENT.PROFILE),
        icon: <ProfileIcon />,
      },
      {
        name: 'الباقات',
        route: ROUTES.CLIENT.PACKAGES,
        isActive: path.includes(ROUTES.CLIENT.PACKAGES),
        icon: <HeartIcon />,
      },
      {
        name: 'المواعيد',
        route: ROUTES.CLIENT.SCHEDULES,
        isActive: path.includes(ROUTES.CLIENT.SCHEDULES),
        icon: <ClockIcon2 />,
      },
      {
        name: 'الخطوات',
        route: ROUTES.CLIENT.STEPS,
        isActive: path.includes(ROUTES.CLIENT.STEPS),
        icon: <StepsIcon />,
      },
      {
        name: 'الفريق',
        route: ROUTES.CLIENT.TEAM,
        isActive: path.includes(ROUTES.CLIENT.TEAM),
        icon: <StaffIcon />,
      },
      {
        name: 'تقارير',
        route: ROUTES.CLIENT.REPORTS,
        isActive: path.includes(ROUTES.CLIENT.REPORTS),
        icon: <ReportsIcon />,
      },
      {
        name: 'محادثات',
        route: ROUTES.CLIENT.CHATS,
        isActive: path.includes(ROUTES.CLIENT.CHATS),
        icon: <ChatIcon />,
      },
      {
        name: 'المحفظة',
        route: ROUTES.CLIENT.WALLET,
        isActive: path.includes(ROUTES.CLIENT.WALLET),
        icon: <WalletIcon />,
      },
      {
        name: 'الإعدادات',
        route: ROUTES.CLIENT.SETTINGS,
        isActive: path.includes(ROUTES.CLIENT.SETTINGS),
        icon: <SettingsIcon />,
      },
    ],
    [path]
  );

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  return (
    <aside
      className={clsx(
        'transition-all w-44 lg:w-14 !bg-white h-screen lg:h-full rounded-e-xl lg:rounded-none shadow-md lg:shadow-none fixed lg:sticky top-0 -start-44 z-10',
        isOpen && '!start-0 lg:!w-52'
      )}
    >
      <div className='flex lg:hidden items-center p-7 gap-4'>
        <Link href={ROUTES.CLIENT.MAIN}>
          <Logo className={'w-[82px] h-[33px]'} />
        </Link>

        <button
          className='size-9 ltr:rotate-180 shrink-0 bg-blueLight rounded-full flex items-center justify-center'
          onClick={toggleSidebar}
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

        <button className='text-sm lg:text-lg font-bold p-2 lg:ps-0 flex gap-3 items-center'>
          <span className='size-5'>
            <LogoutIcon />
          </span>

          <span className={clsx('text-nowrap', !isOpen && 'lg:hidden')}>
            تسجيل الخروج
          </span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

const NavLinks = React.memo(({ link }) => {
  const { isOpen } = useSidebar();

  return (
    <li className='relative lg:h-11'>
      <Link
        className='flex gap-3 text-sm lg:text-lg text-black p-2 font-bold relative w-fit rounded-lg group'
        href={link.route}
      >
        {/* LINK ICON */}
        <span
          className={clsx(
            'size-5 group-hover:fill-greenMain lg:mt-1',
            link.isActive && 'fill-greenMain'
          )}
        >
          {link.icon}
        </span>

        {/* LINK LABEL */}
        <span className={clsx('text-nowrap', !isOpen && 'lg:hidden')}>
          {link.name}
        </span>
      </Link>

      {/* ACTIVE LINE */}
      {link.isActive && (
        <div className='absolute h-full w-3 bg-greenMain rounded-e-md top-0 -start-3 lg:-start-5 z-[999]' />
      )}
    </li>
  );
});
