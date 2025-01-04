import Card from "@/components/card";
import React from "react";

function page() {
  return (
    <Card>
      <h2 className="mb-8 text-base lg:text-xl font-bold"> تفاصيل التقرير</h2>
      <div className="flex flex-col gap-5 w-full">
        <div className="pb-5 border-b border-grayLight">
          <h3 className="font-bold text-xs mb-2 lg:text-base">عنوان التقرير</h3>
          <p className="text-sm lg:text-xl font-Regular">
            تقرير حالة الطفل محمد
          </p>
        </div>
        <div className="pb-5 border-b border-grayLight">
          <h3 className="font-bold text-xs mb-2 lg:text-base">نوع التقرير </h3>
          <p className="text-sm lg:text-xl font-Regular">صحى شامل</p>
        </div>
        <div className="pb-5 border-b border-grayLight">
          <h3 className="font-bold text-xs mb-2 lg:text-base">محتوى التقرير</h3>
          <p className="text-sm lg:text-xl font-Regular">
            يشمل الفحص الشامل على التحاليل والفحوصات المخبرية، وفحوصات الأشعة
            التشخيصية، وغيرها من الإجراءات، ويتم اختيار ما هو مناسب للمريض وفقاً
            لعدة عوامل، كحالة المريض الصحية، وعمره، وجنسه، وعوامل أخرى. ينصح
            بإجراء الفحص الشامل كل 5 سنوات للأشخاص البالغين من عمر 18-40، وكل
            سنة إلى ثلاث سنوات بعد سن الأربعين. وهناك مجموعة من الفحوصات التي
            ينصح بإجرائها كل عام، مثل فحص السكري التراكمي.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default page;
