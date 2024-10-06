"use client";
import Card from "@/components/card";
import React from "react";
import QualificationsIcon from "@/assets/icons/qualifications";
import DaqeqaIcon from "@/assets/icons/daqeqa";
import BriefIcon from "@/assets/icons/brief";
import Image from "next/image";
import certificates from "@/assets/images/certificates.png";
import DateIcon from "@/assets/icons/date";
import LicenseIcon from "@/assets/icons/License";
import ActionMenu from "../_components/ActionMenu";
import { useSearchParams } from "next/navigation";
import PageEdit from "./_components/pageEdit";
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
  licenseNumber: "5215664",
  star: 4,
  date: "20/8/2022",
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
const CardInfo = ({ title, values }) => {
  return (
    <div className="bg-white py-4 lg:py-7 px-6 lg:px-12 lg:rounded-xl flex flex-row lg:flex-col gap-2">
      <p className="text-nowrap w-[130px] md:w-auto text-[12px] md:text-[16px] font-Regular mb-3 flex items-center gap-1">
        {title} <span className="lg:hidden inline-block">/</span>{" "}
      </p>
      <div className="w-full flex flex-wrap gap-3 gap-y-2 ">
        {values.map((value, index) => (
          <h2 key={index} className="text-[13px] md:text-[16px] font-bold">
            {value}
          </h2>
        ))}
      </div>
    </div>
  );
};
function Page({ params }) {
  const searchParams = useSearchParams();

  return searchParams.get("edit") === "true" ? (
    <PageEdit id={params.id} />
  ) : (
    <div className="w-full flex flex-col gap-6 flex-1">
      <div>
        <div className="flex items-center justify-between gap-5 mb-4 lgl:mb-6">
          <h2 className="text-sm lgl:text-xl ">البيانات الشخصية </h2>

          <ActionMenu id={params.id} />
        </div>

        <div className="grow grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-y-2.5 lg:!mb-10 !mb-5 lg:gap-x-5">
          <CardInfo title={"الاسم كامل"} values={["احمد محمد كمال"]} />
          <CardInfo title={"النوع"} values={["ذكر"]} />
          <CardInfo title={"البلد"} values={["السعودية"]} />
          <CardInfo title={"المدينة"} values={["دمام"]} />
          <CardInfo title={"رقم الهاتف"} values={["+98415514"]} />
          <CardInfo title={"البريد الالكترونى"} values={["لوريم ابسم"]} />
          <CardInfo title={"رقم الهوية"} values={["1225854"]} />
        </div>
      </div>

      <div>
        <h2 className="text-sm lgl:text-xl mb-4 lgl:mb-5">الوصف الوظيفى</h2>
        <Card>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-start gap-4 lg:gap-5">
              <DateIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  تاريخ الانضمام
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.date}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <BriefIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  نبدة
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
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
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.qualifications}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <LicenseIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  رقم الترخيص
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.licenseNumber}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex items-start gap-4 lg:gap-5 mb-6">
          <DaqeqaIcon
            className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-1"}
          />
          <div>
            <h3 className=" text-sm lg:text-lg font-bold lg:mb-2">
              {" "}
              التخصصات الدقيقة
            </h3>
            <div className="max-w-[850px] mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {data.daqeqa.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#E9F7FF] text-[#010036] px-2 md:px-4 py-1 rounded-md text-[14px] md:text-lg "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className=" flex-1  w-full">
          <h2 className="headTitleDash mb-6"> الشهادات </h2>
          <div className="flex gap-2 mdl:gap-4 flex-wrap ">
            {ListCertificates.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="py-3 bg-white mdl:py-5 px-3 mdl:px-4 shadow-sm border-gray border rounded-lg max-w-[260px] min-w-[calc(50%-4px)] md:min-w-[260px] flex-1"
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
      </Card>
    </div>
  );
}

export default Page;
