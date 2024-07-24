"use client";
import ArrowLeft from "@/assets/icons/arrow-left";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import TableComponents from "@/components/table-comp";
import ROUTES from "@/routes";
import { Group, Pagination } from "@mantine/core";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const AppoTable = () => {
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
  const [valuePage, setValuePage] = useState(1);
  const [selected, setSelected] = useState([]);
  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <TableComponents data={data} colNum={4} colNumSmall={3} hide={3} dataLine={2} header={[' اسم الطبيب','  اسم المريض',"الـميعاد",'الحالة']}   haveImg={true} order={[['name','specialisation'],['patientName','patientDiagnosis'],['date','time'],"status"]} selectPage={selected} setSelected={setSelected} type={1} route={ROUTES.ADMIN.REQUESTS}  />
      <Pagination.Root total={10} onChange={(e)=>{setValuePage(e)}}  value={valuePage} dir="ltr" className=" max-w-[1200px] mx-auto flex justify-between items-center mt-6 md:mt-[70px] px-[20px] md:px-[60px]"> 
        <button
        className="paginationPrev  paginationBtn flex justify-between items-center gap-0 py-[13px] px-[24px] w-[160px] h-[52px] rounded-[10px]"
          onClick={() => {
            valuePage <= 1 ? null : setValuePage(valuePage - 1);
          }}
        >
          <ArrowLeft/>
          <p className=" font-bold text-[14px] md:text-[16px] flex-1 leading-6">السابق</p>
        </button>
        <Group gap={5} justify="center">
          <Pagination.Items />
        </Group>
        <button
        className="paginationNext paginationBtn flex-row-reverse   flex justify-between items-center gap-0 py-[13px] px-[24px] w-[160px] h-[52px] rounded-[10px]"
          onClick={() => {
            valuePage >= 10 ? null : setValuePage(valuePage + 1);
          }}
        >
           <ArrowLeft/>
          <p className=" font-bold text-[14px] md:text-[16px] flex-1  leading-6">التالى</p>
        </button>
      </Pagination.Root>
    </div>
  );
};

export default AppoTable;
