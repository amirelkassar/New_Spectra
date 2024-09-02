import MenuActions from "@/components/menu-actions";

export const ComplaintsColumns = [
  {
    accessorKey: "complaintTitle",
    header: "الشكوى",
  },
  {
    accessorKey: "code",
    header: "الكود ",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <MenuActions />;
    },
  },
];
