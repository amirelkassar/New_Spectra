"use client";

import TableComponents from "@/components/table-comp";
import ROUTES from "@/routes";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import placeholderImage from "@/assets/images/placeholder-person.png";

const ClientsTable = () => {
  const router = useRouter();
  const locale = useLocale();
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
      image: placeholderImage,
        
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
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
     <TableComponents
      data={data}
      colNum={4}

      dataLine={1}
      header={["الاسم", "اسم الطفل", "التاريخ", ""]}
      order={["doctor", "childName", "date", ""]}
      selectPage={selected}
      setSelected={setSelected}
      type={2}
     
      haveImg={true}
      report={true}
    />
    </div>
  );
};

export default ClientsTable;
