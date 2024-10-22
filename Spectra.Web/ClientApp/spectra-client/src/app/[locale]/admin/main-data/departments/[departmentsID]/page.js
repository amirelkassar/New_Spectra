"use client";
import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuDepartmentsDetails";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import CardDocManger from "../_components/cardDocManger";
const department = {
  departmentName: "الطب النفسي",
  specializationsCount: 3,
  headOfDepartment: "أحمد عبد كامل",
  specializations: ["تحليل السلوك التطبيقي", "العلاج السلوكي المعرفي"], // Example
};
function page({ params }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
          <Link
            href={ROUTES.ADMIN.DATAMAIN.DEPARTMENTS}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="headTitleDash">الاقسام </h2>
          <AddMainData
            title={"أضافة قسم "}
            path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTSADD}
          />
        </div>
        <ActionMenu id={params.departmentsID} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            اسم القسم
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">
            العلاج النفسى السلوكى
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            التخصصات
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">
            {department.specializations.map((specialization, index) => (
              <span key={index} className=" block mb-1">
                {specialization}
                {index !== department.specializations.length - 1 ? <br /> : ""}
              </span>
            ))}
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            رئيس القسم
          </h3>
          <div className="flex-1 w-[170px] md:w-[232px] min-w-full md:min-w-[232px]">
            <CardDocManger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
