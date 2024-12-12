import { Accordion } from "@/components/accordion";
import Card from "@/components/card";
import React from "react";
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
function page() {
  return (
    <Card>
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
                              : "bg-greenMain text-white"
                          }  font-Bold text-xs mdl:text-base flex items-center justify-center`}
                        >
                          {item.status}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}

export default page;
