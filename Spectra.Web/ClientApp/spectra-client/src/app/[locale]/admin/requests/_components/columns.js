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

    cell: () => {
      return <RequestAction />;
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

    cell: () => {
      return <RequestOldAction />;
    },
  },
];
