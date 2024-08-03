import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد الاطفال",
    id: "numberOfChildren",
  },
  {
    accessorKey: "lastLogin",
    header: "اخر دخول",
    id: "lastLogin",
  },

  {
    accessorKey: "",
    header: "",
    id: "type",
    cell: () => {
      return (
        <div
          className={"flex gap-[10px] md:gap-[40px] justify-end items-start me-5 "}
        >
          <MenuActions />
        </div>
      );
    },
  },
];
