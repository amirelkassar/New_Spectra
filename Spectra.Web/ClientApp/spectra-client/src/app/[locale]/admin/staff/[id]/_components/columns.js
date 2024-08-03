import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import { Badge } from "@mantine/core";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "DetectionNumber",
    header: "رقم الكشف",
    id: "DetectionNumber",
  },
  {
    accessorKey: "date",
    header: "الميعاد",
    id: "date",
    cell: ({ getValue, row }) => {
      const date = getValue();
      const time = row.original.time;
      return (
        <div
          className={
            "items-start block gap-3 row-span-1 col-span-1    content-center   transition text-[12px] md:text-[16px]"
          }
        >
          <p className=" text-[12px] md:text-[16px]">{date}</p>
          <p className="text-[12px] md:text-[16px]">{time}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: " اسم المريض",
    id: "name",
  },
  {
    accessorKey: "type",
    header: "الحالة",
    id: "type",

    cell: ({ getValue, row }) => {
      const status = row.original.statu;

      return (
        <div
          className={"flex gap-[10px] md:gap-[40px] justify-end items-start "}
        >
          <Statue statue={status} />

          <MenuActions />
        </div>
      );
    },
  },
];
