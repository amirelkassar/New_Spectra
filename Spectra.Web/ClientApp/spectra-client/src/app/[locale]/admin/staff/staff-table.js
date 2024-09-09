"use client";
import { DataTable } from "@/components/data-table";
import { columns } from "./components/columns";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "manger ",
    route: "family",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "secretary",
    route: "organization",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "organization  ",
    route: "provider",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "manger ",
    route: "family",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "secretary",
    route: "organization",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "doctor",
    route: "provider",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "doctor",
    route: "family",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "doctor",
    route: "family",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "specialist",
    route: "family",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "specialist",
    route: "family",
  },
  {
    id: 11,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "doctor",
    route: "family",
  },
  {
    id: 12,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "specialist",
    route: "family",
  },
  {
    id: 13,
    name: "عبدالله الشيخ",
    numberOfChildren: "50",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: "manger",
    route: "family",
  },
];
const FilterOptions = [
  {
    label: "رؤساء اقسام",
    icon: null,
    key: "manger",
  },
  {
    label: "مختص",
    icon: null,
    key: "organization",
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

const StaffTable = () => {

  return (
    <div className="grow">
      <DataTable
        data={data}
        columns={columns}
        filterData={FilterOptions}
        filterBy="type"
        filterText="فلتر بالنوع"
        filter="buttons"
        mdHide={2}
      />
    </div>
  );
};

export default StaffTable;
