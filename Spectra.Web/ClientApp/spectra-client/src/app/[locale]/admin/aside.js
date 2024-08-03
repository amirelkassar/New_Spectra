"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";

import MainIcon from "@/assets/icons/main";
import ROUTES from "@/routes";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Appointments from "@/assets/icons/appointments";
import Subscription from "@/assets/icons/subscription";
import Customer from "@/assets/icons/customer";
import ReportsIcon from "@/assets/icons/reportsIcon";
import SettingsIcon from "@/assets/icons/settings";
import StaffIcon from "@/assets/icons/staff";
import ArrowNav from "@/assets/icons/arrow-nav";
import Logo from "@/assets/icons/logo";
import MenuDash from "@/assets/icons/menuDash";
import useMenu from "@/store/auth/signup/menu-store";
import LogoutIcon from "@/assets/icons/logOut";
import { Link } from "@/navigation";
import ContractsIcon from "@/assets/icons/contracts";

const Aside = ({ close }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [openMenuMob, setopenMenuMob] = useState(close);
  const menu = useMenu();
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenSubscription, setIsOpenSubscription] = useState(false);
  const path = usePathname();
  const mainLinks = [
    {
      name: "الرئيسية",
      route: ROUTES.ADMIN.MAIN,
      isActive: path.includes(ROUTES.ADMIN.MAIN),
      icon: <MainIcon />,
    },
    {
      name: "المواعيد",
      route: ROUTES.ADMIN.APPOINTMENTS,
      isActive: path.includes(ROUTES.ADMIN.APPOINTMENTS),
      icon: <Appointments />,
    },
    {
      name: "طلبات الاشتراك",
      route: ROUTES.ADMIN.REQUESTS,
      isActive: path.includes(ROUTES.ADMIN.REQUESTS),
      icon: <Subscription />,
      type: "subscription",
    },
    {
      name: "العملاء",
      route: ROUTES.ADMIN.CLIENTS.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.CLIENTS.DASHBOARD),
      icon: <Customer />,
    },
    {
      name: "الموظفين",
      route: ROUTES.ADMIN.STAFF.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.STAFF.DASHBOARD),
      icon: <StaffIcon />,
    },
    {
      name: "تقارير",
      route: ROUTES.ADMIN.REPORT.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.REPORT.DASHBOARD),
      icon: <ReportsIcon />,
    },
    {
      name: "العقود",
      route: ROUTES.ADMIN.CONTRACTS.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.CONTRACTS.DASHBOARD),
      icon: <ContractsIcon />,
    },
    {
      name: "الإعدادات",
      route: ROUTES.ADMIN.SETTINGS.DASHBOARD,
      isActive:path.includes(ROUTES.ADMIN.SETTINGS.DASHBOARD),
      icon: <SettingsIcon />,
      type: "settings",
    },
  ];
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
      route: ROUTES.ADMIN.SETTINGS.PLANS.DASHBOARD,
      isActive: path.includes(ROUTES.ADMIN.SETTINGS.PLANS.DASHBOARD),
    },
  ];
  const SubscriptionLinks = [
    {
      name: "الطلبات الجديدة",
      route: ROUTES.ADMIN.REQUESTSNEW,
      isActive: path.includes(ROUTES.ADMIN.REQUESTSNEW),
    },
    {
      name: "الطلبات المرفوضة ",
      route: ROUTES.ADMIN.REQUESTSREJECTED,
      isActive: path.includes(ROUTES.ADMIN.REQUESTSREJECTED),
    },
  ];

  const AsideLink = ({ link }) => (
    <li className="relative h-11">
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
          return link.type === "subscription" ? (
            <div key={link.route}>
              <div className="flex ">
                <button
                  className={` flex gap-[10px] items-center ${
                    link.isActive ? "active" : ""
                  } `}
                  onClick={() => {
                    setIsOpenSubscription(!isOpenSubscription);
                  }}
                >
                  <AsideLink key={link.route} link={link} />
                  <span
                    className={`arrowLinkNav hidden lg:block ${
                      isOpenSubscription ? " rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowDownIcon />
                  </span>
                </button>
              </div>
              <div className="  lg:!block hidden">
                <Collapse
                  in={isOpenSubscription}
                  className=" dropMenuDash   flex flex-col gap-3 mt-4 px-4"
                >
                  {SubscriptionLinks.map((link) => (
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
              <div className="  lg:!block hidden" >
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
