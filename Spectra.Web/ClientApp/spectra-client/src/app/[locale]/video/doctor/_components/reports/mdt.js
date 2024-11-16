"use client";
import React, { useState } from "react";
import AccordionReport from "./AccordionReport";

function MDT() {
  const DataAll = [
    {
      id: 0,
      title: "School / Center situation",
      other: false,
      questions: [
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
          id: 3433,
          ar: "Recognizing basic  shapes",
          en: "Recognizing basic  shapes",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Circle" },
            { value: 1, label: " Square" },
            { value: 2, label: "Triangle" },
            { value: 3, label: "Rectangle" },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Communication",
      other: false,
      questions: [
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
      ],
    },
    {
      id: 2,
      title: "Behaviors",
      other: false,
      questions: [
        {
          id: 5,
          ar: "Withdrawn  behaviors ",
          en: "Withdrawn  behaviors",
          haveText: true, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Shyness", selected: false },
            { value: 1, label: " Rocking", selected: false },
            { value: 2, label: "Staring", selected: false },
            { value: 3, label: "Anxiety", selected: false },
            { value: 4, label: "Social isolation", selected: false },
            { value: 5, label: " Hand flapping", selected: false },
          ],
        },
        {
          id: 6,
          ar: "Disruptive behaviors",
          en: "Disruptive behaviors",
          haveText: true, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Tantrums", selected: false },
            { value: 1, label: " Screaming", selected: false },
            {
              value: 2,
              label: "Refusing to follow instructions",
              selected: false,
            },
            { value: 3, label: "Throwing objects", selected: false },
          ],
        },
        {
          id: 7,
          ar: "Violent and/or  unsafe behaviors",
          en: "Violent and/or  unsafe behaviors",
          haveText: true, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Head banging", selected: false },
            { value: 1, label: " Kicking", selected: false },
            { value: 2, label: "Biting", selected: false },
            { value: 3, label: " Punching", selected: false },
            { value: 4, label: "  Fighting", selected: false },
            { value: 5, label: " Running away", selected: false },
            {
              value: 6,
              label: " Smashing  equipment or furniture",
              selected: false,
            },
            { value: 7, label: " Self-harm", selected: false },
          ],
        },
        {
          id: 8,
          ar: "Follow commands",
          en: "Follow commands",
          haveText: false, // Add the boolean key
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
          id: 800,
          ar: "Sitting tolerance",
          en: "Sitting tolerance",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "0 - 5 m", en: "0 - 5 m", value: "0 - 5 m" },
            {
              id: 2,
              ar: " 5 - 15 m",
              en: "  5 - 15 m",
              value: "  5 - 15 m",
            },
            {
              id: 3,
              ar: " More than 15 m",
              en: "  More than 15 m",
              value: "  More than 15 m",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Social and play skills",
      other: false,
      questions: [
        {
          id: 9,
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
          id: 10,
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
          id: 11,
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
          id: 12,
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
          id: 13,
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
      ],
    },
    {
      id: 4,
      title: "Social and play skills",
      other: false,
      questions: [
        {
          id: 14,
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
          id: 15,
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
          id: 16,
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
          id: 17,
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
          id: 18,
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
      ],
    },
    {
      id: 5,
      title: "ADL skills",
      other: false,
      questions: [
        {
          id: 19,
          ar: "Dressing ",
          en: "Dressing",
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
          ar: "Eating",
          en: "Eating",
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
          id: 21,
          ar: "Toileting",
          en: "Toileting",
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
      title: "Sensory",
      other: false,
      questions: [
        {
          id: 22,
          ar: "Sensory  over-responsivity ",
          en: "Sensory  over-responsivity",
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
          id: 23,
          ar: "Sensory  under-responsivity",
          en: "Sensory  under-responsivity",
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
          id: 24,
          ar: "Sensory seeking",
          en: "Sensory seeking",
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
      id: 7,
      title: "Gross motor skills",
      other: false,
      questions: [
        {
          id: 25,
          ar: "Sitting ",
          en: "Sitting",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: "No",
              en: "No",
              value: "No",
            },
            {
              id: 3,
              ar: "N/A",
              en: "N/A",
              value: "N/A",
            },
          ],
        },
        {
          id: 26,
          ar: "Standing",
          en: "Standing",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: "No",
              en: "No",
              value: "No",
            },
            {
              id: 3,
              ar: "N/A",
              en: "N/A",
              value: "N/A",
            },
          ],
        },
        {
          id: 27,
          ar: "Walking",
          en: "Walking",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: "No",
              en: "No",
              value: "No",
            },
            {
              id: 3,
              ar: "N/A",
              en: "N/A",
              value: "N/A",
            },
          ],
        },
        {
          id: 28,
          ar: "Jumping",
          en: "Jumping",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: "No",
              en: "No",
              value: "No",
            },
            {
              id: 3,
              ar: "N/A",
              en: "N/A",
              value: "N/A",
            },
          ],
        },
        {
          id: 29,
          ar: "Throwing a ball",
          en: "Throwing a ball",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: "No",
              en: "No",
              value: "No",
            },
            {
              id: 3,
              ar: "N/A",
              en: "N/A",
              value: "N/A",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Pre-academic skills",
      other: false,
      questions: [
        {
          id: 30,
          ar: "Recognize body  parts ",
          en: "Recognize body  parts",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Head", selected: false },
            { value: 1, label: "Hair", selected: false },
            { value: 2, label: "Eyes", selected: false },
            { value: 3, label: "Nose", selected: false },
            { value: 4, label: "Mouth", selected: false },
            { value: 5, label: "Ears", selected: false },
            { value: 6, label: "Hands", selected: false },
            { value: 7, label: "Feet", selected: false },
          ],
        },
        {
          id: 31,
          ar: "Matching (colors,  shapes ...etc.)",
          en: "Matching (colors,  shapes ...etc.)",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: " No",
              en: " No",
              value: " No",
            },
            {
              id: 3,
              ar: " N/A",
              en: " N/A",
              value: " N/A",
            },
          ],
        },
        {
          id: 32,
          ar: "Sorting (colors,  shapes ...etc.)",
          en: "Sorting (colors,  shapes ...etc.)",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: " No",
              en: " No",
              value: " No",
            },
            {
              id: 3,
              ar: " N/A",
              en: " N/A",
              value: " N/A",
            },
          ],
        },
        {
          id: 33,
          ar: "Recognizing basic  colors",
          en: "Recognizing basic  colors",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Red", selected: false },
            { value: 1, label: "Blue", selected: false },
            { value: 2, label: "Yellow", selected: false },
            { value: 3, label: "Green", selected: false },
          ],
        },
        {
          id: 34,
          ar: "Recognizing basic  shapes",
          en: "Recognizing basic  shapes",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Circle", selected: false },
            { value: 1, label: " Square", selected: false },
            { value: 2, label: "Triangle", selected: false },
            { value: 3, label: "Rectangle", selected: false },
          ],
        },
        {
          id: 35,
          ar: "Counting",
          en: "Counting",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: " No",
              en: " No",
              value: " No",
            },
            {
              id: 3,
              ar: " N/A",
              en: " N/A",
              value: " N/A",
            },
          ],
        },
        {
          id: 36,
          ar: "Quantity",
          en: "Quantity",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Yes", en: "Yes", value: "Yes" },
            {
              id: 2,
              ar: " No",
              en: " No",
              value: " No",
            },
            {
              id: 3,
              ar: " N/A",
              en: " N/A",
              value: " N/A",
            },
          ],
        },
        {
          id: 37,
          ar: "Holding the pen",
          en: "Holding the pen",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Palmer supinate grasp", selected: false },
            { value: 1, label: " Digital pronate grasp", selected: false },
            { value: 2, label: " Digital grasp", selected: false },
            { value: 3, label: " Quadruped grasp", selected: false },
            { value: 4, label: " Dynamic tripod grip", selected: false },
          ],
        },
        {
          id: 38,
          ar: "Drawing simple shapes",
          en: "Drawing simple shapes",
          haveText: false, // Add the boolean key
          type: "multi",
          options: [
            { value: 0, label: "Vertical line", selected: false },
            { value: 1, label: "Horizontal line", selected: false },
            { value: 2, label: " Circle", selected: false },
            { value: 3, label: "Cross ", selected: false },
            { value: 4, label: " Square", selected: false },
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Academic skills",
      other: true,
      questions: [
        {
          id: 39,
          ar: "Reading ",
          en: "Reading",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Alphabet", en: "Alphabet", value: "Alphabet" },
            {
              id: 2,
              ar: " Numbers",
              en: " Numbers",
              value: " Numbers",
            },
            {
              id: 3,
              ar: " Words",
              en: " Words",
              value: " Words",
            },
          ],
        },
        {
          id: 40,
          ar: "Writing",
          en: "Writing",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Alphabet", en: "Alphabet", value: "Alphabet" },
            {
              id: 2,
              ar: " Numbers",
              en: " Numbers",
              value: " Numbers",
            },
            {
              id: 3,
              ar: " Words",
              en: " Words",
              value: " Words",
            },
          ],
        },
        {
          id: 41,
          ar: "Mathematics",
          en: "Mathematics",
          haveText: false, // Add the boolean key
          options: [
            { id: 1, ar: "Alphabet", en: "Alphabet", value: "Alphabet" },
            {
              id: 2,
              ar: " Numbers",
              en: " Numbers",
              value: " Numbers",
            },
            {
              id: 3,
              ar: " Words",
              en: " Words",
              value: " Words",
            },
          ],
        },
      ],
    },
  ];

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

export default MDT;
