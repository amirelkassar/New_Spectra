"use client";
import React from "react";
import BtnSendReq from "./_components/btnSendReq";
import ContractsList from "./_components/contracts-list";
import DraftContracts from "./_components/draftContracts";
import { GetContracts } from "@/useAPI/doctor/contracts-api";
import HandelShowData from "@/components/handelShowData";
function page({ params }) {
  const { data, isLoading } = GetContracts("hema");
  return (
    <div className="h-full flex-1">
      <div className="flex  justify-center -mt-2 pt-10 gap-5 bg-white ">
        <BtnSendReq />
      </div>
      <div className="mt-5">
        <HandelShowData
          isLoading={isLoading}
          lengthData={data?.data?.data?.length}
        >
          {data?.data?.data.find((item) => item.contractCase === 1) ? (
            <DraftContracts data={data?.data.data} isLoading={isLoading} />
          ) : (
            <ContractsList data={data} isLoading={isLoading} />
          )}
        </HandelShowData>
      </div>
    </div>
  );
}

export default page;
