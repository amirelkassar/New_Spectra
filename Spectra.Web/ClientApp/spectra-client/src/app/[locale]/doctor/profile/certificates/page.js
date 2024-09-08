"use client";
import React, { useState } from "react";
import DoctorInfo from "../components/doctorInfo";
import MenuActions from "@/components/menu-actions";
import doctorImg from "@/assets/images/placeholder-person.png";
import certificates from "@/assets/images/certificates.png";
import Image from "next/image";

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

  const ListCertificates = [
    {
      id: 0,
      image: certificates,
      date: "20/8/2022",
      title: "دكتوراه العلوم الطبية",
    },
    {
      id: 1,
      image: certificates,
      date: "20/8/2022",
      title: "دكتوراه العلوم الطبية",
    },
    {
      id: 2,
      image: certificates,
      date: "20/8/2022",
      title: "دكتوراه العلوم الطبية",
    },
    {
      id: 3,
      image: certificates,
      date: "20/8/2022",
      title: "دكتوراه العلوم الطبية",
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
        <h2 className="headTitleDash "> الشهادات </h2>
        <div className="flex gap-2 mdl:gap-4 flex-wrap justify-center">
          {ListCertificates.map((item, i) => {
            return (
              <div
                key={item.id}
                className="py-3 mdl:py-5 px-3 mdl:px-4 bg border-gray border rounded-lg max-w-[260px] min-w-[calc(50%-4px)] md:min-w-[260px] flex-1"
              >
                <Image
                  src={item.image}
                  width={228}
                  height={178}
                  className="w-full h-auto object-contain rounded-[10px]"
                  alt="items"
                />
                <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-1 md:gap-3 mt-3 mdl:mt-5 flex-wrap">
                  <h2 className="text-[12px] mdl:text-[16px] font-Bold ">
                    {item.title}
                  </h2>
                  <p className="text-[12px] mdl:text-[16px] text-grayDark">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
