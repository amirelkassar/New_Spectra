"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import docrotImg from "@/assets/images/placeholder-person.png";
import StarWhiteIcon from "@/assets/icons/starWhite";
import BriefIcon from "@/assets/icons/brief";
import QualificationsIcon from "@/assets/icons/qualifications";
import DaqeqaIcon from "@/assets/icons/daqeqa";
import { Link } from "@/navigation";
import ArrowLeft from "@/assets/icons/arrow-left";
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
  };

  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];

  const params = useParams();
  console.log(params);
  return (
    <div className="default-page text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div className="detailsDocor flex items-start gap-10 mt-10 flex-wrap">
        <div className="max-w-[260px]">
          <div className="">
            <div className="w-[146px] h-[146px] rounded-[50%] relative">
              <Image
                src={docrotImg}
                width={"100%"}
                height={"100%"}
                className="h-[100%] w-[100%]  object-cover rounded-[50%] object-top"
                alt="doctor"
                priority
              />
              <div
                dir="ltr"
                className=" w-fit flex gap-1 items-center justify-center py-1 px-5 bg-[#10B0C1] text-white rounded-[15px] h-[32px] absolute bottom-0 right-[-30px] "
              >
                <p className="font-bold text-[20px] text-white">{data.star}</p>

                <StarWhiteIcon />
              </div>
            </div>
            <p className="text-[12px]"> {data.rating} تقييم</p>
          </div>
          <div>
            <h2 className="text-center text-[14px] md:text-[20px] font-bold">
              {data.name}
            </h2>
            <p className=" text-center text-[20px] mb-6 font-normal">
              {" "}
              {data.spec}{" "}
            </p>
            <h2 className="text-center text-[14px] md:text-[16px] mb-1 font-normal ">
              كود الحجز / الاحالة
            </h2>
            <p className=" text-center text-[14px] md:text-[16px] mb-6 font-bold">
              {" "}
              {data.bookingCode}{" "}
            </p>
          </div>
        </div>

        <div className="min-w-[400px] flex-1">
          <div className="flex items-start gap-5">
           <BriefIcon className={'min-w-[25px] h-auto'}/>
           <div>
            <h3 className=" text-[14px] lg:text-[16px] font-bold mb-0">نبدة</h3>
            <p className=" text-[16px] lg:text-[20px] font-normal min-h-[110px]" >{data.brief}</p>
           </div>
          </div>
          <div className="flex items-start gap-5">
           <QualificationsIcon className={'min-w-[25px] h-auto'}/>
           <div>
            <h3 className=" text-[14px] lg:text-[16px] font-bold mb-0">المؤهلات والتراخيص</h3>
            <p className=" text-[16px] lg:text-[20px] font-normal min-h-[110px]" >{data.qualifications}</p>
           </div>
          </div>
          <div className="flex items-start gap-5">
           <DaqeqaIcon className={'min-w-[25px] h-auto'}/>
           <div>
           <h3 className=" text-[14px] lg:text-[16px] font-bold mb-0"> التخصصات الدقيقة</h3>
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
      <div className="w-[100%]">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2>اراء المرضى</h2>
          <Link href={'#'} className="h-[54px] flex items-center gap-4 justify-between px-[34px] border py-3 rounded-[10px] border-solid w-[300px] border-[#939393]">
          <p className=" text-[14px] font-bold md:text-[20px] flex-1 text-center">عرض المزيد</p>
          <ArrowLeft/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorDEtails;
