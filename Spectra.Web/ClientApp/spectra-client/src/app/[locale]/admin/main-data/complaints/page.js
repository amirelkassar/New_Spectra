"use client";
import React from "react";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import { ComplaintsColumns } from "../_components/complaints-columns";
import { GetComplaint } from "@/useAPI/admin/main-data/complaints";
import HandelShowData from "@/components/handelShowData";

function page() {
  const { data, isLoading } = GetComplaint();
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
        <h2 className="headTitleDash"> الشكاوى العامة</h2>
        <AddMainData
          title={" أضافة شكوى"}
          path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
        />
      </div>
      <HandelShowData isLoading={isLoading} lengthData={data?.data.data.length}>
        <DataTable data={data?.data.data} columns={ComplaintsColumns} />
      </HandelShowData>
    </div>
  );
}

export default page;
