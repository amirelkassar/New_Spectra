'use client'
import React from "react";
import AddMainData from "../_components/add-drugs";
import { DataTable } from "@/components/data-table";
import ROUTES from "@/routes";
import {ProceduresColumns} from '../_components/analysis-columns'
import AnalysisIcon from "@/assets/icons/analysis";
import RumorsIcon from "@/assets/icons/rumors";
const procedures = [
  {
    id: 0,
    name: "Fluoroscopy",
    code: "#12358",
    note: "القسطرة الوريدية",
  },
  {
    id: 1,
    name: "Ultrasonic",
    code: "#12358",
    note: "في حالات الأمراض القلبية.",
  },
  {
    id: 2,
    name: "Fluoroscopy",
    code: "#12358",
    note: "القسطرة الوريدية",
  },
  {
    id: 3,
    name: "Ultrasonic",
    code: "#12358",
    note: "في حالات الأمراض القلبية.",
  },
  {
    id: 4,
    name: "Fluoroscopy",
    code: "#12358",
    note: "القسطرة الوريدية",
  },
  {
    id: 5,
    name: "Ultrasonic",
    code: "#12358",
    note: "في حالات الأمراض القلبية.",
  },
  {
    id: 6,
    name: "Fluoroscopy",
    code: "#12358",
    note: "القسطرة الوريدية",
  },
];
const FilterOptions = [
  {
    label: "التحاليل",
    icon: <AnalysisIcon />,
    key: "Fluoroscopy",
  },
  {
    label: "الاشاعات",
    icon: <RumorsIcon/>,
    key: "Ultrasonic",
  },

];
function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">التحاليل و الاشاعات </h2>
        <AddMainData
          title={"أضافة نوع "}
          path={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD}
        />
      </div>

      <DataTable data={procedures} filter='buttons' filterBy="name" filterData={FilterOptions}  columns={ProceduresColumns} />
    </div>
  );
}

export default page;
