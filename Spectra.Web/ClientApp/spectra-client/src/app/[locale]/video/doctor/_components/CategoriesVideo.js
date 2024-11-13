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
import AddReportIcon from "@/assets/icons/addReport";
import PatientHistoryIcon from "@/assets/icons/PatientHistoryIcon";
import InternalExamsIcon from "@/assets/icons/InternalExamsIcon";
import DocumentIcon from "@/assets/icons/document";
import TransfersVideoIcon from "@/assets/icons/TransfersIcon";
import ReportsGreenIcon from "@/assets/icons/reportsGreen";
import { useMediaQuery } from "@mantine/hooks";
import Other from "./othor";
import MultiReports from "./multiReports";

function CategoriesVideo({ open }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const isShowMore = useMediaQuery("(max-width: 1700px)");
  const isShowAll = useMediaQuery("(max-width: 1024px)");
  const CategoriesData = [
    {
      icon: <ReportsGreenIcon className={"w-auto h-8 text-greenMain"} />, // Replace with actual icon component
      label: "عرض التقارير",
      name: "view_reports",
      active: searchParams.get("category") === "view_reports",
    },
    {
      icon: <PatientHistoryIcon className={"w-auto h-8 text-greenMain"} />, // Replace with actual icon component
      label: "التاريخ المرضي",
      name: "patient_history",
      active: searchParams.get("category") === "patient_history",
    },

    {
      icon: <InternalExamsIcon className={"w-auto h-8 text-greenMain"} />, // Replace with actual icon component
      label: "الفحوصات الداخلية",
      name: "internal_exams",
      active: searchParams.get("category") === "internal_exams",
    },
    {
      icon: <TransfersVideoIcon className={"w-auto h-8 text-greenMain"} />, // Replace with actual icon component
      label: "الإحالات",
      name: "referrals",
      active: searchParams.get("category") === "referrals",
    },
    {
      icon: <DocumentIcon className={"w-auto h-8 text-greenMain"} />, // Replace with actual icon component
      label: "ملفات",
      name: "files",
      active: searchParams.get("category") === "files",
    },
    {
      icon: <ComplaintsIcon className={"w-auto h-8 text-greenMain"} />,
      label: "الشكاوى العامة",
      name: "complaints",
      active: searchParams.get("category") === "complaints",
    },
    {
      icon: <Autism className={"w-auto h-8 text-greenMain"} />,
      label: "التشخيصات",
      name: "diagnoses",
      active: searchParams.get("category") === "diagnoses",
    },
    {
      icon: <NominationsIcon className={"w-auto h-8 text-greenMain "} />,
      label: "الترشيحات",
      name: "nominations",
      active: searchParams.get("category") === "nominations",
    },
    {
      icon: <RumorsIcon className={"w-auto h-8 text-greenMain"} />,
      label: "التحاليل والفحوصات",
      name: "rumors",
      active: searchParams.get("category") === "rumors",
    },
    {
      icon: <MedicineIcon className={"w-auto h-8 text-greenMain"} />,
      label: "عقاقير",
      name: "medicine",
      active: searchParams.get("category") === "medicine",
    },
    {
      icon: <NotesIcon className={"w-auto h-8 text-greenMain"} />,
      label: "ملاحظات",
      name: "notes",
      active: searchParams.get("category") === "notes",
    },
  ];
  const data = [
    {
      label: "تقرير تشخيصى",
      name: "report1",
      active: searchParams.get("reportNum") === "report1",
    },
    {
      label: "Fillow up",
      name: "report2",
      active: searchParams.get("reportNum") === "report2",
    },
    {
      label: "التاريخ المرضى",
      name: "report3",
      active: searchParams.get("reportNum") === "report3",
    },
    {
      label: "Speech",
      name: "report4",
      active: searchParams.get("reportNum") === "report4",
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
      <div className="flex lgl:flex-wrap gap-3 overflow-x-auto snap-none hideScroll	 max-w-[calc(100%-0px)] px-5 lgl:px-0 ">
        {data.length > 1 ? (
          <MultiReports data={data} />
        ) : (
          <Link
            href={pathName + "?category=addReport"}
            className={`bg-greenMain duration-300 hover:shadow-md border-2  border-greenMain min-w-[96px] lgl:min-w-[154px] max-w-[154px] px-2 max-g-h-[95px] lgl:max-h-[154px] cursor-pointer flex-1 py-3 lgl:py-8 w-[96px] lgl:w-[154px] aspect-square flex flex-col justify-center items-center rounded-xl`}
          >
            <div className=" size-9 lgl:size-[58px]  mb-1 lgl:mb-2 mx-auto flex items-center justify-center ">
              <AddReportIcon className={"w-auto h-7 mdl:h-8 "} />
            </div>

            <h2 className="font-Bold text-white lgl:text-nowrap leading-5 text-xs lgl:text-base text-center">
              اضافة تقرير
            </h2>
          </Link>
        )}

        {CategoriesData.slice(
          0,
          open && isShowMore && !isShowAll ? 4 : CategoriesData.length
        ).map((category, index) => {
          return (
            <Link
              scroll={false}
              href={pathName + "?category=" + category.name}
              key={index}
              className={`bg-white duration-300 hover:shadow-md border-2  ${
                category.active
                  ? "border-greenMain"
                  : "border-grayLight lgl:border-white"
              } min-w-[96px] lgl:min-w-[154px] max-w-[154px] px-2 max-g-h-[95px] lgl:max-h-[154px] cursor-pointer flex-1 pb-0 py-2 lgl:py-8 w-[96px] lgl:w-[154px]  aspect-square flex flex-col justify-center items-center rounded-xl`}
            >
              <div className=" size-9 lgl:size-[58px] rounded-lg p-2 lgl:p-[14px] mb-1 lgl:mb-2 mx-auto bg-greenLight flex items-center justify-center ">
                {category.icon}
              </div>

              <h2 className="font-Bold min-h-8 place-content-center lgl:text-nowrap mdl:leading-5 text-xs lgl:text-base text-center">
                {category.label}
              </h2>
            </Link>
          );
        })}
        {open && isShowMore && !isShowAll && (
          <Other data={CategoriesData.slice(4, CategoriesData.length)} />
        )}
      </div>
    </>
  );
}

export default CategoriesVideo;
