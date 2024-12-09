import ActionDeferred from "./actionDeferred";

export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
  },
  {
    accessorKey: "patientName",
    header: "اسم الطفل ",
    id: "patientName",
  },
  {
    accessorKey: "numChild",
    header: "عدد الاطفال ",
    id: "numChild",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "time",
    header: "الـميعاد",
    id: "time",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
       <ActionDeferred/>
      );
    },
  },
];
