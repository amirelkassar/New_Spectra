"use client";
import React from "react";
import Card from "@/components/card";
import CardService from "./components/CardService";
import SessionIcon from "@/assets/icons/session";
import UploadIcon from "@/assets/icons/upload";
import Button from "@/components/button";
import Input from "@/components/input";
function page() {
  const data = [
    {
      id: 0,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمة الكشف المبكر الالكتروني",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },

    {
      id: 1,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمات التشخيص الطبي  عبر فرق متعددة التخصصات",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
    {
      id: 2,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمة الكشف المبكر الالكتروني",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
    {
      id: 3,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمة الكشف المبكر الالكتروني",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
    {
      id: 4,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمات التشخيص الطبي  عبر فرق متعددة التخصصات",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
    {
      id: 5,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمة الكشف المبكر الالكتروني",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
    {
      id: 6,
      icon: <SessionIcon className={"w-full h-auto"} />,
      title: "خدمة الكشف المبكر الالكتروني",
      dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
    },
  ];
  return (
    <Card>
      <h1 className="text-center my-8 text-[24px] mdl:text-[36px] font-Bold">
        خدماتنا
      </h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mdl:gap-8">
        {data.map((item) => {
          return <CardService key={item.id} data={item} />;
        })}
        <div className="py-3 mdl:py-8 px-3 mdl:px-4 rounded-[10px] bg-white border-dashed border-2 border-grayDark">
          <div className=" mx-auto cursor-pointer relative w-[136px] h-[80px] rounded-[10px] bg-greenMain flex items-center overflow-hidden flex-col justify-center gap-1 py-4">
            <input type={"file"} className=" absolute inset-0 w-full h-full opacity-0 !cursor-pointer"/>
            <UploadIcon className={'h-[24px] w-[20px]'}/>
            <p className="text-[12px] mdl:text-[16px] font-Bold text-white"> رفع رمز الخدمة</p>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Input labelClassName={'text-[12px] mdl:text-[16px] mb-[0px]'} label={'اسم الخدمة'}/>
            <Input labelClassName={'text-[12px] mdl:text-[16px] mb-[0px]'} label={' محتوى الخدمة'}/>
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        className="w-full h-[50px] mdl:h-[60px] mt-11 text-[16px] mdl:text-[20px] font-Bold"
      >
        تأكيد
      </Button>
    </Card>
  );
}

export default page;
