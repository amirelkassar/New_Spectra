"use client";
import React from "react";
import ArrowLeft from "@/assets/icons/arrow-left";
import CardDoctor from "./cardDoctor";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { useMediaQuery } from "@mantine/hooks";
import Button from "@/components/button";
import AddReportIcon from "@/assets/icons/addReport";
import RemoveIcon from "@/assets/icons/remove";

function RowDoctors({ title, added = false , onAdd=()=>{} , onRemoveDoctor=()=>{}}) {
  const isMobile = useMediaQuery("(max-width: 992px)");

  return (
    <div className="pt-5 lgl:pt-10 pb-6 mdl:pb-8 px-3 mdl:px-6 shadow-[0px_4px_20.9px_8px_#00000008] rounded-[10px] border-grayLight border-2">
      <div className="flex items-center justify-between  ms-auto mb-6 lgl:mb-16">
        <h2 className=" text-base lgl:text-2xl"> {title}</h2>
        <div className="flex items-center gap-3 mdl:gap-7">
          {added ? (
            <Button
              variant="secondary"
              onClick={() => onRemoveDoctor()}
              className=" bg-red/80 hover:bg-red/90 h-9 lg:h-12 min-w-9 w-9 p-0 rounded-full mdl:rounded-xl lg:min-w-[170px]"
            >
              <RemoveIcon className={" h-8 lg:h-6 w-auto"} />
              <p className=" hidden lg:block text-lg font-Bold">ازالة</p>
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={onAdd}
              className=" h-9 lg:h-12 min-w-9 w-9 p-0 rounded-full mdl:rounded-xl lg:min-w-[170px]"
            >
              <AddReportIcon className={" h-8 lg:h-6 w-auto"} />
              <p className=" hidden lg:block text-lg font-Bold">اضافة</p>
            </Button>
          )}

          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.MEDICALID(5)}
            className="px-3 rounded-[10px] border border-black flex items-center justify-center gap-2 mdl:gap-4 h-10  mdl:h-12 w-[130px] lgl:w-[170px]"
          >
            <p className="text-sm lgl:text-xl font-Medium">تحديد الاطباء </p>
            <ArrowLeft className="w-4 mdl:w-5 h-auto" />
          </Link>
        </div>
      </div>
      <div className="flex gap-4 lgl:gap-11 w-full lgl:flex-wrap">
        {isMobile ? null : (
          <>
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
