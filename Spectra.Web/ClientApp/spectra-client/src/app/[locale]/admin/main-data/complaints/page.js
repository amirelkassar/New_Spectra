'use client'
import React from "react";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import {ComplaintsColumns} from '../_components/complaints-columns'
const ComplaintsData = [
  {id:1, complaintTitle: "الم العظام", code: "#12358" },
  {id:2, complaintTitle: "تلف نتائج اختبار غير صحيحة.", code: "#12358" },
  {id:3, complaintTitle: "طفح جلدي", code: "#12358" },
  {id:4, complaintTitle: "غثيان مع الم بالراس", code: "#12358" },
  {id:5, complaintTitle: "فرط حركة", code: "#12358" },
  {id:6, complaintTitle: "تلف نتائج اختبار غير صحيحة.", code: "#12358" },
  {id:7, complaintTitle: "طفح جلدي", code: "#12358" },
  {id:8, complaintTitle: "الم العظام", code: "#12358" },
  {id:9, complaintTitle: "الترباح حاق", code: "#12358" }
];
function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash"> الشكاوى العامة</h2>
        <AddMainData
          title={" أضافة شكوى"}
          path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
        />
      </div>
      <DataTable data={ComplaintsData} columns={ComplaintsColumns} />
    </div>
  );
}

export default page;
