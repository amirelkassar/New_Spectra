import BackIcon from "@/assets/icons/back";
import Card from "@/components/card";
import LinerChart from "@/components/liner-chart";
import { Link } from "@/navigation";
import React from "react";
const charts = [
    { x: "يناير", y: 55 },
    { x: "فبراير", y: 45 },
    { x: "مارس ", y: 50 },
    { x: "ابريل", y: 60 },
    { x: "مايو", y: 40 },
    { x: "يونيو", y: 15 },
    { x: "يوليو", y: 30 },
    { x: "اغسطس", y: 33 },
    { x: "سبتمبر", y: 20 },
    { x: "اكتوبر", y: 17 },
    { x: "نوفمر", y: 25 },
    { x: "ديسمبر", y: 10 },
  ];
function page() {
  return (
    <div className="flex flex-col gap-6 h-fit flex-1">
      <Card>
        <div className="flex items-center mb-10 justify-between gap-8">
          <div className="flex items-center gap-6">
            <Link href={"#"} className=" flex size-8 mdl:size-11">
              <BackIcon className={"w-full h-auto"} />
            </Link>
            <h2 className=" text-base lg:text-xl font-bold">التقارير</h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h3 className="font-Bold text-lg mb-2">تفاصيل التقرير</h3>
          <div className="pb-5 border-b border-grayLight">
            <h4 className="font-bold text-xs mb-2 lg:text-base">
              عنوان التقرير
            </h4>
            <p className="text-sm lg:text-xl font-Regular">
              تقرير حالة الطفل محمد
            </p>
          </div>
          <div className="pb-5 border-b border-grayLight">
            <h4 className="font-bold text-xs mb-2 lg:text-base">
              نوع التقرير{" "}
            </h4>
            <p className="text-sm lg:text-xl font-Regular">صحى شامل</p>
          </div>
          <div className="pb-5 border-b border-grayLight">
            <h4 className="font-bold text-xs mb-2 lg:text-base">
              محتوى التقرير
            </h4>
            <p className="text-sm lg:text-xl font-Regular">
              يشمل الفحص الشامل على التحاليل والفحوصات المخبرية، وفحوصات الأشعة
              التشخيصية، وغيرها من الإجراءات، ويتم اختيار ما هو مناسب للمريض
              وفقاً لعدة عوامل، كحالة المريض الصحية، وعمره، وجنسه، وعوامل أخرى.
              ينصح بإجراء الفحص الشامل كل 5 سنوات للأشخاص البالغين من عمر 18-40،
              وكل سنة إلى ثلاث سنوات بعد سن الأربعين. وهناك مجموعة من الفحوصات
              التي ينصح بإجرائها كل عام، مثل فحص السكري التراكمي.
            </p>
          </div>
        </div>
      </Card>
      <Card>
      <h2 className="font-Bold text-sm mdl:text-lg mb-8">ملخص الاداء شهريا</h2>
      <LinerChart chartData={charts} />
      </Card>
    </div>
  );
}

export default page;
