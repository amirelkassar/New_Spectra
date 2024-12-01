"use client";
import SaveIcon from "@/assets/icons/save";
import Button from "@/components/button";
import Card from "@/components/card";
import { Checkbox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
const initialQuestions = [
  {
    category: "قسم التطور الاجتماعي والعاطفي",
    questions: [
      {
        id: 1,
        question: "هل يبدو طفلك غير مهتم بالألعاب مع الآخرين؟",
        checked: true,
      },
      {
        id: 2,
        question: "هل يجد طفلك صعوبة في التواصل البصري مع الآخرين؟",
        checked: true,
      },
      {
        id: 3,
        question: "يستخدم طفلك إيماءات (مثل التلويح أو الإشارة) للتواصل؟",
        checked: false,
      },
      {
        id: 4,
        question: "يتجنب طفلك اللعب مع الأطفال الآخرين؟",
        checked: false,
      },
      { id: 5, question: "يستجيب طفلك عندما تنادي باسمه؟", checked: false },
    ],
  },
  {
    category: "قسم التواصل واللغة",
    questions: [
      {
        id: 6,
        question: "يستخدم طفلك كلمات أو عبارات متكررة بشكل غير عادي؟",
        checked: false,
      },
      {
        id: 7,
        question: "يبدو طفلك غير قادر على بدء محادثة أو الاستمرار فيها؟",
        checked: false,
      },
      {
        id: 8,
        question: "يعيد طفلك كلام الآخرين بطريقة غير عادية (صدى الكلام)؟",
        checked: false,
      },
      {
        id: 9,
        question: "يعبر طفلك عن احتياجاته أو رغباته بكفاءة؟",
        checked: false,
      },
    ],
  },
];
function SurveyEdit() {
  // Set up state to manage the checkbox values
  const [questionsState, setQuestionsState] = useState(initialQuestions);

  // Handle checkbox change
  const handleCheckboxChange = (categoryIndex, questionIndex) => {
    const newQuestions = [...questionsState]; // Copy the current state
    newQuestions[categoryIndex].questions[questionIndex].checked =
      !newQuestions[categoryIndex].questions[questionIndex].checked; // Toggle the checked state
    setQuestionsState(newQuestions); // Update state
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card>
      <h3 className=" text-base mdl:text-lg font-Bold mb-10">
        بيانات الاستبيان
      </h3>
      <h4 className="text-sm mdl:text-base font-Bold mb-10">
        الكشف المبكر الالكترونى
      </h4>
      <div>
        {questionsState.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h5 className=" text-xs mdl:text-base font-Bold mb-9">
              {section.category}
            </h5>
            {section.questions.map((q, questionIndex) => (
              <div key={q.id} className="mb-3">
                <Checkbox
                  label={q.question}
                  checked={q.checked}
                  radius="xl"
                  color="#10B0C1"
                  size={isMobile ? "xs" : "sm"}
                  onChange={() =>
                    handleCheckboxChange(categoryIndex, questionIndex)
                  }
                  classNames={{
                    label: " text-sm mdl:text-lg font-Regular",
                    body: "items-center",
                  }}
                  className="mr-2 items-center w-full border-solid !border-b pb-4  border-grayLight "
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button
        className={
          "mt-10 btnReqTable !py-3 text-[16px] lg:text-[20px] !px-2 lg:!px-5 font-Bold items-center flex  bg-greenMain justify-center  max-w-[260px] h-12 ring-1 !gap-4 !ring-greenMain border-none text-white"
        }
      >
        <SaveIcon />
        حفظ التعديلات
      </Button>
    </Card>
  );
}

export default SurveyEdit;
