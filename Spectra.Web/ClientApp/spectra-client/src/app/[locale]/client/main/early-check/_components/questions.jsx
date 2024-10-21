'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export const Questions = ({
  discription = '',
  questions = [],
  onSelect = () => {},
}) => {
  const [answers, setAnswers] = useState({});

  // Handle selection of an answer
  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
    onSelect?.(Object.values(updatedAnswers));
  };

  return (
    <div className='border-[3px] border-greenMain/20 rounded-lg'>
      {/* DISCRIPTION */}
      <h2 className='text-sm mdl:text-xl font-bold p-3'>
        {discription}
      </h2>

      {/* SEPARATOR */}
      <div className='h-0.5 bg-greenMain/20 w-full' />

      {/* QUESTIONS */}
      <ul>
        {questions.map((question, index) => (
          <li
            className={cn(
              'relative pt-6 w-full ps-7 before:absolute before:top-7 mdl:before:top-8 before:start-3 before:size-[10px] before:bg-greenMain before:rounded-full',
              {
                'after:absolute after:hidden mdl:after:block after:top-[38px] after:start-[16px] after:w-[2px] after:h-[calc(100%-6px)] after:bg-greenMain':
                  index !== questions.length - 1,
              }
            )}
            key={question?.id}
          >
            <div className='border-b-2 pb-6 border-grayLight w-full flex gap-x-3 gap-y-5 flex-wrap'>
              <div className='text-xs mdl:text-base font-bold'>
                {question?.ques}
              </div>
              <div className='flex flex-wrap gap-y-5 gap-x-3'>
                {question?.chooices?.map(
                  (choice, index) => (
                    <label
                      htmlFor={`${question?.id}${index}`}
                      key={choice?.value}
                    >
                      <input
                        type='radio'
                        id={`${question?.id}${index}`}
                        name={`question-${question?.id}`}
                        value={choice?.value}
                        className='peer hidden'
                        onChange={() =>
                          handleSelect(
                            question?.id,
                            choice?.value
                          )
                        }
                      />

                      <div
                        role='button'
                        className={cn(
                          'border-2 text-xs -mt-2 block border-blueLight rounded-xl pe-8 ps-3 py-1 mdl:text-base font-normal relative before:absolute before:size-3 before:text-[10px] before:font-extrabold before:bg-grayDark/50 before:end-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:content-[""] peer-checked:bg-greenMain peer-checked:text-white peer-checked:before:bg-white peer-checked:font-bold peer-checked:before:bg-[url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwcHgiIHdpZHRoPSIxMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCgl4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPGcgaWQ9ImNoZWNrIj4NCgkJCTxnPg0KCQkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxMEIwQzE7Ig0KCQkJCQlwb2ludHM9IjExLjk0MSwyOC44NzcgMCwxNi45MzUgNS42OTUsMTEuMjQgMTEuOTQxLDE3LjQ4NiAyNi4zMDUsMy4xMjMgMzIsOC44MTgiIC8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=")] before:bg-center before:bg-no-repeat before:flex before:items-center before:justify-center before:text-greenMain'
                        )}
                      >
                        {choice?.label}
                      </div>
                    </label>
                  )
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
