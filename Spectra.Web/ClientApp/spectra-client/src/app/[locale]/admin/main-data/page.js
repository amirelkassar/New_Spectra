"use client";
import React from "react";
import { DataTable } from "@/components/data-table";
import { DrugsColumns } from "./_components/drugs-columns";
import AddMainData from "./_components/add-drugs";
import ROUTES from "@/routes";
import { GetDrugs } from "@/useAPI/admin/drugs/page";


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
      {!isLoading ? (
        data?.data.data.length > 0 ? (
          <DataTable data={data.data.data} columns={DrugsColumns} />
        ) : (
          <p>No Data Yet</p>
        )
      ) : (
        <p>isLoading</p>
      )}
    </div>
  );
}

export default page;
