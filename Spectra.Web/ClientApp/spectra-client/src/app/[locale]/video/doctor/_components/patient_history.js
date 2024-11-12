import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { SurveyForm } from "@/components/swyc/survey-form";
import { CheckIcon, Radio } from "@mantine/core";
import React, { useState } from "react";
const DataPatientHistory = [
  {
    id: 1,
    ar: "Seizure ",
    en: "Seizure",
  },

  {
    id: 2,
    ar: " surgery",
    en: " surgery",
  },
  {
    id: 3,
    ar: " allergies",
    en: "allergies",
  },
  {
    id: 4,
    ar: "medication",
    en: "medication",
  },
  {
    id: 5,
    ar: " hearing test",
    en: " hearing test",
  },
  {
    id: 6,
    ar: "neuroimages",
    en: "neuroimages",
  },
  {
    id: 7,
    ar: "EEG",
    en: "EEG",
  },
  {
    id: 8,
    ar: " lab investigation",
    en: " lab investigation",
  },
  {
    id: 9,
    ar: " genetic result",
    en: " genetic result",
  },
  {
    id: 10,
    ar: "chronic disease",
    en: "chronic disease",
  },
];
const Behavioral = [
  {
    id: 11,
    ar: "Tantrums ",
    en: "Tantrums",
  },

  {
    id: 12,
    ar: " disruptive",
    en: " disruptive",
  },
  {
    id: 13,
    ar: " aggressiveness",
    en: "aggressiveness",
  },
  {
    id: 14,
    ar: "self injury",
    en: "self injury",
  },
];
const Adaptive = [
  {
    id: 15,
    ar: "toilet trained ",
    en: "toilet trained",
  },

  {
    id: 16,
    ar: " dressing",
    en: " dressing",
  },
  {
    id: 17,
    ar: " feeding",
    en: "feeding",
  },
  {
    id: 18,
    ar: "sleeping",
    en: "sleeping",
  },
];
const School = [
  {
    id: 19,
    ar: "toilet trained ",
    en: "toilet trained",
  },
];
function PatientHistory() {
  const [answers, setAnswers] = useState({});
  const [Impression, setImpression] = useState([
    { value: 0, label: "ASD", selected: false },
    { value: 1, label: "ADHD", selected: false },
    { value: 2, label: "ID", selected: false },
    { value: 3, label: "GDD", selected: false },
    { value: 4, label: "Social pragmatic disorders", selected: false },
    { value: 5, label: "GDD", selected: false },
    { value: 6, label: "ODD", selected: false },
    { value: 7, label: "LD", selected: false },
    { value: 8, label: "Seizure", selected: false },
    { value: 9, label: "Disruptive behaviors", selected: false },
    { value: 10, label: "Genetic disorders", selected: false },
    { value: 11, label: "Sleep issues", selected: false },
    { value: 12, label: "Anxiety", selected: false },
    { value: 13, label: "Speech delay", selected: false },
    { value: 14, label: "Psychiatrical disorders", selected: false },
  ]);
  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };
  const toggleSelection = (value) => {
    setImpression((prevImpression) =>
      prevImpression.map((item) =>
        item.value === value ? { ...item, selected: !item.selected } : item
      )
    );
  };
  return (
    <div dir="ltr" className="my-4 flex flex-col gap-5">
      <Accordion>
        <Accordion.Item value={"Birth history"}>
          <Accordion.Label>Birth history</Accordion.Label>
          <Accordion.Content>
            <div className="flex flex-col gap-5 w-full">
              <div className="pb-3 border-b border-grayLight w-full last-of-type:border-none">
                <h3 className="text-xs lg:text-base font-Bold mb-3 lg:mb-4">
                  Term of pregnancy
                </h3>
                <Radio.Group name="favoriteFramework">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <Radio
                      size="xs"
                      value="9 months"
                      label="9 months"
                      icon={CheckIcon}
                      color="#10B0C1"
                      classNames={{
                        label: "text-xs lg:text-base font-Regular",
                        body: "items-center",
                      }}
                    />
                    <Radio
                      size="xs"
                      value="Less than 9 months"
                      label="Less than 9 months"
                      icon={CheckIcon}
                      color="#10B0C1"
                      classNames={{
                        label: "text-xs lg:text-base font-Regular",
                        body: "items-center",
                      }}
                    />
                  </div>
                </Radio.Group>
              </div>
              <div className="pb-3 border-b border-grayLight w-full last-of-type:border-none">
                <h3 className="text-xs lg:text-base font-Bold mb-3 lg:mb-4">
                  Type pf delivery
                </h3>
                <Radio.Group name="favoriteFramework2">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <Radio
                      size="xs"
                      value="normal "
                      label="normal "
                      icon={CheckIcon}
                      color="#10B0C1"
                      classNames={{
                        label: "text-xs lg:text-base font-Regular",
                        body: "items-center",
                      }}
                    />
                    <Radio
                      size="xs"
                      value="C/S "
                      label="C/S "
                      icon={CheckIcon}
                      color="#10B0C1"
                      classNames={{
                        label: "text-xs lg:text-base font-Regular",
                        body: "items-center",
                      }}
                    />
                  </div>
                </Radio.Group>
              </div>
              <div className="pb-3 border-b border-grayLight w-full last-of-type:border-none">
                <Radio.Group name="favoriteFramework3">
                  <div className="flex  flex-col gap-4 lg:gap-5">
                    <div className="flex items-center gap-2 border-b border-grayLight last-of-type:border-none pb-3">
                      <Radio
                        size="xs"
                        value="Cry immediately "
                        label="Cry immediately "
                        icon={CheckIcon}
                        color="#10B0C1"
                        classNames={{
                          label: "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
                          body: "items-center",
                        }}
                      />
                      <TextInput
                        className="flex-1 min-w-[300px]  ms-4"
                        inputClassName={"bg-grayLight/50 h-9"}
                      />
                    </div>
                    <div className="flex items-center gap-2 border-b border-grayLight last-of-type:border-none pb-3">
                      <Radio
                        size="xs"
                        value="NICU admission"
                        label="NICU admission"
                        icon={CheckIcon}
                        color="#10B0C1"
                        classNames={{
                          label: "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
                          body: "items-center",
                        }}
                      />
                      <TextInput
                        className="flex-1 min-w-[300px]  ms-4"
                        inputClassName={"bg-grayLight/50 h-9"}
                      />
                    </div>
                    <div className="flex items-center gap-2 border-b border-grayLight last-of-type:border-none pb-3">
                      <Radio
                        size="xs"
                        value=" Ventilation"
                        label=" Ventilation"
                        icon={CheckIcon}
                        color="#10B0C1"
                        classNames={{
                          label: "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
                          body: "items-center",
                        }}
                      />
                      <TextInput
                        className="flex-1 min-w-[300px]  ms-4"
                        inputClassName={"bg-grayLight/50 h-9"}
                      />
                    </div>
                  </div>
                </Radio.Group>
              </div>
              <div className="pb-3 border-b border-grayLight w-full last-of-type:border-none">
                <h3 className="text-xs lg:text-base font-Bold mb-3 lg:mb-4">
                  Birth weight
                </h3>
                <Radio.Group name="favoriteFramework4">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <Radio
                      size="xs"
                      value="normal "
                      label="normal "
                      icon={CheckIcon}
                      color="#10B0C1"
                      classNames={{
                        label: "text-xs lg:text-base font-Regular",
                        body: "items-center",
                      }}
                    />
                    <div className="flex items-center gap-3">
                      <Radio
                        size="xs"
                        value="low birth weight"
                        label="low birth weight"
                        icon={CheckIcon}
                        color="#10B0C1"
                        classNames={{
                          label: "text-xs lg:text-base font-Regular",
                          body: "items-center",
                        }}
                      />
                      <TextInput
                        className="flex-1 min-w-[300px]  ms-4"
                        inputClassName={"bg-grayLight/50 h-9"}
                        placeholder="Enter the weight in kilograms..."
                      />
                    </div>
                  </div>
                </Radio.Group>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

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
                        <SurveyForm.Answers>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="0"
                            checked={answers[question?.id] === 0}
                            onChange={() => handleSelect(question?.id, 0)}
                          >
                            Yes
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="1"
                            checked={answers[question?.id] === 1}
                            onChange={() => handleSelect(question?.id, 1)}
                          >
                            No
                          </SurveyForm.SingleAnswer>
                        </SurveyForm.Answers>
                        <TextInput
                          className="flex-1 min-w-[300px]  ms-4"
                          inputClassName={"bg-grayLight/50 h-9"}
                        />
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
          <Accordion.Label>Behavioral difficulties</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {Behavioral?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        <SurveyForm.Answers>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="0"
                            checked={answers[question?.id] === 0}
                            onChange={() => handleSelect(question?.id, 0)}
                          >
                            Yes
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="1"
                            checked={answers[question?.id] === 1}
                            onChange={() => handleSelect(question?.id, 1)}
                          >
                            No
                          </SurveyForm.SingleAnswer>
                        </SurveyForm.Answers>
                        <TextInput
                          className="flex-1 min-w-[300px]  ms-4"
                          inputClassName={"bg-grayLight/50 h-9"}
                        />
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
          <Accordion.Label>Behavioral difficulties</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {Adaptive?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        <SurveyForm.Answers>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="0"
                            checked={answers[question?.id] === 0}
                            onChange={() => handleSelect(question?.id, 0)}
                          >
                            Normal
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="1"
                            checked={answers[question?.id] === 1}
                            onChange={() => handleSelect(question?.id, 1)}
                          >
                            Mild delay
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="3"
                            checked={answers[question?.id] === 3}
                            onChange={() => handleSelect(question?.id, 3)}
                          >
                            Significant delay
                          </SurveyForm.SingleAnswer>
                        </SurveyForm.Answers>
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
        <Accordion.Item value={"Type of school"}>
          <Accordion.Label>Type of school</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  {School?.map((question) => (
                    <SurveyForm.QuestionLi
                      key={question?.id}
                      className=" after:!hidden before:hidden pb-0 ps-6 "
                    >
                      <SurveyForm.Question>
                        <SurveyForm.Answers>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="0"
                            checked={answers[question?.id] === 0}
                            onChange={() => handleSelect(question?.id, 0)}
                          >
                            Inclusive (merge)
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="1"
                            checked={answers[question?.id] === 1}
                            onChange={() => handleSelect(question?.id, 1)}
                          >
                            daycare
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="3"
                            checked={answers[question?.id] === 3}
                            onChange={() => handleSelect(question?.id, 3)}
                          >
                            Regular school
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="4"
                            checked={answers[question?.id] === 4}
                            onChange={() => handleSelect(question?.id, 4)}
                          >
                            Autism/ADHD school
                          </SurveyForm.SingleAnswer>
                          <SurveyForm.SingleAnswer
                            name={`${question?.id}`}
                            value="5"
                            checked={answers[question?.id] === 5}
                            onChange={() => handleSelect(question?.id, 5)}
                          >
                            special need school
                          </SurveyForm.SingleAnswer>
                        </SurveyForm.Answers>
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
        <Accordion.Item value={"Family/ social history"}>
          <Accordion.Label>Family/ social history</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                        Consanguinity
                      </SurveyForm.QuestionLabel>
                      <SurveyForm.Answers>
                        <SurveyForm.SingleAnswer
                          name={`Consanguinity`}
                          value="0"
                        >
                          Yes
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer
                          name={`Consanguinity`}
                          value="1"
                        >
                          No
                        </SurveyForm.SingleAnswer>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                        Family history of similar condition or chronic illness
                      </SurveyForm.QuestionLabel>
                      <SurveyForm.Answers>
                        <SurveyForm.SingleAnswer name={`chronic`} value="0">
                          Yes
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer name={`chronic`} value="1">
                          No
                        </SurveyForm.SingleAnswer>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                        House Made
                      </SurveyForm.QuestionLabel>
                      <SurveyForm.Answers>
                        <SurveyForm.SingleAnswer name={`House`} value="0">
                          Yes
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer name={`House`} value="1">
                          No
                        </SurveyForm.SingleAnswer>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.QuestionLabel className="!font-Regular min-w-[100px] lg:min-w-[130px]">
                        Socioeconomic Status
                      </SurveyForm.QuestionLabel>
                      <SurveyForm.Answers>
                        <SurveyForm.SingleAnswer
                          name={`Socioeconomic`}
                          value="0"
                        >
                          Poor
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer
                          name={`Socioeconomic`}
                          value="1"
                        >
                          Average
                        </SurveyForm.SingleAnswer>
                        <SurveyForm.SingleAnswer
                          name={`Socioeconomic`}
                          value="3"
                        >
                          High
                        </SurveyForm.SingleAnswer>
                      </SurveyForm.Answers>
                    </SurveyForm.Question>
                  </SurveyForm.QuestionLi>
                </ul>
              </SurveyForm.Body>
            </SurveyForm>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Impression"}>
          <Accordion.Label>Impression</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className="!p-0">
              <SurveyForm.Body className=" border-none">
                <ul>
                  <SurveyForm.QuestionLi className=" after:!hidden before:hidden pb-0 ps-6 ">
                    <SurveyForm.Question>
                      <SurveyForm.Answers>
                        {Impression?.map(({ value, label, selected }) => (
                          <SurveyForm.MultiAnswers
                            key={value}
                            name={`${label}`}
                            value={value.toString()}
                            checked={selected}
                            onChange={() => toggleSelection(value)}
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

export default PatientHistory;
