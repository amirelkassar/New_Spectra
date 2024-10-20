"use client";
import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuDiagnosticsDetails";
import { GetDiagnosticsID } from "@/useAPI/admin/main-data/diagnostics";
import NoDataYet from "@/components/noDataYet";
import HandelShowDataID from "@/components/handelShowDataID";
function page({ params }) {
  const { data, isLoading } = GetDiagnosticsID(params.diagnosticsID);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
          <h2 className="headTitleDash">التشخيصات </h2>
          <AddMainData
            title={"أضافة تشخيص "}
            path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD}
          />
        </div>
        <ActionMenu id={params.diagnosticsID} />
      </div>
      <HandelShowDataID isLoading={isLoading} statusCode={data?.data.code}>
        {data?.data.code === 200 && (
          <div className="flex flex-col gap-5">
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الكود 1{" "}
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.code1}{" "}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الكود 2{" "}
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.code2}{" "}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الكود 3{" "}
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.code3}{" "}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                اسم التشخيص
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.name}{" "}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                وصف{" "}
              </h3>
              <p className="text-[12px]  lg:text-[16px] font-Regular">
                {data.data.data.description}
              </p>
            </div>
          </div>
        )}
      </HandelShowDataID>
    </div>
  );
}

export default page;
