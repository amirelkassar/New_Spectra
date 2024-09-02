import MenuActions from "@/components/menu-actions";

export const SpecialtiesColumns = [
  {
    accessorKey: "specialty",
    header: "التخصص",
  },
  {
    accessorKey: "code",
    header: "كود التخصص",
  },
  {
    accessorKey: "doctorsCount",
    header: "عدد الاطباء في هذا التخصص",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <MenuActions />;
    },
  },
];
