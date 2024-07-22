'use client';
import ArrowDownIcon from '@/assets/icons/arrow-down';

import MainIcon from '@/assets/icons/main';
import ROUTES from '@/routes';
import clsx from 'clsx';

import React, { useState } from 'react';
import { Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import SettingsIcon from '@/assets/icons/settings';
import StaffIcon from '@/assets/icons/staff';
import ArrowNav from '@/assets/icons/arrow-nav';
import Logo from '@/assets/icons/logo';
import LogoutIcon from '@/assets/icons/logOut';
import { Link, usePathname } from '@/navigation';
import { useSidebar } from '@/store/client/sidebar/menu-slice';
import ControlIcon from '@/assets/icons/control';
import ProfileIcon from '@/assets/icons/profile';
import ClockIcon from '@/assets/icons/clock';
import StepsIcon from '@/assets/icons/steps';
import ReportsIcon from '@/assets/icons/reportsIcon';
import ChatIcon from '@/assets/icons/chat';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const path = usePathname();

  const mainLinks = [
    {
      name: 'الرئيسية',
      route: ROUTES.CLIENT.MAIN,
      isActive: path === ROUTES.CLIENT.MAIN,
      icon: <MainIcon />,
    },
    {
      name: 'قائمة التحكم',
      route: ROUTES.CLIENT.CONTROL_MENU,
      isActive: path === ROUTES.CLIENT.CONTROL_MENU,
      icon: <ControlIcon />,
    },
    {
      name: 'ملفي',
      route: ROUTES.CLIENT.PROFILE,
      isActive: path === ROUTES.CLIENT.PROFILE,
      icon: <ProfileIcon />,
    },
    {
      name: 'المواعيد',
      route: ROUTES.CLIENT.SCHEDULES,
      isActive: path === ROUTES.CLIENT.SCHEDULES,
      icon: <ClockIcon />,
    },
    {
      name: 'الخطوات',
      route: ROUTES.CLIENT.STEPS,
      isActive: path === ROUTES.CLIENT.STEPS,
      icon: <StepsIcon />,
    },
    {
      name: 'الفريق',
      route: ROUTES.CLIENT.TEAM,
      isActive: path === ROUTES.CLIENT.TEAM,
      icon: <StaffIcon />,
    },
    {
      name: 'تقارير',
      route: ROUTES.CLIENT.REPORTS,
      isActive: path === ROUTES.CLIENT.REPORTS,
      icon: <ReportsIcon />,
    },
    {
      name: 'محادثات',
      route: ROUTES.CLIENT.CHATS,
      isActive: path === ROUTES.CLIENT.CHATS,
      icon: <ChatIcon />,
    },
    {
      name: 'الإعدادات',
      route: ROUTES.CLIENT.SETTINGS,
      isActive: path === ROUTES.CLIENT.SETTINGS,
      icon: <SettingsIcon />,
    },
  ];
  const settingsLinks = [
    {
      name: 'الأذونات',
      route: ROUTES.ADMIN.PERMISSIONS,
      isActive: path.includes(ROUTES.ADMIN.PERMISSIONS),
    },
    {
      name: 'المحتوى',
      route: ROUTES.ADMIN.CONTENT,
      isActive: path.includes(ROUTES.ADMIN.CONTENT),
    },
    {
      name: 'الخطط',
      route: ROUTES.ADMIN.PLANS,
      isActive: path.includes(ROUTES.ADMIN.PLANS),
    },
  ];

  const AsideLink = ({ link }) => (
    <li className='relative'>
      <Link
        href={link.route}
        className={`flex items-center gap-[10px] md:gap-[18px] w-fit py-1 ${
          link.isActive ? 'active' : ''
        }`}
      >
        {link.icon}
        <span
          className={clsx('text-[14px] lg:text-[18px] font-Bold', {
            hidden: isOpen,
          })}
        >
          {link.name}
        </span>
        <div
          className={clsx(
            'lineAfterLinks',
            link.isActive ? 'opacity-100' : 'opacity-0'
          )}
        />
      </Link>
    </li>
  );
  const AsideLink2 = ({ link }) => (
    <li className='relative'>
      <div
        className={clsx(
          'lineAfterLinks ',
          link.isActive ? 'opacity-0 ' : 'opacity-0'
        )}
      />
      <Link
        href={link.route}
        className={`flex gap-[10px] md:gap-[18px] w-fit py-1`}
      >
        {link.icon}

        <p
          className={`text-[14px] lg:text-[18px] ${
            link.isActive ? '!font-bold' : 'font-normal'
          }`}
        >
          {link.name}
        </p>
      </Link>
    </li>
  );
  return (
    <aside
      className={`  top-0 start-0 ${isOpen ? 'openMob' : ''} ${
        isOpen ? 'min-w-[50px] w-[50px] closeMenu' : 'min-w-[230px] w-[230px]'
      }  py-10 mdl:flex flex-col font-bold duration-300`}
    >
      <div className='topMobNav'>
        <Link href={'#'} className='block w-fit '>
          <Logo className={'w-[91px] h-[37px]'} />
        </Link>
        <div
          className={`hideShowLinks  flex  w-[34px] h-[34px] rounded-[50%] `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowNav />
        </div>
      </div>
      <nav>
        <ul className='space-y-5 grow'>
          {mainLinks.map((link) => (
            <AsideLink key={link.route} link={link} />
          ))}
        </ul>
      </nav>
      <button className='w-fit flex justify-center gap-[10px] items-center mt-auto'>
        <LogoutIcon />
        <span
          className={clsx('text-[14px] lg:text-[16px] font-bold', {
            hidden: isOpen,
          })}
        >
          تسجيل الخروج
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
