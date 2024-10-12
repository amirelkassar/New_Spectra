"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";

import MainIcon from "@/assets/icons/main";
import ROUTES from "@/routes";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { Collapse, Box } from "@mantine/core";
import Appointments from "@/assets/icons/appointments";
import Customer from "@/assets/icons/customer";
import SettingsIcon from "@/assets/icons/settings";
import ArrowNav from "@/assets/icons/arrow-nav";
import Logo from "@/assets/icons/logo";
import useMenu from "@/store/auth/signup/menu-store";
import LogoutIcon from "@/assets/icons/logOut";
import { Link } from "@/navigation";
import ContractsIcon from "@/assets/icons/contracts";
import RatingsIcon from "@/assets/icons/ratings";
import WalletIcon from "@/assets/icons/wallet";
import ProfileIcon from "@/assets/icons/profile";
import ChatsIcon from "@/assets/icons/chats";

const Aside = () => {
  const menu = useMenu();
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenAppointments, setIsOpenAppointments] = useState(false);
  const path = usePathname();
  const mainLinks = useMemo(
    () => [
      {
        name: "الرئيسية",
        route: ROUTES.DOCTOR.MAIN,
        isActive: path.includes(ROUTES.DOCTOR.MAIN),
        icon: <MainIcon />,
      },
      {
        name: "المواعيد",
        route: ROUTES.DOCTOR.APPOINTMENTS,
        isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTS),
        icon: <Appointments />,
        type: "appointments",
      },
      {
        name: "تقييمات",
        route: ROUTES.DOCTOR.RATINGS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.RATINGS.DASHBOARD),
        icon: <RatingsIcon />,
      },
      {
        name: "العملاء",
        route: ROUTES.DOCTOR.CLIENTS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CLIENTS.DASHBOARD),
        icon: <Customer />,
      },
      {
        name: "المحفظة",
        route: ROUTES.DOCTOR.WALLET.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.WALLET.DASHBOARD),
        icon: <WalletIcon />,
      },
      {
        name: "ملف",
        route: ROUTES.DOCTOR.PROFILE.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.PROFILE.DASHBOARD),
        icon: <ProfileIcon />,
      },
      {
        name: "العقود",
        route: ROUTES.DOCTOR.CONTRACTS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
        icon: <ContractsIcon />,
      },

      {
        name: "محادثات",
        route: ROUTES.DOCTOR.CHATS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CHATS.DASHBOARD),
        icon: <ChatsIcon />,
      },

      {
        name: "الإعدادات",
        route: ROUTES.DOCTOR.PERMISSIONS,
        isActive:
          path.includes(ROUTES.DOCTOR.PERMISSIONS) ||
          path.includes(ROUTES.DOCTOR.CONTENT) ||
          path.includes(ROUTES.DOCTOR.PLANS),
        icon: <SettingsIcon />,
        type: "settings",
      },
    ],
    [path]
  );
  const settingsLinks = [
    {
      name: "الأذونات",
      route: ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD),
    },
    {
      name: "المحتوى",
      route: ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD),
    },
    {
      name: "الخطط",
      route: ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD),
    },
  ];
  const AppointmentsLinks = [
    {
      name: "المواعيد القادمة",
      route: ROUTES.DOCTOR.APPOINTMENTSUPCOMING,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSUPCOMING),
    },
    {
      name: "المواعيد السابقة",
      route: ROUTES.DOCTOR.APPOINTMENTSPREVIOUS,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSPREVIOUS),
    },
    {
      
      name: "المواعيد الملغاة",
      route: ROUTES.DOCTOR.APPOINTMENTSCANCELD,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSCANCELD),
    },
    {
      name: "المواعيد المؤجلة",
      route: ROUTES.DOCTOR.APPOINTMENTSDEFERRED,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSDEFERRED),
    },
  ];

  const AsideLink = ({ link }) => (
    <li className="relative">
      <div
        className={clsx(
          "lineAfterLinks ",
          link.isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <Link
        href={link.route}
        className={`flex gap-[10px] md:gap-[18px] w-fit py-1 ${
          link.isActive ? "active" : ""
        }`}
      >
        {link.icon}

        <p className="text-[14px] lg:text-[18px] font-Bold">{link.name}</p>
      </Link>
    </li>
  );
  const AsideLink2 = ({ link }) => (
    <li className="relative">
      <div
        className={clsx(
          "lineAfterLinks ",
          link.isActive ? "opacity-0 " : "opacity-0"
        )}
      />
      <Link
        href={link.route}
        className={`flex gap-[10px] md:gap-[18px] w-fit py-1`}
      >
        {link.icon}

        <p
          className={`text-[14px] lg:text-[18px] ${
            link.isActive ? "!font-bold" : "font-normal"
          }`}
        >
          {link.name}
        </p>
      </Link>
    </li>
  );
  return (
    <aside
      className={`  top-0 start-0 ${menu.menuOpen ? "openMob" : ""} ${
        menu.menuOpen
          ? "min-w-[50px] w-[50px] closeMenue"
          : "min-w-[230px] w-[230px]"
      }  py-10 mdl:flex flex-col font-bold duration-300`}
    >
      <div className="topMobNav">
        <Link href={"#"} className="block w-fit ">
          <Logo className={"w-[91px] h-[37px]"} />
        </Link>
        <div
          className={`hideShowLinks  flex  w-[34px] h-[34px] rounded-[50%] `}
          onClick={() => {
            menu.setmenuOpen(!menu.menuOpen);
          }}
        >
          <ArrowNav />
        </div>
      </div>
      <ul className="space-y-5 grow">
        {mainLinks.map((link) => {
          return link.type === "appointments" ? (
            <div key={link.route}>
              <div className="flex ">
                <button
                  className={` flex gap-[10px] items-center ${
                    link.isActive ? "active" : ""
                  } `}
                  onClick={() => {
                    setIsOpenAppointments(!isOpenAppointments);
                  }}
                >
                  <AsideLink key={link.route} link={link} />
                  <span
                    className={`arrowLinkNav hidden lg:block ${
                      isOpenAppointments ? " rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowDownIcon />
                  </span>
                </button>
              </div>
              <div className="  lg:!block hidden">
                <Collapse
                  in={isOpenAppointments}
                  className=" dropMenuDash   flex flex-col gap-3 mt-4 px-4"
                >
                  {AppointmentsLinks.map((link) => (
                    <AsideLink2 key={link.route} link={link} />
                  ))}
                </Collapse>
              </div>
            </div>
          ) : link.type === "settings" ? (
            <div key={link.route}>
              <div className="flex ">
                <button
                  className={` flex gap-[10px] items-center ${
                    link.isActive ? "active" : ""
                  }`}
                  onClick={() => {
                    setIsOpenSettings(!isOpenSettings);
                  }}
                >
                  <AsideLink key={link.route} link={link} />
                  <span
                    className={` arrowLinkNav  hidden lg:block  ${
                      isOpenSettings ? " rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowDownIcon />
                  </span>
                </button>
              </div>
              <div className="  lg:!block hidden">
                <Collapse
                  in={isOpenSettings}
                  className=" dropMenuDash  flex flex-col gap-3 mt-4 px-4"
                >
                  {settingsLinks.map((link) => (
                    <AsideLink2 key={link.route} link={link} />
                  ))}
                </Collapse>
              </div>
            </div>
          ) : (
            <AsideLink key={link.route} link={link} />
          );
        })}
      </ul>
      <button className="w-fit flex justify-center gap-[10px] items-center mt-5 md:mt-8">
        <LogoutIcon />
        <p className="text-[14px] lg:text-[16px] font-bold"> تسجيل الخروج</p>
      </button>
    </aside>
  );
};

export default Aside;
