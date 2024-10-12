"use client";
import React from "react";
import imgDoc from "@/assets/images/placeholder-person.png";
import Image from "next/image";
import ChatsIcon from "@/assets/icons/chats";
import { Link, usePathname } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import { useSearchParams } from "next/navigation";
import ActionMenu from "../../components/ActionMenuPage";
import ChatContracts from "./chatContracts";

function LayContractsID({ children }) {
  const pathname = usePathname();
  const searchparams = useSearchParams();

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
      <div className="flex justify-between items-center gap-7 border-2 border-grayLight  flex-1 bg-white py-5 mdl:py-8 px-5 mdl:px-0 mdl:ps-16 mdl:pe-6 mb-4 rounded-2xl ">
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
