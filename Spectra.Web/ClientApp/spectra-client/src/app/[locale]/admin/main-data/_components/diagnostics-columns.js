import ROUTES from "@/routes";
import ActionMenu from "./ActionMenuDiagnostics";
export const DiagnosticsColumns = [
  {
    accessorKey: "name",
    header: "الاسم ",
  },
  {
    accessorKey: "code",
    header: "الكود 1  ",
  },
  {
    accessorKey: "code2",
    header: "الكود 2",
  },
  {
    accessorKey: "code3",
    header: "الكود 3 ",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id}  />;
    },
  },
];
