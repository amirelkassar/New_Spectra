"use client";
import React, { useState } from "react";
import imgDoc from "@/assets/images/placeholder-person.png";
import Image from "next/image";
import ChatsIcon from "@/assets/icons/chats";
import { Link, usePathname } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import { useSearchParams } from "next/navigation";
import ActionMenu from "../../components/ActionMenuPage";
import ChatContracts from "./chatContracts";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import ArrowAccordionIcon from "@/assets/icons/arrowAccordion";
import BriefIcon from "@/assets/icons/brief";
import DaqeqaIcon from "@/assets/icons/daqeqa";
const daqeqa = [
  "القلق",
  "الضغوط",
  "مشكلات في العلاقات",
  "مشكلات بالتواصل",
  "اضطرابات الشخصية",
  "التعامل مع الغضب",
  "ثنائي القطب",
  "القلق الاجتماعي ، الفوبيا",
  "فرط الحركة",
];
function LayContractsID({ children }) {
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex  px-6 mb-6   items-center gap-4 ">
          <Link
            href={ROUTES.ADMIN.CONTRACTS.DASHBOARD}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="text-xl">العقود</h2>
        </div>
        <ActionMenu />
      </div>
      <div className="bg-white  py-5 mdl:py-8 px-5 mdl:px-0 border-2 border-grayLight mb-4 rounded-2xl">
        <div className="flex justify-between items-center gap-7   flex-1  mdl:ps-16 mdl:pe-6   ">
          <div className="flex items-center gap-3 md:gap-4   xl:max-w-[60%] w-full flex-wrap">
            <div className="flex items-center gap-3 md:gap-7">
              <Image
                src={imgDoc}
                width={52}
                height={52}
                className=" size-[50px] rounded-[50%] object-cover object-top"
                alt="man"
              />
            </div>
            <div className="flex flex-col mdl:flex-row items-center  md:gap-10 justify-between   flex-wrap">
              <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
                احمد محمد كمال
              </h2>
              <p className="text-[12px] md:text-[16px] font-Regular ">طبيب</p>
              <p className="text-[12px] md:text-[16px] font-Regular ">
                20/4/2024
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-col md:flex-row md:gap-5">
            <Link
              href={
                searchparams.get("chat") === "true"
                  ? pathname + "?chat=false"
                  : pathname + "?chat=true"
              }
              className="flex items-center duration-300 hover:shadow-md justify-center p-2 md:p-3 rounded-[50%] bg-blueLight size-10 md:size-[50px]"
            >
              <ChatsIcon fill="#10B0C1" className={"w-full h-auto"} />
            </Link>
            <button
              onClick={() => {
                setOpenDetails(!openDetails);
              }}
              className="flex items-center justify-between gap-3 bg-blueLight rounded-lg w-fit px-2 md:px-4 h-12 md:h-[60px] duration-300 hover:shadow-md"
            >
              <p className="font-Bold text-sm mdl:text-xl text-nowrap">
                بيانات الطبيب
              </p>
              <div className=" w-5 md:w-6 h-5 md:h-6 flex items-center justify-center bg-black/5 rounded-md">
                <ArrowAccordionIcon
                  className={`${
                    openDetails ? "rotate-0 " : "rotate-180 "
                  } w-auto h-[6px] md:h-2 duration-200`}
                />
              </div>
            </button>
          </div>
        </div>
        <div
          className={`w-full ${
            openDetails ? "h-auto" : "h-0 "
          } duration-300 px-3 md:px-8  `}
        >
          <div className=" pt-10 md:pt-20">
            <h3 className="text-sm font-Bold mdl:text-xl mb-5">
              الوصف الوظيفى
            </h3>
            <div className="w-full  flex flex-col gap-10">
              <div className="flex items-start gap-4 lg:gap-5">
                <BriefIcon
                  className={
                    "min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"
                  }
                />
                <div>
                  <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                    نبدة
                  </h3>
                  <p className=" text-[14px] lg:text-[20px] font-normal ">
                    دكتوراه في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات
                    والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان
                    والمشكلات
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-14 lg:gap-5">
              <DaqeqaIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  {" "}
                  التخصصات الدقيقة
                </h3>
                <div className="max-w-[850px] mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {daqeqa.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#E9F7FF] text-[#010036] px-2 md:px-3 py-1 rounded-md text-[14px] md:text-[20px] "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 mb-8 mx-auto flex items-center justify-center">
              <button
                onClick={() => {
                  setOpenDetails(false);
                }}
                className=" w-6 md:w-9 duration-200 hover:shadow-md h-6 md:h-9 flex items-center justify-center bg-black/5 rounded-md"
              >
                <ArrowAccordionIcon
                  className={`${
                    openDetails ? "rotate-0 " : "rotate-180 "
                  } w-auto h-[6px] md:h-2 duration-200`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* lay back chat */}
        <Link
          href={
            searchparams.get("chat") === "true"
              ? pathname + "?chat=false"
              : pathname + "?chat=true"
          }
          className={`bg-[#3D3D3D40] ${
            searchparams.get("chat") === "true" ? "block" : "hidden"
          } fixed lg:hidden z-[3] h-screen w-screen inset-0`}
        ></Link>
        {/* chat */}
        <ChatContracts />
        {/* children */}
        {children}
      </div>
    </div>
  );
}

export default LayContractsID;
