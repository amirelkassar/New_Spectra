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
    accessorKey: "",
    header: "حالة العقد",
    id: "lastLogin",
    cell: ({ row }) => {
      const id = row.original.id;
      const haveContracts = row.original.haveContracts;
      return (
        <div className="mx-1 flex items-center gap-4">
          {haveContracts ? (
            <Link
              href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id)}
              className={
                "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-blueLight justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-blueLight border-none text-greenMain"
              }
            >
              <ContractsIcon fill={'#10B0C1'} />
              ارسال عقد
            </Link>
          ) : (
            <Link
              href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERNEW(id)}
              className={
                "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
              }
            >
              <ContractsWhiteIcon  />
              ارسال عقد
            </Link>
          )}
          <Button
            onClick={() => {}}
            className={
              "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
            }
          >
            <RefuseIcon />
            رفض
          </Button>
          <MenuActions />
        </div>
      );
    },
  },
];
