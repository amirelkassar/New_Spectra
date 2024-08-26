"use client";
import React, { useState } from "react";
import ContractInformation from "./_components/contract-Information";
import imgDoc from "@/assets/images/placeholder-person.png";
import Image from "next/image";
import ChatsIcon from "@/assets/icons/chats";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import Card from "@/components/card";
import AttachIcon from "@/assets/icons/attach";
import MicIcon from "@/assets/icons/mic";
import { Textarea } from "@mantine/core";
import SendIcon from "@/assets/icons/send";
import ContractsIcon from "@/assets/icons/contracts";
const dataChat = [
  {
    id: 1,
    name: "admin",
    title: "النسخة الاولى",
  },
  {
    id: 1,
    name: "user",
    title: "النسخة الثانية",
  },
  {
    id: 1,
    name: "user",
    title: "النسخة الثانية",
  },
  
];
function Page({ params }) {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div>
      <div className="flex mb-1 px-6 mb-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.CONTRACTS.DASHBOARD}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-xl">العقود</h2>
      </div>
      <div className="flex justify-between items-center gap-7 flex-1 bg-white py-8 ps-16 pe-6 mb-4 rounded-xl ">
        <div className="flex items-center gap-x-3 md:gap-x-12 justify-between gap-y-4 xl:max-w-[60%] w-full flex-wrap">
          <div className="flex items-center gap-3 md:gap-7">
            <Image
              src={imgDoc}
              width={52}
              height={52}
              className=" size-[30px] md:size-[52px] rounded-[50%] object-cover object-top"
              alt="man"
            />
            <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
              احمد محمد كمال
            </h2>
          </div>
          <p className="text-[12px] md:text-[16px] font-Regular ">طبيب</p>
          <p className="text-[12px] md:text-[16px] font-Regular ">20/4/2024</p>
        </div>
        <div
          onClick={() => {
            setOpenChat(!openChat);
          }}
          className="flex items-center justify-center p-2 md:p-3 rounded-[50%] bg-blueLight size-[32px] md:size-[50px]"
        >
          <ChatsIcon fill="#10B0C1" className={"w-full h-auto"} />
        </div>
      </div>
      <div className="flex ">
        <Card
          className={` ${
            openChat
              ? "max-w-[366px] opacity-100 w-fit min-w-fit  me-5"
              : "w-0 opacity-0 !p-0 px-0"
          } duration-300 overflow-hidden`}
        >
          <div className="min-w-[366px] duration-500 px-1" dir="ltr">
            <div className="flex flex-col gap-10 pb-10">
              {dataChat.map((item, index) => {
                return (
                  <div className={`flex gap-4 ${item.name==='admin'&&'flex-row-reverse'}`} key={index}>
                    <Image
                      src={imgDoc}
                      alt="doc"
                      height={48}
                      width={48}
                      className=" size-12 bg-grayMedium rounded-full object-cover object-top"
                    />
                    <div className={`flex gap-4 rounded-xl  ${item.name==='admin'?'bg-greenMain text-white':'bg-grayLight text-black'} px-4 py-2 flex-row-reverse`}>
                      <div className="flex flex-col justify-between gap-3">
                        <div className="bg-white py-3 px-4 rounded-xl flex items-center justify-center">
                          <ContractsIcon fill={"#10B0C1"} />
                        </div>
                        <p className="font-Regular text-[12px] " dir="rtl">
                          10:30 م
                        </p>
                      </div>
                      <h3 className="text-xl font-Bold mt-2"> {item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-5">
              <button>
                <AttachIcon className="w-4 h-auto min-w-4" />
              </button>
              <div className="relative flex-1 px-5 py-3 h-12 flex items-center gap-3 focus-within:border-black border-2 overflow-hidden rounded-xl border-[#E2E8F0] active:border-black">
                <Textarea
                  size="xs"
                  radius="md"
                  classNames={{
                    input: "  flex-1 w-full h-auto  border-none text-start",
                  }}
                  placeholder="Type a message"
                  className="flex-1"
                />
                <button className="">
                  <MicIcon className="h-5 w-3" />
                </button>
              </div>
              <button>
                <SendIcon />
              </button>
            </div>
          </div>
        </Card>
        <ContractInformation id={params.contractsID} />
      </div>
    </div>
  );
}

export default Page;
