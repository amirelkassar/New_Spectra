"use client";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 9,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    numberOfChildren: "1",
  },
];
const OrganizationClientsPage = () => {
  return (
    <section className="default-page grow">
      <div className="flex items-center justify-between">
        <h2 className=" lg:block hidden text-[20px]">عملاء المنظمة</h2>
      
      </div>

      <DataTable IsWidth={true} data={data} columns={columns} />
    </section>
  );
};

export default OrganizationClientsPage;
