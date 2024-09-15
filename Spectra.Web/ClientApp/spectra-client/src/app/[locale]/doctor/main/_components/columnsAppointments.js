import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import Image from "next/image";
import ReportDecIcon from "@/assets/icons/reportDec";
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const image = row.original.image;
      return (
        <div className={" items-center gap-5    flex"}>
          <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
            <Image src={image} alt={name} />
          </div>
          <h3 className="font-bold text-[12px] md:text-[16px]">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "patientName",
    header: "اسم الطفل ",
    id: "patientName",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "time",
    header: "الـميعاد",
    id: "time",
  },

  {
    accessorKey: "type",
    header: "الحالة",
    id: "type",

    cell: ({ getValue, row }) => {
      const status = row.original.statu;

      return <Statue statue={status} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px] justify-end items-start "
          }
        >
          <div className="mx-6">
            <div className="flex items-center justify-center p-3 rounded-[50%] bg-blueLight">
              <ReportDecIcon />
            </div>
          </div>
          <MenuActions />
        </div>
      );
    },
  },
];
