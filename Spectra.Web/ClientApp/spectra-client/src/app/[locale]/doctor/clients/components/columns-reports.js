import MenuActions from "@/components/menu-actions";
import ActionMenu from "./ActionMenu-reports";

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
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
