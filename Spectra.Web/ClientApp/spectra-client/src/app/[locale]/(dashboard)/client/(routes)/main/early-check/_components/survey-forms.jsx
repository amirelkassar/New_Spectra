'use client';

import { useSurvey } from '../_hooks/use-survey';
import { Survey } from './survey';

export const SurveyForms = ({
  forms = {},
  dateOfBirth = '2024-01-01',
}) => {
  const { surveyData } = useSurvey({ forms, dateOfBirth });

  if (!surveyData) return <p>Loading...</p>;

  if (!surveyData.length) return <p>No data</p>;

  return <Survey data={surveyData} />;
};
