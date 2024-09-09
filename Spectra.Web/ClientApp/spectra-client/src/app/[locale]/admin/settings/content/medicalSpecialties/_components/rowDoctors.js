"use client";
import React from "react";
import ArrowLeft from "@/assets/icons/arrow-left";
import CardDoctor from "./cardDoctor";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { useMediaQuery } from "@mantine/hooks";

function RowDoctors({ title }) {
  const isMobile = useMediaQuery("(max-width: 992px)");

  return (
    <div className="pt-7 lgl:pt-10 pb-8 px-6 shadow-[0px_4px_20.9px_8px_#00000008] rounded-[10px] border-grayLight border-2">
      <div className="flex items-center justify-between lg:w-[50%] ms-auto mb-6 lgl:mb-16">
        <h2 className=" text-base lgl:text-2xl"> {title}</h2>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.MEDICALID(5)}
          className="px-4 rounded-[10px] border border-black flex items-center justify-center gap-5 h-[48px] w-[140px] lgl:w-[170px]"
        >
          <p className="text-sm lgl:text-xl">عرض الكل</p>
          <ArrowLeft />
        </Link>
      </div>
      <div className="flex gap-6 lgl:gap-11 w-full lgl:flex-wrap">
        {isMobile ? null : (
          <>
            <CardDoctor />
            <CardDoctor />
            <CardDoctor />
          </>
        )}
        <CardDoctor />
        <CardDoctor />
      </div>
    </div>
  );
}

export default RowDoctors;
