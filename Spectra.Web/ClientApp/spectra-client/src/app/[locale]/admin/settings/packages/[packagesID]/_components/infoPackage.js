import Card from "@/components/card";
import React from "react";

function InfoPackage() {
  return (
    <Card>
      <div className="flex flex-col gap-4 mdl:gap-7 w-full  ">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            اسم الباقة{" "}
          </h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">
            الباقة الالماسية
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            سعر الباقة{" "}
          </h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">100.00$</p>
        </div>
      </div>
    </Card>
  );
}

export default InfoPackage;
