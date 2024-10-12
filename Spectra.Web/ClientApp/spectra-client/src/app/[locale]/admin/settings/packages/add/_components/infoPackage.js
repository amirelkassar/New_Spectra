import Card from "@/components/card";
import Input from "@/components/input";
import React from "react";

function InfoPackage() {
  return (
    <Card>
      <div className="flex flex-col gap-7 mdl:gap-10 w-full md:mb-6 md:py-4 md:px-5">
        <Input
          label={"اسم الباقة "}
          labelClassName={"text-[12px] md:text-[16px]"}
        />
        <Input
          label={"سعر الباقة"}
          labelClassName={"text-[12px] md:text-[16px]"}
        />
      </div>
    </Card>
  );
}

export default InfoPackage;
