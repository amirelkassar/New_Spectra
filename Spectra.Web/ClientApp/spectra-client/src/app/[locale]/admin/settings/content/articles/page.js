"use client";
import React from "react";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import boy1 from "@/assets/images/boy1.png";
import boy2 from "@/assets/images/boy2.png";
import boy3 from "@/assets/images/boy3.png";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
import CardArticle from './_components/CardArticle'
const dataArticle = [
  {
    id: 1,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy1,
    date: "8/6/2024",
    star: 5,
  },
  {
    id: 2,
    title: "تأخر نمو الطفل وعلاقته بالاضطرابات الاسرية",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy2,
    date: "8/6/2024",
    star: 5,
  },
  {
    id: 3,
    title: " أسباب ضعف السمع عند حديثي الولادة",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy3,
    date: "8/6/2024",
    star: 5,
  },
  {
    id: 4,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy1,
    date: "8/6/2024",
    star: 5,
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
        <h2 className="headTitleDash ">الاعدادات - المحتوى</h2>
      </div>
      <div className="flex flex-col  flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6 mb-8 lg:mb-10">
        <h2 className="headTitleDash">المقالات</h2>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ADDARTICLES}
          className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
        >
          <PlusInsideCircleIcon />
          <p className=" text-[14px] md:text-[16px] font-bold">أضافة مقال </p>
        </Link>
      </div>
      <div className="hidden lg:block">
        <DataTable data={dataArticle} columns={columns} />
      </div>
      <div className=" flex lg:hidden flex-col gap-7">
        {dataArticle.map((article) => (
          <CardArticle key={article.id} data={article} />
        ))}
      </div>
    </Card>
  );
}

export default page;
