'use client'
import React from "react";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
import CardStory from "./_components/CardStory";
import imgStory from "@/assets/images/child.png";
const storiesData = [
  {
    id:1,
    name: "حلا غي العازمي",
    diagnosis: "اضطراب طيف التوحد",
    date: "8/6/2024",
    image: imgStory,
  },
  {
    id:2,
    name: "حلا غي العازمي",
    diagnosis: "اضطراب طيف التوحد",
    date: "8/6/2024",
    image: imgStory,
  },
  {
    id:3,
    name: "حلا غي العازمي",
    diagnosis: "اضطراب طيف التوحد",
    date: "8/6/2024",
    image: imgStory,
  },
  {
    id:4,
    name: "حلا غي العازمي",
    diagnosis: "اضطراب طيف التوحد",
    date: "8/6/2024",
    image: imgStory,
  },
];
function page() {
  return (
    <Card>
      <div className="flex items-center mb-8 gap-2 lg:gap-3">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-base lg:text-xl font-bold ">الاعدادات - المحتوى</h2>
      </div>
      <div className="flex flex-col  flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6 mb-8 lg:mb-10">
        <h2 className="text-sm lg:text-xl">قصص النجاح</h2>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESADD}
          className="flex items-center justify-center w-36 lg:w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
        >
          <PlusInsideCircleIcon />
          <p className=" text-[12px] lg:text-[16px] font-bold">أضافة قصة </p>
        </Link>
      </div>
      <div className="hidden lg:block">
        <DataTable data={storiesData} columns={columns} />
      </div>
      <div className=" flex lg:hidden flex-col gap-7">
        {storiesData.map((story) => (
          <CardStory key={story.id} data={story} />
        ))}
      </div>
    </Card>
  );
}

export default page;
