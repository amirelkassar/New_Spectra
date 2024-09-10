import MenuActions from "@/components/menu-actions";
import ActionMenu from "./ActionMenu";

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
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px] justify-end items-start me-5 "
          }
        >
          <ActionMenu type={2} id={id} />
        </div>
      );
    },
  },
];
