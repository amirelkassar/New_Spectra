"use client";
import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import TableComponents from "@/components/table-comp";
import { useState } from "react";
import ROUTES from "@/routes";

const ClientAppointments = () => {
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
  ];
  const [selected,setSelected]=useState([])
  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
      <h1 className="ms-5 mb-5 lg:block hidden ">الـمواعيد</h1>
      <TableComponents
        data={data}
        colNum={4}
        colNumSmall={3}
        dataLine={2}
        header={["اسم الاخصائي", "اسم العميل", "الـميعاد", "الحالة"]}
        order={[["doctor",'specialisationDoctor'], ["name",'kinshipName'], ["date",'time'], "status"]}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        hide={2}
        routeClients={true}
        route={ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(5)}
      />
     
    </div>
  );
};

export default ClientAppointments;
