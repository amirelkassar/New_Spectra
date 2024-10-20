import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import React from "react";
import StaffTable from "./components/staff-table";
import ActionMenu from "./components/ActionMenuPage";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import NumDataTable from "@/components/numDataTable";

function page() {
  return (
    <div className="default-page">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
          <h2 className="headTitleDash">الموظفين</h2>
          <NumDataTable num={50} />
          <Link href={ROUTES.ADMIN.STAFF.STAFFADD} className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
            <PlusInsideCircleIcon />
            <p className=" text-[14px] md:text-[16px] font-bold">أضافة موظف </p>
          </Link>
        </div>
        <ActionMenu />
      </div>
      <StaffTable />
    </div>
  );
}

export default page;
