"use client";
import React from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import Input from "@/components/input";
import { MultiSelect, Textarea } from "@mantine/core";
import ArrowDownIcon from "@/assets/icons/arrow-down";
function page() {
  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة فحص داخلى </h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14">
          <Input
            label={"اسم الفحص"}
            labelClassName={"text-[12px] md:text-[16px]"}
            inputClassName={" !h-10 text-[12px] md:text-[16px] lgl:!h-[66px]"}
          />
          <Input
            label={"كود الفحص "}
            labelClassName={"text-[12px] md:text-[16px]"}
            inputClassName={" !h-10 text-[12px] md:text-[16px] lgl:!h-[66px]"}
          />
          <MultiSelect
            data={["نفسى", "علاجى"]}
            defaultValue={["علاجى"]}
            label={"اختر  تخصصات الفحص"}
            placeholder="اختر تخصص"
            rightSection={<ArrowDownIcon />}
            className="MultiSelect h-auto flex-1"
            classNames={{
              input: " !h-auto py-1 min-h-[60px]",
              label:'text-[12px] md:text-[16px] mb-2'
            }}
          />
        </form>
        <div className="flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row">
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
    </div>
  );
}

export default page;
