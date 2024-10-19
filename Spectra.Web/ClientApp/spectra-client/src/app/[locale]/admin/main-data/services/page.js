"use client";
import React from "react";
import SessionIcon from "@/assets/icons/session";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { DataTable } from "@/components/data-table";
import { columns } from "./components/columns";
import CardService from "./components/CardService";
import ActionMenu from "./components/ActionMenuPage";
import { GetMasterDataServices } from "@/useAPI/admin/main-data/services";
import HandelShowData from "@/components/handelShowData";
const data = [
  {
    id: 0,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: true,
    title: "خدمة الكشف المبكر الالكتروني",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 1,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: true,
    title: "خدمات التشخيص الطبي  عبر فرق متعددة التخصصات",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 2,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: false,
    title: "خدمة الكشف المبكر الالكتروني",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 3,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: true,
    title: "خدمة الكشف المبكر الالكتروني",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 4,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: false,
    title: "خدمات التشخيص الطبي  عبر فرق متعددة التخصصات",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 5,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: false,
    title: "خدمة الكشف المبكر الالكتروني",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
  {
    id: 6,
    icon: <SessionIcon className={"w-full h-auto"} />,
    date: "8/6/2024",
    price: "100$",
    show: true,
    title: "خدمة الكشف المبكر الالكتروني",
    dec: "نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية",
  },
];
function page() {
  const { data, isLoading } = GetMasterDataServices();

  return (
    <Card>
      <div className="flex items-center mb-8 lg:mb-10 gap-4 justify-between">
        <div className="flex flex-col  flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6 ">
          <h2 className="headTitleDash">الخدمات</h2>
          <Link
            href={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
            className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
          >
            <PlusInsideCircleIcon />
            <p className=" text-[14px] md:text-[16px] font-bold">أضافة خدمة </p>
          </Link>
        </div>
        <ActionMenu />
      </div>
      <HandelShowData isLoading={isLoading} lengthData={data?.data.data.length}>
        <div className="hidden lg:block">
          <DataTable data={data?.data.data} columns={columns} />
        </div>
      </HandelShowData>

      {/* <div className=" flex lg:hidden flex-col gap-7">
        {data?.map((item, index) => (
          <CardService data={item} key={index} />
        ))}
      </div> */}
    </Card>
  );
}

export default page;
