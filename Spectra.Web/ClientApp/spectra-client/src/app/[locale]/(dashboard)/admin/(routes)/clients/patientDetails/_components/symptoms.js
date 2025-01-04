import Card from "@/components/card";
import React from "react";
const childInfo = {
  symptoms:
    "صعوبة التواصل مع الآخرين عن طريق الكلام، وتكرار نفس العبارات. الاهتمام الكبير بموضوعات أو أنشطة معينة، والالتزام بروتين يومي محدد، والانزعاج الشديد عند تغيير الروتين.",
  symptomAppearanceDate: "فى السنة الثانية",
  fromMother: "وراثة",
  physicalSymptoms: "لا يوجد",

  nots: "انخفاض الاستجابة العاطفية بتعابير الوجه تأخر النطق والكلام",
};
function Symptoms() {
  return (
    <Card>
      <ul className="flex flex-col gap-6 w-full">
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className=" font-Bold text-xs mdl:text-base mb-2">اعراض الطفل</h4>
          <p className=" text-sm mdl:text-lg font-Regular">{childInfo.symptoms}</p>
        </li>
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className=" font-Bold text-xs mdl:text-base mb-2">تاريخ ظهور الاعراض </h4>
          <p className=" text-sm mdl:text-lg font-Regular">{childInfo.symptomAppearanceDate}</p>
        </li>
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className=" font-Bold text-xs mdl:text-base mb-2">وراثة ام مكتسبة </h4>
          <p className=" text-sm mdl:text-lg font-Regular">{childInfo.fromMother}</p>
        </li>
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className=" font-Bold text-xs mdl:text-base mb-2">اعراض جسدية </h4>
          <p className=" text-sm mdl:text-lg font-Regular">{childInfo.physicalSymptoms}</p>
        </li>
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className=" font-Bold text-xs mdl:text-base mb-2">ملحوظات </h4>
          <p className=" text-sm mdl:text-lg font-Regular">{childInfo.nots}</p>
        </li>
      </ul>
    </Card>
  );
}

export default Symptoms;
