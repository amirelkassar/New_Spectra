"use client";
import React from "react";

import ReportChart from "@/components/reportChart";
import ReportsAll from "./_components/reports-all";
const apiData = [
  { title: "جلسة 14", num: 4 },
  { title: "جلسة 13", num: 1 },
  { title: "جلسة 12", num: 10 },
  { title: "جلسة 11", num: 7 },
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
          <ReportsAll data={apiData}/>
        </div>

        <ReportChart ReportDataChart={[...apiData].reverse().slice(0,7)} />
      </div>
    </div>
  );
}

export default Page;
