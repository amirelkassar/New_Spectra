"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import Logo from "@/assets/icons/logo";
import ROUTES from "@/routes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Aside = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const path = usePathname();
  const mainLinks = [
    {
      name: "الرئيسية",
      route: ROUTES.DASHBOARD.MAIN,
      isActive: ROUTES.DASHBOARD.MAIN === path,
    },
    {
      name: "المواعيد",
      route: ROUTES.DASHBOARD.APPOINTMENTS,
      isActive: ROUTES.DASHBOARD.APPOINTMENTS === path,
    },
    {
      name: "طلبات الاشتراك",
      route: ROUTES.DASHBOARD.REQUESTS,
      isActive: ROUTES.DASHBOARD.REQUESTS === path,
    },
    {
      name: "المرضى",
      route: ROUTES.DASHBOARD.PATIENTS,
      isActive: ROUTES.DASHBOARD.PATIENTS === path,
    },
    {
      name: "تقارير",
      route: ROUTES.DASHBOARD.REPORST,
      isActive: ROUTES.DASHBOARD.REPORST === path,
    },
  ];

  const settingsLinks = [
    {
      name: "الأذونات",
      route: ROUTES.DASHBOARD.PERMISSIONS,
      isActive: ROUTES.DASHBOARD.PERMISSIONS === path,
    },
    {
      name: "المحتوى",
      route: ROUTES.DASHBOARD.CONTENT,
      isActive: ROUTES.DASHBOARD.CONTENT === path,
    },
    {
      name: "الخطط",
      route: ROUTES.DASHBOARD.PLANS,
      isActive: ROUTES.DASHBOARD.PLANS === path,
    },
  ];

  const AsideLink = ({ link }) => (
    <li className="relative">
      <div
        className={clsx(
          "h-8 w-1.5 rounded-e-md bg-greenMain absolute -start-8 transition",
          link.isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <Link href={link.route} className="block w-fit py-1">
        {link.name}
      </Link>
    </li>
  );

  return (
    <div className=" pt-3 flex flex-col ">
      <Link href={"#"} className="block w-fit mb-20">
        <Logo className={"w-[91px] h-[37px]"} />
      </Link>
      <ul className="space-y-5 grow">
        {mainLinks.map((link) => (
          <AsideLink key={link.route} link={link} />
        ))}
        <li
          onClick={() => setIsOpenSettings((prev) => !prev)}
          className="cursor-pointer w-fit flex items-center gap-5 select-none"
        >
          الإعدادات{" "}
          <span
            className={clsx(
              "transition",
              isOpenSettings ? "-rotate-180" : " rotate-0"
            )}
          >
            <ArrowDownIcon />
          </span>
        </li>

        <div
          className={clsx(
            "transition-all  space-y-5",
            isOpenSettings ? "h-[168px]" : "h-0 overflow-hidden"
          )}
        >
          {settingsLinks.map((link) => (
            <AsideLink key={link.route} link={link} />
          ))}
        </div>
      </ul>
      <button className="w-fit">تسجيل الخروج</button>
    </div>
  );
};

export default Aside;
