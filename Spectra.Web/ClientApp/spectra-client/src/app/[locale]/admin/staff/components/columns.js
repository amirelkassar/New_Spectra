import MenuActions from "@/components/menu-actions";
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
  },
  {
    accessorKey: "email",
    header: "الايميل",
    id: "email",
  },
  {
    accessorKey: "type",
    header: "الوظيفة",
    id: "typeClient",
  },

  {
    accessorKey: "lastLogin",
    header: " تاريخ الانضمام",
    id: "lastLogin",
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد المرضى ",
    id: "numberOfChildren",
  },
  {
    accessorKey: "type",
    header: "",
    id: "type",

    cell: ({ getValue, row }) => {
      const status = row.original.statu;

      return (
        <div
          className={"flex gap-[10px] md:gap-[40px] items-center justify-end "}
        >
          <MenuActions />
        </div>
      );
    },
  },
];
