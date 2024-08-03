import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import { Badge } from "@mantine/core";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد الاطفال",
    id: "numberOfChildren",
  },
  {
    accessorKey: "email",
    header: "الايميل",
    id: "email",
    cell:({getValue,row})=>{
      const emial = row.original.email
      return(
        <p className="text-base mdl:block hidden">
        {emial}
      </p>
      )
    }
  },
  {
    accessorKey: "lastLogin",
    header: "اخر دخول",
    id: "lastLogin",
  },
  {
    accessorKey: "type",
    header: "نوع العميل",
    id: "typeClient",
  },
  {
    accessorKey: "type",
    header: "",
    id: "type",

    cell: ({ getValue, row }) => {
      const status = row.original.statu;

      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px] items-center justify-end "
          }
        >
          <MenuActions />
        </div>
      );
    },
  },
];
