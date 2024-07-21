"use client";
import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import TableComponents from "@/components/table-comp";
import { useState } from "react";
import ROUTES from "@/routes";

const StaffAppointments = () => {
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      DetectionNumber: "كشف 1",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      DetectionNumber: "متابعة",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      DetectionNumber: " 5 كشف ",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      DetectionNumber: "متابعة",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      DetectionNumber: "كشف 1",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
 
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%] lg:max-w-[calc(100%-250px)]">
       <TableComponents
        colNum={4}
        hide={false}
        data={data}
        dataLine={1}
        header={["رقم الكشف", "الميعاد", " اسم المريض",'الحالة']}
        order={["DetectionNumber", "date", "name",'status']}
        selectPage={selected}
        setSelected={setSelected}
        type={1}
        route={ROUTES.ADMIN.STAFF}
      />
      
    </div>
  );
};

export default StaffAppointments;
