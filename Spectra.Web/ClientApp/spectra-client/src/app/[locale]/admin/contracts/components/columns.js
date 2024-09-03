import ContractsIcon from "@/assets/icons/contracts";
import ContractsWhiteIcon from "@/assets/icons/contractsWhite";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
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
              <Button
                className={
                  "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
                }
              >
                الغاء العقد
              </Button>
            )}
            {status === "ultimate" && (
              <Link
                href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id)}
                className={
                  "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-blueLight border-none text-white"
                }
              >
                تجديد العقد
              </Link>
            )}
            {status === "rejected" && (
              <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <span className=" size-3 rounded-[50%]  bg-red  z-[1] md:block hidden"></span>
                <p className="font-Bold text-[12px] md:text-[16px] text-red">
                  مرفوض
                </p>
              </div>
            )}
            {status === "manger" && (
              <div className="bg-grayLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <span className=" size-3 rounded-[50%]  bg-grayDark  z-[1] md:block hidden"></span>
                <p className="font-Bold text-[12px] md:text-[16px] text-grayDark">
                  قيد المراجعة من رئيس القسم
                </p>
              </div>
            )}
            {status === "admin" && (
              <div className="bg-grayLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <span className=" size-3 rounded-[50%]  bg-grayDark  z-[1] md:block hidden"></span>
                <p className="font-Bold text-[12px] md:text-[16px] text-grayDark">
                  قيد المراجعة من الإدارة
                </p>
              </div>
            )}
            {status === "reviewed" && (
              <div className="flex items-center gap-4">
                <Link
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERNEW(id)}
                  className={
                    "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
                  }
                >
                  <ContractsWhiteIcon />
                  ارسال
                </Link>
                <Button
                  onClick={() => {}}
                  className={
                    "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
                  }
                >
                  <RefuseIcon />
                  رفض
                </Button>
              </div>
            )}
            {status === "new" && (
              <div className="flex items-center gap-4">
                <Link
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERNEW(id)}
                  className={
                    "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
                  }
                >
                  <ContractsWhiteIcon />
                  ارسال عقد
                </Link>
                <Button
                  onClick={() => {}}
                  className={
                    "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
                  }
                >
                  <RefuseIcon />
                  رفض
                </Button>
              </div>
            )}
          </div>

          <MenuActions />
        </div>
      );
    },
  },
];
