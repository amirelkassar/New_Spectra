"use client";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { usePathname } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function HeaderContracts() {
  const path = usePathname();
  return (
    <div className="flex flex-col mb-4 md:mb-10 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
      <h2 className="headTitleDash">
        {path === ROUTES.ADMIN.CONTRACTS.DASHBOARD
          ? "  العقود النشطة"
          : path === ROUTES.ADMIN.CONTRACTS.REQUESTS
          ? "طلبات العقود"
          : path === ROUTES.ADMIN.CONTRACTS.REQUESTS
          ? " العقود المنتهية"
          : "العقود"}
      </h2>
      <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
        <PlusInsideCircleIcon />
        <p className=" text-[14px] md:text-[16px] font-bold"> أضافة عقد </p>
      </button>
    </div>
  );
}

export default HeaderContracts;
