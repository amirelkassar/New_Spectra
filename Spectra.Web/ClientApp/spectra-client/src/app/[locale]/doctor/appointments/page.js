"use client";
import { Link, usePathname } from "@/navigation";
import AppoTable from "./appo-table";
import ROUTES from "@/routes";
import AppointmentSummary from "./appointment-summary";
import DateIcon2 from "@/assets/icons/date2";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";

const AppointmentsPage = () => {
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
    <div className="bg-white mdl:bg-transparent">
      <div className="  mb-4 md:mb-9 pt-3 px-5 md:px-2">
        <div className=" flex  items-center justify-between gap-4 flex-wrap ">
          <h2 className="md:hidden block mdl:text-[20px] text-[14px] ">
            مرحبا بك , د. احمد كمال
          </h2>
          <h2 className="md:block hidden mdl:text-[20px] text-[14px] ">
            المواعيد
          </h2>
          <Link
            href={ROUTES.DOCTOR.APPOINTMENTSCALENDAR}
            className={`
              bg-greenMain
           size-[45px] md:size-[50px] rounded-[50%]  flex items-center justify-center`}
          >
            <DateIcon2 />
          </Link>
        </div>
        <button className="flex mdl:hidden items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
          <PlusInsideCircleIcon />
          <p className=" text-[14px] md:text-[16px] font-bold">أضافة ميعاد </p>
        </button>
      </div>
      <div className=" mdl:hidden linksReqMob flex items-center max-w-[96%] w-[400px] justify-between mx-auto gap-[20px] flex-wrap pt-8 mb-6">
        <Link
          key={ROUTES.DOCTOR.APPOINTMENTS}
          href={ROUTES.DOCTOR.APPOINTMENTS}
          className={`${
            path === ROUTES.DOCTOR.APPOINTMENTS
              ? "bg-greenMain text-white font-bold"
              : ""
          } text-[12px] py-[9px] px-[12px] rounded-[10px] `}
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
      <AppointmentSummary />
      <div className="default-page">
        <AppoTable />
      </div>
    </div>
  );
};

export default AppointmentsPage;
