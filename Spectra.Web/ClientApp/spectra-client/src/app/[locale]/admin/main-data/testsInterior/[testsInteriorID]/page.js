import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuTestsInteriorDetails";
function page({ params }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <h2 className="headTitleDash">الفحوصات الداخلية </h2>
          <AddMainData
            title={"أضافة فحص داخلى   "}
            path={ROUTES.ADMIN.DATAMAIN.TESTSINTERIORADD}
          />
        </div>
        <ActionMenu id={params.testsInteriorID} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الاسم</h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">Cars</p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الكود</h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">#12358 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">التخصص</h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">
            نفسى - علاجى{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
