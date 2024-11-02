import ActionMenu from "./ActionMenu";
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
    accessorKey: "jopType",
    header: "الوظيفة",
    id: "jopType",
  },

  {
    accessorKey: "timeToJoin",
    header: " تاريخ الانضمام",
    id: "timeToJoin",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <p className="text-[12px] md:text-[16px]">
          {new Date(value).toISOString().split("T")[0]}
        </p>
      );
    },
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد المرضى ",
    id: "numberOfChildren",
    cell: ({ getValue }) => {
      const value = getValue();
      return <p className="text-[12px] md:text-[16px]">0</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const type = row.original.jopType;
      const id = row.original.id;
      return (
        <div
          className={"flex gap-[10px] md:gap-[40px] items-center justify-end "}
        >
          <ActionMenu id={id} type={type} />
        </div>
      );
    },
  },
];
