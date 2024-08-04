import RequestAction from "./requestAction";
import RequestOldAction from "./requestOldAction";
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
  },
  {
    accessorKey: "job",
    header: " نوع العميل",
    id: "job",
  },
  {
    accessorKey: "date",
    header: "تاريخ الطلب",
    id: "date",
  },

  {
    accessorKey: "type",
    header: "",
    id: "type",

    cell: ({ getValue, row }) => {
      const id = row.original.id;
      return <RequestAction id={id} />;
    },
  },
];
export const columnsOld = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
  },
  {
    accessorKey: "job",
    header: " نوع العميل",
    id: "job",
  },
  {
    accessorKey: "date",
    header: "تاريخ الطلب",
    id: "date",
  },

  {
    accessorKey: "type",
    header: "",
    id: "type",

    cell: ({ getValue, row }) => {
      const id = row.original.id;
      return <RequestAction id={id} />;
    },
  },
];
