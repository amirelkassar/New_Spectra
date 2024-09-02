import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
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
      return <MenuActions type={2} path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILS(id)} />;
    },
  },
];
