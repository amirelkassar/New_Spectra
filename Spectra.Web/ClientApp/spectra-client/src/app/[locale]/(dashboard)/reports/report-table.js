"use client";
import TableComponents from "@/components/table-comp";
import React, { useState } from "react";
import placeholderImage from "@/assets/images/placeholder-person.png";
function ReportsTable() {
  const data = [
    {
      id: 0,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 1,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 2,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 3,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 4,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 5,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
        
    },
    {
      id: 6,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
    {
      id: 7,
      doctor: "احمد محمد كمال",
      childName: "احمد عبدالله",
      date: "25/4/2024",
      reportTitle: "تقرير تحليل صحي شامل",
      image: placeholderImage,
    },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <TableComponents
      data={data}
      colNum={5}
      colNumSmall={4}
      dataLine={1}
      header={["الاسم المتخصص", "اسم الطفل", "التاريخ", "تقرير", ""]}
      order={["doctor", "childName", "date", "reportTitle", ""]}
      selectPage={selected}
      setSelected={setSelected}
      type={2}
      hide={4}
      haveImg={true}
      report={true}
    />
  );
}

export default ReportsTable;
