"use client";
import React from "react";
import { DataTable } from "@/components/data-table";
import { DrugsColumns } from "./_components/drugs-columns";
import AddMainData from "./_components/add-drugs";
import ROUTES from "@/routes";
import { GetDrugs } from "@/useAPI/admin/main-data/drugs";
import HandelShowData from "@/components/handelShowData";

function page() {
  const { data, isLoading } = GetDrugs();

  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">وصفات طبية</h2>
        <AddMainData
          title={"أضافة عقار"}
          path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
        />
      </div>
      <HandelShowData isLoading={isLoading} lengthData={data?.data.data.length}>
        <DataTable data={data?.data.data} columns={DrugsColumns} />
      </HandelShowData>
    </div>
  );
}

export default page;
