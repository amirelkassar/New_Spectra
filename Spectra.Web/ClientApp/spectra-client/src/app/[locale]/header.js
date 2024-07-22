"use client";
import ArrowNav from "@/assets/icons/arrow-nav";
import Logo from "@/assets/icons/logo";
import MenuDash from "@/assets/icons/menuDash";
import NotificationIcon from "@/assets/icons/notification";
import SearchIcon from "@/assets/icons/search";
import { Link, usePathname } from "@/navigation";
import useMenu from "@/store/auth/signup/menu-store";
import { useLocale } from "next-intl";
import React from "react";

function HeaderTop() {
  const menu = useMenu();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="h-9 md:h-16 flex items-center gap-[10px] md:gap-[28px]">
      <div
        className={`hideShowLinks2   w-[34px] h-[34px] rounded-[50%] `}
        onClick={() => {
          menu.setmenuOpen(!menu.menuOpen);
        }}
      >
        <MenuDash />
      </div>
      <div
        className={`hideShowLinks flex  w-[34px] h-[34px] rounded-[50%] ${
          menu.menuOpen ? "closeArrow" : ""
        }`}
        onClick={() => {
          menu.setmenuOpen(!menu.menuOpen);
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
          className="grow hidden mdl:block h-10 bg-gray rounded-full px-5 focus:outline-greenMain"
          placeholder="بحث..."
        />
      </div>
      <button className=" font-bold text-[12px]  relative p-[10px] md:p-5 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center">
        <Link
          href={pathname}
          locale={locale === "en" ? "ar" : "en"}
          className=" font-bold text-[12px]  relative p-[10px] md:p-5 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center"
        >
          {locale === "en" ? "عربي" : "En"}
        </Link>
      </button>
      <button className=" relative p-[9px] md:p-0 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center">
        <p
          className={
            "numNotification size-[18px] md:size-[22px]  p-1 rounded-full bg-[#FF3D3D] absolute bottom-0 right-[-6px] text-white flex items-center justify-center text-[10px] md:text-[12px] font-bold"
          }
        >
          1
        </p>
        <NotificationIcon />
      </button>
    </header>
  );
}

export default HeaderTop;
