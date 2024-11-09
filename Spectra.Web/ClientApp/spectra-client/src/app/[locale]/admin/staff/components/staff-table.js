"use client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

const FilterOptions = [
  {
    label: "رؤساء اقسام",
    icon: null,
    key: "manger",
  },
  {
    label: "مختص",
    icon: null,
    key: "Specialist",
  },
  {
    label: "طبيب",
    icon: null,
    key: "doctor",
  },
  {
    label: "سكرتير",
    icon: null,
    key: "secretary",
  },
];

const StaffTable = ({ dataStaff }) => {
  return (
    <DataTable
      data={dataStaff?.data.data.employees}
      columns={columns}
      filterData={FilterOptions}
      filterBy="jopType"
      filterText="فلتر بالنوع"
      filter="buttons"
      mdHide={2}
      totalPages={dataStaff?.data.data.totalPages}
    />
  );
};

export default StaffTable;
