import React, { useState } from "react";
import AccordionReport from "./AccordionReport";
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
        haveText: false,
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
        haveText: false,
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
        haveText: false,
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
        id: 16,
        ar: "Sensory issue",
        en: "Sensory issue",
        haveText: false,
        type: "multi",
        options: [
          { value: 0, label: " Hypersensitivity" },
          { value: 1, label: "  Hyposensitivity" },
          { value: 2, label: "To sounds" },
          { value: 3, label: "Sniffing" },
          { value: 4, label: "Licking" },
          { value: 5, label: "  High Pain Threshold" },
          { value: 6, label: " Finger mannerism" },
        ],
      },
      {
        id: 17,
        ar: "Picky eater",
        en: "Picky eater",
        haveText: false,
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
        id: 18,
        ar: "",
        en: "",
        haveText: false,
        type: "multi",
        options: [
          { value: 0, label: "  Staring" },
          { value: 1, label: "  Laughing/crying out of the context" },
          { value: 2, label: "Fancy with lights" },
          { value: 3, label: "Meltdown" },
          { value: 4, label: "Hyperactive" },
          { value: 5, label: "Impulsive" },
          { value: 6, label: "Aggressiveness" },
          { value: 7, label: "Short attention span" },
          { value: 8, label: "Tantrums" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Examination",
    other: false,
    questions: [
      {
        id: 19,
        ar: "Dysmorphic Features",
        en: "Dysmorphic Features",
        haveText: false, // Add the boolean key
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
        ar: "",
        en: "",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "CNS" },
          { value: 1, label: "Squint" },
          { value: 2, label: "Drooling" },
          { value: 3, label: "Neurocutaneous Stigmata." },
        ],
      },
    ],
  },
];
function History() {
  const [answers, setAnswers] = useState({});
  return (
    <div dir="ltr" className="my-4 flex flex-col gap-5">
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

export default History;
