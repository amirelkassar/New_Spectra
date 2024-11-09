"use client";
import { useState } from "react";
import { REPORTSDATA } from "@/lib/demoData";
import BackIcon from "@/assets/icons/back";
import { Accordion } from "@/components/accordion";
import { SurveyForm } from "@/components/swyc/survey-form";
import Button from "@/components/button";
import { ReportCard } from "@/app/[locale]/client/_components/child";

const dataReports = [
  {
    title: "Presenting compliant",
    content: [
      { label: "Term : 9 months" },
      { label: "normal delivery" },
      { label: "Ventilation" },
      { label: " Birth weight : normal" },
    ],
  },
  {
    title: "Past medical history",
    content: [
      { label: "Seizure" },
      { label: "surgery" },
      { label: "allergies" },
      { label: " medication" },
    ],
  },
  {
    title: "Screening results",
    content: [
      { label: "Developmental Milestones", status: "Needs Review" },
      {
        label: "Baby Pediatric Symptom Checklist (BPSC)",
        score: 6,
        status: "at risk",
      },
    ],
  },
  {
    title: "Behavioral difficulties",
    content: [{ label: "Tantrums" }, { label: "Disruptive" }],
  },
  {
    title: "Social adaptive",
    content: [
      { label: "Toilet trained", status: "Mild delay" },
      { label: "Dressing", status: "Mild delay" },
      { label: "Feeding", status: "Mild delay" },
      { label: "Sleeping", status: "Mild delay" },
    ],
  },
  {
    title: "Type of school",
    content: [{ label: "Inclusive (merge)" }],
  },
  {
    title: "Family/ social history",
    content: [
      { label: "Parent’s Occupation", status: "Mother Working" },
      { label: "Socioeconomic Status", status: "Average" },
    ],
  },
];
const dataReports2 = [
  {
    title: "ملاحظات الاباء حول التفاعل الاجتماعي",
    content: [
      {
        id: 1,
        question: "هل يحضر طفلك الأشياء ليريها لك؟",
        answers: "عدة مرات يوميا",
      },
      {
        id: 2,
        question: "هل يهتم طفلك باللعب مع الأطفال الاخرين؟",
        answers: "دائما",
      },
      {
        id: 3,
        question: "هل عندما تقول شيئا ما أو تلوح بيدك يحاول طفلك تقليدك؟",
        answers: "دائما",
      },
      {
        id: 4,
        question: "هل ينظر إليك طفلك عندما تنادي عليه باسمه؟",
        answers: "دائما",
      },
      {
        id: 5,
        question: "هل ينظر طفلك عندما تشير إلى شيء ما في الغرفة؟",
        answers: "دائما",
      },
    ],
  },
  {
    title: "الرجاء وضع علامة على كل ما ينطبق",
    content: [
      {
        id: 1,
        question: "كيف يعبر طفلك عادة عن الشيء الذي يريده؟",
        answers: "يقول كلمة يعبر بها عما يريد",
      },
      {
        id: 2,
        question: "ما أنشطة اللعب المفضلة عند طفلك؟",
        answers: "اللعب بالرأس أو دمى",
      },
    ],
  },
  {
    title: "مراحل التطور الأساسية",
    content: [
      {
        id: 1,
        question: "يصدر صوتًا يجعلك تعلم إذا ما كان سعيدًا أو منزعجًا",
        answers: "ليس بعد",
      },
      {
        id: 2,
        question: "يبدو سعيدًا عند رؤيتك",
        answers: "ليس بعد",
      },
      {
        id: 3,
        question: "يتبع لعبة متحركة بعينيه",
        answers: "ليس بعد",
      },
      {
        id: 4,
        question: "يدير رأسه ليرى من الشخص المتحدث",
        answers: "ليس بعد",
      },
      {
        id: 5,
        question: "يثبت رأسه عندما يتم سحبه إلى وضع الجلوس",
        answers: "ليس بعد",
      },
      {
        id: 6,
        question: "يشبك اليدين معًا",
        answers: "ليس بعد",
      },
      {
        id: 7,
        question: "يضحك",
        answers: "ليس بعد",
      },
      {
        id: 8,
        question: "يبقي رأسه ثابتًا عند وضع الجلوس",
        answers: "ليس بعد",
      },
      {
        id: 9,
        question: "يصدر أصواتًا مثل “ا” و”غ” و”ما” و”يا”",
        answers: "ليس بعد",
      },
      {
        id: 10,
        question: "ينظر إليك عند مناداته باسمه",
        answers: "ليس بعد",
      },
    ],
  },
];
export const Reports = () => {
  const [view, setView] = useState(null);
  return (
    <div className="my-7 mdl:my-10">
      {view && (
        <div
          role="button"
          className="flex items-center gap-3  mb-4 mdl:mb-7"
          onClick={() => setView(view === 2 ? 1 : null)}
        >
          <BackIcon className="ltr:rotate-180 size-8 mdl:size-10" />

          {view === 1 && <h2 className="text-base font-Bold">عرض التقارير</h2>}
          {view === 2 && (
            <h2 className="text-base font-Bold">Screening results details </h2>
          )}
        </div>
      )}

      {!view && (
        <div className="grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-1 gap-5">
          {REPORTSDATA?.map((repo, i) => (
            <ReportCard
              key={i}
              data={repo}
              onClick={() => setView(1)}
              clickable
            />
          ))}
        </div>
      )}

      {view === 1 && (
        <div dir="ltr" className="mt-4">
          <Accordion>
            {dataReports?.map((data, index) => (
              <Accordion.Item key={index} value={data.title}>
                <Accordion.Label>{data.title}</Accordion.Label>
                <Accordion.Content>
                  <ul>
                    {data?.content?.map((item, idx) => (
                      <li
                        className="text-xs flex-wrap flex gap-x-5 items-center gap-y-2 mdl:gap-y-3 mdl:gap-x-10 mdl:text-base py-4 border-b border-grayLight last-of-type:border-none"
                        key={idx}
                      >
                        <h3 className=" text-xs mdl:text-base min-w-[180px]">
                          {item.label}
                        </h3>

                        {item.score && (
                          <div className="flex items-center gap-3">
                            <h4 className="font-Bold text-xs mdl:text-base">
                              {" "}
                              Score:
                            </h4>
                            <p className="px-2 h-8 rounded-lg text-center flex items-center justify-center w-fit bg-[#FFF2F2] min-w-14 font-Bold text-xs mdl:text-base">
                              {item.score}
                            </p>
                          </div>
                        )}
                        {item.status && (
                          <p
                            className={` px-2 h-8 rounded-lg text-center w-fit min-w-[100px] ${
                              item.status === "at risk"
                                ? "bg-[#FFF2F2]"
                                : "bg-blueLight"
                            }  font-Bold text-xs mdl:text-base flex items-center justify-center`}
                          >
                            {item.status}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Conditional Button for specific sections */}
                  {data.title === "Screening results" && (
                    <Button
                      onClick={() => setView(2)}
                      variant="secondary"
                      className="w-[190px]"
                    >
                      View Details
                    </Button>
                  )}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      )}
      {view === 2 &&
        dataReports2.map((data, index) => (
          <SurveyForm key={index}>
            <SurveyForm.Body>
              <SurveyForm.Title>{data.title}</SurveyForm.Title>

              <ul>
                {data.content?.map((question) => (
                  <SurveyForm.QuestionLi key={question.id}>
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel>
                        {question.question}
                      </SurveyForm.QuestionLabel>
                      <SurveyForm.Answers>
                        <p className="px-4 rounded-xl bg-blueLight flex items-center justify-center py-1 text-center font-Bold text-xs mdl:text-base">
                          {question.answers}
                        </p>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                ))}
              </ul>
            </SurveyForm.Body>
          </SurveyForm>
        ))}
    </div>
  );
};
