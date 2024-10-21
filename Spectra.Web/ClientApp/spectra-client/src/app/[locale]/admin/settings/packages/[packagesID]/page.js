"use client";
import React from "react";
import HeadPackage from "./_components/HeadPackage";
import InfoPackage from "./_components/infoPackage";
import EditIcon from "@/assets/icons/edit";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import ImgPackage from "./_components/imgPackage";
import GoalPackagesDetails from "./_components/GoalPackagesDetails";
import ContentSpectraView from "./_components/ContentSpectraView";
function Page({ params }) {


  return (
    <div className="flex flex-col w-full gap-6">
      <HeadPackage />
      <InfoPackage />
      <ContentSpectraView />
      <GoalPackagesDetails/>
      <ImgPackage />
      <Link
        href={ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD}
        className={
          "!py-0 text-[14px] md:text-[20px] min-w-[200px] w-full max-w-[340px] flex-1 bg-white !px-5  flex gap-[15px] font-bold items-center justify-center min-h-12 ring-2 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
        }
      >
        <EditIcon />
        تعديل
      </Link>
    </div>
  );
}

export default Page;
