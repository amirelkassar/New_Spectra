'use client';
import React, { useState } from "react";
import ReportsNumber from "../../components/reports-number";
import LayoutClientID from "../components/layoutClientID";
import ArrowNav from "@/assets/icons/arrow-nav";
import ArrowLeftMainGreen from "@/assets/icons/arrow-left-mainGreen";
import LinerChart from "@/components/liner-chart";
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
function Page() {
const [year, setYear] = useState(new Date().getFullYear());

  return (
    <LayoutClientID>
      <div className="flex-1">
        <ReportsNumber title={"التقارير"} haveBack={true} />
        <div className="default-page w-full !h-auto">
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
      </div>
    </LayoutClientID>
  );
}

export default Page;
