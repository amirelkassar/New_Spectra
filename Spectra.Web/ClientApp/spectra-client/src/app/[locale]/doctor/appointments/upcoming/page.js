"use client";
import DateIcon2 from "@/assets/icons/date2";
import { Link, usePathname } from "@/navigation";
import React from "react";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import { columns } from "../_components/columnsUpcoming";
import BackIcon from "@/assets/icons/back";
const FilterOptions = [
  { label: "الاستشارات الفردية", icon: null, key: "1" },
  { label: "خدمة الكشف المبكر", icon: null, key: "2" },
  { label: "فريق التشخيص متعدد التخصصات", icon: null, key: "3" },
  { label: "الخدمات التدريبية والتاهيلية", icon: null, key: "4" },
];
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "لم يبدأ بعد",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "لم يبدأ بعد",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تتم الان",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تمت",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تمت",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تمت",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تمت",
  },
];
function AppointmentsDeferredPage() {
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
    <div className="default-page">
      <div className="  mb-4 md:mb-9 pt-3 px-5 md:px-2">
        <div className=" flex  items-center justify-between gap-4 flex-wrap ">
          <div className="flex mb-10   items-center gap-4 ">
            <Link
              href={ROUTES.DOCTOR.APPOINTMENTS}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="  mdl:text-[20px] text-[14px] ">
              المواعيد القادمة{" "}
            </h2>
          </div>
          <button
            className={`
              bg-greenMain
           size-[45px] md:size-[50px] rounded-[50%]  flex items-center justify-center`}
          >
            <DateIcon2 />
          </button>
        </div>
      </div>
      <div className=" mdl:hidden linksReqMob flex items-center max-w-[96%] w-[400px] justify-between mx-auto gap-[20px] flex-wrap ">
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
      <DataTable
        data={data}
        columns={columns}
        filter="buttons"
        filterData={FilterOptions}
        filterBy="patientDiagnosis"
        filterText="فلتر بالنوع"
        IsWidth
      />
    </div>
  );
}

export default AppointmentsDeferredPage;
