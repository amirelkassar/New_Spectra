"use client";
import ChatsIcon from "@/assets/icons/chats";
import React from "react";
import ChatVideo from "./chatVideo";
import ComplaintsVideo from "./complaints";
import DiagnosesVideo from "./diagnoses";
import Nominations from "./nominations";
import Notes from "./notes";
import Rumors from "./rumors";
import Drugs from "./drugs";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/navigation";
import { Files } from "./files";
import { Reports } from "./reports";
import Referrals from "./referrals";
import InternalExams from "./internalExams";
import AddReport from "./addReport";
import PatientHistory from "./patient_history";
function LayCategories() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const CategoriesData = [
    {
      label: "اضافة تقرير",
      active: searchParams.get("category") === "addReport",
    },
    {
      label: "عرض جميع التقارير",
      active: searchParams.get("category") === "view_reports",
    },
    {
      label: " التاريخ المرضى ",
      active: searchParams.get("category") === "patient_history",
    },
    {
      label: "الفحوصات الداخلية",
      active: searchParams.get("category") === "internal_exams",
    },
    {
      label: "الإحالات",
      active: searchParams.get("category") === "referrals",
    },
    {
      label: "الملفات",
      active: searchParams.get("category") === "files",
    },
    {
      label: "الشكاوى العامة",
      active: searchParams.get("category") === "complaints",
    },
    {
      label: "التشخيصات",
      active: searchParams.get("category") === "diagnoses",
    },
    {
      label: "الترشيحات",
      active: searchParams.get("category") === "nominations",
    },
    {
      label: "التحاليل والفحوصات",
      active: searchParams.get("category") === "rumors",
    },
    {
      label: "عقاقير",
      active: searchParams.get("category") === "medicine",
    },
    {
      label: "ملاحظات",
      active: searchParams.get("category") === "notes",
    },
  ];

  const ViewComp = () => {
    switch (searchParams.get("category")) {
      case "addReport":
        return <AddReport />;
      case "view_reports":
        return <Reports />;
      case "patient_history":
        return <PatientHistory />;
      case "internal_exams":
        return <InternalExams />;
      case "referrals":
        return <Referrals />;
      case "files":
        return <Files />;
      case "complaints":
        return <ComplaintsVideo />;
      case "diagnoses":
        return <DiagnosesVideo />;
      case "nominations":
        return <Nominations />;
      case "rumors":
        return <Rumors />;
      case "medicine":
        return <Drugs />;
      case "notes":
        return <Notes />;
      default:
        return <ChatVideo />;
    }
  };
  return (
    <div className="h-full lgl:pb-7 max-h-full ">
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
      <div className="max-h-[calc(100%-100px)] h-full overflow-y-auto">
        <ViewComp />
      </div>
    </div>
  );
}

export default LayCategories;
