import ArrowWhite from "@/assets/icons/arrowWhite";
import CalendarTimeIcon from "@/assets/icons/calendarTime";
import { Link } from "@/navigation";
import React from "react";
import imgNoise from "@/assets/images/noise.png";
import Image from "next/image";
import ROUTES from "@/routes";
function OpeningDates() {
  return (
    <Link
      href={ROUTES.DOCTOR.APPOINTMENTSWORK}
      className=" overflow-hidden min-h-[116px] duration-200  hover:shadow-md p-5 mdl:p-7 rounded-lg relative mb-7 mdl:mx-1  bg-greenMain flex items-center justify-between gap-7"
      style={{
        background:
          "linear-gradient(267deg, rgba(16,176,193,1) 60%, rgba(62,221,238,1) 100%)",
      }}
    >
      <Image
        src={imgNoise}
        alt="imgNoise"
        className=" absolute inset-0 opacity-50 w-full h-full"
      />
      <div className="flex-1 flex-col mdl:flex-row flex mdl:items-center mdl:justify-between gap-4 mdl:gap-7 flex-wrap relative">
        <div className="flex items-center gap-4 relative">
          <CalendarTimeIcon className={"w-8 h-auto mdl:w-12"} />
          <h3 className=" text-base mdl:text-[28px] font-Bold text-white">
            مواعيد العمل الخاصة بك
          </h3>
        </div>
        <div className="flex mdl:items-center flex-col mdl:flex-row gap-3 mdl:gap-8 flex-wrap relative ps-8 mdl:ps-0">
          <h4 className="text-base mdl:text-[28px] font-Bold text-white">
            متاح اليوم
          </h4>
          <div className="flex mdl:items-center gap-2 mdl:gap-5 mdl:flex-row flex-col">
            <p className=" text-sm mdl:text-xl font-Bold text-white">
              من / 00 :8 ص
            </p>
            <p className=" text-sm mdl:text-xl font-Bold text-white">
              الى / 00 :4 م
            </p>
          </div>
        </div>
      </div>
      <ArrowWhite className={" relative"} />
    </Link>
  );
}

export default OpeningDates;
