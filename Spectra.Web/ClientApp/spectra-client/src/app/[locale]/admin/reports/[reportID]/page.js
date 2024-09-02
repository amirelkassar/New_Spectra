"use client";
import React, { useState } from "react";
import ReportsTable from "../report-table";
import MenuActions from "@/components/menu-actions";
import LinerChart from "@/components/liner-chart";
import ReportAside from "../report-aside";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import Image from "next/image";
import man from "@/assets/images/placeholder-person.png";
import ReportDecIcon from "@/assets/icons/reportDec";
import ArrowNav from "@/assets/icons/arrow-nav";
import ArrowLeftMainGreen from "@/assets/icons/arrow-left-mainGreen";

function Page() {
  const data = [
    {
      id: 0,
      name: "احمد محمد",
      job: "اخصائى",
      image: man,
    },
    {
      id: 1,
      name: "احمد محمد",
      job: "طبيب",
      image: man,
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      job: "الطفل :احمد عبدالله",
      image: man,
    },
  ];
  const charts = [
    { x: "يناير", y: 55 },
    { x: "فبراير", y: 45 },
    { x: "مارس ", y: 50 },
    { x: "ابريل", y: 60 },
    { x: "مايو", y: 40 },
    { x: "يونيو", y: 15 },
    { x: "يوليو", y: 30 },
    { x: "اغسطس", y: 33 },
    { x: "سبتمبر", y: 20 },
    { x: "اكتوبر", y: 17 },
    { x: "نوفمر", y: 25 },
    { x: "ديسمبر", y: 10 },
  ];
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className=" flex-1">
      <div className=" md:mb-5 bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-6 md:rounded-xl">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex mb-1   items-center gap-4 ">
            <Link
              href={ROUTES.ADMIN.REPORT.DASHBOARD}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="headTitleDash">التقارير</h2>
          </div>
          <MenuActions type={2} />
        </div>
        <div className="flex flex-col gap-8 mb-5 ">
          {data.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center gap-7 flex-1"
              >
                <div className="flex items-center gap-x-3 md:gap-x-12 gap-y-4 flex-wrap">
                  <div className="flex items-center gap-3 md:gap-7">
                    <Image
                      src={item.image}
                      width={52}
                      height={52}
                      className=" size-[30px] md:size-[52px] rounded-[50%] object-cover object-top"
                      alt="man"
                    />
                    <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-[16px] font-Regular ">
                    {item.job}
                  </p>
                </div>
                <div className="flex items-center justify-center p-[6px] md:p-3 rounded-[50%] bg-blueLight size-[32px] md:size-[50px]">
                  <ReportDecIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-9 md:rounded-xl md:mb-7 border-y md:border-t-0 border-[#F5F5F5]">
        <p className="text-[12px] md:text-[16px] font-Regular">
          الكالسيوم الكلي في الدم هو اختبار دم يتم إجراؤه لقياس الأشكال الحرة
          والمقيدة للكالسيوم.
          <br /> غالبا ما يكون جزءا من اختبار الفحص للكشف عن مستويات الكالسيوم
          المرتفعة والمنخفضة بشكل غير طبيعي ، حيث يمكن أن يؤثر كلاهما على الصحة.{" "}
          <br /> التأثير على الصحة العامة؟
          <br /> يمكن أن تحدث مستويات غير طبيعية من الكالسيوم بسبب مشاكل في
          امتصاص الكالسيوم وأمراض العظام ،<br /> فرط نشاط الغدة الدرقية ، مرض
          الغدة الدرقية ، أمراض الكلى أو الكبد.
          <br /> كيفية تحسين الظروف الصحية؟
          <br /> بالنسبة لمستويات الكالسيوم المنخفضة ، فإن اتباع نظام غذائي
          يحتوي على الأطعمة الغنية بالكالسيوم هو التوصية
        </p>
      </div>
      <div className=" bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-9 md:rounded-xl md:mb-7 border-y md:border-t-0 border-[#F5F5F5] rtl">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
          <h2>ملخص الاداء شهريا</h2>
          <div className="flex items-center gap-8">
            <button
              className="flex items-center size-[28px] justify-center bg-grayLight rounded-s-[6px]"
              onClick={() => {
                setYear(year + 1);
              }}
            >
              <ArrowNav fill="#010036" className={"w-[7px]"} />
            </button>
            <p className="text-center font-extrabold  text-[14px] mdl:text-[20px]">
              {" "}
              {year}
            </p>
            <button
              className="flex items-center size-[28px] justify-center bg-grayLight rounded-e-[6px]"
              onClick={() => {
                setYear(year - 1);
              }}
            >
              <ArrowLeftMainGreen fill="#010036" className={"w-[7px]"} />
            </button>
          </div>
        </div>
        <LinerChart chartData={charts} />
      </div>
    </div>
  );
}

export default Page;
