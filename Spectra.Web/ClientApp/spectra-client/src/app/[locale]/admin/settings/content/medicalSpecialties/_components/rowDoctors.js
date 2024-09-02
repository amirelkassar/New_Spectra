import React from "react";
import ArrowLeft from "@/assets/icons/arrow-left";
import CardDoctor from "./cardDoctor";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Button from "@/components/button";
function RowDoctors({ title }) {
  return (
    <div className="pt-10 pb-8 px-6 shadow-[0px_4px_20.9px_8px_#00000008] rounded-[10px] border-grayLight border-2">
      <div className="flex items-center justify-between lg:w-[50%] ms-auto mb-16">
        <h2 className="flex-1 "> {title}</h2>

        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.MEDICALID(5)}
          className="px-4 rounded-[10px] border border-black flex items-center justify-center gap-5 h-[48px] w-[170px]"
        >
          <p>عرض الكل</p>
          <ArrowLeft />
        </Link>
      </div>
      <div className="flex gap-11 w-full flex-wrap">
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
      </div>
    </div>
  );
}

export default RowDoctors;
