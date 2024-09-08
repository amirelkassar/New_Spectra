import React from "react";
import ROUTES from "@/routes";
import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import Button from "@/components/button";
import { Link } from "@/navigation";
function CardContacts({ dataCard }) {
  return (
    <div className="flex justify-between gap-1 border-grayLight border-2 rounded-xl py-5 px-4">
      <div className="flex gap-3 flex-1">
        <div className=" size-12 rounded-full flex items-start justify-center overflow-hidden">
          <Image src={dataCard.image} alt={dataCard.name} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-sm font-bold ">{dataCard.name}</h3>
          <h4 className="text-sm font-Regular">{dataCard.job}</h4>
          <p className="text-sm font-Regular">{dataCard.date}</p>
          <div className=" flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {dataCard.status === "active" && (
                <div className="bg-blueLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-greenMain">نشط</p>
                </div>
              )}
              {dataCard.status === "ultimate" && (
                <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-red">غير نشط</p>
                </div>
              )}
              {dataCard.status === "rejected" && (
                <div className="bg-red/20 py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-red">مرفوض</p>
                </div>
              )}
              {dataCard.status === "manger" && (
                <div className="bg-blueLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-greenMain">
                    قيد المراجعة من رئيس القسم
                  </p>
                </div>
              )}
              {dataCard.status === "admin" && (
                <div className="bg-grayLight py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-grayDark">
                    قيد المراجعة من الادارى
                  </p>
                </div>
              )}
              {dataCard.status === "reviewed" && (
                <div className="bg-[#F5E4F9] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
                  <p className="font-Bold text-[12px]  text-[#8A22A0]">
                    قيد المراجعة من الطبيب
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3">
            {dataCard.status === "active" && (
              <div className="flex px-1 flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <Button
                  onClick={() => {
                    editModal("type", "contractsReq");
                    editModal("open", true);
                  }}
                  className={
                    "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                  }
                >
                  الغاء العقد
                </Button>
              </div>
            )}
            {dataCard.status === "ultimate" && (
              <Link
                href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(dataCard.id)}
                className={
                  "btnReqTable text-nowrap !py-0 text-[12px] rounded-xl duration-300 hover:shadow-md lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-blueLight border-none text-white"
                }
              >
                تجديد العقد
              </Link>
            )}
            {dataCard.status === "rejected" && (
              <Button
                onClick={() => {
                  editModal("type", "contractsReq");
                  editModal("open", true);
                }}
                className={
                  "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                }
              >
                حذف
              </Button>
            )}
            {dataCard.status === "manger" && (
              <div className="flex px-1 flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <Button
                  onClick={() => {
                    console.log("fdgsdfdf");
                  }}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  قبول
                </Button>
                <Button
                  onClick={() => {
                    editModal("type", "contractsReq");
                    editModal("open", true);
                  }}
                  className={
                    "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                  }
                >
                  رفض
                </Button>
              </div>
            )}
            {dataCard.status === "admin" && (
              <div className="flex px-1 flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <Button
                  onClick={() => {
                    console.log("fdgsdfdf");
                  }}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  قبول
                </Button>
                <Button
                  onClick={() => {
                    editModal("type", "contractsReq");
                    editModal("open", true);
                  }}
                  className={
                    "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                  }
                >
                  رفض
                </Button>
              </div>
            )}
            {dataCard.status === "reviewed" && (
              <div className="flex px-1 flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap ">
                <Button
                  onClick={() => {
                    console.log("fdgsdfdf");
                  }}
                  className={
                    "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                  }
                >
                  قبول
                </Button>
                <Button
                  onClick={() => {
                    editModal("type", "contractsReq");
                    editModal("open", true);
                  }}
                  className={
                    "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
                  }
                >
                  رفض
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <MenuActions
        type={2}
        path={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(dataCard.id)}
      />
    </div>
  );
}

export default CardContacts;
