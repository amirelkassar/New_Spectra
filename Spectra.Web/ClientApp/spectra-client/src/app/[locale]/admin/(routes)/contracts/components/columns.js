import Image from "next/image";
import ContractsActionBtn from "./contractsActionBtn";
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
    accessorKey: "status",
    header: "حالة العقد",
    id: "status",
    cell: ({ getValue, row }) => {
      const status = getValue();
      const id = row.original.id;
      return (
        <div className="mx-1 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {status === "active" && (
              <div className="bg-blueLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-greenMain">
                  نشط
                </p>
              </div>
            )}
            {status === "ultimate" && (
              <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-red">
                  منتهى
                </p>
              </div>
            )}
            {status === "rejected" && (
              <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-red">
                  مرفوض
                </p>
              </div>
            )}
            {status === "manger" && (
              <div className="bg-blueLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-greenMain">
                  قيد المراجعة من رئيس القسم
                </p>
              </div>
            )}
            {status === "admin" && (
              <div className="bg-grayLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-grayDark">
                  قيد المراجعة من الادارى
                </p>
              </div>
            )}
            {status === "reviewed" && (
              <div className="bg-[#F5E4F9] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] text-center md:text-[16px] text-[#8A22A0]">
                  قيد المراجعة من الطبيب
                </p>
              </div>
            )}
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const status = row.original.status;
      const id = row.original.id;
      return <ContractsActionBtn status={status} id={id} />;
    },
  },
];
