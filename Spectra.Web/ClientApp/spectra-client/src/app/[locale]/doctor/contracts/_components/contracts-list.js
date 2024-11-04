"use client";
import { Card } from "@mantine/core";
import React from "react";
import { GetContracts } from "@/useAPI/doctor/contracts-api";
import ContractsRow from "./contractsRow";
const dataContacts = [
  {
    contractId: 1,
    name: "admin",
    title: "النسخة الاولى",
    date: "2024-11-04T12:40:40.7764949+00:00",
    time: "10:30 م",
    done: true,
  },
  {
    contractId: 2,
    name: "user",
    title: "النسخة الثانية",
    date: "2024-11-04T12:40:40.7764949+00:00",
    time: "10:30 م",
    done: false,
  },
  {
    contractId: 3,
    name: "user",
    title: "النسخة الثانية",
    date: "2024-11-04T12:40:40.7764949+00:00",
    time: "10:30 م",
    done: false,
  },
];
function ContractsList({ idUser }) {
  const { data: dataContracts } = GetContracts("string1112");
  console.log(dataContracts);

  return (
    <Card className="flex-1 rounded-lg">
      <div className="flex flex-col gap-4 lg:pt-4 w-full lg:max-w-[94%] mx-auto">
        {dataContracts?.data?.data?.length > 0
          ? dataContracts?.data?.data.map((item, index) => {
              return <ContractsRow data={item} key={index} />;
            })
          : null}
        {dataContacts.map((item, index) => {
          return <ContractsRow data={item} key={index} />;
        })}
      </div>
    </Card>
  );
}

export default ContractsList;
