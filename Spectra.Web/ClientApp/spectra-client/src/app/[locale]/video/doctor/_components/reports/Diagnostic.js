"use client";
import ArrowSolidIcon from "@/assets/icons/arrowSolid";
import { Textarea } from "@/components/inputs/textarea";
import { Checkbox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
const sections = [
  {
    title: "Past medical history",
    items: ["Seizure", "surgery", "allergies", "medication", "hearing test"],
  },
  {
    title: "General complaints",
    items: [
      "Speech delay",
      "attention/ hyperactivity issues",
      "social skills delay",
    ],
  },
  {
    title: "Screening results",
    items: [
      {
        name: "Developmental Milestones",
        tag: "Needs Review",
      },
      {
        name: "Baby Pediatric Symptom Checklist (BPSC)",
        score: 6,
        status: "at risk",
      },
    ],
  },
  {
    title: "Investigations",
    items: ["CBC, U&E, LFT", "Vitamin D", "Prolactin"],
  },
  {
    title: "Referrals",
    items: ["Neurology", "Genetics"],
  },
  {
    title: "Internal examinations",
    items: ["Cats"], // Placeholder for demonstration
  },
  {
    title: "Comprehensive assessment of growth and development",
    items: [
      {
        category: "Social and Behavioral Assessment",
        assessments: [
          { name: "Social adaptive", level: "Mild" },
          { name: "Behavioral history & observation", level: "Mild" },
        ],
      },
      {
        category: "Communication and Speech Assessment",
        assessments: [
          { name: "Oral Motor Examination", level: "Mild" },
          { name: "Non-verbal communication", level: "Mild" },
          { name: "Verbal Communication", level: "Mild" },
        ],
      },
      {
        category: "Psychological Initial Assessment",
        assessments: [
          { name: "Psychological Initial Assessment", level: "Mild" },
        ],
      },
      {
        category: "Multidisciplinary Team Assessment (MDT)",
        assessments: [
          { name: "Social and play skills", level: "Mild" },
          { name: "Social and play skills", level: "Mild" },
        ],
      },
    ],
  },
  {
    title:
      "The patient was assessed by a multidisciplinary team of specialists at SPECTRA Diagnostic services through Telehealth. The clinical impression and diagnosis were made based on the following sources of information and evaluations:",
    items: [
      "Physician evaluation (DSM-5)",
      "Parent reports",
      "Psychological Initial Assessment",
      "Multidisciplinary Team",
    ],
  },
  {
    title: "Diagnostic Assessment package / Services",
    items: ["Diagnostic Evaluation Set"],
  },
  {
    title: "The Final Diagnosis",
    items: [
      "Autism (autism spectrum disorder), with difficulty with social communication and repetitive behaviors.",
      {
        name: "level:",
        tag: "3",
      },
      "Autism score: CARS moderate to severe score",
      {
        category: "",
        assessments: [{ name: "Developmental delay", level: "Mild" }],
      },
    ],
  },
];

function Diagnostic() {
  const [data, setData] = useState([
    {
      name: "Dr. Ahmed Samir",
      title: "Pediatric Specialist",
      description: [
        "Educational and training interventions such as cognitive behavioral therapy (ABA) to improve communication skills.",
        "Therapy sessions for language and speech development.",
      ],
      checked: true,
    },
    {
      name: "Ms. Sara Hamed",
      title: "Psychologist",
      description: [
        "Review with a specialist in developing children's social skills.",
      ],
      checked: true,
    },
    {
      name: "Mr. Tamer Adel",
      title: "Occupational Therapist",
      description: [
        "Work with the family to teach them ways to deal with the child and provide psychological support.",
      ],
      checked: false,
    },
  ]);
  const phoneSize = useMediaQuery("(max-width: 768px)");

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].checked = !updatedData[index].checked;
    setData(updatedData);
  };
  return (
    <div dir="ltr" className="flex flex-col lg:gap-6 my-3">
      <div className=" mx-1 lg:mx-8 lg:my-3 flex flex-col gap-3 lg:gap-5  lg:border-2 border-blueLight rounded-xl py-4 ">
        {sections.map((section, index) => {
          return (
            <div
              key={index}
              className="border-2 lg:!border-b-2 border-grayLight rounded-xl lg:rounded-none lg:last-of-type:border-none lg:border-t-0 lg:border-x-0 mb-1 lg:mb-0 py-3 lg:py-0"
            >
              <div className="flex items-center gap-2 lg:gap-4 mb-4 px-4 lg:px-7">
                <ArrowSolidIcon className={"h-auto w-2 lg:w-[13px] min-w-2"} />
                <h2 className="text-xs lg:text-base font-Bold ">
                  {section.title}
                </h2>
              </div>
              <div className="ps-2 flex flex-col gap-3 lg:gap-6 pb-4 lg:border-b-2 border-grayLight px-4 lg:px-7 last-of-type:border-none last-of-type:pb-0 lg:last-of-type:pb-5">
                {section.items.map((item, itemIndex) => {
                  if (typeof item === "string") {
                    return (
                      <p
                        className=" ps-3 lg:ps-7 text-sm lg:text-xl font-Regular "
                        key={itemIndex}
                      >
                        {item}
                      </p>
                    );
                  } else if (item.assessments) {
                    return (
                      <div
                        key={itemIndex}
                        className="mt-2 border-b-2 pb-5 border-grayLight last-of-type:border-none last-of-type:pb-0"
                      >
                        {item.category && (
                          <h4 className="ps-3 lg:ps-6 text-sm lg:text-xl font-Regular">
                            {item.category}
                          </h4>
                        )}

                        <ul className="list-none flex flex-col gap-3 lg:gap-4 mt-2 ">
                          {item.assessments.map((assessment, i) => (
                            <li
                              key={i}
                              className="flex justify-between items-center mt-2"
                            >
                              <h5 className="ps-5 lg:ps-10 text-sm lg:text-xl font-Regular">
                                {assessment.name}
                              </h5>
                              <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
                                <span
                                  className={` size-4 min-w-4 rounded-full block bg-greenMain`}
                                ></span>
                                <p>{assessment.level}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  } else {
                    return (
                      <li
                        key={itemIndex}
                        className="flex ps-3 lg:ps-7 justify-between items-center"
                      >
                        <p className=" text-sm lg:text-xl font-Regular">
                          {item.name}
                        </p>
                        {item.tag && (
                          <span className="px-2 lg:px-3 py-1 text-xs lg:text-base font-Bold rounded-xl bg-blueLight">
                            {item.tag}
                          </span>
                        )}
                        {item.score !== undefined && (
                          <div className="flex items-center gap-2">
                            <p className="text-xs lg:text-base font-Bold">
                              Score:
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="flex items-center justify-center bg-[#FFF2F2] px-3 lg:px-5 py-1 text-xs lg:text-base font-Bold rounded-xl">
                                {" "}
                                {item.score}
                              </p>
                              <p className="flex items-center justify-center bg-[#FFF2F2] px-3 lg:px-5 py-1 text-xs lg:text-base font-Bold rounded-xl">
                                {item.status}
                              </p>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mx-1 lg:mx-8 my-3 flex flex-col gap-3 lg:gap-5  lg:border-2 border-blueLight rounded-xl lg:py-4 ">
        <div className=" border-2 lg:!border-b-2 border-grayLight rounded-xl lg:rounded-none   mb-1 lg:mb-0 py-3 lg:py-0">
          <div className="flex items-center gap-2 lg:gap-4 mb-4 px-4 lg:px-7">
            <ArrowSolidIcon className={"h-auto w-2 lg:w-[13px] min-w-2"} />
            <h2 className="text-xs lg:text-base font-Bold ">Recommendations</h2>
          </div>
          <h3 className="text-xs lg:text-base font-Bold px-4 lg:px-10 ">
            Choose the recommendations you want to show to the client based on .
            You can select more than one recommendation
          </h3>
          <div>
            <div className=" flex flex-col gap-5 lg:gap-8 mt-6 lg:mt-8  mb-4 px-4 lg:px-7">
              {data.map((author, index) => (
                <div key={index}>
                  <Checkbox
                    color="#10B0C1"
                    checked={author.checked}
                    size={phoneSize ? "xs" : "sm"}
                    onChange={() => handleCheckboxChange(index)}
                    label={
                      <h4 className="text-sm lg:text-xl ">
                        <span className="font-Bold"> Written by:</span>{" "}
                        {author.name} ({author.title})
                      </h4>
                    }
                    classNames={{
                      inner: "lg:mt-1",
                    }}
                   
                  />
                  <div>
                    {author.description.map((desc, descIndex) => (
                      <h4 key={descIndex} className="text-sm lg:text-xl ">
                        {desc}
                      </h4>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t py-3 lg:py-14 border-grayLight flex items-center gap-4 px-2 lg:px-10    border-2 lg:!border-b-2 rounded-xl lg:rounded-none">
          <h3 className="text-xs lg:text-base font-Bold">Notes :</h3>
          <Textarea
            autosize
            placeholder="Write here ...."
            onChange={() => {}}
            className="flex-1 min-w-[300px]  ms-4 "
            classNames={{
              input: "bg-grayLight text-sm lg:text-base h-14 text-start",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Diagnostic;
