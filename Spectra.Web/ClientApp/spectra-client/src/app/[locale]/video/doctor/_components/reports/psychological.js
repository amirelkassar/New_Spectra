import React, { useState } from "react";
import AccordionReport from "./AccordionReport";
import { Accordion } from "@/components/accordion";
import { Textarea } from "@/components/inputs/textarea";
import { Checkbox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const DataAll = [
  {
    id: 1,
    title: "Interpersonal dynamics with significant members",
    other: false,
    questions: [
      {
        id: 7,
        ar: "Friends",
        en: "Friends",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Appropriate", en: "Appropriate", value: "Appropriate" },
          {
            id: 2,
            ar: "Inappropriate",
            en: "Inappropriate",
            value: "Inappropriate",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No form of interaction",
            en: "No form of interaction",
            value: "No form of interaction",
          },
        ],
      },
      {
        id: 8,
        ar: "Community",
        en: "Community",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Appropriate", en: "Appropriate", value: "Appropriate" },
          {
            id: 2,
            ar: "Inappropriate",
            en: "Inappropriate",
            value: "Inappropriate",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No form of interaction",
            en: "No form of interaction",
            value: "No form of interaction",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Impact of patient’s Injury/ Condition on family/ Support system",
    other: false,
    questions: [
      {
        id: 7,
        ar: "Parent",
        en: "Parent",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Anger" },
          { value: 1, label: " Depression" },
          { value: 2, label: "Denial" },
          { value: 3, label: "Financial hardship" },
          { value: 4, label: " Embarrassment" },
          { value: 5, label: " Abandonment" },
          { value: 6, label: " Separation" },
          { value: 7, label: "  N/A" },
        ],
      },
      {
        id: 8,
        ar: "Siblings",
        en: "Siblings",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Anger" },
          { value: 1, label: " Depression" },
          { value: 2, label: "Denial" },
          { value: 3, label: "Financial hardship" },
          { value: 4, label: " Embarrassment" },
          { value: 5, label: " Abandonment" },
          { value: 6, label: " Separation" },
          { value: 7, label: "  N/A" },
        ],
      },
      {
        id: 9,
        ar: "Friends",
        en: "Friends",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Anger" },
          { value: 1, label: " Depression" },
          { value: 2, label: "Denial" },
          { value: 3, label: "Financial hardship" },
          { value: 4, label: " Embarrassment" },
          { value: 5, label: " Abandonment" },
          { value: 6, label: " Separation" },
          { value: 7, label: "  N/A" },
        ],
      },
      {
        id: 10,
        ar: "School’s peers",
        en: "School’s peers",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Anger" },
          { value: 1, label: " Depression" },
          { value: 2, label: "Denial" },
          { value: 3, label: "Financial hardship" },
          { value: 4, label: " Embarrassment" },
          { value: 5, label: " Abandonment" },
          { value: 6, label: " Separation" },
          { value: 7, label: "  N/A" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Evaluation of family/Support system",
    other: false,
    questions: [
      {
        id: 11,
        ar: "Social Support",
        en: "Social Support",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: "Fair",
            en: "Fair",
            value: "Fair",
          },
          { id: 3, ar: " Good", en: " Good", value: " Good" },
          {
            id: 4,
            ar: "Unknown",
            en: "Unknown",
            value: "Unknown",
          },
          { id: 5, ar: " Other", en: " Other", value: " Other" },
        ],
      },
      {
        id: 12,
        ar: "Carer Status",
        en: "Carer Status",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: " No Caregiver",
            en: " No Caregiver",
            value: " No Caregiver",
          },
          {
            id: 2,
            ar: " Family member",
            en: " Family member",
            value: " Family member",
          },
          {
            id: 3,
            ar: " Non-family member",
            en: " Non-family member",
            value: " Non-family member",
          },
          {
            id: 4,
            ar: "Temporary non-family member",
            en: "Temporary non-family member",
            value: "Temporary non-family member",
          },
        ],
      },
      {
        id: 13,
        ar: "Carer characteristics:",
        en: "Carer characteristics:",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: "Facilitating rehab goals",
            en: "Facilitating rehab goals",
            value: "Facilitating rehab goals",
          },
          {
            id: 2,
            ar: "Delaying rehab goals",
            en: "Delaying rehab goals",
            value: "Delaying rehab goals",
          },
          {
            id: 3,
            ar: "No active rule in rehab",
            en: "No active rule in rehab",
            value: "No active rule in rehab",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Patient Previous History",
    other: false,
    questions: [
      {
        id: 14,
        ar: "Social Stressors",
        en: "Social Stressors",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No information available",
            en: "No information available",
            value: "No information available",
          },
        ],
      },
      {
        id: 15,
        ar: "Financial Stressors",
        en: "Financial Stressors",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No information available",
            en: "No information available",
            value: "No information available",
          },
        ],
      },
      {
        id: 16,
        ar: "Psychiatric History",
        en: "Psychiatric History",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No information available",
            en: "No information available",
            value: "No information available",
          },
        ],
      },
      {
        id: 17,
        ar: "Neurological History",
        en: "Neurological History",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
          {
            id: 2,
            ar: "No",
            en: "No",
            value: "No",
          },
          { id: 3, ar: " Limited", en: " Limited", value: " Limited" },
          {
            id: 4,
            ar: "No information available",
            en: "No information available",
            value: "No information available",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Academic difficulty",
    other: false,
    questions: [
      {
        id: 18,
        ar: "History of learning difficulties:",
        en: "History of learning difficulties:",
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
    ],
  },
  {
    id: 6,
    title: "Play Characteristics",
    other: false,
    questions: [
      {
        id: 19,
        ar: "",
        en: "",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Not applicable" },
          { value: 1, label: " Developmentally appropriate" },
          { value: 2, label: "Exploratory / sensorimotor" },
          { value: 3, label: " Concrete" },
          { value: 4, label: "  Imitative" },
          { value: 5, label: "  Spontaneous relational play on self" },
          { value: 6, label: " Spontaneous pretend or symbolic play" },
          { value: 7, label: " Solo play" },
          { value: 8, label: " Parallel play" },
          { value: 9, label: " Spontaneous turn taking" },
          { value: 10, label: "Simple interactive play" },
          { value: 11, label: "  Conjoint play" },
          { value: 12, label: "Rigid/ restricted play" },
          { value: 13, label: "  No toy play" },
          { value: 14, label: "  Stereotyped" },
          { value: 15, label: "  Creative" },
          { value: 16, label: "Aggressive" },
          { value: 17, label: "Sexualized themes" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Social Behaviour and Attitude",
    other: true,
    questions: [
      {
        id: 20,
        ar: "Appropriateness",
        en: "Appropriateness",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: "Acceptable",
            en: "Acceptable",
            value: "Acceptable",
          },
          {
            id: 3,
            ar: "Good",
            en: "Good",
            value: "Good",
          },
        ],
      },
      {
        id: 21,
        ar: "Eye contact:",
        en: "Eye contact:",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Poor", en: "Poor", value: "Poor" },
          {
            id: 2,
            ar: "Acceptable",
            en: "Acceptable",
            value: "Acceptable",
          },
          {
            id: 3,
            ar: "Good",
            en: "Good",
            value: "Good",
          },
          {
            id: 4,
            ar: "Avoiding eye context",
            en: "Avoiding eye context",
            value: "Avoiding eye context",
          },
        ],
      },
      {
        id: 22,
        ar: "Attitude:",
        en: "Attitude:",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: " Cooperative",
            en: " Cooperative",
            value: " Cooperative",
          },
          {
            id: 2,
            ar: "Secretive",
            en: "Secretive",
            value: "Secretive",
          },
          {
            id: 3,
            ar: "Granted",
            en: "Granted",
            value: "Granted",
          },
          {
            id: 4,
            ar: " Suspicion",
            en: " Suspicion",
            value: " Suspicion",
          },
          {
            id: 5,
            ar: "  Defensive",
            en: "  Defensive",
            value: "  Defensive",
          },
          {
            id: 6,
            ar: " Hostile",
            en: " Hostile",
            value: " Hostile",
          },
          {
            id: 7,
            ar: "  Mute",
            en: "  Mute",
            value: "  Mute",
          },
          {
            id: 8,
            ar: " Evasive",
            en: " Evasive",
            value: " Evasive",
          },
          {
            id: 9,
            ar: "  Aggressive",
            en: "  Aggressive",
            value: "  Aggressive",
          },
          {
            id: 10,
            ar: "  Open",
            en: "  Open",
            value: "  Open",
          },
          {
            id: 11,
            ar: " Uncomfortable",
            en: " Uncomfortable",
            value: " Uncomfortable",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Speech and Language",
    other: false,
    questions: [
      {
        id: 23,
        ar: "Quantity",
        en: "Quantity",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Talkative", en: "Talkative", value: "Talkative" },
          {
            id: 2,
            ar: "Spontaneous",
            en: "Spontaneous",
            value: "Spontaneous",
          },
          {
            id: 3,
            ar: "Paucity",
            en: "Paucity",
            value: "Paucity",
          },
          {
            id: 4,
            ar: "Poverty",
            en: "Poverty",
            value: "Poverty",
          },
        ],
      },
      {
        id: 24,
        ar: "Rate",
        en: "Rate",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: " Fast", en: " Fast", value: " Fast" },
          {
            id: 2,
            ar: "Slow",
            en: "Slow",
            value: "Slow",
          },
          {
            id: 3,
            ar: "Normal",
            en: "Normal",
            value: "Normal",
          },
          {
            id: 4,
            ar: "Pressured",
            en: "Pressured",
            value: "Pressured",
          },
        ],
      },
      {
        id: 25,
        ar: "Volume",
        en: "Volume",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "  Loud", en: "  Loud", value: "  Loud" },
          {
            id: 2,
            ar: "Soft",
            en: "Soft",
            value: "Soft",
          },
          {
            id: 3,
            ar: " Monotone",
            en: " Monotone",
            value: " Monotone",
          },
          {
            id: 4,
            ar: "Weak",
            en: "Weak",
            value: "Weak",
          },
          {
            id: 5,
            ar: " Strong",
            en: " Strong",
            value: " Strong",
          },
        ],
      },
      {
        id: 26,
        ar: "Fluency",
        en: "Fluency",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: " Normal" },
          { value: 1, label: " Clear" },
          { value: 2, label: "Expressive aphasia" },
          { value: 3, label: "Receptive aphasia" },
          { value: 4, label: " Global aphasia" },
          { value: 5, label: " Paraphasia" },
          { value: 6, label: " Dysarthria" },
          { value: 7, label: " Apraxic speech" },
          { value: 8, label: " Stuttering" },
        ],
      },
      {
        id: 27,
        ar: "Grammatical",
        en: "Grammatical",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: "Correct syntax",
            en: "Correct syntax",
            value: "Correct syntax",
          },
          {
            id: 2,
            ar: "Articulated",
            en: "Articulated",
            value: "Articulated",
          },
          ,
        ],
      },
      {
        id: 28,
        ar: "Content",
        en: "Content",
        haveText: false, // Add the boolean key
        options: [
          {
            id: 1,
            ar: "Directed",
            en: "Directed",
            value: "Directed",
          },
          {
            id: 2,
            ar: "Coherent",
            en: "Coherent",
            value: "Coherent",
          },
          ,
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Affect and Mood",
    other: false,
    questions: [
      {
        id: 29,
        ar: "Affect",
        en: "Affect",
        haveText: true, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Normal" },
          { value: 1, label: " Hostile" },
          { value: 2, label: "Hostile" },
          { value: 3, label: "Inappropriate" },
          { value: 4, label: "Blunt" },
          { value: 5, label: "Flat" },
        ],
      },
      {
        id: 30,
        ar: "Mood",
        en: "Mood",
        haveText: true, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Euthymic" },
          { value: 1, label: " Depressed" },
          { value: 2, label: "Euphoric" },
          { value: 3, label: "Anxious" },
          { value: 4, label: "Angry" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Cognition",
    other: true,
    questions: [
      {
        id: 31,
        ar: "Sustains Attention",
        en: "Sustains Attention",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 32,
        ar: "Shifting Attention",
        en: "Shifting Attention",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 33,
        ar: "Selective Attention",
        en: "Selective Attention",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 34,
        ar: "Alternating Attention",
        en: "Alternating Attention",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 35,
        ar: "Short- term memory",
        en: "Short- term memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 36,
        ar: "Episodic memory",
        en: "Episodic memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 37,
        ar: "Prospective memory",
        en: "Prospective memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 38,
        ar: "Semantic memory",
        en: "Semantic memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 39,
        ar: "Working memory",
        en: "Working memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
      {
        id: 40,
        ar: "Long-term memory",
        en: "Long-term memory",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Impaired", en: "Impaired", value: "Impaired" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Thoughts",
    other: false,
    questions: [
      {
        id: 41,
        ar: "Thoughts Process",
        en: "Thoughts Process",
        haveText: true, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Normal" },
          { value: 1, label: " Coherent" },
          { value: 2, label: "Flight of ideas" },
          { value: 3, label: "Circumstantial" },
          { value: 4, label: "Vagueness of thinking" },
          { value: 5, label: "Confabulation" },
          { value: 6, label: "Thought blocking" },
        ],
      },
      {
        id: 42,
        ar: "Insigh",
        en: "Insigh",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Partial", en: "Partial", value: "Partial" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
          {
            id: 3,
            ar: "Poor",
            en: "Poor",
            value: "Poor",
          },
        ],
      },
      {
        id: 43,
        ar: "Judgment",
        en: "Judgment",
        haveText: false, // Add the boolean key
        options: [
          { id: 1, ar: "Partial", en: "Partial", value: "Partial" },
          {
            id: 2,
            ar: "WFL",
            en: "WFL",
            value: "WFL",
          },
          {
            id: 3,
            ar: "Poor",
            en: "Poor",
            value: "Poor",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Risk Assessments:",
    other: false,
    questions: [
      {
        id: 44,
        ar: "Risk of unsafety decision",
        en: "Risk of unsafety decision",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "High" },
          { value: 1, label: " Low" },
          { value: 2, label: "Self-report" },
          { value: 3, label: "Carer -report" },
          { value: 4, label: "Clinical evidence " },
          { value: 5, label: "Patient is alerted" },
          { value: 6, label: "Carer is alerted" },
        ],
      },
      {
        id: 45,
        ar: "Risk of violent behavior",
        en: "Risk of violent behavior",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "High" },
          { value: 1, label: " Low" },
          { value: 2, label: "Self-report" },
          { value: 3, label: "Carer -report" },
          { value: 4, label: "Clinical evidence " },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Recommendations & Goals",
    other: true,
    questions: [
      {
        id: 46,
        ar: "Recommendations & Goals: Goals for current (short-term goals):",
        en: "Recommendations & Goals: Goals for current (short-term goals):",
        haveText: false, // Add the boolean key
        type: "multi",
        options: [
          { value: 0, label: "Cognitive rehabilitation Training" },
          { value: 1, label: " Cognitive Behavioral Therapy (CBT)" },
          { value: 2, label: "Patient/family education" },
          { value: 3, label: "Behavioral modification intervention" },
          { value: 4, label: "Recreational therapy " },
          { value: 5, label: "Coping skills training" },
          { value: 6, label: "Problem solving training" },
          { value: 7, label: "Family counselling" },
        ],
      },
    ],
  },
];
function Psychological() {
  const [answers, setAnswers] = useState({});
  const phoneSize = useMediaQuery("(max-width: 768px)");
  return (
    <div dir="ltr" className="my-4 flex flex-col gap-5">
      <Accordion classNames={{ content: "px-0 " }}>
        <Accordion.Item value={"Reason for Referral"}>
          <Accordion.Label>Reason for Referral</Accordion.Label>
          <Accordion.Content>
            <div>
              <Checkbox.Group color="#10B0C1" defaultValue={["Psychological"]}>
                <div className="flex flex-col mb-3 lg:mb-6">
                  <Checkbox
                    value="Diagnostic"
                    label="Diagnostic psychrometries ( Autism, ADHD, ID, ODD, Anxiety, Adaptive…)"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                  <Checkbox
                    value="General"
                    label="General /Psychological evaluation"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                  <Checkbox
                    value="Cognitive"
                    label="Cognitive evaluation"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                  <Checkbox
                    value="behaviour"
                    label="Mood/behaviour evaluation"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                  <Checkbox
                    value="support"
                    label="Patient/family education/ counselling/support"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                  <Checkbox
                    value="Psychological"
                    label="Psychological evaluation/intervention for mental health problem"
                    color="#10B0C1"
                    size={phoneSize ? "xs" : "sm"}
                    classNames={{
                      label: "text-sm lg:text-base ",
                      body: "px-3  lg:px-5 py-2 lg:py-4",
                      root: "data-[checked]:bg-blueLight  duration-200 ",
                    }}
                  />
                </div>
              </Checkbox.Group>
            </div>
            <div className="flex gap-3 p-3">
              <h3>Other</h3>
              <Textarea
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                className="flex-1 min-w-[300px]  ms-4"
              />
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

export default Psychological;
