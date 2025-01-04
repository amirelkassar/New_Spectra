"use client";
import { DataTable } from "@/components/data-table";
import React from "react";
import { columns } from "./columnsDetails";
const data = [
  {
    id: 0,
    observation: "تحسن ملحوظ",
    editPlan: "لا تعديلات",
    date: "25/4/2024",
    response: "جيدة",
  },
  {
    id: 1,
    observation: " الحالة كما هى",
    editPlan: "زيادة جرعة الاستريالين ",
    date: "25/4/2024",
    response: "متوسطة",
  },
  {
    id: 2,
    observation: " تحسن ملحوظ",
    editPlan: "لا تعديلات",
    date: "25/4/2024",
    response: "جيدة",
  },
  {
    id: 3,
    observation: "تحسن ملحوظ",
    editPlan: "زيادة جرعة الاستريالين ",
    date: "25/4/2024",
    response: "متوسطة",
  },
  {
    id: 4,
    observation: "تحسن ملحوظ",
    editPlan: "لا تعديلات",
    date: "25/4/2024",
    response: "جيدة",
  },
  {
    id: 5,
    observation: "تحسن ملحوظ",
    editPlan: "لا تعديلات",
    date: "25/4/2024",
    response: "متوسطة",
  },
  {
    id: 6,
    observation: "تحسن ملحوظ",
    editPlan: "زيادة جرعة الاستريالين ",
    date: "25/4/2024",
    response: "جيدة",
  },
];
function CaseManagementTable() {
  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default CaseManagementTable;
