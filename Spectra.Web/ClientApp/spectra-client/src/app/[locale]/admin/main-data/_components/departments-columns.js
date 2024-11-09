import ActionMenu from "./ActionMenuDepartments";

export const DepartmentColumns = [
  {
    accessorKey: "name",
    header: "القسم",
  },
  {
    accessorKey: "countDiagnoses",
    header: "عدد التخصصات ",
  },
  {
    accessorKey: "doctorName",
    header: "رئيس القسم",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
