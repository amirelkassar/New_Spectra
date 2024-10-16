"use client";
import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuComplaintsDetails";
import { GetComplaintID } from "@/useAPI/admin/main-data/complaints";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import NoDataYet from "@/components/noDataYet";
function page({ params }) {
  const { data, isLoading } = GetComplaintID(params.complaintsID);
  console.log(data?.data.data);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <div className="flex   items-center gap-4 ">
            <Link
              href={ROUTES.ADMIN.DATAMAIN.COMPLAINTS}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="headTitleDash">الشكاوى العامة </h2>
          </div>

          <AddMainData
            title={"أضافة شكوى  "}
            path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
          />
        </div>
        <ActionMenu id={params.complaintsID} />
      </div>
      {!isLoading ? (
        data?.data.code === 200 ? (
          <div className="flex flex-col gap-5">
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                اسم الشكوى
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.complaintName}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
                الكود
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.code1}
              </p>
            </div>
            <div className="pb-5 border-b last-of-type:border-none border-grayLight">
              <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
              وصف الشكوى
              </h3>
              <p className="text-[14px] lg:text-[20px]  font-Regular">
                {data.data.data.descriptionOfTheComplaint}
              </p>
            </div>
          </div>
        ) : (
          <NoDataYet/>
        )
      ) : (
        <p>IS LOADING</p>
      )}
    </div>
  );
}

export default page;
