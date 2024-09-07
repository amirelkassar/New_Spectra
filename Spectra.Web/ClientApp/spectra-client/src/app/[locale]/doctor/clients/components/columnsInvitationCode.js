import ReportDecIcon from "@/assets/icons/reportDec";
import MenuActions from "@/components/menu-actions";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "doctor",
    header: "الاسم ",
    id: "doctor",
    cell: ({ row, getValue }) => {
      const name = getValue();
      const img = row.original.image;
      return (
        <div className="flex items-center gap-6">
          <div className=" size-14 rounded-full bg-red md:flex hidden items-start justify-center overflow-hidden">
            <Image src={img} alt="Doctor image" />
          </div>
          <h2 className="text-[12px] lg:text-base">{name}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: "typeCustomer",
    header: "نوع العميل ",
    id: "typeCustomer",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "time",
    header: "الميعاد",
    id: "time",
  },
  {
    id: "type",
    cell: () => {
      return (
        <div className="flex items-center justify-end gap-5 lg:gap-10">
          <div className="flex w-8 aspect-square h-8 lg:h-[50px] lg:w-[50px] items-center justify-center p-[6px] lg:p-3 rounded-[50%] bg-blueLight">
            <ReportDecIcon />
          </div>

          <MenuActions />
        </div>
      );
    },
  },
];
