import MenuActions from "@/components/menu-actions";

export const columns = [
  {
    accessorKey: "name",
    header: "النوع ",
    id: "name",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "patient",
    header: "المريض",
    id: "patient",
  },

  {
    id: "actions",
    cell: () => {
      return <MenuActions />;
    },
  },
];
