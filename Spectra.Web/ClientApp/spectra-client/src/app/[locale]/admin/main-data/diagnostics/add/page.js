"use client";
import React from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import Input from "@/components/input";
import { Textarea } from "@mantine/core";
function page() {
  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة تشخيص</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14">
          <Input
            label={"اسم التشخيص"}
            labelClassName={"text-[12px] md:text-[16px]"}
            inputClassName={" !h-10 text-[12px] md:text-[16px] lgl:!h-[66px]"}
          />
          <Textarea
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
            label={"وصف التشخيص"}
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
