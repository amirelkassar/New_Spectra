"use client";
import { Accordion } from "@/components/accordion";
import LevelDisplay from "@/components/LevelDisplay";
import Levels from "@/components/levels";
import React, { useState } from "react";

function FollowUp() {
  const [Impression, setImpression] = useState([
    {
      id: 1,
      name: "Autism",
      questions: [
        { id: 1, name: "Social skills", score: 0, showState: false },
        { id: 2, name: "ADLs skills", score: 0, showState: false },
        { id: 3, name: "Communication", score: 0, showState: false },
        { id: 4, name: "Behavioral", score: 0, showState: false },
        { id: 5, name: "Cognition", score: 0, showState: false },
        { id: 6, name: "Academical", score: 0, showState: false },
      ],
    },
    {
      id: 2,
      name: "ADHD",
      questions: [
        { id: 1, name: "Attention", score: 0, showState: false },
        { id: 2, name: "Hyperactivity", score: 0, showState: false },
        { id: 3, name: "ODD", score: 0, showState: false },
        { id: 4, name: "Academical", score: 0, showState: false },
        { id: 5, name: "Social", score: 0, showState: false },
      ],
    },
    {
      id: 3,
      name: "Others if applicable",
      questions: [
        { id: 1, name: "Self esteem", score: 0, showState: false },
        { id: 2, name: "Communication, social", score: 0, showState: false },
        { id: 3, name: "Emotional stability", score: 0, showState: false },
        { id: 4, name: "Anxiety", score: 0, showState: false },
        { id: 5, name: "Confident", score: 0, showState: false },
        { id: 6, name: "School performance", score: 0, showState: false },
      ],
    },
  ]);
  const [Satisfaction, setSatisfaction] = useState(0);
  const handleChange = (e, impressionId, questionId) => {
    const value = Math.min(10, Math.max(0, parseInt(e.target.value, 10) || 0)); // Ensure value stays between 0 and 10

    setImpression((prev) =>
      prev.map((impression) =>
        impression.id === impressionId
          ? {
              ...impression,
              questions: impression.questions.map((question) =>
                question.id === questionId
                  ? { ...question, score: value, showState: true }
                  : question
              ),
            }
          : impression
      )
    );
  };
  const handleChangeSatisfaction = (e) => {
    const value = Math.min(10, Math.max(0, parseInt(e.target.value, 10) || 0));
    setSatisfaction(value);
  };
  return (
    <div className="mb-3">
      <div dir="ltr">
        <h2 className="text-xs lg:text-base font-Bold my-4 lg:my-5">
          Level of improvement: 1-10
        </h2>
        <Levels />
        <div className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-8">
          {Impression.map((impressionOne, index) => {
            return (
              <Accordion key={index} classNames={{ content: "px-0 " }}>
                <Accordion.Item value={impressionOne.name}>
                  <Accordion.Label> {impressionOne.name}</Accordion.Label>
                  <Accordion.Content>
                    <ul className="mt-4">
                      {impressionOne.questions.map((item, idx) => (
                        <li
                          className="text-xs px-2 lg:px-4 odd:bg-grayDark/10 flex-wrap flex gap-x-5 items-center gap-y-2 mdl:gap-y-3 mdl:gap-x-10 mdl:text-base py-4 border-b border-grayLight last-of-type:border-none"
                          key={idx}
                        >
                          <div className="flex items-center gap-2 flex-wrap ">
                            <h3 className=" text-xs mdl:text-base min-w-[174px]">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                value={item.score}
                                onChange={(e) =>
                                  handleChange(e, impressionOne.id, item.id)
                                }
                                className="text-center border-greenMain bg-transparent border outline-none rounded-xl flex items-center justify-center w-[146px]"
                              />
                              <p className="text-xs mdl:text-base font-Regular">
                                /10
                              </p>
                            </div>
                          </div>
                          {item.showState && (
                            <LevelDisplay score={item.score} />
                          )}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            );
          })}
          <div className="flex items-center gap-3 flex-wrap lg:ps-4">
            <h3 className=" text-xs font-Bold mdl:text-base min-w-[174px]">
              Level of satisfaction from caregiver 1-10
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={Satisfaction}
                onChange={(e) => handleChangeSatisfaction(e)}
                className="text-center border-greenMain bg-transparent border outline-none rounded-xl flex items-center justify-center w-[146px]"
              />
              <p className="text-xs mdl:text-base font-Regular">/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUp;
