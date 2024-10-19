import Button from "@/components/button";
import MenuActions from "@/components/menu-actions";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const image = row.original.image;
      return (
        <div className={"flex items-center gap-5 py-2 md:py-5 px-3 min-w-40"}>
          <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
            <Image src={image} alt={name} />
          </div>
          <p className="font-bold text-[12px] md:text-[16px]">{name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "job",
    header: "الوظيفة",
    id: "job",
  },
  {
    accessorKey: "date",
    header: "تاريخ التوقيع",
    id: "date",
  },

  {
    accessorKey: "",
    header: "حالة العقد",
    id: "lastLogin",
    cell: () => {
      return (
        <div className="mx-1 flex items-center gap-4">
          <div className="bg-[#F1FCFF] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
            <span className=" size-3 rounded-[50%]  bg-greenMain animate-pulse z-[1] md:block hidden"></span>
            <p className="font-Bold text-[12px] md:text-[16px] text-greenMain">
              نشط
            </p>
          </div>
          <Button
            className={
              "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
            }
          >
            الغاء العقد
          </Button>
          <MenuActions />
        </div>
      );
    },
  },
];
