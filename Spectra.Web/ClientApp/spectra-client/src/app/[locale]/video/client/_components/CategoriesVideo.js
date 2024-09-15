"use client";
import React from "react";
import NominationsIcon from "@/assets/icons/Nominations";
import RumorsIcon from "@/assets/icons/rumors";
import MedicineIcon from "@/assets/icons/medicine";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/navigation";
import ChatsIcon from "@/assets/icons/chats";

function CategoriesVideo() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const CategoriesData = [
    {
      icon: <NominationsIcon className={"w-auto h-8"} />,
      label: "الترشيحات",
      name: "nominations",
      active: searchParams.get("category") === "nominations",
    },
    {
      icon: <RumorsIcon className={"w-auto h-8"} />,
      label: "التحاليل و الاشعات الخارجية",
      name: "rumors",
      active: searchParams.get("category") === "rumors",
    },
    {
      icon: <MedicineIcon className={"w-auto h-8"} />,
      label: "الوصفات الطبية",
      name: "medicine",
      active: searchParams.get("category") === "medicine",
    },
  ];
  return (
    <>
      {searchParams.get("category") && (
        <Link
          href={pathName}
          className="bg-blueLight h-11 gap-3 w-fit mx-auto mb-5 duration-200 hover:shadow-md  rounded-full lgl:hidden flex items-center justify-center p-3 "
        >
          <p className="text-base font-Regular">المحادثات</p>
          <ChatsIcon fill="#10B0C1" className={"h-full w-auto"} />
        </Link>
      )}
      <div className="flex flex-wrap gap-3 overflow-x-auto snap-none hideScroll	 max-w-[calc(100%-0px)] px-5 lgl:px-0 lgl:justify-center">
        {CategoriesData.map((category, index) => {
          return (
            <Link
              scroll={false}
              href={pathName + "?category=" + category.name}
              key={index}
              className={`bg-white duration-300 hover:shadow-md border-2  ${
                category.active
                  ? "border-greenMain"
                  : "border-grayLight lgl:border-white"
              } min-w-[96px] lgl:min-w-[154px] px-2 max-h-[94px] cursor-pointer flex-1 py-2 lgl:py-5 w-[96px] lgl:w-[154px] aspect-square flex flex-col lgl:flex-row  gap-1 lgl:gap-5 items-center rounded-xl`}
            >
              <div className=" size-9 lgl:size-[58px] rounded-lg p-2 lgl:p-[14px]  bg-greenLight flex items-center justify-center ">
                {category.icon}
              </div>

              <h2 className="font-bold  leading-5 text-[12px] lgl:text-base text-center">
                {category.label}
              </h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CategoriesVideo;
