import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { Textarea } from "@/components/inputs/textarea";
import { SurveyForm } from "@/components/swyc/survey-form";
import React, { useState } from "react";
const DataAll = [
  {
    id: 1,
    title: "BEHAVIORAL HISTORY & OBSERVATION",
    other: true,
    questions: [
      {
        id: 1,
        ar: "Eye contact",
        en: "Eye contact",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 2,
        ar: "Responding for calls with name",
        en: "Responding for calls with name",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 3,
        ar: "Show, Share request, Joint attention",
        en: "Show, Share request, Joint attention",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 4,
        ar: "Gestures, pointing",
        en: "Gestures, pointing",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 5,
        ar: "Echolalia",
        en: "Echolalia",
        haveText: false,
        type: "multi",
        options: [
          { value: 0, label: "Early" },
          { value: 1, label: "  Late" },
          { value: 2, label: "Verbal" },
          { value: 3, label: "Nonverbal" },
          { value: 4, label: "Prosody issues" },
          { value: 5, label: "Intonation issues" },
          { value: 6, label: "Formal language" },
        ],
      },
      {
        id: 6,
        ar: "Reciprocity",
        en: "Reciprocity",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 7,
        ar: "Social cues understanding",
        en: "Social cues understanding",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 8,
        ar: "Make relation and maintaining them",
        en: "Make relation and maintaining them",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 9,
        ar: "Understanding facial expressions and empathy with others",
        en: "Understanding facial expressions and empathy with others",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 10,
        ar: "Copy others",
        en: "Copy others",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 11,
        ar: "Imaginative Play",
        en: "Imaginative Play",
        haveText: true,
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: " Normal",
            en: " Normal",
            value: " Normal",
          },
          {
            id: 2,
            ar: "  Not at all",
            en: "  Not at all",
            value: "  Not at all",
          },
        ],
      },
      {
        id: 12,
        ar: "Stereotype behaviors",
        en: "Stereotype behaviors",
        haveText: false,
        type: "multi",
        options: [
          { value: 0, label: " Vocal" },
          { value: 1, label: "  Flapping" },
          { value: 2, label: "Rocking" },
          { value: 3, label: "Spinning" },
          { value: 4, label: "Pacing" },
          { value: 5, label: " Jumping" },
        ],
      },
      {
        id: 13,
        ar: "Specific interests, routine & ritual",
        en: "Specific interests, routine & ritual",
        haveText: true,
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: " No",
            en: " No",
            value: " No",
          },
        ],
      },
      {
        id: 14,
        ar: "Side looking",
        en: "Side looking",
        haveText: true,
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: " No",
            en: " No",
            value: " No",
          },
        ],
      },
      {
        id: 15,
        ar: "Line up objects",
        en: "Line up objects",
        haveText: true,
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: " No",
            en: " No",
            value: " No",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Impression",
    other: false,
    questions: [
      {
        id: 31,
        ar: "",
        en: "",
        haveText: false,
        type: "multi",
        options: [
          { value: 0, label: "ASD" },
          { value: 1, label: " ADHD" },
          { value: 2, label: "ID" },
          { value: 3, label: "GDD" },
          { value: 4, label: "Social pragmatic disorders" },
          { value: 5, label: "ODD" },
          { value: 6, label: "LD" },
          { value: 7, label: "Seizure" },
          { value: 8, label: "Disruptive behaviors" },
          { value: 9, label: " Genetic disorders" },
          { value: 10, label: "Sleep issues" },
          { value: 11, label: "Anxiety" },
          { value: 12, label: "Speech delay" },
          { value: 13, label: "Psychiatrical disorders" },
        ],
      },
    ],
  },
];
function History() {
  const [DataPatientHistory, setDataPatientHistory] = useState([
    {
      id: 1,
      ar: "Eye contact ",
      en: "Eye contact",
      haveText: true,
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 2,
      ar: " Responding for calls with name",
      en: " Responding for calls with name",
      haveText: true,
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 3,
      ar: " Show, Share request, Joint attention",
      en: "Show, Share request, Joint attention",
      haveText: true,
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 4,
      ar: "Gestures, pointing",
      en: "Gestures, pointing",
      haveText: true,
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
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
      haveText: false,
    },
    {
      id: 6,
      ar: "Reciprocity",
      en: "Reciprocity",
      haveText: true,
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 7,
      ar: "Social cues understanding",
      en: "Social cues understanding",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 8,
      ar: "Make relation and maintaining them",
      en: "Make relation and maintaining them",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 9,
      ar: "Understanding facial expressions and empathy with others",
      en: "Understanding facial expressions and empathy with others",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },
    {
      id: 10,
      ar: " Copy others",
      en: " Copy others",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
    },

    {
      id: 11,
      ar: "Imaginative Play",
      en: "Imaginative Play",
      haveText: true, // Add the boolean key
      options: [
        { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
        { id: 2, ar: " Normal", en: " Normal", value: " Normal" },
        {
          id: 3,
          ar: "  Not at all",
          en: "  Not at all",
          value: "  Not at all",
        },
      ],
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
      ar: "Specific interests, routine & ritual",
      en: "Specific interests, routine & ritual",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: " No", en: " No", value: " No" },
      ],
    },
    {
      id: 14,
      ar: "Side looking",
      en: "Side looking",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: " No", en: " No", value: " No" },
      ],
    },
    {
      id: 15,
      ar: "Line up objects",
      en: "Line up objects",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: " No", en: " No", value: " No" },
      ],
    },
    {
      id: 16,
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
      id: 17,
      ar: "Picky eater",
      en: "Picky eater",
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
        { id: 2, ar: " No", en: " No", value: " No" },
      ],
    },
    {
      id: 18,
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
        <Accordion.Item value={"BEHAVIORAL HISTORY & OBSERVATION"}>
          <Accordion.Label>BEHAVIORAL HISTORY & OBSERVATION</Accordion.Label>
          <Accordion.Content>
            <p className="text-xs lg:text-base font-Regular px-3">
              ( DSM-5) autism symptoms& signs{" "}
              <span className="text-grayDark">
                ( if he suspect autism the physician needs to fill these items)
              </span>
            </p>
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
