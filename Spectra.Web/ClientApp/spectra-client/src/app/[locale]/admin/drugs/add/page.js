"use client";
import ArrowRight from "@/assets/icons/arrow-right";
import BackIcon from "@/assets/icons/back";
import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function page() {
  return (
    <Card>
       <div className="flex mb-10   items-center gap-4 ">
            <Link
              href={ROUTES.ADMIN.DRUGS}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="headTitleDash">اضافة وصفة طبية</h2>
          </div>
      <div>
        <form className="flex flex-col gap-8 px-3 mb-14">
          <Input
            label={"اسم العقار"}
            labelClassName={"text-[12px] md:text-[16px]"}
            placeholder={"اسم العقار او نوع التوصية"}
          />
          <Input
            label={"الاسم العلمي"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <Input
            label={"الجرعة الموصى به"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <Input
            label={"تركيز الدواء"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <Input
            label={"تفاعلات الدواء مع أدوية أخرى"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <Input
            label={"موانع الاستخدام"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <div className="flex gap-4 items-end flex-wrap">
            <Input
              label={"مرفقات "}
              containerClassName={"flex-1"}
              labelClassName={"text-[12px] md:text-[16px]"}
            />
            <div className="h-[56px] flex items-center justify-center gap-4 px-5 py-3 rounded-[10px] bg-greenMain w-[132px]">
              <ArrowRight />
              <p className="text-white text-[16px] font-Bold">رفع ملف</p>
            </div>
          </div>
        </form>
        <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
          <Button
            variant="secondary"
            className={
              "max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
            }
          >
            حفظ
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default page;
