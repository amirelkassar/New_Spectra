import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "name",
    header: "اسم الطبيب",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const specialisation = row.original.specialisation;

      const avatar = row.original.image;
      return (
        <div className={" items-center gap-5    flex"}>
          <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
            <Image src={avatar} alt={name} />
          </div>

          <div>
            <p className="font-bold text-[12px] md:text-[16px]">{name}</p>
            <p className="text-[12px] font-ExtraLight md:text-[16px]">
              {specialisation}
            </p>
          </div>
        </div>
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

    cell: ({ getValue, row }) => {
      const status = row.original.statu;

      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px]   content-center items-start "
          }
        >
          <Statue statue={status} />

          <MenuActions />
        </div>
      );
    },
  },
];
