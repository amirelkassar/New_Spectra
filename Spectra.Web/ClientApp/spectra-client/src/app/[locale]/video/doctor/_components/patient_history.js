import { Accordion } from "@/components/accordion";
import TextInput from "@/components/inputs/text-input";
import { CheckIcon, Radio } from "@mantine/core";
import React, { useState } from "react";
import AccordionReport from "./reports/AccordionReport";

const DataAll = [
  {
    id: 1,
    title: "Past medical history",
    other: false,
    questions: [
      {
        id: 7,
        ar: "Seizure",
        en: "Seizure",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 8,
        ar: " surgery",
        en: " surgery",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 9,
        ar: " allergies",
        en: "allergies",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 10,
        ar: "medication",
        en: "medication",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 11,
        ar: " hearing test",
        en: " hearing test",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 12,
        ar: "neuroimages",
        en: "neuroimages",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 13,
        ar: "EEG",
        en: "EEG",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 14,
        ar: " lab investigation",
        en: " lab investigation",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 15,
        ar: " genetic result",
        en: " genetic result",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 16,
        ar: "chronic disease",
        en: "chronic disease",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Behavioral difficulties",
    other: false,
    questions: [
      {
        id: 17,
        ar: "Tantrums",
        en: "Tantrums",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 18,
        ar: "disruptive",
        en: "disruptive",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 19,
        ar: "aggressiveness",
        en: "aggressiveness",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
      {
        id: 20,
        ar: "self injury",
        en: "self injury",
        haveText: true, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Social adaptive",
    other: false,
    questions: [
      {
        id: 21,
        ar: "toilet trained",
        en: "toilet trained",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Normal", en: "Normal", value: "Normal" },
          {
            id: 2,
            ar: "Mild delay",
            en: "Mild delay",
            value: "Mild delay",
          },
          {
            id: 3,
            ar: "Significant delay",
            en: "Significant delay",
            value: "Significant delay",
          },
        ],
      },
      {
        id: 22,
        ar: "dressing",
        en: "dressing",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Normal", en: "Normal", value: "Normal" },
          {
            id: 2,
            ar: "Mild delay",
            en: "Mild delay",
            value: "Mild delay",
          },
          {
            id: 3,
            ar: "Significant delay",
            en: "Significant delay",
            value: "Significant delay",
          },
        ],
      },
      {
        id: 23,
        ar: "feeding",
        en: "feeding",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Normal", en: "Normal", value: "Normal" },
          {
            id: 2,
            ar: "Mild delay",
            en: "Mild delay",
            value: "Mild delay",
          },
          {
            id: 3,
            ar: "Significant delay",
            en: "Significant delay",
            value: "Significant delay",
          },
        ],
      },
      {
        id: 24,
        ar: "sleeping",
        en: "sleeping",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Normal", en: "Normal", value: "Normal" },
          {
            id: 2,
            ar: "Mild delay",
            en: "Mild delay",
            value: "Mild delay",
          },
          {
            id: 3,
            ar: "Significant delay",
            en: "Significant delay",
            value: "Significant delay",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Type of school",
    other: false,
    questions: [
      {
        id: 25,
        ar: "",
        en: "",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: "Inclusive (merge)",
            en: "Inclusive (merge)",
            value: "Inclusive (merge)",
          },
          {
            id: 2,
            ar: "daycare",
            en: "daycare",
            value: "daycare",
          },
          {
            id: 3,
            ar: "Regular school",
            en: "Regular school",
            value: "Regular school",
          },
          {
            id: 4,
            ar: " Autism/ADHD school",
            en: " Autism/ADHD school",
            value: " Autism/ADHD school",
          },
          {
            id: 5,
            ar: "special need school",
            en: "special need school",
            value: "special need school",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Family/ social history",
    other: false,
    questions: [
      {
        id: 26,
        ar: "Consanguinity",
        en: "Consanguinity",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          { id: 2, ar: "No", en: "No", value: "No" },
        ],
      },
      {
        id: 27,
        ar: "Parent’s Occupation",
        en: "Parent’s Occupation",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Father Working" },
          { value: 1, label: " Mother Working" },
          { value: 2, label: "Housewife" },
        ],
      },
      {
        id: 28,
        ar: "Family history of similar condition or chronic illness",
        en: "Family history of similar condition or chronic illness",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          { id: 2, ar: "No", en: "No", value: "No" },
        ],
      },
      {
        id: 29,
        ar: "House  Made",
        en: "House  Made",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          { id: 2, ar: "No", en: "No", value: "No" },
        ],
      },
      {
        id: 30,
        ar: "Socioeconomic Status",
        en: "Socioeconomic Status",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          { id: 2, ar: "Average", en: "Average", value: "Average" },
          { id: 3, ar: "High", en: "High", value: "High" },
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
        haveText: false, // Add the boolean key
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
function PatientHistory() {
  const [answers, setAnswers] = useState({});

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
                          label:
                            "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
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
                          label:
                            "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
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
                          label:
                            "text-xs lg:text-base font-Regular min-w-[100px] lg:min-w-[130px]",
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
      {DataAll.map((data, index) => {
        return (
          <AccordionReport
            key={index}
            data={data}
            answers={answers}
            setAnswers={setAnswers}
          />
        );
      })}
    </div>
  );
}

export default PatientHistory;
