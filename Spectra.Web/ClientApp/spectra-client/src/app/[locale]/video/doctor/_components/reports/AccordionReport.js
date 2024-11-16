import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { Textarea } from "@/components/inputs/textarea";
import { SurveyForm } from "@/components/swyc/survey-form";
import React from "react";

function AccordionReport({ data = {}, answers = {}, setAnswers }) {
  const handleSelect = (mainId, questionId, value, type = "radio") => {
    setAnswers((prev) => ({
      ...prev,
      [mainId]: {
        ...prev[mainId], // إذا كان هناك إجابات سابقة للـ mainId
        [questionId]:
          type === "radio"
            ? { ...prev[mainId]?.[questionId], value: value }
            : {
                ...prev[mainId]?.[questionId],
                value: prev[mainId]?.[questionId]?.value?.includes(value)
                  ? prev[mainId]?.[questionId]?.value.filter((v) => v !== value) // إزالة القيمة إذا كانت موجودة
                  : [...(prev[mainId]?.[questionId]?.value || []), value], // إضافة القيمة إذا لم تكن موجودة
              }, // إضافة الإجابة إذا لم تكن موجودة
      },
    }));
  };
  const handleOtherTextForOneQues = (mainId, questionId, text) => {
    setAnswers((prev) => ({
      ...prev,
      [mainId]: {
        ...prev[mainId],
        [questionId]: {
          ...prev[mainId]?.[questionId],
          other: text, // تحديث النص الإضافي فقط
        },
      },
    }));
  };
  const handelTextOther = (mainId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [mainId]: {
        ...prev[mainId], // إذا كان هناك إجابات سابقة للـ mainId
        other: value,
      },
    }));
  };
  console.log(answers);

  if (data?.questions?.length) {
    return (
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={data.title || "val"}>
          <Accordion.Label>{data.title || ""}</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {data.questions.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        {question?.ar && (
                          <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                            {question?.ar}
                          </SurveyForm.QuestionLabel>
                        )}

                        {question?.type === "multi" ? (
                          <SurveyForm.Answers>
                            {question.options?.map(({ value, label }) => (
                              <SurveyForm.MultiAnswers
                                key={value}
                                aria-checked={
                                  answers[data.id]?.[
                                    question.id
                                  ]?.value?.includes(value) || false
                                }
                                checked={
                                  answers[data.id]?.[
                                    question.id
                                  ]?.value?.includes(value) || false
                                }
                                onChange={() =>
                                  handleSelect(
                                    data.id,
                                    question.id,
                                    value,
                                    "multi"
                                  )
                                }
                              >
                                {label}
                              </SurveyForm.MultiAnswers>
                            ))}
                          </SurveyForm.Answers>
                        ) : (
                          <SurveyForm.Answers>
                            {question.options.map((singleAns, j) => {
                              return (
                                <SurveyForm.SingleAnswer
                                  key={j}
                                  name={`${question?.id}`}
                                  value={singleAns.value}
                                  checked={
                                    answers[data.id]?.[question.id]?.value ===
                                    singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(
                                      data.id,
                                      question.id,
                                      singleAns.value
                                    )
                                  }
                                >
                                  {singleAns.en}
                                </SurveyForm.SingleAnswer>
                              );
                            })}
                          </SurveyForm.Answers>
                        )}

                        {question.haveText && (
                          <TextInput
                            onChange={(e) => {
                              handleOtherTextForOneQues(
                                data.id,
                                question.id,
                                e.target.value
                              );
                            }}
                            className="flex-1 min-w-[300px]  ms-4"
                            inputClassName={"bg-grayLight/50 h-9"}
                          />
                        )}
                      </SurveyForm.Question>
                    </SurveyForm.QuestionLi>
                  ))}
                </ul>
              </SurveyForm.Body>
            </SurveyForm>
            {data.other && (
              <div className="flex gap-3 p-3">
                <h3>Other</h3>
                <Textarea
                  onChange={(e) => {
                    handelTextOther(data.id, e.target.value);
                  }}
                  className="flex-1 min-w-[300px]  ms-4"
                />
              </div>
            )}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default AccordionReport;
