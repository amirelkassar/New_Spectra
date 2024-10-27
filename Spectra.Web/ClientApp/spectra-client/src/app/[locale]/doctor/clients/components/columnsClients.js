import ReportDecIcon from "@/assets/icons/reportDec";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import ActionMenu from "./ActionMenu";

export const columns = [
  {
    accessorKey: "doctor",
    header: "الاسم ",
    id: "doctor",
    cell: ({ row, getValue }) => {
      const name = getValue();
      const img = row.original.image;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.DOCTOR.CLIENTS.DETAILS(id)}
          className="flex items-center gap-6"
        >
          <div className=" size-14 rounded-full md:flex hidden items-start justify-center overflow-hidden">
            <Image src={img} alt="Doctor image" />
          </div>
          <h2 className="text-[12px] lg:text-base">{name}</h2>
        </Link>
      );
    },
  },
  {
    accessorKey: "childName",
    header: "اسم الطفل",
    id: "childName",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },

  {
    id: "type",
    cell: ({row}) => {
      const id = row.original.id
      return (
        <div className="flex items-center justify-end gap-5 lg:gap-10">
          <div className="flex w-8 aspect-square h-8 lg:h-[50px] lg:w-[50px] items-center justify-center p-[6px] lg:p-3 rounded-[50%] bg-blueLight">
            <ReportDecIcon />
          </div>

          <ActionMenu id={id}  />
        </div>
      );
    },
  },
];
