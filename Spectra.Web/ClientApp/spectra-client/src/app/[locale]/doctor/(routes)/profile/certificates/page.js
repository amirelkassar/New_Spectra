"use client";
import React, { useState } from "react";
import certificates from "@/assets/images/certificates.png";
import Image from "next/image";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";

function Page() {
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
    <div className="default-page flex-1  w-full">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="headTitleDash "> الشهادات </h2>
        <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
          <PlusInsideCircleIcon />
          <p className=" text-[14px] md:text-[16px] font-bold">أضافة شهادة </p>
        </button>
      </div>
      <div className="flex gap-2 mdl:gap-4 flex-wrap ">
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
  );
}

export default Page;
