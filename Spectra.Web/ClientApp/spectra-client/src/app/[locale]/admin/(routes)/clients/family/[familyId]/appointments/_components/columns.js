import Statue from "@/components/status";
import ActionMenu from "./ActionMenuFamilyAppo";

export const columns = [
  {
    accessorKey: "doctor",
    header:"اسم الاخصائي",
    id: "doctor",
    cell: ({ getValue, row }) => {
      const doctor = getValue();
      const specialisationDoctor = row.original.specialisationDoctor;
      return (
        <div>
          <p className="font-bold text-[12px] md:text-[16px]">{doctor}</p>
          <p className="text-[12px] font-ExtraLight md:text-[16px]">
            {specialisationDoctor}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "اسم المريض",
    id: "name",

    cell: ({ getValue, row }) => {
      const name = getValue();
      const kinshipName = row.original.kinshipName;
      return (
        <div
          className={
            "items-start block gap-3 row-span-1 col-span-1    content-center   transition text-[12px] md:text-[16px]"
          }
        >
          <p className=" text-[12px] md:text-[16px]">{name}</p>
          <p className="text-[12px] md:text-[16px]">{kinshipName}</p>
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
            "flex gap-[10px] md:gap-[40px] justify-end items-start "
          }
        >
          <Statue statue={status} />

          <ActionMenu />
        </div>
      );
    },
  },
];
