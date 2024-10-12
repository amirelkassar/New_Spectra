"use client";
import AttachIcon from "@/assets/icons/attach";
import CloseIcon from "@/assets/icons/close";
import ContractsIcon from "@/assets/icons/contracts";
import MicIcon from "@/assets/icons/mic";
import SendIcon from "@/assets/icons/send";
import Card from "@/components/card";
import { Link, usePathname } from "@/navigation";
import { Textarea } from "@mantine/core";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import imgDoc from "@/assets/images/placeholder-person.png";

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
function ChatContracts() {
  const pathname = usePathname();
  const searchparams = useSearchParams();

  return (
    <Card
      className={` ${
        searchparams.get("chat") === "true"
          ? "lg:max-w-[366px]    opacity-100 lg:w-fit min-w-fit lg:h-auto lg:me-5 !pt-16 lg:shadow-none shadow-lg  bottom-0 lg:bottom-auto left-0 px-6 lg:px-5  top-auto lg:left-auto w-full pb-8 lg:pb-0 z-10"
          : "lg:max-w-[366px]  w-full top-full lg:w-0 opacity-0 bg !p-0 px-0"
      } duration-300  overflow-hidden lg:relative fixed rounded-t-3xl lg:rounded-lg `}
    >
      <div className="lg:min-w-[366px] duration-500 px-1 relative " dir="ltr">
        <Link
          href={
            searchparams.get("chat") === "true"
              ? pathname + "?chat=false"
              : pathname + "?chat=true"
          }
          className=" absolute -top-12 flex rounded-full justify-center items-center lg:hidden  -end-2 duration-300 hover:shadow-md hover:shadow-red z-20 size-8"
        >
          <CloseIcon />
        </Link>
        <div className="flex flex-col gap-10 pb-10">
          {dataChat.map((item, index) => {
            return (
              <div
                className={`flex gap-4 ${
                  item.name === "admin" && "flex-row-reverse"
                }`}
                key={index}
              >
                <Image
                  src={imgDoc}
                  alt="doc"
                  height={48}
                  width={48}
                  className=" size-12 bg-grayMedium rounded-full object-cover object-top"
                />
                <div
                  className={`flex gap-4 rounded-xl lg:flex-1 min-w-fit lg:w-auto w-[200px]  ${
                    item.name === "admin"
                      ? "bg-greenMain text-white"
                      : "bg-grayLight text-black"
                  } px-4 py-2 flex-row-reverse`}
                >
                  <div className="flex flex-col justify-between gap-2 lg:gap-3">
                    <div className="bg-white py-2 lg:py-3 px-3 lg:px-4 w-10 lg:w-[50px] lg:h-12 h-10 rounded-xl flex items-center justify-center">
                      <ContractsIcon fill={"#10B0C1"} />
                    </div>
                    <p className="font-Regular text-[12px] " dir="rtl">
                      10:30 م
                    </p>
                  </div>
                  <h3 className="text-[12px] lg:text-xl font-Bold mt-2">
                    {" "}
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-5 lg:mb-4">
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
  );
}

export default ChatContracts;
