"use client";
import React, { useState } from "react";
import LayoutHome from "../components/layoutHome";
import MenuActions from "@/components/menu-actions";
import TableComponents from "@/components/table-comp";
import placeholderImage from "@/assets/images/placeholder-person.png";

function Page() {
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
  const [selected, setSelected] = useState([]);

  return (
    <LayoutHome>
      <div className="default-page flex-1w-[100%] lg:max-w-[calc(100%-250px)]">
        <div className="flex items-center justify-between">
          <h2 className="headTitleDash">جلسات كود الدعوة</h2>
          <MenuActions />
        </div>
        <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
          <TableComponents
            data={data}
            colNum={5}
            hide={4}
            colNumSmall={4}
            dataLine={1}
            header={["الاسم ", "نوع العميل", "التاريخ", "الميعاد", ""]}
            order={["doctor", "typeCustomer", "date", "time", ""]}
            selectPage={selected}
            setSelected={setSelected}
            type={2}
            haveImg={true}
            report={true}
          />
        </div>
      </div>
    </LayoutHome>
  );
}

export default Page;
