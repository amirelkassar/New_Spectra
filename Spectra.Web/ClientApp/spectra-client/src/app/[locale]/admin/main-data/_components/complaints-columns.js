
import ActionMenu from "./ActionMenuComplaints";

export const ComplaintsColumns = [
  {
    accessorKey: "complaintName",
    header: "الشكوى",
  },
  {
    accessorKey: "code1",
    header: "الكود ",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
