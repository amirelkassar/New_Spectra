"use client";
import React from "react";
import AddMainData from "../_components/add-drugs";
import { DataTable } from "@/components/data-table";
import ROUTES from "@/routes";
import { ProceduresColumns } from "../_components/analysis-columns";
import AnalysisIcon from "@/assets/icons/analysis";
import RumorsIcon from "@/assets/icons/rumors";
import { GetMedicalTests } from "@/useAPI/admin/main-data/analysis";
import HandelShowData from "@/components/handelShowData";

const FilterOptions = [
  {
    label: "التحاليل",
    icon: <AnalysisIcon />,
    key: 1,
  },
  {
    label: "الاشاعات",
    icon: <RumorsIcon />,
    key: 2,
  },
];
function page() {
  const { data, isLoading } = GetMedicalTests();
  console.log(data);

  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
        <h2 className="headTitleDash">التحاليل و الاشاعات </h2>
        <AddMainData
          title={"أضافة نوع "}
          path={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD}
        />
      </div>
      <HandelShowData isLoading={isLoading} lengthData={data?.data.data.length}>
        <DataTable
          data={data?.data.data}
          filter="buttons"
          filterBy="examinationTypes"
          filterData={FilterOptions}
          columns={ProceduresColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default page;
