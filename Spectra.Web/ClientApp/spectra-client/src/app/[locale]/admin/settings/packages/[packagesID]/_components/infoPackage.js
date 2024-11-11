import BackIcon from "@/assets/icons/back";
import Package1Icon from "@/assets/icons/package1";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function InfoPackage() {
  return (
    <Card>
      <div className="flex items-center gap-2 mdl:gap-5 mb-7 mdl:mb-9">
        <Link href={ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD}>
          <BackIcon className={"w-8 h-auto mdl:w-11"} />
        </Link>
        <h2 className="text-base mdl:text-2xl font-Bold">الباقة الالماسية </h2>
      </div>
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
        <div className="mb-5 mdl:mb-11 ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            رمز الباقه
          </h3>
          <div className="flex gap-5 flex-wrap">
            <div
              className={` size-12 mdl:size-[60px] bg-blueLight rounded-xl cursor-pointer hover:shadow-sm duration-300 min-w-12 mdl:min-w-[60px] flex items-center justify-center p-2`}
            >
              <Package1Icon className={"max-h-full w-auto"} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default InfoPackage;
