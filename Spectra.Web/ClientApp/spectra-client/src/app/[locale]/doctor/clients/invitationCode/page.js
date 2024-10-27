"use client";
import React from "react";
import LayoutHome from "../components/layoutHome";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columnsInvitationCode";
import ActionMenu from "../components/ActionMenuPage";
const data = [
  {
    id: 0,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 1,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 2,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 3,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 4,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 5,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 6,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 7,
    doctor: "احمد محمد كمال",
    typeCustomer: "عائلة طفل",
    date: "25/4/2024",
    time: "6:00 م",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
];
function Page() {
  return (
    <LayoutHome>
      <div className="default-page flex-1w-[100%] lg:max-w-[calc(100%-250px)] w-full">
        <div className="flex items-center justify-between">
          <h2 className="headTitleDash">عملاء كود الدعوة</h2>
          <ActionMenu />
        </div>
        <div className="grow  overflow-auto ">
          <DataTable data={data} columns={columns}  />
        </div>
      </div>
    </LayoutHome>
  );
}

export default Page;
