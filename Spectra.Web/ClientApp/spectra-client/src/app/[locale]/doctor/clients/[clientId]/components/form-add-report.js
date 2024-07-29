"use client";
import ArrowRight from "@/assets/icons/arrow-right";
import SearchIcon from "@/assets/icons/search";
import Button from "@/components/button";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import React from "react";

function FormAddReport() {
  return (
    <div className="flex-1 mdl:p-8 px-2 py-4 mdl:rounded-[10px] bg-white">
      <form className="flex flex-col gap-8">
        <Input
          label={"عنوان التقرير"}
          containerClassName={"w-full"}
          inputClassName={"mdl:h-[66px] h-[56px]"}
          labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
        />
        <SelectBox
          label={"نوع التقرير"}
          options={["التقرير1", "التقرير2", "التقرير3"]}
        />
        <Input
          label={"محتوى التقرير "}
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
          className={"md:max-w-[286px] font-bold disabled:cursor-not-allowed md:h-[60px]"}
        >
          ارسال
        </Button>
      </form>
    </div>
  );
}

export default FormAddReport;
