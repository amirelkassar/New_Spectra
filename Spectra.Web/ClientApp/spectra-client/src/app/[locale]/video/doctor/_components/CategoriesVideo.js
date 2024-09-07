"use client";
import React from "react";
import ComplaintsIcon from "@/assets/icons/complaints";
import Autism from "@/assets/icons/autism";
import NominationsIcon from "@/assets/icons/Nominations";
import RumorsIcon from "@/assets/icons/rumors";
import MedicineIcon from "@/assets/icons/medicine";
import NotesIcon from "@/assets/icons/notes";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/navigation";
import ChatsIcon from "@/assets/icons/chats";

function CategoriesVideo() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const CategoriesData = [
    {
      icon: <ComplaintsIcon className={"w-auto h-8"} />,
      label: "الشكاوى العامة",
      name: "complaints",
      active: searchParams.get("category") === "complaints",
    },
    {
      icon: <Autism className={"w-auto h-8"} />,
      label: "التشخيصات",
      name: "diagnoses",
      active: searchParams.get("category") === "diagnoses",
    },
    {
      icon: <NominationsIcon className={"w-auto h-8"} />,
      label: "الترشيحات",
      name: "nominations",
      active: searchParams.get("category") === "nominations",
    },
    {
      icon: <RumorsIcon className={"w-auto h-8"} />,
      label: "التحاليل والفحوصات",
      name: "rumors",
      active: searchParams.get("category") === "rumors",
    },
    {
      icon: <MedicineIcon className={"w-auto h-8"} />,
      label: "عقاقير",
      name: "medicine",
      active: searchParams.get("category") === "medicine",
    },
    {
      icon: <NotesIcon className={"w-auto h-8"} />,
      label: "ملاحظات",
      name: "notes",
      active: searchParams.get("category") === "notes",
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
      <div className="flex lgl:flex-wrap gap-3 overflow-x-auto snap-none hideScroll	 max-w-[calc(100%-0px)] px-5 lgl:px-0 lgl:justify-center">
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
              } min-w-[96px] lgl:min-w-[154px] px-2 max-g-h-[95px] lgl:max-h-[154px] cursor-pointer flex-1 py-2 lgl:py-8 w-[96px] lgl:w-[154px] aspect-square flex flex-col justify-center items-center rounded-xl`}
            >
              <div className=" size-9 lgl:size-[58px] rounded-lg p-2 lgl:p-[14px] mb-1 lgl:mb-2 mx-auto bg-greenLight flex items-center justify-center ">
                {category.icon}
              </div>

              <h2 className="font-Bold lgl:text-nowrap leading-5 text-[12px] lgl:text-base text-center">
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
