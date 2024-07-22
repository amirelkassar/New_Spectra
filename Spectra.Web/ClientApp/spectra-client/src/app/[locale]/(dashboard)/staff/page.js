import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import React from "react";
import StaffFilteration from "./staff-filteration";
import StaffTable from "./staff-table";
import MenuActions from "@/components/menu-actions";

function page() {
  return (
    <div className="default-page">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <h2 className="headTitleDash">الموظفين</h2>
          <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
            <PlusInsideCircleIcon />
            <p className=" text-[14px] md:text-[16px] font-bold">أضافة موظف </p>
          </button>
        </div>
        <MenuActions/>
      </div>

      <StaffFilteration />
      <StaffTable />
    </div>
  );
}

export default page;