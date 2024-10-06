"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import BackIcon from "@/assets/icons/back";
import Card from "@/components/card";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Select } from "@mantine/core";
import React from "react";

function page() {
  return (
    <Card>
      <div className="flex mb-10   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.STAFF.DASHBOARD}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة موظف</h2>
      </div>
      <div>
        <form className="flex flex-col gap-3 lg:gap-5 px-3 mb-14">
          <SelectBox
            options={["سكرتير", "دكتور"]}
            label={"المهنة"}
            placeholder="اختر المهنة"
            containerClassName="MultiSelect h-auto flex-1"
            labelClassName="text-sm mdl:text-xl mb-2 mb-2"
          />
          <Input
            label={"الاسم كامل"}
            placeholder={"ادخل الاسم كامل"}
            labelClassName={"text-sm mdl:text-xl mb-2"}
            inputClassName={" !h-10 text-sm mdl:text-xl mb-2 lgl:!h-[66px]"}
          />
          <SelectBox
            options={["انثى", "ذكر"]}
            label={"اختر النوع"}
            placeholder="اختر النوع"
            containerClassName="MultiSelect h-auto flex-1"
          />
          <SelectBox
            options={["سعوديه", "مصر"]}
            label={"اختر البلد"}
            placeholder="اختر البلد"
            labelClassName="text-sm mdl:text-xl mb-2 mb-2"
          />
        </form>
      </div>
    </Card>
  );
}

export default page;
