import Button from "@/components/button";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import ActionMenu from "./ActionMenu";
import LinkGreen from "@/components/linkGreen";

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
                <p className="font-Bold text-[12px] md:text-[16px] text-greenMain">
                  نشط
                </p>
              </div>
            )}
            {status === "ultimate" && (
              <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] md:text-[16px] text-red">
                  منتهى
                </p>
              </div>
            )}
            {status === "rejected" && (
              <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] md:text-[16px] text-red">
                  مرفوض
                </p>
              </div>
            )}
            {status === "manger" && (
              <div className="bg-blueLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] md:text-[16px] text-greenMain">
                  قيد المراجعة من رئيس القسم
                </p>
              </div>
            )}
            {status === "admin" && (
              <div className="bg-grayLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] md:text-[16px] text-grayDark">
                  قيد المراجعة من الادارى
                </p>
              </div>
            )}
            {status === "reviewed" && (
              <div className="bg-[#F5E4F9] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                <p className="font-Bold text-[12px] md:text-[16px] text-[#8A22A0]">
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
      return (
        <div className="mx-1 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 w-full">
            {status === "active" && (
              <div className="flex flex-1 w-full px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <Button
                  onClick={() => {
                    editModal("type", "contractsReq");
                    editModal("open", true);
                  }}
                  className={
                    "text-[12px] lg:text-[16px]   !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                  }
                >
                  الغاء العقد
                </Button>
              </div>
            )}
            {status === "ultimate" && (
              <Link
                href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id)}
                className={
                  "btnReqTable text-nowrap flex-1 w-full !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-blueLight border-none text-white"
                }
              >
                تجديد العقد
              </Link>
            )}
            {status === "rejected" && (
              <Button
                onClick={() => {
                  editModal("type", "contractsReq");
                  editModal("open", true);
                }}
                className={
                  "text-[12px]  lg:text-[16px]   !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                }
              >
                حذف
              </Button>
            )}
            {status === "manger" && (
              <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <LinkGreen
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILS(5, id)}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  عرض
                </LinkGreen>
              </div>
            )}
            {status === "admin" && (
              <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <LinkGreen
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILS(5, id)}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  عرض
                </LinkGreen>
              </div>
            )}
            {status === "reviewed" && (
              <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <LinkGreen
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILS(5, id)}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  عرض
                </LinkGreen>
              </div>
            )}
          </div>

          <ActionMenu id={id} />
        </div>
      );
    },
  },
];
