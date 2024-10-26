"use client";
import React from "react";
import LayoutHome from "../components/layoutHome";
import Card from "@/components/card";
import MenuActions from "@/components/menu-actions";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns-reports";
import ReportsView from "../components/reports-view copy";
const reports = [
  {
    id: 1,
    name: "Common question",
    date: "20/2/2024",
    patient: "عبدالله الشيخ",
  },
  {
    id: 2,
    name: "post assessment ",
    date: "20/2/2024",
    patient: "عبدالله الشيخ",
  },
  {
    id: 3,
    name: "Common question",
    date: "20/2/2024",
    patient: "عبدالله الشيخ",
  },
  {
    id: 4,
    name: "post assessment ",
    date: "20/2/2024",
    patient: "عبدالله الشيخ",
  },
];
function page() {
  const FilterOptions = [
    {
      label: "Common question",
      key: "Common question",
    },
    {
      label: "post assessment ",
      key: "post assessment ",
    },
  ];
  return (
    <LayoutHome>
      <div className="flex-1">
        <Card className={"h-full"}>
          <div className="flex items-center justify-between mb-16">
            <div className="flex  mb-1 flex-wrap items-center gap-4 md:gap-6">
              <h2 className="headTitleDash">التقارير</h2>
            </div>
            <MenuActions />
          </div>
          <DataTable
            data={reports}
            haveComp
            Component={ReportsView}
            columns={columns}
            filterData={FilterOptions}
            filter="buttons"
            filterBy="name"
            filterText="فلتر بالنوع"
          />
        </Card>
      </div>
    </LayoutHome>
  );
}

export default page;
