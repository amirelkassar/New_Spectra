"use client";

import TableComponents from "@/components/table-comp";
import ROUTES from "@/routes";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import placeholderImage from "@/assets/images/placeholder-person.png";
const ContractsTable = () => {
  const router = useRouter();
  const locale = useLocale();
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      active:false,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: " طبيب",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 11,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 12,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 13,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      date: "20/4/2024",
      job: "طبيب ",
    },
  ];

  const [selected, setSelected] = useState([]);
  return (
    <div className="grow min-h-[600px]">
      <TableComponents
        data={data}
        colNum={4}
        dataLine={1}
        header={["الاسم ", "الوظيفة", "تاريخ التوقيع", "حالة العقد"]}
        order={["name", "job", "date", ""]}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        haveImg={true}
        contracts={{open:true,type:'old',}}
      />
    </div>
  );
};

export default ContractsTable;
