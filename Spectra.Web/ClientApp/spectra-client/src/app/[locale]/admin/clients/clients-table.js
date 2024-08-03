"use client";
import { DataTable } from "@/components/data-table";
import TableComponents from "@/components/table-comp";
import ROUTES from "@/routes";
import { useState } from "react";
import { columns } from "./components/columns";
import FamilyIcon from "@/assets/icons/family";
import OrgIcon from "@/assets/icons/org";
import ProviderIcon from "@/assets/icons/provider";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'organization',
    route: "organization",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'provider',
    route: "provider",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'organization',
    route: "organization",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'provider',
    route: "provider",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 11,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 12,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
  {
    id: 13,
    name: "عبدالله الشيخ",
    numberOfChildren: "1",
    email: "Abdullah@gmail.com",
    lastLogin: "20/4/2024",
    type: 'family',
    route: "family",
  },
];
const FilterOptions = [
  {
    label:  "عائلة طفل",
    icon: <FamilyIcon className={"w-[14px] lg:w-[18px] h-[15px] lg:h-[19px]"} />,
    key: "family",
  },
  {
    label:"منظمة",
    icon: <OrgIcon className={" size-3 lg:size-4"} />,
    key: "organization",
  },
  {
    label: "مقدم الخدمة الطبية",
    icon: <ProviderIcon className={"w-[14px] lg:w-[18px] h-[15px] lg:h-[19px]"} />,
    key: "provider",
  },
];
const ClientsTable = () => {


  return (
    <div className="grow  overflow-auto ">
     
      <DataTable mdHide={3} data={data} columns={columns} filterData={FilterOptions} filter="buttons" filterBy="type" filterText="فلتر بالنوع"/>
    </div>
  );
};

export default ClientsTable;
