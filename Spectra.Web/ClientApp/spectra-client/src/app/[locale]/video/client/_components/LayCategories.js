"use client";
import ChatsIcon from "@/assets/icons/chats";
import React from "react";
import ChatVideo from "./chatVideo";
import Nominations from "./nominations";
import Rumors from "./rumors";
import Drugs from "./drugs";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/navigation";
function LayCategories() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const CategoriesData = [
   
    {
      label: "الترشيحات",
      active: searchParams.get("category") === "nominations",
    },
    {
      label: "التحاليل و الاشعات الخارجية",
      active: searchParams.get("category") === "rumors",
    },
    {
      label: "الوصفات الطبية",
      active: searchParams.get("category") === "medicine",
    },

  ];

  const ViewComp = () => {
    switch (searchParams.get("category")) {
      case "nominations":
        return <Nominations />;
      case "rumors":
        return <Rumors />;
      case "medicine":
        return <Drugs />;
      default:
        return <ChatVideo />;
    }
  };
  return (
    <div className="h-full lgl:pb-12">
      <div className=" lgl:flex hidden items-center  justify-between gap-4 pb-5 border-b-2 border-grayLight">
        <h2 className="text-base font-Bold ">
          {CategoriesData.find((item) => item.active === true)?.label ||
            "المحادثات"}
        </h2>
        {searchParams.get("category") ? (
          <Link
            href={pathName}
            className="bg-blueLight gap-3 duration-200 hover:shadow-md  rounded-full flex items-center justify-center p-3 "
          >
            <p className="text-base font-Regular">المحادثات</p>
            <ChatsIcon fill="#10B0C1" className={"w-full h-auto"} />
          </Link>
        ) : (
          <div className="bg-greenMain size-[45px] rounded-full flex items-center justify-center p-[10px] ">
            <ChatsIcon fill="#F1FCFF" className={"w-full h-auto"} />
          </div>
        )}
      </div>
      <ViewComp />
    </div>
  );
}

export default LayCategories;
