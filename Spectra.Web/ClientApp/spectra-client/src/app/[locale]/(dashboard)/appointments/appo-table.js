"use client";
import ArrowLeft from "@/assets/icons/arrow-left";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
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
  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <div className=" max-h-[100vh] md:h-[calc(100vh-480px)] min-h-[600px] overflow-auto grid grid-cols-[repeat(3,minmax(108px,1fr))] md:grid-cols-[repeat(4,minmax(max-content,1fr))] gap-y-1 w-full ">
        <div className="contents bg-[#F1FCFF] ">
          <div className="bg-blueLight h-[40px] md:h-[48px] rounded-s-xl py-[8px] px-[14px] md:px-[20px] sticky top-0 text-[12px] md:text-[20px]">
            اسم الطبيب
          </div>
          <div className="bg-blueLight h-[40px] md:h-[48px] py-[8px] px-[14px] md:px-[20px] sticky top-0 text-[12px] md:text-[20px]">
            اسم المريض{" "}
          </div>
          <div className="bg-blueLight h-[40px] md:h-[48px]  py-[8px] px-[14px] md:px-[20px] hidden md:block md:sticky top-0 text-[12px] md:text-[20px]">
            الـميعاد
          </div>
          <div className="bg-blueLight h-[40px] md:h-[48px] py-[8px] px-[14px] md:px-[20px] sticky top-0 rounded-e-xl text-[12px] md:text-[20px] me-0 md:me-5">
            الحالة
          </div>
        </div>
        {data.map((row, index) => (
          <div key={row.id} className="contents">
            <div
              className={clsx(
                "flex items-center gap-5 py-2 md:py-5 px-3 md:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
                <Image src={row.image} alt="Doctor image" />
              </div>
              <div>
                <p className="font-bold text-[12px] md:text-[16px]">
                  {row.name}
                </p>
                <p className="text-[12px] md:text-[16px]">
                  {row.specialisation}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "py-2 md:py-5 px-3 md:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="font-bold text-[12px] md:text-[16px]">
                {row.patientName}
              </p>
              <p className="text-[12px] md:text-[16px]">
                {row.patientDiagnosis}
              </p>
            </div>
            <div
              className={clsx(
                "py-2 md:py-5 px-3 md:px-10 hidden md:block border-b  border-grayMedium ",
                index !== data.length - 1 && " "
              )}
            >
              <p className="font-bold text-[12px] md:text-[16px]">{row.date}</p>
              <p className="text-[12px] md:text-[16px]">{row.time}</p>
            </div>
            <div
              className={clsx(
                "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 content-center items-start",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <Statue statue={row.statu} />
              <MenuActions />
            </div>
          </div>
        ))}
      </div>
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
