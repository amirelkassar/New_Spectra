import React from "react";
import Card from "@/components/card";
import AddContentIcon from "@/assets/icons/addContent";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import boy1 from "@/assets/images/boy1.png";
import boy2 from "@/assets/images/boy2.png";
import boy3 from "@/assets/images/boy3.png";
import Image from "next/image";
import DeleteIcon from "@/assets/icons/delete";
import Button from "@/components/button";
import EditIcon from "@/assets/icons/edit";
import ArticlesNew from './_components/articlesNew'
const dataArticle = [
  {
    id: 1,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy1,
  },
  {
    id: 2,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy2,
  },
  {
    id: 3,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy3,
  },
  {
    id: 4,
    title: "الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)",
    content:
      "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص ",
    image: boy1,
  },
];
function pageOld() {
  return (
    <Card>
      <h1 className="text-center my-4 mdl:my-8 text-[24px] mdl:text-[36px] font-Bold">
        المقالات
      </h1>
      <Link
        href={ROUTES.ADMIN.SETTINGS.CONTENT.ADDARTICLES}
        className="flex mb-6 items-center justify-center flex-col gap-4 h-[150px] rounded-xl border border-grayMedium/80 border-dashed"
      >
        <AddContentIcon />
        <p className="text-grayDark text-base">اضف مقال</p>
      </Link>
      <div className="flex items-start gap-10 justify-between">
        <div className="flex-1 w-full">
          <h2 className="text-center mb-3 text-[16px] mdl:text-[20px] font-Bold">
            أهم المقالات
          </h2>
          <div className="flex w-full flex-col gap-10">
            {dataArticle.map((article) => {
              return (
                <div key={article.id} className="w-full pb-10 border-b border-grayDark last-of-type:border-none">
                  <div className="flex items-center gap-5 mb-10">
                    <Button
                      className={
                        "text-base   px-3 flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none w-fit !gap-3"
                      }
                    >
                      <DeleteIcon /> مسح
                    </Button>
                    <Link
                      href={ROUTES.ADMIN.SETTINGS.CONTENT.EDITARTICLES(
                        article.id
                      )}
                      className={
                        " text-base w-fit   px-3  flex gap-2 font-bold items-center justify-center h-11 ring-1 !ring-[#10B0C1] text-[#10B0C1] border-none rounded-[10px]"
                      }
                    >
                      <EditIcon pathColor="#10B0C1" />
                      تعديل
                    </Link>
                  </div>
                  <div className="w-full flex items-start gap-7">
                    <Image
                      src={article.image}
                      alt="boy"
                      width={253}
                      height={238}
                      className="w-[253px] min-w-[253px] h-[238] object-cover object-top"
                    />
                    <div className=" flex-1">
                      <h3 className="text-[24px] mb-9 font-Bold">
                        {article.title}
                      </h3>
                      <p className="text-base">{article.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="min-w-[270px] max-w-[270px]">
          <h2 className="text-center   text-[16px] mdl:text-[20px] font-Bold">
            أحدث المقالات
          </h2>
          <ArticlesNew/>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
          <Button
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            تأكيد
          </Button>
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            إلغاء
          </Link>
        </div>
    </Card>
  );
}

export default pageOld;
