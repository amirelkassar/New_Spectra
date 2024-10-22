import ActionMenu from "./ActionMenuDepartments";

export const DepartmentColumns = [
  {
    accessorKey: "departmentName",
    header: "القسم",
  },
  {
    accessorKey: "specializationsCount",
    header: "عدد التخصصات ",
  },
  {
    accessorKey: "headOfDepartment",
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
