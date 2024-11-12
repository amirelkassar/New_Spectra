import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { SurveyForm } from "@/components/swyc/survey-form";
import React, { useState } from "react";

function History() {
  const [DataPatientHistory, setDataPatientHistory] = useState([
    {
      id: 1,
      ar: "Eye contact ",
      en: "Eye contact",
      haveText: true, // Add the boolean key
    },
    {
      id: 2,
      ar: " Responding for calls with name",
      en: " Responding for calls with name",
      haveText: true, // Add the boolean key
    },
    {
      id: 3,
      ar: " Show, Share request, Joint attention",
      en: "Show, Share request, Joint attention",
      haveText: true, // Add the boolean key
    },
    {
      id: 4,
      ar: "Gestures, pointing",
      en: "Gestures, pointing",
      haveText: true, // Add the boolean key
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
    {
      id: 6,
      ar: "Reciprocity",
      en: "Reciprocity",
      haveText: true, // Add the boolean key
    },
    {
      id: 7,
      ar: "Social cues understanding",
      en: "Social cues understanding",
      haveText: true, // Add the boolean key
    },
    {
      id: 8,
      ar: "Make relation and maintaining them",
      en: "Make relation and maintaining them",
      haveText: true, // Add the boolean key
    },
    {
      id: 9,
      ar: "Understanding facial expressions and empathy with others",
      en: "Understanding facial expressions and empathy with others",
      haveText: true, // Add the boolean key
    },
    {
      id: 10,
      ar: " Copy others",
      en: " Copy others",
      haveText: true, // Add the boolean key
    },
    {
      id: 11,
      ar: "Imaginative Play",
      en: "Imaginative Play",
      haveText: true, // Add the boolean key
    },
    {
      id: 12,
      ar: "Stereotype behaviors",
      en: "Stereotype behaviors",
      type: "multi",
      options: [
        { value: 0, label: " Vocal", selected: false },
        { value: 1, label: "Flapping", selected: false },
        { value: 2, label: "Rocking", selected: false },
        { value: 3, label: "Spinning", selected: false },
        { value: 4, label: "Pacing", selected: false },
        { value: 5, label: " Jumping", selected: false },
      ],
      haveText: false, // Add the boolean key
    },
    {
      id: 13,
      ar: "Sensory issue",
      en: "Sensory issue",
      type: "multi",
      options: [
        { value: 0, label: " Hypersensitivity", selected: false },
        { value: 1, label: "Hyposensitivity", selected: false },
        { value: 2, label: "To sounds", selected: false },
        { value: 3, label: "Sniffing", selected: false },
        { value: 4, label: "Licking", selected: false },
        { value: 5, label: " High Pain Threshold", selected: false },
        { value: 6, label: " Finger mannerism", selected: false },
      ],
      haveText: false, // Add the boolean key
    },
    {
      id: 14,
      ar: "",
      en: "",
      type: "multi",
      options: [
        { value: 0, label: "  Staring", selected: false },
        {
          value: 1,
          label: "Laughing/crying out of the context",
          selected: false,
        },
        { value: 2, label: "Fancy with lights", selected: false },
        { value: 3, label: "Meltdown", selected: false },
        { value: 4, label: "Hyperactive", selected: false },
        { value: 5, label: " Impulsive", selected: false },
        { value: 6, label: "Aggressiveness", selected: false },
        { value: 7, label: "Short attention span", selected: false },
        { value: 8, label: "Tantrums", selected: false },
      ],
      haveText: false, // Add the boolean key
    },
  ]);

  const [answers, setAnswers] = useState({});
  const [Impression, setImpression] = useState([
    { value: 0, label: "CNS", selected: false },
    { value: 1, label: "Squint", selected: false },
    { value: 2, label: "Drooling", selected: false },
    { value: 3, label: "Neurocutaneous Stigmata.", selected: false },
  ]);
  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };
  const toggleSelection = (questionId, value) => {
    setDataPatientHistory((prevHistory) =>
      prevHistory.map((question) =>
        question.id === questionId && question.type === "multi"
          ? {
              ...question,
              options: question.options.map((option) =>
                option.value === value
                  ? { ...option, selected: !option.selected }
                  : option
              ),
            }
          : question
      )
    );
  };
  const toggleSelectiontwo = (value) => {
    setImpression((prevImpression) =>
      prevImpression.map((item) =>
        item.value === value ? { ...item, selected: !item.selected } : item
      )
    );
  };
  return (
    <div dir="ltr" className="my-4 flex flex-col gap-5">
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Past medical history"}>
          <Accordion.Label>Past medical history</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {DataPatientHistory?.map((question) => (
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
                            <SurveyForm.SingleAnswer
                              name={`${question?.id}`}
                              value="0"
                              checked={answers[question?.id] === 0}
                              onChange={() => handleSelect(question?.id, 0)}
                            >
                              Poor
                            </SurveyForm.SingleAnswer>
                            <SurveyForm.SingleAnswer
                              name={`${question?.id}`}
                              value="1"
                              checked={answers[question?.id] === 1}
                              onChange={() => handleSelect(question?.id, 1)}
                            >
                              Normal
                            </SurveyForm.SingleAnswer>
                            <SurveyForm.SingleAnswer
                              name={`${question?.id}`}
                              value="2"
                              checked={answers[question?.id] === 2}
                              onChange={() => handleSelect(question?.id, 2)}
                            >
                              Not at all
                            </SurveyForm.SingleAnswer>
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
        <Accordion.Item value={"Past medical history"}>
          <Accordion.Label>Examination</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                        Dysmorphic Features
                      </SurveyForm.QuestionLabel>

                      <SurveyForm.Answers>
                        <SurveyForm.SingleAnswer name={`Dysmorphic`} value="0">
                          Yes
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer name={`Dysmorphic`} value="1">
                          No
                        </SurveyForm.SingleAnswer>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                  <SurveyForm.QuestionLi>
                    <SurveyForm.Question>
                      <SurveyForm.Answers>
                        {Impression?.map(({ value, label, selected }) => (
                          <SurveyForm.MultiAnswers
                            key={value}
                            name={`${label}`}
                            value={value.toString()}
                            checked={selected}
                            onChange={() => toggleSelectiontwo(value)}
                          >
                            {label}
                          </SurveyForm.MultiAnswers>
                        ))}
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                </ul>
              </SurveyForm.Body>
            </SurveyForm>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default History;
