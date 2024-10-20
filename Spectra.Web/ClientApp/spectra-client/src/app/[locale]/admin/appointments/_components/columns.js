import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import Image from "next/image";
import ActionMenu from "./ActionMenu";
import { Link } from "@/navigation";
import ROUTES from "@/routes";

export const columns = [
  {
    accessorKey: "name",
    header: "اسم الطبيب",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const specialisation = row.original.specialisation;
      const id = row.original.id;
      const avatar = row.original.image;
      return (
        <Link
          href={ROUTES.ADMIN.APPOINTMENTSDETAILS(id)}
          className={" items-center gap-5    flex"}
        >
          <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
            <Image src={avatar} alt={name} />
          </div>

          <div>
            <p className="font-bold text-[12px] md:text-[16px]">{name}</p>
            <p className="text-[12px] font-ExtraLight md:text-[16px]">
              {specialisation}
            </p>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "patientName",
    header: "اسم المريض",
    id: "patientName",

    cell: ({ getValue, row }) => {
      const patientName = getValue();
      const patientDiagnosis = row.original.patientDiagnosis;
      return (
        <div
          className={
            "items-start block gap-3 row-span-1 col-span-1    content-center   transition text-[12px] md:text-[16px]"
          }
        >
          <p className=" text-[12px] md:text-[16px]">{patientName}</p>
          <p className="text-[12px] md:text-[16px]">{patientDiagnosis}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "الـميعاد",
    id: "date",

    cell: ({ getValue, row }) => {
      const date = getValue();
      const time = row.original.time;
      return (
        <div
          className={
            "items-start block gap-3 row-span-1 col-span-1    content-center   transition text-[12px] md:text-[16px]"
          }
        >
          <p className=" text-[12px] md:text-[16px]">{date}</p>
          <p className="text-[12px] md:text-[16px]">{time}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "type",
    header: "الحالة",
    id: "type",
    cell: ({ row }) => {
      const status = row.original.statu;
      return <Statue statue={status} />;
    },
  },
  {
    id: "actions",
    cell: () => {
      return <ActionMenu />;
    },
  },
];
