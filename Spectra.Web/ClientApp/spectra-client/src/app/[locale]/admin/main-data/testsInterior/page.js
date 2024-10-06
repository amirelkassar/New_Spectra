"use client";
import React from "react";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import { TestsInteriorColumns } from "../_components/testsInterior-columns";
const ComplaintsData = [
  {
    id: 1,
    title: "Cars",
    code: "#12358",
    Specialization: ["نفسى", "علاجى", "نفسى", "علاجى", "نفسى", "علاجى"],
  },
  { id: 2, title: "Cat", code: "#12358", Specialization: ["نفسى", "علاجى"] },
];
function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash"> الفحوصات الداخلية </h2>
        <AddMainData
          title={"أضافة فحص داخلى"}
          path={ROUTES.ADMIN.DATAMAIN.TESTSINTERIORADD}
        />
      </div>
      <DataTable data={ComplaintsData} columns={TestsInteriorColumns} />
    </div>
  );
}

export default page;
