import AnalysisIcon from "@/assets/icons/analysis";
import RumorsIcon from "@/assets/icons/rumors";
import ActionMenu from "./ActionMenuAnalysis";
export const ProceduresColumns = [
  {
    accessorKey: "name",
    header: "الاسم",
    cell: ({ getValue, row }) => {
      const name = getValue();
      return (
        <div className="flex items-center gap-2">
          <div className="flex bg-blueLight size-[38px] rounded-full items-center justify-center p-1">
            {name === "Fluoroscopy" ? <AnalysisIcon /> : <RumorsIcon/>}
          </div>
          <h3 className="font-Bold">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "code",
    header: "الكود ",
  },
  {
    accessorKey: "note",
    header: "ملاحظة",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu />;
    },
  },
];
