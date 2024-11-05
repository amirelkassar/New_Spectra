'use client';

import { useState } from 'react';

import { SurveyForm } from '@/components/swyc/survey-form';

export const Survey = ({ data = {} }) => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };

  return (
    <SurveyForm>
      <SurveyForm.Description>
        تدور هذه الأسئلة حول مراحل تطور طفلك. يُرجى إخبارنا
        بمعدل قيام طفلك بهذه الأشياء. إذا توقف طفلك عن فعل
        شيء ما، فاختر الإجابة التي تصف معدل اعتياد طفلك على
        فعل هذه الأشياء. يُرجى التأكد من الإجابة عن جميع
        الأسئلة
      </SurveyForm.Description>
      <SurveyForm.Body>
        <SurveyForm.Title>
          مراحل التطور الأساسية
        </SurveyForm.Title>

        <ul>
          {data?.twoMonths?.map((question) => (
            <SurveyForm.QuestionLi key={question?.id}>
              <SurveyForm.Question>
                <SurveyForm.QuestionLabel>
                  {question?.ar}؟
                </SurveyForm.QuestionLabel>
                <SurveyForm.Answers>
                  <SurveyForm.SingleAnswer
                    name={`${question?.id}`}
                    value='0'
                    checked={answers[question?.id] === 0}
                    onChange={() =>
                      handleSelect(question?.id, 0)
                    }
                  >
                    ليس بعد
                  </SurveyForm.SingleAnswer>
                  <SurveyForm.SingleAnswer
                    name={`${question?.id}`}
                    value='1'
                    checked={answers[question?.id] === 1}
                    onChange={() =>
                      handleSelect(question?.id, 1)
                    }
                  >
                    إلى حد ما
                  </SurveyForm.SingleAnswer>
                  <SurveyForm.SingleAnswer
                    name={`${question?.id}`}
                    value='2'
                    checked={answers[question?.id] === 2}
                    onChange={() =>
                      handleSelect(question?.id, 2)
                    }
                  >
                    كثيرا للغاية
                  </SurveyForm.SingleAnswer>
                </SurveyForm.Answers>
              </SurveyForm.Question>
            </SurveyForm.QuestionLi>
          ))}
        </ul>
      </SurveyForm.Body>
    </SurveyForm>
  );
};
