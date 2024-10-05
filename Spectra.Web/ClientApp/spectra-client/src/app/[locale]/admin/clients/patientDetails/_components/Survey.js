import TrueIcon from "@/assets/icons/true";
import Card from "@/components/card";
import React from "react";
const SurveyData = [
  {
    category: "قسم التطور الاجتماعي والعاطفي",
    questions: [
      "هل يبدو طفلك غير مهتم بالألعاب مع الآخرين؟",
      "هل يجد طفلك صعوبة في التواصل البصري مع الآخرين؟",
    ],
  },
  {
    category: "قسم التواصل واللغة",
    questions: [
      "هل يتحدث طفلك بشكل واضح ومفهوم؟",
      "هل يستخدم طفلك الكلمات لتوصيل احتياجاته أو مشاعره؟",
    ],
  },
  {
    category: "التطور الحركي",
    questions: [
      "هل يعاني طفلك من تأخر في تعلم المهارات الحركية الدقيقة مثل الكتابة أو الرسم؟",
      "هل يبدو أن طفلك يجد صعوبة في التحكم في حركات جسمه؟",
    ],
  },
];

function Survey() {
  return (
    <Card>
      <h3 className=" text-base mdl:text-lg font-Bold mb-10">بيانات الاستبيان</h3>
      <h4 className="text-sm mdl:text-base font-Bold mb-10">الكشف المبكر الالكترونى</h4>
      <div className="flex flex-col gap-10 w-full">
        {SurveyData.map((item, index) => (
          <div key={index}>
            <h5 className=" text-xs mdl:text-base font-Bold mb-9">{item.category}</h5>
            <ul className="flex flex-col gap-4 w-full">
              {item.questions.map((question, index) => (
                <li
                  key={index}
                  className="border-b pb-4 flex items-center gap-4  border-grayLight last-of-type:border-none"
                >
                  <TrueIcon fill="#10B0C1" />
                  <p className=" text-sm mdl:text-lg font-Regular">{question}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Survey;
