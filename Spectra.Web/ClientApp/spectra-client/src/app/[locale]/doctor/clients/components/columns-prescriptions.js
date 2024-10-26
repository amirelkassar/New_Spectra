import PillsIcon from "@/assets/icons/pills";
import MenuActions from "@/components/menu-actions";

export const columns = [
  {
    accessorKey: "therapy",
    header: "الاسم ",
    id: "therapy",
    cell: ({ row, getValue }) => {
      const name = getValue();
      const img = row.original.image;
      return (
        <div className="flex items-center gap-6">
          <div className="flex bg-blueLight p-2 size-[38px] rounded-full items-center justify-center p-1">
          <PillsIcon />
          </div>
          <h2 className="text-[12px] lg:text-base">{name}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "nameFamily",
    header: "المريض",
    id: "nameFamily",
  },

  {
    id: "actions",
    cell: () => {
      return <MenuActions />;
    },
  },
];
