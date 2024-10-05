"use client";
import Card from "@/components/card";
import Input from "@/components/input";
import { Textarea } from "@mantine/core";
import React, { useState } from "react";
const childInfo = {
  symptoms:
    "صعوبة التواصل مع الآخرين عن طريق الكلام، وتكرار نفس العبارات. الاهتمام الكبير بموضوعات أو أنشطة معينة، والالتزام بروتين يومي محدد، والانزعاج الشديد عند تغيير الروتين.",
  symptomAppearanceDate: "فى السنة الثانية",
  fromMother: "وراثة",
  physicalSymptoms: "لا يوجد",

  nots: "انخفاض الاستجابة العاطفية بتعابير الوجه تأخر النطق والكلام",
};
function SymptomsEdit() {
  const [childInfo, setChildInfo] = useState({
    symptoms:
      "صعوبة التواصل مع الآخرين عن طريق الكلام، وتكرار نفس العبارات. الاهتمام الكبير بموضوعات أو أنشطة معينة، والالتزام بروتين يومي محدد، والانزعاج الشديد عند تغيير الروتين.",
    symptomAppearanceDate: "فى السنة الثانية",
    fromMother: "وراثة",
    physicalSymptoms: "لا يوجد",
    nots: "انخفاض الاستجابة العاطفية بتعابير الوجه تأخر النطق والكلام",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildInfo({
      ...childInfo,
      [name]: value,
    });
  };

  return (
    <Card>
      <ul className="flex flex-col gap-6 w-full">
        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className="font-Bold text-xs mdl:text-base mb-2">اعراض الطفل</h4>
          <Textarea
            name="symptoms"
            value={childInfo.symptoms}
            onChange={handleChange}
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] !font-bold  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
          />
        </li>

        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className="font-Bold text-xs mdl:text-base mb-2">
            تاريخ ظهور الاعراض
          </h4>

          <Input
            handleOnChange={(e) => {
              handleChange;
            }}
            name="symptomAppearanceDate"
            value={childInfo.symptomAppearanceDate}
            inputClassName={
              "!h-[48px] w-full rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </li>

        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className="font-Bold text-xs mdl:text-base mb-2">
            وراثة ام مكتسبة
          </h4>
          <Input
            name="fromMother"
            value={childInfo.fromMother}
            onChange={handleChange}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </li>

        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className="font-Bold text-xs mdl:text-base mb-2">اعراض جسدية</h4>
          <Input
            name="physicalSymptoms"
            value={childInfo.physicalSymptoms}
            onChange={handleChange}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </li>

        <li className="w-full border-b pb-4 border-grayLight last-of-type:border-none">
          <h4 className="font-Bold text-xs mdl:text-base mb-2">ملحوظات</h4>
          <Textarea
            name="nots"
            value={childInfo.nots}
            onChange={handleChange}
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] !font-bold  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
          />
        </li>
      </ul>

    
    </Card>
  );
}

export default SymptomsEdit;
