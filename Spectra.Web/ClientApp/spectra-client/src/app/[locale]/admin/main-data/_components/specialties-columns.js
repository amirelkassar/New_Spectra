import ActionMenu from "./ActionMenuSpecialties";

export const SpecialtiesColumns = [
  {
    accessorKey: "name",
    header: "التخصص",
  },
  {
    accessorKey: "id",
    header: "كود التخصص",
  },
  {
    accessorKey: "doctorCount",
    header: "عدد الاطباء في هذا التخصص",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
