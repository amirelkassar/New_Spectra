"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import docrotImg from "@/assets/images/placeholder-person.png";
import StarWhiteIcon from "@/assets/icons/starWhite";
import BriefIcon from "@/assets/icons/brief";
import QualificationsIcon from "@/assets/icons/qualifications";
import DaqeqaIcon from "@/assets/icons/daqeqa";
import { Link } from "@/navigation";
import ArrowLeft from "@/assets/icons/arrow-left";
import Opinions from "../../../../components/opinions";
import DoctorInfo from "../doctorInfo";
import OneOpinion from "../../../../components/oneOpinion";
function DoctorDEtails() {
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
    star: 4,
    rating: 281,
    bookingCode: "DR-AHMED-2024",
    allReviews: [
      {
        id: 1,
        name: "م *******",
        rate: 4.5,
        dec: "ممتاز الله يرفع قدره",
      },
      {
        id: 2,
        name: "م *******",
        rate: 3,
        dec: "ممتاز الله يرفع قدره",
      },
      {
        id: 3,
        name: "م *******",
        rate: 4.9,
        dec: "ممتاز الله يرفع قدره",
      },
      {
        id: 4,
        name: "م *******",
        rate: 5,
        dec: "ممتاز الله يرفع قدره",
      },
      {
        id: 5,
        name: "م *******",
        rate: 2,
        dec: "ممتاز الله يرفع قدره",
      },
      {
        id: 6,
        name: "م *******",
        rate: 2,
        dec: "ممتاز الله يرفع قدره",
      },
    ],
  };

  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];

  const params = useParams();
  const [showMore, setShowMore] = useState(false);
  console.log(params);
  return (
    <div className="default-page2 lg:w-[calc(100%-246px)] max-w-[100%]  text-xl  !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div className="detailsDocor flex flex-col lg:flex-row items-start gap-8 lg:gap-10 mt-10 flex-wrap px-2 lg:px-7">
        <DoctorInfo data={data} />

        <div className="lg:min-w-[400px] flex-1">
          <div className="flex items-start gap-4 lg:gap-5">
            <BriefIcon
              className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
            />
            <div>
              <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                نبدة
              </h3>
              <p className=" text-[14px] lg:text-[20px] font-normal min-h-[110px]">
                {data.brief}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 lg:gap-5">
            <QualificationsIcon
              className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
            />
            <div>
              <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                المؤهلات والتراخيص
              </h3>
              <p className=" text-[14px] lg:text-[20px] font-normal min-h-12 lg:min-h-[110px]">
                {data.qualifications}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 lg:gap-5">
            <DaqeqaIcon
              className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
            />
            <div>
              <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                {" "}
                التخصصات الدقيقة
              </h3>
              <div className="max-w-[850px] mt-4 flex flex-wrap gap-x-2 gap-y-2">
                {data.daqeqa.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#E9F7FF] text-[#010036] px-2 md:px-3 py-1 rounded-md text-[14px] md:text-[20px] "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  mt-11">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-8 md:mb-14 px-2 md:px-7">
          <h2 className="text-[16px] md:text-[24px] font-bold">اراء المرضى</h2>
          <button
            onClick={() => {
              setShowMore(true);
            }}
            className={`${showMore?'hidden':'flex'} h-[40px] md:h-[54px]  items-center gap-4 justify-between px-[24px] md:px-[34px] border py-2 md:py-3 rounded-[10px] border-solid w-fit md:w-[300px] border-[#939393]`}
          >
            <p className=" text-[14px] font-bold md:text-[20px] flex-1 text-center">
              عرض المزيد
            </p>
            <ArrowLeft />
          </button>
        </div>

        {showMore ? (
          <div className="flex flex-wrap gap-5 px-2 md:px-5">
            {data.allReviews.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 min-w-[100%] md:min-w-[calc(50%-20px)]"
                >
                  <OneOpinion data={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <Opinions data={data.allReviews.slice(0, 3)} />
        )}
      </div>
    </div>
  );
}

export default DoctorDEtails;
