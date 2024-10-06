import AllSpecializations from "@/assets/icons/all-specializations";
import ActionMenu from "./ActionMenuTestsInterior";

export const TestsInteriorColumns = [
  {
    accessorKey: "title",
    header: "الاسم",
  },
  {
    accessorKey: "code",
    header: "الكود ",
  },
  {
    accessorKey: "Specialization",
    header: "التخصص ",
    cell: ({ getValue, row }) => {
      const Specialization = getValue();
      console.log(Specialization);

      return (
        <p className="max-w-[150px] truncate text-base font-Regular">
          {Specialization.map(
            (item, index) =>
              item + (index + 1 < Specialization.length ? " - " : "")
          )}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
