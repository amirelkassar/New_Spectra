"use client";
import TableComponents from "@/components/table-comp";
import React, { useState } from "react";

function CaseManagementTable() {
  const data = [
    {
      id: 0,
      observation:'تحسن ملحوظ',
      editPlan: 'لا تعديلات',
      date: "25/4/2024",
      response: 'جيدة',
    },
    {
      id: 1,
      observation:' الحالة كما هى',
      editPlan: 'زيادة جرعة الاستريالين ',
      date: "25/4/2024",
      response: 'متوسطة',
    },
    {
      id: 2,
      observation:' تحسن ملحوظ',
      editPlan: 'لا تعديلات',
      date: "25/4/2024",
      response: 'جيدة',
    },
    {
      id: 3,
      observation:'تحسن ملحوظ',
      editPlan: 'زيادة جرعة الاستريالين ',
      date: "25/4/2024",
      response: 'متوسطة',
    },
    {
      id: 4,
      observation:'تحسن ملحوظ',
      editPlan: 'لا تعديلات',
      date: "25/4/2024",
      response: 'جيدة',
    },
    {
      id: 5,
      observation:'تحسن ملحوظ',
      editPlan: 'لا تعديلات',
      date: "25/4/2024",
      response: 'متوسطة',
    },
    {
      id: 6,
      observation:'تحسن ملحوظ',
      editPlan:'زيادة جرعة الاستريالين ',
      date: "25/4/2024",
      response: 'جيدة',
    },
 
  ];

  const [selected, setSelected] = useState([]);
  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
      <TableComponents
        data={data}
        colNum={5}
        dataLine={1}
        header={[
          "التاريخ",
          "الملاحظة",
          "تعديلات فى الخطة العلاجية",
          "استجابة المريض",
          "",
        ]}
        order={["date", "observation", "editPlan", "response",'']}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
      />
    </div>
  );
}

export default CaseManagementTable;
