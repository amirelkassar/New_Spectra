'use client'
import React from "react";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import {ComplaintsColumns} from '../_components/complaints-columns'
import { GetComplaint } from "@/useAPI/admin/main-data/complaints";
import NoDataYet from "@/components/noDataYet";

function page() {
  const { data, isLoading } = GetComplaint();
  console.log(data);
  
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash"> الشكاوى العامة</h2>
        <AddMainData
          title={" أضافة شكوى"}
          path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
        />
      </div>
        {!isLoading ? (
        data?.data.data.length > 0 ? (
          <DataTable data={data.data.data} columns={ComplaintsColumns} />
        ) : (
        <NoDataYet/>
        )
      ) : (
        <p>isLoading</p>
      )}
    
    </div>
  );
}

export default page;
