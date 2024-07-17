"use client";
import ArrowNav from "@/assets/icons/arrow-nav";
import Aside from "./aside";

import Logo from "@/assets/icons/logo";
import SearchIcon from "@/assets/icons/search";
import NotificationIcon from "@/assets/icons/notification";
import { useState } from "react";
import MenuDash from "@/assets/icons/menuDash";
import useMenu from "@/store/auth/signup/menu-store";
import { Link, usePathname } from "@/navigation";
import LanguageIcon from "@/assets/icons/language";
import { useLocale } from "next-intl";

export default function HandelDashboardLayout({ Children}) {
  const pathname = usePathname();
  const menue = useMenu();
 const locale = useLocale();

  return (
    <>
      <header className="h-9 md:h-16 flex items-center gap-[10px] md:gap-[28px]">
        <div
          className={`hideShowLinks2   w-[34px] h-[34px] rounded-[50%] `}
          onClick={() => {
            menue.setMenueOpen(!menue.menueOpen);
          }}
        >
          <MenuDash />
        </div>
        <div
          className={`hideShowLinks flex  w-[34px] h-[34px] rounded-[50%] ${
            menue.menueOpen ? "closeArrow" : ""
          }`}
          onClick={() => {
            menue.setMenueOpen(!menue.menueOpen);
          }}
        >
          <ArrowNav />
        </div>
        <Link href={"#"} className="block w-fit ">
          <Logo className={"w-[91px] h-[37px]"} />
        </Link>
        <div className="flex items-center justify-end  grow">
          <button className="  p-[9px] md:p-0 size-[34px] md:size-[45px] bg-greenMain mx-[10p] md:mx-[20px]  rounded-full flex items-center justify-center">
            <SearchIcon />
          </button>
          <input
            type="text"
            className="grow hidden md:block h-10 bg-gray rounded-full px-5 focus:outline-greenMain"
            placeholder="بحث..."
          />
        </div>
        <button className=" font-bold text-[12px]  relative p-[10px] md:p-5 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center">
          {locale === "en" ? (
            <Link
              href={pathname}
              locale="ar"
              className=" font-bold text-[12px]  relative p-[10px] md:p-5 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center"
            >
              عربي
            </Link>
          ) : (
            <Link
              href={pathname}
              locale="en"
              className=" font-bold text-[12px]  relative p-[10px] md:p-5 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center"
            >
              En
            </Link>
          )}
        </button>
        <button className=" relative p-[9px] md:p-0 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center">
          <p
            className={
              "numNotfication size-[18px] md:size-[22px]  p-1 rounded-full bg-[#FF3D3D] absolute bottom-0 right-[-6px] text-white flex items-center justify-center text-[10px] md:text-[12px] font-bold"
            }
          >
            1
          </p>
          <NotificationIcon />
        </button>
      </header>
      <section className="space-y-5 flex-1 h-full flex  ">
        <Aside close={menue.menueOpen} />
        <section className=" bg-[#F5F6FB] max-w-[100%]  rounded-3xl xl:rounded-[35px] grow overflow-auto p-0 ms:p-4 lg:p-3 xl:p-6 ">
          {Children}
        </section>
      </section>
    </>
  );
}
