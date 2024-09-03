"use client";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { usePathname } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function HeaderContracts() {
  const path = usePathname();
  return (
    <div className="flex flex-col mb-4 md:mb-10 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
      <h2 className="headTitleDash">العقود</h2>
    </div>
  );
}

export default HeaderContracts;
