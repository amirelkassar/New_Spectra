'use client';
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
import ActionMenu from "./_components/ActionMenuPage";
import Card from "@/components/card";

const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    job: "طبيب",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    job: "سكرتير",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    job: "محاسب",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    job: "اخصائى",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    lastLogin: "25/4/2024",
    job: "طبيب",
  },


];
function page() {
  return (
    <Card className={'lg:px-8 lg:py-7'}>
      <div className="flex gap-4 items-center mb-8 justify-between">
        <h2 className=" lg:block hidden text-[20px]">موظفين المنظمة </h2>
        <ActionMenu/>
      </div>

      <DataTable  data={data} columns={columns} />
    </Card>
  );
}

export default page;
