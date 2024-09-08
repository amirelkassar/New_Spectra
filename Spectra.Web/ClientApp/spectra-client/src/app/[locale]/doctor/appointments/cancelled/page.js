"use client";
import DateIcon2 from "@/assets/icons/date2";
import { Link, usePathname } from "@/navigation";
import React, { useState } from "react";
import AppoFilteration from "../appo-filteration";
import AppoTable from "../appo-table";
import ROUTES from "@/routes";
import TableComponents from "@/components/table-comp";

function AppointmentsCancelledPage() {
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
  const path = usePathname();

  const AppointmentsLinks = [
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
  const [selected, setSelected] = useState([]);
  return (
    <div className="default-page">
      <div className="  mb-4 md:mb-9 pt-3 px-5 md:px-2">
        <div className=" flex  items-center justify-between gap-4 flex-wrap ">
          <h2 className="  mdl:text-[20px] text-[14px] ">المواعيد الملغاة</h2>
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
      <AppoFilteration />
      <TableComponents
        colNum={6}
        hide={5}
        hide2={3}
        colNumSmall={4}
        data={data}
        dataLine={1}
        header={["الاسم", "اسم الطفل", "عدد الاطفال", "التاريخ", "الميعاد", ""]}
        order={["name", "patientName", "numChild", "date", "time", "Req&Res"]}
        selectPage={selected}
        setSelected={setSelected}
        type={1}
        route={ROUTES.DOCTOR.APPOINTMENTS}
        reqType={"rejected"}
      />
    </div>
  );
}

export default AppointmentsCancelledPage;
