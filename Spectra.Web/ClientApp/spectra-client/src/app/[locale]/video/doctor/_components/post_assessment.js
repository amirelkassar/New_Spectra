import { Accordion } from "@/components/accordion";
import Button from "@/components/button";
import Levels from "@/components/levels";
import { SurveyForm } from "@/components/swyc/survey-form";
import React, { useState } from "react";

// Component to display the level based on score ranges
function LevelDisplay({ score }) {
  const getLevelView = (score) => {
    if (score >= 0 && score <= 2) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span className={` size-4 min-w-4 rounded-full block bg-red`}></span>
          <p>Severe</p>
        </div>
      );
    } else if (score > 2 && score <= 4) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-purple`}
          ></span>{" "}
          <p>Moderate</p>
        </div>
      );
    } else if (score > 4 && score <= 7) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-black`}
          ></span>
          <p>Mild</p>
        </div>
      );
    } else if (score > 7 && score <= 10) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-greenMain`}
          ></span>
          <p>Normal</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{getLevelView(score)}</>;
}

function PostAssessment() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };
  const [Impression, setImpression] = useState([
    { id: 1, name: "ADLs", score: 0, showState: false },
    { id: 2, name: "Attention", score: 0, showState: false },
    { id: 3, name: "Cognitive abilities", score: 0, showState: false },
    { id: 4, name: "Play skills", score: 0, showState: false },
    { id: 5, name: "Social skills", score: 0, showState: false },
    { id: 6, name: "Preschool skills", score: 0, showState: false },
    { id: 7, name: "Academical skills", score: 0, showState: false },
    { id: 8, name: "Sensory integration", score: 0, showState: false },
    { id: 9, name: "VMI/ Fine motor skills", score: 0, showState: false },
    { id: 10, name: "Unwanted behaviors", score: 0, showState: false },
  ]);

  const handelChange = (e, id) => {
    const value = Math.min(10, Math.max(0, parseInt(e.target.value, 10) || 0)); // Ensure value stays between 0 and 10
    setImpression((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, score: value, showState: true } : item
      )
    );
  };

  return (
    <div>
      <div dir="ltr">
        <Accordion classNames={{ content: "px-0 " }}>
          <Accordion.Item value={"Impression/ level of delay"}>
            <Accordion.Label>Impression/ level of delay</Accordion.Label>
            <Accordion.Content>
              <Levels />
              <ul className="mt-4">
                {Impression.map((item, idx) => (
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
                          onChange={(e) => handelChange(e, item.id)}
                          className="text-center border-greenMain bg-transparent border outline-none rounded-xl flex items-center justify-center w-[146px]"
                        />
                        <p className="text-xs mdl:text-base font-Regular">
                          /10
                        </p>
                      </div>
                    </div>
                    {item.showState && <LevelDisplay score={item.score} />}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <SurveyForm>
          <SurveyForm.Body className="border-none">
            <SurveyForm.Title className="border-none text-sm mdl:text-base">
              Willingness of parents to get the intervention/ rehabilitation
              sessions
            </SurveyForm.Title>

            <ul>
              <SurveyForm.QuestionLi className="border-none before:hidden px-0 ps-0 ">
                <SurveyForm.Question className="border-none">
                  <SurveyForm.Answers>
                    <SurveyForm.SingleAnswer
                      name={`not welling`}
                      value="0"
                      checked={answers === 0}
                      onChange={() => setAnswers(0)}
                    >
                      not welling
                    </SurveyForm.SingleAnswer>
                    <SurveyForm.SingleAnswer
                      name={`low`}
                      value="1"
                      checked={answers === 1}
                      onChange={() => setAnswers(1)}
                    >
                      low
                    </SurveyForm.SingleAnswer>
                    <SurveyForm.SingleAnswer
                      name={`average`}
                      value="2"
                      checked={answers === 2}
                      onChange={() => setAnswers(2)}
                    >
                      average
                    </SurveyForm.SingleAnswer>
                    <SurveyForm.SingleAnswer
                      name={` high welling`}
                      value="1"
                      checked={answers === 3}
                      onChange={() => setAnswers(3)}
                    >
                      high welling
                    </SurveyForm.SingleAnswer>
                  </SurveyForm.Answers>
                </SurveyForm.Question>
              </SurveyForm.QuestionLi>
            </ul>
          </SurveyForm.Body>
        </SurveyForm>
      </div>
      <Button
        variant="secondary"
        className="max-w-[294px] w-full mx-auto mb-3 mt-10"
      >
        حفظ
      </Button>
    </div>
  );
}

export default PostAssessment;
