"use client";
import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuTestsInteriorDetails";
import { GetInternalExaminationID } from "@/useAPI/admin/main-data/testsInterior";
import HandelShowDataID from "@/components/handelShowDataID";
function page({ params }) {
  const { data, isLoading } = GetInternalExaminationID(params.testsInteriorID);
  console.log(data?.data.data);
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
      <HandelShowDataID isLoading={isLoading} statusCode={data?.data.code}>
        {data?.data.code === 200 && (
          <div className="flex flex-col gap-5">
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الاسم
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data?.data.data.name}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الكود
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data?.data.data.code}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                التخصص
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data?.data.data.examinationTypes}
              </p>
            </div>
          </div>
        )}
      </HandelShowDataID>
    </div>
  );
}

export default page;
