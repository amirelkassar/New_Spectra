"use client";
import React from "react";
import ServicesDetails from "../components/ServicesDetails";
import Card from "@/components/card";
import { useSearchParams } from "next/navigation";
import AddMainData from "../../_components/add-drugs";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import EditIcon from "@/assets/icons/edit";

function Page() {
  const searchparams = useSearchParams();
  return (
    <Card>
      {searchparams.get("show") === "false" ? (
        <div>
          <div className="flex items-center justify-between gap-5 mb-10">
            <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
              <Link
                href={ROUTES.ADMIN.DATAMAIN.SERVICES}
                className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
              >
                <BackIcon className={"w-full h-full"} />
              </Link>
              <h2 className="headTitleDash"> الخدمات - داخلية</h2>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                اسم الخدمة
              </h3>
              <p className="text-base lg:text-xl font-bold">اسم الخدمة</p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                تعريف للخدمة
              </h3>
              <p className="text-base lg:text-xl font-bold">تعريف للخدمة</p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                سعر الخدمة
              </h3>
              <p className="text-base lg:text-xl font-bold">100.00$</p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                الشروط و الاحكام
              </h3>
              <p className="text-base lg:text-xl font-bold">الشروط و الاحكام</p>
            </div>
          </div>
          <Link
            href={ROUTES.ADMIN.DATAMAIN.SERVICESDETAILSEDIT(5)}
            className={
              "  mdl:max-w-[400px] mt-6 mdl:mt-20 w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      ) : (
        <ServicesDetails />
      )}
    </Card>
  );
}

export default Page;
