import AnalysisIcon from "@/assets/icons/analysis";
import RumorsIcon from "@/assets/icons/rumors";
import ActionMenu from "./ActionMenuAnalysis";
export const ProceduresColumns = [
  {
    accessorKey: "scientificName",
    header: "الاسم",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const type = row.original.examinationTypes;
      return (
        <div className="flex items-center gap-2">
          <div className="flex bg-blueLight size-[38px] rounded-full items-center justify-center p-1">
            {type === 1 ? <AnalysisIcon /> : <RumorsIcon />}
          </div>
          <h3 className="font-Bold">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "الكود ",
  },
  {
    accessorKey: "notes",
    header: "ملاحظة",
  },
  
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
