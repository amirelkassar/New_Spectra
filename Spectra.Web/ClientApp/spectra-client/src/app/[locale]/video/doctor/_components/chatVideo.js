import React from "react";
import Image from "next/image";
import { Textarea } from "@mantine/core";
import AttachIcon from "@/assets/icons/attach";
import SendIcon from "@/assets/icons/send";
import imgDoc from "@/assets/images/placeholder-person.png";
const dataChat = [
  {
    id: 1,
    name: "admin",
    title: " اخذ الجرعة لمدة شهر مع اخذ الجرعة لمدة شهر مع  المتابعة للحالة",
  },
  {
    id: 2,
    name: "user",
    title: " شكرا يا دكتور الله يعافيك",
  },

];
function ChatVideo() {
  return (
    <div className="w-full h-full flex flex-col justify-between duration-500 px-1 lgl:pb-10 relative pt-8">
      <div className="flex flex-1 flex-col gap-4 lgl:gap-10 ">
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
                className=" size-12 min-w-12 bg-grayMedium rounded-full object-cover object-top"
              />
              <div
                className={` gap-4 rounded-xl  w-fit lg:w-auto lgl:pe-9   ${
                  item.name === "admin"
                    ? "bg-greenMain text-white"
                    : "bg-grayLight text-black"
                } px-4 lgl:px-5 py-2 lgl:py-3 flex-row-reverse`}
              >
                <h3 className="text-[12px] lg:text-base  font-Bold lgl:mt-2">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex  items-center gap-5 py-4">
        <button>
          <SendIcon />
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
        </div>
        <button>
          <AttachIcon className="w-4 h-auto min-w-4" />
        </button>
      </div>
    </div>
  );
}

export default ChatVideo;
