"use client";
import { useState } from "react";
import { Conversation } from "./conversation";
import { Groups } from "./groups";
import { Messages } from "./messages";
import { cn } from "@/lib/utils";
import Card from "@/components/card";
import { CardHeading } from "./card-heading";
import Image from "next/image";
import docImg from "@/assets/images/placeholder-person.png";
import RefuseIcon from "@/assets/icons/refuse";
import CircleCheck from "@/assets/icons/circle-check";
const chats = [
  {
    id: 1,
    name: "احمد محمد كمال",
    profession: "اخصائى نفسي",
    avatar: "",
  },
  {
    id: 2,
    name: "احمد محمد كمال",
    profession: "اخصائى نفسي",
    avatar: "",
  },
  {
    id: 3,
    name: "احمد محمد كمال",
    profession: "اخصائى نفسي",
    avatar: "",
  },
  {
    id: 4,
    name: "احمد محمد كمال",
    profession: "اخصائى نفسي",
    avatar: "",
  },
];

const groups = [
  {
    id: 5,
    name: "فريق الطفل احمد",
    members: [chats[0], chats[1]],
  },
  {
    id: 6,
    name: "فريق الطفل احمد",
    members: [chats[2], chats[3]],
  },
];
export const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-5 flex-1">
      <Card
        className={cn("lg:order-1 lg:col-span-2", isOpen && "hidden lg:block")}
      >
        <div className="text-black text-sm lg:text-medium flex items-center justify-between pb-3 lg:border-b lg:border-grayMedium">
          <div>
            <h2>طلبات مراسلة</h2>
            <h3 className="bg-blueLight px-2 mt-2 text-base font-Light rounded-xl py-2">
              رسوم المحادثة :<span className="font-Bold"> 10$</span>
            </h3>
          </div>
        </div>
        <div className="py-8 px-3 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={docImg}
              alt="doc"
              width={60}
              height={60}
              className="size-[60px] rounded-full object-cover object-top"
            />
            <div>
              <h2 className="text-base font-Bold">عبدالله الشيخ</h2>
              <p className="text-base font-Bold">احمد عبدالله</p>
            </div>
            <div className="flex items-center gap-3 flex-1 justify-end">
              <button className="size-[25px] rounded-full">
                <CircleCheck />
              </button>
              <button className="size-[25px] rounded-full">
                <RefuseIcon className={"w-full h-auto"} />
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Messages
        data={chats}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div
        className={cn(
          "lg:hidden w-full my-8 h-[1px] bg-grayMedium",
          isOpen && "hidden"
        )}
      />

      <Groups
        data={groups}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Conversation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedConversation={selectedChat}
      />
    </div>
  );
};
