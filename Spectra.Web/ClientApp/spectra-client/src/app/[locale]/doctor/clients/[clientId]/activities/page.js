"use client";
import React, { useState } from "react";

import ReportChart from "@/components/reportChart";
import ArrowLeftMainGreen from "@/assets/icons/arrow-left-mainGreen";
const apiData = [
  { title: "جلسة 10   ", num: 8 },
  { title: "جلسة 9", num: 4 },
  { title: "جلسة 8", num: 1 },
  { title: "جلسة 7", num: 10 },
  { title: "جلسة 6", num: 8 },
  { title: "جلسة 5", num: 4 },
  { title: "جلسة 4", num: 1 },
  { title: "جلسة 3", num: 10 },
  { title: "جلسة 2", num: 7 },
  { title: "جلسة 1", num: 4 },
];
function Page() {
  return (
    <div className="flex-1">
      <div className=" bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-9 md:rounded-xl md:mb-7 border-y md:border-t-0 border-[#F5F5F5] rtl">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
          <h2>ملخص الاداء</h2>
          <button className="flex bg-blueLight duration-200 hover:shadow-md min-w-[178px] items-center justify-center gap-4 px-5 h-[52px] rounded-xl text-greenMain">
            <p className="font-Bold text-sm md:text-base">عرض الكل</p>
            <ArrowLeftMainGreen className="w-2 h-auto" />
          </button>
        </div>

        <ReportChart ReportDataChart={apiData} />
      </div>
    </div>
  );
}

export default Page;
