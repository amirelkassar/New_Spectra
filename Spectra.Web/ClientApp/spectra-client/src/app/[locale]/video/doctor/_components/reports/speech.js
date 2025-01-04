'use client';
import { Accordion } from '@/components/accordion';
import TextInput from '@/components/inputs/text-input';
import { Textarea } from '@/components/inputs/textarea';
import LevelDisplay from '@/components/LevelDisplay';
import Levels from '@/components/levels';
import { SurveyForm } from '@/components/swyc/survey-form';
import React, { useState } from 'react';
import AccordionReport from './AccordionReport';
const DataAll = [
  {
    id: 1,
    title: 'OME',
    other: true,
    questions: [
      {
        id: 1,
        ar: 'Facial Symmetry',
        en: 'Facial Symmetry',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 2,
        ar: 'Lips',
        en: 'Lips',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 3,
        ar: 'Tongue',
        en: 'Tongue',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 4,
        ar: 'Hard Palate',
        en: 'Hard Palate',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 5,
        ar: 'Soft Palate',
        en: 'Soft Palate',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 6,
        ar: 'Teeth',
        en: 'Teeth',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Pre-communication skills',
    other: true,
    questions: [
      {
        id: 7,
        ar: 'Cooperation',
        en: 'Cooperation',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 8,
        ar: 'Attention',
        en: 'Attention',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 9,
        ar: 'Eye contact',
        en: 'Eye contact',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },

      {
        id: 4545,
        ar: 'Imitation',
        en: 'Imitation',
        haveText: false, // Add the boolean key
        type: 'nested',
        allQuestion: [
          {
            id: 11,
            ar: 'Verbal ',
            en: 'Verbal',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
          {
            id: 12,
            ar: 'Nonverbal',
            en: 'Nonverbal',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
        ],
      },
      {
        id: 4546,
        ar: 'Playing  skills',
        en: 'Playing  skills',
        haveText: false, // Add the boolean key
        type: 'nested',
        allQuestion: [
          {
            id: 13,
            ar: 'Symbolic ',
            en: 'Symbolic',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
          {
            id: 14,
            ar: 'Imaginative',
            en: 'Imaginative',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
        ],
      },
      {
        id: 4547,
        ar: 'Joint  attention',
        en: 'Joint  attention',
        haveText: false, // Add the boolean key
        type: 'nested',
        allQuestion: [
          {
            id: 15,
            ar: 'Initiation ',
            en: 'Initiation',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
          {
            id: 16,
            ar: 'Responding',
            en: 'Responding',
            haveText: true, // Add the boolean key
            options: [
              { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
              { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
              {
                id: 3,
                ar: 'Good',
                en: 'Good',
                value: 'Good',
              },
            ],
          },
        ],
      },
      {
        id: 17,
        ar: 'Social interaction',
        en: 'Social interaction',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Non-verbal communication',
    other: true,
    questions: [
      {
        id: 11,
        ar: 'Facial expressions',
        en: 'Facial expressions',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 12,
        ar: 'Pointing',
        en: 'Pointing',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 13,
        ar: 'Gestures',
        en: 'Gestures',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
      {
        id: 14,
        ar: 'AAC',
        en: 'AAC',
        haveText: true,
        options: [
          { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
          { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
          { id: 3, ar: ' Good', en: ' Good', value: ' Good' },
        ],
      },
    ],
  },
];
function Speech() {
  const [Verbal] = useState([
    {
      id: 1,
      ar: 'Recognizing name ',
      en: 'Recognizing name',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 2,
      ar: 'Following simple commands',
      en: 'Following simple commands',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 3,
      ar: 'Following complex commands',
      en: 'Following complex commands',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 4,
      ar: 'Phonology awareness',
      en: 'Phonology awareness',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 5,
      ar: 'Semantic',
      en: 'Semantic',
      haveText: true, // Add the boolean key
      type: 'nested',
      allQuestion: [
        {
          id: 111,
          ar: 'Family members ',
          en: 'Family members',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 211,
          ar: 'Nouns',
          en: 'Nouns',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 213,
          ar: 'Verbs',
          en: 'Verbs',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 214,
          ar: 'Adjectives',
          en: 'Adjectives',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 215,
          ar: 'Prepositions',
          en: 'Prepositions',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      ar: 'Understanding yes /no  questions',
      en: 'Understanding yes /no  questions',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 7,
      ar: 'Understanding Wh  questions',
      en: 'Understanding Wh  questions',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 8,
      ar: 'Engaging in simple  conversations',
      en: 'Engaging in simple  conversations',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 9,
      ar: 'Phonology process',
      en: 'Phonology process',
      haveText: false, // Add the boolean key
      options: [
        { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
        { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
        {
          id: 3,
          ar: 'Good',
          en: 'Good',
          value: 'Good',
        },
      ],
    },
    {
      id: 10,
      ar: 'Semantic',
      en: 'Semantic',
      haveText: true, // Add the boolean key
      type: 'nested',
      allQuestion: [
        {
          id: 111,
          ar: 'Family members ',
          en: 'Family members',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 211,
          ar: 'Nouns',
          en: 'Nouns',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 213,
          ar: 'Verbs',
          en: 'Verbs',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 214,
          ar: 'Adjectives',
          en: 'Adjectives',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 215,
          ar: 'Prepositions',
          en: 'Prepositions',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
        {
          id: 216,
          ar: 'Pronouns',
          en: 'Pronouns',
          haveText: true, // Add the boolean key
          options: [
            { id: 1, ar: 'Poor', en: 'Poor', value: 'Poor' },
            { id: 2, ar: 'Fair', en: 'Fair', value: 'Fair' },
            {
              id: 3,
              ar: 'Good',
              en: 'Good',
              value: 'Good',
            },
          ],
        },
      ],
    },
  ]);
  const [answers, setAnswers] = useState({});
  const handleSelect = (questionId, value) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: value,
    };
    setAnswers(updatedAnswers);
  };

  const [Impression, setImpression] = useState([
    { id: 1, name: 'ADLs', score: 0, showState: false },
    { id: 2, name: 'Attention', score: 0, showState: false },
    {
      id: 3,
      name: 'Cognitive abilities',
      score: 0,
      showState: false,
    },
    { id: 4, name: 'Play skills', score: 0, showState: false },
    { id: 5, name: 'Social skills', score: 0, showState: false },
    { id: 6, name: 'Preschool skills', score: 0, showState: false },
    { id: 7, name: 'Academical skills', score: 0, showState: false },
    {
      id: 8,
      name: 'Sensory integration',
      score: 0,
      showState: false,
    },
    {
      id: 9,
      name: 'VMI/ Fine motor skills',
      score: 0,
      showState: false,
    },
    {
      id: 10,
      name: 'Unwanted behaviors',
      score: 0,
      showState: false,
    },
  ]);
  const handelChange = (e, id) => {
    const value = Math.min(
      10,
      Math.max(0, parseInt(e.target.value, 10) || 0)
    ); // Ensure value stays between 0 and 10
    setImpression((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, score: value, showState: true }
          : item
      )
    );
  };
  return (
    <div dir='ltr' className='my-4 flex flex-col gap-5'>
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

      <Accordion classNames={{ content: 'px-0 ' }}>
        <Accordion.Item value={'Verbal Communication'}>
          <Accordion.Label>Verbal Communication</Accordion.Label>
          <Accordion.Content>
            <SurveyForm className='!p-0'>
              <SurveyForm.Body className=' border-none'>
                <ul>
                  {Verbal?.map((question) =>
                    question.type !== 'nested' ? (
                      <SurveyForm.QuestionLi
                        key={question?.id}
                        className=' after:!hidden before:hidden pb-0 ps-6 '
                      >
                        <SurveyForm.Question>
                          <SurveyForm.QuestionLabel className='!font-Regular min-w-[100px] lg:min-w-[130px]'>
                            {question?.ar}
                          </SurveyForm.QuestionLabel>

                          <SurveyForm.Answers>
                            {question.options.map((singleAns, j) => {
                              return (
                                <SurveyForm.SingleAnswer
                                  key={j}
                                  name={`${question?.id}`}
                                  value={singleAns.value}
                                  checked={
                                    answers[question?.id] ===
                                    singleAns.value
                                  }
                                  onChange={() =>
                                    handleSelect(
                                      question?.id,
                                      singleAns.value
                                    )
                                  }
                                >
                                  {singleAns.en}
                                </SurveyForm.SingleAnswer>
                              );
                            })}
                          </SurveyForm.Answers>

                          {question.haveText && (
                            <TextInput
                              className='flex-1 min-w-[300px]  ms-4'
                              inputClassName={'bg-grayLight/50 h-9'}
                            />
                          )}
                        </SurveyForm.Question>
                      </SurveyForm.QuestionLi>
                    ) : (
                      <div key={question?.id} className='px-3'>
                        <SurveyForm.QuestionLabel>
                          {question?.ar}
                        </SurveyForm.QuestionLabel>
                        {question.allQuestion.map((subQuestion) => (
                          <SurveyForm.QuestionLi
                            key={subQuestion?.id}
                            className='  pb-0 ps-6 '
                          >
                            <SurveyForm.Question>
                              <SurveyForm.QuestionLabel className='!font-Regular min-w-[100px] lg:min-w-[130px]'>
                                {subQuestion?.ar}
                              </SurveyForm.QuestionLabel>

                              <SurveyForm.Answers>
                                {subQuestion.options.map(
                                  (singleAns, j) => {
                                    return (
                                      <SurveyForm.SingleAnswer
                                        key={j}
                                        name={`${subQuestion?.id}`}
                                        value={singleAns.value}
                                        checked={
                                          answers[subQuestion?.id] ===
                                          singleAns.value
                                        }
                                        onChange={() =>
                                          handleSelect(
                                            subQuestion?.id,
                                            singleAns.value
                                          )
                                        }
                                      >
                                        {singleAns.en}
                                      </SurveyForm.SingleAnswer>
                                    );
                                  }
                                )}
                              </SurveyForm.Answers>

                              {subQuestion.haveText && (
                                <TextInput
                                  className='flex-1 min-w-[300px]  ms-4'
                                  inputClassName={
                                    'bg-grayLight/50 h-9'
                                  }
                                />
                              )}
                            </SurveyForm.Question>
                          </SurveyForm.QuestionLi>
                        ))}
                      </div>
                    )
                  )}
                </ul>
              </SurveyForm.Body>
            </SurveyForm>
            <div className='flex gap-3 p-3'>
              <h3>Additional notes</h3>
              <Textarea className='flex-1 min-w-[300px]  ms-4' />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Accordion classNames={{ content: 'px-0 ' }}>
        <Accordion.Item value={'Impression'}>
          <Accordion.Label>Impression</Accordion.Label>
          <Accordion.Content>
            <Levels />
            <ul className='mt-4'>
              {Impression.map((item, idx) => (
                <li
                  className='text-xs px-2 lg:px-4 odd:bg-grayDark/10 flex-wrap flex gap-x-5 items-center gap-y-2 mdl:gap-y-3 mdl:gap-x-10 mdl:text-base py-4 border-b border-grayLight last-of-type:border-none'
                  key={idx}
                >
                  <div className='flex items-center gap-2 flex-wrap '>
                    <h3 className=' text-xs mdl:text-base min-w-[174px]'>
                      {item.name}
                    </h3>
                    <div className='flex items-center gap-2'>
                      <input
                        type='number'
                        value={item.score}
                        onChange={(e) => handelChange(e, item.id)}
                        className='text-center border-greenMain bg-transparent border outline-none rounded-xl flex items-center justify-center w-[146px]'
                      />
                      <p className='text-xs mdl:text-base font-Regular'>
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
            <div className='flex gap-3 p-3'>
              <h3>other </h3>
              <Textarea className='flex-1 min-w-[300px]  ms-4' />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Speech;
