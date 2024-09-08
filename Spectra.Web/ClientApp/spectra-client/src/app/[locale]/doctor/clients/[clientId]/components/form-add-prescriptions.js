"use client";
import ArrowRight from "@/assets/icons/arrow-right";
import PillsIcon from "@/assets/icons/pills";
import SearchIcon from "@/assets/icons/search";
import TherapyIcon from "@/assets/icons/therapy";
import Button from "@/components/button";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import React, { useState } from "react";

function FormAddPrescriptions() {
  const [selectType, setSelectType] = useState("pills");
  return (
    <div className="flex-1 mdl:p-8 px-2 py-4 mdl:rounded-[10px] bg-white">
      <div className="mdl:mb-14 mb-7">
        <h2 className="text-[14px] mb-4 mdl:text-[20px]">
          اختر نوع الوصفة الطبية
        </h2>
        <div className="flex items-center justify-center gap-8">
          <div
            className={`flex-1 md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
              selectType === "pills" ? "bg-greenMain" : "bg-blueLight"
            }`}
            onClick={() => {
              setSelectType("pills");
            }}
          >
            <div className=" size-[44px] mdl:size-[80px] rounded-[10px] bg-white flex items-center justify-center p-3 ">
              <PillsIcon />
            </div>
            <h3
              className={`text-[14px]  mdl:text-[20px] font-Bold ${
                selectType === "pills" ? "text-white" : ""
              } `}
            >
              عقاقير
            </h3>
          </div>
          <div
            className={`flex-1 md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
              selectType === "therapy" ? "bg-greenMain" : "bg-blueLight"
            } `}
            onClick={() => {
              setSelectType("therapy");
            }}
          >
            <div className=" size-[44px] mdl:size-[80px] rounded-[10px] bg-white flex items-center justify-center p-3 ">
              <TherapyIcon />
            </div>
            <h3
              className={`text-[14px]  mdl:text-[20px] font-Bold ${
                selectType === "therapy" ? "text-white" : ""
              } `}
            >
              توصيات
            </h3>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-8">
        <Input
          label={" العنوان"}
          containerClassName={"w-full"}
          inputClassName={"mdl:h-[66px] h-[56px]"}
          labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
          placeholder={"اسم العقار او نوع التوصية"}
        />

        <Input
          label={"شرح الوصفة الطبية"}
          containerClassName={"w-full"}
          inputClassName={"mdl:h-[66px] h-[56px]"}
          labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
        />
        <Input
          label={"ملاحظات"}
          containerClassName={"w-full"}
          inputClassName={"mdl:h-[66px] h-[56px]"}
          labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
        />
        <div className="flex gap-4 items-end flex-wrap">
          <Input
            label={"مرفقات "}
            containerClassName={"flex-1"}
            labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
          />
          <div className="h-[56px] flex items-center justify-center gap-4 px-5 py-3 rounded-[10px] bg-greenMain w-[132px]">
            <ArrowRight />
            <p className="text-white text-[16px] font-Bold">رفع ملف</p>
          </div>
        </div>
        <div>
          <h4 className="text-[14px] md:mb-4 mdl:text-[20px]">المشاركة مع</h4>
          <div className="mdl:h-[66px] h-[56px] w-[100%] relative outline-greenMain flex border-greenMain border rounded-[10px] items-center px-5">
            <input
              type="text"
              className="grow block !outline-none   rounded-none px-5  flex-1 h-[100%] "
              placeholder="البحث عن طبيب او مختص"
            />
            <div className="iconSearchModal ">
              <SearchIcon />
            </div>
          </div>
        </div>
        <Button
          variant="secondary"
          className={
            "md:max-w-[286px] font-bold disabled:cursor-not-allowed md:h-[60px]"
          }
        >
          ارسال
        </Button>
      </form>
    </div>
  );
}

export default FormAddPrescriptions;
