"use client";
import React from "react";
import AddMainData from "../_components/add-drugs";
import { DataTable } from "@/components/data-table";
import ROUTES from "@/routes";
import { DiagnosticsColumns } from "../_components/diagnostics-columns";

const DiagnosticsData = [
  {
    id: 0,
    name: "طيف التوحد",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 1,
    name: "فرط حركة",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 2,
    name: "اضطرابات نفسية",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 3,
    name: "اضطراب سلوك",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 4,
    name: "ضعف السمع",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 5,
    name: "تأخر النمو",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 6,
    name: "تأخر الكلام",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 7,
    name: "مشاكل تعلمية",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
  {
    id: 8,
    name: "اعاقة ذهنية",
    code: "#12358",
    code2: "#12358",
    code3: "#12358",
  },
];

function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">التشخيصات </h2>
        <AddMainData
          title={"أضافة تشخيص "}
          path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
        />
      </div>

      <DataTable data={DiagnosticsData} columns={DiagnosticsColumns} />
    </div>
  );
}

export default page;
