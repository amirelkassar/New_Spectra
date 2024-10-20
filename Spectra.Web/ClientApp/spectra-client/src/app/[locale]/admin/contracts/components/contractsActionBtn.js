import LinkGreen from "@/components/linkGreen";
import React from "react";
import ActionMenu from "./ActionMenu";
import Button from "@/components/button";
import { Link } from "@/navigation";
import useModal from "@/store/modal-slice";
import ROUTES from "@/routes";

function ContractsActionBtn({ status, id }) {
  const { modal, editModal } = useModal();

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
}

export default ContractsActionBtn;
