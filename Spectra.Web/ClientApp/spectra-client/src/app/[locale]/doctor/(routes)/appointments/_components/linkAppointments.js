"use client";
import BackIcon from "@/assets/icons/back";
import { Link, usePathname } from "@/navigation";
import React from "react";
import LinkToCalender from "./LinkToCalender";
import ROUTES from "@/routes";

function LinkAppointments() {
  const path = usePathname();
  const AppointmentsLinks = [
    {
      name: "المواعيد القادمة",
      route: ROUTES.DOCTOR.APPOINTMENTSUPCOMING,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSUPCOMING),
    },
    {
      name: "المواعيد السابقة",
      route: ROUTES.DOCTOR.APPOINTMENTSPREVIOUS,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSPREVIOUS),
    },
    {
      name: "المواعيد الملغاة",
      route: ROUTES.DOCTOR.APPOINTMENTSCANCELD,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSCANCELD),
    },
    {
      name: "المواعيد المؤجلة",
      route: ROUTES.DOCTOR.APPOINTMENTSDEFERRED,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSDEFERRED),
    },
  ];
  return (
    <div>
      <div className="mb-2 md:mb-9 pt-3 px-5 md:px-2">
        <div className="flex mb-8 items-center justify-between gap-4 flex-wrap ">
          <div className="flex items-center gap-4 ">
            <Link
              href={ROUTES.DOCTOR.APPOINTMENTS}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>

            <h2 className="  mdl:text-[20px] text-[14px] ">
              {AppointmentsLinks.find((item) => item.isActive === true).name}
            </h2>
          </div>

          <LinkToCalender />
        </div>
      </div>
      <div className=" mdl:hidden linksReqMob flex items-center mdl:max-w-[96%] mdl:w-[400px] justify-between mx-auto gap-2 mdl:gap-[20px] flex-wrap ">
        <Link
          key={ROUTES.DOCTOR.APPOINTMENTS}
          href={ROUTES.DOCTOR.APPOINTMENTS}
          className={`${
            path === ROUTES.DOCTOR.APPOINTMENTS
              ? "bg-greenMain text-white font-bold"
              : ""
          } text-[12px] py-[9px] px-2 mdl:px-[12px] rounded-[10px] `}
        >
          الكل
        </Link>
        {AppointmentsLinks.map((item) => {
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`text-[12px] py-[9px] px-[12px] rounded-[10px] ${
                item.isActive ? "bg-greenMain text-white font-bold" : ""
              }  `}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LinkAppointments;
