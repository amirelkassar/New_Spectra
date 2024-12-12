import LinkGreen from "@/components/linkGreen";
import { getDate } from "@/lib/utils";
import ROUTES from "@/routes";
export const columnsTest = [
  {
    accessorKey: "employeeId",
    header: "الاسم ",
    id: "name",
  },
  {
    accessorKey: "employeeId",
    header: "الوظيفة",
    id: "job",
  },
  {
    accessorKey: "created",
    header: "تاريخ التوقيع",
    id: "date",
    cell: ({ getValue }) => {
      const data = getValue();
      return <p>{getDate(data).fullYear}</p>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.employeeId;
      return (
        <LinkGreen
          href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id)}
          className={
            "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
          }
        >
          عرض
        </LinkGreen>
      );
    },
  },
];
