"use client";
import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { Textarea } from "@/components/inputs/textarea";
import { SurveyForm } from "@/components/swyc/survey-form";
import React, { useState } from "react";

function MDT() {
  const [DataOne, setDataOne] = useState([
    {
      id: 1,
      ar: "Is the patient  currently at school /  center ",
      en: "Is the patient  currently at school /  center",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: "No", en: "No", value: "No" },
      ],
    },
    {
      id: 2,
      ar: " Is the child having  any issues regarding  school / center",
      en: " Is the child having  any issues regarding  school / center",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: "No", en: "No", value: "No" },
      ],
    },

    {
      id: 5,
      ar: "Echolalia",
      en: "Echolalia",
      type: "multi",
      options: [
        { value: 0, label: "Early", selected: false },
        { value: 1, label: " Late", selected: false },
        { value: 2, label: "Verbal", selected: false },
        { value: 3, label: "Nonverbal", selected: false },
        { value: 4, label: "Prosody issues", selected: false },
        { value: 5, label: "Intonation issues", selected: false },
        { value: 6, label: "Formal language", selected: false },
      ],
      haveText: false, // Add the boolean key
    },
  ]);
  const [DataTwo, setDataTwo] = useState([
    {
      id: 3,
      ar: "Verbal ",
      en: "Verbal",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Sentences", en: "Sentences", value: "Sentences" },
        { id: 2, ar: "1 word", en: "1 word", value: "1 word" },
        { id: 3, ar: "Stuttering", en: "Stuttering", value: "Stuttering" },
      ],
    },
    {
      id: 4,
      ar: " Non-verbal",
      en: " Non-verbal",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Pointing", en: "Pointing", value: "Pointing" },
        {
          id: 2,
          ar: "Hand leading",
          en: "Hand leading",
          value: "Hand leading",
        },
        { id: 3, ar: "Crying", en: "Crying", value: "Crying" },
        { id: 1, ar: "Screaming", en: "Screaming", value: "Screaming" },
      ],
    },
  ]);
  const [DataFour, setDataFour] = useState([
    {
      id: 5,
      ar: "Establishing eye  contact ",
      en: "Establishing eye  contact",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 6,
      ar: " Playing with toys in  appropriate way",
      en: " Playing with toys in  appropriate way",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 7,
      ar: " Engaging with  therapist during  playing",
      en: " Engaging with  therapist during  playing",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 8,
      ar: "Imitating therapist  actions",
      en: "Imitating therapist  actions",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 9,
      ar: "Playing imaginatively",
      en: "Playing imaginatively",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
  ]);
  const [DataFive, setDataFive] = useState([
    {
      id: 10,
      ar: "Aware of risk ",
      en: "Aware of risk",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 11,
      ar: " Attention span",
      en: " Attention span",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 12,
      ar: "Working memory",
      en: "Working memory",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 13,
      ar: "Long-term memory",
      en: "Long-term memory",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        {
          id: 2,
          ar: "Poor to fair",
          en: "Poor to fair",
          value: "Poor to fair",
        },
        { id: 3, ar: "Fair", en: "Fair", value: "Fair" },
        {
          id: 4,
          ar: "Fair to good",
          en: "Fair to good",
          value: "Fair to good",
        },
        { id: 5, ar: "Good", en: "Good", value: "Good" },
      ],
    },
    {
      id: 14,
      ar: "Types of attention",
      en: "Types of attention",
      haveText: false, // Add the boolean key
      options: [
        {
          id: 1,
          ar: "Focused Attention",
          en: "Focused Attention",
          value: "Focused Attention",
        },
        {
          id: 2,
          ar: "Sustained attention",
          en: "Sustained attention",
          value: "Sustained attention",
        },
        {
          id: 3,
          ar: "Selective attention",
          en: "Selective attention",
          value: "Selective attention",
        },
        {
          id: 4,
          ar: "Alternative attention",
          en: "Alternative attention",
          value: "Alternative attention",
        },
        {
          id: 5,
          ar: "Divided attention",
          en: "Divided attention",
          value: "Divided attention",
        },
        {
          id: 6,
          ar: "Joint attention",
          en: "Joint attention",
          value: "Joint attention",
        },
      ],
    },
  ]);
  const [answers, setAnswers] = useState({});
  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };

  return (
    <div dir="ltr" className="my-4 flex flex-col gap-5">
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"School / Center situation"}>
          <Accordion.Label>School / Center situation</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {DataOne?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        {question?.type === "multi" ? (
                          <SurveyForm.Answers>
                            {question.options?.map(
                              ({ value, label, selected }) => (
                                <SurveyForm.MultiAnswers
                                  key={value}
                                  name={`${label}`}
                                  value={value.toString()}
                                  checked={selected}
                                  onChange={() =>
                                    toggleSelection(question.id, value)
                                  }
                                >
                                  {label}
                                </SurveyForm.MultiAnswers>
                              )
                            )}
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
                                    answers[question?.id] === singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(question?.id, singleAns.value)
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
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Communication"}>
          <Accordion.Label>Communication</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {DataTwo?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        {question?.type === "multi" ? (
                          <SurveyForm.Answers>
                            {question.options?.map(
                              ({ value, label, selected }) => (
                                <SurveyForm.MultiAnswers
                                  key={value}
                                  name={`${label}`}
                                  value={value.toString()}
                                  checked={selected}
                                  onChange={() =>
                                    toggleSelection(question.id, value)
                                  }
                                >
                                  {label}
                                </SurveyForm.MultiAnswers>
                              )
                            )}
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
                                    answers[question?.id] === singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(question?.id, singleAns.value)
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
            <div className="flex gap-3 p-3">
              <h3>Other</h3>
              <Textarea className="flex-1 min-w-[300px]  ms-4" />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Social and play skills"}>
          <Accordion.Label>Social and play skills</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {DataFour?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        {question?.type === "multi" ? (
                          <SurveyForm.Answers>
                            {question.options?.map(
                              ({ value, label, selected }) => (
                                <SurveyForm.MultiAnswers
                                  key={value}
                                  name={`${label}`}
                                  value={value.toString()}
                                  checked={selected}
                                  onChange={() =>
                                    toggleSelection(question.id, value)
                                  }
                                >
                                  {label}
                                </SurveyForm.MultiAnswers>
                              )
                            )}
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
                                    answers[question?.id] === singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(question?.id, singleAns.value)
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
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Social and play skills"}>
          <Accordion.Label>Social and play skills</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {DataFive?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        {question?.type === "multi" ? (
                          <SurveyForm.Answers>
                            {question.options?.map(
                              ({ value, label, selected }) => (
                                <SurveyForm.MultiAnswers
                                  key={value}
                                  name={`${label}`}
                                  value={value.toString()}
                                  checked={selected}
                                  onChange={() =>
                                    toggleSelection(question.id, value)
                                  }
                                >
                                  {label}
                                </SurveyForm.MultiAnswers>
                              )
                            )}
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
                                    answers[question?.id] === singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(question?.id, singleAns.value)
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
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MDT;
