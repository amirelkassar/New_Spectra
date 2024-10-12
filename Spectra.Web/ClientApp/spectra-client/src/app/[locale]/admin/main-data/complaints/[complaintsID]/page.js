import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuComplaintsDetails";
function page({ params }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <h2 className="headTitleDash">الشكاوى العامة </h2>
          <AddMainData
            title={"أضافة شكوى  "}
            path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
          />
        </div>
        <ActionMenu id={params.complaintsID} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            اسم الشكوى
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">
            الام العظام{" "}
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الكود</h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">#12358 </p>
        </div>
      </div>
    </div>
  );
}

export default page;
