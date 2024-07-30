"use client";
import React, { useState } from "react";
import DoctorInfo from "../components/doctorInfo";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import doctorImg from "@/assets/images/placeholder-person.png";
import ProfileFilteration from "../components/profile-filteration";
import TableComponents from "@/components/table-comp";

function Page() {
  const data = {
    name: "احمد محمد كمال",
    spec: " اخصائى نفسى",
    brief:
      "دكتوراه في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان والمشكلات ",
    qualifications: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
    daqeqa: [
      "القلق",
      "الضغوط",
      "مشكلات في العلاقات",
      "مشكلات بالتواصل",
      "اضطرابات الشخصية",
      "التعامل مع الغضب",
      "ثنائي القطب",
      "القلق الاجتماعي ، الفوبيا",
      "فرط الحركة",
    ],
    star: 4.9,
    rating: 281,
    bookingCode: "DR-AHMED-2024",
    image: doctorImg,
    servicePrice: "100.00 $",
    service: {
      counseling: "100.00 $",
      early: "100.00 $",
      early2: "100.00 $",
    },
  };
  const dataTable = [
    {
      id: 0,
      observation: "تحسن ملحوظ",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "ستيرال",
    },
    {
      id: 1,
      observation: " الحالة كما هى",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "تربوية",
    },
    {
      id: 2,
      observation: " تحسن ملحوظ",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "تربوية",
    },
    {
      id: 3,
      observation: " تحسن ملحوظ",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "تربوية",
    },
    {
      id: 4,
      observation: " تحسن ملحوظ",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "تربوية",
    },
    {
      id: 5,
      observation: " تحسن ملحوظ",
      date: "25/4/2024",
      recipeNumber: "1524",
      childName: "عبدالله الشيخ",
      recipe: "تربوية",
    },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="flex-1 w-full flex flex-col gap-7">
      <div className="default-page flex-1  w-full">
        <div className="flex items-center justify-between">
          <h1 className="headTitleDash "> ملفى </h1>

          <MenuActions />
        </div>
        <DoctorInfo data={data} />
      </div>
      <div className="default-page flex-1  w-full">
        <ProfileFilteration />
        <TableComponents
          data={dataTable}
          colNum={5}
          dataLine={1}
          header={["رقم الوصفة", "اسم المريض", "التاريخ", "الوصفة", ""]}
          order={["recipeNumber", "childName", "date", "recipe", ""]}
          selectPage={selected}
          setSelected={setSelected}
          type={2}
        />
      </div>
    </div>
  );
}

export default Page;
