"use client";
import { Card } from "@mantine/core";
import React from "react";
import { GetContracts } from "@/useAPI/doctor/contracts-api";
import ContractsRow from "./contractsRow";
import HandelShowData from "@/components/handelShowData";

function ContractsList() {
  const { data, isLoading } = GetContracts("hema");

  return (
    <Card className="flex-1 rounded-lg">
      <div className="flex flex-col gap-4 lg:pt-4 w-full lg:max-w-[94%] mx-auto">
        <HandelShowData
          isLoading={isLoading}
          lengthData={data?.data?.data?.length}
        >
          {data?.data.data.map((item, index) => {
            return <ContractsRow data={item} key={index} />;
          })}
        </HandelShowData>
      </div>
    </Card>
  );
}

export default ContractsList;
