'use client'
import ArrowLeft from "@/assets/icons/arrow-left";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";

import ROUTES from "@/routes";
import { Link } from "@/navigation";
import TableComponents from "@/components/table-comp";
import { useState } from "react";
const LastAppointments = () => {
  
  const data = [
    {
      id: 0,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 2,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تتم الان",
    },
    {
      id: 4,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 5,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 6,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 7,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-[18px]">
        <h1 className="text-[16px] font-bold md:text-[20px]">اخر المواعيد</h1>
        <Link href={ROUTES.ADMIN.APPOINTMENTS}  className="showMore flex justify-center items-center gap-3 md:gap-[30px] h-[40px] md:h-[48px] w-[140px] md:w-[210px] rounded-[10px] px-[12px]">
          <p className="text-[14px] md:text-[20px]">عرض الكل</p>
          <ArrowLeft />
        </Link>
      </div>
      <TableComponents data={data} hide={3} dataLine={2} header={[' اسم الطبيب','  اسم المريض',"الـميعاد",'الحالة']}   haveImg={true} order={[['name','specialisation'],['patientName','patientDiagnosis'],['date','time'],"status"]} selectPage={selected} setSelected={setSelected} type={1} route={ROUTES.ADMIN.REQUESTS}  />
     
    </div>
  );
};

export default LastAppointments;
