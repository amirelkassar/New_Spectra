import MenuActions from "@/components/menu-actions";

export const columns = [
  {
    accessorKey: "date",
    header: "التاريخ ",
    id: "date",
  },
  {
    accessorKey: "observation",
    header: "الملاحظة",
    id: "observation",
  },
  {
    accessorKey: "editPlan",
    header: "تعديلات فى الخطة العلاجية",
    id: "editPlan",
  },
  {
    accessorKey: "response",
    header: "استجابة المريض",
    id: "response",
  },

  {
 
    id: "type",
    cell: () => {
      return <MenuActions />;
    },
  },
];
