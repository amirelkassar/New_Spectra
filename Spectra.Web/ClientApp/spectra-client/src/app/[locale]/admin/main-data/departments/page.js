"use client";
import React from "react";
import { DataTable } from "@/components/data-table";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
import { DepartmentColumns } from "../_components/departments-columns";
import { GetSection } from "@/useAPI/admin/main-data/section";
import HandelShowData from "@/components/handelShowData";
const departments = [
  {
    id: 0,
    departmentName: "الطب النفسي",
    specializationsCount: 3,
    headOfDepartment: "أحمد عبد كامل",
    specializations: [
      "Specialization 1",
      "Specialization 2",
      "Specialization 3",
    ], // Example
  },
  {
    id: 1,
    departmentName: "العلاج الوظيفي",
    specializationsCount: 2,
    headOfDepartment: "نجلاء سعيد",
    specializations: ["Specialization 1", "Specialization 2"], // Example
  },
  {
    id: 2,
    departmentName: "العلاج النفسي السلوكي",
    specializationsCount: 2,
    headOfDepartment: "عبد الله الشيخ",
    specializations: ["تحليل السلوك التطبيقي", "العلاج السلوكي العرفي"],
  },
  {
    id: 3,
    departmentName: "العلاج بالكلام والنطق",
    specializationsCount: 3,
    headOfDepartment: "حسين حميد",
    specializations: [
      "Specialization 1",
      "Specialization 2",
      "Specialization 3",
    ], // Example
  },
];
function page() {
  const { data, isLoading } = GetSection();

  console.log(data);

  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6">
        <h2 className="headTitleDash">الاقسام</h2>
        <AddMainData
          title={"أضافة قسم"}
          path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTSADD}
        />
      </div>
      <HandelShowData isLoading={isLoading} lengthData={data?.data.data.length}>
      <DataTable data={data?.data.data} columns={DepartmentColumns} />

      </HandelShowData>
    </div>
  );
}

export default page;
