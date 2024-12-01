import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "DetectionNumber",
    header:"رقم الكشف",
    id: "DetectionNumber",
  },
  {
    accessorKey: "date",
    header: 'الميعاد',
    id: "date",
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
          className={
            "flex gap-[10px] md:gap-[40px] justify-end items-start "
          }
        >
          <Statue statue={status} />

          <MenuActions />
        </div>
      );
    },
  },
];
