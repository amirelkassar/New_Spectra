'use client';
import AppointmentIcon from '@/assets/icons/appointment-icon';
import ArrowCircle from '@/assets/icons/arrow-circle';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import EmpIcon from '@/assets/icons/emp-icon';
import HomeIcon from '@/assets/icons/home-icon';
import Logo from '@/assets/icons/logo';
import ReportIcon from '@/assets/icons/report-icon';
import RequestIcon from '@/assets/icons/request-icon';
import SettingsIcon from '@/assets/icons/settings-icon';
import ROUTES from '@/routes';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Aside = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const path = usePathname();
  const mainLinks = [
    {
      name: 'الرئيسية',
      route: ROUTES.ADMIN.MAIN,
      isActive: path.includes(ROUTES.ADMIN.MAIN),
      icon: <HomeIcon />,
    },
    {
      name: 'المواعيد',
      route: ROUTES.ADMIN.APPOINTMENTS,
      isActive: path.includes(ROUTES.ADMIN.APPOINTMENTS),
      icon: <AppointmentIcon />,
    },
    {
      name: 'طلبات الاشتراك',
      route: ROUTES.ADMIN.REQUESTS,
      isActive: path.includes(ROUTES.ADMIN.REQUESTS),
      icon: <RequestIcon />,
    },
    {
      name: 'العملاء',
      route: ROUTES.ADMIN.CLIENTS.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.CLIENTS.DASHBOARD),
      icon: <EmpIcon />,
    },
    {
      name: 'تقارير',
      route: ROUTES.ADMIN.REPORST,
      isActive: path.includes(ROUTES.ADMIN.REPORST),
      icon: <ReportIcon />,
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
    <li className="relative">
      <div
        className={clsx(
          'h-8 w-1.5 rounded-e-md bg-greenMain absolute -start-8 transition',
          link.isActive ? 'opacity-100' : 'opacity-0'
        )}
      />
      <Link href={link.route} className="w-fit py-1 flex gap-2 lg:gap-[.5vw]">
        <span className={clsx({ 'active-svg': link.isActive })}>
          {link.icon}
        </span>
        <span>{link.name}</span>
      </Link>
    </li>
  );

  return (
    <aside className="hidden sticky top-0 start-0  py-3 mdl:flex flex-col font-bold">
      <Link href={'#'} className=" w-fit mb-20 flex gap-2 lg:gap-[.6vw]">
        <span>
          <ArrowCircle />
        </span>
        <Logo className={'w-[91px] h-[37px]'} />
      </Link>
      <ul className="space-y-5 grow">
        {mainLinks.map((link) => (
          <AsideLink key={link.route} link={link} />
        ))}
        <li
          onClick={() => setIsOpenSettings((prev) => !prev)}
          className="cursor-pointer w-fit flex items-center gap-2 lg:gap-[.5vw] select-none"
        >
          <span className={clsx({ 'active-svg': isOpenSettings })}>
            <SettingsIcon />
          </span>
          <span>الإعدادات</span>
          <span
            className={clsx(
              'transition',
              isOpenSettings ? '-rotate-180' : ' rotate-0'
            )}
          >
            <ArrowDownIcon />
          </span>
        </li>

        <div
          className={clsx(
            'transition-all  space-y-5',
            isOpenSettings ? 'h-[168px]' : 'h-0 overflow-hidden'
          )}
        >
          {settingsLinks.map((link) => (
            <AsideLink key={link.route} link={link} />
          ))}
        </div>
      </ul>
      <button className="w-fit">تسجيل الخروج</button>
    </aside>
  );
};

export default Aside;
